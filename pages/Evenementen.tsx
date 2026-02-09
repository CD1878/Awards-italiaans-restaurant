import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Heart } from 'lucide-react';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

export const Evenementen: React.FC = () => {
    const { t } = useLanguage();

    return (
        <main>
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-diodona-beige">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h1 className="font-serif text-5xl md:text-7xl text-diodona-green mb-4">
                            {t.events.title}
                        </h1>
                        <p className="text-xl text-diodona-green/70 font-serif italic">
                            {t.events.subtitle}
                        </p>
                    </div>

                    {/* Events Timeline */}
                    <div className="space-y-8">
                        {/* Valentine's Day Event */}
                        <div className="relative bg-white rounded-sm shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
                            {/* Event Header with Icon */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-pink-400 to-red-400"></div>

                            <div className="p-8 md:p-12">
                                <div className="flex items-start gap-6">
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                                        <Heart className="text-white" size={32} fill="white" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Calendar className="text-diodona-green/60" size={20} />
                                            <span className="text-sm font-medium text-diodona-green/70 uppercase tracking-wider">
                                                {t.events.valentines.date}
                                            </span>
                                        </div>

                                        <h2 className="font-serif text-3xl md:text-4xl text-diodona-green mb-4">
                                            {t.events.valentines.title}
                                        </h2>

                                        <p className="text-lg text-diodona-green/80 leading-relaxed mb-6">
                                            {t.events.valentines.description}
                                        </p>

                                        <div className="flex items-center justify-between flex-wrap gap-4">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-2xl font-serif font-bold text-diodona-green">
                                                    {t.events.valentines.price}
                                                </span>
                                            </div>

                                            <Link to="/reserveren">
                                                <Button>
                                                    {t.events.valentines.reserveButton}
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Placeholder for future events */}
                        <div className="text-center py-12 opacity-50">
                            <Calendar className="mx-auto mb-4 text-diodona-green/30" size={48} />
                            <p className="text-diodona-green/60 font-serif italic">
                                Meer evenementen komen binnenkort...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
