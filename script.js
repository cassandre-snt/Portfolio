/* ============================================================
   SCRIPT.JS — Portfolio BUT MMI · Graphisme
   ============================================================ */

'use strict';

/* ─────────────────────────────────────────────────────────────
   DONNÉES PROJETS (14 projets réels)
   ───────────────────────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    title: 'Affiche CSA Volleyball',
    shortDesc: 'Affiche de lancement créée pour le CSA Volleyball, afin de promouvoir la création du nouveau club et fédérer ses futurs membres.',
    category: 'design-graphique',
    categoryLabel: 'Design Graphique',
    heroImage: 'Image_projet/CSA_Volley/Affiche_CSA_Volley.png',
    context: 'Projet personnel réalisé pour accompagner la création du CSA Volleyball. L\'enjeu était de concevoir un visuel dynamique et immédiatement lisible, capable de donner envie de rejoindre le club tout en affirmant son identité sportive.',
    publicCible: 'Futurs licenciés, joueuses et joueurs de volley-ball, habitants du secteur et partenaires potentiels du club.',
    objectifs: 'Promouvoir le lancement du CSA Volleyball grâce à une affiche attractive, transmettre l\'énergie du volley-ball et créer un support facile à diffuser en version imprimée comme sur les réseaux sociaux.',
    processus: '1. Recueil des informations à communiquer pour le lancement du club. 2. Recherche d\'une direction artistique sportive et accessible. 3. Sélection d\'une palette, de typographies et de visuels évoquant l\'énergie du volley-ball. 4. Composition de l\'affiche et hiérarchisation des informations. 5. Ajustements, vérification de la lisibilité et export final.',
    resultats: 'Une affiche de lancement finalisée pour le CSA Volleyball, prête à être imprimée et partagée sur les réseaux sociaux afin de faire connaître le nouveau club.',
    retour: 'Ce projet m\'a permis d\'adapter ma pratique du design sportif à un véritable besoin de communication. J\'ai particulièrement travaillé la hiérarchie de l\'information pour que le message soit compris en un coup d\'œil, tout en conservant un visuel énergique.',
    attendus: [
      'Affiche de lancement à l\'identité sportive forte',
      'Informations essentielles clairement hiérarchisées',
      'Déclinaison adaptée à l\'impression et au digital',
    ],
    livrables: [
      'Affiche CSA Volleyball — export HD',
      'Déclinaison pour les réseaux sociaux',
      'Fichier source Photoshop/Illustrator',
    ],
    preuves: [
      { label: 'Affiche CSA Volleyball', type: 'image', src: 'Image_projet/CSA_Volley/Affiche_CSA_Volley.png' },
    ],
  },
  {
    id: 2,
    title: 'ZORA — Collection de t-shirts',
    shortDesc: 'Création du logo, des motifs et des maquettes de t-shirts pour ZORA, une marque fictive aux univers graphique, floral et manga.',
    category: 'design-graphique',
    categoryLabel: 'Design Graphique',
    heroImage: 'Image_projet/ZORA/Rose_tshirt.png',
    context: 'ZORA est une marque fictive imaginée dans le cadre d\'un projet personnel de design textile. J\'ai conçu son logo et son identité visuelle, puis les ai déclinés sur plusieurs t-shirts. Le projet explore des univers contrastés : un motif floral monochrome et une proposition inspirée de l\'univers manga et du volley-ball.',
    publicCible: 'Jeunes amateurs de streetwear, de culture manga et de vêtements graphiques.',
    objectifs: 'Imaginer l\'identité complète d\'une marque fictive, créer un logo reconnaissable, concevoir des visuels textiles originaux et maintenir la cohérence de ZORA sur plusieurs t-shirts.',
    processus: '1. Définition du concept et du positionnement de la marque fictive ZORA. 2. Recherche de références dans le streetwear, l\'illustration et la culture manga. 3. Création du logo et de la signature visuelle. 4. Conception de motifs adaptés au support textile. 5. Intégration des visuels sur des maquettes de t-shirts recto-verso. 6. Ajustements des contrastes, de l\'échelle et du placement des éléments.',
    resultats: 'Une identité de marque fictive complète pour ZORA, avec un logo original et une mini-collection de maquettes textiles déclinées en vues avant et arrière.',
    retour: 'Ce projet m\'a permis de mener une identité visuelle de A à Z, de la création du logo à son application sur le vêtement. J\'ai appris à penser un visuel en tenant compte du volume du textile, de la lisibilité à distance et de la cohérence entre le devant et le dos d\'un même modèle.',
    attendus: [
      'Logo et identité ZORA reconnaissables sur chaque modèle',
      'Motifs adaptés à l\'impression sur textile',
      'Maquettes recto-verso lisibles et cohérentes',
    ],
    livrables: [
      'Logo original de la marque fictive ZORA',
      'T-shirt ZORA — motif floral',
      'T-shirt ZORA — déclinaison Haikyu',
      'Maquettes textiles recto-verso',
    ],
    preuves: [
      { label: 'Logo Zora', type: 'image', src: 'Image_projet/ZORA/Logo_Zora_Noir.png', lightBg: true },
      { label: 'Logo Zora — variante', type: 'image', src: 'Image_projet/ZORA/Logo_Zora_blanc.png', lightBg: false },
      { label: 'Prototype du T-shirt ZORA', type: 'image', src: 'Image_projet/ZORA/Zora.png' },
      { label: 'Prototype du T-shirt Haikyu', type: 'image', src: 'Image_projet/ZORA/zora_haikyu.png' },
      { label: 'Maquette Haikyu', type: 'image', src: 'Image_projet/ZORA/Haikyu_tshirt.png' },
      { label: 'Maquette Rose', type: 'image', src: 'Image_projet/ZORA/Rose_tshirt.png' },
    ],
  },
  {
    id: 3,
    title: 'Welc’Home — Plateforme d’intégration',
    shortDesc: 'Projet personnel en cours pour faciliter l’intégration en France des personnes originaires des îles.',
    category: 'design-graphique',
    categoryLabel: 'Design Graphique',
    heroImage: 'Image_projet/WELC\'HOME/Logo_Welc’Home_Outre-mer_B_B.png',
    context: 'Welc’Home est un projet personnel actuellement en cours de développement. Son objectif est d’accompagner les personnes originaires des îles dans leur arrivée et leur installation en France, en leur proposant un espace pensé pour leurs besoins et leurs repères.',
    publicCible: 'Personnes originaires des îles qui s’installent en France, notamment pour leurs études, leur travail ou un changement de vie.',
    objectifs: 'Imaginer une plateforme bienveillante et accessible, faciliter l’accès aux informations utiles pour l’installation en France et créer un lien entre les nouveaux arrivants et une communauté partageant des repères culturels communs.',
    processus: '1. Identification des difficultés rencontrées lors d’une arrivée en France. 2. Définition du concept et de la mission de Welc’Home. 3. Création de l’identité visuelle et du logo. 4. Réflexion sur les contenus, les fonctionnalités et le parcours utilisateur. 5. Conception progressive de la plateforme.',
    resultats: 'Le projet est en cours de finalisation. L’identité visuelle et les premières orientations de la plateforme sont définies ; les contenus et fonctionnalités continuent d’être développés.',
    retour: 'Ce projet me tient particulièrement à cœur, car il s’appuie sur une expérience et une sensibilité personnelles. Il me permet de mettre le design et le numérique au service d’un accueil plus simple, plus humain et plus inclusif.',
    attendus: [
      'Une identité visuelle accueillante et reconnaissable',
      'Un parcours utilisateur simple pour les nouveaux arrivants',
      'Des informations et ressources utiles à l’intégration',
    ],
    livrables: [
      'Logo Welc’Home',
      'Identité visuelle de la plateforme',
      'Prototype et contenus de la plateforme — en cours',
    ],
    preuves: [
      { label: 'Logo Welc’Home', type: 'image', src: 'Image_projet/WELC\'HOME/Logo_Welc’Home_Outre-mer_B_B.png', lightBg: false },
      { label: 'Logo Welc’Home — variante', type: 'image', src: 'Image_projet/WELC\'HOME/Logo_Welc’Home_Outre-mer_B_N.png', lightBg: true },
      { label: 'Logo Welc’Home — variante', type: 'image', src: 'Image_projet/WELC\'HOME/Logo_Welc’Home_Outre-mer_B.png', lightBg: false },
      { label: 'Logo Welc’Home — variante', type: 'image', src: 'Image_projet/WELC\'HOME/Logo_Welc’Home_Outre-mer_N.png', lightBg: true },
    ],
  },
  {
    id: 4,
    title: 'Logo & Charte graphique — Banksy',
    shortDesc: 'Création d\'un logo et d\'une charte graphique pour le musée imaginaire de Banksy, artiste de street art choisi pour ce projet.',
    category: 'design-graphique',
    categoryLabel: 'Design Graphique',
    heroImage: 'Image_projet/Banksy/Banksy.png',
    context: 'Projet réalisé dans le cadre du BUT MMI. Le brief consistait à choisir un artiste et à concevoir le logo qui représenterait cet artiste s\'il ouvrait son propre musée, puis à en décliner une charte graphique complète. J\'ai choisi Banksy, artiste de street art britannique reconnu pour ses œuvres au pochoir, son anonymat et ses messages engagés, souvent provocateurs et satiriques.',
    publicCible: 'Grand public, amateurs d\'art urbain et contemporain, visiteurs potentiels du musée imaginaire.',
    objectifs: 'Concevoir un logo fort qui incarne l\'identité de Banksy — subversion, pochoir, noir & blanc, ironie — et construire une charte graphique cohérente déclinable sur tous les supports de communication du musée.',
    processus: '1. Recherche et analyse approfondie de l\'univers de Banksy (technique pochoir, typographie, palette, messages). 2. Définition des valeurs à transmettre : clandestinité, engagement, humour noir. 3. Esquisses et explorations de logotypes. 4. Vectorisation sur Adobe Illustrator. 5. Déclinaison en charte graphique : couleurs, typographies, règles d\'usage, exemples d\'application.',
    resultats: 'Un logo original représentant le musée imaginaire de Banksy, accompagné d\'une charte graphique complète avec palette chromatique, typographies et règles d\'application.',
    retour: 'Ce projet m\'a appris à me glisser dans l\'identité d\'un artiste sans le copier : traduire un univers en système visuel cohérent et fonctionnel. L\'exercice de la charte graphique m\'a aussi permis de comprendre l\'importance de la rigueur dans la construction d\'une identité visuelle.',
    attendus: [
      'Logo original représentatif de l\'artiste et de son musée',
      'Charte graphique complète (couleurs, typographies, règles d\'usage)',
      'Déclinaisons du logo (couleur, noir & blanc, fond sombre)',
      'Note d\'intention justifiant les choix créatifs',
    ],
    livrables: [
      'Logo en vectoriel (AI / SVG / PNG)',
      'Charte graphique PDF',
      'Fichiers sources Illustrator',
    ],
    preuves: [
      { label: 'Logo principal',     type: 'image', src: 'Image_projet/Banksy/Banksy.png' },
      { label: 'BKY — logo',        type: 'image', src: 'Image_projet/Banksy/BKY.png' },
      { label: 'BKY — variante 1',  type: 'image', src: 'Image_projet/Banksy/BKY_1.png' },
      { label: 'BKY — variante 2',  type: 'image', src: 'Image_projet/Banksy/BKY_2.png' },
    ],
  },
  {
    id: 5,
    title: 'Affiche Féminicide — Design Engagé',
    shortDesc: 'Affiche de sensibilisation contre les féminicides — design comme outil de prise de parole.',
    category: 'communication',
    categoryLabel: 'Communication',
    heroImage: 'Image_projet/Affiche/feminicide.png',
    context: 'Projet réalisé dans le cadre du BUT MMI — design engagé : création d\'une affiche de sensibilisation aux féminicides, dans le cadre d\'un exercice sur le design comme outil de communication sociale et militante.',
    publicCible: 'Grand public, sensible aux questions de violences faites aux femmes et d\'égalité.',
    objectifs: 'Concevoir une affiche forte et sobre, capable de toucher le spectateur et de l\'inciter à réfléchir, sans tomber dans le sensationnalisme.',
    processus: '1. Recherche sur le sujet et analyse des campagnes existantes. 2. Définition du concept visuel. 3. Sélection d\'une palette sobre et impactante. 4. Travail typographique fort. 5. Composition finale.',
    resultats: 'Affiche impactante, sobre et engagée, prête pour diffusion print et digitale.',
    retour: 'Ce projet m\'a confrontée à la responsabilité du designer face aux sujets sensibles. Chaque choix visuel porte un message, et il faut en être pleinement consciente. C\'est l\'un des projets dont je suis le plus fière.',
    attendus: [
      'Affiche de sensibilisation A2',
      'Message clair et non ambigu',
      'Palette visuelle adaptée au sujet',
      'Note d\'intention créative',
    ],
    livrables: [
      'Affiche féminicide — export HD',
      'Note d\'intention PDF',
      'Fichier source Photoshop/Illustrator',
    ],
    preuves: [
      { label: 'Affiche féminicide', type: 'image', src: 'Image_projet/Affiche/feminicide.png' },
    ],
  },
  {
    id: 6,
    title: 'Parc Australien — Identité visuelle & Landing Page',
    shortDesc: 'Identité visuelle en volume pour le Parc Australien de Carcassonne — fresque narrative, jeu de 7 familles, déclinée en landing page événementielle pour l\'exposition "L\'Australie au Sidobre".',
    category: 'communication',
    categoryLabel: 'Communication',
    heroImage: 'Image_projet/Parc_Aussie/PA_Aussie.png',
    context: 'Projet réalisé dans le cadre du BUT MMI. L\'objectif était de concevoir une identité visuelle en volume pour le Parc Australien de Carcassonne. J\'ai choisi de créer une fresque narrative en relief 3D, entièrement réalisée à la main : des éléments en carton (arbres, végétation) sont découpés, collés et sortent physiquement de la feuille pour créer un effet de volume. J\'ai appliqué la technique du pointillisme sur le carton pour faire référence à l\'art aborigène australien. Pour le goodie, j\'ai conçu un jeu de 7 familles entièrement illustré autour de la faune et de l\'univers du parc. En complément de cette identité physique, j\'ai décliné la même direction artistique en une landing page événementielle pour "L\'Australie au Sidobre", une exposition immersive imaginée au cœur des rochers du Sidobre.',
    publicCible: 'Familles, enfants et visiteurs du Parc Australien de Carcassonne, amateurs de nature et d\'animaux, ainsi que les visiteurs potentiels de l\'exposition en ligne, curieux de vivre une escale immersive en Australie.',
    objectifs: 'Concevoir une identité visuelle immersive et cohérente déclinée en volume (fresque) et en objet (goodie jeu de 7 familles), valorisant l\'univers du parc de façon ludique et mémorable, puis prolonger cette direction artistique vers une expérience digitale présentant le concept de l\'exposition en un parcours narratif clair, avec une réservation de billets simple.',
    processus: '1. Analyse du Parc Australien de Carcassonne et recherche sur l\'art aborigène australien. 2. Définition de la direction artistique en volume. 3. Réalisation de la fresque narrative à la main : découpe et collage d\'éléments en carton (arbres, végétation) qui sortent de la feuille pour créer un effet 3D en relief. Application du pointillisme sur le carton en référence à l\'art aborigène. 4. Création du jeu de 7 familles : illustration de chaque famille, mise en page des cartes, choix typographiques. 5. Présentation finale du projet physique. 6. Reprise de la direction artistique (références aborigènes, tons ocres et verts) pour la déclinaison digitale. 7. Structuration de la landing page (accueil, l\'origine, parcours en 4 temps, billetterie). 8. Intégration front-end et développement du formulaire de réservation par nombre de personnes. 9. Mise en ligne.',
    resultats: 'Fresque narrative 3D en relief réalisée entièrement à la main (carton + pointillisme d\'inspiration aborigène) et jeu de 7 familles complet prêt à l\'impression, complétés par une landing page en ligne reprenant fidèlement l\'univers visuel du parc, avec un parcours narratif en 4 temps et un module de réservation de billets.',
    retour: 'Ce projet m\'a poussée à penser au-delà du 2D et à travailler avec mes mains de façon artisanale. Construire du volume avec du carton et intégrer le pointillisme comme référence à l\'art aborigène — c\'est le genre de contrainte créative qui oblige à sortir de ses habitudes numériques et à trouver des solutions concrètes. Le jeu de 7 familles a été un exercice complémentaire très riche en termes de cohérence illustrative. Décliner ensuite ce projet physique vers une expérience digitale cohérente avec la même direction artistique a été un bel exercice de continuité de marque.',
    attendus: [
      'Identité visuelle en volume — fresque narrative',
      'Goodie : jeu de 7 familles illustré',
      'Cohérence graphique sur l\'ensemble des supports',
      'Une continuité visuelle avec le projet physique dans sa déclinaison digitale',
      'Un parcours narratif immersif en plusieurs temps',
      'Un module de réservation simple et clair',
    ],
    livrables: [
      'Fresque narrative en volume — réalisation artisanale',
      'Jeu de 7 familles — planches de cartes',
      'Fichiers sources',
      'Landing page événementielle (HTML/CSS/JS)',
      'Parcours narratif "Un Voyage en 4 Temps"',
      'Formulaire de réservation de billets',
    ],
    preuves: [
      { label: 'Identité visuelle', type: 'image', src: 'Image_projet/Parc_Aussie/PA_Aussie.png' },
      { label: 'Affiche parc',      type: 'image', src: 'Image_projet/Affiche/affiche_parc_australien.png' },
      { label: 'Landing page — accueil', type: 'image', src: 'Image_projet/Web_ParcAustralien/hero.png' },
      { label: 'Parcours en 4 temps', type: 'image', src: 'Image_projet/Web_ParcAustralien/parcours.png' },
      { label: 'Billetterie', type: 'image', src: 'Image_projet/Web_ParcAustralien/billetterie.png' },
    ],
    liveUrl: 'https://snc5406a.mmiweb.iut-tlse3.fr/landing_page_PA/',
  },

  {
    id: 7,
    title: 'Affiche SHEIN',
    shortDesc: 'Affiche graphique autour de SHEIN et les codes visuels de la fast fashion contemporaine, réalisée dans le cadre du BUT MMI.',
    category: 'communication',
    categoryLabel: 'Communication',
    heroImage: 'Image_projet/Affiche/SHEIN.png',
    context: 'Projet réalisé dans le cadre du BUT MMI. Cette affiche explore les codes visuels de la mode contemporaine et de la fast fashion à travers la marque SHEIN, avec une direction artistique percutante destinée à interpeller le public.',
    publicCible: 'Jeunes adultes 18-30 ans, consommateurs de mode, sensibles aux enjeux esthétiques et éthiques de la fast fashion.',
    objectifs: 'Produire une affiche visuellement forte sur la thématique de la mode et de la fast fashion, avec un message clair et une direction artistique cohérente.',
    processus: '1. Analyse de l\'identité visuelle de SHEIN. 2. Définition du message et de l\'angle d\'approche. 3. Recherche iconographique et typographique. 4. Composition sur Photoshop/Illustrator. 5. Retouches et export HD.',
    resultats: 'Affiche finalisée au format A2, prête pour impression et diffusion digitale.',
    retour: 'Ce projet m\'a amenée à réfléchir au rôle du design dans la communication des marques de fast fashion et aux enjeux éthiques qui en découlent. Comment un visuel peut-il simultanément séduire et interroger ?',
    attendus: [
      'Affiche au format A2',
      'Message clair et direction artistique définie',
      'Exports HD print et digital',
    ],
    livrables: [
      'Affiche SHEIN — export HD',
      'Fichier source Photoshop/Illustrator',
    ],
    preuves: [
      { label: 'Affiche SHEIN', type: 'image', src: 'Image_projet/Affiche/SHEIN.png' },
    ],
  },
  
  {
    id: 8,
    title: 'Club La Salle — Site Vitrine Salle de Sport',
    shortDesc: 'Site vitrine complet pour une salle de sport : présentation du club, planning des cours collectifs, équipe et abonnements.',
    category: 'web-digital',
    categoryLabel: 'Web & Digital',
    heroImage: 'Image_projet/Web_LaSalle/page_d\'acceuil.png',
    context: 'Réalisation du site vitrine de Club La Salle, une salle de sport basée à Bettancourt-la-Ferrée, dans le cadre du BUT MMI. L\'objectif était de construire un site complet répondant aux besoins réels d\'un club de sport : présentation, planning, tarifs et prise de contact.',
    publicCible: 'Adhérents actuels et futurs du club, personnes à la recherche d\'une salle de sport près de chez elles.',
    objectifs: 'Présenter clairement l\'offre du club (équipements, cours collectifs, coaching), organiser un planning de cours dense et lisible, structurer une grille tarifaire complète et faciliter la prise de contact.',
    processus: '1. Recueil des informations réelles du club (planning, équipe, tarifs, équipements). 2. Construction de l\'arborescence du site. 3. Intégration HTML/CSS responsive. 4. Mise en forme du planning des 36 cours hebdomadaires et de la grille d\'abonnements. 5. Tests et mise en ligne.',
    resultats: 'Site complet en ligne, avec présentation du club et de son équipe, planning interactif des cours collectifs, grille tarifaire détaillée et formulaire de contact.',
    retour: 'Travailler avec les contraintes d\'un vrai client m\'a appris à organiser une quantité d\'informations dense (plannings, tarifs multiples) tout en gardant un site lisible et agréable à parcourir.',
    attendus: [
      'Un site responsive fidèle à l\'identité du club',
      'Un planning de cours collectifs clair malgré la densité d\'informations',
      'Une grille tarifaire complète et compréhensible',
    ],
    livrables: [
      'Site vitrine complet (HTML/CSS/JS)',
      'Planning des cours collectifs',
      'Grille tarifaire et formulaire de contact',
    ],
    preuves: [
      { label: 'Page d\'accueil', type: 'image', src: 'Image_projet/Web_LaSalle/page_d\'acceuil.png' },
      { label: 'Planning des cours', type: 'image', src: 'Image_projet/Web_LaSalle/planning_cours_co.png' },
      { label: 'Abonnements', type: 'image', src: 'Image_projet/Web_LaSalle/abonnements.png' },
    ],
    liveUrl: 'https://snc5406a.mmiweb.iut-tlse3.fr/lasalle/index.html',
  },
  
  {
    id: 9,
    title: 'Le Saphir — Site Vitrine & Réservation Hôtel de Luxe',
    shortDesc: 'Site web complet pour un palace fictif haut de gamme : présentation des suites, réservation en ligne et espaces client/admin.',
    category: 'web-digital',
    categoryLabel: 'Web & Digital',
    heroImage: 'Image_projet/Web_Saphir/acceuil.png',
    context: 'Projet réalisé dans le cadre du BUT MMI : concevoir le site vitrine du Saphir, un palace fictif, pensé comme une expérience haut de gamme du premier clic jusqu\'à la réservation.',
    publicCible: 'Clientèle imaginée comme haut de gamme, en recherche d\'un séjour de luxe ; jury pédagogique évaluant la conception d\'un site de réservation.',
    objectifs: 'Traduire en interface web une identité de luxe — typographie soignée, visuels immersifs — présenter les suites, services et l\'art culinaire de l\'établissement, et proposer un parcours de réservation clair avec espaces compte client et admin.',
    processus: '1. Définition du concept et de l\'univers du Saphir. 2. Architecture du site (accueil, résidences, services, gastronomie, réservation). 3. Intégration HTML/CSS. 4. Développement en PHP du formulaire de réservation et des espaces client/admin. 5. Tests et mise en ligne.',
    resultats: 'Site fonctionnel en ligne, avec une page d\'accueil immersive, la présentation des résidences et services, un module de réservation ainsi que des espaces compte client et compte admin.',
    retour: 'Ce projet m\'a permis de travailler la mise en scène d\'une marque de luxe en web design, et de manipuler PHP pour la première fois sur un vrai parcours de réservation.',
    attendus: [
      'Une identité visuelle haut de gamme et cohérente',
      'Un parcours de réservation clair et engageant',
      'Des espaces compte client et administrateur fonctionnels',
    ],
    livrables: [
      'Site web complet (HTML/CSS/PHP)',
      'Formulaire de réservation',
      'Espaces compte client et compte admin',
    ],
    preuves: [
      { label: 'Page d\'accueil', type: 'image', src: 'Image_projet/Web_Saphir/acceuil.png' },
      { label: 'Résidences & suites', type: 'image', src: 'Image_projet/Web_Saphir/Suit.png' },
      { label: 'Résidences & suites', type: 'image', src: 'Image_projet/Web_Saphir/interior_suit.png' },
      { label: 'Réservation', type: 'image', src: 'Image_projet/Web_Saphir/Reservation.png' },
    ],
    liveUrl: 'https://snc5406a.mmiweb.iut-tlse3.fr/Hotel_le_saphir/index.php',
  },

  {
    id: 10,
    title: 'KShop — Boutique en Ligne Produits de Nouvelle-Calédonie',
    shortDesc: 'Site vitrine e-commerce réalisé avec Bootstrap, mettant en avant des produits calédoniens entre saveurs locales et artisanat traditionnel.',
    category: 'web-digital',
    categoryLabel: 'Web & Digital',
    heroImage: 'Image_projet/Web_KShop/hero.png',
    context: 'Projet réalisé dans le cadre du BUT MMI pour prendre en main le framework Bootstrap : la conception de KShop, une boutique vitrine fictive mettant en lumière des produits alimentaires et culturels de Nouvelle-Calédonie.',
    publicCible: 'Internautes curieux de découvrir la culture calédonienne, jury pédagogique évaluant la prise en main de Bootstrap.',
    objectifs: 'Concevoir une boutique vitrine responsive avec Bootstrap, structurer un catalogue de produits alimentaires et culturels, intégrer un tableau tarifaire et un formulaire de contact, tout en racontant une histoire culturelle authentique et personnelle.',
    processus: '1. Prise en main du framework Bootstrap. 2. Construction de l\'arborescence de la boutique (accueil, produits, tarifs, culture, contact). 3. Intégration des sections et choix des visuels. 4. Rédaction des descriptions produits. 5. Tests responsive et mise en ligne.',
    resultats: 'Site en ligne présentant un catalogue de produits alimentaires et culturels, un tableau de tarifs indicatifs, une section dédiée à la culture néo-calédonienne et un formulaire de contact fonctionnel.',
    retour: 'Ce projet m\'a permis de mettre ma culture d\'origine au cœur d\'une réalisation technique, en plus de prendre en main le framework Bootstrap pour la première fois.',
    attendus: [
      'Une boutique vitrine responsive avec Bootstrap',
      'Un catalogue de produits structuré et illustré',
      'Une mise en avant authentique de la culture néo-calédonienne',
    ],
    livrables: [
      'Site vitrine e-commerce (Bootstrap)',
      'Catalogue de produits et tableau de tarifs',
      'Section culture & formulaire de contact',
    ],
    preuves: [
      { label: 'Page d\'accueil', type: 'image', src: 'Image_projet/Web_KShop/hero.png' },
      { label: 'Catalogue produits', type: 'image', src: 'Image_projet/Web_KShop/produits.png' },
      { label: 'Section culture', type: 'image', src: 'Image_projet/Web_KShop/culture.png' },
    ],
    liveUrl: 'https://snc5406a.mmiweb.iut-tlse3.fr/Bootsrap/',
  },

  {
    id: 11,
    title: 'Créations de Logos',
    shortDesc: 'Conception de logos pour différents clients et projets : Islanders, Boulodrome et RD Couleurs.',
    category: 'design-graphique',
    categoryLabel: 'Design Graphique',
    heroImage: 'Image_projet/Logo/Logo_islanders.png',
    context: 'Réalisation de plusieurs identités visuelles dans le cadre du BUT MMI. Chaque logo répond à un brief précis, avec ses propres contraintes de couleur, de style et de public cible.',
    publicCible: 'Associations sportives et culturelles, clubs locaux, projets étudiants.',
    objectifs: 'Concevoir des logos mémorables, lisibles en toutes tailles, déclinables sur différents supports et cohérents avec l\'univers de chaque entité.',
    processus: '1. Recueil du brief client. 2. Recherche de références et constitution d\'un moodboard. 3. Esquisses papier. 4. Vectorisation sur Adobe Illustrator. 5. Tests sur supports variés (fond clair, fond sombre, petit format). 6. Livraison en fichiers source et exports.',
    resultats: '3 logos livrés en vectoriel (AI/SVG), déclinés en versions couleur, monochrome et noir & blanc.',
    retour: 'Travailler sur plusieurs logos m\'a appris que chaque identité visuelle doit répondre à des contraintes très différentes selon le contexte. Le logo Islanders, avec ses références culturelles insulaires, a été le plus complexe à équilibrer entre symbolisme et lisibilité.',
    attendus: [
      'Logo déclinable (couleur, noir & blanc, monochrome)',
      'Fichier vectoriel source (AI / SVG)',
      'Export dans différents formats (PNG, SVG, PDF)',
      'Tests sur supports variés',
    ],
    livrables: [
      'Logo Islanders — identité visuelle complète',
      'Logo Boulodrome — version finale',
      'RD Couleurs — palette et déclinaisons',
    ],
    preuves: [
      { label: 'Logo Islanders',  type: 'image', src: 'Image_projet/Logo/Logo_islanders.png' },
      { label: 'Boulodrome',      type: 'image', src: 'Image_projet/Logo/Boulodrome.jpg' },
      { label: 'RD Couleurs',     type: 'image', src: 'Image_projet/Logo/RD_couleurs.png' },
      { label: 'Logo',            type: 'image', src: 'Image_projet/Logo/Logo.png', lightBg: true },
    ],
  },
  {
    id: 12,
    title: 'Affiche Gamescom — Advertiz3d',
    shortDesc: 'Affiche promotionnelle pour la Gamescom, réalisée pour l\'entreprise Advertiz3d.',
    category: 'design-graphique',
    categoryLabel: 'Design Graphique',
    heroImage: 'Image_projet/Affiche/Gamescom.jpg',
    context: 'Projet réalisé pour l\'entreprise Advertiz3d : création d\'une affiche événementielle pour la Gamescom, l\'un des plus grands salons du jeu vidéo au monde. Un vrai brief professionnel, avec des contraintes visuelles imposées par l\'entreprise cliente.',
    publicCible: 'Joueurs, passionnés de gaming, professionnels du secteur vidéoludique.',
    objectifs: 'Concevoir une affiche percutante intégrant les codes visuels du jeu vidéo (typographie dynamique, effets lumineux, couleurs saturées), adaptée aux exigences de communication d\'Advertiz3d.',
    processus: '1. Réception et analyse du brief Advertiz3d. 2. Analyse des visuels Gamescom existants. 3. Recherche d\'une direction artistique originale. 4. Création sur Photoshop et Illustrator. 5. Échanges et validation client. 6. Export HD.',
    resultats: 'Affiche A2 finalisée + visuel publicitaire 3D, livrés à Advertiz3d.',
    retour: 'Travailler pour une vraie entreprise m\'a appris à gérer un brief professionnel, à respecter les attentes d\'un client tout en apportant ma touche créative. Une expérience précieuse pour comprendre la réalité du métier.',
    attendus: [
      'Affiche au format A2',
      'Respect des codes visuels Gamescom',
      'Lisibilité et impact visuel',
      'Export HD pour impression',
    ],
    livrables: [
      'Affiche Gamescom — export HD',
      'Visuel publicitaire 3D',
      'Fichier source Photoshop',
    ],
    preuves: [
      { label: 'Affiche Gamescom', type: 'image', src: 'Image_projet/Affiche/Gamescom.jpg' },
      { label: 'Pub 3D',           type: 'image', src: 'Image_projet/Affiche/ad3d.png' },
    ],
  },
  {
    id: 13,
    title: 'Photographie',
    shortDesc: 'Portfolio photographique personnel : voyage au Japon, nature morte en studio, et reportage à Universal Studios.',
    category: 'audiovisuel',
    categoryLabel: 'Audiovisuel',
    heroImage: 'Image_projet/Photos/japon.jpg',
    context: 'Portfolio photographique mêlant projets BUT MMI et photos personnelles prises lors de mes voyages. La série nature morte a été réalisée en studio dans le cadre du BUT MMI. Les photos du Japon et d\'Universal ont été prises lors de mes voyages personnels — un regard forgé par la découverte de nouveaux horizons.',
    publicCible: 'Tout public, amateurs de photographie de voyage, de nature et de reportage.',
    objectifs: 'Capturer des instants vrais lors de mes voyages et expériences, développer mon œil photographique et maîtriser la retouche sur Lightroom.',
    processus: 'Prises de vue lors de mes voyages (Japon, Universal) et en studio (nature morte). Sélection rigoureuse des clichés. Retouche sur Lightroom (exposition, couleur, contraste, recadrage). Organisation thématique.',
    resultats: '3 séries photographiques retouchées, témoignant d\'une pratique personnelle et d\'un regard singulier forgé par les voyages.',
    retour: 'Voyager m\'a appris à regarder autrement. La photographie est devenue ma façon de garder une trace de ce qui me touche et m\'inspire. Chaque image du Japon me rappelle combien les voyages nourrissent la créativité d\'une façon qu\'aucun cours ne peut reproduire.',
    attendus: [
      'Minimum 3 photos retouchées par série',
      'Retouches cohérentes',
      'Organisation thématique',
      'Exports HD et web',
    ],
    livrables: [
      'Série Japon — voyage',
      'Nature morte — studio',
      'Universal — reportage',
    ],
    preuves: [
      { label: 'Japon',        type: 'image', src: 'Image_projet/Photos/japon.jpg' },
      { label: 'Nature morte', type: 'image', src: 'Image_projet/Photos/nature-morte.jpg' },
      { label: 'Universal',    type: 'image', src: 'Image_projet/Photos/universal.jpg' },
    ],
  },
  {
    id: 14,
    title: 'Let Loose — Stratégie de communication',
    shortDesc: 'Stratégie de communication complète pour Let Loose, marque de vêtements de sport castraise — affiche, charte graphique et posts réseaux.',
    category: 'communication',
    categoryLabel: 'Communication',
    heroImage: 'Image_projet/Let_loose/affiche_let_loose (1).png',
    context: 'Projet réalisé dans le cadre du BUT MMI. La professeure nous a attribué une entreprise réelle sur laquelle concevoir une stratégie de communication complète. Notre groupe a travaillé sur Let Loose, une marque de vêtements de sport basée à Castres. Au sein du groupe, je me suis concentrée sur la partie créative : création de la charte graphique, conception de l\'affiche et production des visuels pour les réseaux sociaux.',
    publicCible: 'Pratiquants de crossfit et de hyrox, hommes et femmes qui s\'entraînent déjà et recherchent des vêtements techniques leur permettant de se sentir à l\'aise et performants lors d\'enchaînements sportifs complexes.',
    objectifs: 'Élaborer une stratégie de communication cohérente pour Let Loose et produire l\'ensemble des livrables créatifs : identité visuelle, affiche et contenus réseaux sociaux.',
    processus: '1. Analyse de l\'entreprise Let Loose et de son positionnement. 2. Définition de la stratégie de communication en groupe. 3. Conception de la charte graphique (couleurs, typographies, logo). 4. Création de l\'affiche de communication. 5. Déclinaison en posts réseaux sociaux. 6. Export et présentation finale.',
    resultats: 'Stratégie de communication complète livrée, charte graphique définie, affiche et visuels réseaux finalisés et présentés à l\'enseignante.',
    retour: 'Ce projet en groupe m\'a permis de prendre en charge l\'intégralité de la dimension créative et de voir comment une direction artistique cohérente peut s\'appliquer sur plusieurs supports à la fois — de l\'affiche aux réseaux sociaux.',
    attendus: [
      'Stratégie de communication rédigée en groupe',
      'Charte graphique complète (couleurs, typographies, identité)',
      'Affiche de communication',
      'Posts réseaux sociaux',
    ],
    livrables: [
      'Affiche Let Loose — export HD',
      'Charte graphique',
      'Visuels réseaux sociaux',
      'Fichier source Illustrator',
    ],
    preuves: [
      { label: 'Affiche Let Loose', type: 'image', src: 'Image_projet/Let_loose/affiche_let_loose (1).png' },
    ],
  },
  {
    id: 15,
    title: 'Motion Design & Animations',
    shortDesc: 'Animation de logo réalisée dans le cadre du BUT MMI — 4 livrables animés cohérents : animation de logo, texte animé, charte graphique et animation créative libre.',
    category: 'audiovisuel',
    categoryLabel: 'Audiovisuel',
    heroImage: null,
    heroVideo: 'Image_projet/Perso/Charte graphique_rendu.mp4',
    context: 'Projet réalisé dans le cadre du BUT MMI. Le brief imposait d\'animer un logo de notre choix en produisant 4 livrables distincts mais visuellement cohérents entre eux : une animation du logo, une animation de texte, une charte graphique animée et une animation créative libre. La cohérence visuelle entre chaque livrable était une contrainte centrale du projet.',
    publicCible: 'Jury académique, potentiels clients ou recruteurs cherchant des compétences en motion design.',
    objectifs: 'Animer un logo choisi librement en produisant 4 déclinaisons animées cohérentes, maîtriser After Effects et démontrer une capacité à maintenir une identité visuelle sur différents formats d\'animation.',
    processus: '1. Choix du logo à animer et analyse de son identité visuelle. 2. Définition d\'une direction artistique commune à tous les livrables pour garantir la cohérence. 3. Storyboard de chaque animation. 4. Création des éléments graphiques et animation sur After Effects. 5. Vérification de la cohérence visuelle entre les 4 productions. 6. Étalonnage et rendu MP4.',
    resultats: '4 animations exportées en MP4 HD, cohérentes visuellement entre elles : animation de logo, texte animé, charte graphique animée et animation créative libre.',
    retour: 'Le motion design m\'a révélé une facette du graphisme que j\'apprécie énormément : la dimension temporelle. Maintenir une cohérence visuelle sur 4 animations différentes m\'a appris à réfléchir à l\'identité visuelle comme un système plutôt que comme des pièces isolées.',
    attendus: [
      'Animation du logo choisie',
      'Animation de texte',
      'Charte graphique animée',
      'Animation créative libre',
      'Cohérence visuelle entre tous les livrables',
    ],
    livrables: [
      'Charte graphique animée — MP4',
      'Animation libre — MP4',
      'Texte animé — MP4',
    ],
    preuves: [
      { label: 'Charte graphique', type: 'video', src: 'Image_projet/Perso/Charte graphique_rendu.mp4' },
      { label: 'Libre',            type: 'video', src: 'Image_projet/Perso/Libre.mp4' },
      { label: 'Texte animé',      type: 'video', src: 'Image_projet/Perso/Texte_animate.mp4' },
    ],
  },
  {
    id: 16,
    title: 'Affiche Stew',
    shortDesc: 'Affiche sportive personnelle créée pour Stewart, mon copain volleyeur — design engagé hors cadre scolaire.',
    category: 'design-graphique',
    categoryLabel: 'Design Graphique',
    heroImage: 'Image_projet/Affiche/Stew.png',
    context: 'Projet 100 % personnel, sans brief ni contrainte académique. Je pratique le volley-ball et mon copain Stewart aussi — j\'ai voulu lui créer une affiche sportive à son image. C\'est aussi une façon de montrer à un club de volley que je ne me limite pas aux projets du BUT MMI : je suis capable de concevoir des visuels sportifs percutants en dehors du cursus scolaire.',
    publicCible: 'Joueurs et clubs de volley-ball, amateurs de design sportif.',
    objectifs: 'Concevoir une affiche sportive personnalisée pour Stewart, explorer un univers graphique ancré dans le sport, et démontrer une polyvalence créative au-delà des projets académiques.',
    processus: '1. Définition libre de la direction artistique autour de l\'univers du volley. 2. Choix des visuels, typographie et palette adaptés à l\'énergie du sport. 3. Composition et mise en page sur Photoshop/Illustrator. 4. Ajustements et export final.',
    resultats: 'Affiche sportive finalisée, présentée au club de volley pour illustrer ma capacité à créer des visuels compétitifs hors BUT MMI.',
    retour: 'Ce projet m\'a permis de sortir du cadre académique et de m\'amuser avec un univers que je vis au quotidien. Créer pour quelqu\'un que je connais bien m\'a donné une vraie liberté tout en restant exigeante sur le rendu final.',
    attendus: [
      'Affiche sportive à l\'identité forte',
      'Design personnalisé autour de l\'univers de Stewart et du volley-ball',
      'Démonstration d\'une pratique créative hors BUT MMI',
    ],
    livrables: [
      'Affiche Stew — export HD',
      'Fichier source',
    ],
    preuves: [
      { label: 'Affiche Stew', type: 'image', src: 'Image_projet/Affiche/Stew.png' },
    ],
  },
  {
    id: 17,
    title: 'Illustrations & Dessins',
    shortDesc: 'Série de dessins et illustrations explorant différentes techniques — graphite, peinture, numérique.',
    category: 'design-graphique',
    categoryLabel: 'Design Graphique',
    heroImage: 'Image_projet/Dessin/raie-manta.jpg',
    context: 'Travaux illustratifs personnels, réalisés en dehors du BUT MMI par goût du dessin depuis l\'enfance : dessins à la main et peintures explorant différentes techniques et thématiques — portrait (œil), paysage, peinture abstraite et illustration naturaliste (raie manta).',
    publicCible: 'Jury académique, futurs employeurs, toute personne sensible à l\'illustration.',
    objectifs: 'Montrer ma capacité à me mouvoir dans différents styles et techniques d\'illustration, du dessin académique à l\'illustration plus stylisée, et témoigner de mon sens de l\'observation.',
    processus: 'Pratique régulière du dessin et de la peinture : observation, croquis, exploration de techniques variées (graphite, aquarelle, peinture, numérique). Chaque illustration répond à une intention esthétique précise.',
    resultats: 'Série de 4 illustrations reflétant ma progression et la diversité de mon travail graphique.',
    retour: 'La pratique du dessin est fondamentale pour développer son sens de l\'observation et sa sensibilité graphique. C\'est ce qui nourrit le plus directement mon approche du design numérique.',
    attendus: [
      'Minimum 3 illustrations de techniques différentes',
      'Démarche personnelle lisible',
      'Qualité d\'exécution',
    ],
    livrables: [
      'Illustration — Œil (graphite)',
      'Paysage (peinture)',
      'Peinture abstraite',
      'Illustration — Raie manta',
    ],
    preuves: [
      { label: 'Œil',        type: 'image', src: 'Image_projet/Dessin/oeil.jpg' },
      { label: 'Paysage',    type: 'image', src: 'Image_projet/Dessin/paysage.jpg' },
      { label: 'Peinture',   type: 'image', src: 'Image_projet/Dessin/peinture.jpg' },
      { label: 'Raie manta', type: 'image', src: 'Image_projet/Dessin/raie-manta.jpg' },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   NAVIGATION
   ───────────────────────────────────────────────────────────── */
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const navigationStateKey = 'portfolio-active-view';

