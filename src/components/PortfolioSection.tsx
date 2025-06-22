import { useState, useRef, useEffect } from 'react';
import { Instagram, AlertCircle, Volume2, VolumeX, Play, Calendar, Users } from 'lucide-react';
import { SectionContainer, SectionTitle } from './ui/section-container';
import { useAppContext } from '@/lib/AppContext';

const portfolioItems = [
  {
    id: 1,
    title: 'Conexão Interprise Evento de networking',
    description: 'Evento empresarial dedicado a conexões profissionais e oportunidades de networking entre líderes de mercado.',
    category: 'corporativo',
    videoUrl: 'https://i.imgur.com/nLLd2ES.mp4'
  },
  {
    id: 2,
    title: 'Conveção Grupo Andreazza',
    description: 'Evento corporativo anual do Grupo Andreazza reunindo lideranças e colaboradores para alinhamento estratégico.',
    category: 'corporativo',
    videoUrl: 'https://i.imgur.com/JeeRKmh.mp4'
  },
  {
    id: 3,
    title: 'Evento Businessfest',
    description: 'Festival de negócios com foco em inovação, tendências de mercado e oportunidades para empreendedores.',
    category: 'institucional',
    videoUrl: 'https://i.imgur.com/nQB467z.mp4'
  },
  {
    id: 4,
    title: 'Aniversário Município de Ipê',
    description: 'Celebração oficial do aniversário da cidade de Ipê com programação cultural e homenagens às tradições locais.',
    category: 'institucional',
    videoUrl: 'https://i.imgur.com/zu7Za0a.mp4'
  },
  {
    id: 5,
    title: '7° Expoconveniencia-Sindipetro Serra Gaucha',
    description: 'Exposição anual do setor de conveniência promovida pelo Sindipetro da Serra Gaúcha em sua sétima edição.',
    category: 'corporativo',
    videoUrl: 'https://i.imgur.com/7UATyWq.mp4'
  },
  {
    id: 6,
    title: 'Solenidade de Posse - Órgão Público',
    description: 'Cerimônia oficial de transmissão de cargo com autoridades governamentais.',
    category: 'institucional',
    videoUrl: 'https://i.imgur.com/XLUGZB8.mp4'
  }
];

