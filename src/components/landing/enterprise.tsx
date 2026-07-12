import Link from 'next/link'
import { Mail, Shield, Headphones } from 'lucide-react'
import { Section, SectionHeader } from './section'

export function Enterprise() {
  return (
    <Section id="enterprise">
      <SectionHeader
        eyebrow="Entreprise"
        title="Un CRM adapte a vos besoins"
        description="Vous avez des besoins specifiques ? Hebergement dedie, integration sur mesure, volume important : notre equipe vous accompagne."
      />
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-3">
        <div className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400"><Shield className="h-5 w-5" /></div>
          <h3 className="mt-4 text-base font-semibold text-white">Hebergement dedie</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-400">Deployez Kamtech CRM sur votre propre infrastructure ou profitez de notre hebergement securise.</p>
        </div>
        <div className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400"><Headphones className="h-5 w-5" /></div>
          <h3 className="mt-4 text-base font-semibold text-white">Accompagnement personnalise</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-400">Installation, configuration, formation equipe et support prioritaire.</p>
        </div>
        <div className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400"><Mail className="h-5 w-5" /></div>
          <h3 className="mt-4 text-base font-semibold text-white">Contactez-nous</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-400">Discutons de votre projet. Devis gratuit, reponse sous 24h.</p>
          <a href="mailto:contact@kamtech.cm" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 hover:text-violet-300">Nous ecrire &rarr;</a>
        </div>
      </div>
    </Section>
  )
}
