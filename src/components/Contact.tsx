
import { useInView } from '@/hooks/use-intersection-observer';
import { Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const SocialLink = ({ icon: Icon, label, href }: { icon: React.ElementType, label: string, href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="social-icon"
    aria-label={label}
  >
    <Icon size={20} />
  </a>
);

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section id="contato" className="py-24 bg-fritzgreen-black">
      <div className="container mx-auto px-4">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title mb-4">Contato para Shows</h2>
          <p className="text-fritzgreen-gray-100 max-w-2xl mx-auto">Booking e informações</p>
        </div>
        
        <div className={`flex flex-col items-center transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="mailto:contato@fritzgreen.com" 
            className="text-fritzgreen-white text-xl md:text-2xl hover:text-fritzgreen-accent transition-colors mb-6"
          >
            contato@fritzgreen.com
          </a>
          
          <div className="mb-8">
            <p className="text-fritzgreen-gray-100 mb-2">Porto Alegre/RS</p>
            <a 
              href="https://wa.me/+5500000000000?text=Olá,%20gostaria%20de%20informações%20sobre%20shows" 
              className="text-fritzgreen-white hover:text-fritzgreen-accent transition-colors"
              target="_blank" rel="noopener noreferrer"
            >
              +55 (00) 0000-0000
            </a>
          </div>
          
          <div className="flex space-x-4">
            <SocialLink icon={Instagram} label="Instagram" href="https://instagram.com/fritzgreen" />
            <SocialLink icon={Facebook} label="Facebook" href="https://facebook.com/fritzgreenmusic" />
            <SocialLink icon={Youtube} label="YouTube" href="https://youtube.com/@fritzgreendj" />
            <SocialLink icon={Mail} label="Email" href="mailto:contato@fritzgreen.com" />
            <SocialLink icon={Phone} label="Telefone" href="https://wa.me/+5500000000000?text=Olá,%20gostaria%20de%20informações" />
          </div>
        </div>
        
        <div className={`mt-16 text-center transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="https://wa.me/+5500000000000?text=Olá,%20gostaria%20de%20informações%20sobre%20shows" 
            className="btn bg-fritzgreen-accent text-fritzgreen-black border-fritzgreen-accent transform hover:scale-105"
            target="_blank" rel="noopener noreferrer"
          >
            Contato para Shows
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
