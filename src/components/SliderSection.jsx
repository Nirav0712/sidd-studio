import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SliderSection = ({ title, data, uniqueId }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedItem(null);
        };

        if (selectedItem) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedItem]);

    return (
        <section className="py-12 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 xl:px-24">

                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-5xl lg:text-5xl font-display font-bold text-black px-4 md:px-0 whitespace-normal">{title}</h2>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-8 w-full relative">

                    {/* Left Button */}
                    <button className={`prev-${uniqueId} hidden md:flex flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 justify-center items-center rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all bg-white text-black shadow-sm z-10 relative`}>
                        <ChevronLeft size={24} />
                    </button>

                    {/* Swiper track */}
                    <div className="w-full flex-grow overflow-hidden px-2">
                        <Swiper
                            modules={[Navigation, FreeMode]}
                            spaceBetween={24}
                            slidesPerView={1.2}
                            breakpoints={{
                                540: { slidesPerView: 2 },
                                768: { slidesPerView: 2.2 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 },
                            }}
                            navigation={{ nextEl: `.next-${uniqueId}`, prevEl: `.prev-${uniqueId}` }}
                            freeMode={true}
                            className="w-full pb-8 pt-4"
                        >
                            {data.map((item, idx) => (
                                <SwiperSlide key={idx} className="group cursor-pointer max-w-full">
                                    <div className="bg-gray-100 rounded-[32px] overflow-hidden flex flex-col justify-end aspect-[4/5] relative mb-4 md:mb-6 border border-gray-100 shadow-sm w-full max-w-full">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <button
                                                onClick={() => setSelectedItem(item)}
                                                aria-label="Open image preview"
                                                className="w-16 h-16 bg-white rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                                            >
                                                <ArrowRight size={24} className="text-black transform group-hover:-rotate-45 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-display font-bold text-black mb-1">{item.title}</h3>
                                        <p className="text-gray-500 font-light">View Project</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Right Button */}
                    <button className={`next-${uniqueId} hidden md:flex flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 justify-center items-center rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all bg-white text-black shadow-sm z-10 relative`}>
                        <ChevronRight size={24} />
                    </button>

                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); setSelectedItem(null); }}
                            aria-label="Close image preview"
                            className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[110]"
                        >
                            <X size={24} />
                        </button>

                        <div
                            className="relative max-w-full max-h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-lg"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
export default SliderSection;
