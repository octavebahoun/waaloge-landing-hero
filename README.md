# Waaloge: Ton Nouveau Chez-Toi

Contexte Je veux la maquette hi-fi de la landing page Waaloge, une plateforme de logement étudiant à Lokossa (Bénin). Les étudiants parcourent des logements, en ont un aperçu, visitent, puis signent un contrat physique et paient en main propre — c'est ce qui évite la fraude. Langue française, audience étudiants uniquement, ton jeune et énergique.

Système visuel Utilise le design system Organic (cream/sable + terracotta + sage, Caprasimo pour les titres, Figtree pour le corps, radius 16px, boutons en pill, photos en .washed). Zéro couleur/typo/composant inventé — que du design system.

Structure (ordre des sections)

Nav — logo Waaloge, liens : Explorer / Le concept / Aide, bouton Connexion

Hero — grid 2 colonnes :

Gauche : titre « Le logement étudiant en toute confiance. » (le mot « confiance » en accent terracotta avec un souligné organique). Sous-titre : « Trouve, visite et réserve ton logement en toute sécurité. Paiement 100 % physique pour zéro arnaque. » Barre de recherche pill (input « Où cherches-tu ? » + bouton Rechercher solid). Trois puces confiance en ligne : Visite du logement · Contrat physique · Paiement sur place.

Droite : carousel rond — une photo washed en cercle (aspect 1/1), 3 slides, indicateurs en dots en bas, flèches ‹ › sur les côtés, avec une couronne pointillée terracotta autour. Petit badge flottant en bas-droite : trois avatars empilés + « +2 000 étudiants nous font confiance ».

Comment ça se passe — kicker sage, titre « Quatre moments, quatre gestes concrets. » Puis 4 blocs en alternance gauche/droite (photo ronde washed + texte), numérotés 01 → 04 :

01 Tu parcours — studios, chambres, colocs, photos vraies, prix nets

02 Tu visites — rendez-vous fixé, tu vois de tes yeux

03 Tu signes — contrat sur papier, personne ne triche

04 Tu payes — de main à main, zéro appli

Logements en vedette — kicker + titre « Fraîchement ajoutés », grille 3 cartes (image washed, titre, quartier, prix en F CFA/mois). Exemples : Studio Ouando 35 000 F · Chambre Agonvè 18 000 F · T2 Djègbadji 55 000 F.

Pourquoi Waaloge (anti-fraude) — 4 arguments : visite avant paiement, contrat physique sécurisé, photos vérifiées, sans commission cachée. Icônes Lucide stroke-width 2.75.

Témoignages — fond sage, carousel (flèches + dots), une citation à la fois, format : grosse guillemet, phrase courte, nom + niveau + ville. Ex. « On m'avait promis un studio. J'ai visité, j'ai signé, j'ai payé. Fini l'angoisse. » — Mariam, L2 Économie · Lokossa.

FAQ — 3 questions accordéon : Waaloge, ça coûte combien ? / Comment vous vérifiez les logements ? / Je peux annuler après la visite ?

Pour les propriétaires — bandeau court en sage, CTA « Publier un logement »

CTA final — fond terracotta, « Prêt à emménager ? » + bouton

Footer — logo, Lokossa · Bénin, liens Contact · WhatsApp · Propriétaires · CGU

Contenu / ton

Copie exacte : reprends verbatim les titres et phrases ci-dessus.

Prix en F CFA, quartiers Lokossa (Ouando, Agonvè, Djègbadji, Ouèga, Tokpa, Centre).

Emojis : non (sauf s'ils sont déjà natifs à Organic — ils ne le sont pas).

Interactions

Carousel photo hero : 3 slides, dots cliquables, flèches, auto-play doux

Carousel témoignages : idem

FAQ : accordéon simple

Focus visible en terracotta 2px

Ce que je veux voir

Une seule page hi-fi longue, gutter généreux, alignement flush-left, formes rondes, photos washed.

Utilise des placeholders <image-slot> pour les vraies photos (je les remplacerai) — 3 pour le carousel hero, 4 pour les étapes, 3 pour les logements.

Wireframe de référence Le wireframe basse-fidélité approuvé est dans le fichier Waaloge - Landing wireframe 1c.html — respecte la structure,

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/74745ef2-40b8-4dd5-9212-d2c514658ccd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
