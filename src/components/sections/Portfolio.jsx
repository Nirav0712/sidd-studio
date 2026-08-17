import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioCategories, portfolioWorks } from '../../data/portfolioData';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredWorks = activeCategory === 'All'
        ? portfolioWorks
        : portfolioWorks.filter(work => work.category === activeCategory);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">Selected Works</h2>
                        <p className="text-gray-500 max-w-xl text-lg font-light">A curated showcase of recent branding, digital, and visual design projects.</p>
                    </div>

                    <div className="flex flex-wrap gap-2 md:justify-end max-w-2xl">
                        {portfolioCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${activeCategory === category ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredWorks.map((work) => (
                            <motion.div
                                key={work.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative overflow-hidden bg-gray-100 aspect-square"
                            >
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                        {work.category}
                                    </span>
                                    <h3 className="text-white text-2xl font-display font-bold mb-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                                        {work.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 line-clamp-2">
                                        {work.description}
                                    </p>

                                    <a href="#" className="inline-flex items-center space-x-2 text-white font-medium hover:text-accent transition-colors translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 delay-300 w-fit">
                                        <span>View Project</span>
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-16 text-center">
                    <a href="#" className="inline-block px-10 py-4 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-colors duration-300">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
