import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const Groepen: React.FC = () => {
    return (
        <main>
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-diodona-beige">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="font-serif text-5xl md:text-7xl text-diodona-green mb-12 text-center">
                        Groepen
                    </h1>

                    <div className="space-y-12 text-diodona-green">
                        <p className="text-xl leading-relaxed">
                            Bij Canaletto bieden we een veelzijdige eetervaring voor groepen, perfect voor zowel lunch als diner. Of het nu gaat om een zakelijke bijeenkomst, een familiediner of een gezellige avond met vrienden, wij zorgen ervoor dat uw gezelschap een heerlijke tijd heeft.
                        </p>

                        {/* Diner voor Groepen */}
                        <div className="bg-white p-8 md:p-12 rounded-sm shadow-lg">
                            <h2 className="font-serif text-3xl md:text-4xl mb-6">Diner voor Groepen</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Voor zowel lunch als diner kunt u kiezen uit een 3-, 4- of 5-gangenmenu, waarbij shared dining een optie is, maar niet verplicht. Geniet van zorgvuldig samengestelde gerechten met de keuze tussen vlees, vis, vegetarische en zelfs veganistische opties.
                            </p>
                            <div className="space-y-3 text-lg">
                                <p><strong>3-gangenmenu:</strong> €49 per persoon</p>
                                <p><strong>4-gangenmenu:</strong> €56 per persoon (inclusief verse pasta)</p>
                                <p><strong>5-gangenmenu:</strong> €64 per persoon (inclusief kaasplank)</p>
                            </div>
                        </div>

                        {/* Groepslunch Special */}
                        <div className="bg-diodona-green text-diodona-beige p-8 md:p-12 rounded-sm shadow-lg">
                            <h2 className="font-serif text-3xl md:text-4xl mb-6">Groepslunch Special</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Op zoek naar een snelle en smakelijke lunch? Voor slechts <strong>€25,00 per persoon</strong> geniet u met uw groep van een selectie aan vers bereide pasta's en meer. Deze aanbieding is geldig voor groepen vanaf 4 personen.
                            </p>
                            <p className="text-lg leading-relaxed opacity-90">
                                Heeft u haast? Laat het ons vooraf weten en wij zorgen dat alles klaarstaat bij aankomst.
                            </p>
                        </div>

                        {/* Shared Dining */}
                        <div className="bg-white p-8 md:p-12 rounded-sm shadow-lg">
                            <h2 className="font-serif text-3xl md:text-4xl mb-6">Shared Dining voor Groepen</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Wilt u samen met uw gezelschap genieten van een culinaire ervaring? Kies dan voor onze shared dining-optie. Start met een selectie van voorgerechten, gevolgd door een keuze uit vlees-, vis-, vegetarische of veganistische hoofdgerechten, en sluit af met een heerlijk dessert.
                            </p>
                            <p className="text-lg leading-relaxed opacity-80">
                                Shared dining is beschikbaar voor zowel lunch als diner.
                            </p>
                        </div>

                        {/* Reserveren */}
                        <div className="bg-diodona-beige border-2 border-diodona-green p-8 md:p-12 rounded-sm text-center">
                            <h2 className="font-serif text-3xl md:text-4xl mb-6">Reserveren</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                Gebruik ons reserveringsformulier of bel ons direct. Wij nemen altijd contact met u op om de reservering te bevestigen. Heeft u vragen of speciale wensen? Neem gerust contact met ons op!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="tel:0201234567">
                                    <Button className="bg-diodona-green text-diodona-beige hover:bg-diodona-green/90">
                                        Telefonisch reserveren
                                    </Button>
                                </a>
                                <Link to="/contact">
                                    <Button variant="outline">
                                        Contact opnemen
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Aanvraag groepsreservering */}
                        <div className="text-center pt-8">
                            <h3 className="font-serif text-2xl mb-6">Aanvraag groepsreservering</h3>
                            <p className="text-lg mb-8">
                                Heeft u een vraag of opmerking over uw reservering? Neem dan gerust contact met ons op.
                            </p>
                            <Link to="/contact">
                                <Button>
                                    Neem contact op
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
