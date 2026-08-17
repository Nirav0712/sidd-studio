import React from 'react';

const CTA = () => {
    return (
        <>
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="bg-gray-200 rounded-[40px] relative overflow-hidden flex flex-col lg:flex-row min-h-[500px]">

                        {/* Left Side: Content */}
                        <div className="w-full lg:w-1/2 p-12 md:p-20 lg:p-24 flex flex-col justify-center relative z-20">
                            <h2 className="text-5xl md:text-6xl font-display font-bold text-black mb-6 leading-tight">
                                Let's Create<br />Something.
                            </h2>
                            <p className="text-lg md:text-xl text-gray-500 font-light max-w-md mb-10 leading-relaxed">
                                Have an idea, campaign or brand that needs a stronger visual identity? Let's turn it into something people remember.
                            </p>

                            <div>
                                <a href="/contact" className="inline-flex items-center px-10 py-4 bg-[#1a1a1a] text-white rounded-full font-medium text-lg hover:bg-black transition-colors shadow-lg">
                                    Get Started
                                </a>
                            </div>
                        </div>

                        {/* Right Side: Images / Abstract Elements */}
                        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto z-10 hidden md:block">

                            {/* Bottom-anchored Image (Middle) */}
                            <div className="absolute bottom-0 left-[10%] w-[35%] h-[80%] rounded-t-[32px] overflow-hidden shadow-2xl bg-white border border-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=800&auto=format&fit=crop&grayscale=true"
                                    alt="Creative portfolio detail"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Top-anchored Image (Far Right) */}
                            <div className="absolute top-0 right-[8%] w-[35%] h-[75%] rounded-b-[32px] overflow-hidden shadow-2xl bg-white border border-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1626785724573-4b799315345d?q=80&w=800&auto=format&fit=crop&grayscale=true"
                                    alt="Brand identity detail"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Mobile representation (Stacked normally) */}
                        <div className="w-full md:hidden flex justify-between gap-4 px-8 pb-12 h-[250px]">
                            <div className="w-1/2 h-full rounded-t-[24px] overflow-hidden self-end">
                                <img
                                    src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=800&auto=format&fit=crop&grayscale=true"
                                    className="w-full h-full object-cover" alt=""
                                />
                            </div>
                            <div className="w-1/2 h-[80%] rounded-b-[24px] overflow-hidden self-start">
                                <img
                                    src="https://images.unsplash.com/photo-1626785724573-4b799315345d?q=80&w=800&auto=format&fit=crop&grayscale=true"
                                    className="w-full h-full object-cover" alt=""
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
export default CTA;
