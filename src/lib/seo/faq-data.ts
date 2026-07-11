/**
 * FAQ content used by both the rendered FAQ accordion on the landing
 * page AND the FAQPage JSON-LD emitted for rich-result eligibility
 * on search engines. Single source so they never drift.
 */
export interface FaqItem {
  q: string
  a: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Dois-je avoir mon propre acces WhatsApp Business API ?',
    a: 'Oui. Kamtech CRM se branche sur votre installation Meta WhatsApp Business existante — vous fournissez le numero et le jeton d acces, nous fournissons l outil CRM autour. N importe quel fournisseur approuve par Meta fonctionne.',
  },
  {
    q: 'Toute mon equipe peut-elle partager un seul numero WhatsApp ?',
    a: 'Oui. Assignez les conversations a des agents specifiques, suivez qui repond a quoi et transferez les fils sans perdre le contexte. Tous vos agents travaillent depuis une seule boite de reception partagee.',
  },
  {
    q: 'Combien de temps prend l installation ?',
    a: 'La plupart des equipes sont operationnelles en moins de 30 minutes une fois le numero WhatsApp Business approuve par Meta. Collez vos identifiants dans les parametres, importez vos contacts si vous en avez, et commencez a repondre.',
  },
  {
    q: 'A qui appartiennent les donnees ?',
    a: 'A vous. Tout vit dans votre propre projet Supabase — contacts, conversations, deals, logs d automatisation. Exportez-les a tout moment ; il n y a pas d enfermement sur la couche de donnees.',
  },
  {
    q: 'Puis-je envoyer des messages en masse et des reponses automatiques ?',
    a: 'Oui. Les diffusions envoient des modeles approuves par Meta a des listes de contacts segmentees avec suivi de livraison. Les automatisations executent des flux sans code declenches par les nouveaux contacts, mots-cles, changements d etiquettes et plus encore.',
  },
  {
    q: 'Comment fonctionnent les modeles de message ?',
    a: 'Les modeles que vous creez dans Meta sont synchronises automatiquement. Utilisez-les depuis la boite de reception, les diffusions ou a l interieur d une etape d automatisation.',
  },
]
