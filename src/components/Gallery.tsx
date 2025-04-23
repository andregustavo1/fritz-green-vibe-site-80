
import { useState } from 'react';
import { useInView } from '@/hooks/use-intersection-observer';
import { Play } from 'lucide-react';

type MediaItem = {
  id: number;
  type: 'video' | 'image';
  source: string;
  thumbnail?: string;
  title: string;
};

const MediaCard = ({ item }: { item: MediaItem }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  if (item.type === 'video') {
    return (
      <div 
        className="aspect-square group relative overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open(item.source, '_blank')}
      >
        <div className="absolute inset-0 bg-fritzgreen-black/50 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Play size={48} className="text-fritzgreen-accent" />
        </div>
        {item.thumbnail ? (
          <img 
            src={`https://i.ytimg.com/vi/${item.thumbnail}/hqdefault.jpg`} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-fritzgreen-gray-800 flex items-center justify-center">
            <Play size={32} className="text-fritzgreen-accent" />
          </div>
        )}
      </div>
    );
  }
  
  return (
    <div 
      className="aspect-square overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={item.source} 
        alt={item.title} 
        className="w-full h-full object-cover filter transition-all duration-500 group-hover:scale-105 group-hover:filter-none"
      />
    </div>
  );
};

const Gallery = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Helper function to extract YouTube video ID
  const getYouTubeID = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  };
  
  const videos: MediaItem[] = [
    { id: 1, type: 'video', source: 'https://youtube.com/shorts/_i7NBuvTVGU?si=hhdqm4sf238ngPbl', thumbnail: '_i7NBuvTVGU', title: 'Performance Short' },
    { id: 2, type: 'video', source: 'https://youtu.be/0Jp8CTNtsoQ?si=n1sGfwqrcRjbJnJV', thumbnail: '0Jp8CTNtsoQ', title: 'Live Set' },
    { id: 3, type: 'video', source: 'https://youtu.be/p5RvQsNu38c?si=8mQeJevgUPTQDtcu', thumbnail: 'p5RvQsNu38c', title: 'Club Performance' },
    { id: 4, type: 'video', source: 'https://youtu.be/InAeSvucTe8?si=5RDwschYg6oMVQyR', thumbnail: 'InAeSvucTe8', title: 'Festival Set' },
    { id: 5, type: 'video', source: 'https://youtu.be/ElnPbKOysow?si=q_awAhqDerXq7w3D', thumbnail: 'ElnPbKOysow', title: 'Live Mix' },
    { id: 6, type: 'video', source: 'https://youtu.be/c2-iQaHu1NE?si=DkYqh7FW8fcpfBmp', thumbnail: 'c2-iQaHu1NE', title: 'Beach Party' },
    { id: 7, type: 'video', source: 'https://youtube.com/shorts/1u990nks7xk?si=_5Dkdn3v3Y9f_h9m', thumbnail: '1u990nks7xk', title: 'Short Performance' },
    { id: 8, type: 'video', source: 'https://youtube.com/watch?v=ZwNgDch5UKg&feature=shared', thumbnail: 'ZwNgDch5UKg', title: 'Club Night' },
    { id: 9, type: 'video', source: 'https://youtu.be/oW9GfmyZFgo?si=HfNbSDnR9Z5Bed7L', thumbnail: 'oW9GfmyZFgo', title: 'Outdoor Event' },
    { id: 10, type: 'video', source: 'https://youtu.be/fTsjJlyrSSU?si=kAseGJdDxtosAldp', thumbnail: 'fTsjJlyrSSU', title: 'Summer Festival' },
    { id: 11, type: 'video', source: 'https://youtu.be/-0wdFOsVnT4?si=BrPq971tAqvgb70h', thumbnail: '-0wdFOsVnT4', title: 'Night Club' },
    { id: 12, type: 'video', source: 'https://youtu.be/B_KMP-nq91Y?si=p_RQE7goGxsESRoi', thumbnail: 'B_KMP-nq91Y', title: 'Pool Party' },
    { id: 13, type: 'video', source: 'https://youtu.be/m8XepwZHtCk?si=G05PhyIwS5HcnpJ5', thumbnail: 'm8XepwZHtCk', title: 'DJ Set' },
  ];
  
  const images: MediaItem[] = [
    { id: 14, type: 'image', source: '/lovable-uploads/2.png', title: 'DJ Performance 1' },
    { id: 14, type: 'image', source: '/lovable-uploads/3.png', title: 'DJ Performance 1' },
    { id: 14, type: 'image', source: '/lovable-uploads/4.png', title: 'DJ Performance 1' },
    { id: 14, type: 'image', source: '/lovable-uploads/5.png', title: 'DJ Performance 1' },
    { id: 14, type: 'image', source: '/lovable-uploads/6.png', title: 'DJ Performance 1' },
    { id: 14, type: 'image', source: '/lovable-uploads/7.png', title: 'DJ Performance 1' },
    { id: 14, type: 'image', source: '/lovable-uploads/8.png', title: 'DJ Performance 1' },
    { id: 14, type: 'image', source: '/lovable-uploads/9.png', title: 'DJ Performance 1' },
    { id: 14, type: 'image', source: '/lovable-uploads/10.png', title: 'DJ Performance 1' },
    { id: 14, type: 'image', source: '/lovable-uploads/11.png', title: 'DJ Performance 1' },
    { id: 14, type: 'image', source: '/lovable-uploads/12.png', title: 'DJ Performance 1' },
    { id: 14, type: 'image', source: '/lovable-uploads/13.png', title: 'DJ Performance 1' },
    { id: 14, type: 'image', source: '/lovable-uploads/14.png', title: 'DJ Performance 1' },
    { id: 14, type: 'image', source: '/lovable-uploads/15.png', title: 'DJ Performance 1' },
    { id: 14, type: 'image', source: '/lovable-uploads/image.png', title: 'DJ Performance 1' },
  ];
  
  const mediaItems = [...videos, ...images];
  
  return (
    <section id="galeria" className="py-24 bg-fritzgreen-black">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex justify-center mb-16">
          <img 
            src="/lovable-uploads/5bfd46d9-2ea3-417c-a60d-1e3f6aa9de49.png"
            alt="Fritz Green Logo"
            className="w-64 h-auto animate-pulse"
          />
        </div>

        <div ref={ref as React.RefObject<HTMLDivElement>} className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title mb-4 relative inline-block">
            Galeria
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-fritzgreen-accent"></span>
          </h2>
          <p className="text-fritzgreen-gray-100 max-w-2xl">Videos e fotos de performances</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mediaItems.map((item, index) => (
            <div 
              key={item.id}
              className={`transition-all duration-700 delay-${Math.min(index * 50, 500)} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <MediaCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

