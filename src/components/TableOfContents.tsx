import { useEffect, useState } from 'react';
import { Bookmark, ChevronDown, ChevronRight, Clock, List } from 'lucide-react';
import { tableOfContentsEN, tableOfContentsFR } from '../data/articleData';
import { Language } from '../types';

interface TableOfContentsProps {
  lang: Language;
}

export default function TableOfContents({ lang }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('introduction');
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);

  const items = lang === 'fr' ? tableOfContentsFR : tableOfContentsEN;

  useEffect(() => {
    const handleIntersection = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = items.length - 1; i >= 0; i--) {
        const el = document.getElementById(items[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleIntersection, { passive: true });
    handleIntersection();
    return () => window.removeEventListener('scroll', handleIntersection);
  }, [items]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
      setActiveId(id);
      setIsOpenMobile(false);
    }
  };

  return (
    <nav
      id="table-of-contents"
      aria-label="Sommaire de l'article"
      className="bg-white rounded-2xl border border-neutral-200/80 shadow-xs p-5 transition-all"
    >
      <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
        <div className="flex items-center gap-2.5 text-neutral-900 font-serif font-bold text-lg">
          <List className="w-5 h-5 text-[#BE1B24]" />
          <span>{lang === 'fr' ? 'Sommaire Interactif' : 'Table of Contents'}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium bg-neutral-100 px-2.5 py-1 rounded-full">
          <Clock className="w-3.5 h-3.5 text-neutral-400" />
          <span>{lang === 'fr' ? '8 min de lecture' : '8 min read'}</span>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        id="btn-toggle-mobile-toc"
        onClick={() => setIsOpenMobile(!isOpenMobile)}
        className="lg:hidden w-full flex items-center justify-between py-2.5 text-sm font-medium text-neutral-700 mt-2"
        aria-expanded={isOpenMobile}
      >
        <span className="flex items-center gap-2">
          <Bookmark className="w-4 h-4 text-[#BE1B24]" />
          {lang === 'fr' ? 'Afficher les sections' : 'Show sections'}
        </span>
        {isOpenMobile ? (
          <ChevronDown className="w-4 h-4 text-neutral-500" />
        ) : (
          <ChevronRight className="w-4 h-4 text-neutral-500" />
        )}
      </button>

      {/* Links List */}
      <ul
        id="toc-list"
        className={`mt-3 space-y-1.5 transition-all duration-200 ${
          isOpenMobile ? 'block' : 'hidden lg:block'
        }`}
      >
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`group flex items-start gap-2.5 px-3 py-2 rounded-xl text-sm transition-all duration-150 ${
                  isActive
                    ? 'bg-[#BE1B24]/10 text-[#BE1B24] font-semibold pl-4 border-l-3 border-[#BE1B24]'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                <span className="mt-0.5 shrink-0 text-xs text-neutral-400 group-hover:text-neutral-600">
                  {item.title.split('.')[0]}.
                </span>
                <span className="leading-snug">
                  {item.title.substring(item.title.indexOf('.') + 1).trim()}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      {/* Subtle Hint */}
      <div className="mt-4 pt-3 border-t border-neutral-100 hidden lg:block">
        <p className="text-[11px] text-neutral-400 leading-relaxed italic">
          {lang === 'fr'
            ? '💡 Cliquez sur un titre pour accéder directement au paragraphe.'
            : '💡 Click any chapter to jump directly to that section.'}
        </p>
      </div>
    </nav>
  );
}
