
import { useState, useEffect } from 'react';
import { Music, Headphones, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Para determinar se o cabeçalho deve mudar de estilo
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      
      // Para a barra de progresso
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / windowHeight) * 100;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-indicator" style={{ width: `${scrollProgress}%` }}></div>
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-fritzgreen-black/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#inicio" className="text-fritzgreen-white text-xl md:text-2xl font-bold font-sans animate-fade-in">
            FRITZ GREEN
          </a>
          
          <nav className="hidden md:flex space-x-8 animate-fade-in">
            <a href="#inicio" className="text-fritzgreen-white hover:text-fritzgreen-accent transition-colors">Início</a>
            <a href="#sobre" className="text-fritzgreen-white hover:text-fritzgreen-accent transition-colors">Sobre</a>
            <a href="#musica" className="text-fritzgreen-white hover:text-fritzgreen-accent transition-colors">Música</a>
            <a href="#performances" className="text-fritzgreen-white hover:text-fritzgreen-accent transition-colors">Performances</a>
            <a href="#tech" className="text-fritzgreen-white hover:text-fritzgreen-accent transition-colors">Tech Setup</a>
            <a href="#contato" className="text-fritzgreen-white hover:text-fritzgreen-accent transition-colors">Contato</a>
            <a 
              href="https://wa.me/+5500000000000?text=Olá,%20gostaria%20de%20informações%20sobre%20booking" 
              className="btn bg-transparent border border-fritzgreen-white hover:bg-fritzgreen-accent hover:border-fritzgreen-accent" 
              target="_blank" rel="noopener noreferrer"
            >
              Booking
            </a>
          </nav>
          
          <nav className="flex md:hidden space-x-4">
            <a href="#inicio" className="text-fritzgreen-white hover:text-fritzgreen-accent transition-colors">Início</a>
            <a href="#sobre" className="text-fritzgreen-white hover:text-fritzgreen-accent transition-colors">Sobre</a>
            <a href="#contato" className="text-fritzgreen-white hover:text-fritzgreen-accent transition-colors">Contato</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
