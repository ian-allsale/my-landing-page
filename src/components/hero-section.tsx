'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
      id: 0,
      src: 'https://picsum.photos/320/400?random=1',
      alt: 'Artwork card',
      transform: '-rotate-8 translate-y-3 sm:translate-y-5',
    },
    {
      id: 1,
      src: 'https://picsum.photos/320/400?random=2',
      alt: '3D render card',
      transform: '-rotate-2 translate-y-5 sm:translate-y-7',
    },
    {
      id: 2,
      src: 'https://picsum.photos/320/400?random=3',
      alt: 'Minimal shapes card',
      transform: 'rotate-3 translate-y-2',
    },
    {
      id: 3,
      src: 'https://picsum.photos/320/400?random=4',
      alt: 'Abstract red card',
      transform: 'rotate-0 -translate-y-1',
    },
    {
      id: 4,
      src: 'https://picsum.photos/320/400?random=5',
      alt: 'Mountains card',
      transform: '-rotate-2 translate-y-3',
    },
    {
      id: 5,
      src: 'https://picsum.photos/320/400?random=6',
      alt: 'Green minimal card',
      transform: 'rotate-6 translate-y-6',
    },
  ];

  const handleCardClick = (cardId: number) => {
    if (activeCard === cardId) {
      setActiveCard(null);
    } else {
      setActiveCard(cardId);
    }
  };

  const resetCards = () => {
    setActiveCard(null);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#card-grid-container')) {
        resetCards();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <main className="relative">
      <section className="sm:pb-28 sm:pt-36 max-w-7xl mx-auto pt-36 pb-28 px-6">
        <div className="relative">
          <div className="px-0 py-0 sm:px-0 sm:py-0 lg:px-0">
            {/* Headline */}
            <div 
              className="mx-auto max-w-3xl text-center" 
              style={{ animation: 'fadeSlideIn 1s ease-out 0.1s both' }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-[1.06] tracking-tighter font-semibold">
                Showcase your work to
                <span className="block bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent tracking-tighter font-semibold">
                  the world.
                </span>
              </h1>
            </div>

            {/* Card rail */}
            <div 
              className="sm:mt-12 max-w-5xl mt-12 mx-auto relative" 
              style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both' }}
            >
              {/* creator tag left */}
              <div className="-top-5 sm:-top-7 sm:left-[16%] z-50 absolute left-[12%]">
                <div className="relative">
                  <span className="inline-flex items-center gap-2 border-gradient before:rounded-full text-sm font-medium text-white bg-blue-600 rounded-full pt-1.5 pr-3.5 pb-1.5 pl-3.5 shadow-md">
                    designer
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                  <span className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-blue-600"></span>
                </div>
              </div>

              {/* creator tag right */}
              <div className="-top-4 sm:-top-6 sm:right-[14%] z-50 absolute right-[10%]">
                <div className="relative">
                  <span className="inline-flex items-center gap-2 border-gradient before:rounded-full text-sm font-medium text-white bg-orange-500 rounded-full pt-1.5 pr-3.5 pb-1.5 pl-3.5 shadow-md">
                    artist
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                  <span className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-orange-500"></span>
                </div>
              </div>

              {/* Cards */}
              <div className="flex justify-center">
                <div className="grid grid-cols-6 sm:gap-4 gap-x-3 gap-y-3" id="card-grid-container">
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      className={`card-item col-span-2 sm:col-span-1 self-end transform transition-all duration-700 ease-out cursor-pointer hover:scale-105 ${
                        activeCard === card.id
                          ? 'filter-none opacity-100 scale-115 z-10'
                          : activeCard !== null
                          ? 'filter-blur-sm opacity-40'
                          : card.transform
                      }`}
                      onClick={() => handleCardClick(card.id)}
                    >
                      <div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
                        <img 
                          src={card.src} 
                          alt={card.alt} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subcopy */}
            <p 
              className="mx-auto mt-8 max-w-xl text-center text-base text-neutral-300"
              style={{ animation: 'fadeSlideIn 1s ease-out 0.5s both' }}
            >
              Build your professional portfolio, connect with collectors, and share your creative journey with a global community.
            </p>

            {/* CTAs */}
            <div 
              className="mt-8 flex items-center justify-center gap-4"
              style={{ animation: 'fadeSlideIn 1s ease-out 0.7s both' }}
            >
              <button className="group inline-flex lg:h-11 leading-none -tracking-[0.02em] outline outline-1 outline-white/10 hover:outline-white/20 transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-blue-400/50 text-base font-semibold text-white h-10 max-w-[300px] rounded-full pr-6 pl-6 relative items-center justify-center border-gradient before:rounded-full">
                {/* Dark gradient background */}
                <span className="absolute -inset-px h-full w-full overflow-hidden rounded-full" aria-hidden="true">
                  {/* Core dark gradient */}
                  <span 
                    className="absolute inset-0 rounded-full" 
                    style={{
                      background: 'linear-gradient(140deg, rgba(15,15,17,1) 0%, rgba(30,30,33,1) 35%, rgba(45,45,50,1) 70%, rgba(20,20,22,1) 100%)'
                    }}
                  ></span>
                  {/* Subtle accent glows */}
                  <span className="absolute -top-[52px] right-1 size-20 bg-blue-400 opacity-15 mix-blend-lighten blur-[35px] rounded-full"></span>
                  <span className="absolute top-0 right-1 h-[28px] w-20 bg-blue-300 opacity-20 mix-blend-lighten blur-[25px] rounded-full"></span>
                  <span className="absolute -bottom-[42px] -left-[19px] size-20 bg-purple-400 opacity-10 mix-blend-lighten blur-[40px] rounded-full"></span>
                  {/* Sheen on hover */}
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/15 opacity-0 skew-x-12 blur-sm transition-all duration-700 group-hover:opacity-30 group-hover:translate-x-[220%] rounded-full"></span>
                  </span>
                  {/* Border highlight */}
                  <span className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-full"></span>
                </span>

                {/* Subtle top border */}
                <span className="z-20 blur-[1px] w-full h-full rounded-full absolute top-0 left-0" aria-hidden="true">
                  <span 
                    className="-top-px -left-px z-20 w-full h-full rounded-full absolute" 
                    style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.12)' }}
                  ></span>
                </span>

                {/* Content */}
                <span className="relative z-10 flex items-center gap-1.5 text-[14px] leading-none font-normal -tracking-[0.04em] lg:text-base text-white/95 rounded-full">
                  Get started today
                </span>

                {/* Hover outline feedback */}
                <span className="pointer-events-none absolute inset-0 ring-0 ring-blue-400/0 transition-[ring,opacity] duration-500 group-hover:ring-4 group-hover:opacity-25 rounded-full"></span>
              </button>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-2 rounded-full bg-neutral-800/60 px-5 py-3 text-sm font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-neutral-800 border-gradient before:rounded-full"
              >
                View Examples
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
