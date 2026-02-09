import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const Popup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup after 1 second
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-white rounded-sm shadow-2xl flex flex-col md:flex-row max-w-2xl w-full overflow-hidden relative animate-scale-in">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/50 rounded-full hover:bg-white text-diodona-green transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Left: Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                    <img
                        src="https://images.unsplash.com/photo-1549491605-1bbc3eef9e4b?q=80&w=800&auto=format&fit=crop"
                        alt="Crown"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right: Text */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-12 bg-diodona-green text-diodona-beige">
                    <div className="text-center space-y-4">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                            CHIEL<br />IS<br />KONING
                        </h2>
                        <div className="w-16 h-1 bg-diodona-beige mx-auto opacity-50"></div>
                        <p className="text-sm opacity-80 uppercase tracking-widest">
                            Official Announcement
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
