import React, { useEffect, useState, useRef } from 'react';
import { statistics } from '../../data/portfolioData';
import { motion, useInView } from 'framer-motion';

const Counter = ({ value, label, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const increment = value / (duration / 16); // 60fps

            const timer = setInterval(() => {
                start += increment;
                if (start >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [value, isInView]);

    return (
        <div ref={ref} className="flex flex-col">
            <h4 className="text-5xl md:text-6xl font-display font-bold text-accent mb-2">
                {count}{suffix}
            </h4>
            <p className="text-gray-500 uppercase tracking-widest text-xs md:text-sm font-semibold">{label}</p>
        </div>
    );
};

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] overflow-hidden -rotate-2 relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1000&auto=format&fit=crop"
                                alt="Creative Workspace"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Abstract elements */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gray-200 z-0 rotate-12" />
                        <div className="absolute -top-10 -left-10 w-32 h-32 border-4 border-accent z-20 -rotate-12" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">
                            About The Designer
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-8 leading-tight">
                            Designing Ideas Into <br className="hidden md:block" /> Visual Experiences
                        </h2>

                        <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed">
                            I am a multidisciplinary visual designer creating bold, strategic, and visually powerful designs that help brands stand out in today's crowded market.
                        </p>
                        <p className="text-lg text-gray-600 mb-12 font-light leading-relaxed">
                            With a focus on modern aesthetic principles and functional design, I partner with ambitious companies to build identities and digital experiences that connect. Every project is an opportunity to communicate clearly and connect emotionally.
                        </p>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                            {statistics.map((stat, idx) => (
                                <Counter key={idx} value={stat.value} label={stat.label} suffix={stat.suffix} />
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
