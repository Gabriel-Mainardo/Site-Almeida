import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { useAppContext } from '@/lib/AppContext';
import { ButtonCustom } from './ui/button-custom';

const Hero = () => {
  const { isMobile, isTablet } = useAppContext();
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleVideoError = () => {
    console.error("Erro ao carregar o vídeo do Hero");
    setVideoError(true);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 pb-8 md:pb-0 md:pt-20 overflow-hidden"
    >
      {/* Vídeo de background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-plum-dark/40 z-10"></div>
        {videoError ? (
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={() => setVideoLoaded(true)}
            onError={handleVideoError}
          >
            <source src="https://i.imgur.com/DTrPv5b.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-plum-dark/20 to-plum-dark/60 z-20"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 z-20"></div>
      </div>
      
      <div className="container mx-auto relative z-30">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className={`transition-opacity duration-1000 ${(videoLoaded || videoError) ? 'opacity-100' : 'opacity-0'}`}>
            <h1 
              className={`poetic-headline mb-4 sm:mb-6 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="block mb-1 sm:mb-3">Almeida conduz</span>
              <span className="gold-gradient-text">sua história</span>
            </h1>
            
            <p 
              className={`text-base sm:text-xl md:text-2xl text-cream/90 mb-6 sm:mb-12 max-w-2xl mx-auto transition-all duration-1000 ease-out delay-300 ${
                isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
              }`}
            >
              Especialista em eventos corporativos e institucionais que conectam pessoas e valorizam a sua marca
            </p>
          </div>
          
          <div 
            className={`flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 transition-all duration-1000 ease-out delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <ButtonCustom
              variant="secondary"
              size={isMobile ? "md" : "lg"}
              icon={<ArrowRight size={18} />}
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto"
            >
              Solicite um orçamento
            </ButtonCustom>
            
            <ButtonCustom
              variant="outline"
              size={isMobile ? "md" : "lg"}
              className="mt-2 sm:mt-0 w-full sm:w-auto"
              onClick={() => scrollToSection('services')}
            >
              Conheça nossos serviços
            </ButtonCustom>
          </div>
        </div>
      </div>
      
      {/* Elementos decorativos adaptados para responsividade */}
      <div className="absolute bottom-10 left-5 w-16 h-16 sm:w-24 sm:h-24 border-l-2 border-b-2 border-gold/40 hidden sm:block z-30"></div>
      <div className="absolute top-10 right-5 w-16 h-16 sm:w-24 sm:h-24 border-r-2 border-t-2 border-gold/40 hidden sm:block z-30"></div>
      
      {/* Elementos decorativos adicionais */}
      <div className="absolute top-1/4 left-10 md:left-20 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gold/5 backdrop-blur-sm hidden sm:block z-30"></div>
      <div className="absolute bottom-1/4 right-10 md:right-20 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gold/5 backdrop-blur-sm hidden sm:block z-30"></div>
      
      {/* Partículas de ouro - adaptadas para responsividade */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
        <div className="absolute top-1/3 left-1/4 w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-gold animate-pulse"></div>
        <div className="absolute top-2/3 left-1/2 w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-gold animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gold animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-gold animate-pulse"></div>
      </div>
      
      {/* Indicador de rolagem - apenas para mobile */}
      {isMobile && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-30 animate-bounce">
          <div className="w-8 h-8 rounded-full border-2 border-gold/50 flex items-center justify-center">
            <div className="w-1 h-3 bg-gold rounded-full"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
