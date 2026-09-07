import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/logo.png";

const Footer = () => {
    return (
        <footer className="bg-gray-200 pt-20 md:pt-24 pb-8 md:pb-12 border-t border-gray-100">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 xl:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">

                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-16 w-auto"
                            />
                        </div>
                        <p className="text-gray-500 mb-8 font-light max-w-sm">
                            An independent creative studio specializing in visual identity, digital experiences, and branding.
                        </p>
                        <div className="flex border-b border-black pb-2">
                            <input
                                type="email"
                                placeholder="Subscribe to newsletter"
                                className="bg-transparent border-none outline-none w-full text-black placeholder-gray-400 font-light"
                            />
                            <button className="font-bold text-sm uppercase tracking-wider">Join</button>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-lg mb-6">About</h4>
                        <ul className="space-y-4 font-light text-gray-500">
                            <li><Link to="/" className="hover:text-black transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-black transition-colors">About</Link></li>
                            <li><Link to="/services" className="hover:text-black transition-colors">Services</Link></li>
                            <li><Link to="/projects" className="hover:text-black transition-colors">Projects</Link></li>
                            <li><Link to="/" className="hover:text-black transition-colors">More</Link></li>
                            <li><Link to="/client" className="hover:text-black transition-colors">Client</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-lg mb-6">Social Media</h4>
                        <ul className="space-y-4 font-light text-gray-500">
                            <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Facebook</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">YouTube</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Behance</a></li>
                            {/* <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li> */}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
                        <ul className="space-y-4 font-light text-gray-500">
                            <li>Ahmedabad, Gujarat</li>
                            <li><a href="tel:+919327160300" className="hover:text-black transition-colors">+91 9327160300</a></li>
                            <li><a href="mailto:hello@studio.com" className="hover:text-black transition-colors">hello@studio.com</a></li>
                            {/* <li><a href="#" className="hover:text-black transition-colors">WhatsApp</a></li> */}
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm font-light text-gray-400">
                    <p>© 2026 Sidd Studio. Where ideas become visual.</p>
                    <p className="font-display font-medium text-black tracking-widest uppercase mt-4 md:mt-0">Design Can Be Art.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
