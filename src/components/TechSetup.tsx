
import { useInView } from 'react-intersection-observer';

const Equipment = ({ name, image }: { name: string, image: string }) => {
  return (
    <div className="group">
      <div className="mb-4 overflow-hidden rounded-md bg-fritzgreen-black/50 border border-fritzgreen-gray-400/30 aspect-square">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
        />
      </div>
      <h4 className="text-fritzgreen-white font-medium">{name}</h4>
    </div>
  );
};

const TechSetup = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const equipments = [
    { id: 1, name: "Pioneer DJ CDJ-3000", image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 2, name: "Pioneer DJ DJM-900NXS2", image: "https://images.unsplash.com/photo-1515901123452-98f9e6e9c6f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 3, name: "Audio Technica ATH-M50x", image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 4, name: "Roland TR-8S", image: "https://images.unsplash.com/photo-1519419166318-4f5c601b8e6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  ];
  
  return (
    <section id="tech" className="py-24 bg-gradient-to-b from-fritzgreen-black to-fritzgreen-gray-400/10">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title mb-4 relative inline-block">
            Tech Setup
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-fritzgreen-accent"></span>
          </h2>
          <p className="text-fritzgreen-gray-100 max-w-2xl">Equipamentos utilizados nas performances</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {equipments.map((equipment, index) => (
            <div 
              key={equipment.id}
              className={`transition-all duration-700 delay-${index * 100} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <Equipment name={equipment.name} image={equipment.image} />
            </div>
          ))}
        </div>
        
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="https://wa.me/+5500000000000?text=Olá,%20gostaria%20de%20solicitar%20o%20Tech%20Rider"
            className="btn bg-transparent border-fritzgreen-white text-fritzgreen-white hover:bg-fritzgreen-accent hover:text-fritzgreen-black hover:border-fritzgreen-accent"
            target="_blank" rel="noopener noreferrer"
          >
            Solicitar Tech Rider
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechSetup;
