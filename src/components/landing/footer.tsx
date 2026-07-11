import Link from 'next/link'
import { MessageSquare } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-5">
        <div className="col-span-2 sm:col-span-2">
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
          </Link>
          <p className="mt-3 max-w-sm text-sm text-slate-500">
            La plateforme Kamtech pour centraliser WhatsApp, contacts,
            pipelines, campagnes et automatisations.
          </p>
        </div>

        <FooterColumn
          title="Produit"
          links={[
            { href: '#features', label: 'Fonctionnalites' },
            { href: '#how-it-works', label: 'Comment ca marche' },
            { href: '#faq', label: 'FAQ' },
          ]}
        />

        <FooterColumn
          title="Ressources"
          links={[
            { href: '#self-host', label: 'Deploiement' },
            { href: '/docs', label: 'Docs' },
            {
              href: 'https://www.hostinger.com/web-apps-hosting',
              label: 'Deployer sur Hostinger',
              external: true,
            },
          ]}
        />

        <FooterColumn
          title="Compte"
          links={[
            { href: '/signup', label: 'Demarrer' },
            { href: '/login', label: 'Connexion' },
            { href: '/forgot-password', label: 'Mot de passe oublie' },
          ]}
        />
      </div>

      <div className="border-t border-slate-900">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-3 px-6 py-5 text-xs text-slate-500 sm:flex-row sm:items-center">
          <span>&copy; {year} Kamtech CRM. Tous droits reserves.</span>
          <span>Connecte a l API officielle WhatsApp Business.</span>
        </div>
        <div className="mx-auto w-full max-w-7xl px-6 pb-5 text-xs leading-relaxed text-slate-600">
          WhatsApp&reg; is a registered trademark of Meta Platforms, Inc.
          Hostinger is not affiliated with, endorsed by, or sponsored by
          Meta Platforms, Inc.
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { href: string; label: string; external?: boolean }[]
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) =>
          l.external ? (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ) : (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}
