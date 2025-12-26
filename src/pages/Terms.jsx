import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="app">
            <div className="background-glow"></div>
            <Navbar />
            <div className="container" style={{ padding: '120px 20px 60px' }}>
                <div className="glass-card" style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem' }}>Terms of Service</h1>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Last updated: December 26, 2024</p>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary)' }}>1. Acceptance of Terms</h2>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                            By accessing or using the LinkedIn Post Formatter browser extension, you agree to be bound by these Terms of Service.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary)' }}>2. Use License</h2>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                            Permission is granted to download one copy of the extension for personal, non-commercial transitory viewing only.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary)' }}>3. Disclaimer</h2>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                            The materials on LinkedIn Post Formatter are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary)' }}>4. Limitations</h2>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                            In no event shall LinkedIn Post Formatter or its suppliers be liable for any damages arising out of the use or inability to use the extension.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Terms;
