import React from 'react';
import { ArrowRight } from 'lucide-react';
import { categoryLinks } from '../data/data';
import { Link } from 'react-router-dom';

const PortfolioCategories = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col lg:flex-row gap-16 relative">

                {/* Left Side: Headings */}
                <div className="w-full lg:w-1/2 lg:sticky lg:top-32 self-start">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-black mb-6">
                        Explore My Work
                    </h2>
                    <p className="text-lg text-gray-500 max-w-md font-light leading-relaxed">
                        Explore selected projects across branding, digital experiences, social media and marketing design.
                    </p>
                </div>

                {/* Right Side: Category Pills */}
                <div className="w-full lg:w-1/2 flex flex-col space-y-5">
                    {categoryLinks.map((cat, idx) => (
                        <Link
                            key={idx}
                            to={`/services#${cat.id}`}
                            className="group flex justify-between items-center px-8 md:px-10 py-6 md:py-8 bg-gray-200 rounded-3xl hover:bg-black hover:text-white transition-colors duration-500 overflow-hidden relative shadow-sm hover:shadow-xl"
                        >
                            {/* Subtle Background preview image on hover to maintain previous feature but within the new pill design */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626785724573-4b799315345d?q=80&w=800&auto=format&fit=crop&grayscale=true')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />

                            <h3 className="text-2xl md:text-3xl font-display font-semibold text-black group-hover:text-white relative z-10 transition-colors">
                                {cat.name}
                            </h3>

                            <div className="text-black group-hover:text-white transition-all duration-300 relative z-10 translate-x-0 group-hover:translate-x-3">
                                <ArrowRight size={28} className="transform transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
};
export default PortfolioCategories;
