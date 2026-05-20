"use client"

import Link from 'next/link'
import { UserPlus, Briefcase, Radio, Zap } from 'lucide-react'
import type { ComponentType } from 'react'

// Quick-action shortcuts. Each navigates to the page that owns the
// relevant "create" flow. We deliberately don't try to auto-open any
// modal on the target page - that'd require touching those pages,
// which is out of scope here.
interface Action {
  label: string
  href: string
  icon: ComponentType<{ className?: string }>
  tint: string
}

const ACTIONS: Action[] = [
  { label: 'Nouveau contact', href: '/contacts', icon: UserPlus, tint: 'text-primary' },
  { label: 'Nouvelle opportunite', href: '/pipelines', icon: Briefcase, tint: 'text-blue-400' },
  { label: 'Nouvelle diffusion', href: '/broadcasts/new', icon: Radio, tint: 'text-amber-400' },
  { label: 'Nouvelle automatisation', href: '/automations/new', icon: Zap, tint: 'text-cyan-300' },
]

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {ACTIONS.map((a) => {
        const Icon = a.icon
        return (
          <Link
            key={a.href}
            href={a.href}
            className="group crm-panel flex min-h-16 items-center gap-3 px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-secondary ring-1 ring-border/70 ${a.tint}`}>
              <Icon className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium leading-5 text-foreground">{a.label}</span>
          </Link>
        )
      })}
    </div>
  )
}
