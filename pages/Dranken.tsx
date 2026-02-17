import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getMenuData } from '../utils/menuData';

const DrinkItem: React.FC<{ name: string; price: string; description?: string }> = ({ name, price, description }) => (
    <div className="flex flex-col mb-4">
        <div className="flex justify-between items-baseline">
            <h3 className="text-xl font-serif text-diodona-green">{name}</h3>
            <span className="text-diodona-green font-medium ml-4">€{price}</span>
        </div>
        {description && (
            <p className="text-diodona-green/70 text-sm mt-1 italic">{description}</p>
        )}
    </div>
);

export const Dranken: React.FC = () => {
    const { t } = useLanguage();
    const menuData = getMenuData();

    return (
        <div className="pt-32 pb-20 min-h-screen bg-diodona-beige">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header Section */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h1 className="font-serif text-5xl md:text-7xl text-diodona-green mb-6 leading-tight">
                        {t.drinks?.title || 'Dranken'}
                    </h1>
                    <div className="w-24 h-1 bg-diodona-green mx-auto mb-8"></div>
                    <p className="text-lg md:text-xl text-diodona-green/80 font-light leading-relaxed max-w-2xl mx-auto">
                        {t.drinks?.intro || 'Geniet van een verfrissend drankje, een mooi speciaalbier of sluit af met een Italiaanse digestief.'}
                    </p>
                </div>

                {/* Content Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">

                    {/* Soft Drinks */}
                    <div>
                        <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20">
                            Frisdranken
                        </h2>
                        <div className="space-y-6">
                            {menuData.drinks?.soft_drinks?.map((item, index) => (
                                <DrinkItem
                                    key={index}
                                    name={item.name}
                                    price={item.price}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Beers */}
                    <div>
                        <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20">
                            Bieren
                        </h2>
                        <div className="space-y-6">
                            {menuData.drinks?.beer?.map((item, index) => (
                                <DrinkItem
                                    key={index}
                                    name={item.name}
                                    price={item.price}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Coffee & Tea */}
                    <div>
                        <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20">
                            Koffie & Thee
                        </h2>
                        <div className="space-y-6">
                            {menuData.drinks?.coffee_tea?.map((item, index) => (
                                <DrinkItem
                                    key={index}
                                    name={item.name}
                                    price={item.price}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Digestives */}
                    <div>
                        <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20">
                            Digestieven
                        </h2>
                        <div className="space-y-6">
                            {menuData.drinks?.digesti?.map((item, index) => (
                                <DrinkItem
                                    key={index}
                                    name={item.name}
                                    price={item.price}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
