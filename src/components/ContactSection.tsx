import { useState } from 'react';
import { Send, Phone, Mail, Instagram, MapPin, CheckCircle, MessageCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '@/lib/emailjs';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Preparar os dados para envio
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      event_type: formData.eventType,
      message: formData.message,
      to_email: 'contato.lhalmeida@gmail.com',
    };
    
    // Enviar email usando EmailJS
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )
      .then((response) => {
        console.log('E-mail enviado com sucesso!', response.status, response.text);
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast({
          title: "Orçamento solicitado com sucesso!",
          description: "Entraremos em contato em breve.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((err) => {
        console.error('Erro ao enviar o e-mail:', err);
        setIsSubmitting(false);
        toast({
          title: "Erro ao enviar orçamento",
          description: "Por favor, tente novamente ou entre em contato por WhatsApp.",
          variant: "destructive",
        });
      });
  };

  return (
    <section id="contact" className="py-10 md:py-16 bg-plum slide-in">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="section-title">Contato</h2>
          <p className="section-subtitle text-cream/90">
            Entre em contato para ter um Mestre de Cerimônias profissional em seu próximo evento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-10">
          <div>
            <h3 className="text-xl font-bold text-gold mb-4 md:mb-6 text-center md:text-left">Solicite um Orçamento Personalizado</h3>
            
            {isSubmitted ? (
              <div className="glass-card p-5 md:p-8 rounded-lg text-center luxury-shadow border border-gold/20">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="text-gold" size={40} />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-gold mb-2">Solicitação Enviada!</h4>
                <p className="text-sm md:text-base text-cream mb-4">
                  Agradecemos o seu contato. Em breve, entrarei em contato para discutir seu evento.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="btn-secondary text-base py-3 px-6"
                >
                  Enviar outro orçamento
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-5 md:p-6 rounded-lg luxury-shadow border border-gold/20">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gold font-medium text-base mb-2">Nome completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-plum-light border border-gold/30 rounded focus:outline-none focus:ring-2 focus:ring-gold text-cream text-base"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-gold font-medium text-base mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-plum-light border border-gold/30 rounded focus:outline-none focus:ring-2 focus:ring-gold text-cream text-base"
                      placeholder="email@exemplo.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gold font-medium text-base mb-2">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-plum-light border border-gold/30 rounded focus:outline-none focus:ring-2 focus:ring-gold text-cream text-base"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="eventType" className="block text-gold font-medium text-base mb-2">Tipo de Evento</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-plum-light border border-gold/30 rounded focus:outline-none focus:ring-2 focus:ring-gold text-cream text-base appearance-none"
                  >
                    <option value="">Selecione o tipo de evento</option>
                    <option value="corporate">Evento Corporativo</option>
                    <option value="institutional">Evento Institucional</option>
                    <option value="workshop">Workshop</option>
                    <option value="conference">Conferência</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
                
                <div className="mb-5">
                  <label htmlFor="message" className="block text-gold font-medium text-base mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-plum-light border border-gold/30 rounded focus:outline-none focus:ring-2 focus:ring-gold text-cream text-base"
                    placeholder="Descreva seu evento e como posso contribuir como Mestre de Cerimônias..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-secondary w-full flex items-center justify-center text-base py-3"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-plum-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={18} className="mr-2" />
                      Solicitar Orçamento
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gold mb-4 md:mb-6 mt-6 md:mt-0 text-center md:text-left">Informações de Contato</h3>
            
            <div className="glass-card p-5 md:p-6 rounded-lg luxury-shadow mb-5 md:mb-6 border border-gold/20">
              <div className="flex items-start mb-5 md:mb-6">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="text-plum-dark" size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-cream text-base mb-1">WhatsApp</h4>
                  <a 
                    href="https://wa.me/5554999715697" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cream/80 hover:text-gold transition-colors text-base flex items-center"
                  >
                    +55 (54) 99971-5697
                    <MessageCircle size={16} className="ml-2 text-gold" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start mb-5 md:mb-6">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="text-plum-dark" size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-cream text-base mb-1">Email</h4>
                  <p className="text-cream/80 text-base">contato.lhalmeida@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start mb-5 md:mb-6">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center mr-4 flex-shrink-0">
                  <Instagram className="text-plum-dark" size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-cream text-base mb-1">Instagram</h4>
                  <a
                    href="https://www.instagram.com/almeida.lh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/80 hover:text-gold transition-colors text-base"
                  >
                    @almeida.lh
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="text-plum-dark" size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-cream text-base mb-1">Localização</h4>
                  <p className="text-cream/80 text-base">Rio Grande do Sul, RS - Brasil</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-5 md:p-6 rounded-lg luxury-shadow border border-gold/20">
              <h4 className="font-bold text-gold text-base mb-3">Horário de Atendimento</h4>
              <p className="mb-4 text-cream/80 text-base">Estamos disponíveis para atendê-lo:</p>
              <ul className="space-y-2">
                <li className="flex justify-between text-cream text-base">
                  <span>Segunda a Sexta</span>
                  <span>9h às 18h</span>
                </li>
                <li className="flex justify-between text-cream text-base">
                  <span>Sábado</span>
                  <span>9h às 12h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
