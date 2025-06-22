import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AppContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isScrolled: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Detectar seção ativa com base na posição de rolagem
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'faq', 'contact'];
      const sectionElements = sections.map(section => ({
        id: section,
        element: document.getElementById(section)
      })).filter(section => section.element !== null);
      
      const currentSection = sectionElements.find(section => {
        const rect = section.element?.getBoundingClientRect();
        return rect && rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };
    
    // Gerenciar responsividade
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    // Inicializar estados
    handleResize();
    
    // Adicionar event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Limpar event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <AppContext.Provider 
      value={{ 
        activeSection, 
        setActiveSection, 
        isScrolled, 
        isMobile, 
        isTablet, 
        isDesktop 
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext deve ser usado dentro de um AppProvider');
  }
  return context;
}; 