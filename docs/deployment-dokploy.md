# Déployer sur Dokploy avec Docker Compose

Le projet contient maintenant un `Dockerfile` de production et un
`docker-compose.yml` prêt pour Dokploy.

## 1. Pousser le projet sur Git

Dokploy a besoin des fichiers source, car le Compose utilise `build: .`.
Commitez et poussez au minimum ces fichiers avec le reste de l'application :

- `Dockerfile`
- `.dockerignore`
- `docker-compose.yml`
- `next.config.ts`

## 2. Créer le service Compose

Dans Dokploy :

1. Créez ou ouvrez un projet.
2. Ajoutez un service **Compose**.
3. Connectez le dépôt Git et la branche.
4. Utilisez `docker-compose.yml` comme fichier Compose.
5. Configurez le domaine vers le port `3000`.

## 3. Configurer les variables d'environnement

Copiez les variables de `dokploy.env.example` dans le panneau
d'environnement de Dokploy.

Important : `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
et `NEXT_PUBLIC_SITE_URL` sont utilisées pendant le build Docker. Après
les avoir modifiées, il faut rebuild/redéployer le service Compose.

## 4. Déployer

Déployez le service Compose. L'application écoute sur le port `3000`, et
le proxy Traefik de Dokploy doit router votre domaine vers ce port.

Si vous utilisez les étapes d'attente des automatisations, planifiez une
requête cron vers :

```bash
curl -s -H "x-cron-secret: <AUTOMATION_CRON_SECRET>" https://<your-domain>/api/automations/cron > /dev/null
```
