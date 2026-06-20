# AUDIT SEO INITIAL — Garden Expresse

Audit réalisé localement dans `C:\Users\PC\Desktop\WEBSITE GE\GE` (`/mnt/c/Users/PC/Desktop/WEBSITE GE/GE`). Aucun fichier du site n'a été modifié. Seul le dossier `SEO/` a été créé pour les livrables.

## 1. Synthèse technique

| Élément | Résultat |
|---|---|
| Framework détecté | Site statique HTML/CSS/JS pur |
| Langage | HTML, CSS, JavaScript vanilla |
| Gestionnaire de paquets | Aucun détecté (`package.json` absent, aucun lockfile) |
| Scripts | Aucun script npm/pnpm/yarn disponible |
| Serveur local de test | `python3 -m http.server 4173 --bind 127.0.0.1` |
| Build/lint/typecheck/tests | Non applicables : aucun outil configuré |
| Hébergement public observé | Vercel via en-têtes HTTP |
| Domaine canonique public | `https://www.gardenexpresse.com/` |

## 2. État Git

Commandes exécutées depuis le dossier demandé :

```bash
git status --short --branch
git branch --show-current && git branch -a
git remote -v
git log --oneline -10
```

Résultat commun :

```text
fatal: not a git repository (or any parent up to mount point /mnt)
Stopping at filesystem boundary (GIT_DISCOVERY_ACROSS_FILESYSTEM not set).
```

**Conclusion : critique.** Le dossier fourni ne contient pas de répertoire `.git`. Le projet est peut-être connecté à GitHub ailleurs, ou le dossier local est une copie exportée/déployée. Je n'ai pas modifié de remote, pas cloné, pas poussé.

## 3. Structure inspectée

```text
.
├── index.html
├── services.html
├── corridors.html
├── transport-maroc-france.html
├── transport-france-maroc.html
├── transport-maroc-espagne.html
├── transport-espagne-maroc.html
├── transport-frigorifique-maroc-europe.html
├── groupage-maroc-france.html
├── robots.txt
├── sitemap.xml
├── googlef41e82308bd238c1.html
├── garden-express-keywords.csv
├── GARDEN-EXPRESS-SEO-STRATEGY.html      # noindex
├── GARDEN-EXPRESSE-SEO-BLUEPRINT.html   # noindex
└── assets/
    ├── ge.css
    ├── ge.js
    └── logo.png
```

## 4. Routes/pages existantes testées localement

Toutes ces URL répondent `200` localement :

| Page | Statut local | Rôle |
|---|---:|---|
| `/` | 200 | Accueil + bourse de fret + formulaires |
| `/services.html` | 200 | Hub services |
| `/corridors.html` | 200 | Hub corridors |
| `/transport-maroc-france.html` | 200 | Page corridor P0 |
| `/transport-france-maroc.html` | 200 | Page corridor P0 |
| `/transport-maroc-espagne.html` | 200 | Page corridor P0 |
| `/transport-espagne-maroc.html` | 200 | Page corridor P0 |
| `/transport-frigorifique-maroc-europe.html` | 200 | Page service+corridor P0 |
| `/groupage-maroc-france.html` | 200 | Page service+corridor P0 |
| `/robots.txt` | 200 | Robots |
| `/sitemap.xml` | 200 | Sitemap |

## 5. Indexabilité / crawl

| Élément | Résultat | Gravité |
|---|---|---|
| `robots.txt` | Autorise tous les robots, sitemap déclaré | OK |
| `sitemap.xml` | Accessible, mais ne liste que 6 URL | **Critique** |
| Canonicals | Présents sur les pages principales indexables | OK |
| Pages internes | 9 pages utiles indexables existent localement | OK |
| Pages noindex | 2 documents stratégiques en `noindex,nofollow` | OK, à garder hors index |
| Domaine public | `http` et non-www redirigent vers `https://www` | OK |
| Google share fourni | URL Google locale Garden Expresse avec `kgmid=/g/11x7gzp5l8`; Google bloque l'accès automatisé par anti-bot, mais le lien indique probablement une fiche établissement existante | Moyen |

## 6. SEO on-page

| Page | Title | Meta description | H1 | Mots approx. | Observation |
|---|---|---|---|---:|---|
| Accueil | 52 caractères | 173 caractères | 1 | 4822 | Description trop longue, claims à vérifier |
| services.html | 54 | 155 | 1 | 457 | Contenu trop court pour page hub SEO |
| corridors.html | 57 | 154 | 1 | 473 | Contenu trop court pour page hub SEO |
| transport-maroc-france.html | 58 | 154 | 1 | 1603 | Bonne base corridor |
| transport-france-maroc.html | 58 | 156 | 1 | 1338 | Bonne base corridor |
| transport-maroc-espagne.html | 56 | 157 | 1 | 1274 | Bonne base corridor |
| transport-espagne-maroc.html | 59 | 144 | 1 | 1128 | Bonne base corridor |
| transport-frigorifique-maroc-europe.html | 52 | 160 | 1 | 1304 | Bonne base service+corridor |
| groupage-maroc-france.html | 59 | 157 | 1 | 1219 | Bonne base service+corridor |

## 7. Données structurées

- JSON-LD présent sur les pages indexables.
- Accueil : `Organization`, `MovingCompany`, `LocalBusiness`, `WebSite`.
- Pages corridors/services : JSON-LD présent mais à valider formellement dans Rich Results Test avant production.
- Téléphone dans schema de l'accueil partiellement masqué `+212****2999` : **problème critique local SEO**. Les données structurées doivent être cohérentes avec le NAP public.
- Les pages n'ont pas toutes `FAQPage`, `BreadcrumbList`, `Service` détaillé selon leur rôle.

