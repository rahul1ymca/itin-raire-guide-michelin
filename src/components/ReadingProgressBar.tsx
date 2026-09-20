import { useEffect, useState } from 'react';

export default function ReadingProgressBar() {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="reading-progress-container"
      className="fixed top-0 left-0 right-0 h-1.5 bg-neutral-200/60 z-50 backdrop-blur-xs"
      aria-hidden="true"
    >
      <div
        id="reading-progress-bar"
        className="h-full bg-[#BE1B24] transition-all duration-75 ease-out shadow-[0_0_8px_rgba(190,27,36,0.5)]"
        style={{ width: `${readingProgress}%` }}
      />
    </div>
  );
}
