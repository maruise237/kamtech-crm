import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'
import ts from 'typescript'

async function loadCurrencyModule() {
  const sourcePath = new URL('../src/lib/currency.ts', import.meta.url)
  const source = fs.readFileSync(sourcePath, 'utf8')
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022,
    },
    fileName: 'currency.ts',
  })
  return import(`data:text/javascript;charset=utf-8,${encodeURIComponent(outputText)}`)
}

test('formats CRM money in FCFA by default', async () => {
  const { DEFAULT_CURRENCY, formatCurrency } = await loadCurrencyModule()

  assert.equal(DEFAULT_CURRENCY, 'XAF')
  assert.match(formatCurrency(1234567).replace(/\s+/g, ' '), /1 234 567 FCFA/)
})

test('formats compact CRM money in FCFA by default', async () => {
  const { formatCurrencyCompact } = await loadCurrencyModule()

  assert.equal(formatCurrencyCompact(1200000), '1.2M FCFA')
  assert.equal(formatCurrencyCompact(12500), '12.5k FCFA')
  assert.equal(formatCurrencyCompact(900), '900 FCFA')
})