const PortfolioSection = () => {
  const { isMobile } = useAppContext();
  const [filter, setFilter] = useState('todos');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [videoErrors, setVideoErrors] = useState<{[key: number]: boolean}>({});
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [thumbnailsLoaded, setThumbnailsLoaded] = useState<{[key: number]: boolean}>({});
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const thumbnailRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const filteredItems = filter === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  useEffect(() => {
    // Verificar quais vídeos estão disponíveis para evitar erros
    const checkVideosAvailability = async () => {
      for (const portfolioItem of portfolioItems) {
        try {
          const response = await fetch(portfolioItem.videoUrl, { method: 'HEAD' });
          if (!response.ok) {
            setVideoErrors(prev => ({...prev, [portfolioItem.id]: true}));
            console.error(`Vídeo não disponível: ${portfolioItem.videoUrl}`);
          }
        } catch (error) {
          setVideoErrors(prev => ({...prev, [portfolioItem.id]: true}));
          console.error(`Erro ao verificar vídeo ${portfolioItem.id}:`, error);
        }
      }
    };

    checkVideosAvailability();
  }, []);

  const handleVideoError = (id: number) => {
    console.error(`Erro ao carregar o vídeo ${id}`);
    setVideoErrors(prev => ({...prev, [id]: true}));
  };

  const handleThumbnailLoad = (id: number) => {
    setThumbnailsLoaded(prev => ({...prev, [id]: true}));
    
    // Pausar o vídeo após carregar o primeiro frame
    const thumbnailRef = thumbnailRefs.current[id];
    if (thumbnailRef) {
      thumbnailRef.pause();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    
    // Aplicar ao vídeo do modal, se estiver aberto
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !isMuted;
    }
    
    // Aplicar a todos os vídeos nos cards
    Object.keys(videoRefs.current).forEach((key) => {
      const videoRef = videoRefs.current[parseInt(key)];
      if (videoRef) {
        videoRef.muted = !isMuted;
      }
    });
  };

  const handleItemClick = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedItem(id);
    
    // Pausa todos os vídeos em cards quando abre o modal
    Object.keys(videoRefs.current).forEach((key) => {
      const videoRef = videoRefs.current[parseInt(key)];
      if (videoRef) {
        videoRef.pause();
      }
    });
  };

  return (
    <SectionContainer id="portfolio" className="bg-plum-dark">
      <SectionTitle 
        title="Portfólio"
        subtitle="Conheça alguns dos eventos memoráveis em que atuei como Mestre de Cerimônias"
      />
      
      <div className="flex flex-wrap justify-center gap-2 mt-4 md:mt-6 mb-6">
        <button 
          onClick={() => setFilter('todos')}
          className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full transition text-sm md:text-base ${
            filter === 'todos' 
              ? 'bg-gold text-plum-dark font-medium' 
              : 'bg-plum border border-gold/30 text-gold hover:bg-plum-light/50'
          }`}
        >
          Todos
        </button>
        <button 
          onClick={() => setFilter('corporativo')}
          className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full transition text-sm md:text-base ${
            filter === 'corporativo' 
              ? 'bg-gold text-plum-dark font-medium' 
              : 'bg-plum border border-gold/30 text-gold hover:bg-plum-light/50'
          }`}
        >
          Corporativos
        </button>
        <button 
          onClick={() => setFilter('institucional')}
          className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full transition text-sm md:text-base ${
            filter === 'institucional' 
              ? 'bg-gold text-plum-dark font-medium' 
              : 'bg-plum border border-gold/30 text-gold hover:bg-plum-light/50'
          }`}
        >
          Institucionais
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 opacity-100">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="portfolio-card group relative rounded-lg overflow-hidden bg-plum border border-gold/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-gold/40 hover:transform hover:scale-[1.02]"
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Vídeo congelado como thumbnail */}
            <div className="relative aspect-video w-full overflow-hidden">
              {videoErrors[item.id] ? (
                <div className="w-full h-full bg-plum-light flex items-center justify-center">
                  <AlertCircle className="text-gold/50" size={40} />
                </div>
              ) : (
                <video
                  ref={(el) => thumbnailRefs.current[item.id] = el}
                  src={item.videoUrl}
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onLoadedData={() => handleThumbnailLoad(item.id)}
                  onError={() => handleVideoError(item.id)}
                />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-plum/90 via-plum/30 to-transparent"></div>
              
              {/* Ícone de play no centro */}
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer" 
                onClick={(e) => handleItemClick(item.id, e)}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gold/80 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-gold">
                  <Play fill="rgb(45, 33, 54)" className="text-plum-dark ml-1" size={24} />
                </div>
              </div>
              
              {/* Badge de categoria */}
              <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-plum-dark/80 border border-gold/30 text-xs text-gold flex items-center">
                {item.category === 'corporativo' ? (
                  <>
                    <Calendar size={12} className="mr-1" />
                    <span>Corporativo</span>
                  </>
                ) : (
                  <>
                    <Users size={12} className="mr-1" />
                    <span>Institucional</span>
                  </>
                )}
              </div>
              
              {/* Overlay de carregamento */}
              {!thumbnailsLoaded[item.id] && !videoErrors[item.id] && (
                <div className="absolute inset-0 bg-plum-dark/70 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            
            {/* Conteúdo do card */}
            <div className="p-4 md:p-5">
              <h3 className="text-gold font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-cream/80 text-sm mb-4 line-clamp-2">{item.description}</p>
              
              <button 
                onClick={(e) => handleItemClick(item.id, e)}
                className="w-full text-plum bg-gold hover:bg-gold-light py-2 px-4 rounded-md text-sm font-medium transition-colors flex items-center justify-center"
                aria-label={`Ver vídeo: ${item.title}`}
              >
                <Play size={16} className="mr-2" />
                Ver vídeo completo
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8 md:mt-10">
        <a 
          href="https://www.instagram.com/almeida.lh/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center px-4 py-2 md:px-6 md:py-3 bg-gold text-plum rounded-full hover:bg-gold-light transition-colors text-sm md:text-base"
        >
          <Instagram className="mr-2" size={18} />
          Ver mais no Instagram
        </a>
      </div>

      {/* Modal de vídeo */}
      {selectedItem !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 md:p-4">
          <div className="rounded-lg w-full max-w-4xl overflow-hidden bg-black">
            <div className="relative flex justify-center">
              {videoErrors[selectedItem] ? (
                <div className="w-full h-64 md:h-[80vh] bg-plum-light relative flex items-center justify-center">
                  <div className="text-center p-4">
                    <AlertCircle size={32} className="text-gold mx-auto mb-3" />
                    <p className="text-cream text-lg font-medium">Vídeo não disponível</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex justify-center items-center bg-black w-full">
                    <video 
                      ref={modalVideoRef}
                      src={portfolioItems.find(item => item.id === selectedItem)?.videoUrl}
                      autoPlay
                      controls
                      muted={isMuted}
                      loop
                      playsInline
                      onError={() => selectedItem && handleVideoError(selectedItem)}
                      className="responsive-video"
                      style={{ maxHeight: '80vh', maxWidth: '100%', margin: '0 auto' }}
                      onLoadedMetadata={() => {
                        if (modalVideoRef.current) {
                          modalVideoRef.current.play().catch(err => {
                            console.log("Autoplay prevented in modal:", err);
                          });
                        }
                      }}
                    />
                  </div>
                  <button 
                    onClick={toggleMute}
                    className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-30 bg-plum-dark/70 hover:bg-plum-dark/90 p-1.5 sm:p-2 md:p-2.5 rounded-full transition-all duration-300 border border-gold/30 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    aria-label={isMuted ? "Ativar som" : "Desativar som"}
                  >
                    {isMuted ? (
                      <VolumeX size={14} className="text-gold" />
                    ) : (
                      <Volume2 size={14} className="text-gold" />
                    )}
                  </button>
                </>
              )}
              <button 
                onClick={() => {
                  setSelectedItem(null);
                  if (modalVideoRef.current) {
                    modalVideoRef.current.pause();
                  }
                }}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-plum-dark/70 rounded-full p-1.5 sm:p-2 shadow-lg text-gold border border-gold/30 hover:bg-gold hover:text-plum transition-colors z-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </SectionContainer>
  );
};

export default PortfolioSection;
