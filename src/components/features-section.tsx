'use client';

import { ALLSALE_CONTENT } from '@/constants/allsale-content';
import { Search, Send, Bot } from 'lucide-react';

const FeaturesSection = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'search':
        return <Search className="w-6 h-6" />;
      case 'send':
        return <Send className="w-6 h-6" />;
      case 'bot':
        return <Bot className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <section className="sm:pt-24 sm:pb-24 animate-on-scroll max-w-7xl mx-auto pt-24 pb-24 px-6" id="features">
      <div className="animate-on-scroll text-center max-w-2xl mx-auto" style={{ animation: 'fadeSlideIn 1s ease-out 0.1s both' }}>
        <span className="inline-flex items-center ring-1 ring-white/10 border-gradient before:rounded-full text-xs text-neutral-300 bg-neutral-900/70 rounded-full pt-1 pr-3 pb-1 pl-3 font-sans">
          {ALLSALE_CONTENT.features.badge}
        </span>
        <h2 className="sm:text-5xl md:text-6xl leading-[1.1] text-4xl font-semibold tracking-tight mt-6 font-sans">
          {ALLSALE_CONTENT.features.title}
        </h2>
        <p className="text-base text-neutral-300 mt-4 font-sans">
          {ALLSALE_CONTENT.features.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
        {ALLSALE_CONTENT.features.items.map((feature, index) => (
          <div 
            key={feature.id}
            className="relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 sm:p-8 pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-2xl animate-on-scroll hover:ring-blue-400/30 transition-all duration-300"
            style={{ animation: `fadeSlideIn 0.6s ease-out ${0.1 + (index * 0.05)}s both` }}
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>
            
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20 mb-6">
              {getIcon(feature.icon)}
            </div>

            {/* Content */}
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-sm text-neutral-300 mb-6">{feature.description}</p>

            {/* Image */}
            <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-neutral-950/50">
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
