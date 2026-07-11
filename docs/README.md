# Documentation

Ce CRM WhatsApp auto-heberge est construit avec Next.js et Supabase. Cette documentation vous accompagne depuis le depot Git jusqu au deploiement en production.

## Ordre de lecture

**Configuration**

1. **[Demarrage](./getting-started.md)** : installer le projet et le lancer en local.
2. **[Configuration Supabase](./supabase-setup.md)** : creer la base, appliquer les migrations et recuperer les cles.
3. **[Configuration WhatsApp](./whatsapp-setup.md)** : creer l application Meta, connecter un numero et configurer le webhook.
4. **[Variables d environnement](./environment-variables.md)** : reference complete.

**Deploiement**

5. **[Deploiement Dokploy](./deployment-dokploy.md)** : deploiement avec Docker Compose.
6. **[Deploiement Hostinger](./deployment-hostinger.md)** : alternative Managed Node.js.
7. **[Cron des automatisations](./automations-and-cron.md)** : relancer les etapes d attente.

**Reference**

8. **[Architecture](./architecture.md)** : stack, dossiers et cycle des requetes.
9. **[Depannage](./troubleshooting.md)** : erreurs frequentes et corrections.

## Prerequis

- Un projet [Supabase](https://supabase.com).
- Un compte [Meta for Developers](https://developers.facebook.com) avec une application WhatsApp Business.
- Un numero WhatsApp non lie a l application mobile WhatsApp classique.
- Un serveur Dokploy, Hostinger ou tout hebergeur Node.js 20+.

## Stack en bref

- **Frontend / API** : Next.js 16, React 19, Tailwind v4.
- **Base + auth + stockage** : Supabase avec Postgres et RLS.
- **Transport WhatsApp** : Meta Cloud API officielle.
- **Chiffrement** : AES-256-GCM pour les jetons WhatsApp.
- **Planification** : cron ou ping regulier vers `GET /api/automations/cron`.