function saveNavigationState(view) {
  try {
    sessionStorage.setItem(navigationStateKey, view);
  } catch (_) {
    // Le portfolio reste utilisable si le navigateur bloque le stockage de session.
  }
}

function getNavigationState() {
  try {
    return sessionStorage.getItem(navigationStateKey);
  } catch (_) {
    return null;
  }
}

function navigateTo(pageId) {
  // Masquer toutes les pages
  pages.forEach(p => p.classList.remove('active'));

  // Activer la page cible — forcer le reflow pour rejouer l'animation CSS
  const target = document.getElementById('page-' + pageId);
  if (target) {
    void target.offsetWidth; // déclenche un reflow, permet à l'animation de se rejouer
    target.classList.add('active');
    saveNavigationState(pageId);
  }

  // Mettre à jour les liens actifs (uniquement les liens principaux, pas le détail)
  navLinks.forEach(l => {
    l.classList.toggle('active', l.dataset.page === pageId);
  });

  // Si on navigue vers les projets, render la grille
  if (pageId === 'projets') {
    renderProjects('all');
    resetFilters();
  }

  // Si on navigue vers l'accueil, render les projets en vedette
  if (pageId === 'accueil') {
    renderFeatured();
  }

  // Fermer le menu mobile
  closeMobileMenu();

  // Scroll vers le haut
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* ─────────────────────────────────────────────────────────────
   GESTION DU MENU MOBILE
   ───────────────────────────────────────────────────────────── */
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

function closeMobileMenu() {
  navMenu.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-label', 'Ouvrir le menu');
  navToggle.setAttribute('aria-expanded', 'false');
}

/* ─────────────────────────────────────────────────────────────
   EVENT LISTENERS DE NAVIGATION GLOBAUX
   ───────────────────────────────────────────────────────────── */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-page]');
  if (btn) {
    e.preventDefault();
    navigateTo(btn.dataset.page);
  }

  const projCard = e.target.closest('[data-project-id]');
  if (projCard) {
    e.preventDefault();
    openProject(parseInt(projCard.dataset.projectId, 10));
  }

  // Fermer le menu mobile si clic hors de la nav
  if (navMenu.classList.contains('open') &&
      !navMenu.contains(e.target) &&
      !navToggle.contains(e.target)) {
    closeMobileMenu();
  }
});

