'use client';

import { Check } from 'lucide-react';
import { ALLSALE_CONTENT } from '@/constants/allsale-content';

const PricingSection = () => {
  return (
    <section className="sm:pt-24 sm:pb-24 animate-on-scroll max-w-7xl mx-auto pt-24 pb-24 px-6" id="pricing">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center rounded-full bg-neutral-900/70 ring-1 ring-white/10 px-3 py-1 text-xs text-neutral-300 border-gradient before:rounded-full animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.1s both' }}>
          {ALLSALE_CONTENT.pricing.badge}
        </span>
        <h2 className="sm:text-5xl md:text-6xl leading-[1.1] text-4xl tracking-tight mt-6 font-semibold animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.2s both' }}>
          {ALLSALE_CONTENT.pricing.title}
        </h2>
        <p className="text-base text-neutral-300 mt-4 animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both' }}>
          {ALLSALE_CONTENT.pricing.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
        {ALLSALE_CONTENT.pricing.plans.map((plan) => (
          <div 
            key={plan.id}
            className={`relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 sm:p-8 pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-2xl animate-on-scroll ${
              plan.featured 
                ? 'ring-blue-400/30 bg-[radial-gradient(900px_220px_at_50%_50%,rgba(59,130,246,0.22),transparent)] md:scale-105 shadow-2xl shadow-blue-500/20' 
                : ''
            }`}
            style={{ animation: `fadeSlideIn 1s ease-out ${0.2 + ((plan.id - 1) * 0.05)}s both` }}
          >
            <div className={`absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none ${
              plan.featured ? 'via-blue-400/50' : ''
            }`}></div>
            
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </span>
              </div>
            )}
            
            <h3 className="text-xl font-semibold animate-on-scroll" style={{ animation: `fadeSlideIn 1s ease-out ${0.1 + (plan.id * 0.05)}s both` }}>{plan.name}</h3>
            <p className="text-sm text-neutral-400 mt-2 animate-on-scroll" style={{ animation: `fadeSlideIn 1s ease-out ${0.15 + (plan.id * 0.05)}s both` }}>{plan.description}</p>
            
            <div className="mt-6 animate-on-scroll" style={{ animation: `fadeSlideIn 1s ease-out ${0.2 + (plan.id * 0.05)}s both` }}>
              <span className="text-5xl tracking-tight font-semibold">{plan.price}</span>
              <span className="text-neutral-400 text-base">{plan.period}</span>
            </div>
            
            <ul className="mt-8 space-y-3 animate-on-scroll" style={{ animation: `fadeSlideIn 1s ease-out ${0.25 + (plan.id * 0.05)}s both` }}>
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-neutral-300 animate-on-scroll" style={{ animation: `fadeSlideIn 1s ease-out ${0.3 + (plan.id * 0.05) + (index * 0.02)}s both` }}>
                  <Check className="w-5 h-5 text-emerald-400" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className={`${plan.buttonClass} animate-on-scroll`} style={{ animation: `fadeSlideIn 1s ease-out ${0.4 + (plan.id * 0.05)}s both` }}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
