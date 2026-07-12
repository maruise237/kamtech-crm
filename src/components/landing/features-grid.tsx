import {
  MessageSquare,
  Users,
  GitBranch,
  Radio,
  Zap,
  LineChart,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { Section, SectionHeader } from './section'

interface Feature {
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
  tint: string
}

// Intentionally six — more than that becomes a feature list, less
// feels thin. Copy is benefit-first ("never miss a lead") rather
// than feature-first ("notifications").
const FEATURES: Feature[] = [
  {
    title: 'Boîte de réception partagée',
    description:
      'Toutes les conversations WhatsApp au même endroit. Assignez, répondez en équipe et ne perdez plus de prospect.',
    icon: MessageSquare,
    tint: 'text-blue-400 bg-blue-500/10',
  },
  {
    title: 'Fichier client',
    description:
      'Tags, champs personnalisés, notes et dédoublonnage. Importez vos contacts depuis un CSV.',
    icon: Users,
    tint: 'text-violet-400 bg-violet-500/10',
  },
  {
    title: 'Pipelines de vente',
    description:
      'Drag deals through stages. See what is won, what is slipping, and where revenue is stuck.',
    icon: GitBranch,
    tint: 'text-violet-400 bg-violet-500/10',
  },
  {
    title: 'Campagnes broadcast',
    description:
      'Send Meta-approved templates to segmented lists. Track delivery, reads, and replies in real time.',
    icon: Radio,
    tint: 'text-amber-400 bg-amber-500/10',
  },
  {
    title: 'Automatisations sans code',
    description:
      'Welcome new contacts, chase unanswered replies, route leads by keyword. Visual flow builder.',
    icon: Zap,
    tint: 'text-rose-400 bg-rose-500/10',
  },
  {
    title: 'Analytics en temps reel',
    description:
      'Response times, daily volume, pipeline value. See what is working without building dashboards.',
    icon: LineChart,
    tint: 'text-cyan-400 bg-cyan-500/10',
  },
]

export function FeaturesGrid() {
  return (
    <Section id="features">
      <SectionHeader
        eyebrow="Everything you need"
        title="One toolkit for your WhatsApp business"
        description="Stop stitching together an inbox, a spreadsheet, and a broadcast tool. Kamtech CRM brings them together — and talks to WhatsApp natively."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => {
          const Icon = f.icon
          return (
            <div
              key={f.title}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-colors hover:border-slate-700 hover:bg-slate-900/70"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${f.tint}`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">
                {f.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                {f.description}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
