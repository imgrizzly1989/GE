# Contrôle indexation après modifications — Garden Expresse

Date du contrôle : 2026-06-20  
Domaine contrôlé : `https://www.gardenexpresse.com`  
Repo : `C:\Users\PC\Documents\GitHub\GE`  
Derniers commits contrôlés :

- `674873f chore: add AI crawl summary`
- `9d25eed feat: expand transport SEO architecture`

## Décision

**Aucun risque critique d’indexation détecté.**

Le travail peut continuer, sous réserve de garder les règles suivantes :

- ne pas supprimer les anciennes URL ;
- ne pas modifier les canonicals sans contrôle ;
- ne pas ajouter de `noindex` sur pages stratégiques ;
- soumettre le sitemap dans Google Search Console après stabilisation.

---

## 1. Anciennes URL importantes — HTTP 200

Anciennes URL stratégiques contrôlées en live :

| URL | Statut | Redirections | Indexable | Canonical |
|---|---:|---:|---|---|
| `/` | 200 | 0 | oui | `https://www.gardenexpresse.com/` |
| `/services.html` | 200 | 0 | oui | `https://www.gardenexpresse.com/services.html` |
| `/corridors.html` | 200 | 0 | oui | `https://www.gardenexpresse.com/corridors.html` |
| `/transport-maroc-france.html` | 200 | 0 | oui | `https://www.gardenexpresse.com/transport-maroc-france.html` |
| `/transport-france-maroc.html` | 200 | 0 | oui | `https://www.gardenexpresse.com/transport-france-maroc.html` |
| `/transport-maroc-espagne.html` | 200 | 0 | oui | `https://www.gardenexpresse.com/transport-maroc-espagne.html` |
| `/transport-espagne-maroc.html` | 200 | 0 | oui | `https://www.gardenexpresse.com/transport-espagne-maroc.html` |
| `/transport-frigorifique-maroc-europe.html` | 200 | 0 | oui | `https://www.gardenexpresse.com/transport-frigorifique-maroc-europe.html` |
| `/groupage-maroc-france.html` | 200 | 0 | oui | `https://www.gardenexpresse.com/groupage-maroc-france.html` |
| `/robots.txt` | 200 | 0 | n/a | n/a |
| `/sitemap.xml` | 200 | 0 | n/a | n/a |
| `/googlef41e82308bd238c1.html` | 200 | 0 | fichier de vérification | n/a |

Résultat : **aucune ancienne URL importante ne retourne 404**.

---

## 2. Noindex

Contrôle des anciennes pages et des pages du sitemap :

- aucune page stratégique ancienne n’est passée en `noindex` ;
- les pages du sitemap contiennent `index, follow` ou `index, follow, max-image-preview:large` ;
- le seul fichier `noindex,nofollow` restant est le document interne `GARDEN-EXPRESSE-SEO-BLUEPRINT.html`, volontairement hors index.

Résultat : **OK**.

---

## 3. robots.txt

`robots.txt` live :

```txt
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-Web
Allow: /
User-agent: Bingbot
Allow: /

Sitemap: https://www.gardenexpresse.com/sitemap.xml
```

Aucun `Disallow` bloquant n’est présent.

Résultat : **robots.txt ne bloque aucune page importante**.

---

## 4. Sitemap

Sitemap live contrôlé :

`https://www.gardenexpresse.com/sitemap.xml`

Résultat :

- **33 URL** dans le sitemap ;
- **33/33 URL retournent HTTP 200** ;
- **0 redirection** sur les URL listées ;
- toutes les URL sont en `https://www.gardenexpresse.com/...` ;
- chaque URL HTML du sitemap possède un canonical cohérent vers elle-même ;
- aucune URL `noindex` dans le sitemap.

Résultat : **sitemap valide, indexable et canonique**.

---

## 5. Canonicals

Les anciennes URL stratégiques gardent un canonical correct :

| Page | Canonical live |
|---|---|
| Accueil | `https://www.gardenexpresse.com/` |
| Services | `https://www.gardenexpresse.com/services.html` |
| Corridors | `https://www.gardenexpresse.com/corridors.html` |
| Transport Maroc France | `https://www.gardenexpresse.com/transport-maroc-france.html` |
| Transport France Maroc | `https://www.gardenexpresse.com/transport-france-maroc.html` |
| Transport Maroc Espagne | `https://www.gardenexpresse.com/transport-maroc-espagne.html` |
| Transport Espagne Maroc | `https://www.gardenexpresse.com/transport-espagne-maroc.html` |
| Frigorifique Maroc Europe | `https://www.gardenexpresse.com/transport-frigorifique-maroc-europe.html` |
| Groupage Maroc France | `https://www.gardenexpresse.com/groupage-maroc-france.html` |

