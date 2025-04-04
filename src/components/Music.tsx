
import { useState } from 'react';
import { useInView } from '@/hooks/use-intersection-observer';
import { Play } from 'lucide-react';

const MusicPlayer = ({ title, url }: { title: string, url: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <div className="bg-fritzgreen-black/50 backdrop-blur-sm border border-fritzgreen-gray-400/30 rounded-md overflow-hidden group hover:border-fritzgreen-accent transition-all duration-300">
      <div className="p-4 flex items-center space-x-4">
        <div 
          className="w-12 h-12 bg-fritzgreen-black rounded-full flex items-center justify-center cursor-pointer group-hover:bg-fritzgreen-accent transition-colors"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <Play size={18} className="text-fritzgreen-white group-hover:text-fritzgreen-black transition-colors" />
        </div>
        
        <div className="flex-1">
          <h4 className="text-fritzgreen-white font-medium truncate">{title}</h4>
          <div className="mt-2 h-2 bg-fritzgreen-gray-400/30 rounded-full overflow-hidden">
            <div className="h-full bg-fritzgreen-accent w-0 group-hover:w-[60%] transition-all duration-1000"></div>
          </div>
        </div>
      </div>
      
      <iframe 
        className="w-full h-0 group-hover:h-20 transition-all duration-300"
        src={url} 
        title={title}
        allow="autoplay"
        loading="lazy"
      ></iframe>
    </div>
  );
};

const Music = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const tracks = [
    { title: "Deep House Set - Summer 2025", url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/fritzgreen" },
    { title: "Techno Mix - Club Edition", url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/fritzgreen" },
    { title: "Progressive House Journey", url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/fritzgreen" },
    { title: "Electronic Vibes - Vol. 3", url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/fritzgreen" },
  ];
  
  return (
    <section id="musica" className="py-24 bg-gradient-to-b from-fritzgreen-black to-fritzgreen-gray-400/10">
      <div className="container mx-auto px-4">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>} 
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="section-title mb-4">Ouça Fritz Green</h2>
          <p className="text-fritzgreen-gray-100 max-w-2xl mx-auto">Sets e produções originais</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((track, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 delay-${index * 100} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <MusicPlayer title={track.title} url={track.url} />
            </div>
          ))}
        </div>
        
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://hearthis.at/fritzgreen" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn bg-transparent"
            >
              Hearthis
            </a>
            <a 
              href="https://soundcloud.com/fritzgreen" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn bg-transparent"
            >
              SoundCloud
            </a>
            <a 
              href="https://www.youtube.com/@fritzgreendj" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn bg-transparent"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
