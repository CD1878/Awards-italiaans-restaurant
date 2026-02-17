import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { MenuItem } from '../components/MenuItem';
import { getMenuData } from '../utils/menuData';

export const Diner: React.FC = () => {
    const { t } = useLanguage();
    const menuData = getMenuData();

    return (
        <main>
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-diodona-beige">
                <div className="container mx-auto max-w-5xl">
                    <h1 className="font-serif text-5xl md:text-7xl text-diodona-green mb-8 text-center tracking-wide">
                        {t.diner.title}
                    </h1>

                    <p className="text-xl text-diodona-green/80 text-center mb-16 max-w-3xl mx-auto">
                        {t.diner.intro}
                    </p>

                    {/* Menu Sections */}
                    <div className="space-y-16">
                        {/* Antipasti */}
                        <div>
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20 tracking-wide">
                                {t.diner.sections.antipasti}
                            </h2>
                            <div className="space-y-6">
                                {menuData.diner.antipasti.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Primi Piatti */}
                        <div>
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20 tracking-wide">
                                {t.diner.sections.primi}
                            </h2>
                            <div className="space-y-6">
                                {menuData.diner.primi.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Secondi Piatti */}
                        <div>
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20 tracking-wide">
                                {t.diner.sections.secondi}
                            </h2>
                            <div className="space-y-6">
                                {menuData.diner.secondi.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Contorni */}
                        <div>
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20 tracking-wide">
                                {t.diner.sections.contorni}
                            </h2>
                            <div className="space-y-6">
                                {menuData.diner.contorni.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Dolci */}
                        <div>
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20 tracking-wide">
                                {t.diner.sections.dolci}
                            </h2>
                            <div className="space-y-6">
                                {menuData.diner.dolci.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-16 space-y-4">
                        <Link to="/reserveren">
                            <Button>
                                {t.header.bookTable}
                            </Button>
                        </Link>
                        <div>
                            <Link to="/wijnen" className="font-serif text-xl text-diodona-green hover:underline">
                                {t.home.cards.wines.link}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
