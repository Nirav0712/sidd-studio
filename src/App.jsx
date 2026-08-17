import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ScrollToAnchor from './components/ScrollToAnchor';
import { AnimatePresence } from 'framer-motion';

function App() {
    return (
        <Router>
            <ScrollToAnchor />
            <div className="min-h-screen bg-white text-black font-sans flex flex-col">
                <Navbar />
                <main className="flex-grow pt-[104px]">
                    <AnimatePresence mode="wait">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/projects" element={<ProjectsPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                        </Routes>
                    </AnimatePresence>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
