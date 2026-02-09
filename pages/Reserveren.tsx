import React from 'react';
import { Button } from '../components/Button';

export const Reserveren: React.FC = () => {
    return (
        <main>
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-diodona-beige">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="font-serif text-5xl md:text-7xl text-diodona-green mb-8 text-center">
                        Reserveren
                    </h1>

                    <p className="text-xl text-diodona-green/80 text-center mb-16">
                        Reserveer eenvoudig online een tafel bij Canaletto. We kijken ernaar uit u te verwelkomen!
                    </p>

                    {/* Reservation Form */}
                    <div className="bg-white p-8 md:p-12 rounded-sm shadow-lg">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-diodona-green mb-2 font-medium">Voornaam *</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border border-diodona-green/20 rounded focus:outline-none focus:border-diodona-green transition-colors"
                                        placeholder="Voornaam"
                                    />
                                </div>

                                <div>
                                    <label className="block text-diodona-green mb-2 font-medium">Achternaam *</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border border-diodona-green/20 rounded focus:outline-none focus:border-diodona-green transition-colors"
                                        placeholder="Achternaam"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-diodona-green mb-2 font-medium">Email *</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 border border-diodona-green/20 rounded focus:outline-none focus:border-diodona-green transition-colors"
                                        placeholder="uw@email.nl"
                                    />
                                </div>

                                <div>
                                    <label className="block text-diodona-green mb-2 font-medium">Telefoon *</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-3 border border-diodona-green/20 rounded focus:outline-none focus:border-diodona-green transition-colors"
                                        placeholder="06 12345678"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-diodona-green mb-2 font-medium">Datum *</label>
                                    <input
                                        type="date"
                                        required
                                        className="w-full px-4 py-3 border border-diodona-green/20 rounded focus:outline-none focus:border-diodona-green transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-diodona-green mb-2 font-medium">Tijd *</label>
                                    <select
                                        required
                                        className="w-full px-4 py-3 border border-diodona-green/20 rounded focus:outline-none focus:border-diodona-green transition-colors"
                                    >
                                        <option value="">Selecteer tijd</option>
                                        <option value="12:00">12:00</option>
                                        <option value="12:30">12:30</option>
                                        <option value="13:00">13:00</option>
                                        <option value="13:30">13:30</option>
                                        <option value="14:00">14:00</option>
                                        <option value="18:00">18:00</option>
                                        <option value="18:30">18:30</option>
                                        <option value="19:00">19:00</option>
                                        <option value="19:30">19:30</option>
                                        <option value="20:00">20:00</option>
                                        <option value="20:30">20:30</option>
                                        <option value="21:00">21:00</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-diodona-green mb-2 font-medium">Aantal personen *</label>
                                    <select
                                        required
                                        className="w-full px-4 py-3 border border-diodona-green/20 rounded focus:outline-none focus:border-diodona-green transition-colors"
                                    >
                                        <option value="">Selecteer</option>
                                        <option value="1">1 persoon</option>
                                        <option value="2">2 personen</option>
                                        <option value="3">3 personen</option>
                                        <option value="4">4 personen</option>
                                        <option value="5">5 personen</option>
                                        <option value="6">6 personen</option>
                                        <option value="7">7 personen</option>
                                        <option value="8">8 personen</option>
                                        <option value="9+">9+ personen</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-diodona-green mb-2 font-medium">Bijzonderheden</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 border border-diodona-green/20 rounded focus:outline-none focus:border-diodona-green transition-colors resize-none"
                                    placeholder="Heeft u speciale wensen of dieetwensen? Laat het ons weten..."
                                />
                            </div>

                            <div className="bg-diodona-beige p-4 rounded">
                                <p className="text-sm text-diodona-green/70">
                                    * Voor groepen vanaf 9 personen verzoeken wij u telefonisch contact met ons op te nemen via <a href="tel:0201234567" className="underline hover:opacity-70">020 123 4567</a>
                                </p>
                            </div>

                            <Button className="w-full text-lg py-4">
                                Reservering aanvragen
                            </Button>

                            <p className="text-sm text-diodona-green/60 text-center">
                                U ontvangt een bevestiging per email. Wij nemen zo spoedig mogelijk contact met u op.
                            </p>
                        </form>
                    </div>

                    {/* Alternative Contact */}
                    <div className="mt-12 text-center">
                        <p className="text-lg text-diodona-green mb-4">
                            Liever telefonisch reserveren?
                        </p>
                        <a href="tel:0201234567">
                            <Button variant="outline">
                                Bel ons: 020 123 4567
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};
