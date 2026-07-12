import type { Metadata } from 'next'

import { LandingNav } from '@/components/landing/nav'
import { Hero } from '@/components/landing/hero'
import { FeaturesGrid } from '@/components/landing/features-grid'
import { HowItWorks } from '@/components/landing/how-it-works'
import { FeatureSpotlight } from '@/components/landing/feature-spotlight'
import { FAQ } from '@/components/landing/faq'
import { Enterprise } from '@/components/landing/enterprise'
import { CtaBanner } from '@/components/landing/cta-banner'
import { Footer } from '@/components/landing/footer'
import { InboxMock } from '@/components/landing/mock/inbox-mock'
import { PipelineMock } from '@/components/landing/mock/pipeline-mock'
import { AutomationMock } from '@/components/landing/mock/automation-mock'
import { AnalyticsMock } from '@/components/landing/mock/analytics-mock'

export const metadata: Metadata = {
  title: 'Kamtech CRM — Gérez votre activité WhatsApp depuis un seul espace',
  description: 'Boîte de réception partagée, contacts, pipelines de vente, campagnes et automatisations sans code pour WhatsApp. Basé sur l\'API officielle WhatsApp Business.',
}

export default function LandingPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <LandingNav />
      <main>
        <Hero />
        <FeaturesGrid />

        <FeatureSpotlight
          anchorId="inbox"
          eyebrow="Boîte partagée"
          title="Ne perdez plus aucune conversation WhatsApp"
          body="Toute votre équipe travaille depuis une seule boîte. Les conversations peuvent être assignées, taguées et transférées sans perdre le contexte."
          bullets={[
            'Assignez les conversations à un agent ou à toute l\'équipe',
            'Ajoutez des notes internes invisibles pour le client',
            'Repérez les messages non lus et les urgences',
          ]}
          visual={<InboxMock />}
        />

        <HowItWorks />

        <FeatureSpotlight
          anchorId="automations"
          eyebrow="Automatisations sans code"
          title="Automatisez les relances, gardez l\'humain au centre"
          body="Créez des scénarios qui réagissent aux événements WhatsApp : accueil des nouveaux contacts, relance des réponses en attente, routage par mot-clé."
          bullets={[
            'Déclencheurs pour messages, contacts, tags, mots-clés et horaires',
            'Actions : message, template, tag, opportunité, webhook',
            'Branches conditionnelles et délais pour des relances naturelles',
            'Logs par exécution pour comprendre chaque automatisation',
          ]}
          reverse
          visual={<AutomationMock />}
        />

        <FeatureSpotlight
          anchorId="pipelines"
          eyebrow="Pipelines de vente"
          title="Transformez les conversations en chiffre d\'affaires"
          body="Déplacez les opportunités dans vos étapes, reliez-les aux contacts et voyez où les ventes ralentissent."
          bullets={[
            'Pipelines et étapes personnalisables',
            'Tableau Kanban avec glisser-déposer',
            'Valeur totale par étape et par pipeline',
            'Contacts, conversations et notes liés à chaque deal',
          ]}
          visual={<PipelineMock />}
        />

        <FeatureSpotlight
          anchorId="analytics"
          eyebrow="Analytics en temps réel"
          title="Voyez ce qui fonctionne vraiment"
          body="Temps de réponse, volume quotidien, valeur du pipeline et activité commerciale."
          bullets={[
            'Conversations actives, nouveaux contacts et valeur ouverte en direct',
            'Évolution des conversations sur 7, 30 ou 90 jours',
            'Temps moyen de première réponse par jour',
            'Flux d\'activité fusionné : messages, deals, campagnes, automatisations',
          ]}
          reverse
          visual={<AnalyticsMock />}
        />

        <Enterprise />
        <FAQ />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
