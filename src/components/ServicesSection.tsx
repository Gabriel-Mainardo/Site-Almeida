import { Calendar, Users, PenTool, Mic, Award, Clock, Volume2, VolumeX } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { SectionContainer, SectionTitle } from './ui/section-container';
import { useAppContext } from '@/lib/AppContext';
import useEmblaCarousel from 'embla-carousel-react';

// Types
type ServiceFeature = string;

interface Service {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  features: ServiceFeature[];
}

// Data
const services: Service[] = [
  {
    id: 'corporate',
    icon: <Calendar size={24} className="text-gold" />,
    title: 'Cerimonial para Eventos Corporativos',
    description: 'Transformamos seus eventos empresariais em momentos memoráveis, cuidando de cada detalhe com profissionalismo e carinho.',
    features: [
      'Criamos um roteiro exclusivo para seu evento',
      'Conduzimos toda a programação com maestria',
      'Coordenação atenciosa de palestrantes e convidados',
      'Supervisão dedicada da equipe de apoio',
      'Gerenciamento tranquilo de qualquer imprevisto'
    ]
  },
  {
    id: 'institutional',
    icon: <Users size={24} className="text-gold" />,
    title: 'Organização de Eventos Institucionais',
    description: 'Do sonho à realidade: cuidamos de todo o processo do seu evento, desde a primeira ideia até o último detalhe.',
    features: [
      'Desenvolvemos um conceito único para seu evento',
      'Selecionamos os melhores parceiros para você',
      'Gerenciamos seu tempo e investimento com cuidado',
      'Cuidamos de toda a logística com carinho',
      'Acompanhamos cada momento do seu evento'
    ]
  },
  {
    id: 'consulting',
    icon: <PenTool size={24} className="text-gold" />,
    title: 'Consultoria em Planejamento de Eventos',
    description: 'Compartilhamos nossa experiência para ajudar você a criar eventos que superam expectativas.',
    features: [
      'Analisamos seu projeto com olhar especializado',
      'Criamos estratégias personalizadas para você',
      'Compartilhamos as melhores tendências do mercado',
      'Apoiamos suas decisões com conhecimento',
      'Otimizamos seus recursos com sabedoria'
    ]
  }
];

// Informações sobre a importância do mestre de cerimônias
const mcImportance = [
  {
    id: 'flow',
    icon: <Clock size={24} className="text-gold" />,
    title: 'Fluidez do Evento',
    description: 'Um mestre de cerimônias garante que seu evento flua com precisão e elegância, mantendo o cronograma sem que os convidados percebam qualquer ajuste.'
  },
  {
    id: 'communication',
    icon: <Mic size={24} className="text-gold" />,
    title: 'Comunicação Clara',
    description: 'Transmite informações importantes de forma elegante e assertiva, garantindo que todos os participantes se sintam incluídos e bem orientados durante todo o evento.'
  },
  {
    id: 'prestige',
    icon: <Award size={24} className="text-gold" />,
    title: 'Prestígio e Sofisticação',
    description: 'Eleva o nível de sofisticação do seu evento, transmitindo profissionalismo e atenção aos detalhes que refletem positivamente em sua marca ou celebração.'
  }
];

// Imagens do carrossel
const carouselImages = [
  "https://i.imgur.com/DboIvRr.jpeg",
  "https://i.imgur.com/sUqaOYr.jpeg",
  "https://i.imgur.com/aVMxD0Z.jpeg",
  "https://i.imgur.com/1hYlQdC.jpeg",
  "https://i.imgur.com/aMui7g2.jpeg",
  "https://i.imgur.com/R36Y29w.jpeg",
  "https://i.imgur.com/1ERC5oZ.jpeg",
  "https://i.imgur.com/acLLhPx.jpeg",
  "https://i.imgur.com/It6EDrq.jpeg",
  "https://i.imgur.com/oAczFjE.jpeg",
  "https://i.imgur.com/5bqOeIv.jpeg",
  "https://i.imgur.com/0tsMKD1.jpeg",
  "https://i.imgur.com/Q3pHbIp.jpeg",
  "https://i.imgur.com/9277f0e.jpeg",
  "https://i.imgur.com/l3gjSYk.jpeg",
  "https://i.imgur.com/bSrBMBG.jpeg",
  "https://i.imgur.com/soJJkOb.jpeg",
  "https://i.imgur.com/qaRAz05.jpeg",
  "https://i.imgur.com/WNtlxh3.jpeg",
  "https://i.imgur.com/XIb3YnQ.jpeg",
  "https://i.imgur.com/HQOxAJY.jpeg",
  "https://i.imgur.com/ykYAQzC.jpeg"
];

// Components
const ImportanceCard = ({ item }: { item: typeof mcImportance[0] }) => (
  <div className="flex-shrink-0 w-full sm:w-[calc(100%-2rem)] md:w-96 p-4 sm:p-6 rounded-lg bg-navy border border-white/10 hover:border-gold/20 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)]">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-3 sm:mb-4 flex items-center justify-center bg-navy-light/50 border border-gold/30">
      {item.icon}
    </div>
    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gold/90">
      {item.title}
    </h3>
    <p className="text-sm sm:text-base text-gray-300">
      {item.description}
    </p>
  </div>
);

