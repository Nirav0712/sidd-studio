import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroSlides } from '../../data/portfolioData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [isPaused, current]);

    const nextSlide = () => setCurrent(current === heroSlides.length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? heroSlides.length - 1 : current - 1);

    return (
        <div
            className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-black"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                        src={heroSlides[current].image}
                        alt={heroSlides[current].title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute z-20 inset-0 flex items-center justify-center">
                <div className="max-w-7xl w-full px-6 md:px-12 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="max-w-3xl"
                        >
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6 text-shadow-md">
                                {heroSlides[current].title}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl font-light text-shadow-sm">
                                {heroSlides[current].description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#portfolio" className="px-8 py-4 bg-white text-black font-semibold hover:bg-accent text-center hover:text-white transition-all duration-300">
                                    View My Work
                                </a>
                                <a href="#contact" className="px-8 py-4 border border-white text-white font-semibold hover:bg-white hover:text-black text-center transition-all duration-300">
                                    Let's Collaborate
                                </a>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Controls */}
            <div className="absolute z-30 bottom-10 left-0 w-full px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    <div className="flex space-x-2">
                        {heroSlides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`h-1 transition-all duration-300 ${current === idx ? 'w-12 bg-white' : 'w-4 bg-white/50 hover:bg-white/75'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <div className="flex space-x-4">
                        <button
                            onClick={prevSlide}
                            className="p-3 border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-colors"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-colors"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute z-30 bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce hidden md:flex">
                <span className="text-white text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
                <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[scrollDown_2s_infinite]" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
