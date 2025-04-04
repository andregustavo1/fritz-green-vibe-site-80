
import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Performances from "@/components/Performances";
import TechSetup from "@/components/TechSetup";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Atualiza o título da página
    document.title = "Fritz Green | DJ de Música Eletrônica";

    // Atualiza a descrição da página
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Fritz Green é um DJ de música eletrônica com performances energéticas e sets inovadores, especializado em criar experiências sonoras únicas."
      );
    }
  }, []);

  return (
    <div className="bg-fritzgreen-black text-fritzgreen-white min-h-screen">
      {/* Add just the scroll indicator here */}
      <div className="scroll-indicator" style={{ position: 'fixed', top: 0, left: 0, height: '3px', background: '#00FF00', zIndex: 9999, width: '0%' }}></div>
      <Hero />
      <About />
      <Music />
      <Performances />
      <TechSetup />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
