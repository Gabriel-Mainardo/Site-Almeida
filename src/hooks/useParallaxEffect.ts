import { useEffect } from 'react';

type ParallaxOptions = {
  targetSelector?: string;
  speedAttribute?: string;
};

export const useParallaxEffect = ({
  targetSelector = '.parallax',
  speedAttribute = 'data-speed'
}: ParallaxOptions = {}) => {
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(targetSelector);
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute(speedAttribute) || '0.5';
        const yPos = scrollTop * parseFloat(speed);
        const el = element as HTMLElement;
        el.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetSelector, speedAttribute]);
}; 