import React from 'react';
import { motion } from 'framer-motion';
import CTA from '../components/CTA';

const AboutPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white min-h-screen"
        >

            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6 block">About The Designer</span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-black mb-8 leading-tight">
                            Turning Ideas Into Visual Experiences.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 font-light max-w-lg leading-relaxed">
                            I create thoughtful, strategic and visually engaging designs that help brands communicate clearly, connect with their audience and stand apart in a crowded market.
                        </p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="aspect-square rounded-[40px] overflow-hidden bg-gray-200"
                    >
                        <img src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1000&auto=format&fit=crop&grayscale=true" className="w-full h-full object-cover" alt="Designer Placeholder" />
                    </motion.div>
                </div>
            </section>

            <section className="py-24 md:py-32 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">Design Is More Than Making Things Look Good.</h2>
                    <div className="space-y-6 text-lg text-gray-500 font-light">
                        <p>Creative thinking and visual communication go hand in hand. Every design decision I make is rooted in brand consistency and audience-focused problem solving.</p>
                        <p>From the precise typography selections to complex grid systems, the attention to detail is paramount. Design is fundamentally about solving structural communication barriers with elegant aesthetics.</p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[{ val: '8+', lbl: 'Years Experience' }, { val: '250+', lbl: 'Projects Completed' }, { val: '80+', lbl: 'Brands Worked With' }, { val: '15+', lbl: 'Industries' }].map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <h3 className="text-5xl md:text-6xl font-display font-bold mb-2">{stat.val}</h3>
                            <p className="text-sm font-medium uppercase tracking-wider text-gray-500">{stat.lbl}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-32 bg-black text-white text-center px-6">
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 max-w-5xl mx-auto leading-tight">Good Design Gets Attention. Great Design Creates Connection.</h2>
                <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">This philosophy drives every project from initial strategy to final execution, ensuring visually compelling, meaningful brand experiences.</p>
            </section>

            <CTA />
        </motion.div>
    );
};
export default AboutPage;
