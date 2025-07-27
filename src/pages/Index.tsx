import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useParallaxEffect } from "@/hooks/useParallaxEffect";

const Index = () => {
  // Usar os hooks personalizados
  useIntersectionObserver();
  useParallaxEffect();

  return (
    <div className="bg-plum-dark min-h-screen">
      {/* Background texture */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none z-0"></div>
      
      {/* Componentes principais */}
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
