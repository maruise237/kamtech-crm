import { Plug, Users, Zap } from 'lucide-react'
import { Section, SectionHeader } from './section'

const STEPS = [
  {
    num: '01',
    icon: Plug,
    title: 'Connectez votre numero WhatsApp',
    body:
      'Renseignez votre ID telephone et votre jeton d acces Meta. Compatible avec tout fournisseur WhatsApp Business API approuve par Meta.',
  },
  {
    num: '02',
    icon: Users,
    title: 'Importez vos contacts',
    body:
      'Importez un CSV, ou laissez les messages entrants creer votre liste de contacts automatiquement. Les etiquettes et champs personnalises sont prets des le depart.',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Repondez, automatisez, mesurez',
    body:
      'Utilisez la boite de reception partagee avec votre equipe, creez des flux pour les taches recurrentes et suivez ce qui fait vraiment la difference dans vos analytics.',
  },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeader
        eyebrow="Comment ca marche"
        title="Operationnel en quelques minutes"
        description="La plupart des equipes sont operationnelles en quelques minutes. Aucun appel d onboarding requis."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {STEPS.map((s) => {
          const Icon = s.icon
          return (
            <div
              key={s.num}
              className="relative rounded-xl border border-slate-800 bg-slate-900/40 p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                  <Icon className="h-5 w-5" />
                </div>
                <span
                  className="text-xl font-bold tracking-tight text-slate-800 tabular-nums"
                  aria-hidden
                >
                  {s.num}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                {s.body}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
