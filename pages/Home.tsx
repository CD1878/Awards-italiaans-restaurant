import React from 'react';
import { Button } from '../components/Button';
import { RotatedImage } from '../components/RotatedImage';
import { IMAGES } from '../constants';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
    return (
        <main>
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 animate-fade-in">
                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
                            fine dining met een Italiaanse twist
                        </h1>
                        <p className="text-xl md:text-2xl text-diodona-green/80 mb-2">AMSTERDAM</p>
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
                        <h2 className="font-serif text-4xl md:text-5xl mb-8">CANALETTO</h2>
                        <p className="font-serif text-xl md:text-2xl leading-relaxed opacity-90">
                            In het mooiste steegje van Amsterdam vind je Canaletto. Bij ons kun je vanaf 12:00 terecht voor een fijne <Link to="/lunch" className="underline hover:opacity-70 transition-opacity">lunch</Link>, een hapje en een drankje met zon rond borreluur en een spetterend <Link to="/diner" className="underline hover:opacity-70 transition-opacity">diner</Link> of bruisende borrel aan onze prachtige bar.
                        </p>

                        <Link to="/reserveren">
                            <Button className="bg-diodona-beige text-diodona-green hover:bg-white mt-4 mb-2">
                                Reserveer een tafel
                            </Button>
                        </Link>

                        <p className="text-lg opacity-80">
                            ★★★★★ beoordeeld met een 9,2 The Fork
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 pt-12">
                            <div>
                                <h4 className="font-serif text-xl mb-4 uppercase tracking-wide">Onze Lunchkaart</h4>
                                <p className="opacity-80 mb-6">
                                    Al eens gedacht aan een lunch bij Canaletto? Onze zorgvuldig samengestelde en veelzijdige lunchkaart laat jou kennis maken met onze Italiaanse keuken.
                                </p>
                                <Link to="/lunch" className="inline-block border-b border-diodona-beige pb-1 hover:opacity-70 transition-opacity">
                                    Onze Lunchkaart →
                                </Link>
                            </div>

                            <div>
                                <h4 className="font-serif text-xl mb-4 uppercase tracking-wide">Onze Dinerkaart</h4>
                                <p className="opacity-80 mb-6">
                                    Kom bij ons een heerlijke avond Italiaans tafelen. Bekijk alvast onze dinerkaart en laat je verrassen door een variëteit aan authentieke Italiaanse gerechten.
                                </p>
                                <Link to="/diner" className="inline-block border-b border-diodona-beige pb-1 hover:opacity-70 transition-opacity">
                                    Onze Dinerkaart →
                                </Link>
                            </div>

                            <div>
                                <h4 className="font-serif text-xl mb-4 uppercase tracking-wide">Onze Wijnen</h4>
                                <p className="opacity-80 mb-6">
                                    Canaletto heeft een zeer complete en specifiek samengestelde wijnkaart. Bij ieder gerecht is een bijpassende wijn geselecteerd. Ook bieden wij een wijn arrangement aan.
                                </p>
                                <Link to="/wijnen" className="inline-block border-b border-diodona-beige pb-1 hover:opacity-70 transition-opacity">
                                    Onze Wijnkaart →
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
                                    <p className="font-script text-3xl text-diodona-green mb-2">Chi ci conosce,</p>
                                    <p className="font-script text-3xl text-diodona-green pl-8">torna sempre</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
                            <h2 className="font-serif text-4xl md:text-5xl text-diodona-green">
                                ONZE KEUKEN
                            </h2>
                            <p className="text-lg text-diodona-green/80 leading-relaxed max-w-lg mx-auto md:mx-0">
                                Chef Mattia Pedroni staat na jarenlang gewerkt te hebben in top restaurants in onder andere Londen en New York nu bij Canaletto aan het roer. Met zijn Italiaanse roots voorziet hij je van elke dag vers gemaakte focaccia en ravioli naar grootmoeders recept. Ook voor een gevulde salade, mooi stuk vlees of vegetarisch gerecht ben je bij ons aan het goede adres.
                            </p>
                            <Link to="/diner">
                                <Button>
                                    Onze Dinerkaart
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
                            HARTJE AMSTERDAM
                        </h2>
                        <p className="text-lg text-diodona-green/80 leading-relaxed">
                            Canaletto ligt in het hart van Amsterdam. De Begijnensteeg, een sfeervolle en pittoreske zijstraat van de Kalverstraat. We hebben een fijn terras waar je zowel voor <Link to="/lunch" className="underline hover:opacity-70">lunch</Link> als <Link to="/diner" className="underline hover:opacity-70">diner</Link> heerlijk kunt tafelen. Nieuwsgierig? Proef dan even Onze Sfeer.
                        </p>
                        <Link to="/sfeer">
                            <Button variant="outline">
                                Proef Onze Sfeer
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
                            ONZE PRODUCTEN
                        </h2>
                        <p className="text-lg text-diodona-green/80 leading-relaxed">
                            Kwaliteit en duurzaamheid staan bij ons voorop bij de inkoop van onze producten. Zoveel mogelijk biologisch en bij lokale leveranciers zoals boerderij Lindenhof, onze bevriende kaasboer van de Zuivelhoeve Elandsgracht en vishandel Jan van As.
                        </p>
                        <Link to="/reserveren">
                            <Button>
                                Reserveer een tafel
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* LOCATIE */}
            <section className="py-12 md:py-32 bg-diodona-green text-diodona-beige">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-serif text-4xl md:text-5xl mb-12 text-center">ONZE LOCATIE</h2>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h3 className="font-serif text-2xl">Adres</h3>
                                <p className="text-lg">
                                    Herengracht 123<br />
                                    1015 Amsterdam
                                </p>

                                <h3 className="font-serif text-2xl mt-8">Openingstijden</h3>
                                <p className="text-lg">
                                    Maandag – Zondag<br />
                                    12:00 – 23:00<br />
                                    <span className="text-sm opacity-80">keuken open tot 22:00</span>
                                </p>

                                <h3 className="font-serif text-2xl mt-8">Telefoonnummer</h3>
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
