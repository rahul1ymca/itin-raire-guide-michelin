import { FAQItem, RoutePreset, TableOfContentsItem } from '../types';

export const tableOfContentsFR: TableOfContentsItem[] = [
  { id: 'introduction', title: "1. Qu'est-ce que l'Itinéraire Guide Michelin ?", level: 1 },
  { id: 'simulateur-couts', title: "2. Simulateur Interactif d'Itinéraire & Péages", level: 1 },
  { id: 'comment-calculer', title: "3. Comment Calculer son Itinéraire Michelin Pas à Pas", level: 1 },
  { id: 'les-4-profils', title: "4. Les 4 Profils d'Itinéraires Michelin Décryptés", level: 1 },
  { id: 'couts-peages-carburant', title: "5. Précision des Coûts : Péages, Carburant & Véhicule", level: 1 },
  { id: 'etapes-gastronomiques', title: "6. Associer Gastronomie & Itinéraire : Les Étoiles Michelin", level: 1 },
  { id: 'conseils-experts', title: "7. 5 Astuces d'Experts pour Optimiser Votre Trajet", level: 1 },
  { id: 'faq-section', title: "8. Foire Aux Questions (FAQ SEO)", level: 1 },
];

export const tableOfContentsEN: TableOfContentsItem[] = [
  { id: 'introduction', title: "1. What is the Michelin Guide Route?", level: 1 },
  { id: 'simulateur-couts', title: "2. Interactive Route & Toll Cost Simulator", level: 1 },
  { id: 'comment-calculer', title: "3. How to Calculate Your Michelin Route Step by Step", level: 1 },
  { id: 'les-4-profils', title: "4. The 4 Michelin Route Profiles Explained", level: 1 },
  { id: 'couts-peages-carburant', title: "5. Cost Precision: Tolls, Fuel & Vehicle Wear", level: 1 },
  { id: 'etapes-gastronomiques', title: "6. Pairing Gastronomy & Road Trips: Michelin Stars", level: 1 },
  { id: 'conseils-experts', title: "7. 5 Expert Tips to Optimize Your Journey", level: 1 },
  { id: 'faq-section', title: "8. Frequently Asked Questions (FAQ)", level: 1 },
];

