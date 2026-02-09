import React from 'react';

export const Wijnen: React.FC = () => {
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
                                <WineItem
                                    name="Pinot Grigio"
                                    region="Friuli-Venezia Giulia"
                                    description="Fris en fruitig met tonen van peer en citrus"
                                    glass="7,50"
                                    bottle="32,00"
                                />
                                <WineItem
                                    name="Vermentino"
                                    region="Sardegna"
                                    description="Elegant met minerale tonen en een hint van amandel"
                                    glass="8,50"
                                    bottle="36,00"
                                />
                                <WineItem
                                    name="Gavi di Gavi"
                                    region="Piemonte"
                                    description="Verfijnd met aroma's van witte bloemen en perzik"
                                    bottle="42,00"
                                />
                            </div>
                        </div>

                        {/* Rode Wijnen */}
                        <div>
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20">
                                Rode Wijnen
                            </h2>
                            <div className="space-y-6">
                                <WineItem
                                    name="Chianti Classico"
                                    region="Toscana"
                                    description="Krachtig met tonen van kers en specerijen"
                                    glass="8,00"
                                    bottle="34,00"
                                />
                                <WineItem
                                    name="Barolo"
                                    region="Piemonte"
                                    description="Complex en elegant met tannines en rode vruchten"
                                    bottle="68,00"
                                />
                                <WineItem
                                    name="Amarone della Valpolicella"
                                    region="Veneto"
                                    description="Vol en rijk met gedroogde vruchten en chocolade"
                                    bottle="75,00"
                                />
                                <WineItem
                                    name="Primitivo"
                                    region="Puglia"
                                    description="Fruitig en vol met tonen van pruim en kruiden"
                                    glass="7,50"
                                    bottle="32,00"
                                />
                            </div>
                        </div>

                        {/* Rosé & Spumante */}
                        <div>
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20">
                                Rosé & Spumante
                            </h2>
                            <div className="space-y-6">
                                <WineItem
                                    name="Prosecco Superiore"
                                    region="Valdobbiadene"
                                    description="Fris en levendig met fijne bubbels"
                                    glass="7,00"
                                    bottle="30,00"
                                />
                                <WineItem
                                    name="Franciacorta Brut"
                                    region="Lombardia"
                                    description="Elegante mousserende wijn met complexe aroma's"
                                    bottle="52,00"
                                />
                                <WineItem
                                    name="Rosato"
                                    region="Toscana"
                                    description="Zomers en fris met tonen van aardbei"
                                    glass="7,50"
                                    bottle="32,00"
                                />
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
