import React from 'react';

import { getMenuData } from '../utils/menuData';

export const Wijnen: React.FC = () => {
    const menuData = getMenuData();
    return (
        <main>
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-diodona-beige">
                <div className="container mx-auto max-w-5xl">
                    <h1 className="font-serif text-5xl md:text-7xl text-diodona-green mb-8 text-center">
                        Onze Wijnkaart
                    </h1>

                    <p className="text-xl text-diodona-green/80 text-center mb-16 max-w-3xl mx-auto">
                        Canaletto heeft een zeer complete en specifiek samengestelde wijnkaart. Bij ieder gerecht is een bijpassende wijn geselecteerd. Ook bieden wij een wijn arrangement aan.
                    </p>

                    <div className="space-y-16">
                        {/* Witte Wijnen */}
                        <div>
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20">
                                Witte Wijnen
                            </h2>
                            <div className="space-y-6">
                                {menuData.wines.white.map((item, index) => (
                                    <WineItem
                                        key={index}
                                        name={item.name}
                                        region={item.region}
                                        description={item.description}
                                        glass={item.glass}
                                        bottle={item.bottle}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Rode Wijnen */}
                        <div>
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20">
                                Rode Wijnen
                            </h2>
                            <div className="space-y-6">
                                {menuData.wines.red.map((item, index) => (
                                    <WineItem
                                        key={index}
                                        name={item.name}
                                        region={item.region}
                                        description={item.description}
                                        glass={item.glass}
                                        bottle={item.bottle}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Rosé & Spumante */}
                        <div>
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20">
                                Rosé & Spumante
                            </h2>
                            <div className="space-y-6">
                                {menuData.wines.rose_spumante.map((item, index) => (
                                    <WineItem
                                        key={index}
                                        name={item.name}
                                        region={item.region}
                                        description={item.description}
                                        glass={item.glass}
                                        bottle={item.bottle}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Wijn Arrangement */}
                        <div className="bg-diodona-green text-diodona-beige p-8 md:p-12 rounded-sm">
                            <h2 className="font-serif text-3xl md:text-4xl mb-6">Wijn Arrangement</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Laat onze sommelier u verrassen met een perfect afgestemde wijn bij elk gerecht van uw menu.
                            </p>
                            <p className="text-2xl font-serif">
                                €35,00 per persoon (bij 3-gangenmenu)<br />
                                €45,00 per persoon (bij 4-gangenmenu)<br />
                                €55,00 per persoon (bij 5-gangenmenu)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

interface WineItemProps {
    name: string;
    region: string;
    description: string;
    glass?: string;
    bottle: string;
}

const WineItem: React.FC<WineItemProps> = ({ name, region, description, glass, bottle }) => {
    return (
        <div className="group hover:bg-white/50 p-4 rounded transition-colors">
            <div className="flex justify-between items-start gap-4 mb-2">
                <div className="flex-1">
                    <h3 className="font-serif text-xl text-diodona-green">{name}</h3>
                    <p className="text-sm text-diodona-green/60 italic">{region}</p>
                </div>
                <div className="text-right font-serif text-diodona-green">
                    {glass && <div className="text-lg">Glas: €{glass}</div>}
                    <div className="text-lg">Fles: €{bottle}</div>
                </div>
            </div>
            <p className="text-diodona-green/70 leading-relaxed">{description}</p>
        </div>
    );
};
