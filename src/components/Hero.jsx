import React, { useState, useEffect } from 'react';
import { heroData } from '../data/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
    "/assets/HeroSlide/home top images 1.jpg",
    "/assets/HeroSlide/home top images 2.jpg",
    "/assets/HeroSlide/home top images 3.jpg"
];

const Hero = () => {
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImgIndex((prev) => (prev + 1) % heroImages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-[85vh] md:h-screen min-h-[600px] bg-white pt-0 -mt-[104px]">
            <div className="absolute inset-0 z-0 w-full h-full flex flex-col md:flex-row">

                {/* Left Side: Content */}
                <div className="w-full md:w-5/12 lg:w-1/3 h-full flex flex-col justify-center pt-[104px] pl-6 pr-6 md:pr-0 md:pl-12 lg:pl-20 bg-white relative z-20">
                    <div className="w-full">
                        <div className="inline-block px-3 py-1 mb-6 border border-gray-300 rounded-full text-xs font-semibold uppercase tracking-wider text-black">
                            {heroData[0].badge}
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-black mb-6 leading-tight tracking-tight">
                            {heroData[0].title}
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 sm:mb-10 leading-relaxed max-w-md">
                            {heroData[0].description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#projects" className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center">
                                <span>View My Work</span>
                            </a>
                            <a href="/contact" className="px-8 py-4 bg-white text-black border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center justify-center text-center">
                                Let's Collaborate
                            </a>
                        </div>
                    </div>

                    {/* Custom Navigation */}
                    <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 hidden md:flex space-x-4">
                        <button
                            onClick={() => setImgIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))}
                            className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => setImgIndex((prev) => (prev + 1) % heroImages.length)}
                            className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Right Side: Image Slider */}
                <div className="w-full md:w-7/12 lg:w-2/3 h-[50vh] md:h-full bg-white px-6 pb-6 md:p-0">
                    <div className="w-full h-full relative overflow-hidden rounded-2xl md:rounded-none">
                        <AnimatePresence>
                            <motion.div
                                key={imgIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <img
                                    src={heroImages[imgIndex]}
                                    alt={`Hero Slide ${imgIndex + 1}`}
                                    className="w-full h-full object-cover md:object-contain object-center md:object-left"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Preload images to prevent blank frames */}
                        <div className="hidden">
                            {heroImages.map((src, i) => (
                                <img key={i} src={src} alt="preload" />
                            ))}
                        </div>

                        {/* Pagination dots (right side bottom) */}
                        <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 z-20 flex space-x-2">
                            {heroImages.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setImgIndex(idx)}
                                    className={`transition-all duration-300 h-2 rounded-full ${imgIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
