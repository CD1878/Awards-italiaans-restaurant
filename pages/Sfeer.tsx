import React from 'react';
import { RotatedImage } from '../components/RotatedImage';
import { IMAGES } from '../constants';

export const Sfeer: React.FC = () => {
    return (
        <main>
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-diodona-beige">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="font-serif text-5xl md:text-7xl text-diodona-green mb-8 text-center">
                        Onze Sfeer
                    </h1>

                    <p className="text-xl text-diodona-green/80 text-center mb-16 max-w-3xl mx-auto">
                        Stap binnen in de warme, authentieke sfeer van Canaletto. Een plek waar Italiaanse gastvrijheid en Amsterdamse charme samenkomen.
                    </p>

                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="aspect-[4/3]">
                            <RotatedImage
                                src={IMAGES.hero1}
                                alt="Restaurant interieur"
                                rotation={1}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="aspect-[4/3]">
                            <RotatedImage
                                src={IMAGES.hero3}
                                alt="Terras aan de gracht"
                                rotation={-1}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="aspect-[4/3]">
                            <RotatedImage
                                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop"
                                alt="Bar area"
                                rotation={-0.5}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="aspect-[4/3]">
                            <RotatedImage
                                src="https://images.unsplash.com/photo-1550966871-3ed3c47e7421?q=80&w=1200&auto=format&fit=crop"
                                alt="Gezellige hoek"
                                rotation={0.5}
                                className="w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="max-w-3xl mx-auto space-y-8 text-diodona-green">
                        <p className="text-lg leading-relaxed">
                            Canaletto ligt verscholen in een van de mooiste steegjes van Amsterdam. Zodra je binnenstapt, word je omringd door de warme, authentieke sfeer die ons restaurant zo bijzonder maakt.
                        </p>

                        <p className="text-lg leading-relaxed">
                            Ons interieur combineert klassieke Italiaanse elegantie met moderne Amsterdamse details. Denk aan warme houtentafels, zachte verlichting en een open keuken waar je onze chef aan het werk kunt zien.
                        </p>

                        <p className="text-lg leading-relaxed">
                            In de zomer kun je genieten van ons sfeervolle terras, waar je met uitzicht op de gracht kunt dineren. Een perfecte plek voor een romantisch diner of een gezellige lunch met vrienden.
                        </p>

                        <div className="bg-white p-8 rounded-sm shadow-lg mt-12">
                            <h2 className="font-serif text-3xl mb-6">Sfeerimpressie</h2>
                            <ul className="space-y-3 text-lg">
                                <li>✓ Intieme eetzaal met plaats voor 45 gasten</li>
                                <li>✓ Gezellige bar voor aperitivo</li>
                                <li>✓ Zonnig terras aan de gracht (25 personen)</li>
                                <li>✓ Open keuken waar u de chef aan het werk ziet</li>
                                <li>✓ Privé ruimte beschikbaar voor groepen tot 20 personen</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