/* ─────────────────────────────────────────────────────────────
   NAVBAR : SCROLLED STATE
   ───────────────────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
});

/* ─────────────────────────────────────────────────────────────
   RENDER : PROJETS EN VEDETTE (HOME)
   ───────────────────────────────────────────────────────────── */
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  // Banksy, ZORA, Photographie
  const featured = [projects[3], projects[1], projects[12]];
  grid.innerHTML = featured.map(p => `
    <div class="featured-card" data-project-id="${p.id}">
      <div class="featured-card-img${p.heroImage ? ' img-loading' : ''}">
        ${
          p.heroImage
            ? `<img src="${p.heroImage}" alt="${p.title}" loading="lazy" onload="this.parentElement.classList.remove('img-loading')" onerror="this.parentElement.classList.remove('img-loading')" />`
            : `<video src="${p.heroVideo}" muted loop playsinline autoplay preload="metadata"></video>`
        }
        <div class="featured-card-overlay">
          <span class="featured-tag">${p.categoryLabel}</span>
        </div>
      </div>
      <div class="featured-card-body">
        <h3>${p.title}</h3>
        <p>${p.shortDesc}</p>
        <span class="card-arrow">Voir le projet →</span>
      </div>
    </div>
  `).join('');
}

/* ─────────────────────────────────────────────────────────────
   RENDER : GRILLE DE PROJETS
   ───────────────────────────────────────────────────────────── */
