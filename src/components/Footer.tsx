
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-fritzgreen-black border-t border-fritzgreen-gray-400/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#inicio" className="text-fritzgreen-white text-xl font-bold">
              FRITZ GREEN
            </a>
          </div>
          
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#inicio" className="text-fritzgreen-gray-100 hover:text-fritzgreen-white transition-colors">Início</a>
            <a href="#sobre" className="text-fritzgreen-gray-100 hover:text-fritzgreen-white transition-colors">Sobre</a>
            <a href="#musica" className="text-fritzgreen-gray-100 hover:text-fritzgreen-white transition-colors">Música</a>
            <a href="#performances" className="text-fritzgreen-gray-100 hover:text-fritzgreen-white transition-colors">Performances</a>
            <a href="#contato" className="text-fritzgreen-gray-100 hover:text-fritzgreen-white transition-colors">Contato</a>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com/fritzgreen" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-fritzgreen-gray-100 hover:text-fritzgreen-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://facebook.com/fritzgreenmusic" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-fritzgreen-gray-100 hover:text-fritzgreen-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://youtube.com/@fritzgreendj" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-fritzgreen-gray-100 hover:text-fritzgreen-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-fritzgreen-gray-400/10 text-center">
          <p className="text-fritzgreen-gray-200 text-sm">
            © {currentYear} Fritz Green. Todos os direitos reservados.
          </p>
        </div>
      </div>
      
      <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
        <a 
          href="#inicio" 
          className="w-10 h-10 rounded-full bg-fritzgreen-accent text-fritzgreen-black flex items-center justify-center shadow-lg hover:bg-fritzgreen-white transition-colors"
          aria-label="Voltar ao topo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
