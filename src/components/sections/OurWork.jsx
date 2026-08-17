import React from 'react';
import { featuredProjects } from '../../data/portfolioData';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const OurWork = () => {
    return (
        <section className="py-24 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="mb-20 text-center md:text-left">
                    <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Case Studies</span>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold">Our Work</h2>
                </div>

                <div className="space-y-32">
                    {featuredProjects.map((project, index) => (
                        <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-24 items-center`}>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="w-full md:w-3/5 group relative overflow-hidden"
                            >
                                <div className="aspect-[4/3] w-full overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="w-full md:w-2/5 flex flex-col justify-center"
                            >
                                <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
                                    {project.category}
                                </span>
                                <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-lg mb-8 font-light">
                                    {project.description}
                                </p>

                                <div className="flex items-center space-x-4 mb-10">
                                    <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Client:</span>
                                    <span className="text-white bg-white/10 px-4 py-1 rounded-full text-sm">{project.client}</span>
                                </div>

                                <a href="#" className="group inline-flex items-center space-x-4 text-white font-semibold text-lg hover:text-accent transition-colors w-fit">
                                    <span className="relative">
                                        View Case Study
                                        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white group-hover:bg-accent transition-colors" />
                                    </span>
                                    <ArrowRight className="transform group-hover:translate-x-2 transition-transform" />
                                </a>
                            </motion.div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurWork;