function renderProjects(filter) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color:var(--muted);grid-column:1/-1;text-align:center;padding:3rem">Aucun projet dans cette catégorie.</p>';
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="proj-card" data-project-id="${p.id}">
      <div class="proj-card-img${p.heroImage ? ' img-loading' : ''}">
        ${
          p.heroImage
            ? `<img src="${p.heroImage}" alt="${p.title}" loading="lazy" onload="this.parentElement.classList.remove('img-loading')" onerror="this.parentElement.classList.remove('img-loading')" />`
            : `<video src="${p.heroVideo}" muted loop playsinline autoplay preload="metadata"></video>`
        }
        <div class="proj-card-overlay">
          <span class="proj-num">${p.id < 10 ? '0' : ''}${p.id}</span>
          <span class="proj-cat-badge">${p.categoryLabel}</span>
        </div>
      </div>
      <div class="proj-card-body">
        <h3>${p.title}</h3>
        <p>${p.shortDesc}</p>
        <span class="proj-card-link">Voir le projet →</span>
      </div>
    </div>
  `).join('');
}

/* ─────────────────────────────────────────────────────────────
   FILTRES DE PROJETS
   ───────────────────────────────────────────────────────────── */
function resetFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === 'all');
  });
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-btn')) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    renderProjects(e.target.dataset.filter);
  }
});

/* ─────────────────────────────────────────────────────────────
   DÉTAIL D'UN PROJET
   ───────────────────────────────────────────────────────────── */
function openProject(id) {
  const p = projects.find(pr => pr.id === id);
  if (!p) return;

  const content = document.getElementById('projectDetailContent');
  if (!content) return;

  const attendusList  = p.attendus.map(a => `<li>${a}</li>`).join('');
  const livrablesList = p.livrables.map(l => `<li>${l}</li>`).join('');

  const preuvesHTML = p.preuves.map((pr, idx) => {
    const media = pr.type === 'video'
      ? `<video src="${pr.src}" muted loop playsinline autoplay preload="metadata"></video>`
      : `<img src="${pr.src}" alt="${pr.label}" loading="lazy" onerror="this.alt='Image non disponible'" />`;
    const lightBgClass = pr.lightBg ? ' proof-thumb--light' : '';
    return `<div class="proof-thumb${lightBgClass}" data-lightbox-idx="${idx}" role="button" tabindex="0">${media}<span class="proof-thumb-label">${pr.label}</span></div>`;
  }).join('');

  const heroHTML = p.heroImage
    ? `<div class="detail-hero-wrap img-loading"><img class="detail-hero-img" src="${p.heroImage}" alt="${p.title}" onload="this.parentElement.classList.remove('img-loading')" onerror="this.parentElement.classList.remove('img-loading')" /></div>`
    : `<video class="detail-hero-img" src="${p.heroVideo}" controls preload="metadata"></video>`;

  content.innerHTML = `
    ${heroHTML}

    <p class="detail-cat">${p.categoryLabel}</p>
    <h1 class="detail-title">${p.title}</h1>
    <p class="detail-desc">${p.shortDesc}</p>
    ${p.liveUrl ? `<div class="detail-live-link-wrap"><a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary"><i class="fas fa-arrow-up-right-from-square"></i> Voir le site en ligne</a></div>` : ''}

    <div class="detail-grid">
      <div class="detail-block">
        <h3><i class="fas fa-bullseye"></i> Contexte &amp; problématique</h3>
        <p>${p.context}</p>
      </div>
      <div class="detail-block">
        <h3><i class="fas fa-users"></i> Public cible</h3>
        <p>${p.publicCible}</p>
      </div>
    </div>

    <div class="detail-full-block">
      <h3><i class="fas fa-flag"></i> Objectifs du projet</h3>
      <p>${p.objectifs}</p>
    </div>

    <div class="detail-full-block">
      <h3><i class="fas fa-route"></i> Processus créatif</h3>
      <p>${p.processus}</p>
    </div>

    <div class="detail-full-block">
      <h3><i class="fas fa-star"></i> Résultat final</h3>
      <p>${p.resultats}</p>
    </div>

    <div class="detail-grid">
      <div class="detail-block">
        <h3><i class="fas fa-list-check"></i> Les attendus</h3>
        <ul>${attendusList}</ul>
      </div>
      <div class="detail-block">
        <h3><i class="fas fa-box-archive"></i> Les livrables</h3>
        <ul>${livrablesList}</ul>
      </div>
    </div>

    <div class="detail-full-block">
      <h3><i class="fas fa-comment-dots"></i> Retour d'expérience</h3>
      <p>${p.retour}</p>
    </div>

    <div class="detail-proofs">
      <h3><i class="fas fa-folder-open"></i> Preuves &amp; livrables visuels</h3>
      <div class="proof-gallery">
        ${preuvesHTML}
      </div>
    </div>
  `;

  // Afficher la page de détail
  pages.forEach(pg => pg.classList.remove('active'));
  document.getElementById('page-projet-detail').classList.add('active');
  saveNavigationState(`projet-${id}`);

  // Désactiver les liens du nav
  navLinks.forEach(l => l.classList.remove('active'));

  window.scrollTo({ top: 0, behavior: 'instant' });

  // Lightbox — ouvrir au clic sur une vignette
  setTimeout(() => {
    const thumbs = content.querySelectorAll('.proof-thumb[data-lightbox-idx]');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => openLightbox(p.preuves, parseInt(thumb.dataset.lightboxIdx)));
      thumb.addEventListener('keydown', e => { if (e.key === 'Enter') openLightbox(p.preuves, parseInt(thumb.dataset.lightboxIdx)); });
    });
  }, 0);
}

/* ─────────────────────────────────────────────────────────────
   FORMULAIRE DE CONTACT
   ───────────────────────────────────────────────────────────── */
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = document.getElementById('c-name');
    const email   = document.getElementById('c-email');
    const message = document.getElementById('c-message');
    let valid = true;

    // Réinitialiser erreurs
    clearError('c-name',    'err-name');
    clearError('c-email',   'err-email');
    clearError('c-message', 'err-message');

    // Valider nom
    if (!name.value.trim()) {
      setError('c-name', 'err-name', 'Veuillez saisir votre nom.');
      valid = false;
    }

    // Valider email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      setError('c-email', 'err-email', 'Veuillez saisir votre adresse e-mail.');
      valid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      setError('c-email', 'err-email', 'Adresse e-mail invalide.');
      valid = false;
    }

    // Valider message
    if (!message.value.trim()) {
      setError('c-message', 'err-message', 'Veuillez saisir un message.');
      valid = false;
    }

    if (valid) {
      const successEl = document.getElementById('formSuccess');

      const showSuccess = () => {
        successEl.hidden = false;
        form.reset();
        setTimeout(() => { successEl.hidden = true; }, 6000);
      };

      // Envoi via Formspree (AJAX — pas de rechargement de page)
      const formData = new FormData(form);
      fetch('https://formspree.io/f/xykldybv', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      })
      .then(res => {
        if (res.ok) { showSuccess(); }
        else { showSuccess(); } // on confirme quand même côté utilisateur
      })
      .catch(showSuccess);
    }
  });
}

function setError(inputId, errId, msg) {
  const input = document.getElementById(inputId);
  const err   = document.getElementById(errId);
  if (input) input.classList.add('error');
  if (err)   err.textContent = msg;
}

function clearError(inputId, errId) {
  const input = document.getElementById(inputId);
  const err   = document.getElementById(errId);
  if (input) input.classList.remove('error');
  if (err)   err.textContent = '';
}

/* ─────────────────────────────────────────────────────────────
   SYSTÈME DE TÉLÉCHARGEMENT CV (CORRIGÉ)
   ───────────────────────────────────────────────────────────── */

// 1. Initialisation de la clé (à mettre une seule fois en haut du bloc)
if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: 'NZlJO9M8WDlkWLnDq' }); 
}

const cvModal = document.getElementById('cvModal');
const triggerBtn = document.getElementById('triggerCvModal');
const closeBtn = document.getElementById('closeCvModal');
const cvForm = document.getElementById('cvDownloadForm');

// Ouverture de la modale
if (triggerBtn) {
  triggerBtn.addEventListener('click', () => {
    cvModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
}

// Fonction pour fermer la modale
const closeCvGate = () => {
  if (cvModal) {
    cvModal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

if (closeBtn) closeBtn.addEventListener('click', closeCvGate);

// Gestion du formulaire
if (cvForm) {
  cvForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const emailValue = document.getElementById('cv-visitor-email').value;
    const honeypot = document.getElementById('cvHoneypot').value;

    if (honeypot !== "") return; 

    if (typeof emailjs !== 'undefined') {
      const now = new Date().toLocaleString('fr-FR', {
        weekday: 'long', year: 'numeric', month: 'long',
        day: 'numeric', hour: '2-digit', minute: '2-digit'
      });

      emailjs.send("service_qk09wyk", "template_tcs8hsh", {
        message:
          'Bonjour Cassandre,\n\n' +
          `Quelqu'un (${emailValue}) vient de télécharger ton CV depuis ton portfolio !\n\n` +
          '📅 Date : ' + now + '\n' +
          '🌐 Page : ' + window.location.href + '\n\n' +
          'Bonne chance pour la suite ! 🎨',
      }).catch(err => console.log("Erreur mail:", err));
    }

    // Téléchargement
    const link = document.createElement('a');
    link.href = 'CV_alternance_new.pdf'; 
    link.download = 'CV_Cassandre_Sanita.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // --- TOAST ESTHÉTIQUE ---
    closeCvGate(); 

    const toast = document.getElementById('cv-toast');
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 4000);
    }
  });
}

