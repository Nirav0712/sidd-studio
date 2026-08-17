import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, FreeMode } from 'swiper/modules';
import { reasonsData } from '../data/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WhyChooseMe = () => {
    return (
        <section className="py-24 bg-gray-200">
            <div className="max-w-[1920px] mx-auto">

                {/* Heading */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 px-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black mb-6">
                        Why Work With Me?
                    </h2>

                    <p className="text-lg text-gray-500 font-light leading-relaxed max-w-xl mx-auto">
                        More than design — I focus on creating visuals that solve real
                        communication and branding problems.
                    </p>
                </div>

                {/* Slider Area */}
                <div className="relative w-full">

                    {/* Left Arrow */}
                    <button
                        className="
                why-prev
                absolute
                left-2 md:left-4 lg:left-6
                top-1/2
                -translate-y-1/2
                z-20
                hidden md:flex
                w-11 h-11 md:w-12 md:h-12
                items-center justify-center
                rounded-full
                border border-gray-300
                bg-white
                text-black
                shadow-sm
                hover:bg-black
                hover:text-white
                hover:border-black
                transition-all duration-300
            "
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {/* Slider with space for arrows */}
                    <div className="px-6 md:px-20 lg:px-24">
                        <Swiper
                            modules={[Navigation, Autoplay, FreeMode]}
                            spaceBetween={24}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.5,
                                },
                                768: {
                                    slidesPerView: 2.2,
                                },
                                1024: {
                                    slidesPerView: 3.2,
                                },
                            }}
                            navigation={{
                                nextEl: ".why-next",
                                prevEl: ".why-prev",
                            }}
                            freeMode={true}
                            className="w-full"
                        >
                            {reasonsData.map((reason, idx) => (
                                <SwiperSlide key={idx} className="h-auto">
                                    <div
                                        className="
                                bg-white
                                p-8 md:p-10
                                rounded-3xl
                                h-full
                                border border-gray-100
                                hover:shadow-lg
                                transition-shadow duration-300
                                flex flex-col
                                justify-center
                                min-h-[250px]
                            "
                                    >
                                        <h3 className="text-xl font-display font-bold text-black mb-4">
                                            {reason.title}
                                        </h3>

                                        <p className="text-gray-500 font-light leading-relaxed">
                                            {reason.description}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Right Arrow */}
                    <button
                        className="
                why-next
                absolute
                right-2 md:right-4 lg:right-6
                top-1/2
                -translate-y-1/2
                z-20
                hidden md:flex
                w-11 h-11 md:w-12 md:h-12
                items-center justify-center
                rounded-full
                border border-gray-300
                bg-white
                text-black
                shadow-sm
                hover:bg-black
                hover:text-white
                hover:border-black
                transition-all duration-300
            "
                    >
                        <ChevronRight size={20} />
                    </button>

                </div>
            </div>
        </section>
    );
};
export default WhyChooseMe;