Résultat : **aucun canonical important n’a été envoyé vers une mauvaise URL**.

---

## 6. Redirections

Contrôles effectués :

| Variante | Résultat |
|---|---|
| `https://www.gardenexpresse.com/` | 200 direct |
| `http://www.gardenexpresse.com/` | 308 → `https://www.gardenexpresse.com/` → 200 |
| `https://gardenexpresse.com/` | 308 → `https://www.gardenexpresse.com/` → 200 |
| `http://gardenexpresse.com/` | 308 → `https://gardenexpresse.com/` puis canonicalisation attendue vers www si suivi complet |
| anciennes pages en `https://www` | 200 direct |
| anciennes pages en `http://www` | 1 redirection vers HTTPS puis 200 |
| anciennes pages en `https://non-www` | 1 redirection vers `https://www` puis 200 |

Observation : la canonicalisation Vercel vers `https://www` est normale. Aucune chaîne de redirection nouvelle n’a été détectée sur les URL du sitemap, qui sont toutes directes en 200.

Résultat : **pas de risque critique de redirection**.

---

## 7. Titles, H1 et contenu existant

Comparaison avec la version avant modifications (`322df9b`) :

| Page | Title | H1 | Contenu |
|---|---|---|---|
| `index.html` | même intention, marque corrigée `Garden Expresse` | inchangé | +468 mots |
| `services.html` | même intention, marque corrigée | inchangé | +48 mots |
| `corridors.html` | même intention, marque corrigée | inchangé | +50 mots |
| `transport-maroc-france.html` | même intention, marque corrigée | inchangé | -8 mots |
| `transport-france-maroc.html` | même intention, marque corrigée | inchangé | -6 mots |
| `transport-maroc-espagne.html` | même intention, marque corrigée | inchangé | -5 mots |
| `transport-espagne-maroc.html` | même intention, marque corrigée | inchangé | -1 mot |
| `transport-frigorifique-maroc-europe.html` | même intention, marque corrigée | inchangé | +1 mot |
| `groupage-maroc-france.html` | même intention, marque corrigée | inchangé | -5 mots |

Les petites baisses de mots viennent de la suppression/reformulation de claims risqués, pas d’un appauvrissement SEO. Les mots-clés principaux et H1 sont conservés.

Résultat : **pas de remplacement par des versions plus faibles**.

---

## 8. Build / validation statique

Le projet reste un site statique sans `package.json` :

```txt
NO package.json; static HTML project
NO build script/package.json
```

Validation réalisée à la place :

- crawl live complet du sitemap ;
- 33/33 pages en 200 ;
- JSON-LD parseable ;
- aucun lien interne cassé détecté localement lors du contrôle précédent ;
- aucune erreur JS sur l’accueil live via navigateur ;
- canonical et robots contrôlés.

Résultat : **build statique valide / pas de pipeline build à exécuter**.

---

## 9. Mobile et desktop

Contrôle desktop navigateur live sur l’accueil :

- title correct ;
- H1 présent ;
- canonical correct ;
- meta robots indexable ;
- formulaires présents ;
- navigation présente ;
- aucune erreur console ;
- `horizontalOverflow: false` à 1280px.

Routes : toutes les routes du sitemap répondent en 200. Les pages utilisent les styles responsive existants (`@media`, menu mobile, grilles adaptatives). Aucun blocage de route mobile/desktop n’a été détecté par HTTP/crawl.

Limite : aucun audit visuel mobile pixel-perfect Lighthouse n’a été exécuté ici, car Lighthouse/Chrome CLI n’était pas disponible dans l’environnement. Ce n’est pas un risque critique d’indexation, mais un audit UX mobile approfondi reste recommandé.

---

## 10. Risques détectés

| Niveau | Risque | Détail | Action |
|---|---|---|---|
| Critique | Aucun | Aucun blocage indexation détecté | Le travail peut continuer |
| Faible | `http://gardenexpresse.com` | Une résolution DNS a échoué une fois lors d’un test, puis a réussi 3 fois ensuite avec 308 Vercel | Surveiller seulement |
| Faible | Audit mobile visuel | Pas de Lighthouse mobile disponible dans l’environnement | Faire PageSpeed Insights / Lighthouse externe plus tard |

---

## Conclusion

**Aucun risque critique n’est détecté.**

Les anciennes URL importantes restent accessibles, indexables, canoniques, non bloquées par robots.txt, et sans 404. Le sitemap est propre et ne contient que des URL live en 200.

Le travail SEO peut continuer.
