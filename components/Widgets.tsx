import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

export const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[90] bg-white border-t border-diodona-green/10 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] animate-slide-up">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-diodona-green/80 text-sm markdown">
                    Wij gebruiken cookies om uw ervaring te verbeteren. Door verder te gaan gaat u akkoord met ons <a href="#" className="underline">cookiebeleid</a>.
                </p>
                <div className="flex gap-4">
                    <button onClick={() => setIsVisible(false)} className="text-xs text-diodona-green/60 hover:text-diodona-green">
                        Instellingen
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="bg-diodona-green text-diodona-beige px-6 py-2 rounded-sm text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                        Accepteren
                    </button>
                </div>
            </div>
        </div>
    );
};

export const LanguageWidget: React.FC = () => {
    return (
        <div className="fixed bottom-6 right-6 z-[80] group">
            <div className="bg-white rounded-full shadow-lg p-3 flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform border border-diodona-green/10">
                {/* Visual representation of a flag/lang switcher */}
                <div className="w-6 h-6 rounded-full overflow-hidden relative border border-gray-200">
                    <img src="https://flagcdn.com/w40/nl.png" alt="NL" className="w-full h-full object-cover" />
                </div>
                <span className="text-diodona-green font-medium text-sm">NL</span>
                <ChevronDown size={14} className="text-diodona-green/60" />
            </div>

            {/* Dropdown (Visual only) */}
            <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-xl p-2 w-32 hidden group-hover:block animate-fade-in border border-diodona-green/10">
                <div className="space-y-1">
                    <div className="flex items-center gap-3 p-2 hover:bg-diodona-green/5 rounded cursor-pointer">
                        <img src="https://flagcdn.com/w40/nl.png" alt="NL" className="w-5 h-3.5 object-cover rounded-[2px]" />
                        <span className="text-sm text-diodona-green">Nederlands</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 hover:bg-diodona-green/5 rounded cursor-pointer">
                        <img src="https://flagcdn.com/w40/gb.png" alt="EN" className="w-5 h-3.5 object-cover rounded-[2px]" />
                        <span className="text-sm text-diodona-green">English</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
