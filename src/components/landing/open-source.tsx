import Link from 'next/link'
import { ArrowRight, BookOpen, Server } from 'lucide-react'
import { Section, SectionHeader } from './section'

const HOSTINGER_URL = 'https://www.hostinger.com/web-apps-hosting'

export function OpenSource() {
  return (
    <Section id="self-host">
      <SectionHeader
        eyebrow="Deploiement"
        title="Votre CRM, vos donnees, votre infrastructure"
        description="Kamtech CRM est pret pour un deploiement maitrise: code personnalisable, Supabase pour les donnees, et hebergement Node.js pour garder le controle de votre outil commercial."
      />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
        <Link
          href="/docs"
          className="group flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-colors hover:border-slate-700 hover:bg-slate-900/70"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-100">
            <BookOpen className="h-5 w-5" />
          </div>
          <h3 className="mt-4 text-base font-semibold text-white">
            Documentation complete
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
            Suivez le guide de demarrage rapide pour configurer votre CRM,
            connecter votre instance WhatsApp et personnaliser l interface.
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 transition-colors group-hover:text-violet-300">
            Lire la documentation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>

        <a
          href={HOSTINGER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-xl border border-violet-500/20 bg-slate-900/40 p-6 transition-colors hover:border-violet-500/40 hover:bg-slate-900/70"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
            <Server className="h-5 w-5" />
          </div>
          <h3 className="mt-4 flex flex-wrap items-center gap-2 text-base font-semibold text-white">
            Deploiement accompagne
            <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-400">
              Recommande
            </span>
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
            Connectez le projet a un hebergement Node.js, configurez les
            variables d environnement et lancez votre CRM avec une base saine.
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 transition-colors group-hover:text-violet-300">
            Hebergement Node.js
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </a>
      </div>

      <div className="mx-auto mt-6 flex max-w-5xl items-center justify-center">
        <Link
          href="/docs"
          className="group inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/40 px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-700 hover:bg-slate-900/70 hover:text-white"
        >
          <BookOpen className="h-4 w-4 text-violet-400" />
          Lire la documentation
          <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-200" />
        </Link>
      </div>
    </Section>
  )
}
