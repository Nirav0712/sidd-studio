import React from 'react';
import { motion } from 'framer-motion';

const MarqueeSection = () => {
    const brands = [
        "VOGUE", "GOOGLE", "NEXUS", "SPOTIFY", "ADIDAS", "PORSCHE", "SONY", "LUMINA", "VERTEX", "AURA"
    ];

    return (
        <section className="py-20 bg-accent overflow-hidden">
            <div className="text-center mb-12">
                <h2 className="text-white text-lg font-semibold uppercase tracking-widest">Trusted By Brands & Businesses</h2>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap flex group-hover:[animation-play-state:paused]">
                    {[...brands, ...brands, ...brands].map((brand, idx) => (
                        <span
                            key={idx}
                            className="mx-8 text-5xl md:text-7xl font-display font-bold text-white/50 hover:text-white transition-colors duration-300"
                        >
                            {brand}
                        </span>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
        </section>
    );
};

export default MarqueeSection;
