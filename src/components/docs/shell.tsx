"use client"

import { useState, type ReactNode } from 'react'
import Link from 'next/link'
import { Menu, X, MessageSquare } from 'lucide-react'
import { DocsSidebar } from './sidebar'
import type { DocPage } from '@/lib/docs/content'

interface DocsShellProps {
  pages: DocPage[]
  children: ReactNode
}

export function DocsShell({ pages, children }: DocsShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeMobile = () => setMobileOpen(false)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-slate-800 hover:text-white lg:hidden"
              aria-label={mobileOpen ? 'Fermer le menu de documentation' : 'Ouvrir le menu de documentation'}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="Kamtech CRM home"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500">
                <MessageSquare className="h-4 w-4 text-white" />
              </span>
              <span className="text-sm font-semibold text-white">
                Kamtech CRM
              </span>
              <span className="hidden rounded-md border border-slate-700 bg-slate-900 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:inline-block">
                Docs
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-1.5">
            <Link
              href="/"
              className="hidden rounded-lg px-3 py-1.5 text-sm text-slate-300 transition-colors hover:bg-slate-800 hover:text-white sm:inline-flex"
            >
              Accueil
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-lg bg-violet-500 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-violet-400"
            >
              Demarrer
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl gap-8 px-4 sm:px-6">
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 flex-shrink-0 overflow-y-auto py-10 pr-2 lg:block">
          <DocsSidebar pages={pages} />
        </aside>

        {mobileOpen && (
          <div className="fixed inset-0 top-16 z-30 flex lg:hidden">
            <div
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={closeMobile}
              aria-hidden
            />
            <div className="relative ml-0 mr-auto flex h-full w-72 max-w-[85vw] flex-col overflow-y-auto border-r border-slate-800 bg-slate-950 px-4 py-6">
              <DocsSidebar pages={pages} onNavigate={closeMobile} />
            </div>
          </div>
        )}

        <main className="min-w-0 flex-1 py-10">{children}</main>
      </div>

      <footer className="mt-10 border-t border-slate-800 bg-slate-950">
        <div className="mx-auto w-full max-w-7xl px-4 py-6 text-xs leading-relaxed text-slate-600 sm:px-6">
          WhatsApp&reg; is a registered trademark of Meta Platforms, Inc.
          Hostinger is not affiliated with, endorsed by, or sponsored by
          Meta Platforms, Inc.
        </div>
      </footer>
    </div>
  )
}
