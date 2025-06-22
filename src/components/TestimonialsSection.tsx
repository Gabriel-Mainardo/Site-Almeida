import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { SectionContainer, SectionTitle } from './ui/section-container';

const testimonials = [
  {
    id: 1,
    name: 'Ana Silva',
    role: 'Diretora de Marketing, Tech Solutions',
    testimonial: 'A performance do Almeida como mestre de cerimônias foi extraordinária. Sua eloquência, elegância na condução e capacidade de prender a atenção do público elevaram nossa conferência a outro nível. O profissionalismo com que apresentou cada momento e a forma como se preparou, conhecendo todos os detalhes do nosso segmento, demonstram seu comprometimento excepcional.',
    avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    role: 'CEO, Inovation Group',
    testimonial: 'A atuação do Almeida como mestre de cerimônias foi impecável em nosso evento corporativo. Sua voz marcante, presença de palco e capacidade de adaptação a imprevistos são impressionantes. O que mais me surpreendeu foi sua habilidade em manter o público engajado durante toda a cerimônia, com uma condução elegante e ao mesmo tempo dinâmica. Um verdadeiro profissional!',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    rating: 5
  },
  {
    id: 3,
    name: 'Mariana Costa',
    role: 'Coordenadora de Comunicação, Global Partners',
    testimonial: 'O Almeida é simplesmente excepcional como mestre de cerimônias! Sua presença de palco, elegância e capacidade de conduzir o protocolo com fluidez transformaram completamente nossa premiação. O tom de voz, a dicção perfeita e o domínio da situação garantiram que cada homenageado se sentisse verdadeiramente valorizado. Um talento raro nessa profissão!',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5
  },
  {
    id: 4,
    name: 'Ricardo Torres',
    role: 'Diretor Executivo, Foundation One',
    testimonial: 'A atuação do Almeida como mestre de cerimônias em nosso evento beneficente foi fundamental para seu sucesso. Sua condução sensível, voz envolvente e capacidade de transmitir a importância da nossa causa emocionaram o público. A maneira como apresentou cada história e conduziu os momentos de homenagem demonstrou não apenas técnica, mas um genuíno envolvimento com nosso propósito.',
    avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
    rating: 5
  },
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const nextTestimonial = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setFadeOut(false);
    }, 300);
  };

  const prevTestimonial = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setFadeOut(false);
    }, 300);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <SectionContainer id="testimonials" className="bg-navy">
      <SectionTitle 
        title="Depoimentos" 
        subtitle="Veja o que nossos clientes dizem sobre a atuação do Almeida como Mestre de Cerimônias"
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative px-4 sm:px-6 md:px-10 py-8 md:py-10 glass-card rounded-xl luxury-shadow">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-gold text-navy rounded-full px-4 sm:px-6 py-2 sm:py-3 font-bold text-sm sm:text-base text-center w-auto min-w-[180px]">
            Clientes Satisfeitos
          </div>
          
          <div className={`transition-opacity duration-300 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex flex-col items-center mb-4 sm:mb-6 text-center">
              <div>
                <h3 className="font-bold text-base sm:text-lg text-gold">{testimonials[currentTestimonial].name}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{testimonials[currentTestimonial].role}</p>
                <div className="flex items-center mt-1 justify-center">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-gray-200 text-sm sm:text-base md:text-lg italic text-center">
              "{testimonials[currentTestimonial].testimonial}"
            </p>
          </div>
          
          <div className="flex justify-between mt-6 sm:mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-1.5 sm:p-2 rounded-full border border-gold/30 hover:bg-gold/20 transition"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={16} className="text-gold" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => {
                    setFadeOut(true);
                    setTimeout(() => {
                      setCurrentTestimonial(index);
                      setFadeOut(false);
                    }, 300);
                  }}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                    currentTestimonial === index ? 'bg-gold' : 'bg-gray-600'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-1.5 sm:p-2 rounded-full border border-gold/30 hover:bg-gold/20 transition"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={16} className="text-gold" />
            </button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default TestimonialsSection;
