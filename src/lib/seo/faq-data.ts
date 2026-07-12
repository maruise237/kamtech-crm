export interface FaqItem {
  q: string
  a: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Dois-je avoir mon propre acces WhatsApp Business API ?',
    a: 'Oui. Kamtech CRM se branche sur votre installation Meta WhatsApp Business existante. N importe quel fournisseur approuve par Meta fonctionne.',
  },
  {
    q: 'Toute mon equipe peut-elle partager un seul numero WhatsApp ?',
    a: 'Oui. Assignez les conversations a des agents, suivez qui repond et transferez les fils sans perdre le contexte.',
  },
  {
    q: 'Combien de temps prend l installation ?',
    a: 'La plupart des equipes sont operationnelles en moins de 30 minutes une fois le WhatsApp Business approuve par Meta.',
  },
  {
    q: 'A qui appartiennent les donnees ?',
    a: 'A vous. Tout vit dans votre propre projet Supabase. Exportez-les a tout moment.',
  },
  {
    q: 'Puis-je envoyer des messages en masse ?',
    a: 'Oui. Les diffusions envoient des modeles approuves par Meta avec suivi de livraison.',
  },
]
