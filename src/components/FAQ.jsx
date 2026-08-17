import React, { useState } from 'react';
import { faqData } from '../data/data';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 md:py-32 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="border-t border-black">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="border-b border-gray-300 py-6 md:py-8">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="w-full flex justify-between items-center text-left focus:outline-none group"
                                >
                                    <div className="flex items-start space-x-6">
                                        <span className="text-gray-400 font-display font-medium text-lg mt-1">
                                            {index < 9 ? `0${index + 1}` : index + 1}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-display font-bold text-black transition-colors group-hover:text-gray-600">
                                            {item.question}
                                        </h3>
                                    </div>
                                    <div className="p-2 border border-gray-300 rounded-full text-black group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors flex-shrink-0 ml-4">
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pt-6 pb-2 pl-12 text-gray-500 text-lg font-light leading-relaxed max-w-2xl">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default FAQ;
