# Cron des automatisations

Certaines automatisations utilisent des etapes d attente. Pour les reprendre au bon moment, un cron doit appeler regulierement :

```text
GET /api/automations/cron
```

## Protection

Si `AUTOMATION_CRON_SECRET` est defini, envoyez-le dans l en-tete :

```bash
curl -s -H "x-cron-secret: <AUTOMATION_CRON_SECRET>" https://crm.example.com/api/automations/cron > /dev/null
```

## Frequence conseillee

Une execution chaque minute est un bon compromis :

```cron
* * * * * curl -s -H "x-cron-secret: <AUTOMATION_CRON_SECRET>" https://crm.example.com/api/automations/cron > /dev/null
```

## Dokploy

Vous pouvez creer une tache cron externe ou utiliser un service de ping. L important est que l URL publique de l application soit accessible.