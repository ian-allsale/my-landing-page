'use client';

import KeyMetricsSection from '@/components/key-metrics-section';
import FeaturesSection from '@/components/features-section';
import PromotionalCTASection from '@/components/promotional-cta-section';
import CommunitySection from '@/components/community-section';
import TestimonialsSection from '@/components/testimonials-section';
import PricingSection from '@/components/pricing-section';
import CTASection from '@/components/cta-section';
import Footer from '@/components/footer';
import ScrollAnimation from '@/components/scroll-animation';
import { ALLSALE_CONTENT } from '@/constants/allsale-content';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 antialiased scroll-smooth" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
      {/* Aura Background Component - Simplified */}
      <div className="top-0 w-full h-screen -z-10 absolute">
        <div className="absolute w-full h-full left-0 top-0 -z-10 bg-gradient-to-br from-violet-900/30 via-purple-900/20 to-blue-900/30"></div>
      </div>

      {/* Background aura */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-60" 
          style={{
            background: `
              radial-gradient(800px 400px at 20% 10%, rgba(59,130,246,.16), transparent 60%),
              radial-gradient(800px 400px at 80% 10%, rgba(249,115,22,.14), transparent 60%),
              radial-gradient(1000px 600px at 50% 100%, rgba(0,0,0,.08), transparent 70%)
            `
          }}
        ></div>
      </div>

      {/* Progress blur from top */}
      <div className="gradient-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Nav */}
      <header className="fixed z-50 top-0 right-0 left-0 backdrop-blur-sm bg-black/50">
        <div className="max-w-7xl mx-auto pr-6 pl-6">
          <div className="flex h-16 items-center justify-between">
            {/* Brand - ALLSALE Text Logo */}
            <a href="#" className="inline-flex items-center justify-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                ALLSALE
              </span>
            </a>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#customers" className="hover:text-white transition-colors">Customers</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:inline-flex h-9 px-4 items-center justify-center rounded-full bg-neutral-900/60 text-neutral-200 ring-1 ring-white/10 backdrop-blur hover:bg-neutral-900 transition text-sm font-medium">
                Log In
              </button>
              <button className="inline-flex h-9 px-4 items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-400 transition text-sm font-semibold shadow-lg shadow-blue-500/30">
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
        <main className="relative">
          <section className="sm:pb-28 sm:pt-36 max-w-7xl mx-auto pt-36 pb-28 px-6">
            <div className="relative">
              <div className="px-0 py-0 sm:px-0 sm:py-0 lg:px-0">
                {/* Badge */}
                <div className="flex justify-center mb-6 animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.1s both' }}>
                  <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur">
                    <span className="inline-flex items-center text-xs font-medium text-neutral-900 bg-white/90 rounded-full pt-0.5 pr-2 pb-0.5 pl-2">
                      {ALLSALE_CONTENT.hero.badge.label}
                    </span>
                    <span className="text-sm font-medium text-white/90">
                      {ALLSALE_CONTENT.hero.badge.text}
                    </span>
                  </div>
                </div>

                {/* Headline */}
                <div
                  className="mx-auto max-w-3xl text-center"
                  style={{ animation: 'fadeSlideIn 1s ease-out 0.2s both' }}
                >
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-semibold">
                    {ALLSALE_CONTENT.hero.title}
                    <span className="block bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent tracking-tight font-semibold">
                      {ALLSALE_CONTENT.hero.subtitle}
                    </span>
                  </h1>
                  
                  {/* Description */}
                  <p 
                    className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-neutral-300"
                    style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both' }}
                  >
                    {ALLSALE_CONTENT.hero.description}
                  </p>

                  {/* CTA - Moved above images */}
                  <div 
                    className="mt-8 flex items-center justify-center"
                    style={{ animation: 'fadeSlideIn 0.6s ease-out 0.2s both' }}
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
                        {ALLSALE_CONTENT.hero.cta.primary}
                      </span>

                      {/* Hover outline feedback */}
                      <span className="pointer-events-none absolute inset-0 ring-0 ring-blue-400/0 transition-[ring,opacity] duration-500 group-hover:ring-4 group-hover:opacity-25 rounded-full"></span>
                    </button>
                  </div>
                </div>

              {/* Divider */}
              <div className="mx-auto mt-10 max-w-5xl px-2"></div>

              {/* Card rail */}
              <div 
                className="sm:mt-12 max-w-5xl mt-12 mx-auto relative" 
                style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both' }}
              >
                {/* Creator tag left */}
                <div className="-top-5 sm:-top-7 sm:left-[16%] z-50 absolute left-[12%] animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.4s both' }}>
                  <div className="relative">
                    <span className="inline-flex items-center gap-2 border-gradient before:rounded-full text-sm font-medium text-white bg-blue-600 rounded-full pt-1.5 pr-3.5 pb-1.5 pl-3.5 shadow-md">
                      Brand
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </span>
                    <span className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-blue-600"></span>
                  </div>
                </div>

                {/* Creator tag right */}
                <div className="-top-4 sm:-top-6 sm:right-[14%] z-50 absolute right-[10%] animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.5s both' }}>
                  <div className="relative">
                    <span className="inline-flex items-center gap-2 border-gradient before:rounded-full text-sm font-medium text-white bg-orange-500 rounded-full pt-1.5 pr-3.5 pb-1.5 pl-3.5 shadow-md">
                      Creator
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </span>
                    <span className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-orange-500"></span>
                  </div>
                </div>

                {/* Cards */}
                <div className="flex justify-center">
                  <div className="grid grid-cols-6 sm:gap-4 gap-x-3 gap-y-3" id="card-grid-container">
                    {/* Card 1 */}
                    <div className="animate-on-scroll" style={{ animation: 'fadeSlideIn 0.6s ease-out 0.3s both' }}>
                      <div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-8 translate-y-3 sm:translate-y-5 transition-all duration-500 ease-out cursor-pointer hover:scale-105">
                        <div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-300 hover:shadow-2xl">
                          <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3d5923b9-321c-4e35-ac04-0d7fb5c483b1_320w.webp" alt="Artwork card" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="animate-on-scroll" style={{ animation: 'fadeSlideIn 0.6s ease-out 0.35s both' }}>
                      <div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-2 translate-y-5 sm:translate-y-7 transition-all duration-500 ease-out cursor-pointer hover:scale-105">
                        <div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-300 hover:shadow-2xl">
                          <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c5fb864f-cf3d-4942-9629-249d52477022_800w.webp" alt="3D render card" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                    {/* Card 3 */}
                    <div className="animate-on-scroll" style={{ animation: 'fadeSlideIn 0.6s ease-out 0.4s both' }}>
                      <div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-3 translate-y-2 transition-all duration-500 ease-out cursor-pointer hover:scale-105">
                        <div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-300 hover:shadow-2xl">
                          <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/58cdb928-9435-44fa-b69e-7acebfffa0f7_800w.webp" alt="Minimal shapes card" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                    {/* Card 4 */}
                    <div className="animate-on-scroll" style={{ animation: 'fadeSlideIn 0.6s ease-out 0.45s both' }}>
                      <div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-0 -translate-y-1 transition-all duration-500 ease-out cursor-pointer hover:scale-105">
                        <div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-300 hover:shadow-2xl">
                          <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3c4f1dea-f838-465a-bfd2-8fbbf334a6bc_320w.webp" alt="Abstract red card" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                    {/* Card 5 */}
                    <div className="animate-on-scroll" style={{ animation: 'fadeSlideIn 0.6s ease-out 0.5s both' }}>
                      <div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-2 translate-y-3 transition-all duration-500 ease-out cursor-pointer hover:scale-105">
                        <div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-300 hover:shadow-2xl">
                          <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/773cd99d-a5ac-4c9a-b312-b9b3e3a42002_800w.webp" alt="Mountains card" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                    {/* Card 6 */}
                    <div className="animate-on-scroll" style={{ animation: 'fadeSlideIn 0.6s ease-out 0.55s both' }}>
                      <div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-6 translate-y-6 transition-all duration-500 ease-out cursor-pointer hover:scale-105">
                        <div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-300 hover:shadow-2xl">
                          <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/97837bc2-4cb4-44a3-8f15-444c524bd4c0_800w.webp" alt="Green minimal card" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section divider */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full bg-white/10"></div>
        </div>
      </main>

      {/* Key Metrics Section */}
      <KeyMetricsSection />

      {/* Section divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px w-full bg-white/10"></div>
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Promotional CTA Section */}
      <PromotionalCTASection />

      {/* Community Section */}
      <CommunitySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* Section divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px w-full bg-white/10"></div>
      </div>

      {/* Scroll Animation Script */}
      <ScrollAnimation />
    </div>
  );
}
