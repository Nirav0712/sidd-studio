import React from 'react';
import { clientLogos } from '../data/data';

const ClientLogoSlider = () => {
    return (
        <div className="py-12 border-b border-gray-100 overflow-hidden bg-white">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
                Trusted By Brands & Businesses
            </p>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-[marquee_25s_linear_infinite] whitespace-nowrap flex group-hover:[animation-play-state:paused]">
                    {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
                        <span
                            key={idx}
                            className="mx-10 md:mx-16 text-3xl md:text-5xl font-display font-bold text-gray-200 uppercase"
                        >
                            {logo}
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
        </div>
    );
};
export default ClientLogoSlider;
