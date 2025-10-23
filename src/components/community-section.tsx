'use client';

import { ChevronRight } from 'lucide-react';
import { ALLSALE_CONTENT } from '@/constants/allsale-content';

const CommunitySection = () => {
  const communityImages = [
    'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg',
    'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/de692cd3-6ed5-40da-b589-663e89889a1c_800w.jpg',
    'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/42dfe760-aef6-44a2-bff9-70aa005c5961_800w.jpg',
    'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c18d9fac-84d4-4727-95df-38b04c62ac05_800w.jpg',
    'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c3e3fffd-33c5-442f-924a-7bc1032b2c0f_800w.jpg',
    'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/31996fe3-f9da-42d7-bf65-2cc5d5417271_800w.jpg',
    'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5989c16d-4aa3-4351-bfdb-fac959736459_800w.jpg',
    'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6c39c735-18f1-4b74-aa61-180fbb2b4770_800w.jpg',
    'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cf90a7bf-fee3-4a9d-887b-c46bfea61ba8_800w.jpg',
    'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6209234e-73ff-4176-bf91-c05fa95cc596_800w.jpg',
    'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3f4ec54c-12b4-4eb2-a0c3-1d78cb6c9e02_800w.jpg',
    'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8cfa0961-8c53-4d57-b87c-3b8eaffcd08b_800w.jpg',
    'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/42f0787e-2f7f-4ae7-9c64-3f1d597bf1b8_800w.jpg',
    'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c8701b7a-a3f2-4ad0-95be-f2f027c8e390_800w.jpg',
    'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/83ca20c0-64e5-412d-9c79-224a4ae90b74_800w.jpg',
    'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c920d31f-46c8-4f39-957b-9a8d8e511a1a_800w.jpg',
  ];

  return (
    <section className="sm:px-6 lg:px-8 sm:pb-20 max-w-7xl mx-auto pt-16 px-4 pb-20" id="customers">
      <div className="text-center max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-2 sm:px-4 sm:py-2 animate-on-scroll text-xs font-medium text-blue-300 bg-blue-500/15 border-blue-400/30 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3" style={{ animation: 'fadeSlideIn 0.6s ease-out 0.1s both' }}>
          {ALLSALE_CONTENT.community.badge}
        </span>
        <h2 className="sm:mt-6 sm:text-4xl lg:text-5xl xl:text-6xl animate-on-scroll text-3xl font-semibold tracking-tight mt-6" style={{ animation: 'fadeSlideIn 0.6s ease-out 0.15s both' }}>
          {ALLSALE_CONTENT.community.title}
        </h2>
        <p className="sm:mt-4 sm:text-base animate-on-scroll text-sm font-normal text-neutral-300 mt-3" style={{ animation: 'fadeSlideIn 0.6s ease-out 0.2s both' }}>
          {ALLSALE_CONTENT.community.description}
        </p>
        <div className="sm:mt-6 animate-on-scroll mt-6" style={{ animation: 'fadeSlideIn 0.6s ease-out 0.25s both' }}>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 sm:px-6 py-2 sm:py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-400 transition-colors"
          >
            {ALLSALE_CONTENT.community.cta}
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="relative mt-8 sm:mt-12">
        <div 
          className="mx-auto max-w-6xl overflow-hidden" 
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'destination-in'
          }}
        >
          <div 
            className="flex w-max" 
            style={{ 
              animation: 'marquee-left 80s linear infinite',
              willChange: 'transform'
            }}
          >
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 sm:gap-4 flex-shrink-0 sm:pr-4 animate-on-scroll pr-4 gap-x-2 gap-y-2" style={{ animation: 'fadeSlideIn 0.6s ease-out 0.3s both' }}>
                    {communityImages.map((src, index) => (
                      <div key={index} className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                        <img
                          className="sm:h-28 lg:h-36 w-full h-20 object-cover"
                          src={src}
                          alt="Community member"
                        />
                      </div>
                    ))}
                  </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 flex-shrink-0 pr-2 sm:pr-4">
              {communityImages.map((src, index) => (
                <div key={`duplicate-${index}`} className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                  <img 
                    className="sm:h-28 lg:h-36 w-full h-20 object-cover" 
                    src={src} 
                    alt="Community member" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
