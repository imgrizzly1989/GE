# ERREURS TECHNIQUES — Garden Expresse

## Commandes exécutées

```bash
pwd
# /mnt/c/Users/PC/Desktop/WEBSITE GE/GE

git status --short --branch
git branch --show-current && git branch -a
git remote -v
git log --oneline -10
```

## Erreurs Git

```text
fatal: not a git repository (or any parent up to mount point /mnt)
Stopping at filesystem boundary (GIT_DISCOVERY_ACROSS_FILESYSTEM not set).
```

**Gravité : Critique**  
Le dossier demandé n'est pas reconnu comme dépôt Git. Aucun remote, aucune branche et aucun historique ne peuvent être vérifiés depuis cet emplacement.

## Dépendances / scripts

- `package.json` absent.
- `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock` absents.
- Aucun gestionnaire de paquets projet détecté.
- Aucun script `build`, `lint`, `typecheck`, `test` détecté.

Résultats :

```text
NO package.json; static HTML project; no package scripts
NO build script/package.json
NO lint script/package.json
NO typecheck script/package.json
NO test script/package.json
```

## Serveur local

Commande :

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Pages testées localement : toutes `200`.

## Build production

Aucun build n'existe. Pour ce projet statique, le "build" équivaut à servir les fichiers HTML/CSS/JS tels quels. Il n'y a donc pas d'erreur de compilation, mais aussi aucune validation automatisée.

## Lighthouse / performance

Tentative :

```bash
npx --yes lighthouse http://127.0.0.1:4173/ --output=json --output-path=/tmp/ge-lighthouse.json --chrome-flags='--headless --no-sandbox' --quiet
```

Résultat :

```text
Unable to connect to Chrome
```

**Gravité : Moyen**  
Audit Lighthouse CLI impossible dans l'environnement actuel faute de Chrome utilisable par Lighthouse.

## Browser QA local

- Accueil chargée dans navigateur local.
- Console : 1 exception JavaScript sans message/source exploitable via l'outil navigateur.
- Messages console : aucun log/warn/error détaillé.

**Action recommandée :** déboguer dans Chrome DevTools ou Playwright avec stack trace complète.

## HTTP public observé

- `http://gardenexpresse.com` → redirection vers HTTPS puis `www` observée, mais première connexion lente/timeout curl partiel.
- `https://gardenexpresse.com` → `308` vers `https://www.gardenexpresse.com/`.
- `https://www.gardenexpresse.com/` → `200`.
- `robots.txt` → `200`.
- `sitemap.xml` → `200`.

## Erreurs / risques techniques prioritaires

| Gravité | Erreur | Impact | Correction recommandée |
|---|---|---|---|
| Critique | Dossier non Git | Impossible de protéger les modifications locales et vérifier remote | Localiser le vrai checkout Git avant toute modification du site |
| Critique | Formulaires sans envoi réel | Perte directe de demandes de devis | Brancher backend/email/WhatsApp/API ou rendre le comportement explicite |
| Critique | Sitemap incomplet | Pages existantes non soumises | Ajouter toutes les pages indexables |
| Critique | Téléphone masqué dans schema | NAP incohérent | Mettre numéro réel public |
| Moyen | Lighthouse indisponible | Pas de métriques LCP/CLS/INP locales | Installer Chrome/Chromium ou auditer via PageSpeed Insights |
| Moyen | Exception JS navigateur | Risque UX/formulaire | Identifier stack trace et corriger |
