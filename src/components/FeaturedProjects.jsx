import React from 'react';
import { featuredProjects } from '../data/data';
import { motion } from 'framer-motion';

const FeaturedProjects = () => {
    return (
        <section id="projects" className="py-16 md:py-24 bg-white">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 xl:px-24">

                {/* Centered Headers */}
                <div className="text-center mb-10 md:mb-16 flex flex-col items-center">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-black mb-4 md:mb-6">
                        Our Main Projects
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl font-light">
                        A collection of branding, digital, social and marketing projects created to make brands stand out.
                    </p>
                </div>

                {/* Asymmetrical 3-Column Grid Pattern */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {featuredProjects.slice(0, 4).map((project, index) => {
                        // Create a repeating asymmetrical pattern on a 3-column grid
                        // Row 1: [2 cols] [1 col]
                        // Row 2: [1 col] [2 cols] 
                        let colSpanClass = "md:col-span-1";
                        if (index % 4 === 0) colSpanClass = "md:col-span-2";
                        else if (index % 4 === 3) colSpanClass = "md:col-span-2";

                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                                key={project.id}
                                className={`group relative overflow-hidden rounded-[32px] bg-gray-100 ${colSpanClass} aspect-square md:aspect-auto min-h-[400px] lg:min-h-[500px]`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                {/* Gradient overlay to ensure text is readable over images */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Text integrated inside the card at bottom-left/center */}
                                <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full flex flex-col items-center text-center md:items-start md:text-left">
                                    <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-200 text-base md:text-lg font-light max-w-md opacity-90 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default FeaturedProjects;
