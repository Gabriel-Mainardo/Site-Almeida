import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AppContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isScrolled: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  windowWidth: number;
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
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

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
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsDesktop(width >= 1024);
      
      // Forçar atualização do viewport em dispositivos móveis
      if (width < 768) {
        // Pequeno hack para forçar o recálculo do layout em dispositivos móveis
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
      }
    };
    
    // Inicializar estados
    handleResize();
    
    // Adicionar event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    // Executar handleResize após um pequeno delay para garantir que o layout esteja estável
    const timeoutId = setTimeout(handleResize, 100);
    
    // Limpar event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      clearTimeout(timeoutId);
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
        isDesktop,
        windowWidth
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