
import { useState, useEffect } from 'react';
import { Instagram, Facebook, Youtube, Mail, Phone } from 'lucide-react';

const SocialLink = ({ icon: Icon, href }: { icon: React.ElementType, href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="social-icon"
  >
    <Icon size={20} />
  </a>
);

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Para a barra de progresso
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Update the scroll indicator width
  useEffect(() => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      (scrollIndicator as HTMLElement).style.width = `${scrollProgress}%`;
    }
  }, [scrollProgress]);
  
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-black z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/f49880a4-6d69-4701-b77d-e8143241df24.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)"
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-fritzgreen-white mb-4 font-sans tracking-tight">
            FRITZ GREEN
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="audio-wave mb-6 mx-auto">
              {[...Array(9)].map((_, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.1}s`, height: `${Math.floor(Math.random() * 20) + 10}px` }}></span>
              ))}
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-fritzgreen-gray-100 mb-8 max-w-2xl mx-auto">
            Electronic Music DJ
          </p>
          
          <a 
            href="https://wa.me/+5500000000000?text=Olá,%20gostaria%20de%20ouvir%20seus%20sets" 
            className="btn bg-fritzgreen-white text-fritzgreen-black hover:bg-fritzgreen-accent transition-all transform hover:scale-105 mb-8" 
            target="_blank" rel="noopener noreferrer"
          >
            Ouça Meus Sets
          </a>
          
          {/* Social media icons */}
          <div className="flex justify-center space-x-4 mt-8">
            <SocialLink icon={Instagram} href="https://instagram.com/fritzgreen" />
            <SocialLink icon={Facebook} href="https://facebook.com/fritzgreenmusic" />
            <SocialLink icon={Youtube} href="https://youtube.com/@fritzgreendj" />
            <SocialLink icon={Mail} href="mailto:contato@fritzgreen.com" />
            <SocialLink icon={Phone} href="https://wa.me/+5500000000000?text=Olá,%20gostaria%20de%20informações" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#sobre" className="text-fritzgreen-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
