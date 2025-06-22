import { useCallback } from 'react';
import { useAppContext } from '@/lib/AppContext';

export const useScrollToSection = () => {
  const { setActiveSection } = useAppContext();

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -60; // Ajuste baseado na altura da navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      setActiveSection(id);
    }
  }, [setActiveSection]);

  return scrollToSection;
}; 