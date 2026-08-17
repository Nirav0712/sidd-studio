import React from 'react';
import { categoryLinks, brandingData } from '../data/data';
import SliderSection from '../components/SliderSection';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';

const ServicesPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white min-h-screen"
        >
            {/* Intro Hero */}
            <section className="py-24 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6 block">Services</span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-black mb-8 max-w-4xl mx-auto leading-tight">
                        Creative Design Solutions Built Around Your Brand.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light mb-12">
                        From brand identity to digital campaigns and large-format marketing, I create visual solutions designed to communicate clearly and make an impact.
                    </p>
                    <div className="flex justify-center items-center space-x-4">
                        <a href="/contact" className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                            Start a Project
                        </a>
                        <a href="/projects" className="px-8 py-4 border border-gray-300 text-black rounded-full font-medium hover:bg-gray-50 transition-colors">
                            View Projects
                        </a>
                    </div>
                </div>
            </section>

            {/* Sticky Service Nav */}
            <div className="sticky top-[96px] bg-white/90 backdrop-blur-md z-40 border-b border-gray-100 overflow-x-auto hide-scrollbar">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex space-x-8 py-4">
                    {categoryLinks.map(cat => (
                        <a key={cat.id} href={`#${cat.id}`} className="text-sm font-semibold uppercase tracking-wider text-gray-500 hover:text-black whitespace-nowrap transition-colors">
                            {cat.name}
                        </a>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 text-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Everything Your Brand Needs To Look Its Best.</h2>
                <p className="text-lg text-gray-500 max-w-3xl mx-auto font-light">
                    Providing end-to-end creative design services across branding, digital, social media, print and outdoor marketing for consistency and powerful visual storytelling.
                </p>
            </div>

            <div id="branding" className="pt-24 -mt-24"><SliderSection title="Branding & Visual Identity" data={brandingData} uniqueId="branding" /></div>
            <div id="packaging" className="pt-16 -mt-16"><SliderSection title="Packaging Design" data={brandingData} uniqueId="packaging" /></div>
            <div id="social-media" className="pt-16 -mt-16"><SliderSection title="Social Media Design" data={brandingData.slice().reverse()} uniqueId="social" /></div>
            <div id="web-design" className="pt-16 -mt-16"><SliderSection title="Web Design & UI" data={brandingData} uniqueId="web" /></div>
            <div id="outdoor-marketing" className="pt-16 -mt-16"><SliderSection title="Outdoor Marketing" data={brandingData.slice().reverse()} uniqueId="outdoor" /></div>
            <div id="publication" className="pt-16 -mt-16 pb-24"><SliderSection title="Publication & Print Design" data={brandingData} uniqueId="publication" /></div>

            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">How I Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[{ num: "01", title: "Discover" }, { num: "02", title: "Concept" }, { num: "03", title: "Design" }, { num: "04", title: "Deliver" }].map((step, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col justify-center">
                                <span className="text-3xl font-display font-bold text-gray-300 mb-4">{step.num}</span>
                                <h3 className="text-xl font-display font-bold">{step.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </motion.div>
    );
};
export default ServicesPage;
