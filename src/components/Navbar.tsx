import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useAppContext } from '@/lib/AppContext';
import { useScrollToSection } from '@/hooks/useScrollToSection';

const Navbar = () => {
  const { isScrolled, activeSection, isMobile } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const scrollToSection = useScrollToSection();

  const sections = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'services', label: 'Serviços' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'testimonials', label: 'Depoimentos' },
    { id: 'faq', label: 'Dúvidas' },
    { id: 'contact', label: 'Contato' },
  ];

  // Fechar o menu móvel quando o usuário redimensionar a tela para desktop
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  // Definir o estado logoLoaded como true após o carregamento da página
  useEffect(() => {
    // Pequeno delay para garantir que a animação seja vista
    const timer = setTimeout(() => {
      setLogoLoaded(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  // Impedir rolagem quando o menu móvel estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-plum-dark/90 backdrop-blur-md border-b border-gold/10 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-14 md:h-16 relative px-4">
        <div className="flex items-center justify-center h-full z-10">
          <a 
            href="#home" 
            className="flex items-center justify-center"
            onClick={handleNavClick('home')}
          >
            <div className="relative flex items-center justify-center h-16 md:h-24 w-16 md:w-24 overflow-visible -mt-1 md:-mt-3">
              {/* Efeito de brilho que aparece quando a logo carrega */}
              {logoLoaded && (
                <div className="absolute inset-0 bg-gold/30 rounded-full animate-logo-glow"></div>
              )}
              <img 
                src="https://i.imgur.com/u4di0mJ.png" 
                alt="Almeida - Mestre de Cerimônias" 
                className={`h-10 sm:h-12 md:h-16 ${logoLoaded ? 'animate-logo-fade-in' : 'opacity-0'}`}
                style={{ 
                  filter: 'brightness(0) saturate(100%) invert(76%) sepia(38%) saturate(757%) hue-rotate(6deg) brightness(103%) contrast(91%)',
                  mixBlendMode: 'color-dodge'
                }}
                onLoad={() => setLogoLoaded(true)}
              />
            </div>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1 lg:space-x-4 items-center mr-3">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={handleNavClick(section.id)}
              className={`nav-link text-base lg:text-base ${activeSection === section.id ? 'active' : ''}`}
            >
              {section.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-secondary py-2 px-4 ml-2 text-base lg:py-2 lg:px-4"
            onClick={handleNavClick('contact')}
          >
            Solicite Orçamento
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-center h-full">
          <button 
            className="text-gold z-20 p-2 rounded-full bg-plum-dark/70 backdrop-blur-sm hover:bg-plum-dark/80 transition-colors border border-gold/20 flex items-center justify-center w-10 h-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-plum-dark/95 backdrop-blur-md z-10 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } w-full h-full`}
      >
        <nav className="flex flex-col items-center justify-center h-full w-full">
          <div className="flex flex-col space-y-5 items-center w-full px-6">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={handleNavClick(section.id)}
                className={`${
                  activeSection === section.id 
                    ? 'text-gold font-medium' 
                    : 'text-cream hover:text-gold transition-colors'
                } text-lg relative touch-target py-1 w-full text-center`}
              >
                {section.label}
                {activeSection === section.id && (
                  <span className="absolute -bottom-1 left-1/4 w-1/2 h-0.5 bg-gold"></span>
                )}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn-secondary text-center py-3 px-6 mt-4 text-base w-full max-w-xs"
              onClick={handleNavClick('contact')}
            >
              Solicite Orçamento
            </a>
          </div>
          
          <button 
            className="absolute top-4 right-4 text-gold p-2 rounded-full bg-plum-dark border border-gold/20 touch-target"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
          
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <div className="text-center text-gold/80 text-xs">
              Toque em um item para navegar
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

