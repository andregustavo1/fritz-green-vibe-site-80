
import React from 'react';
import { useInView } from '@/hooks/use-intersection-observer';
import { Music, Headphones } from 'lucide-react';

const AboutFeature = ({ icon: Icon, title }: { icon: React.ElementType, title: string }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="rounded-full bg-fritzgreen-black p-2 border border-fritzgreen-accent">
        <Icon className="h-5 w-5 text-fritzgreen-accent" />
      </div>
      <span className="text-fritzgreen-white font-medium">{title}</span>
    </div>
  );
};

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="sobre" className="py-24 bg-fritzgreen-black">
      <div className="container mx-auto px-4" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className={`grid md:grid-cols-2 gap-12 items-center`}>
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="section-title mb-6 relative inline-block">
              Sobre Fritz Green
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-fritzgreen-accent"></span>
            </h2>
            
            <p className="text-fritzgreen-gray-100 mb-8">
              Fritz Green é um DJ que transcende as fronteiras da música eletrônica, criando experiências 
              sonoras únicas e memoráveis. Com um estilo versátil e sofisticado, ele combina técnica impecável 
              e uma seleção musical diferenciada para entregar performances que cativam o público. 
              Seu talento para ler a energia da pista e transformá-la em uma jornada musical é sua assinatura em cada evento.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <AboutFeature icon={Music} title="Estilo musical único" />
              <AboutFeature icon={Headphones} title="Técnica apurada" />
              <AboutFeature icon={Music} title="Experiência em eventos" />
              <AboutFeature icon={Headphones} title="Equipamentos de ponta" />
            </div>
            
            <div>
              <a 
                href="https://wa.me/+5500000000000?text=Olá,%20gostaria%20de%20informações%20sobre%20shows"
                className="btn bg-transparent border-fritzgreen-white text-fritzgreen-white hover:bg-fritzgreen-accent hover:text-fritzgreen-black hover:border-fritzgreen-accent transition-all"
                target="_blank" rel="noopener noreferrer"
              >
                Contrate para Eventos
              </a>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-fritzgreen-accent"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-fritzgreen-accent"></div>
              <img 
                src="/lovable-uploads/f49880a4-6d69-4701-b77d-e8143241df24.png" 
                alt="Fritz Green DJ" 
                className="w-full h-auto rounded-md grayscale hover:grayscale-0 transition-all duration-500" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
