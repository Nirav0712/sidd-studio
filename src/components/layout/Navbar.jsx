import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Our Work', href: '#work' },
        { name: 'Services', href: '#services' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="#" className={`font-display font-bold text-2xl tracking-tighter ${scrolled ? 'text-black' : 'text-white mix-blend-difference'}`}>
                    CREATIVE<span className="text-accent">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className={`text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-gray-800' : 'text-gray-200 hover:text-white'}`}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="#contact" className="px-6 py-2.5 bg-black text-white hover:bg-accent text-sm font-medium transition-colors">
                        Let's Work Together
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 relative"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ?
                        <X className={scrolled || mobileMenuOpen ? 'text-black' : 'text-white'} size={28} /> :
                        <Menu className={scrolled ? 'text-black' : 'text-white mix-blend-difference'} size={28} />
                    }
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center -z-10"
                    >
                        <ul className="flex flex-col space-y-8 text-center">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-3xl font-display font-medium text-black hover:text-accent transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="#contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="inline-block mt-4 px-8 py-3 bg-black text-white text-lg font-medium"
                                >
                                    Let's Work Together
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
