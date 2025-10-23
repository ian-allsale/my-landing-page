'use client';

import { ALLSALE_CONTENT } from '@/constants/allsale-content';

const PromotionalCTASection = () => {
  return (
    <section className="sm:pt-20 sm:pb-20 max-w-7xl mx-auto pt-20 pb-20 px-6">
      <div className="relative rounded-3xl ring-1 ring-white/10 bg-neutral-900/60 sm:p-16 pt-12 pr-6 pb-12 pl-6 border-gradient before:rounded-3xl overflow-hidden bg-[radial-gradient(900px_400px_at_50%_50%,rgba(59,130,246,0.15),transparent)]">
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="relative text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.1s both' }}>
            {ALLSALE_CONTENT.promotionalCta1.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 mt-6 animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.2s both' }}>
            {ALLSALE_CONTENT.promotionalCta1.description}
          </p>
          
          <div className="mt-10 animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both' }}>
            <button className="inline-flex h-12 px-8 items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-400 transition text-base font-semibold shadow-lg shadow-blue-500/30">
              {ALLSALE_CONTENT.promotionalCta1.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalCTASection;

