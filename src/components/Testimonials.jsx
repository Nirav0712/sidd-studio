import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonialsData } from '../data/data';
import { Star } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="text-center mb-20">
                    <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4 block">Reviews</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black">
                        What Clients Say
                    </h2>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={32}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 6000 }}
                    className="pb-16 px-4"
                >
                    {testimonialsData.map((testimonial, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="bg-gray-50 border border-gray-100 p-8 md:p-10 rounded-3xl h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex space-x-1 mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={18} className="fill-black text-black" />
                                        ))}
                                    </div>
                                    <p className="text-xl text-black font-medium leading-relaxed mb-10">"{testimonial.text}"</p>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                                    <div>
                                        <h4 className="font-display font-bold text-black">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
export default Testimonials;
