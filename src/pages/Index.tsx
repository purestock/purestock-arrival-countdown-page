
import React from 'react';
import { Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-green relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center opacity-10"></div>
      
      <div className="z-10 text-center w-full max-w-4xl mx-auto px-4 relative">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-12 shadow-2xl animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Clock className="mx-auto mb-8 text-green-600 w-20 h-20 animate-pulse" />
              
              <h1 className="text-6xl font-bold mb-6 text-green-800">
                Pure Stock
              </h1>
              
              <p className="text-2xl text-neutral-gray mb-8 leading-relaxed">
                Organic goodness, delivered fresh to your doorstep. 
                We're curating the finest organic produce to nourish your lifestyle.
              </p>
              
              <div className="text-3xl font-semibold bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent animate-pulse shadow-green-500/50">
                Coming Soon
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                  alt="Organic nature" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3" 
                  alt="Fresh organic scenery" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-lg text-green-700">
            Join our journey towards sustainable and healthy living.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
