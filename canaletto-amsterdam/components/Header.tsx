import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-diodona-beige/95 backdrop-blur-sm shadow-sm' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="block group">
               <div className="flex flex-col items-center">
                  <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight text-diodona-green transition-transform duration-500 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
                    Canaletto
                  </span>
                  <span className={`text-[10px] uppercase tracking-[0.2em] text-diodona-green/80 transition-opacity duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                    Amsterdam
                  </span>
               </div>
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
             {/* Cart Icon (Hidden on mobile usually, but kept for fidelity) */}
            <button className="hidden md:flex items-center gap-2 text-diodona-green hover:opacity-70 transition-opacity">
              <div className="relative">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-diodona-green text-[8px] text-white">0</span>
              </div>
              <span className="text-sm font-medium">€ 0,00</span>
            </button>

            {/* Menu Button */}
            <Button onClick={() => setIsMenuOpen(true)}>
              Menu
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile/Full Screen Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-diodona-beige transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full relative">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-8 text-diodona-green hover:rotate-90 transition-transform duration-300"
          >
            <X size={32} />
          </button>

          <div className="flex flex-col justify-center items-center h-full px-4 text-center space-y-8">
            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="font-serif text-2xl md:text-3xl text-diodona-green leading-relaxed">
                Canaletto è <a href="#" className="underline decoration-1 underline-offset-4 hover:text-diodona-accent transition-colors">tradizione</a>, 
                è <a href="#" className="underline decoration-1 underline-offset-4 hover:text-diodona-accent transition-colors">passione</a>, 
                sono i <a href="#" className="underline decoration-1 underline-offset-4 hover:text-diodona-accent transition-colors">canali</a>. 
                Canaletto è <a href="#" className="underline decoration-1 underline-offset-4 hover:text-diodona-accent transition-colors">Famiglia</a>.
              </h3>
            </div>

            <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left">
               {[
                 "La nostra Famiglia", "Location", "Il Ristorante", 
                 "Eventi & Matrimoni", "Canaletto Diary", "Contatti", 
                 "Gift Card", "Prenota un tavolo"
               ].map((item, idx) => (
                 <a key={idx} href="#" className="text-xl md:text-2xl font-serif text-diodona-green hover:translate-x-2 transition-transform duration-300 block">
                   {item}
                 </a>
               ))}
            </nav>
            
            <div className="mt-12 pt-8 border-t border-diodona-green/10 w-full max-w-md mx-auto">
               <p className="text-diodona-green font-medium">Herengracht 123 • 1015 Amsterdam</p>
               <p className="text-diodona-green/70 mt-2 text-sm">+31 20 123 4567 • info@canaletto.nl</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};