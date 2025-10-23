'use client';

import { ALLSALE_CONTENT } from '@/constants/allsale-content';

const KeyMetricsSection = () => {
  return (
    <section className="sm:pt-16 sm:pb-16 max-w-7xl mx-auto pt-16 pb-16 px-6">
      {/* Companies */}
      <div className="text-center mb-12">
        <h3 
          className="text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-8 animate-on-scroll"
          style={{ animation: 'fadeSlideIn 0.6s ease-out 0.1s both' }}
        >
          {ALLSALE_CONTENT.keyMetrics.title}
        </h3>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {ALLSALE_CONTENT.keyMetrics.companies.map((company, index) => (
            <div
              key={company.name}
              className="grayscale hover:grayscale-0 transition-all duration-200 opacity-60 hover:opacity-100 animate-on-scroll"
              style={{ animation: `fadeSlideIn 0.6s ease-out ${0.15 + (index * 0.03)}s both` }}
            >
              <div className="text-2xl font-bold text-neutral-300 hover:text-white transition-colors">
                {company.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {ALLSALE_CONTENT.keyMetrics.metrics.map((metric, index) => (
          <div 
            key={index}
            className="text-center animate-on-scroll"
            style={{ animation: `fadeSlideIn 0.6s ease-out ${0.3 + (index * 0.08)}s both` }}
          >
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {metric.value}
            </div>
            <div className="text-neutral-400 mt-2 text-sm">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyMetricsSection;

