import React from 'react';
import Hero from '../components/home/Hero';
import LogoMarquee from '../components/home/LogoMarquee';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProductsGrid from '../components/home/ProductsGrid';
import Benefits from '../components/home/Benefits';
import FAQ from '../components/home/FAQ';
import CTABanner from '../components/home/CTABanner';

const Home = () => {
    return (
        <React.Fragment>
            <Hero />
            <LogoMarquee />
            <WhyChooseUs />
            <ProductsGrid />
            <Benefits />
            <FAQ />
            <CTABanner />
        </React.Fragment>
    );
};

export default Home;
