import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import photographyImg from '../../assets/More/Photography.jpg';
import sandArtImg from '../../assets/More/rangoli.jpg';
import setDesignImg from '../../assets/More/set-design.jpg';

const categoriesData = [
    {
        category: "Photography",
        image: photographyImg
    },
    {
        category: "Sand-Art",
        image: sandArtImg
    },
    {
        category: "Set Design",
        image: setDesignImg
    }
];

const MorePage = () => {
    const [activeCategory, setActiveCategory] = useState("Photography");
    const activeData = categoriesData.find(c => c.category === activeCategory);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white min-h-screen"
        >
            {/* PAGE HEADING */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50 text-center border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6">
                    <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4 md:mb-6 block">
                        Additional Portfolio
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-black mb-6 md:mb-8 leading-[1.1]">
                        More Creative Work
                    </h1>
                    <p className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Explore other creative projects including photography, sand-art, and set design.
                    </p>
                </div>
            </section>

            {/* CATEGORY FILTERS & IMAGE CONTENT */}
            <section className="py-12 md:py-20 bg-white">
                <div className="max-w-full mx-auto px-6 md:px-12">
                    {/* FILTERS */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-16">
                        {categoriesData.map(cat => (
                            <button
                                key={cat.category}
                                onClick={() => setActiveCategory(cat.category)}
                                className={`px-5 py-2 md:px-8 md:py-3 text-sm md:text-base font-medium transition-all duration-300 rounded-full border whitespace-nowrap text-center ${activeCategory === cat.category
                                    ? 'bg-black text-white border-black'
                                    : 'bg-transparent text-gray-500 border-gray-200 hover:border-black hover:text-black'
                                    }`}
                            >
                                {cat.category}
                            </button>
                        ))}
                    </div>

                    {/* IMAGE PRESENTATION */}
                    <div className="flex justify-center w-full">
                        <AnimatePresence mode="wait">
                            {activeData && (
                                <motion.div
                                    key={activeData.category}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="w-full flex justify-center"
                                >
                                    <img
                                        src={activeData.image}
                                        alt={activeData.category}
                                        className="w-full h-auto block rounded-2xl md:rounded-[32px] bg-gray-50 shadow-sm"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default MorePage;
