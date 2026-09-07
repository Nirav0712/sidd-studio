import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="font-display font-bold text-3xl mb-6">CREATIVE<span className="text-accent">.</span></h2>
                    <p className="text-gray-400 max-w-sm">
                        A premium graphic design and web development agency crafting visual experiences that elevate brands and engage audiences across all platforms.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-6">Navigation</h3>
                    <ul className="space-y-4">
                        <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                        <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
                        <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-6">Socials</h3>
                    <ul className="space-y-4">
                        <li><a href="https://www.instagram.com/mr_.sidd._/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
                        <li><a href="https://www.behance.net/siddhant200a4d" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Behance</a></li>
                        <li><a href="https://www.facebook.com/siddhant.patel.94617999" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
                        <li><a href="https://www.youtube.com/@siddhantpatel9781" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">YouTube</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <p>© 2026 Creative Agency. All Rights Reserved.</p>
                <p className="mt-4 md:mt-0">Designed & Built with React & Tailwind</p>
            </div>
        </footer>
    );
};

export default Footer;
