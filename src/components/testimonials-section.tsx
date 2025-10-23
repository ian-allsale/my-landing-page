'use client';

import { ALLSALE_CONTENT } from '@/constants/allsale-content';

const TestimonialsSection = () => {
  return (
    <section className="sm:pt-24 sm:pb-24 animate-on-scroll max-w-7xl mx-auto pt-24 pb-24 px-6">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center rounded-full bg-neutral-900/70 ring-1 ring-white/10 px-3 py-1 text-xs text-neutral-300 border-gradient before:rounded-full animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.1s both' }}>
          {ALLSALE_CONTENT.testimonials.badge}
        </span>
        <h2 className="sm:text-5xl md:text-6xl leading-[1.1] text-4xl tracking-tight mt-6 font-semibold animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.2s both' }}>
          {ALLSALE_CONTENT.testimonials.title}
        </h2>
        <p className="text-base text-neutral-300 mt-4 animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both' }}>
          {ALLSALE_CONTENT.testimonials.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-12">
        {ALLSALE_CONTENT.testimonials.items.map((testimonial) => (
          <div 
            key={testimonial.id}
            className={`relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 sm:p-8 pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-2xl animate-on-scroll bg-[radial-gradient(900px_220px_at_95%_120%,rgba(59,130,246,0.18),transparent)]`}
            style={{ animation: `fadeSlideIn 1s ease-out ${0.2 + (testimonial.id - 1) * 0.05}s both` }}
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>
            <div className="flex items-center gap-1 text-amber-400 animate-on-scroll" style={{ animation: `fadeSlideIn 1s ease-out ${0.1 + (testimonial.id * 0.05)}s both` }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>
            <p className="mt-4 text-base sm:text-lg text-neutral-200 animate-on-scroll" style={{ animation: `fadeSlideIn 1s ease-out ${0.15 + (testimonial.id * 0.05)}s both` }}>
              "{testimonial.quote}"
            </p>
            <div className="mt-6 flex items-center gap-3 animate-on-scroll" style={{ animation: `fadeSlideIn 1s ease-out ${0.2 + (testimonial.id * 0.05)}s both` }}>
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="ring-white/10 ring-1 w-10 h-10 object-cover rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-neutral-100">{testimonial.name}</p>
                <p className="text-xs text-neutral-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
