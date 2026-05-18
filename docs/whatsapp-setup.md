# Configuration WhatsApp

## 1. Creer une application Meta

1. Allez sur [Meta for Developers](https://developers.facebook.com).
2. Creez une application de type Business.
3. Ajoutez le produit WhatsApp.
4. Associez votre compte WhatsApp Business.

## 2. Recuperer les identifiants

Dans WhatsApp -> API Setup, copiez :

- `Phone Number ID`
- `WhatsApp Business Account ID`
- un jeton d acces permanent

Dans l application, ouvrez Parametres -> WhatsApp et renseignez ces valeurs.

## 3. Configurer le webhook

Dans Meta, ouvrez WhatsApp -> Configuration :

- URL de rappel : `https://votre-domaine.com/api/whatsapp/webhook`
- Verify token : le meme jeton que dans l application
- Champs a abonner : `messages`

`META_APP_SECRET` doit etre configure dans les variables d environnement. Sans lui, le webhook refuse les requetes entrantes.

## 4. Securite des jetons

Les jetons WhatsApp sont chiffres avec `ENCRYPTION_KEY`. Ne changez pas cette cle apres avoir connecte un compte WhatsApp, sinon il faudra ressaisir les identifiants.

## 5. Test

Dans Parametres -> WhatsApp, utilisez le bouton de test de connexion. Ensuite envoyez un message au numero connecte et verifiez qu il apparait dans la boite de reception.