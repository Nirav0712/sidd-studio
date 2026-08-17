import React, { useState } from 'react';
import { featuredProjects, categoryLinks } from '../data/data';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PortfolioGallery = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [lightboxData, setLightboxData] = useState(null);

    // Use featured projects combined with copies to make up the masonry
    const allWorks = [
        ...featuredProjects,
        ...featuredProjects.map(p => ({ ...p, id: p.id + 10, category: 'Web Design' })),
        ...featuredProjects.map(p => ({ ...p, id: p.id + 20, category: 'Print' }))
    ];

    const categories = ['All', ...categoryLinks];

    const filtered = activeCategory === 'All'
        ? allWorks
        : allWorks.filter(work => work.category === activeCategory);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-4">Latest Work</h2>
                        <p className="text-gray-500 max-w-xl text-lg font-light">Explore a comprehensive gallery of recent projects.</p>
                    </div>

                    <div className="flex flex-wrap gap-2 md:justify-end max-w-2xl">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full border ${activeCategory === cat ? 'bg-black text-white border-black' : 'bg-transparent text-gray-500 border-gray-200 hover:border-black hover:text-black'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* CSS Masonry */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    <AnimatePresence>
                        {filtered.map((work) => (
                            <motion.div
                                key={work.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="break-inside-avoid cursor-pointer group"
                                onClick={() => setLightboxData(work)}
                            >
                                <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <h3 className="text-white text-xl font-display font-bold mb-1 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                            {work.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                                            {work.category}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxData && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
                    >
                        <button
                            className="absolute top-8 right-8 text-white hover:text-gray-400 transition-colors"
                            onClick={() => setLightboxData(null)}
                        >
                            <X size={32} />
                        </button>
                        <img
                            src={lightboxData.image}
                            alt={lightboxData.title}
                            className="max-w-full max-h-[85vh] object-contain"
                        />
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-2xl font-display font-bold">{lightboxData.title}</h3>
                            <p className="text-gray-400">{lightboxData.category}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
export default PortfolioGallery;
