# Demarrage

Lancez le projet en local en quelques minutes. Ce guide suppose que Node.js 20+ et npm sont installes.

## 1. Cloner le depot

```bash
cd kamtech-crm
```

## 2. Installer les dependances

```bash
npm install
```

## 3. Creer le fichier d environnement

```bash
cp .env.local.example .env.local
```

Renseignez au minimum `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Les fonctionnalites WhatsApp exigent aussi les variables Supabase, Meta et chiffrement.

## 4. Configurer Supabase

Suivez [supabase-setup.md](./supabase-setup.md), puis revenez ici quand l URL, la cle anon et la cle service-role sont dans `.env.local`.

## 5. Generer la cle de chiffrement

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copiez la valeur dans `ENCRYPTION_KEY`. Ne la changez pas apres le premier deploiement, sinon les jetons deja chiffres deviendront illisibles.

## 6. Lancer le serveur local

```bash
npm run dev
```

Ouvrez <http://localhost:3000>.

- Creez un compte dans `/signup`.
- Apres connexion, vous arrivez sur `/dashboard`.
- Les modules restent vides tant qu aucun numero WhatsApp n est connecte.

## Commandes utiles

| Commande | Role |
| --- | --- |
| `npm run dev` | Serveur de developpement sur `:3000`. |
| `npm run build` | Build de production. |
| `npm start` | Lance le build de production. |
| `npm run lint` | Analyse ESLint. |

## Etape suivante

[Configuration Supabase ->](./supabase-setup.md)