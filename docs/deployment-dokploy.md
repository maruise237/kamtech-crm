# Deployer sur Dokploy avec Docker Compose

Le projet contient un `Dockerfile` de production et un `docker-compose.yml` pret pour Dokploy.

## 1. Pousser le projet sur Git

Dokploy recupere les sources depuis GitHub, car le Compose utilise `build: .`.

## 2. Creer le service Compose

Dans Dokploy :

1. Ouvrez ou creez un projet.
2. Ajoutez un service **Compose**.
3. Connectez le depot `git@github.com:maruise237/kamtech-crm.git`.
4. Utilisez `docker-compose.yml`.
5. Configurez le domaine vers le port interne `3000`.

## 3. Variables d environnement

Copiez les variables de `dokploy.env.example` dans Dokploy. Les variables `NEXT_PUBLIC_*` sont utilisees pendant le build Docker, donc il faut rebuild apres modification.

## 4. Deployer

Lancez le deploiement. Le service expose le port interne `3000`; Dokploy/Traefik gere le routage public.

## 5. Cron optionnel

```bash
curl -s -H "x-cron-secret: <AUTOMATION_CRON_SECRET>" https://<votre-domaine>/api/automations/cron > /dev/null
```