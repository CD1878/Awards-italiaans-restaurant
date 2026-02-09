import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Diner: React.FC = () => {
    const { t } = useLanguage();

    return (
        <main>
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-diodona-beige">
                <div className="container mx-auto max-w-5xl">
                    <h1 className="font-serif text-5xl md:text-7xl text-diodona-green mb-8 text-center">
                        {t.diner.title}
                    </h1>

                    <p className="text-xl text-diodona-green/80 text-center mb-16 max-w-3xl mx-auto">
                        {t.diner.intro}
                    </p>

                    {/* Menu Sections */}
                    <div className="space-y-16">
                        {/* Antipasti */}
                        <div>
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20">
                                {t.diner.sections.antipasti}
                            </h2>
                            <div className="space-y-6">
                                <MenuItem
                                    name="Burrata con Pomodori"
                                    description="Romige burrata met erfgoedtomaten, basilicum en balsamico"
                                    price="16,50"
                                />
                                <MenuItem
                                    name="Carpaccio di Manzo"
                                    description="Rundercarpaccio met rucola, Parmezaanse kaas en truffelmayonaise"
                                    price="17,50"
                                />
                                <MenuItem
                                    name="Vitello Tonnato"
                                    description="Kalfsvlees met tonijnsaus, kappertjes en rucola"
                                    price="16,00"
                                />
                                <MenuItem
                                    name="Polpo alla Griglia"
                                    description="Gegrilde octopus met aardappelpuree en salsa verde"
                                    price="19,50"
                                />
                            </div>
                        </div>

                        {/* Primi Piatti */}
                        <div>
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20">
                                {t.diner.sections.primi}
                            </h2>
                            <div className="space-y-6">
                                <MenuItem
                                    name="Ravioli della Nonna"
                                    description="Huisgemaakte ravioli gevuld met ricotta en spinazie, salieboter"
                                    price="19,50"
                                />
                                <MenuItem
                                    name="Tagliatelle al Tartufo"
                                    description="Verse tagliatelle met truffelcrème en Parmezaanse kaas"
                                    price="22,50"
                                />
                                <MenuItem
                                    name="Pappardelle al Ragù"
                                    description="Brede linten pasta met langzaam gegaarde vleesragout"
                                    price="20,00"
                                />
                                <MenuItem
                                    name="Linguine alle Vongole"
                                    description="Linguine met verse venusschelpen, knoflook en peterselie"
                                    price="23,50"
                                />
                                <MenuItem
                                    name="Risotto ai Funghi Porcini"
                                    description="Romige risotto met eekhoorntjesbrood en Parmezaanse kaas"
                                    price="21,50"
                                />
                            </div>
                        </div>

                        {/* Secondi Piatti */}
                        <div>
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20">
                                {t.diner.sections.secondi}
                            </h2>
                            <div className="space-y-6">
                                <MenuItem
                                    name="Branzino al Forno"
                                    description="Hele zeebaars uit de oven met citroen en kruiden"
                                    price="28,50"
                                />
                                <MenuItem
                                    name="Tagliata di Manzo"
                                    description="Gesneden biefstuk met rucola, Parmezaanse kaas en balsamico"
                                    price="29,50"
                                />
                                <MenuItem
                                    name="Ossobuco alla Milanese"
                                    description="Kalfssukade met saffraan risotto"
                                    price="32,00"
                                />
                                <MenuItem
                                    name="Pollo alla Cacciatora"
                                    description="Kip op jagers wijze met tomaten, olijven en rozemarijn"
                                    price="24,50"
                                />
                            </div>
                        </div>

                        {/* Contorni */}
                        <div>
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20">
                                {t.diner.sections.contorni}
                            </h2>
                            <div className="space-y-6">
                                <MenuItem
                                    name="Insalata Mista"
                                    description="Gemengde seizoenssalade"
                                    price="6,50"
                                />
                                <MenuItem
                                    name="Patate al Forno"
                                    description="Geroosterde aardappelen met rozemarijn"
                                    price="6,50"
                                />
                                <MenuItem
                                    name="Verdure Grigliate"
                                    description="Gegrilde seizoensgroenten"
                                    price="7,50"
                                />
                            </div>
                        </div>

                        {/* Dolci */}
                        <div>
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20">
                                {t.diner.sections.dolci}
                            </h2>
                            <div className="space-y-6">
                                <MenuItem
                                    name="Tiramisù"
                                    description="Klassiek Italiaans dessert met mascarpone en espresso"
                                    price="9,50"
                                />
                                <MenuItem
                                    name="Panna Cotta"
                                    description="Romige panna cotta met vers fruit"
                                    price="9,00"
                                />
                                <MenuItem
                                    name="Affogato"
                                    description="Vanille-ijs met espresso"
                                    price="8,50"
                                />
                                <MenuItem
                                    name="Cannoli Siciliani"
                                    description="Siciliaanse cannoli gevuld met ricotta en pistache"
                                    price="10,50"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <Link to="/reserveren">
                            <Button>
                                {t.header.bookTable}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

interface MenuItemProps {
    name: string;
    description: string;
    price: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price }) => {
    return (
        <div className="flex justify-between items-start gap-4 group hover:bg-white/50 p-4 rounded transition-colors">
            <div className="flex-1">
                <h3 className="font-serif text-xl text-diodona-green mb-2">{name}</h3>
                <p className="text-diodona-green/70 leading-relaxed">{description}</p>
            </div>
            <div className="font-serif text-xl text-diodona-green whitespace-nowrap">
                €{price}
            </div>
        </div>
    );
};
