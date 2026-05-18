import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs/shell'
import { listDocs } from '@/lib/docs/content'

export const metadata: Metadata = {
  title: {
    template: '%s — Kamtech CRM Docs',
    default: 'Kamtech CRM Docs',
  },
  description:
    'Documentation de configuration, personnalisation et deploiement de Kamtech CRM.',
}

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await listDocs()
  return <DocsShell pages={pages}>{children}</DocsShell>
}
