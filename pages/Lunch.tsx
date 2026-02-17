import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { MenuItem } from '../components/MenuItem';
import { getMenuData } from '../utils/menuData';

export const Lunch: React.FC = () => {
    const { t } = useLanguage();
    const menuData = getMenuData();

    return (
        <main>
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-diodona-beige">
                <div className="container mx-auto max-w-5xl">
                    <h1 className="font-serif text-5xl md:text-7xl text-diodona-green mb-8 text-center">
                        {t.lunch.title}
                    </h1>

                    <p className="text-xl text-diodona-green/80 text-center mb-16 max-w-3xl mx-auto">
                        {t.lunch.intro}
                    </p>

                    {/* Menu Sections */}
                    <div className="space-y-16">
                        {/* Antipasti */}
                        <div>
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20">
                                {t.lunch.sections.antipasti}
                            </h2>
                            <div className="space-y-6">
                                {menuData.lunch.antipasti.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Pasta */}
                        <div>
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20">
                                {t.lunch.sections.pasta}
                            </h2>
                            <div className="space-y-6">
                                {menuData.lunch.pasta.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Insalate */}
                        <div>
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20">
                                {t.lunch.sections.insalate}
                            </h2>
                            <div className="space-y-6">
                                {menuData.lunch.insalate.map((item, index) => (
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
                            <h2 className="font-serif text-3xl text-diodona-green mb-8 pb-4 border-b-2 border-diodona-green/20">
                                {t.lunch.sections.dolci}
                            </h2>
                            <div className="space-y-6">
                                {menuData.lunch.dolci.map((item, index) => (
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
