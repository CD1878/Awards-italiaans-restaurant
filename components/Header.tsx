import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        {/* Announcement Bar */}
        {showAnnouncement && (
          <div className="bg-diodona-green w-full text-center py-2 text-xs font-bold tracking-[0.2em] text-diodona-beige uppercase z-50 bg-opacity-100 relative">
            {t.announcement.text}
            <button
              onClick={() => setShowAnnouncement(false)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close announcement"
            >
              <X size={14} />
            </button>
          </div>
        )}

        {/* Main Header Content */}
        <div className={`w-full transition-all duration-300 ${isScrolled ? 'py-2 bg-diodona-beige/80 backdrop-blur-md shadow-sm border-b border-white/20' : 'py-6 bg-transparent'}`}>
          <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="block group">
                <div className="flex flex-col items-center">
                  <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight text-diodona-green transition-transform duration-500 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
                    Canaletto
                  </span>
                  <span className={`text-[10px] uppercase tracking-[0.2em] text-diodona-green/80 transition-opacity duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                    Amsterdam
                  </span>
                </div>
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8 mr-4">

                {/* Menu Dropdown */}
                <div className="relative group">
                  <button className="flex items-center gap-1 text-diodona-green py-1 font-serif group-hover:text-diodona-green/70 transition-colors">
                    <span className="relative z-10">{t.header.menu}</span>
                    <ChevronDown size={14} className="transform group-hover:rotate-180 transition-transform duration-300" />
                  </button>

                  {/* Dropdown Content */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[180px]">
                    <div className="bg-diodona-beige shadow-lg border border-diodona-green/10 rounded-sm overflow-hidden py-2 flex flex-col">
                      <Link to="/lunch" className="px-6 py-2 text-diodona-green hover:bg-diodona-green/5 font-serif text-center transition-colors">
                        Lunch
                      </Link>
                      <Link to="/diner" className="px-6 py-2 text-diodona-green hover:bg-diodona-green/5 font-serif text-center transition-colors">
                        Diner
                      </Link>
                      <div className="h-[1px] bg-diodona-green/10 my-1 mx-4"></div>
                      <Link to="/wijnen" className="px-6 py-2 text-diodona-green hover:bg-diodona-green/5 font-serif text-center transition-colors">
                        Wijnen
                      </Link>
                      <Link to="/dranken" className="px-6 py-2 text-diodona-green hover:bg-diodona-green/5 font-serif text-center transition-colors">
                        Dranken
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/evenementen" className="relative group text-diodona-green py-1 font-serif">
                  <span className="relative z-10 transition-colors group-hover:text-diodona-green/70">Evenementen</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-diodona-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
                <Link to="/groepen" className="relative group text-diodona-green py-1 font-serif">
                  <span className="relative z-10 transition-colors group-hover:text-diodona-green/70">{t.header.groups}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-diodona-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
                <Link to="/sfeer" className="relative group text-diodona-green py-1 font-serif">
                  <span className="relative z-10 transition-colors group-hover:text-diodona-green/70">{t.header.gallery}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-diodona-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
                <Link to="/contact" className="relative group text-diodona-green py-1 font-serif">
                  <span className="relative z-10 transition-colors group-hover:text-diodona-green/70">{t.header.contact}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-diodona-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </div>

              {/* Language Switcher (Desktop Only) */}
              <div className="hidden md:block">
                <LanguageSelector />
              </div>

              {/* Mobile Hamburger Menu Icon */}
              <button
                className="md:hidden text-diodona-green focus:outline-none hover:rotate-180 transition-transform duration-300"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={32} />
              </button>

              {/* Desktop Menu Button */}
              <div className="hidden md:block">
                <Button onClick={() => setIsMenuOpen(true)}>
                  {t.common.openMenu}
                </Button>
              </div>
            </div>
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
            {/* Mobile Language Selector */}
            <div className="absolute top-6 left-8">
              <LanguageSelector />
            </div>

            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="font-serif text-2xl md:text-3xl text-diodona-green leading-relaxed">
                Canaletto è <a href="#" className="underline decoration-1 underline-offset-4 hover:text-diodona-accent transition-colors">tradizione</a>,
                è <a href="#" className="underline decoration-1 underline-offset-4 hover:text-diodona-accent transition-colors">passione</a>,
                sono i <a href="#" className="underline decoration-1 underline-offset-4 hover:text-diodona-accent transition-colors">canali</a>.
                Canaletto è <a href="#" className="underline decoration-1 underline-offset-4 hover:text-diodona-accent transition-colors">Famiglia</a>.
              </h3>
            </div>

            <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left">
              <Link to="/lunch" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-serif text-diodona-green hover:translate-x-2 transition-transform duration-300 block">
                Lunch
              </Link>
              <Link to="/diner" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-serif text-diodona-green hover:translate-x-2 transition-transform duration-300 block">
                {t.header.menu} (Diner)
              </Link>
              <Link to="/wijnen" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-serif text-diodona-green hover:translate-x-2 transition-transform duration-300 block">
                Wijnen
              </Link>
              <Link to="/dranken" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-serif text-diodona-green hover:translate-x-2 transition-transform duration-300 block">
                Dranken
              </Link>
              <Link to="/evenementen" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-serif text-diodona-green hover:translate-x-2 transition-transform duration-300 block">
                Evenementen
              </Link>
              <Link to="/sfeer" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-serif text-diodona-green hover:translate-x-2 transition-transform duration-300 block">
                {t.header.gallery}
              </Link>
              <Link to="/groepen" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-serif text-diodona-green hover:translate-x-2 transition-transform duration-300 block">
                {t.header.groups}
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-serif text-diodona-green hover:translate-x-2 transition-transform duration-300 block">
                {t.header.contact}
              </Link>
              <Link to="/reserveren" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-serif text-diodona-green hover:translate-x-2 transition-transform duration-300 block">
                {t.header.bookTable}
              </Link>
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