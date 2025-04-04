
import { useState } from 'react';
import { useInView } from '@/hooks/use-intersection-observer';

const PerformanceImage = ({ image, title, location }: { image: string, title: string, location: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative overflow-hidden group aspect-square cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-fritzgreen-black via-transparent to-transparent flex flex-col justify-end p-4 transition-all duration-500`}>
        <h3 className="text-fritzgreen-white font-medium text-lg">{title}</h3>
        <p className="text-fritzgreen-gray-100 text-sm">{location}</p>
      </div>
    </div>
  );
};

const Performances = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const performances = [
    { id: 1, image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", title: "Electric Forest Festival", location: "São Paulo" },
    { id: 2, image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", title: "Club Night", location: "Rio de Janeiro" },
    { id: 3, image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", title: "Beach Party", location: "Florianópolis" },
    { id: 4, image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", title: "Private Event", location: "Porto Alegre" },
  ];
  
  return (
    <section id="performances" className="py-24 bg-fritzgreen-black">
      <div className="container mx-auto px-4">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title mb-4 relative inline-block">
            Performances
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-fritzgreen-accent"></span>
          </h2>
          <p className="text-fritzgreen-gray-100 max-w-2xl">Eventos e festivais onde Fritz Green já se apresentou</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {performances.map((performance, index) => (
            <div 
              key={performance.id}
              className={`transition-all duration-700 delay-${index * 100} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <PerformanceImage 
                image={performance.image} 
                title={performance.title} 
                location={performance.location} 
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap gap-4 justify-center">
          {["Warung Beach Club", "D-Edge", "Green Valley", "Laroc", "Tomorrowland Brasil"].map((venue, index) => (
            <span 
              key={index} 
              className={`px-4 py-2 bg-fritzgreen-black border border-fritzgreen-gray-400/30 rounded-full text-sm text-fritzgreen-white transition-all duration-700 delay-${index * 100} ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              {venue}
            </span>
          ))}
        </div>
        
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="https://wa.me/+5500000000000?text=Olá,%20gostaria%20de%20informações%20sobre%20próximos%20shows" 
            className="btn bg-transparent border-fritzgreen-white text-fritzgreen-white hover:bg-fritzgreen-accent hover:text-fritzgreen-black hover:border-fritzgreen-accent"
            target="_blank" rel="noopener noreferrer"
          >
            Ver Agenda Completa
          </a>
        </div>
      </div>
    </section>
  );
};

export default Performances;
