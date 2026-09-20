import { ArrowUp, Award, Compass, Heart, MapPin, Shield } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#141414] text-neutral-300 pt-16 pb-12 border-t border-neutral-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-800/80">
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#BE1B24] flex items-center justify-center text-white font-serif font-black text-lg">
                M
              </div>
              <span className="font-serif tracking-widest text-white font-bold text-lg">
                GUIDE MICHELIN ITINÉRAIRE
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed mb-4">
              {lang === 'fr'
                ? "Dossier éditorial indépendant dédié à la planification de trajets avec le Guide Michelin et ViaMichelin. Optimisation des coûts de péages, gestion du carburant et étapes gourmandes étoilées à travers la France et l'Europe."
                : "Independent editorial dossier dedicated to road trip planning using the Michelin Guide and ViaMichelin. Highway toll optimization, fuel economics, and Michelin-starred culinary stops across France and Europe."}
            </p>
            <div className="flex items-center gap-4 text-xs text-neutral-500">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                {lang === 'fr' ? 'Données Certifiées 2025' : 'Verified Data 2025'}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#BE1B24]" />
                {lang === 'fr' ? 'Cartographie France & Europe' : 'France & Europe Maps'}
              </span>
            </div>
          </div>

          {/* Col 2: Key Topics & Links */}
          <div>
            <h4 className="text-white font-serif font-semibold text-sm uppercase tracking-wider mb-4">
              {lang === 'fr' ? 'Thématiques Clés' : 'Core Topics'}
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a href="#simulateur-couts" className="hover:text-white transition-colors">
                  {lang === 'fr' ? 'Calculateur Péages & Carburant' : 'Toll & Fuel Calculator'}
                </a>
              </li>
              <li>
                <a href="#les-4-profils" className="hover:text-white transition-colors">
                  {lang === 'fr' ? 'Itinéraire Découverte (Route Verte)' : 'Scenic Green Route'}
                </a>
              </li>
              <li>
                <a href="#couts-peages-carburant" className="hover:text-white transition-colors">
                  {lang === 'fr' ? 'Barèmes Sanef, APRR & Vinci' : 'French Toll Networks'}
                </a>
              </li>
              <li>
                <a href="#etapes-gastronomiques" className="hover:text-white transition-colors">
                  {lang === 'fr' ? 'Sélection Restaurants Étoilés' : 'Starred Dining Stops'}
                </a>
              </li>
              <li>
                <a href="#faq-section" className="hover:text-white transition-colors">
                  {lang === 'fr' ? 'FAQ & Assistance Routière' : 'FAQ & Route Help'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Cloudflare & Technical Notes */}
          <div>
            <h4 className="text-white font-serif font-semibold text-sm uppercase tracking-wider mb-4">
              {lang === 'fr' ? 'Spécifications Techniques' : 'Technical Specs'}
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <p className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#BE1B24]" />
                <span>Cloudflare Pages Static Ready</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>SEO On-Page & Schema.org FR</span>
              </p>
              <p className="text-neutral-500 text-[11px] pt-2 leading-relaxed">
                {lang === 'fr'
                  ? 'Ce site est conçu pour un déploiement statique ultra-rapide sur le réseau CDN mondial de Cloudflare sans balise canonique superflue.'
                  : 'Designed for high-speed edge static deployment on Cloudflare CDN network.'}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} Itinéraire Guide Michelin — {lang === 'fr' ? 'Tous droits réservés. Guide non affilié à la Manufacture Michelin.' : 'All rights reserved.'}
          </p>

          <div className="flex items-center gap-4">
            <button
              id="btn-scroll-top-footer"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#BE1B24]" />
              <span>{lang === 'fr' ? 'Haut de page' : 'Back to top'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
