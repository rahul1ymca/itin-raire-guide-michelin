import { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  Calendar, 
  Car, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Compass, 
  DollarSign, 
  FileText, 
  Fuel, 
  Globe, 
  HelpCircle, 
  Layers, 
  Leaf, 
  Lightbulb, 
  Map, 
  MapPin, 
  Navigation, 
  Route, 
  Share2, 
  ShieldCheck, 
  Sparkles, 
  Star, 
  TrendingUp, 
  User, 
  Utensils, 
  Zap 
} from 'lucide-react';
import AdPlacement from './components/AdPlacement';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import Header from './components/Header';
import ReadingProgressBar from './components/ReadingProgressBar';
import RouteCostCalculator from './components/RouteCostCalculator';
import ShareModal from './components/ShareModal';
import TableOfContents from './components/TableOfContents';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [isShareOpen, setIsShareOpen] = useState(false);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#1A1A1A] font-sans antialiased selection:bg-[#BE1B24] selection:text-white">
      {/* 1. Reading Progress Bar */}
      <ReadingProgressBar />

      {/* 2. Main Header */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenShare={() => setIsShareOpen(true)}
      />

      {/* 3. Share Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        lang={lang}
      />

      {/* 4. Top Announcement / Breadcrumb Bar */}
      <div className="bg-neutral-100 border-b border-neutral-200 py-2.5 px-4 text-xs text-neutral-600">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <nav aria-label="Fil d'Ariane / Breadcrumb" className="flex items-center gap-1.5 text-neutral-500">
            <span>Accueil</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Guides Routiers</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#BE1B24] font-semibold">Itinéraire Guide Michelin</span>
          </nav>
          <div className="flex items-center gap-3 text-neutral-500 text-[11px]">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              {lang === 'fr' ? 'Mis à jour : Février 2025' : 'Updated: February 2025'}
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">
              {lang === 'fr' ? 'Format : Guide Complet Référencé' : 'Format: Comprehensive Route Guide'}
            </span>
          </div>
        </div>
      </div>

      {/* Top Banner Ad Placement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* AD PLACEMENT: Leaderboard Top (728x90 or responsive) */}
        <AdPlacement slotId="header-leaderboard" format="leaderboard" label="Sponsor du Voyage Routier" />
      </div>

      {/* 5. Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        {/* ARTICLE HERO SECTION */}
        <article className="relative">
          <header className="mb-8 lg:mb-12">
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#BE1B24]/10 text-[#BE1B24] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'fr' ? 'Dossier Spécial • Mobilité & Gastronomie' : 'Special Feature • Travel & Gastronomy'}</span>
            </div>

            {/* Main H1 - High SEO Value */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-neutral-950 tracking-tight leading-[1.18] mb-6">
              {lang === 'fr' ? (
                <>
                  Itinéraire Guide Michelin : <span className="text-[#BE1B24]">Le Guide Ultime</span> pour Calculer vos Trajets, Péages et Étapes Gastronomiques
                </>
              ) : (
                <>
                  Michelin Guide Itinerary: <span className="text-[#BE1B24]">The Ultimate Guide</span> to Route Planning, Tolls & Gourmet Halts
                </>
              )}
            </h1>

            {/* Editorial Lead / Chapeau */}
            <p className="text-lg sm:text-xl text-neutral-700 font-serif italic leading-relaxed max-w-4xl mb-6">
              {lang === 'fr'
                ? "Pourquoi le calcul d'un itinéraire Guide Michelin demeure-t-il la référence absolue des grands voyageurs et des gourmets ? Découvrez comment optimiser votre feuille de route, anticiper vos dépenses de péage au centime près, emprunter les fameuses « routes vertes » pittoresques et ponctuer votre voyage par les plus belles tables étoilées de France."
                : "Why does the Michelin Guide itinerary remain the gold standard for road trippers and culinary connoisseurs? Learn how to fine-tune your roadbook, forecast exact highway toll and fuel expenses, explore picturesque 'Green Roads', and discover Michelin-starred stops along your route."}
            </p>

            {/* Author Meta & Social Share Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-neutral-200 text-xs sm:text-sm text-neutral-600">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#BE1B24] text-white flex items-center justify-center font-bold font-serif">
                    AM
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-900 block">Alexandre de Montmirail</span>
                    <span className="text-[11px] text-neutral-500">Chroniqueur Automobile & Critique Culinaire</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-500 border-l border-neutral-200 pl-4">
                  <Calendar className="w-4 h-4 text-neutral-400" />
                  <span>15 Janvier 2025</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-500">
                  <Clock className="w-4 h-4 text-neutral-400" />
                  <span>8 min de lecture</span>
                </div>
              </div>

              {/* Share Trigger Button */}
              <button
                id="btn-hero-share"
                onClick={() => setIsShareOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 text-xs font-semibold text-neutral-800 transition-colors shadow-2xs"
              >
                <Share2 className="w-3.5 h-3.5 text-[#BE1B24]" />
                <span>{lang === 'fr' ? 'Partager l’article' : 'Share Article'}</span>
              </button>
            </div>
          </header>

          {/* Hero Visual Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-md mb-12 border border-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=85"
              alt="Itinéraire Guide Michelin sur les routes de France et vignobles"
              referrerPolicy="no-referrer"
              className="w-full h-72 sm:h-96 lg:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white max-w-2xl">
                <span className="px-3 py-1 rounded-full bg-[#BE1B24] text-xs font-bold uppercase tracking-wider inline-block mb-2">
                  {lang === 'fr' ? 'L’Art de la Route' : 'The Art of the Road'}
                </span>
                <p className="text-sm sm:text-base font-serif italic text-neutral-200">
                  {lang === 'fr'
                    ? "« Voyager avec le Guide Michelin, ce n’est pas simplement aller d’un point A à un point B : c’est transformer chaque kilomètre en une expérience sensorielle et culturelle. »"
                    : "« Traveling with the Michelin Guide isn't just about reaching a destination; it's about turning every mile into a cultural and sensory adventure. »"}
                </p>
              </div>
            </div>
          </div>

          {/* TWO-COLUMN EDITORIAL LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* SIDEBAR: Table of Contents & Quick Highlights */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Interactive Table of Contents with jump-on anchor links */}
                <TableOfContents lang={lang} />

                {/* Key Takeaways Card */}
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-2xl p-5 shadow-sm border border-neutral-800">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                    <Award className="w-4 h-4" />
                    <span>{lang === 'fr' ? 'L’Essentiel en 3 Chiffres' : 'Key Highlights'}</span>
                  </div>
                  <ul className="space-y-3 text-xs text-neutral-300">
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#BE1B24] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        1
                      </span>
                      <span>
                        <strong className="text-white">Péages au centime près :</strong> {lang === 'fr' ? 'Prise en compte instantanée des hausses tarifaires annuelles du 1er février.' : 'Precise toll charges updated with French highway grids.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#BE1B24] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        2
                      </span>
                      <span>
                        <strong className="text-white">Route Verte :</strong> {lang === 'fr' ? 'Plus de 15 000 km de routes panoramiques recommandées par les cartographes.' : 'Over 15,000 km of scenic green routes highlighted.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#BE1B24] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        3
                      </span>
                      <span>
                        <strong className="text-white">Tables Étoilées :</strong> {lang === 'fr' ? '600+ restaurants étoilés et 500+ Bib Gourmand géolocalisés.' : '600+ starred restaurants & 500+ Bib Gourmand spots on map.'}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* AD PLACEMENT: Sidebar Banner */}
                <AdPlacement slotId="sidebar-sticky" format="sidebar" label="Sponsor Partenaire Autoroute" />
              </div>
            </aside>

            {/* MAIN ARTICLE BODY */}
            <div className="lg:col-span-8 space-y-12 leading-relaxed text-neutral-800">
              {/* ========================================================================= */}
              {/* SECTION 1: Qu'est-ce que l'Itinéraire Guide Michelin ? */}
              {/* ========================================================================= */}
              <section id="introduction" className="scroll-mt-24">
                <div className="flex items-center gap-2 text-[#BE1B24] text-xs font-bold uppercase tracking-wider mb-2">
                  <Map className="w-4 h-4" />
                  <span>{lang === 'fr' ? 'Chapitre 1 • Fondements' : 'Chapter 1 • Foundations'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 mb-4">
                  {lang === 'fr'
                    ? "1. Qu'est-ce que l'Itinéraire Guide Michelin ? L'Héritage d'une Légende Routière"
                    : "1. What is the Michelin Guide Itinerary? The Legacy of a Road Legend"}
                </h2>

                <p className="text-base sm:text-lg leading-relaxed mb-4">
                  {lang === 'fr' ? (
                    <>
                      Depuis la publication du tout premier <strong>Guide Michelin en 1900</strong> par les frères André et Édouard Michelin, l’art du voyage automobile français a trouvé son phare. Conçu à l'origine pour encourager les pionniers de l’automobile à user leurs pneumatiques en partant explorer les provinces françaises, l’<strong>itinéraire guide michelin</strong> a transcendé le simple tracé géographique pour devenir une véritable philosophie du trajet.
                    </>
                  ) : (
                    <>
                      Since the inception of the first <strong>Michelin Guide in 1900</strong> by brothers André and Édouard Michelin, the art of French road tripping has had its definitive compass. What began as a practical tool to encourage early motorists to explore France has evolved into a travel philosophy centered around comfort, precision, and culinary exploration.
                    </>
                  )}
                </p>

                <p className="text-base leading-relaxed mb-6">
                  {lang === 'fr' ? (
                    <>
                      Aujourd'hui numérisé à travers la plateforme <strong>ViaMichelin</strong> et l'application mobile officielle, le service de <em>calcul d'itinéraire Michelin</em> se différencie radicalement des applications de navigation conventionnelles comme Google Maps ou Waze. Là où les GPS généralistes se contentent de maximiser la vitesse brute en vous faisant parfois traverser des zones résidentielles anxiogènes, l'itinéraire Michelin adopte une approche patrimoniale et économique :
                    </>
                  ) : (
                    <>
                      Today integrated through the <strong>ViaMichelin</strong> digital platform and mobile apps, calculating a Michelin route differs markedly from standard GPS solutions. Rather than merely chasing the absolute fastest minute, Michelin blends precision accounting with panoramic scenic travel:
                    </>
                  )}
                </p>

                {/* 3 Pillars Box */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                  <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-[#BE1B24]/10 text-[#BE1B24] flex items-center justify-center mb-2">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-sm text-neutral-900 mb-1">
                      {lang === 'fr' ? 'Coûts Réels Certifiés' : 'Certified Real Costs'}
                    </h4>
                    <p className="text-xs text-neutral-600">
                      {lang === 'fr'
                        ? "Calcul minutieux des péages selon le gabarit exact du véhicule et barème officiel d'usure kilométrique."
                        : "Accurate toll calculations based on vehicle class and official depreciation formulas."}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                      <Leaf className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-sm text-neutral-900 mb-1">
                      {lang === 'fr' ? 'La Route Verte' : 'The Green Road'}
                    </h4>
                    <p className="text-xs text-neutral-600">
                      {lang === 'fr'
                        ? "Le célèbre tracé touristique vert qui privilégie les paysages spectaculaires et villages remarquables."
                        : "Signature green-lined roads selecting the most picturesque landscapes and historic villages."}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-2">
                      <Utensils className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-sm text-neutral-900 mb-1">
                      {lang === 'fr' ? 'Étapes Étoilées' : 'Starred Dining Stops'}
                    </h4>
                    <p className="text-xs text-neutral-600">
                      {lang === 'fr'
                        ? "Intégration directe des 1, 2 et 3 Étoiles Michelin ainsi que des Bib Gourmand sur votre route."
                        : "Direct inclusion of 1, 2, and 3 Michelin Starred tables and Bib Gourmand gems directly along your route."}
                    </p>
                  </div>
                </div>
              </section>

              {/* ========================================================================= */}
              {/* SECTION 2: Simulateur Interactif */}
              {/* ========================================================================= */}
              <section id="simulateur-couts" className="scroll-mt-24">
                <RouteCostCalculator lang={lang} />
              </section>

              {/* ========================================================================= */}
              {/* SECTION 3: Comment Calculer son Itinéraire Michelin Pas à Pas */}
              {/* ========================================================================= */}
              <section id="comment-calculer" className="scroll-mt-24">
                <div className="flex items-center gap-2 text-[#BE1B24] text-xs font-bold uppercase tracking-wider mb-2">
                  <Route className="w-4 h-4" />
                  <span>{lang === 'fr' ? 'Chapitre 2 • Méthodologie' : 'Chapter 2 • Step-by-Step Guide'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 mb-4">
                  {lang === 'fr'
                    ? "2. Comment Calculer son Itinéraire Michelin Pas à Pas"
                    : "2. How to Calculate Your Michelin Route Step by Step"}
                </h2>

                <p className="text-base leading-relaxed mb-6">
                  {lang === 'fr'
                    ? "Pour obtenir une feuille de route Michelin infaillible, quelques étapes clés permettent de calibrer l’algorithme selon vos priorités de confort, de budget ou de temps :"
                    : "To generate a flawless Michelin roadbook, follow these four core steps to calibrate the algorithm according to your budget and travel pace:"}
                </p>

                <div className="space-y-4">
                  {[
                    {
                      step: '01',
                      titleFR: 'Renseigner le point de départ, la destination et les étapes intermédiaires',
                      titleEN: 'Enter origin, destination, and custom waypoints',
                      descFR: "Indiquez l'adresse précise ou la ville. L'outil vous permet d'ajouter des étapes clés (ex: halte déjeuner à Beaune ou étape nocturne dans le vignoble bordelais) pour construire un véritable road trip.",
                      descEN: 'Specify precise addresses. Add gourmet halts (e.g. lunch in Beaune or an overnight stop in Bordeaux vineyards) to curate a custom itinerary.',
                    },
                    {
                      step: '02',
                      titleFR: 'Personnaliser le profil du véhicule (Carburant & Gabarit)',
                      titleEN: 'Customize vehicle profile (Powertrain & Dimensions)',
                      descFR: 'C’est la grande force de Michelin : entrez votre modèle, votre consommation réelle au 100 km (ex: 6.2 L / 100 km en diesel ou 18 kWh / 100 km en électrique), et si vous tractez une caravane ou conduisez un camping-car (ce qui modifie la classe de péage autoroutière).',
                      descEN: 'A core Michelin strength: input your exact car model, real fuel or electricity consumption, and whether you are towing a trailer or driving a motorhome (which affects toll class).',
                    },
                    {
                      step: '03',
                      titleFR: 'Activer les filtres de route et options d’évitement',
                      titleEN: 'Select route filters and toll avoidance options',
                      descFR: 'Cochez si vous disposez d’un badge télépéage Liber-t, d’une vignette autoroutière (Suisse, Autriche), ou si vous souhaitez impérativement « Éviter les péages » ou « Éviter les autoroutes » pour profiter du réseau secondaire.',
                      descEN: 'Indicate whether you possess a toll transponder or motorway vignette, or toggle "Avoid Tolls" to prioritize scenic departmental roads.',
                    },
                    {
                      step: '04',
                      titleFR: 'Superposer le calque « Tourisme & Restaurants Michelin »',
                      titleEN: 'Enable the "Michelin Tourism & Dining" map layer',
                      descFR: 'Sur la carte interactive, cochez la sélection du Guide Michelin pour faire apparaître les étoiles de la gastronomie, les curiosités 3 étoiles du Guide Vert (vaut le voyage) et les hébergements de charme répertoriés.',
                      descEN: 'Activate the Michelin Guide overlay to reveal starred tables, 3-star Green Guide sights, and boutique hotels situated within minutes of your trajectory.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-neutral-200 shadow-2xs">
                      <span className="font-serif font-black text-xl text-[#BE1B24] shrink-0 pt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="font-bold text-neutral-900 text-sm sm:text-base mb-1">
                          {lang === 'fr' ? item.titleFR : item.titleEN}
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          {lang === 'fr' ? item.descFR : item.descEN}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* IN-ARTICLE AD PLACEMENT 1 */}
              <AdPlacement slotId="in-article-mid" format="in-article" label="Partenaire Hébergement & Étape" />

              {/* ========================================================================= */}
              {/* SECTION 4: Les 4 Profils d'Itinéraires Michelin Décryptés */}
              {/* ========================================================================= */}
              <section id="les-4-profils" className="scroll-mt-24">
                <div className="flex items-center gap-2 text-[#BE1B24] text-xs font-bold uppercase tracking-wider mb-2">
                  <Layers className="w-4 h-4" />
                  <span>{lang === 'fr' ? 'Chapitre 3 • Typologie des Parcours' : 'Chapter 3 • Route Typology'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 mb-4">
                  {lang === 'fr'
                    ? "3. Les 4 Grands Profils d'Itinéraires Michelin Décryptés"
                    : "3. The 4 Signature Michelin Route Profiles Explained"}
                </h2>

                <p className="text-base leading-relaxed mb-6">
                  {lang === 'fr'
                    ? "L'une des signatures de ViaMichelin est d'offrir 4 typologies d'itinéraires distinctes, adaptées à chaque humeur de conduite et contrainte budgétaire :"
                    : "One of Michelin's hallmark features is proposing 4 distinct route profiles tailored to varying driving moods and budgets:"}
                </p>

                {/* Comparative Table */}
                <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-xs bg-white mb-6">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-neutral-100 text-neutral-900 font-serif font-bold border-b border-neutral-200">
                      <tr>
                        <th className="p-3.5 sm:p-4">Profil d'itinéraire</th>
                        <th className="p-3.5 sm:p-4">Priorité Principale</th>
                        <th className="p-3.5 sm:p-4">Type de Réseau</th>
                        <th className="p-3.5 sm:p-4">Budget Péages</th>
                        <th className="p-3.5 sm:p-4">Agrément Visuel</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100 text-neutral-700">
                      <tr className="hover:bg-neutral-50/80 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-[#BE1B24]">Conseillé Michelin</td>
                        <td className="p-3.5 sm:p-4">Sécurité, fluidité & confort</td>
                        <td className="p-3.5 sm:p-4">Mix voies rapides & autoroutes calmes</td>
                        <td className="p-3.5 sm:p-4 font-semibold">Modéré à Standard</td>
                        <td className="p-3.5 sm:p-4 text-amber-500 font-bold">★★★★☆</td>
                      </tr>
                      <tr className="hover:bg-neutral-50/80 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-blue-700">Le plus rapide</td>
                        <td className="p-3.5 sm:p-4">Arrivée express</td>
                        <td className="p-3.5 sm:p-4">100% Autoroute concédée (130 km/h)</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-rose-600">Élevé</td>
                        <td className="p-3.5 sm:p-4 text-amber-500 font-bold">★★☆☆☆</td>
                      </tr>
                      <tr className="hover:bg-neutral-50/80 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-emerald-700">Économique</td>
                        <td className="p-3.5 sm:p-4">Zéro frais superflus</td>
                        <td className="p-3.5 sm:p-4">Nationales (N) & Départementales (D)</td>
                        <td className="p-3.5 sm:p-4 font-bold text-emerald-700">0 € (Gratuit)</td>
                        <td className="p-3.5 sm:p-4 text-amber-500 font-bold">★★★☆☆</td>
                      </tr>
                      <tr className="hover:bg-neutral-50/80 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-amber-700">Découverte (Route Verte)</td>
                        <td className="p-3.5 sm:p-4">Plaisir visuel & patrimoine</td>
                        <td className="p-3.5 sm:p-4">Routes pittoresques & panoramas</td>
                        <td className="p-3.5 sm:p-4 font-semibold">Très faible</td>
                        <td className="p-3.5 sm:p-4 text-amber-500 font-bold">★★★★★</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm">
                  <span className="font-bold">Le Conseil de l'Inspecteur :</span> {lang === 'fr'
                    ? "Pour un trajet vacances type Paris-Marseille, nous vous suggérons d'emprunter l'itinéraire le plus rapide jusqu'à Beaune ou Lyon, puis de basculer sur l'Itinéraire Découverte à travers les gorges de l'Ardèche et les monts du Luberon pour une arrivée inoubliable."
                    : "For vacation routes, consider highway cruising for the first leg, then switching to the Scenic Green Road as you near picturesque regions like Provence or the Alps."}
                </div>
              </section>

              {/* ========================================================================= */}
              {/* SECTION 5: Précision des Coûts : Péages, Carburant & Véhicule */}
              {/* ========================================================================= */}
              <section id="couts-peages-carburant" className="scroll-mt-24">
                <div className="flex items-center gap-2 text-[#BE1B24] text-xs font-bold uppercase tracking-wider mb-2">
                  <Fuel className="w-4 h-4" />
                  <span>{lang === 'fr' ? 'Chapitre 4 • Économie du Trajet' : 'Chapter 4 • Cost Precision'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 mb-4">
                  {lang === 'fr'
                    ? "4. Précision du Calcul des Coûts : Péages, Carburant & Usure Véhicule"
                    : "4. Calculating True Route Costs: Highway Tolls, Fuel & Depreciation"}
                </h2>

                <p className="text-base leading-relaxed mb-4">
                  {lang === 'fr' ? (
                    <>
                      L’une des raisons majeures qui poussent les professionnels et particuliers à privilégier l’<strong>itinéraire guide michelin</strong> est l'exactitude de son estimation financière. Contrairement à d’autres applications qui se basent sur des moyennes approximatives, Michelin croise en permanence les grilles officielles des sociétés concessionnaires d’autoroutes (Vinci Autoroutes, Sanef, APRR, Area, ATMB).
                    </>
                  ) : (
                    <>
                      The primary reason why seasoned road trippers rely on Michelin is financial accuracy. Unlike general navigation apps that estimate tolls casually, Michelin references the official tariff grids from major French concessionaires (Vinci, Sanef, APRR, Area).
                    </>
                  )}
                </p>

                {/* Detailed breakdown list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="p-4 rounded-xl bg-white border border-neutral-200">
                    <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm mb-2">
                      <DollarSign className="w-4 h-4 text-[#BE1B24]" />
                      <span>{lang === 'fr' ? '1. Péages Autoroutiers au Centime Près' : '1. Motorway Tolls to the Cent'}</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {lang === 'fr'
                        ? "Le système identifie la classe de votre véhicule (Classe 1 pour berlines, Classe 2 pour SUV volumineux / utilitaires / monospaces avec galerie ou caravane). Vous connaissez le montant exact avant même de franchir le premier portique de télépéage."
                        : "Detects exact vehicle class (Class 1 standard passenger cars, Class 2 large SUVs or vans with roof boxes). You know the exact cost before approaching the toll gate."}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-neutral-200">
                    <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm mb-2">
                      <Fuel className="w-4 h-4 text-amber-600" />
                      <span>{lang === 'fr' ? '2. Carburant selon Cours des Stations' : '2. Real-Time Station Fuel Rates'}</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {lang === 'fr'
                        ? "En renseignant votre type d’énergie (SP95, E10, SP98, Gazole, GPL ou Électricité), l'algorithme calcule le volume nécessaire selon le profil topographique (relief, montées en col de montagne) et applique le coût moyen actualisé."
                        : "Considers road topography (mountain climbs, flat motorways) and multiplies by current average fuel prices to calculate realistic consumption."}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-neutral-200">
                    <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm mb-2">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                      <span>{lang === 'fr' ? '3. Barème d’Usure Véhicule Michelin' : '3. Michelin Vehicle Depreciation Rate'}</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {lang === 'fr'
                        ? "Option unique au monde : Michelin intègre l'usure mécanique (pneus, amortisseurs, vidange, dépréciation argus), estimée en moyenne à 0,12 € à 0,18 € par kilomètre parcouru."
                        : "A unique Michelin capability: accounts for mechanical wear, tire degradation, and depreciation (roughly 0.12 € to 0.18 € per kilometer)."}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-neutral-200">
                    <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm mb-2">
                      <Zap className="w-4 h-4 text-emerald-600" />
                      <span>{lang === 'fr' ? '4. Recharge Électrique & Bornes Rapides' : '4. EV Fast Charging Hubs'}</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {lang === 'fr'
                        ? "Pour les véhicules électriques, Michelin intègre les bornes de recharge ultra-rapides (Ionity, Fastned, TotalEnergies, Tesla ouvertes) en tenant compte du coût au kWh et de la courbe de charge optimale 20-80%."
                        : "For EV drivers, the planner recommends ultra-fast charging stops (Ionity, Fastned, Tesla) matching optimal 20% to 80% charge intervals."}
                    </p>
                  </div>
                </div>
              </section>

              {/* Visual Break with Michelin Gastronomy Image */}
              <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm my-8">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Étape gastronomique Guide Michelin au cours d'un itinéraire"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="p-4 bg-white border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span>Halte gastronomique sur les routes de Bourgogne • Une tradition Michelin depuis 1926</span>
                  <span className="font-serif italic font-semibold text-neutral-800">« Le voyage en vaut la peine »</span>
                </div>
              </div>

              {/* ========================================================================= */}
              {/* SECTION 6: Associer Gastronomie & Itinéraire : Les Étoiles Michelin */}
              {/* ========================================================================= */}
              <section id="etapes-gastronomiques" className="scroll-mt-24">
                <div className="flex items-center gap-2 text-[#BE1B24] text-xs font-bold uppercase tracking-wider mb-2">
                  <Award className="w-4 h-4" />
                  <span>{lang === 'fr' ? 'Chapitre 5 • Haute Cuisine & Voyage' : 'Chapter 5 • Michelin Stars on the Road'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 mb-4">
                  {lang === 'fr'
                    ? "5. Associer Gastronomie & Itinéraire : Les Étoiles Michelin sur votre Route"
                    : "5. Pairing Gastronomy & Road Trips: Michelin Stars Along Your Route"}
                </h2>

                <p className="text-base leading-relaxed mb-4">
                  {lang === 'fr' ? (
                    <>
                      Savez-vous d’où viennent les définitions historiques des étoiles du Guide Michelin ? Elles ont été créées <strong>exclusivement pour les automobilistes</strong> ! C'est le sens même de l’itinéraire Michelin :
                    </>
                  ) : (
                    <>
                      Did you know that the historic definitions of Michelin Stars were crafted <strong>specifically for motorists</strong>? Here is what each star designation actually means on your roadbook:
                    </>
                  )}
                </p>

                {/* Stars Breakdown Grid */}
                <div className="space-y-3 my-6">
                  <div className="p-4 rounded-xl bg-white border border-neutral-200 flex items-start gap-4">
                    <div className="flex items-center text-amber-500 shrink-0 text-base pt-1">
                      ★★★
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm sm:text-base">
                        3 Étoiles Michelin : <span className="text-[#BE1B24]">« Une cuisine remarquable, vaut le voyage ! »</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                        {lang === 'fr'
                          ? "Ici, le restaurant ne se situe pas simplement sur votre route : c'est la destination finale du voyage ! On planifie tout son itinéraire autour de ce sanctuaire gastronomique (ex: Georges Blanc à Vonnas, Lameloise à Chagny, Flocons de Sel à Megève)."
                          : "The restaurant is not merely a stop: it IS the ultimate purpose of the road trip. Travelers drive hundreds of miles specifically to dine here."}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-neutral-200 flex items-start gap-4">
                    <div className="flex items-center text-amber-500 shrink-0 text-base pt-1">
                      ★★☆
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm sm:text-base">
                        2 Étoiles Michelin : <span className="text-[#BE1B24]">« Une table excellente, mérite un détour ! »</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                        {lang === 'fr'
                          ? "Vous roulez sur l'autoroute A6 ou A7 ? N'hésitez pas à faire 25 ou 40 km de détour pour vivre un repas exceptionnel dans une auberge de prestige avant de reprendre la route."
                          : "Cruising along a main motorway? Making a 20-30 mile detour is richly rewarded by exceptional culinary mastery."}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-neutral-200 flex items-start gap-4">
                    <div className="flex items-center text-amber-500 shrink-0 text-base pt-1">
                      ★☆☆
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm sm:text-base">
                        1 Étoile Michelin : <span className="text-[#BE1B24]">« Une très bonne table dans sa catégorie, vaut l’étape ! »</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                        {lang === 'fr'
                          ? "Parfait pour la pause déjeuner du midi. Évitez les sandwiches insipides d'aire de repos et réservez une table raffinée qui célèbre les produits frais de la région traversée."
                          : "The ideal midday lunch stop. Avoid bland motorway service stations and enjoy a beautifully crafted meal highlighting local terroir."}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Leaf className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-950 text-sm sm:text-base">
                        Étoile Verte & Bib Gourmand : <span className="text-emerald-700">Durabilité et Meilleurs Prix</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-emerald-800/90 mt-1">
                        {lang === 'fr'
                          ? "Les inspecteurs récompensent également les chefs pionniers en écologie (circuit court, potager en permaculture) avec l'Étoile Verte, et les pépites au rapport qualité/prix imbattable (menu complet d’exception sous 40 €) avec le Bib Gourmand."
                          : "The Michelin Green Star honors sustainable gastronomy and permaculture, while the Bib Gourmand highlights extraordinary multi-course dining under 40 €."}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ========================================================================= */}
              {/* SECTION 7: 5 Astuces d'Experts pour Optimiser Votre Trajet */}
              {/* ========================================================================= */}
              <section id="conseils-experts" className="scroll-mt-24">
                <div className="flex items-center gap-2 text-[#BE1B24] text-xs font-bold uppercase tracking-wider mb-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>{lang === 'fr' ? 'Chapitre 6 • Conseils Pratiques' : 'Chapter 6 • Practical Tips'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 mb-4">
                  {lang === 'fr'
                    ? "6. 5 Astuces d'Experts pour Optimiser votre Itinéraire Guide Michelin"
                    : "6. 5 Expert Tips to Perfect Your Michelin Road Trip"}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  {[
                    {
                      num: '1',
                      titleFR: 'Exportez votre feuille de route en PDF avant de partir',
                      titleEN: 'Export your roadbook to PDF before hitting the road',
                      textFR: "Bien que l'application soit connectée, les zones blanches en montagne ou dans les vallées profondes peuvent couper le réseau 4G/5G. Un carnet de route PDF imprimé ou téléchargé reste la garantie absolue.",
                      textEN: 'While mobile apps are reliable, rural valleys and mountain passes frequently lose cellular reception. Having an offline PDF roadbook ensures continuous guidance.',
                    },
                    {
                      num: '2',
                      titleFR: 'Privilégiez les départs en heures creuses pour les péages',
                      titleEN: 'Avoid peak congestion at major toll barriers',
                      textFR: "Les barrières de péage de Saint-Arnoult (A10) ou de Villefranche-sur-Saône (A6) saturent les samedis de chassé-croisé. Ajustez votre heure de départ via le simulateur de trafic en temps réel.",
                      textEN: 'Major toll bottlenecks like Saint-Arnoult saturate on holiday weekends. Use Michelin live traffic modeling to shift departure by 90 minutes.',
                    },
                    {
                      num: '3',
                      titleFR: 'Combinez carte papier Michelin et guidage GPS',
                      titleEN: 'Combine vintage Michelin paper maps with GPS',
                      textFR: "Le GPS vous guide au mètre près, mais la carte papier Michelin (série jaune ou verte à l'échelle 1:200 000) offre la vue d'ensemble indispensable pour repérer les détours sublimes.",
                      textEN: 'A smartphone shows the next turn; a 1:200,000 Michelin regional map reveals the big picture: castles, viewpoint lookouts, and wine roads.',
                    },
                    {
                      num: '4',
                      titleFR: 'Pensez au badge télépéage sans engagement',
                      titleEN: 'Acquire an electronic toll transponder',
                      textFR: "Pour quelques euros par mois utilisé, le badge Liber-t vous permet d'emprunter les voies 'T' à 30 km/h sans vous arrêter, vous épargnant de longues files d'attente.",
                      textEN: 'A Liber-t electronic badge allows you to glide through 30 km/h express toll lanes without stopping for ticket machines.',
                    },
                  ].map((tip) => (
                    <div key={tip.num} className="p-4 rounded-xl bg-white border border-neutral-200 shadow-2xs">
                      <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm mb-1.5">
                        <span className="w-6 h-6 rounded-full bg-[#BE1B24] text-white flex items-center justify-center text-xs">
                          {tip.num}
                        </span>
                        <span>{lang === 'fr' ? tip.titleFR : tip.titleEN}</span>
                      </div>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {lang === 'fr' ? tip.textFR : tip.textEN}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* IN-ARTICLE AD PLACEMENT 2 */}
              <AdPlacement slotId="in-article-bottom" format="in-article" label="Espace Partenaire Assurance & Véhicules" />

              {/* ========================================================================= */}
              {/* SECTION 8: FAQ & Questions Fréquentes */}
              {/* ========================================================================= */}
              <FAQSection lang={lang} />
            </div>
          </div>
        </article>

        {/* Bottom Horizontal Ad Slot */}
        <div className="mt-12">
          {/* AD PLACEMENT: Footer Banner */}
          <AdPlacement slotId="footer-banner" format="footer-banner" label="Régie Publicitaire Réseau Routier & Mobilité" />
        </div>
      </main>

      {/* 6. Footer */}
      <Footer lang={lang} />
    </div>
  );
}
