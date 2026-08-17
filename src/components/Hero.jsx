import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { heroData } from '../data/data';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    return (
        <section className="relative w-full h-[85vh] md:h-screen min-h-[600px] bg-white pt-24 md:pt-0">
            <div className="absolute inset-0 z-0 w-full h-full flex flex-col md:flex-row">

                {/* Left Side: Content */}
                <div className="w-full md:w-5/12 lg:w-1/2 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-white relative z-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="max-w-xl"
                        >
                            <div className="inline-block px-3 py-1 mb-6 border border-gray-300 rounded-full text-xs font-semibold uppercase tracking-wider text-black">
                                {heroData[activeIndex].badge}
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-black mb-6 leading-tight tracking-tight">
                                {heroData[activeIndex].title}
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 sm:mb-10 leading-relaxed max-w-md">
                                {heroData[activeIndex].description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#projects" className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center">
                                    <span>View My Work</span>
                                </a>
                                <a href="/contact" className="px-8 py-4 bg-white text-black border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center justify-center text-center">
                                    Let's Collaborate
                                </a>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Custom Navigation */}
                    <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 hidden md:flex space-x-4">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Right Side: Image Slider */}
                <div className="w-full md:w-7/12 lg:w-1/2 h-[50vh] md:h-full relative overflow-hidden">
                    <Swiper
                        modules={[Autoplay, EffectFade, Navigation, Pagination]}
                        effect="fade"
                        speed={800}
                        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        allowTouchMove={true}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="w-full h-full"
                        loop={true}
                    >
                        {heroData.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full h-full relative">
                                    <div className="absolute inset-0 bg-black/5 z-10" />
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover grayscale"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Pagination dots (right side bottom) */}
                    <div className="absolute bottom-12 right-12 z-20 flex space-x-2">
                        {heroData.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => swiperRef.current?.slideTo(idx)}
                                className={`transition-all duration-300 h-2 rounded-full ${activeIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
