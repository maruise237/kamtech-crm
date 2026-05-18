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
    title: 'Boite de reception partagee',
    description:
      'Toutes les conversations WhatsApp au meme endroit. Assignez, repondez en equipe et ne perdez plus de prospect.',
    icon: MessageSquare,
    tint: 'text-blue-400 bg-blue-500/10',
  },
  {
    title: 'Fichier client',
    description:
      'Tags, champs personnalises, notes et dedoublonnage. Importez vos contacts existants depuis un CSV.',
    icon: Users,
    tint: 'text-violet-400 bg-violet-500/10',
  },
  {
    title: 'Pipelines de vente',
    description:
      'Faites avancer vos opportunites par etape et reperez vite ce qui bloque le chiffre d affaires.',
    icon: GitBranch,
    tint: 'text-violet-400 bg-violet-500/10',
  },
  {
    title: 'Campagnes broadcast',
    description:
      'Envoyez des modeles approuves par Meta a des segments precis. Suivez livraisons, lectures et reponses.',
    icon: Radio,
    tint: 'text-amber-400 bg-amber-500/10',
  },
  {
    title: 'Automatisations no-code',
    description:
      'Accueillez les nouveaux contacts, relancez les messages sans reponse et routez les leads par mot-cle.',
    icon: Zap,
    tint: 'text-rose-400 bg-rose-500/10',
  },
  {
    title: 'Analytics en temps reel',
    description:
      'Temps de reponse, volume quotidien, valeur du pipeline. Voyez ce qui fonctionne sans construire de tableaux.',
    icon: LineChart,
    tint: 'text-cyan-400 bg-cyan-500/10',
  },
]

export function FeaturesGrid() {
  return (
    <Section id="features">
      <SectionHeader
        eyebrow="Tout pour vendre mieux"
        title="Kamtech CRM rassemble votre activite WhatsApp"
        description="Remplacez l assemblage boite de reception, tableur et outil de diffusion par une plateforme claire, connectee a WhatsApp et pensee pour votre equipe."
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
