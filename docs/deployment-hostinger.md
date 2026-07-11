# Deploiement sur Hostinger

Cette page garde l alternative Hostinger si vous ne passez pas par Dokploy.

## 1. Preparer le depot

Poussez le projet sur avec `package.json`, `package-lock.json`, `next.config.ts`, `src/`, `public/`, `docs/` et `supabase/`.

## 2. Creer l application Node.js

Dans Hostinger Managed Node.js :

- Selectionnez le depot.
- Branche : `main`.
- Version Node : 20 ou plus.
- Commande d installation : `npm ci`.
- Commande de build : `npm run build`.
- Commande de demarrage : `npm start`.
- Port : `3000`.

## 3. Variables d environnement

Ajoutez toutes les variables de [environment-variables.md](./environment-variables.md). Les variables `NEXT_PUBLIC_*` sont lues pendant le build : rebuild obligatoire apres modification.

## 4. Domaine

Configurez `NEXT_PUBLIC_SITE_URL` avec l URL publique finale, sans slash final. Ajoutez cette meme URL dans Supabase Authentication -> URL Configuration.

## 5. Cron

Si vous utilisez les etapes d attente des automatisations, planifiez :

```bash
curl -s -H "x-cron-secret: <AUTOMATION_CRON_SECRET>" https://<votre-domaine>/api/automations/cron > /dev/null
```

## 6. Verification

Apres deploiement :

- ouvrez la page d accueil ;
- connectez-vous ;
- testez Supabase ;
- testez la connexion WhatsApp ;
- envoyez un message entrant pour verifier le webhook.