# Modele CRM pour WhatsApp

> CRM auto-heberge pour WhatsApp : boite de reception partagee, contacts, pipelines de vente, diffusions et automatisations sans code. Forkez-le, adaptez votre marque et deployez-le.

[![Licence : MIT](https://img.shields.io/badge/License-MIT-violet.svg)](./LICENSE)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)](https://nextjs.org)
[![Supabase](https://img.shields.io/badge/Supabase-Postgres%20%2B%20Auth-3ecf8e?logo=supabase)](https://supabase.com)

## Ce que vous obtenez

- **Boite de reception partagee** sur l API officielle WhatsApp Business : plusieurs agents sur un meme numero, assignation par conversation, statuts et notes.
- **Contacts, etiquettes et champs personnalises**, import CSV et deduplication.
- **Pipelines de vente** en Kanban avec opportunites liees aux conversations.
- **Diffusions** via des modeles approuves par Meta, suivi de livraison/lecture et variables par destinataire.
- **Automatisations sans code** : messages entrants, nouveaux contacts, mots-cles, planification, conditions, attentes, etiquettes et webhooks.
- **Tableau de bord en temps reel** : temps de reponse, volume quotidien, valeur du pipeline et activite recente.
- **Gestion du compte** : e-mail, mot de passe, avatar et deconnexion globale.

## Pourquoi utiliser ce modele ?

C est un **modele**, pas un SaaS ferme. Vous gardez le code, le projet Supabase, le domaine et les donnees. Vous pouvez ajouter vos champs, retirer les modules inutiles et personnaliser l interface. La stack reste simple : Next.js, Supabase et Tailwind.

## Demarrage rapide

```bash
git clone git@github.com:maruise237/kamtech-crm.git
cd kamtech-crm
npm install
cp .env.local.example .env.local
npm run dev
```

Ouvrez <http://localhost:3000>.

La configuration complete se trouve dans [`docs/`](./docs/README.md).

## Documentation

**Configuration**
- [Demarrage](./docs/getting-started.md)
- [Configuration Supabase](./docs/supabase-setup.md)
- [Configuration WhatsApp](./docs/whatsapp-setup.md)
- [Variables d environnement](./docs/environment-variables.md)

**Deploiement**
- [Deploiement Dokploy](./docs/deployment-dokploy.md)
- [Deploiement Hostinger](./docs/deployment-hostinger.md)
- [Cron des automatisations](./docs/automations-and-cron.md)

**Reference**
- [Architecture](./docs/architecture.md)
- [Depannage](./docs/troubleshooting.md)

## Stack

- **Application** : Next.js 16, React 19, TypeScript, Tailwind v4.
- **Donnees** : Supabase avec Postgres, Auth, Storage et RLS.
- **WhatsApp** : Meta Cloud API, l API officielle WhatsApp Business.

## Licence

[MIT](./LICENSE). Forkez, adaptez votre marque et deployez.