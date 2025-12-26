import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Demo from '../components/Demo';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import BottomCTA from '../components/BottomCTA';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="app">
            <div className="background-glow"></div>
            <Navbar />
            <Hero />
            <Features />
            <Demo />
            <Testimonials />
            <FAQ />
            <BottomCTA />
            <Footer />
        </div>
    );
}

export default Home;