const ServiceCard = ({ service }: { service: Service }) => (
  <div 
    className="p-4 sm:p-6 rounded-lg transition-all duration-300 cursor-pointer group bg-navy border border-white/5 hover:border-gold/20 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] hover:scale-[1.02] hover:bg-navy/90"
  >
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mb-3 sm:mb-4 flex items-center justify-center transition-all duration-300 bg-navy-light/50 group-hover:bg-gold/10 group-hover:transform group-hover:scale-110">
      {service.icon}
    </div>
    <h3 className="text-lg sm:text-xl font-bold mb-2 transition-colors duration-300 text-gray-200 group-hover:text-gold/90">
      {service.title}
    </h3>
    <p className="text-sm sm:text-base transition-colors duration-300 text-gray-400 group-hover:text-gray-300">
      {service.description}
    </p>
  </div>
);

// Componente do Carrossel
const ImageCarousel = () => {
  const autoplay = useCallback((emblaApi: any) => {
    let interval: ReturnType<typeof setInterval> | undefined;
    
    const play = () => {
      stop();
      interval = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        }
      }, 4000); // 4 segundos
    };
    
    const stop = () => {
      if (interval) clearInterval(interval);
    };
    
    return { play, stop };
  }, []);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const autoplayRef = useRef<{ play: () => void; stop: () => void } | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
     
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
     
    // Configurar autoplay
    autoplayRef.current = autoplay(emblaApi);
    autoplayRef.current.play();
     
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      autoplayRef.current?.stop();
    };
  }, [emblaApi, setScrollSnaps, onSelect, autoplay]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselImages.map((src, index) => (
            <div className="flex-[0_0_90%] sm:flex-[0_0_85%] md:flex-[0_0_70%] lg:flex-[0_0_60%] min-w-0 px-1.5 sm:px-2.5 md:px-4 relative" key={index}>
              <div className="aspect-[4/3] md:aspect-[16/9] relative overflow-hidden rounded-md shadow-md bg-plum-dark">
                <img
                  src={src}
                  alt={`Evento ${index + 1}`}
                  className="absolute inset-0 w-full h-full embla-carousel-image"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-dark/40"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component
const ServicesSection = () => {
  const { isMobile } = useAppContext();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => setVideoLoaded(true));
      video.addEventListener('error', () => {
        console.error("Erro ao carregar o vídeo de serviços");
        setVideoError(true);
      });
      
      return () => {
        video.removeEventListener('loadeddata', () => setVideoLoaded(true));
        video.removeEventListener('error', () => setVideoError(true));
      };
    }
  }, []);

  // Função para ativar/desativar som
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <SectionContainer id="services" className="bg-navy-dark">
      <SectionTitle 
        title="Nossos Serviços"
        subtitle="Transformamos suas ideias em experiências inesquecíveis, com muito carinho e profissionalismo"
      />

      {/* Serviços principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Vídeo de introdução */}
      <div className="mb-16 md:mb-20 relative max-w-4xl mx-auto">
        <div className={`transition-opacity duration-1000 ${videoLoaded || videoError ? 'opacity-100' : 'opacity-30'}`}>
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            {videoError ? (
              <div className="w-full responsive-video-container relative">
                <img 
                  src="https://images.unsplash.com/photo-1580375494498-24895321f8ba?q=80&w=2070&auto=format&fit=crop" 
                  alt="Cerimonial de Eventos" 
                  className="w-full h-auto"
                />
              </div>
            ) : (
              <>
                <video 
                  ref={videoRef}
                  id="services-video"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="responsive-video w-full h-auto"
                >
                  <source src="https://i.imgur.com/x87v72i.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
                
                {/* Botão de som - tamanho reduzido no desktop */}
                <button 
                  onClick={toggleMute}
                  className="absolute bottom-2 right-2 z-30 bg-navy-dark/80 hover:bg-navy-dark/90 transition-all duration-300 border border-gold/30 focus:outline-none focus:ring-2 focus:ring-gold/50 flex items-center justify-center w-8 h-8 sm:w-8 sm:h-8 rounded-full"
                  aria-label={isMuted ? "Ativar som" : "Desativar som"}
                >
                  {isMuted ? (
                    <VolumeX size={isMobile ? 14 : 16} className="text-gold" />
                  ) : (
                    <Volume2 size={isMobile ? 14 : 16} className="text-gold" />
                  )}
                </button>
              </>
            )}
            
            {/* Bordas decorativas */}
            <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-l-2 border-gold/40"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-b-2 border-r-2 border-gold/40"></div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Importância do Mestre de Cerimônias */}
      <div className="mb-16">
        <div className="text-center mb-6 sm:mb-10">
          <h3 className="text-xl sm:text-2xl font-bold text-gold mb-2">A Importância do Mestre de Cerimônias</h3>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            O mestre de cerimônias é muito mais que uma voz: é o condutor que transforma seu evento em uma experiência memorável.
          </p>
        </div>
        
        <div className="max-w-full mx-auto">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 justify-center">
            {mcImportance.map(item => (
              <ImportanceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Carrossel de imagens */}
      <div className="mt-12 mb-4">
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gold mb-3">Galeria de Eventos</h3>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Momentos especiais conduzidos com excelência e profissionalismo
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <ImageCarousel />
        </div>
      </div>
    </SectionContainer>
  );
};

export default ServicesSection;
