# Depannage

## `ENCRYPTION_KEY must be 64 hex chars`

La cle est absente ou invalide. Generez-la avec :

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Supabase ne charge pas les donnees

Verifiez :

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- les migrations SQL
- les policies RLS

## Le webhook WhatsApp renvoie 401

Verifiez `META_APP_SECRET`, le Verify Token et l URL de rappel configuree dans Meta.

## Les messages ne partent pas

Controlez le `Phone Number ID`, le jeton d acces permanent, le WABA ID et les permissions Meta.

## Les modeles ne sont pas trouves

Synchronisez les modeles depuis Meta dans Parametres -> Modeles de message. Le nom et la langue doivent correspondre exactement a Meta.

## Le build Docker echoue sur `/app/docs`

Le dossier `docs/` doit etre inclus dans le contexte Docker. Ne l excluez pas dans `.dockerignore`.

## Le port 3000 est deja utilise sur Dokploy

Le Compose doit utiliser `expose: "3000"` au lieu de `ports: "3000:3000"`, afin que Traefik route vers le conteneur sans reserver le port hote.