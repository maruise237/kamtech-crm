import type { Metadata } from 'next'

import { LandingNav } from '@/components/landing/nav'
import { Hero } from '@/components/landing/hero'
import { FeaturesGrid } from '@/components/landing/features-grid'
import { HowItWorks } from '@/components/landing/how-it-works'
import { FeatureSpotlight } from '@/components/landing/feature-spotlight'
import { FAQ } from '@/components/landing/faq'
import { OpenSource } from '@/components/landing/open-source'
import { CtaBanner } from '@/components/landing/cta-banner'
import { Footer } from '@/components/landing/footer'
import { InboxMock } from '@/components/landing/mock/inbox-mock'
import { PipelineMock } from '@/components/landing/mock/pipeline-mock'
import { AutomationMock } from '@/components/landing/mock/automation-mock'
import { AnalyticsMock } from '@/components/landing/mock/analytics-mock'
import { JsonLd } from '@/components/seo/json-ld'
import { landingPageLd } from '@/lib/seo/structured-data'
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from '@/lib/seo/site-config'

// Landing-specific metadata. Most fields are inherited from the root
// layout's metadata — we override title (so the hero copy shows in
// SERPs / tab titles) and set an explicit canonical for "/" to avoid
// trailing-slash duplicate-content signals.
export const metadata: Metadata = {
  title: {
    absolute: `${SITE_NAME} — ${SITE_TAGLINE}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
}

// Marketing landing. Visible at / for everyone (auth redirect that
// used to send anonymous visitors to /login was removed). Authed users
// still see this page; the nav swaps its CTA to "Go to Dashboard".
export default function LandingPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      {/* JSON-LD — WebSite, Organization, SoftwareApplication, FAQPage.
          Emitted before any visible content so crawlers hit it first. */}
      <JsonLd data={landingPageLd()} />
      <LandingNav />
      <main>
        <Hero />

        <FeaturesGrid />

        <FeatureSpotlight
          anchorId="inbox"
          eyebrow="Boite partagee"
          title="Ne perdez plus aucune conversation WhatsApp"
          body="Toute votre equipe travaille depuis une seule boite. Les conversations peuvent etre assignees, taguees et transferees sans perdre le contexte. Les mises a jour en temps reel evitent les doublons de reponse."
          bullets={[
            'Assignez les conversations a un agent ou a toute l equipe',
            'Ajoutez des notes internes invisibles pour le client',
            'Reperez les messages non lus et les urgences',
            'Ouvrez chaque conversation depuis le dashboard',
          ]}
          visual={<InboxMock />}
        />

        <HowItWorks />

        <FeatureSpotlight
          anchorId="automations"
          eyebrow="Automatisations no-code"
          title="Automatisez les relances, gardez l humain au centre"
          body="Creez des scenarios qui reagissent aux evenements WhatsApp: accueil des nouveaux contacts, relance des reponses en attente, routage par mot-cle. Conditions, delais, tags et opportunites se pilotent visuellement."
          bullets={[
            'Declencheurs pour messages, contacts, tags, mots-cles et horaires',
            'Actions: message, template, tag, opportunite, webhook et plus',
            'Branches conditionnelles et delais pour des relances naturelles',
            'Logs par execution pour comprendre chaque automatisation',
          ]}
          reverse
          visual={<AutomationMock />}
        />

        <FeatureSpotlight
          anchorId="pipelines"
          eyebrow="Pipelines de vente"
          title="Transformez les conversations en chiffre d affaires"
          body="Deplacez les opportunites dans vos etapes, reliez-les aux contacts et voyez ou les ventes ralentissent. Chaque deal garde son fil WhatsApp a portee de clic."
          bullets={[
            'Pipelines et etapes personnalisables',
            'Tableau Kanban avec glisser-deposer',
            'Valeur totale par etape et par pipeline',
            'Contacts, conversations et notes lies a chaque deal',
          ]}
          visual={<PipelineMock />}
        />

        <FeatureSpotlight
          anchorId="analytics"
          eyebrow="Analytics en temps reel"
          title="Voyez ce qui fonctionne vraiment"
          body="Temps de reponse, volume quotidien, valeur du pipeline et activite commerciale. Le dashboard Kamtech indique ou concentrer l attention sans tableur supplementaire."
          bullets={[
            'Conversations actives, nouveaux contacts et valeur ouverte en direct',
            'Evolution des conversations sur 7, 30 ou 90 jours',
            'Temps moyen de premiere reponse par jour',
            'Flux d activite fusionne: messages, deals, campagnes, automatisations',
          ]}
          reverse
          visual={<AnalyticsMock />}
        />

        <OpenSource />

        <FAQ />

        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
