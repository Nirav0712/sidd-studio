import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'More', path: '#' }
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/95 backdrop-blur-sm border-b border-gray-200' : 'py-4 bg-transparent'}`}>
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex items-center justify-between relative z-[60]">

                {/* LOGO */}
                <NavLink
                    to="/"
                    className="flex items-center shrink-0"
                >
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                </NavLink>

                {/* DESKTOP NAV */}
                <div className="hidden lg:flex items-center space-x-10">
                    {links.map(link => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => `text-lg font-medium transition-colors ${isActive && link.path !== '#' ? 'text-black font-semibold' : 'text-gray-500 hover:text-black'}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden lg:block">
                    <NavLink to="/contact" className="px-6 py-3 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors">
                        Contact Us
                    </NavLink>
                </div>

                {/* MOBILE TOGGLE */}
                <button className="lg:hidden text-black z-[60] relative" onClick={() => setMobileMenu(!mobileMenu)}>
                    {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {mobileMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center h-screen w-full"
                    >
                        <ul className="space-y-8 text-center px-4 w-full">
                            {links.map(link => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setMobileMenu(false)}
                                        className="text-3xl font-display font-medium text-black hover:text-gray-500 transition-colors block w-full py-2"
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                            <li>
                                <NavLink
                                    to="/contact"
                                    onClick={() => setMobileMenu(false)}
                                    className="inline-block mt-8 px-8 py-4 bg-black text-white rounded-full text-lg font-medium"
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
export default Navbar;
