import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="app">
            <div className="background-glow"></div>
            <Navbar />
            <div className="container" style={{ padding: '120px 20px 60px' }}>
                <div className="glass-card" style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem' }}>Privacy Policy</h1>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Last updated: December 26, 2024</p>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary)' }}>1. Information We Collect</h2>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                            <strong>Usage Data:</strong> We do not collect any personal usage data. All formatting is done locally within your browser.
                            We may track anonymous usage statistics (e.g., number of active users) via the Chrome Web Store analytics.
                        </p>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                            <strong>Data We Do Not Collect:</strong><br />
                            - Personal Identification Information (PII)<br />
                            - LinkedIn account credentials<br />
                            - Post content or browsing history
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary)' }}>2. How We Use Your Data</h2>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                            Since we do not collect personal data, we do not use your data for any purpose other than the local functioning of the extension.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary)' }}>3. Contact Us</h2>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:kibruabebe14@gmail.com" style={{ color: 'var(--accent)' }}>kibruabebe14@gmail.com</a>
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Privacy;
