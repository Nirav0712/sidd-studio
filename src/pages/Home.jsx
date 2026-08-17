import React from 'react';
import Hero from '../components/Hero';
import ClientLogoSlider from '../components/ClientLogoSlider';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import WhyChooseMe from '../components/WhyChooseMe';
import Testimonials from '../components/Testimonials';
import PortfolioCategories from '../components/PortfolioCategories';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <div className="bg-white">
            <Hero />
            <ClientLogoSlider />
            <About />
            <FeaturedProjects />
            <WhyChooseMe />
            <Testimonials />
            <PortfolioCategories />

            <section className="py-32 bg-black text-white text-center px-6">
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 max-w-5xl mx-auto leading-tight">Good Design Gets Attention.<br />Great Design Creates Connection.</h2>
                <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">This philosophy drives every project from initial strategy to final execution, ensuring visually compelling, meaningful brand experiences.</p>
            </section>

            <CTA />
        </div>
    );
};

export default Home;