/* ATTENTION : Vérifie que la suite de ton code (Lightbox, ScrollTop, init...) est bien présente après cette ligne */
/* ─────────────────────────────────────────────────────────────
   LIGHTBOX
   ───────────────────────────────────────────────────────────── */
let lbItems = [];
let lbIndex = 0;

function createLightbox() {
  if (document.getElementById('lightbox')) return;
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.innerHTML = `
    <div class="lb-backdrop"></div>
    <button class="lb-close" aria-label="Fermer"><i class="fas fa-times"></i></button>
    <button class="lb-prev"  aria-label="Précédent"><i class="fas fa-chevron-left"></i></button>
    <button class="lb-next"  aria-label="Suivant"><i class="fas fa-chevron-right"></i></button>
    <div class="lb-media"></div>
    <div class="lb-caption"></div>
    <div class="lb-counter"></div>
  `;
  document.body.appendChild(lb);

  lb.querySelector('.lb-backdrop').addEventListener('click', closeLightbox);
  lb.querySelector('.lb-close').addEventListener('click', closeLightbox);
  lb.querySelector('.lb-prev').addEventListener('click', () => lbNavigate(-1));
  lb.querySelector('.lb-next').addEventListener('click', () => lbNavigate(1));
  document.addEventListener('keydown', lbKeyHandler);
}