## 8. Conversion

Points forts :
- Téléphone, e-mail, WhatsApp visibles.
- CTAs chargeur/transporteur clairs.
- Pages corridors avec formulaires de devis.

Problèmes :
- Les formulaires `data-quote` empêchent l'envoi réel, reset le formulaire et affichent un toast seulement (`assets/ge.js`). **Critique conversion** si aucun backend externe n'est branché.
- Plusieurs pages hubs n'ont pas de formulaire.
- Le téléphone secondaire `+212 661 083 630` n'apparaît pas partout.
- Le parcours transporteur/chargeur est fort sur l'accueil, moins présent sur les pages SEO.

## 9. Performance

Mesures factuelles disponibles :
- Lighthouse n'a pas pu être exécuté : `Unable to connect to Chrome`.
- Poids HTML observé localement : accueil ~96 KB, pages corridors ~26–31 KB, `GARDEN-EXPRESS-SEO-STRATEGY.html` ~185 KB.
- Images : logo uniquement détecté sur pages SEO, attributs `width/height` présents.
- Fonts Google chargées sur toutes les pages : impact potentiel LCP/CLS si réseau lent.
- CSS de l'accueil est inline massif ; pages secondaires utilisent `assets/ge.css`.

## 10. Conformité / confiance

Manquants critiques :
- Page mentions légales.
- Politique de confidentialité.
- Politique cookies si tracking/analytics ajoutés.
- Adresse complète ou zone d'établissement plus précise pour SEO local, si publiable.
- Justification des claims : `15+ ans`, `commissionnaire agréé`, `transporteurs vérifiés/assurés/notés`, `meilleurs prix`, `réponse sous 2h`, `propre flotte`. Ces claims doivent être prouvables ou reformulés.

## 11. Problèmes classés

| Gravité | Page | Problème | Cause | Impact | Correction | Fichiers potentiels |
|---|---|---|---|---|---|---|
| Critique | Dossier projet | Pas de dépôt Git détecté | `.git` absent | Impossible de vérifier branche, remote, historique, modifications locales | Retrouver le vrai dossier Git ou initialiser/relier uniquement sur instruction explicite | racine projet |
| Critique | Toutes | Sitemap incomplet | 3 pages SEO utiles absentes | Google découvre moins de pages | Ajouter `transport-france-maroc`, `transport-espagne-maroc`, `groupage-maroc-france`, futures pages | `sitemap.xml` |
| Critique | Accueil / conversion | Formulaires non envoyés | JS bloque submit et reset | Leads perdus | Brancher mail/API/WhatsApp ou afficher clairement mode démo | `index.html`, `assets/ge.js`, pages corridor |
| Critique | Accueil schema | Téléphone masqué en JSON-LD | `+212****2999` | Incohérence NAP, perte SEO local | Utiliser le téléphone réel public cohérent | `index.html` |
| Critique | Toutes | Mentions légales/confidentialité absentes | Pages non créées | Risque conformité/confiance | Créer pages légales factuelles | nouvelles pages + footer |
| Critique | Contenu | Claims non prouvés | Assertions commerciales fortes | Risque confiance/SEO/conformité | Vérifier preuves ou reformuler | `index.html`, pages corridors |
| Élevé | Services/corridors | Contenu hub trop court | ~450 mots | Faible autorité topique | Étoffer hubs avec intro, services, FAQ, liens | `services.html`, `corridors.html` |
| Élevé | Toutes | Twitter Cards absentes | Balises non présentes | CTR social incomplet | Ajouter `twitter:card`, title, desc | tous HTML |
| Élevé | Local SEO | GBP non intégré clairement | Lien Google fourni non exploité dans site | Signal local faible | Ajouter liens/infos GBP, zones desservies, NAP cohérent | footer, contact, schema |
| Élevé | Architecture | Pages P0 manquantes | Pas de pages dédiées transitaire/affrètement/devis | Perte requêtes fortes | Créer pages ciblées | nouvelles pages |
| Moyen | Accueil | Meta description 173 caractères | Trop longue | Snippet tronqué | Réduire à ~150–160 | `index.html` |
| Moyen | Performance | Fonts Google externes | Requête bloquante potentielle | LCP mobile | Précharger/auto-héberger si besoin | tous HTML/CSS |
| Moyen | Audit JS | 1 exception browser sans message sur accueil | Script inline ou interaction navigateur | Risque QA | Déboguer source exacte en browser devtools | `index.html` |
| Moyen | Pages secondaires | Pas de fil d'Ariane visuel confirmé | Maillage perfectible | UX/SEO | Ajouter BreadcrumbList + fil visible | pages corridors |
| Moyen | International | Pas de hreflang | Pas de versions EN/ES | OK aujourd'hui, bloquant si traductions | Ajouter seulement quand versions réelles créées | futures pages |
| Faible | SEO | Meta keywords utilisée sur accueil | Balise obsolète | Aucun gain SEO | Supprimer ou ignorer | `index.html` |
| Faible | Assets | Documents noindex volumineux dans racine | Fichiers internes publics mais noindex | Bruit / confidentialité | Garder hors sitemap ou déplacer hors public si sensible | fichiers strategy/blueprint |

## 12. Conclusion

Le site a déjà une base SEO intéressante pour un site statique : pages corridors, canonicals, robots, schema, CTAs et maillage. Le blocage principal n'est pas le design : c'est la solidité technique/commerciale avant expansion SEO. Priorité : retrouver le dépôt Git réel, corriger sitemap + formulaires + NAP/schema + conformité, puis créer les pages P0 manquantes sans inventer de preuves.
