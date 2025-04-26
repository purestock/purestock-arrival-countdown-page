
import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Index = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    toast.success('Thank you! We'll notify you when we launch.');
    setEmail('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-green relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center opacity-10"></div>
      
      <div className="z-10 text-center max-w-2xl mx-auto px-4 relative">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-2xl animate-scale-in">
          <Clock className="mx-auto mb-6 text-primary-purple w-16 h-16 animate-pulse" />
          
          <h1 className="text-5xl font-bold mb-4 text-dark-purple">
            Pure Stock
          </h1>
          
          <p className="text-xl text-neutral-gray mb-6 leading-relaxed">
            Organic goodness, delivered fresh to your doorstep. 
            We're curating the finest organic produce to nourish your lifestyle.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-4">
            <Input 
              type="email" 
              placeholder="Enter your email for early access" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border-2 border-primary-purple rounded-lg"
            />
            <Button 
              type="submit" 
              className="w-full bg-primary-purple hover:bg-secondary-purple text-white py-3 rounded-lg transition-colors"
            >
              Notify Me
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-neutral-gray">
            Join our community and be the first to know when we launch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
