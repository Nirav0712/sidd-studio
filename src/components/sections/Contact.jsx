import React from 'react';

const Contact = () => {
    return (
        <section className="relative py-32 bg-primary overflow-hidden">
            {/* Background element */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent opacity-20 blur-3xl rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-8">
                        Have an Idea? <br />
                        <span className="text-accent">Let's Make It Visual.</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 font-light max-w-lg leading-relaxed">
                        Let's create something meaningful, memorable and visually powerful for your brand. Get in touch to discuss your project requirements.
                    </p>

                    <div className="space-y-6 text-white text-lg">
                        <p className="flex items-center space-x-4">
                            <span className="font-semibold w-24">Email</span>
                            <a href="mailto:hello@creative.com" className="hover:text-accent transition-colors">hello@creative.com</a>
                        </p>
                        <p className="flex items-center space-x-4">
                            <span className="font-semibold w-24">Phone</span>
                            <a href="tel:+1234567890" className="hover:text-accent transition-colors">+1 (234) 567-890</a>
                        </p>
                        <p className="flex items-center space-x-4">
                            <span className="font-semibold w-24">WhatsApp</span>
                            <a href="#" className="hover:text-accent transition-colors">Chat on WhatsApp</a>
                        </p>
                    </div>
                </div>

                <div className="bg-white p-10 lg:p-12 shadow-2xl">
                    <h3 className="text-3xl font-display font-bold text-gray-900 mb-8">Start a Project</h3>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-black outline-none transition-colors bg-gray-50 focus:bg-white"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-black outline-none transition-colors bg-gray-50 focus:bg-white"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                            <select className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-black outline-none transition-colors bg-gray-50 focus:bg-white cursor-pointer">
                                <option>Brand Identity</option>
                                <option>Web Design</option>
                                <option>Social Media Designs</option>
                                <option>Outdoor Marketing</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                            <textarea
                                rows="4"
                                className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-black outline-none transition-colors bg-gray-50 focus:bg-white resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 mt-6 bg-black text-white font-bold tracking-wider hover:bg-accent transition-colors duration-300"
                        >
                            SEND INQUIRY
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
