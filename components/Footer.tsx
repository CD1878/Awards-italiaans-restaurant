import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-diodona-beige pt-20 pb-10 border-t border-diodona-green/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Column 1: Info */}
          <div className="space-y-6">
            <div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-diodona-green hover:underline font-serif text-lg transition-colors duration-300"
              >
                Herengracht 123 • 1015 Amsterdam
              </a>
              <p className="text-diodona-green/80 mt-2 font-sans">
                Maandag – Zondag<br />
                12:00 – 23:00<br />
                Keuken open tot 22:00
              </p>
            </div>
          </div>

          {/* Column 2: Logo (Center) */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="font-serif text-4xl text-diodona-green font-bold">Canaletto</h2>
            <span className="text-xs uppercase tracking-[0.3em] text-diodona-green">Dal 1998</span>
            <img src="https://picsum.photos/seed/illustration/100/100" alt="Decoration" className="w-16 h-16 opacity-50 grayscale border-[6px] border-white rounded-full bg-white" />
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="space-y-6 flex flex-col md:items-end">
            <div className="text-diodona-green md:text-right">
              <a href="mailto:info@canaletto.nl" className="block hover:underline transition-colors duration-300">info@canaletto.nl</a>
              <a href="tel:+31201234567" className="block hover:underline transition-colors duration-300">+31 20 123 4567</a>
            </div>

            <div className="flex gap-4 justify-center md:justify-end text-diodona-green">
              <a href="#" className="hover:scale-110 transition-transform duration-300"><Instagram size={20} /></a>
              <a href="#" className="hover:scale-110 transition-transform duration-300"><Facebook size={20} /></a>
              <a href="#" className="hover:scale-110 transition-transform duration-300"><MessageCircle size={20} /></a>
              <a href="#" className="hover:scale-110 transition-transform duration-300"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-diodona-green/10 flex flex-col md:flex-row justify-between items-center text-xs text-diodona-green/60 font-sans gap-4">
          <div className="text-center md:text-left">
            <p>CANALETTO AMSTERDAM B.V.<br />KVK 12345678 • BTW NL123456789B01</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-diodona-green transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-diodona-green transition-colors duration-300">Cookie Policy</a>
            <a href="#" className="hover:text-diodona-green transition-colors duration-300">Terms</a>
          </div>
          <div>
            Designed by <span className="font-semibold">ReplicaAI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};