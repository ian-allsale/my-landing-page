'use client';

import { ChevronRight, ExternalLink } from 'lucide-react';
import { ALLSALE_CONTENT } from '@/constants/allsale-content';

const CTASection = () => {
  return (
    <section className="sm:pt-24 sm:pb-24 animate-on-scroll max-w-7xl mx-auto pt-24 pb-24 px-6">
      <div className="relative rounded-3xl ring-1 ring-white/10 bg-neutral-900/60 sm:p-16 pt-12 pr-6 pb-12 pl-6 border-gradient before:rounded-3xl overflow-hidden bg-[radial-gradient(900px_400px_at_50%_50%,rgba(59,130,246,0.15),transparent)]">
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="relative text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-semibold animate-on-scroll" style={{ animation: 'fadeSlideIn 0.6s ease-out 0.1s both' }}>
            {ALLSALE_CONTENT.cta.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 mt-6 animate-on-scroll" style={{ animation: 'fadeSlideIn 0.6s ease-out 0.15s both' }}>
            {ALLSALE_CONTENT.cta.description}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll" style={{ animation: 'fadeSlideIn 0.6s ease-out 0.2s both' }}>
            <button className="group inline-flex lg:h-12 leading-none -tracking-[0.02em] outline outline-1 outline-white/10 hover:outline-white/20 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-blue-400/50 text-base font-semibold text-white h-11 w-full sm:w-auto rounded-full pr-8 pl-8 relative items-center justify-center border-gradient before:rounded-full animate-on-scroll" style={{ animation: 'fadeSlideIn 0.6s ease-out 0.25s both' }}>
              <span className="absolute -inset-px h-full w-full overflow-hidden rounded-full" aria-hidden="true">
                <span 
                  className="absolute inset-0 rounded-full" 
                  style={{
                    background: 'linear-gradient(140deg, rgba(15,15,17,1) 0%, rgba(30,30,33,1) 35%, rgba(45,45,50,1) 70%, rgba(20,20,22,1) 100%)'
                  }}
                ></span>
                <span className="absolute -top-[52px] right-1 size-20 bg-blue-400 opacity-15 mix-blend-lighten blur-[35px] rounded-full"></span>
                <span className="absolute top-0 right-1 h-[28px] w-20 bg-blue-300 opacity-20 mix-blend-lighten blur-[25px] rounded-full"></span>
                <span className="absolute -bottom-[42px] -left-[19px] size-20 bg-purple-400 opacity-10 mix-blend-lighten blur-[40px] rounded-full"></span>
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/15 opacity-0 skew-x-12 blur-sm transition-all duration-500 group-hover:opacity-30 group-hover:translate-x-[220%] rounded-full"></span>
                </span>
                <span className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-full"></span>
              </span>
              <span className="z-20 blur-[1px] w-full h-full rounded-full absolute top-0 left-0" aria-hidden="true">
                <span 
                  className="-top-px -left-px z-20 w-full h-full rounded-full absolute" 
                  style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.12)' }}
                ></span>
              </span>
              <span className="relative z-10 flex items-center gap-2 text-[15px] leading-none font-medium -tracking-[0.04em] text-white/95 rounded-full">
                {ALLSALE_CONTENT.cta.buttons.primary}
                <ChevronRight className="w-4 h-4" />
              </span>
              <span className="pointer-events-none absolute inset-0 ring-0 ring-blue-400/0 transition-[ring,opacity] duration-300 group-hover:ring-4 group-hover:opacity-25 rounded-full"></span>
            </button>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2 rounded-full bg-transparent px-6 py-3 text-sm font-medium text-neutral-300 ring-1 ring-white/10 hover:bg-white/5 transition w-full sm:w-auto justify-center animate-on-scroll"
              style={{ animation: 'fadeSlideIn 1s ease-out 0.4s both' }}
            >
              {ALLSALE_CONTENT.cta.buttons.secondary}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <p className="text-xs text-neutral-400 mt-6 animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.5s both' }}>
            {ALLSALE_CONTENT.cta.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
