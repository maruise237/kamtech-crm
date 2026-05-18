# Variables d environnement

Toute la configuration se fait dans `.env.local` en developpement et dans les variables d environnement de l hebergeur en production.

## Obligatoires

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | URL du projet Supabase. Publique. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Cle anon/public Supabase. Publique, protegee par RLS. |
| `SUPABASE_SERVICE_ROLE_KEY` | Cle service-role Supabase. Secrete. |
| `ENCRYPTION_KEY` | Cle hex de 64 caracteres pour chiffrer les jetons WhatsApp. |
| `META_APP_SECRET` | Secret de l application Meta pour verifier les signatures webhook. |

## Recommandee

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique canonique, par exemple `https://crm.example.com`. |

## Facultative

| Variable | Description |
| --- | --- |
| `AUTOMATION_CRON_SECRET` | Secret partage pour proteger `GET /api/automations/cron`. |

## Exemple

```bash
NEXT_PUBLIC_SUPABASE_URL=https://abcd1234.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...
META_APP_SECRET=abcdef0123456789...
ENCRYPTION_KEY=3f9c0a7e4d8b2f1a6c5e8d4b9f0a2c6e8d4b9f0a2c6e8d4b9f0a2c6e8d4b9f0a
NEXT_PUBLIC_SITE_URL=https://crm.example.com
AUTOMATION_CRON_SECRET=une-longue-valeur-aleatoire
```

## Checklist securite

- Ne commitez jamais `.env.local`.
- Configurez les secrets dans Dokploy ou dans l hebergeur.
- Regénérez `SUPABASE_SERVICE_ROLE_KEY` si elle fuit.
- Gardez `ENCRYPTION_KEY` stable apres le premier deploiement.