import React from 'react';
import { Images } from 'lucide-react';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Add logo before photos */}
      <div className="flex justify-center mb-8">
        <Image 
          src="/logo.png" 
          alt="Fritz Green Logo" 
          width={300} 
          height={100} 
          className="animate-pulse" 
        />
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center mb-4">
          <Images className="mr-2" />
          <h2 className="text-2xl font-bold">Galeria de Fotos</h2>
        </div>

        {/* Existing photo gallery code remains the same */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Photo items here */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
