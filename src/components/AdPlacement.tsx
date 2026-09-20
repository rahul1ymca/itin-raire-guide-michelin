interface AdPlacementProps {
  slotId: string;
  format: 'leaderboard' | 'in-article' | 'sidebar' | 'footer-banner';
  label?: string;
}

export default function AdPlacement({ slotId, format, label }: AdPlacementProps) {
  // Format configurations
  const formatStyles = {
    leaderboard: 'w-full max-w-4xl min-h-[90px] md:min-h-[110px] my-6',
    'in-article': 'w-full max-w-3xl min-h-[140px] md:min-h-[250px] my-8',
    sidebar: 'w-full min-h-[250px] md:min-h-[300px] my-4',
    'footer-banner': 'w-full max-w-5xl min-h-[100px] my-8',
  };

  return (
    <div
      id={`ad-slot-${slotId}`}
      className={`mx-auto flex flex-col items-center justify-center p-3 rounded-xl border border-dashed border-neutral-300 bg-neutral-100/60 text-neutral-500 transition-colors ${formatStyles[format]}`}
      aria-label="Publicité / Advertisement Slot"
    >
      {/* 
        =================================================================================
        CLOUDFLARE / GOOGLE ADSENSE / HEADER BIDDING MONETIZATION SLOT
        =================================================================================
        Slot ID: ${slotId}
        Format: ${format}
        Instructions: 
        1. Replace the inner placeholder below with your AdSense / Cloudflare Zaraz / Ezoic script:
           <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                data-ad-slot="1234567890"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        2. Call (window.adsbygoogle = window.adsbygoogle || []).push({});
        =================================================================================
      */}
      <div className="flex items-center gap-2 mb-1.5 text-[11px] font-mono tracking-wider uppercase text-neutral-400">
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
        <span>{label || 'Espace Publicitaire / Sponsor Spot'}</span>
        <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-200 text-neutral-600">
          {format === 'leaderboard' ? '728x90' : format === 'sidebar' ? '300x250' : 'Format Adaptatif'}
        </span>
      </div>

      <div className="flex flex-col items-center justify-center text-center p-4">
        <p className="text-xs text-neutral-500 font-medium">
          Emplacement prêt pour monétisation Cloudflare & Google AdSense
        </p>
        <p className="text-[10px] text-neutral-400 mt-0.5">
          (Zone réservée aux bannières partenaires, équipements auto ou tourisme gastronomique)
        </p>
      </div>
    </div>
  );
}
