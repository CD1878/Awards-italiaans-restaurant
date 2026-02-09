import React from 'react';
import { Button } from '../components/Button';
import { RotatedImage } from '../components/RotatedImage';
import { IMAGES } from '../constants';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Home: React.FC = () => {
    const { t } = useLanguage();

    return (
        <main>
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 animate-fade-in">
                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
                            {t.home.hero.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-diodona-green/80 mb-2">{t.home.hero.subtitle}</p>
                    </div>

                    {/* Staggered Images Grid */}
                    <div className="relative h-[60vh] md:h-[80vh] w-full max-w-7xl mx-auto">
                        {/* Central Image */}
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[90%] md:w-[60%] z-20">
                            <RotatedImage
                                src={IMAGES.hero1}
                                alt="Interior van Canaletto"
                                rotation={1}
                                className="aspect-[4/3] rounded-sm"
                            />
                        </div>

                        {/* Left Image (Lower) */}
                        <div className="absolute left-0 md:left-[5%] top-[40%] md:top-[30%] w-[45%] md:w-[35%] z-30">
                            <RotatedImage
                                src={IMAGES.hero2}
                                alt="Heerlijke pasta detail"
                                rotation={-2}
                                className="aspect-[3/4] rounded-sm"
                                parallaxSpeed={-2}
                            />
                        </div>

                        {/* Right Image (Lower) */}
                        <div className="absolute right-0 md:right-[5%] top-[50%] md:top-[40%] w-[45%] md:w-[40%] z-10">
                            <RotatedImage
                                src={IMAGES.hero3}
                                alt="Grachten uitzicht"
                                rotation={-1}
                                className="aspect-[16/10] rounded-sm"
                                parallaxSpeed={1}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ONZE ZAAK SECTION */}
            <section className="py-12 md:py-32 bg-diodona-green text-diodona-beige transition-colors duration-1000">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <h2 className="font-serif text-4xl md:text-5xl mb-8">{t.home.intro.title}</h2>
                        <p className="font-serif text-xl md:text-2xl leading-relaxed opacity-90">
                            {t.home.intro.textPart1} <Link to="/lunch" className="underline hover:opacity-70 transition-opacity">{t.home.intro.linkLunch}</Link>{t.home.intro.textPart2} <Link to="/diner" className="underline hover:opacity-70 transition-opacity">{t.home.intro.linkDiner}</Link> {t.home.intro.textPart3}
                        </p>

                        <Link to="/reserveren">
                            <Button className="bg-diodona-beige text-diodona-green hover:bg-white mt-4 mb-2">
                                {t.home.intro.button}
                            </Button>
                        </Link>

                        <p className="text-lg opacity-80">
                            {t.home.intro.rating}
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 pt-12">
                            <div>
                                <h4 className="font-serif text-xl mb-4 uppercase tracking-wide">{t.home.cards.lunch.title}</h4>
                                <p className="opacity-80 mb-6">
                                    {t.home.cards.lunch.text}
                                </p>
                                <Link to="/lunch" className="inline-block border-b border-diodona-beige pb-1 hover:opacity-70 transition-opacity">
                                    {t.home.cards.lunch.link}
                                </Link>
                            </div>

                            <div>
                                <h4 className="font-serif text-xl mb-4 uppercase tracking-wide">{t.home.cards.diner.title}</h4>
                                <p className="opacity-80 mb-6">
                                    {t.home.cards.diner.text}
                                </p>
                                <Link to="/diner" className="inline-block border-b border-diodona-beige pb-1 hover:opacity-70 transition-opacity">
                                    {t.home.cards.diner.link}
                                </Link>
                            </div>

                            <div>
                                <h4 className="font-serif text-xl mb-4 uppercase tracking-wide">{t.home.cards.wines.title}</h4>
                                <p className="opacity-80 mb-6">
                                    {t.home.cards.wines.text}
                                </p>
                                <Link to="/wijnen" className="inline-block border-b border-diodona-beige pb-1 hover:opacity-70 transition-opacity">
                                    {t.home.cards.wines.link}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ONZE KEUKEN SECTION */}
            <section className="py-12 md:py-32 bg-diodona-beige relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="relative w-full max-w-md">
                                <RotatedImage
                                    src={IMAGES.portrait}
                                    alt="Onze Chef"
                                    rotation={-1.5}
                                    className="aspect-[2/3] w-full"
                                />
                                <div className="absolute -bottom-10 -right-10 md:-right-20 bg-white p-6 shadow-xl max-w-xs transform rotate-2 hidden md:block">
                                    <p className="font-script text-3xl text-diodona-green mb-2">{t.home.kitchen.quote1}</p>
                                    <p className="font-script text-3xl text-diodona-green pl-8">{t.home.kitchen.quote2}</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
                            <h2 className="font-serif text-4xl md:text-5xl text-diodona-green">
                                {t.home.kitchen.title}
                            </h2>
                            <p className="text-lg text-diodona-green/80 leading-relaxed max-w-lg mx-auto md:mx-0">
                                {t.home.kitchen.text}
                            </p>
                            <Link to="/diner">
                                <Button>
                                    {t.home.kitchen.button}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* HARTJE AMSTERDAM */}
            <section className="py-12 md:py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="font-serif text-4xl md:text-5xl text-diodona-green">
                            {t.home.heart.title}
                        </h2>
                        <p className="text-lg text-diodona-green/80 leading-relaxed">
                            {t.home.heart.textPart1} <Link to="/lunch" className="underline hover:opacity-70">{t.home.heart.linkLunch}</Link> {t.home.heart.textPart2} <Link to="/diner" className="underline hover:opacity-70">{t.home.heart.linkDiner}</Link> {t.home.heart.textPart3}
                        </p>
                        <Link to="/sfeer">
                            <Button variant="outline">
                                {t.home.heart.button}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ONZE PRODUCTEN */}
            <section className="py-12 md:py-32 bg-diodona-beige">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="font-serif text-4xl md:text-5xl text-diodona-green">
                            {t.home.products.title}
                        </h2>
                        <p className="text-lg text-diodona-green/80 leading-relaxed">
                            {t.home.products.text}
                        </p>
                        <Link to="/reserveren">
                            <Button>
                                {t.home.products.button}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* LOCATIE */}
            <section className="py-12 md:py-32 bg-diodona-green text-diodona-beige">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-serif text-4xl md:text-5xl mb-12 text-center">{t.home.location.title}</h2>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h3 className="font-serif text-2xl">{t.home.location.addressTitle}</h3>
                                <p className="text-lg">
                                    {t.home.location.address}<br />
                                    {t.home.location.city}
                                </p>

                                <h3 className="font-serif text-2xl mt-8">{t.home.location.openingTitle}</h3>
                                <p className="text-lg">
                                    {t.home.location.days}<br />
                                    {t.home.location.hours}<br />
                                    <span className="text-sm opacity-80">{t.home.location.kitchenNote}</span>
                                </p>

                                <h3 className="font-serif text-2xl mt-8">{t.home.location.phoneTitle}</h3>
                                <p className="text-lg">
                                    <a href="tel:0201234567" className="hover:underline">020 123 4567</a>
                                </p>
                            </div>

                            <div className="aspect-square bg-diodona-beige/20 rounded-sm overflow-hidden h-full min-h-[300px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.793836746654!2d4.888629076571569!3d52.37418297202354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c123456789%3A0x1234567890abcdef!2sHerengracht%20123%2C%201015%20BG%20Amsterdam!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Locatie Canaletto Amsterdam"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
