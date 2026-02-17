import React from 'react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
    return (
        <main>
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-diodona-beige">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="font-serif text-5xl md:text-7xl text-diodona-green mb-16 text-center">
                        Contact
                    </h1>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Contact Info */}
                        <div className="space-y-8 text-diodona-green">
                            <div>
                                <h2 className="font-serif text-3xl mb-4">Bezoekadres</h2>
                                <p className="text-lg leading-relaxed">
                                    Herengracht 123<br />
                                    1015 Amsterdam<br />
                                    Nederland
                                </p>
                            </div>

                            <div>
                                <h2 className="font-serif text-3xl mb-4">Openingstijden</h2>
                                <p className="text-lg leading-relaxed">
                                    Maandag – Zondag<br />
                                    12:00 – 23:00<br />
                                    <span className="text-sm opacity-70">Keuken open tot 22:00</span>
                                </p>
                            </div>

                            <div>
                                <h2 className="font-serif text-3xl mb-4">Contact</h2>
                                <p className="text-lg leading-relaxed">
                                    Telefoon: <a href="tel:0201234567" className="hover:underline">020 123 4567</a><br />
                                    Email: <a href="mailto:info@canaletto-amsterdam.nl" className="hover:underline">info@canaletto-amsterdam.nl</a>
                                </p>
                            </div>

                            <div>
                                <h2 className="font-serif text-3xl mb-4">Social Media</h2>
                                <div className="flex gap-4">
                                    <a href="#" className="text-lg hover:underline">Instagram</a>
                                    <span>•</span>
                                    <a href="#" className="text-lg hover:underline">Facebook</a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-sm shadow-lg">
                            <h2 className="font-serif text-3xl text-diodona-green mb-6">Stuur ons een bericht</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-diodona-green mb-2 font-medium">Naam</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-diodona-green/20 rounded focus:outline-none focus:border-diodona-green focus:ring-1 focus:ring-diodona-green transition-all duration-300"
                                        placeholder="Uw naam"
                                    />
                                </div>

                                <div>
                                    <label className="block text-diodona-green mb-2 font-medium">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-diodona-green/20 rounded focus:outline-none focus:border-diodona-green focus:ring-1 focus:ring-diodona-green transition-all duration-300"
                                        placeholder="uw@email.nl"
                                    />
                                </div>

                                <div>
                                    <label className="block text-diodona-green mb-2 font-medium">Telefoon</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 border border-diodona-green/20 rounded focus:outline-none focus:border-diodona-green focus:ring-1 focus:ring-diodona-green transition-all duration-300"
                                        placeholder="06 12345678"
                                    />
                                </div>

                                <div>
                                    <label className="block text-diodona-green mb-2 font-medium">Bericht</label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-3 border border-diodona-green/20 rounded focus:outline-none focus:border-diodona-green focus:ring-1 focus:ring-diodona-green transition-all duration-300 resize-none"
                                        placeholder="Uw bericht..."
                                    />
                                </div>

                                <Button className="w-full">
                                    Verstuur bericht
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="aspect-[16/9] bg-diodona-green/10 rounded-sm overflow-hidden shadow-lg h-[400px]">
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
            </section>
        </main>
    );
};
