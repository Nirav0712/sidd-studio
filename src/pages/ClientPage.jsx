import React from 'react';
import { motion } from 'framer-motion';

const ClientPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="bg-white min-h-screen"
        >
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50 text-center border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6">
                    <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4 md:mb-6 block">Clients</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-black mb-6 md:mb-8 leading-[1.1]">
                        Brands, businesses and creative partners we've worked with.
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-full mx-auto px-6 md:px-12 flex justify-center">
                    <div className="w-full relative overflow-hidden rounded-[32px] bg-gray-100 group">
                        <img
                            src="/assets/client/client.jpg"
                            alt="Our Clients"
                            className="w-full h-auto select-none"
                        />
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default ClientPage;