export const routePresets: Record<string, RoutePreset> = {
  'paris-lyon': {
    id: 'paris-lyon',
    origin: 'Paris (Île-de-France)',
    destination: 'Lyon (Rhône-Alpes)',
    tagline: "L'axe historique de la Nationale 6 & de l'Autoroute du Soleil A6",
    routes: {
      recommended: {
        type: 'recommended',
        name: 'Conseillé Michelin',
        description: 'Compromis parfait entre fluidité autoroutière, sécurité et points de vue en Bourgogne.',
        badge: 'Recommandé',
        badgeColor: 'bg-[#BE1B24] text-white',
        distance: '465 km',
        duration: '4h 32min',
        tollCost: 38.60,
        fuelCost: 52.40,
        scenicRating: 4,
      },
      quickest: {
        type: 'quickest',
        name: 'Le plus rapide',
        description: "Plein gaz sur l'A6 via péages continus, minimisant le temps de conduite au maximum.",
        badge: 'Express',
        badgeColor: 'bg-blue-600 text-white',
        distance: '462 km',
        duration: '4h 18min',
        tollCost: 39.80,
        fuelCost: 58.10,
        scenicRating: 2,
      },
      economic: {
        type: 'economic',
        name: 'Économique sans péage',
        description: 'Évite les autoroutes payantes par la N6 et les routes départementales bucoliques.',
        badge: '0 € Péage',
        badgeColor: 'bg-emerald-600 text-white',
        distance: '478 km',
        duration: '6h 45min',
        tollCost: 0.00,
        fuelCost: 46.20,
        scenicRating: 4,
      },
      scenic: {
        type: 'scenic',
        name: 'Itinéraire Découverte (Route Verte)',
        description: 'Chemine à travers le vignoble bourguignon (Côte de Nuits, Beaune, Cluny) et le Morvan.',
        badge: 'Route Verte',
        badgeColor: 'bg-amber-600 text-white',
        distance: '492 km',
        duration: '7h 10min',
        tollCost: 9.40,
        fuelCost: 49.80,
        scenicRating: 5,
      },
    },
    gourmetStops: [
      { name: "La Maison Lameloise", city: "Chagny (Saône-et-Loire)", award: "3 Étoiles Michelin", specialty: "Haute gastronomie bourguignonne sublimée" },
      { name: "Hostellerie de Levernois", city: "Levernois (Beaune)", award: "1 Étoile Michelin", specialty: "Cuisine de terroir et carte des vins mythique" },
      { name: "Le Relais Bernard Loiseau", city: "Saulieu (Côte-d'Or)", award: "2 Étoiles Michelin", specialty: "Jambonnettes de grenouilles et gastronomie morvandelle" },
    ],
  },
  'bordeaux-marseille': {
    id: 'bordeaux-marseille',
    origin: 'Bordeaux (Nouvelle-Aquitaine)',
    destination: 'Marseille (PACA)',
    tagline: 'De l’Atlantique à la Méditerranée via le Canal du Midi et la Provence',
    routes: {
      recommended: {
        type: 'recommended',
        name: 'Conseillé Michelin',
        description: 'Traversée du Sud équilibrée via A62 et A61 avec haltes à Toulouse et Carcassonne.',
        badge: 'Recommandé',
        badgeColor: 'bg-[#BE1B24] text-white',
        distance: '646 km',
        duration: '6h 15min',
        tollCost: 56.20,
        fuelCost: 74.80,
        scenicRating: 4,
      },
      quickest: {
        type: 'quickest',
        name: 'Le plus rapide',
        description: 'Autoroute du Midi A62 puis A9 / A54 directe sans détours.',
        badge: 'Express',
        badgeColor: 'bg-blue-600 text-white',
        distance: '644 km',
        duration: '6h 02min',
        tollCost: 58.10,
        fuelCost: 81.30,
        scenicRating: 3,
      },
      economic: {
        type: 'economic',
        name: 'Économique sans péage',
        description: 'Passe par Montauban, Albi, Béziers et les paysages d’Occitanie.',
        badge: '0 € Péage',
        badgeColor: 'bg-emerald-600 text-white',
        distance: '668 km',
        duration: '9h 40min',
        tollCost: 0.00,
        fuelCost: 65.50,
        scenicRating: 4,
      },
      scenic: {
        type: 'scenic',
        name: 'Itinéraire Découverte (Route Verte)',
        description: 'Détours par la cité médiévale de Carcassonne, les vignobles des Corbières et les Alpilles.',
        badge: 'Route Verte',
        badgeColor: 'bg-amber-600 text-white',
        distance: '685 km',
        duration: '10h 25min',
        tollCost: 14.80,
        fuelCost: 71.20,
        scenicRating: 5,
      },
    },
    gourmetStops: [
      { name: "La Cité de Carcassonne - Franck Putelat", city: "Carcassonne", award: "2 Étoiles Michelin", specialty: "Interprétation contemporaine des trésors du terroir" },
      { name: "Michel Sarran", city: "Toulouse", award: "Sélection Guide Michelin", specialty: "Cassoulet revisité et envolées du Sud-Ouest" },
      { name: "Le Petit Nice - Gérald Passedat", city: "Marseille", award: "3 Étoiles Michelin", specialty: "Poissons sauvages de Méditerranée et bouillon anisé" },
    ],
  },
  'paris-strasbourg': {
    id: 'paris-strasbourg',
    origin: 'Paris (Île-de-France)',
    destination: 'Strasbourg (Alsace)',
    tagline: "Traversée de la Champagne impériale jusqu'à la plaine rhénane",
    routes: {
      recommended: {
        type: 'recommended',
        name: 'Conseillé Michelin',
        description: "Autoroute de l'Est A4 combinée avec contournements optimisés et vues sur Reims.",
        badge: 'Recommandé',
        badgeColor: 'bg-[#BE1B24] text-white',
        distance: '492 km',
        duration: '4h 48min',
        tollCost: 44.50,
        fuelCost: 55.70,
        scenicRating: 3,
      },
      quickest: {
        type: 'quickest',
        name: 'Le plus rapide',
        description: 'Liaison directe par autoroute A4 à 130 km/h.',
        badge: 'Express',
        badgeColor: 'bg-blue-600 text-white',
        distance: '488 km',
        duration: '4h 35min',
        tollCost: 46.10,
        fuelCost: 61.20,
        scenicRating: 2,
      },
      economic: {
        type: 'economic',
        name: 'Économique sans péage',
        description: 'Par la mythique N4 via Nancy et les Vosges gréseuses.',
        badge: '0 € Péage',
        badgeColor: 'bg-emerald-600 text-white',
        distance: '475 km',
        duration: '6h 50min',
        tollCost: 0.00,
        fuelCost: 48.90,
        scenicRating: 4,
      },
      scenic: {
        type: 'scenic',
        name: 'Itinéraire Découverte (Route Verte)',
        description: 'Traverse la Route des Vins de Champagne, les côtes de Meuse et le col du Donon.',
        badge: 'Route Verte',
        badgeColor: 'bg-amber-600 text-white',
        distance: '515 km',
        duration: '7h 55min',
        tollCost: 11.20,
        fuelCost: 53.40,
        scenicRating: 5,
      },
    },
    gourmetStops: [
      { name: "L'Assiette Champenoise - Arnaud Lallement", city: "Tinqueux (Reims)", award: "3 Étoiles Michelin", specialty: "Accords exceptionnels avec les grands champagnes" },
      { name: "Buerehiesel", city: "Strasbourg (Parc de l'Orangerie)", award: "1 Étoile Michelin", specialty: "Cuisine bourgeoise alsacienne dans une maison à colombages" },
      { name: "Au Crocodile", city: "Strasbourg centre", award: "1 Étoile Michelin", specialty: "Institution gastronomique européenne" },
    ],
  },
};

