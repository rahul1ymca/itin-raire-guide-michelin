import { useState } from 'react';
import { Compass, Globe, Menu, Share2, Sparkles, X } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenShare: () => void;
}

export default function Header({ lang, onToggleLang, onOpenShare }: HeaderProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navLinks = [
    { href: '#introduction', labelFR: 'Introduction', labelEN: 'Intro' },
    { href: '#simulateur-couts', labelFR: 'Simulateur', labelEN: 'Calculator' },
    { href: '#comment-calculer', labelFR: 'Calcul pas à pas', labelEN: 'Step by Step' },
    { href: '#les-4-profils', labelFR: '4 Profils', labelEN: '4 Profiles' },
    { href: '#couts-peages-carburant', labelFR: 'Péages & Frais', labelEN: 'Tolls & Fees' },
    { href: '#etapes-gastronomiques', labelFR: 'Étoiles Michelin', labelEN: 'Michelin Stars' },
    { href: '#faq-section', labelFR: 'FAQ', labelEN: 'FAQ' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 75;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
      setMobileNavOpen(false);
    }
  };

  return (
    <header
      id="main-header"
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-all shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo & Brand */}
          <a
            href="#introduction"
            className="flex items-center gap-3 group text-decoration-none"
            onClick={(e) => handleNavClick(e, '#introduction')}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#BE1B24] flex items-center justify-center text-white shadow-xs font-serif font-black text-lg group-hover:scale-105 transition-transform">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-widest text-neutral-900 font-extrabold text-sm sm:text-base leading-tight">
                GUIDE MICHELIN
              </span>
              <span className="text-[10px] tracking-widest font-semibold text-[#BE1B24] uppercase">
                {lang === 'fr' ? 'Itinéraires & Art du Voyage' : 'Road Trips & Gastronomy'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80 transition-colors"
              >
                {lang === 'fr' ? link.labelFR : link.labelEN}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher (FR / EN toggle requested by user) */}
            <button
              id="btn-language-toggle"
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-neutral-300 bg-neutral-50 hover:bg-neutral-100 text-xs font-semibold text-neutral-800 transition-colors cursor-pointer shadow-2xs"
              title={lang === 'fr' ? 'Traduire en anglais' : 'Switch to French'}
              aria-label="Changer de langue / Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-[#BE1B24]" />
              <span>{lang === 'fr' ? 'FR ➔ EN' : 'EN ➔ FR'}</span>
              <span className="text-[10px] px-1 py-0.2 rounded bg-neutral-200 text-neutral-600 font-mono">
                {lang.toUpperCase()}
              </span>
            </button>

            {/* Share Button (requested by user) */}
            <button
              id="btn-open-share-header"
              onClick={onOpenShare}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#BE1B24] hover:bg-[#a5151e] text-white text-xs font-semibold transition-all cursor-pointer shadow-xs hover:shadow-sm"
              aria-label="Partager l'article"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === 'fr' ? 'Partager' : 'Share'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              id="btn-mobile-menu"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="xl:hidden p-2 rounded-xl text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
              aria-label="Menu"
              aria-expanded={mobileNavOpen}
            >
              {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileNavOpen && (
          <div className="xl:hidden py-4 border-t border-neutral-100 animate-in slide-in-from-top-2 duration-150">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-xl text-xs font-medium text-neutral-700 bg-neutral-50 hover:bg-neutral-100"
                >
                  {lang === 'fr' ? link.labelFR : link.labelEN}
                </a>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-neutral-100 text-xs text-neutral-500">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#BE1B24]" />
                {lang === 'fr' ? 'Édition Spéciale Grands Trajets' : 'Special Route Edition'}
              </span>
              <span className="flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-neutral-400" />
                ViaMichelin 2025
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
