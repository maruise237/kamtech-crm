# Configuration Supabase

## 1. Creer un projet

1. Ouvrez [Supabase](https://supabase.com).
2. Creez un nouveau projet.
3. Notez l URL du projet et les cles API dans Project Settings -> API.

## 2. Variables a recuperer

- `NEXT_PUBLIC_SUPABASE_URL` : Project URL.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` : cle anon/public.
- `SUPABASE_SERVICE_ROLE_KEY` : cle service_role. Gardez-la secrete.

## 3. Appliquer les migrations

Les fichiers SQL sont dans `supabase/migrations/`. Appliquez-les dans l ordre avec la CLI Supabase ou via l editeur SQL.

```bash
supabase link --project-ref <project-ref>
supabase db push
```

## 4. Authentification

Dans Authentication -> URL Configuration, ajoutez l URL locale et l URL de production :

- `http://localhost:3000`
- `https://votre-domaine.com`

## 5. Stockage

La migration `008_profile_avatars_storage.sql` cree le bucket des avatars. Verifiez que les policies RLS sont bien appliquees.

## 6. Verification

Lancez l application, creez un compte et confirmez que le profil se cree correctement. Si les donnees ne s affichent pas, verifiez les variables et les policies RLS.