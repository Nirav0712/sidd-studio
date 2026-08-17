import React, { useState, useEffect } from 'react';
import { featuredProjects, categoryLinks } from '../data/data';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProjectsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search);
    const categoryParam = query.get('category');

    const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');
    const [lightboxData, setLightboxData] = useState(null);

    useEffect(() => {
        if (categoryParam) {
            const match = categoryLinks.find(c => c.id === categoryParam);
            if (match) setActiveCategory(match.name);
        }
    }, [categoryParam]);

    const handleFilter = (catName) => {
        setActiveCategory(catName);
        if (catName === 'All') {
            navigate('/projects', { replace: true });
        } else {
            const matchId = categoryLinks.find(c => c.name === catName)?.id;
            if (matchId) navigate(`/projects?category=${matchId}`, { replace: true });
        }
    };

    const categories = ['All', ...categoryLinks.map(c => c.name)];

    const allProjects = [...featuredProjects];
    const filtered = activeCategory === 'All' ? allProjects : allProjects.filter(p => p.category === activeCategory);

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="bg-white min-h-screen"
        >
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50 text-center border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6">
                    <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4 md:mb-6 block">Selected Work</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-black mb-6 md:mb-8 leading-[1.1]">
                        A Collection of Ideas, Brands & Visual Experiences.
                    </h1>
                    <p className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Explore selected projects across branding, digital experiences, social media, packaging, publication and marketing design.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-full mx-auto px-6 md:px-12">
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => handleFilter(cat)}
                                className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full border ${activeCategory === cat ? 'bg-black text-white border-black' : 'bg-transparent text-gray-500 border-gray-200 hover:border-black hover:text-black'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project, index) => {
                                let colSpanClass = "md:col-span-1";
                                if (index % 4 === 0) colSpanClass = "md:col-span-2";
                                else if (index % 4 === 3) colSpanClass = "md:col-span-2";

                                return (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4 }}
                                        key={project.id}
                                        onClick={() => setLightboxData(project)}
                                        className={`group cursor-pointer relative overflow-hidden rounded-[32px] bg-gray-100 ${colSpanClass} aspect-square md:aspect-auto min-h-[400px] lg:min-h-[500px]`}
                                    >
                                        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-10 shadow-lg">
                                            <ArrowUpRight size={24} className="text-black" />
                                        </div>

                                        <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full z-10">
                                            <h3 className="text-3xl font-display font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
                                            <p className="text-gray-200 text-base md:text-lg font-light translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.category}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {filtered.length === 0 && (
                        <div className="text-center py-20 text-gray-500 text-lg">No projects match the selected category. Check back soon!</div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxData && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
                    >
                        <button className="absolute top-8 right-8 text-white hover:text-gray-400 transition-colors" onClick={() => setLightboxData(null)}>
                            <X size={32} />
                        </button>
                        <img src={lightboxData.image} alt={lightboxData.title} className="max-w-full max-h-[85vh] object-contain rounded-xl" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-2xl font-display font-bold">{lightboxData.title}</h3>
                            <p className="text-gray-400">{lightboxData.category}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
export default ProjectsPage;
