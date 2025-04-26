
import React from 'react';
import { Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-green relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843')] bg-cover bg-center opacity-10"></div>
      
      <div className="z-10 text-center w-full max-w-4xl mx-auto px-4 relative">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-12 shadow-2xl animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Clock className="mx-auto mb-8 text-primary-purple w-20 h-20 animate-pulse" />
              
              <h1 className="text-6xl font-bold mb-6 text-dark-purple">
                Pure Stock
              </h1>
              
              <p className="text-2xl text-neutral-gray mb-8 leading-relaxed">
                Organic goodness, delivered fresh to your doorstep. 
                We're curating the finest organic produce to nourish your lifestyle.
              </p>
              
              <div className="text-3xl font-semibold text-primary-purple animate-pulse">
                Coming Soon
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" 
                  alt="Organic produce" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                  alt="Fresh produce" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-lg text-neutral-gray">
            Join our journey towards sustainable and healthy living.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
