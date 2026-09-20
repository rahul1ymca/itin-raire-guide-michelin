import { useState } from 'react';
import { Check, Copy, Facebook, Linkedin, Share2, Twitter, X } from 'lucide-react';
import { Language } from '../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export default function ShareModal({ isOpen, onClose, lang }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://itineraire-guide-michelin.pages.dev';
  const shareTitle = lang === 'fr'
    ? "Itinéraire Guide Michelin : Calcul de Trajet, Coûts et Étapes Gastronomiques"
    : "Michelin Guide Itinerary: Route Calculator, Toll Costs & Gourmet Stops";

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareLinks = [
    {
      name: 'X (Twitter)',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(currentUrl)}`,
      color: 'hover:bg-neutral-800 hover:text-white',
    },
    {
      name: 'WhatsApp',
      icon: () => (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
      ),
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + currentUrl)}`,
      color: 'hover:bg-[#25D366] hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      color: 'hover:bg-[#0A66C2] hover:text-white',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      color: 'hover:bg-[#1877F2] hover:text-white',
    },
  ];

  return (
    <div
      id="share-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="share-modal-box"
        className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
          <div className="flex items-center gap-2 text-neutral-900 font-semibold text-lg">
            <Share2 className="w-5 h-5 text-[#BE1B24]" />
            <h3>{lang === 'fr' ? 'Partager cet article' : 'Share this article'}</h3>
          </div>
          <button
            id="btn-close-share-modal"
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-neutral-600 mt-3 mb-5">
          {lang === 'fr'
            ? 'Transmettez ce dossier complet sur l’itinéraire Michelin à vos proches et compagnons de voyage :'
            : 'Share this comprehensive Michelin itinerary guide with fellow travelers:'}
        </p>

        {/* Social Share Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {shareLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-800 transition-all font-medium text-sm ${item.color}`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>

        {/* Copy Link Input */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl border border-neutral-200 bg-neutral-50">
          <input
            type="text"
            readOnly
            value={currentUrl}
            className="flex-1 px-3 py-1.5 text-xs text-neutral-600 bg-transparent border-0 outline-none truncate"
          />
          <button
            id="btn-copy-share-url"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#BE1B24] text-white text-xs font-semibold hover:bg-[#a5151e] transition-colors shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>{lang === 'fr' ? 'Copié !' : 'Copied!'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{lang === 'fr' ? 'Copier' : 'Copy'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
