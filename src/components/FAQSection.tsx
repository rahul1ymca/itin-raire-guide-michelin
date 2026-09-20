import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqItemsEN, faqItemsFR } from '../data/articleData';
import { Language } from '../types';

interface FAQSectionProps {
  lang: Language;
}

export default function FAQSection({ lang }: FAQSectionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const items = lang === 'fr' ? faqItemsFR : faqItemsEN;

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="faq-section" className="my-12 scroll-mt-20">
      <div className="flex items-center gap-2.5 text-[#BE1B24] font-semibold text-sm uppercase tracking-wider mb-2">
        <HelpCircle className="w-4 h-4" />
        <span>{lang === 'fr' ? 'Foire Aux Questions' : 'Frequently Asked Questions'}</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 mb-4">
        {lang === 'fr'
          ? "Questions Fréquentes sur l'Itinéraire Guide Michelin"
          : "Frequently Asked Questions About Michelin Itineraries"}
      </h2>
      <p className="text-neutral-600 text-sm mb-6 max-w-2xl leading-relaxed">
        {lang === 'fr'
          ? "Retrouvez les réponses d'experts aux interrogations courantes des automobilistes pour préparer leur feuille de route Michelin, estimer leurs frais d'autoroute et choisir leurs étapes."
          : "Expert answers to common motorist questions when preparing a Michelin road trip, estimating motorway costs, and booking gourmet stops."}
      </p>

      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen ? 'bg-white border-[#BE1B24]/30 shadow-xs' : 'bg-white/80 border-neutral-200'
              }`}
            >
              <button
                id={`faq-toggle-${idx}`}
                onClick={() => toggleIndex(idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between p-5 text-left gap-4 cursor-pointer"
              >
                <span className="font-serif font-semibold text-base sm:text-lg text-neutral-900">
                  {item.question}
                </span>
                <span
                  className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 ${
                    isOpen ? 'bg-[#BE1B24] text-white rotate-180' : 'bg-neutral-100 text-neutral-500'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-neutral-700 text-sm sm:text-base leading-relaxed border-t border-neutral-100">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
