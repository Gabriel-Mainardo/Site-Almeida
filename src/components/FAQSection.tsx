import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'O que diferencia um Mestre de Cerimônias profissional?',
    answer: 'Um Mestre de Cerimônias profissional como eu possui domínio técnico da oratória, presença de palco marcante e voz trabalhada para diferentes acústicas. Trago anos de experiência em condução protocolar, conhecimento de precedências, etiqueta corporativa e habilidade para lidar com imprevistos. Minha capacidade de adaptar o tom da comunicação à natureza de cada momento da cerimônia é o que realmente diferencia meu trabalho, proporcionando elegância e fluidez à experiência do público.'
  },
  {
    question: 'Como o Almeida se prepara para cada trabalho como Mestre de Cerimônias?',
    answer: 'Minha preparação é meticulosa. Estudo profundamente o tema central da cerimônia, o perfil da audiência e os objetivos comunicacionais. Trabalho com os nomes e pronunciações específicas, analiso o roteiro cerimonial sugerindo ajustes quando necessário, e realizo ensaios técnicos. Preparo-me também para momentos não planejados, criando um repertório de possíveis intervenções. Cada detalhe é considerado para garantir uma condução impecável, desde a postura até o tom de voz adequado para cada momento.'
  },
  {
    question: 'Qual a importância da voz e da dicção para um Mestre de Cerimônias?',
    answer: 'A voz é o principal instrumento de trabalho do Mestre de Cerimônias. Uma dicção perfeita, projeção vocal adequada e controle de ritmo e entonação são essenciais para transmitir mensagens com clareza e impacto. Trabalho constantemente minha técnica vocal para garantir que cada palavra seja compreendida com nitidez, mesmo em espaços acusticamente desafiadores. A modulação vocal também é fundamental para criar diferentes atmosferas durante a cerimônia, seja em momentos solenes ou mais descontraídos.'
  },
  {
    question: 'Como o Almeida lida com imprevistos durante uma cerimônia?',
    answer: 'Lidar com imprevistos é uma das habilidades mais valiosas de um Mestre de Cerimônias experiente. Mantenho sempre a serenidade e postura profissional, mesmo em situações inesperadas. Tenho um repertório de recursos para preencher momentos de espera, capacidade de adaptar textos e anúncios em tempo real, e habilidade para reordenar o roteiro quando necessário. O público nunca deve perceber que algo saiu do planejado, e esse é um diferencial que só a experiência proporciona ao longo de anos de atuação.'
  },
  {
    question: 'O Almeida atua como Mestre de Cerimônias em outros idiomas?',
    answer: 'Sim, conduzo cerimônias em português e inglês com fluência. Em ocasiões bilíngues, alterno entre os idiomas com naturalidade, respeitando as necessidades do público presente. Esta capacidade é particularmente valiosa em cerimônias internacionais, premiações globais, e eventos com participantes de diferentes nacionalidades. A condução bilíngue mantém a elegância do protocolo e garante que todos os presentes se sintam igualmente valorizados e incluídos na experiência.'
  },
  {
    question: 'Como o trabalho do Mestre de Cerimônias impacta a percepção da marca ou instituição?',
    answer: 'O Mestre de Cerimônias é a voz da instituição durante o evento, e sua atuação reflete diretamente nos valores da marca. Uma condução profissional, elegante e precisa eleva a percepção de qualidade e credibilidade. Meu trabalho é incorporar a identidade e os valores da marca no discurso e na postura, transmitindo confiança e sofisticação. A articulação clara das mensagens institucionais, com o tom adequado, fortalece o posicionamento da marca e potencializa o impacto comunicacional da cerimônia.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-navy-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-title">Dúvidas Frequentes</h2>
          <p className="section-subtitle text-gray-300">
            Tire suas dúvidas sobre o trabalho e a atuação profissional do Almeida como Mestre de Cerimônias
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="mb-3 sm:mb-4 border border-gold/20 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left bg-navy hover:bg-navy/80 transition-colors duration-300 flex justify-between items-center"
              >
                <span className="font-medium text-gray-200 text-sm sm:text-base pr-2">{item.question}</span>
                <ChevronDown 
                  size={18} 
                  className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <div className="px-4 sm:px-6 py-3 sm:py-4 bg-navy-light/50 text-gray-300 text-sm sm:text-base">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <p className="text-gray-300 mb-4 text-sm sm:text-base">
            Não encontrou o que procura? Vamos conversar!
          </p>
          <a 
            href="#contact" 
            className="btn-primary inline-block text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 