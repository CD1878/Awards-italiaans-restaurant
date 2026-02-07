import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { RotatedImage } from './components/RotatedImage';
import { MENU_ITEMS, IMAGES } from './constants';
import { ArrowRight, Star } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="font-sans text-diodona-green bg-diodona-beige overflow-x-hidden selection:bg-diodona-green selection:text-white">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
           <div className="container mx-auto">
             <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 animate-fade-in">
               <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
                 Canaletto è magia, sapori, natura, passione.
               </h1>
             </div>

             {/* Staggered Images Grid */}
             <div className="relative h-[60vh] md:h-[80vh] w-full max-w-7xl mx-auto">
                {/* Central Image */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[90%] md:w-[60%] z-20">
                  <RotatedImage 
                    src={IMAGES.hero1} 
                    alt="Interior of Canaletto" 
                    rotation={1} 
                    className="aspect-[4/3] rounded-sm"
                  />
                </div>
                
                {/* Left Image (Lower) */}
                <div className="absolute left-0 md:left-[5%] top-[40%] md:top-[30%] w-[45%] md:w-[35%] z-30">
                   <RotatedImage 
                    src={IMAGES.hero2} 
                    alt="Delicious pasta detail" 
                    rotation={-2} 
                    className="aspect-[3/4] rounded-sm"
                    parallaxSpeed={-2}
                  />
                </div>

                {/* Right Image (Lower) */}
                <div className="absolute right-0 md:right-[5%] top-[50%] md:top-[40%] w-[45%] md:w-[40%] z-10">
                  <RotatedImage 
                    src={IMAGES.hero3} 
                    alt="Canal view" 
                    rotation={-1} 
                    className="aspect-[16/10] rounded-sm"
                    parallaxSpeed={1}
                  />
                </div>
             </div>
           </div>
        </section>

        {/* INTRO TEXT SECTION */}
        <section className="py-20 md:py-32 bg-diodona-green text-diodona-beige transition-colors duration-1000">
           <div className="container mx-auto px-4 md:px-12">
              <div className="max-w-3xl mx-auto text-center space-y-12">
                 <p className="font-serif text-2xl md:text-3xl leading-relaxed opacity-90">
                   Un ristorante raffinato, immerso nel paesaggio dei canali storici di Amsterdam.
                   <br/><br/>
                   L'anima italiana incontra l'eleganza olandese: un palazzo del XVII secolo ricco di calore, dove la luce dell'acqua danza sui soffitti e il tempo si distende.
                 </p>
                 
                 <div className="h-px w-24 bg-diodona-beige/30 mx-auto"></div>

                 <p className="font-sans text-lg md:text-xl leading-relaxed opacity-80">
                   Canaletto è un’esperienza da assaporare con tutti i sensi.
                   Che si tratti di una pasta fatta a mano, di un buon bicchiere di vino o di un istante di quiete osservando le barche, qui ogni momento ha il suo spazio, il suo ritmo, il suo significato.
                 </p>

                 <div className="pt-8 transform -rotate-3">
                    <span className="font-script text-6xl md:text-8xl text-diodona-accent">
                      benvenuti!
                    </span>
                 </div>
              </div>
           </div>
        </section>

        {/* FAMILY / STAFF SECTION */}
        <section className="py-20 md:py-32 bg-diodona-beige relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
              <div className="w-full md:w-1/2 flex justify-center">
                 <div className="relative w-full max-w-md">
                   <RotatedImage 
                      src={IMAGES.portrait} 
                      alt="Our Chef" 
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
                   L’accoglienza è di famiglia
                 </h2>
                 <p className="text-lg text-diodona-green/80 leading-relaxed max-w-lg mx-auto md:mx-0">
                   C’è un’ospitalità che non si improvvisa: quella che nasce in famiglia, cresce con la cura, si riconosce nei gesti. Da tre generazioni portiamo i sapori dell'Italia nel cuore di Amsterdam.
                 </p>
                 <Button>
                   La Famiglia Canaletto
                 </Button>
              </div>
            </div>
          </div>
        </section>

        {/* DISHES PREVIEW */}
        <section className="py-20 overflow-hidden bg-white/50">
           <div className="container mx-auto px-4 mb-16 relative">
              <div className="max-w-2xl">
                 <h2 className="font-serif text-3xl md:text-5xl mb-6 text-diodona-green">
                   I nostri piatti nascono da gesti antichi e nuove armonie.
                 </h2>
              </div>
           </div>

           <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-4">
              <div className="w-full max-w-sm md:mt-20">
                 <RotatedImage 
                    src={IMAGES.dish1} 
                    alt="Signature Pasta" 
                    rotation={-3} 
                    className="aspect-[3/4]"
                 />
              </div>
              <div className="w-full max-w-sm md:-mt-20">
                 <RotatedImage 
                    src={IMAGES.dish2} 
                    alt="Signature Dessert" 
                    rotation={2} 
                    className="aspect-[3/4]"
                 />
              </div>
           </div>
        </section>

        {/* MENU SCROLL SECTION */}
        <section className="py-20 md:py-32 bg-diodona-beige">
          <div className="container mx-auto px-4 text-center mb-16">
            <span className="font-sans text-sm tracking-widest uppercase text-diodona-green/60 mb-2 block">Cucina</span>
            <h2 className="font-serif text-4xl md:text-5xl text-diodona-green mb-6">Menu della Domenica & Speciali</h2>
            <p className="max-w-2xl mx-auto text-lg text-diodona-green/80">
              Ingredienti freschi dal mercato, pasta fatta in casa e ricette regionali.
            </p>
          </div>

          <div className="container mx-auto px-4">
            {/* Simple Grid for Menu Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {MENU_ITEMS.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[3/4] mb-6 shadow-md rounded-sm">
                    <div className="absolute inset-0 bg-diodona-green/0 group-hover:bg-diodona-green/10 transition-colors z-10 duration-500"></div>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wide font-bold text-diodona-green z-20">
                      {item.category}
                    </div>
                  </div>
                  <div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
                    <p className="text-sm font-serif italic text-diodona-green/70 mb-2">{item.date}</p>
                    <h3 className="text-xl font-serif font-bold text-diodona-green mb-3">{item.title}</h3>
                    <div className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-diodona-green border-b border-diodona-green/30 pb-1 group-hover:border-diodona-green transition-colors">
                      Scopri
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Button>
                Vedi tutto il menu
              </Button>
            </div>
          </div>
        </section>

        {/* EVENTS / LOCATION SPLIT */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 order-2 lg:order-1">
                   <div className="transform -rotate-2 origin-bottom-left">
                     <span className="font-script text-5xl text-diodona-green/80">come un sarto</span>
                   </div>
                   <h2 className="font-serif text-4xl md:text-5xl text-diodona-green leading-tight">
                     Servizi su misura per un evento costruito con cura
                   </h2>
                   <div className="w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden rounded-sm relative">
                      <img src="https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Wedding setup" />
                   </div>
                   <p className="text-lg text-diodona-green/80">
                     <strong>Dall'allestimento al menu, ogni dettaglio prende forma insieme.</strong><br/>
                     Canaletto mette a disposizione uno staff attento e la bellezza dei canali per dare vita a un evento indimenticabile.
                   </p>
                   <Button variant="outline">
                     I nostri servizi
                   </Button>
                </div>

                <div className="order-1 lg:order-2 flex flex-col gap-12">
                   {/* Card 1 */}
                   <a href="#" className="block group">
                     <div className="relative overflow-hidden aspect-[4/3] rounded-sm transform rotate-1 transition-transform group-hover:rotate-0 duration-500 shadow-lg">
                        <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop" alt="The Canal Room" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                           <h3 className="font-script text-5xl text-white transform -rotate-6 group-hover:scale-110 transition-transform duration-500">La Sala Canale</h3>
                        </div>
                     </div>
                   </a>
                   
                   {/* Card 2 */}
                   <a href="#" className="block group">
                     <div className="relative overflow-hidden aspect-[4/3] rounded-sm transform -rotate-1 transition-transform group-hover:rotate-0 duration-500 shadow-lg">
                        <img src="https://images.unsplash.com/photo-1550966871-3ed3c47e7421?q=80&w=1000&auto=format&fit=crop" alt="The Secret Garden" className="w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                           <h3 className="font-script text-5xl text-white transform -rotate-6 group-hover:scale-110 transition-transform duration-500">Il Giardino Segreto</h3>
                        </div>
                     </div>
                   </a>
                </div>
             </div>
          </div>
        </section>

        {/* NEWSLETTER CTA */}
        <section className="py-24 bg-diodona-green text-diodona-beige text-center">
           <div className="container mx-auto px-4 max-w-3xl">
              <h3 className="font-serif text-3xl md:text-4xl mb-8 leading-relaxed">
                Iscriviti alla nostra newsletter e scopri in anteprima eventi, storie e novità di Amsterdam!
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button className="bg-diodona-beige text-diodona-green hover:bg-white border-none">
                   Iscriviti alla newsletter
                 </Button>
                 <Button variant="outline" className="border-diodona-beige text-diodona-beige hover:bg-diodona-beige hover:text-diodona-green">
                   Canaletto Diary
                 </Button>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;