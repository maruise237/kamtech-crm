# Architecture

## Vue d ensemble

Kamtech CRM est une application Next.js App Router connectee a Supabase et a l API officielle Meta Cloud API pour WhatsApp Business.

## Dossiers principaux

| Dossier | Role |
| --- | --- |
| `src/app` | Routes, pages et API Next.js. |
| `src/components` | Composants React de l interface. |
| `src/lib` | Clients, logique metier, automatisations et helpers. |
| `src/hooks` | Hooks React reutilisables. |
| `supabase/migrations` | Schema SQL et evolutions de base. |
| `docs` | Documentation affichee dans l application. |

## Flux d une conversation WhatsApp

1. Meta envoie un evenement au webhook `/api/whatsapp/webhook`.
2. La signature est verifiee avec `META_APP_SECRET`.
3. Le contact et la conversation sont retrouves ou crees.
4. Le message est insere dans Supabase.
5. L interface se met a jour via realtime.
6. Les automatisations eligibles peuvent se declencher.

## Securite

- RLS Supabase sur les tables utilisateur.
- Cle service-role uniquement cote serveur.
- Jetons WhatsApp chiffres avec `ENCRYPTION_KEY`.
- Webhooks Meta verifies par HMAC.
- Rate limiting sur les routes sensibles.

## Deploiement Docker

Le `Dockerfile` produit une image Next.js standalone. `docker-compose.yml` expose le port interne `3000` pour Dokploy/Traefik sans reserver le port hote.