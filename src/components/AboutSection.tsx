import { User, Award, Briefcase } from 'lucide-react';
import { SectionContainer, SectionTitle } from './ui/section-container';
import { FeatureCard } from './ui/feature-card';
import { LazyImage } from './ui/lazy-image';
import { useAppContext } from '@/lib/AppContext';

const AboutSection = () => {
  const { isMobile } = useAppContext();
  
  const features = [
    {
      icon: <User className="text-plum-dark" size={20} />,
      title: "Personalização",
      description: "Cada cerimônia conduzida com singularidade"
    },
    {
      icon: <Award className="text-plum-dark" size={20} />,
      title: "Excelência",
      description: "Presença impecável e postura refinada"
    },
    {
      icon: <Briefcase className="text-plum-dark" size={20} />,
      title: "Profissionalismo",
      description: "Precisão e propósito em cada palavra"
    }
  ];
  
  return (
    <SectionContainer id="about" className="bg-plum" withPattern>
      <SectionTitle 
        title="Sobre" 
      />
      
      <div className="text-center mb-10 md:mb-16 section-subtitle max-w-3xl mx-auto slide-in">
        <p className="mb-2 text-sm sm:text-base md:text-lg">Comecei quando os microfones ainda tinham fio. Antes dos telões de LED e dos filtros de Instagram.</p>
        <p className="text-sm sm:text-base md:text-lg">Meu ofício não é falar. É transformar cerimônias em experiências.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="slide-in">
          <div className="relative mx-auto max-w-md">
            <div className="relative rounded-lg shadow-xl overflow-hidden border border-gold/20">
              <LazyImage 
                src="https://i.imgur.com/3aSNJ7p.png" 
                alt="Almeida - Mestre de Cerimônias" 
                className="object-cover"
                containerClassName="aspect-[3/4]"
              />
              
              {/* Banner de experiência integrado à imagem */}
              <div className="absolute bottom-0 right-0 left-0 bg-gradient-gold py-2 sm:py-3 px-4 sm:px-5">
                <div className="flex items-center justify-center">
                  <Award className="text-plum-dark mr-2" size={isMobile ? 18 : 22} />
                  <p className="font-playfair text-plum-dark font-bold text-base sm:text-xl">+25 anos de experiência</p>
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos adaptados para responsividade */}
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 border-l-2 border-t-2 border-gold"></div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 border-r-2 border-b-2 border-gold hidden sm:block"></div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-0 slide-in">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-playfair gold-gradient-text mb-4 md:mb-6 text-center md:text-left">
            Almeida
          </h3>
          
          <div className="space-y-4 md:space-y-6">
            <p className="text-cream/80 text-base md:text-lg">
              Com mais de 25 anos de experiência conduzindo eventos corporativos, institucionais e sociais, Almeida não apenas apresenta — ele orquestra momentos com precisão e presença.
            </p>
            <p className="text-cream/80 text-base md:text-lg">
              Sua missão é clara: dar voz àquilo que realmente importa.
              Cada cerimônia é tratada como única, com atenção rigorosa aos detalhes, ritmo e emoção que o momento exige.
            </p>
            <p className="text-cream/80 text-base md:text-lg">
              Ao longo de sua trajetória, tornou-se referência por sua postura impecável, domínio de público e capacidade de transformar protocolos em experiências memoráveis.
            </p>
            <p className="text-cream/80 text-base md:text-lg">
              Porque mais do que falar bonito, é preciso saber conduzir com propósito.
              E é isso que diferencia quem ocupa o palco de quem realmente segura a cerimônia nas mãos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 md:mt-10">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="h-full min-h-[160px] sm:min-h-[160px] flex-1"
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;