export const faqItemsFR: FAQItem[] = [
  {
    question: "Quelle est la différence fondamentale entre un itinéraire Guide Michelin et Google Maps ou Waze ?",
    answer: "Tandis que Google Maps et Waze se focalisent essentiellement sur le trajet le plus rapide à court terme en évitant les bouchons urbains, l'itinéraire Guide Michelin intègre une vision globale du voyage routier : calcul ultra-précis des péages au centime près, calcul de l'usure du véhicule selon sa motorisation, proposition d'itinéraires touristiques panoramiques (les célèbres 'routes vertes') et intégration directe des restaurants et hôtels recommandés par les inspecteurs du Guide Michelin."
  },
  {
    question: "Comment calculer le coût exact du péage et du carburant avec Michelin ?",
    answer: "Sur le calculateur d'itinéraire Guide Michelin (accessible via ViaMichelin), il vous suffit d'indiquer votre ville de départ et votre destination. Ensuite, affinez votre profil de véhicule : motorisation (essence, diesel, hybride, électrique), consommation moyenne au 100 km, et si vous disposez d'un boîtier télépéage Liber-t. L'algorithme calcule automatiquement le montant des barrières de péage françaises et étrangères et simule le budget carburant en direct selon les cours actualisés des stations."
  },
  {
    question: "Qu'appelle-t-on l'itinéraire 'Conseillé Michelin' ?",
    answer: "L'itinéraire 'Conseillé Michelin' est le tracé de référence conçu par les cartographes Michelin. Il privilégie la sécurité routière, le confort de conduite, la fluidité des voies express et le plaisir visuel tout en évitant les détours superflus et les autoroutes surchargées."
  },
  {
    question: "Peut-on imprimer ou exporter une feuille de route Michelin pour son voyage ?",
    answer: "Absolument. La feuille de route Michelin détaillée peut être imprimée en format carnet de route ou exportée au format PDF. Elle détaille chaque carrefour, chaque échangeur, les radars fixes déclarés, les aires d'autoroute équipées pour les familles, et le moment opportun pour faire une halte gastronomique."
  },
  {
    question: "Comment trouver des restaurants étoilés le long de mon itinéraire Guide Michelin ?",
    answer: "Sur la carte interactive de votre itinéraire, activez la couche 'Guide Michelin'. Vous verrez alors apparaître sous forme de pictogrammes dorés et rouges les établissements distingués : 3 Étoiles (vaut le voyage), 2 Étoiles (mérite un détour), 1 Étoile (très bonne table dans sa catégorie), ainsi que les Bib Gourmand (le meilleur rapport plaisir/prix) et l'Étoile Verte (gastronomie durable)."
  },
  {
    question: "L'itinéraire Michelin est-il adapté aux véhicules électriques (VE) ?",
    answer: "Oui, la cartographie Michelin moderne propose désormais le filtrage spécifique pour véhicules électriques. Il indique les stations de recharge ultra-rapides (Ionity, Fastned, Tesla Superchargers ouverts à tous) positionnées sur votre parcours, en calculant le temps de recharge idéal pendant vos haltes repas."
  }
];

export const faqItemsEN: FAQItem[] = [
  {
    question: "What is the fundamental difference between a Michelin Guide route and Google Maps or Waze?",
    answer: "While Google Maps and Waze prioritize immediate speed and traffic dodging, the Michelin Guide itinerary provides a holistic travel philosophy: ultra-precise toll calculations to the exact cent, vehicle wear estimations based on car type, scenic 'Green Roads' highlighting picturesque landscapes, and seamless integration of hotels and restaurants reviewed by official Michelin Guide inspectors."
  },
  {
    question: "How do I calculate the exact toll and fuel cost with Michelin?",
    answer: "In the Michelin route planner, specify your starting point and destination, then customize your vehicle parameters: fuel type (petrol, diesel, hybrid, EV), average consumption, and whether you carry a toll transponder badge. The algorithm cross-references live fuel rates and French motorway toll grids to give you an exact breakdown."
  },
  {
    question: "What is the 'Michelin Recommended' route profile?",
    answer: "The 'Michelin Recommended' route is the signature itinerary crafted by Michelin cartographers. It balances driving safety, road comfort, scenery, and optimal transit times while avoiding high-stress bottlenecks and unnecessarily toll-heavy detours."
  },
  {
    question: "Can I print or export a Michelin roadbook for my journey?",
    answer: "Yes. The Michelin roadmap and step-by-step driving directions can be printed or downloaded as a PDF roadbook. It includes intersection directions, motorway exits, service rest stops, and designated gourmet halts along the way."
  },
  {
    question: "How do I spot Michelin-starred restaurants along my route?",
    answer: "By enabling the 'Michelin Guide' layer on your route map, icons appear indicating 3-Star ('exceptional cuisine, worth a special journey'), 2-Star ('excellent cooking, worth a detour'), 1-Star ('high quality cooking, worth a stop'), Bib Gourmand (best value), and Green Stars (sustainable gastronomy)."
  },
  {
    question: "Is the Michelin itinerary suitable for Electric Vehicles (EV)?",
    answer: "Yes, modern Michelin route calculation supports EV specifications, suggesting high-speed charging hubs (Ionity, Fastned, open Tesla Superchargers) alongside your path, allowing you to charge while enjoying a gourmet lunch."
  }
];
