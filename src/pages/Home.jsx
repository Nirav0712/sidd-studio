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

            <CTA />
        </div>
    );
};

export default Home;
