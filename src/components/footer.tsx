'use client';

import { ALLSALE_CONTENT } from '@/constants/allsale-content';

const Footer = () => {

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-12">
          {/* Brand */}
          <div className="col-span-2 animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.1s both' }}>
            <a 
              href="#" 
              className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5e2bb527-bd5b-49c0-ab02-6df2869bcd3a_1600w.png)] bg-cover rounded"
            ></a>
            <p className="mt-4 text-sm text-neutral-400 max-w-xs">
              {ALLSALE_CONTENT.footer.description}
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              {ALLSALE_CONTENT.footer.email}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900/60 text-neutral-300 ring-1 ring-white/10 hover:bg-neutral-900 transition" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900/60 text-neutral-300 ring-1 ring-white/10 hover:bg-neutral-900 transition" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900/60 text-neutral-300 ring-1 ring-white/10 hover:bg-neutral-900 transition" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900/60 text-neutral-300 ring-1 ring-white/10 hover:bg-neutral-900 transition" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div className="animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.2s both' }}>
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="mt-4 space-y-3">
              {ALLSALE_CONTENT.footer.links.product.map((link, index) => (
                <li key={link.name} className="animate-on-scroll" style={{ animation: `fadeSlideIn 1s ease-out ${0.25 + (index * 0.05)}s both` }}>
                  <a href={link.href} className="text-sm text-neutral-400 hover:text-white transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div className="animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both' }}>
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-3">
              {ALLSALE_CONTENT.footer.links.resources.map((link, index) => (
                <li key={link.name} className="animate-on-scroll" style={{ animation: `fadeSlideIn 1s ease-out ${0.35 + (index * 0.05)}s both` }}>
                  <a href={link.href} className="text-sm text-neutral-400 hover:text-white transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div className="animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.4s both' }}>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {ALLSALE_CONTENT.footer.links.company.map((link, index) => (
                <li key={link.name} className="animate-on-scroll" style={{ animation: `fadeSlideIn 1s ease-out ${0.45 + (index * 0.05)}s both` }}>
                  <a href={link.href} className="text-sm text-neutral-400 hover:text-white transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div className="animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.5s both' }}>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-3">
              {ALLSALE_CONTENT.footer.links.legal.map((link, index) => (
                <li key={link.name} className="animate-on-scroll" style={{ animation: `fadeSlideIn 1s ease-out ${0.55 + (index * 0.05)}s both` }}>
                  <a href={link.href} className="text-sm text-neutral-400 hover:text-white transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.6s both' }}>
            <p className="text-sm text-neutral-400">
              {ALLSALE_CONTENT.footer.copyright}
            </p>
            <div className="flex items-center gap-6">
              {ALLSALE_CONTENT.footer.bottomLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm text-neutral-400 hover:text-white transition">{link.name}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
