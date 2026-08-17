import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ end, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            let current = 0;
            const duration = 2000;
            const stepTime = Math.abs(Math.floor(duration / end));
            const timer = setInterval(() => {
                current += 1;
                setCount(current);
                if (current === end) clearInterval(timer);
            }, stepTime > 0 ? stepTime : 10);
            return () => clearInterval(timer);
        }
    }, [inView, end]);

    return <span ref={ref}>{count}{suffix}</span>;
}

const About = () => {
    return (
        <section className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left: Image */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="aspect-[4/5] rounded-3xl overflow-hidden"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1000&auto=format&fit=crop&grayscale=true"
                            alt="Designer workspace"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    {/* Floating Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="absolute -bottom-8 -right-8 md:-right-12 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 max-w-[250px]"
                    >
                        <div className="text-4xl font-display font-bold text-black mb-1">
                            <Counter end={8} suffix="+" />
                        </div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest leading-snug">Years of Creative Experience</p>
                    </motion.div>
                </div>

                {/* Right: Content */}
                <div className="pt-8">
                    <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6 block">Who I Am</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black mb-10 leading-tight">
                        I Turn Ideas Into Visual Experiences.
                    </h2>

                    <div className="space-y-6 text-lg text-gray-600 font-light mb-12">
                        <p>
                            I am a multidisciplinary visual designer creating bold, strategic, and visually powerful designs that help brands stand out in today's crowded market.
                        </p>
                        <p>
                            With a focus on modern aesthetic principles and functional design, I partner with ambitious companies to build identities and digital experiences that connect. Every project is an opportunity to communicate clearly and connect emotionally.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                        <div>
                            <div className="text-4xl font-display font-bold text-black mb-2"><Counter end={250} suffix="+" /></div>
                            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Projects</p>
                        </div>
                        <div>
                            <div className="text-4xl font-display font-bold text-black mb-2"><Counter end={80} suffix="+" /></div>
                            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Brands</p>
                        </div>
                        <div>
                            <div className="text-4xl font-display font-bold text-black mb-2"><Counter end={15} suffix="+" /></div>
                            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Industries</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
export default About;
