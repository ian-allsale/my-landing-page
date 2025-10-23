'use client';

import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    // 스크롤 애니메이션 초기화
    const initInViewAnimations = (selector = '.animate-on-scroll') => {
      if (!window.__inViewIO) {
        window.__inViewIO = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
            }
          });
        }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
      }
      
      document.querySelectorAll(selector).forEach((el) => {
        window.__inViewIO.observe(el);
      });
    };

    // 카드 클릭 인터랙션
    const initCardInteractions = () => {
      const container = document.getElementById('card-grid-container');
      if (!container) return;
      
      const cards = container.querySelectorAll('.card-item');
      let activeCard: Element | null = null;
      
      const resetCards = () => {
        cards.forEach((c) => {
          const card = c as HTMLElement;
          card.style.filter = '';
          card.style.opacity = '';
          card.style.transform = '';
          card.style.position = '';
          card.style.zIndex = '';
        });
        activeCard = null;
      };
      
      cards.forEach((card, index) => {
        card.addEventListener('click', function(e) {
          e.stopPropagation();
          
          if (activeCard === card) {
            resetCards();
            return;
          }
          
          // Reset all cards first
          cards.forEach((c) => {
            const cardElement = c as HTMLElement;
            cardElement.style.filter = 'blur(8px)';
            cardElement.style.opacity = '0.4';
            cardElement.style.transform = '';
            cardElement.style.position = 'relative';
            cardElement.style.zIndex = '1';
            cardElement.style.transition = 'all 0.7s ease-out';
          });
          
          // Center and focus the clicked card
          const clickedCard = card as HTMLElement;
          clickedCard.style.filter = 'blur(0px)';
          clickedCard.style.opacity = '1';
          clickedCard.style.transform = 'translate(0, 0) rotate(0deg) scale(1.15)';
          clickedCard.style.position = 'relative';
          clickedCard.style.zIndex = '10';
          clickedCard.style.transition = 'all 0.7s ease-out';
          
          activeCard = card;
        });
      });
      
      // Click outside to reset
      document.addEventListener('click', function(e) {
        if (activeCard && !container.contains(e.target as Node)) {
          resetCards();
        }
      });
    };

    // DOM이 로드된 후 실행
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initInViewAnimations();
        initCardInteractions();
      });
    } else {
      initInViewAnimations();
      initCardInteractions();
    }

    // Cleanup
    return () => {
      if (window.__inViewIO) {
        window.__inViewIO.disconnect();
      }
    };
  }, []);

  return null;
};

// 전역 타입 선언
declare global {
  interface Window {
    __inViewIO: IntersectionObserver | undefined;
  }
}

export default ScrollAnimation;
