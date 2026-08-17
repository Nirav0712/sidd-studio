import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const ContactPage = () => {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock Form Submission
        console.log('Form Submitted', formState);
        alert('Thank you for reaching out! We will get back to you shortly.');
        setFormState({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white min-h-screen"
        >
            <section className="py-24 md:py-32 bg-gray-50 overflow-hidden relative">
                <div className="max-w-[1920px] mx-auto px-6 md:px-12 xl:px-24">
                    <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6 block">Let's Connect</span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-black mb-8 leading-tight max-w-4xl">
                        Let's build<br />something great.
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-500 font-light max-w-2xl leading-relaxed">
                        Whether you need a complete brand identity or a high-end digital experience, I'm ready to bring your vision to life.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white relative">
                <div className="max-w-[1920px] mx-auto px-6 md:px-12 xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Left: Contact Info */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Contact Details</h2>

                            <div className="space-y-10 mb-16">
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-black" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-black mb-1">Email</h3>
                                        <a href="mailto:hello@studio.world" className="text-xl text-gray-500 hover:text-black transition-colors font-light">hello@studio.world</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-black" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-black mb-1">Location</h3>
                                        <p className="text-xl text-gray-500 font-light">
                                            Los Angeles, CA<br />Available for global projects.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-6">Social</h3>
                            <div className="flex gap-4">
                                <a href="#" className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300">
                                    <Instagram size={22} />
                                </a>
                                <a href="#" className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300">
                                    <Twitter size={22} />
                                </a>
                                <a href="#" className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300">
                                    <Linkedin size={22} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:col-span-7 bg-gray-50 rounded-[40px] p-8 md:p-12 lg:p-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Send a Message</h2>
                        <p className="text-gray-500 font-light mb-12">I typically reply within 24-48 hours.</p>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-semibold text-black mb-3">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-white px-6 py-5 rounded-2xl border border-gray-200 focus:outline-none focus:border-black transition-colors text-black placeholder-gray-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-black mb-3">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-white px-6 py-5 rounded-2xl border border-gray-200 focus:outline-none focus:border-black transition-colors text-black placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-black mb-3">Subject / Service</label>
                                <select
                                    value={formState.subject}
                                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                    className="w-full bg-white px-6 py-5 rounded-2xl border border-gray-200 focus:outline-none focus:border-black transition-colors text-black appearance-none"
                                >
                                    <option value="">Select a service category...</option>
                                    <option value="branding">Brand Identity & Strategy</option>
                                    <option value="web">Web Design & UI/UX</option>
                                    <option value="social">Social Media Design</option>
                                    <option value="packaging">Packaging Design</option>
                                    <option value="other">Other Inquiry</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-black mb-3">Project Details</label>
                                <textarea
                                    rows="5"
                                    placeholder="Tell me a bit about your brand, timeline, and goals..."
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-white px-6 py-5 rounded-2xl border border-gray-200 focus:outline-none focus:border-black transition-colors text-black placeholder-gray-400 resize-none"
                                />
                            </div>

                            <button type="submit" className="group inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full font-bold hover:bg-gray-800 transition-colors">
                                <span>Submit Request</span>
                                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </motion.div>
    );
};

export default ContactPage;