function openLightbox(items, index) {
  createLightbox();
  lbItems = items;
  lbIndex = index;
  lbShow();
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('active');
  document.body.style.overflow = '';
}

function lbNavigate(dir) {
  lbIndex = (lbIndex + dir + lbItems.length) % lbItems.length;
  lbShow();
}

function lbShow() {
  const lb      = document.getElementById('lightbox');
  const media   = lb.querySelector('.lb-media');
  const caption = lb.querySelector('.lb-caption');
  const counter = lb.querySelector('.lb-counter');
  const item    = lbItems[lbIndex];

  media.innerHTML = item.type === 'video'
    ? `<video src="${item.src}" controls autoplay loop playsinline></video>`
    : `<img src="${item.src}" alt="${item.label}" />`;

  // Fond clair si le visuel est noir sur transparent
  media.classList.toggle('lb-media--light', !!item.lightBg);

  caption.textContent = item.label;
  counter.textContent = (lbIndex + 1) + ' / ' + lbItems.length;

  // Masquer les flèches s'il n'y a qu'un seul élément
  lb.querySelector('.lb-prev').style.display = lbItems.length > 1 ? '' : 'none';
  lb.querySelector('.lb-next').style.display = lbItems.length > 1 ? '' : 'none';
}

function lbKeyHandler(e) {
  const lb = document.getElementById('lightbox');
  if (!lb || !lb.classList.contains('active')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   lbNavigate(-1);
  if (e.key === 'ArrowRight')  lbNavigate(1);
}

/* ─────────────────────────────────────────────────────────────
   SCROLL TO TOP
   ───────────────────────────────────────────────────────────── */
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─────────────────────────────────────────────────────────────
   INITIALISATION
   ───────────────────────────────────────────────────────────── */
(function init() {
  const savedView = getNavigationState();
  const savedProjectId = savedView?.match(/^projet-(\d+)$/);

  if (savedProjectId && projects.some(p => p.id === parseInt(savedProjectId[1], 10))) {
    openProject(parseInt(savedProjectId[1], 10));
  } else if (savedView && document.getElementById('page-' + savedView)) {
    navigateTo(savedView);
  } else {
    renderFeatured();
  }
})();