import { ArrowUp, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-plum-dark relative text-cream border-t border-gold/20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="absolute top-0 left-1/2 w-24 sm:w-36 h-12 sm:h-18 -translate-x-1/2 -translate-y-1/2 bg-plum-dark border border-gold/30 rounded-xl flex items-center justify-center shadow-lg">
        <img 
          src="https://i.imgur.com/u4di0mJ.png" 
          alt="Almeida - Mestre de Cerimônias" 
          className="h-9 sm:h-12 w-auto object-contain"
          style={{ 
            filter: 'brightness(0) saturate(100%) invert(76%) sepia(38%) saturate(757%) hue-rotate(6deg) brightness(110%) contrast(95%)',
            mixBlendMode: 'normal',
            transform: 'scale(1.8)'
          }}
        />
      </div>
      
      <div className="container mx-auto py-10 md:py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Coluna da mensagem e ícones - agora ocupa 3/5 do espaço e está centralizada */}
          <div className="md:col-span-3 md:col-start-2 flex flex-col items-center justify-center">
            <div className="max-w-lg mx-auto relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-t-2 border-gold/40"></div>
              <p className="text-cream/80 mb-5 md:mb-8 text-sm md:text-base text-center">
                Conduzindo eventos corporativos e institucionais com elegância e profissionalismo, 
                valorizando cada momento com a precisão que o seu evento merece.
              </p>
              <div className="flex space-x-4 justify-center">
                <a 
                  href="https://www.instagram.com/almeida.lh/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-plum flex items-center justify-center hover:bg-plum-light transition-colors touch-target"
                  aria-label="Instagram"
                >
                  <Instagram size={18} className="sm:size-18" />
                </a>
                <a 
                  href="mailto:contato.lhalmeida@gmail.com" 
                  className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-plum-light/50 backdrop-blur-sm flex items-center justify-center hover:bg-gold hover:text-plum transition-colors duration-300 touch-target"
                  aria-label="Email"
                >
                  <Mail size={18} className="sm:size-18" />
                </a>
                <a 
                  href="https://wa.me/5554999715697" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-plum-light/50 backdrop-blur-sm flex items-center justify-center hover:bg-gold hover:text-plum transition-colors duration-300 touch-target"
                  aria-label="WhatsApp"
                >
                  <Phone size={18} className="sm:size-18" />
                </a>
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-gold/40"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-16 pt-6 md:pt-8 border-t border-gold/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Links Rápidos */}
            <div className="relative">
              <h3 className="font-bold text-base sm:text-lg mb-4 md:mb-6 text-gold inline-block relative text-center md:text-left w-full md:w-auto">
                Links Rápidos
                <span className="absolute -bottom-2 left-0 right-0 md:right-auto md:w-12 h-0.5 bg-gold/40 mx-auto md:mx-0"></span>
              </h3>
              <ul className="space-y-3 md:space-y-3 text-center md:text-left">
                {['Início', 'Sobre', 'Serviços', 'Portfólio', 'Depoimentos', 'Contato'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`} 
                      className="text-cream/80 hover:text-gold transition-colors duration-300 flex items-center justify-center md:justify-start text-sm md:text-base touch-target py-1"
                    >
                      <span className="w-1.5 h-1.5 bg-gold/50 rounded-full mr-2.5 hidden md:inline-block"></span>
                      {item}
                      <span className="ml-2 transition-transform duration-300 transform translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 hidden md:inline-block">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Informações de Contato */}
            <div className="relative">
              <h3 className="font-bold text-base sm:text-lg mb-4 md:mb-6 text-gold inline-block relative text-center md:text-left w-full md:w-auto">
                Contato
                <span className="absolute -bottom-2 left-0 right-0 md:right-auto md:w-12 h-0.5 bg-gold/40 mx-auto md:mx-0"></span>
              </h3>
              <div className="space-y-3 md:space-y-5 text-center md:text-left">
                <p className="flex items-start justify-center md:justify-start">
                  <Phone size={16} className="mr-2 md:mr-3 text-gold flex-shrink-0 mt-1" />
                  <a 
                    href="https://wa.me/5554999715697" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cream/80 hover:text-gold transition-colors duration-300 text-sm md:text-base flex items-center"
                  >
                    +55 (54) 99971-5697
                    <MessageCircle size={14} className="ml-2 text-gold" />
                  </a>
                </p>
                <p className="flex items-start justify-center md:justify-start">
                  <Mail size={16} className="mr-2 md:mr-3 text-gold flex-shrink-0 mt-1" />
                  <span className="text-cream/80 hover:text-cream transition-colors duration-300 text-sm md:text-base">contato.lhalmeida@gmail.com</span>
                </p>
                <div className="flex items-start mb-3 md:mb-4 justify-center md:justify-start">
                  <Instagram size={16} className="mr-2 md:mr-3 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-sm md:text-base">Instagram</p>
                    <a 
                      href="https://www.instagram.com/almeida.lh/" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-xs sm:text-sm text-cream/60 hover:text-gold transition-colors"
                    >
                      @almeida.lh
                    </a>
                  </div>
                </div>
                <p className="flex items-start justify-center md:justify-start">
                  <MapPin size={16} className="mr-2 md:mr-3 text-gold flex-shrink-0 mt-1" />
                  <span className="text-cream/80 hover:text-cream transition-colors duration-300 text-sm md:text-base">Rio Grande do Sul - RS, Brasil</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-16 pt-6 md:pt-8 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-cream/60 mb-6 md:mb-0 text-center md:text-left">
            &copy; {currentYear} Almeida - Mestre de Cerimônias. Todos os direitos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 sm:w-12 sm:h-12 rounded-full bg-plum-light/50 backdrop-blur-sm flex items-center justify-center hover:bg-gold hover:text-plum transition-colors duration-300 luxury-shadow touch-target"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} className="sm:size-20" />
          </button>
        </div>
      </div>
      
      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;
