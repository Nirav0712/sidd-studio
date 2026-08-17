import React, { useRef } from 'react';
import { brandingData } from '../../data/portfolioData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BrandingSlider = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
                <div>
                    <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-3 block">Services</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Branding & Identity</h2>
                </div>
                <div className="hidden md:flex space-x-4">
                    <button onClick={scrollLeft} className="p-4 border border-black rounded-full hover:bg-black hover:text-white transition-colors">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={scrollRight} className="p-4 border border-black rounded-full hover:bg-black hover:text-white transition-colors">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto hide-scrollbar gap-8 px-6 md:px-12 snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {brandingData.map((item) => (
                    <div key={item.id} className="min-w-[85vw] md:min-w-[600px] snap-center group cursor-pointer relative overflow-hidden bg-white shadow-sm">
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-2xl font-display font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-300">Identity Design</p>
                        </div>
                    </div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
        </section>
    );
};

export default BrandingSlider;
