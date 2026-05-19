export const DEFAULT_CURRENCY = 'XAF'
export const DEFAULT_LOCALE = 'fr-CM'

export const CURRENCY_OPTIONS = [
  { value: 'XAF', label: 'FCFA' },
  { value: 'EUR', label: 'EUR' },
  { value: 'USD', label: 'USD' },
  { value: 'GBP', label: 'GBP' },
] as const

export type SupportedCurrency = (typeof CURRENCY_OPTIONS)[number]['value']

export function normalizeCurrency(currency?: string | null): string {
  return currency?.trim().toUpperCase() || DEFAULT_CURRENCY
}

export function formatCurrency(
  value: number | string | null | undefined,
  currency?: string | null,
): string {
  const amount = Number(value || 0)
  const code = normalizeCurrency(currency)

  return new Intl.NumberFormat(DEFAULT_LOCALE, {
    style: 'currency',
    currency: code,
    currencyDisplay: code === DEFAULT_CURRENCY ? 'narrowSymbol' : 'symbol',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatCurrencyCompact(
  value: number | string | null | undefined,
  currency?: string | null,
): string {
  const amount = Number(value || 0)
  const abs = Math.abs(amount)
  const suffix = normalizeCurrency(currency) === DEFAULT_CURRENCY
    ? 'FCFA'
    : normalizeCurrency(currency)

  if (abs >= 1_000_000) return `${trimDecimal(amount / 1_000_000)}M ${suffix}`
  if (abs >= 1_000) return `${trimDecimal(amount / 1_000)}k ${suffix}`
  return `${Math.round(amount).toLocaleString(DEFAULT_LOCALE)} ${suffix}`
}

function trimDecimal(value: number): string {
  return value.toFixed(1).replace(/\.0$/, '')
}
