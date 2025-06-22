import { useEffect } from 'react';

type IntersectionOptions = {
  threshold?: number;
  rootMargin?: string;
  activeClass?: string;
  targetSelector?: string;
};

export const useIntersectionObserver = ({
  threshold = 0.15,
  rootMargin = "0px 0px -100px 0px",
  activeClass = 'active',
  targetSelector = '.slide-in'
}: IntersectionOptions = {}) => {
  
  useEffect(() => {
    const sections = document.querySelectorAll(targetSelector);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(activeClass);
        }
      });
    }, { threshold, rootMargin });
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [threshold, rootMargin, activeClass, targetSelector]);
}; 