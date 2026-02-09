import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSelector: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 border border-diodona-green/20 rounded-full px-3 py-1.5 bg-diodona-beige/50 backdrop-blur-sm">
            <button
                onClick={() => setLanguage('NL')}
                className={`flex items-center gap-1 transition-opacity hover:opacity-100 ${language === 'NL' ? 'opacity-100 font-bold' : 'opacity-40'}`}
            >
                <img src="https://flagcdn.com/w20/nl.png" alt="NL" className="w-5 h-auto shadow-sm rounded-[2px]" />
                <span className="text-xs font-sans text-diodona-green">NL</span>
            </button>

            <span className="text-diodona-green/30 text-xs">|</span>

            <button
                onClick={() => setLanguage('ENG')}
                className={`flex items-center gap-1 transition-opacity hover:opacity-100 ${language === 'ENG' ? 'opacity-100 font-bold' : 'opacity-40'}`}
            >
                <img src="https://flagcdn.com/w20/gb.png" alt="ENG" className="w-5 h-auto shadow-sm rounded-[2px]" />
                <span className="text-xs font-sans text-diodona-green">ENG</span>
            </button>

            <span className="text-diodona-green/30 text-xs">|</span>

            <button
                onClick={() => setLanguage('PT')}
                className={`flex items-center gap-1 transition-opacity hover:opacity-100 ${language === 'PT' ? 'opacity-100 font-bold' : 'opacity-40'}`}
            >
                <img src="https://flagcdn.com/w20/pt.png" alt="PT" className="w-5 h-auto shadow-sm rounded-[2px]" />
                <span className="text-xs font-sans text-diodona-green">PT</span>
            </button>
        </div>
    );
};
