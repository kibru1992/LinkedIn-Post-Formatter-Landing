import React from 'react';

const Hero = () => {
    return (
        <section style={{
            padding: '160px 0 100px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center'
        }}>
            {/* Background blobs */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                left: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0) 70%)',
                borderRadius: '50%',
                zIndex: -1,
                filter: 'blur(80px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0) 70%)',
                borderRadius: '50%',
                zIndex: -1,
                filter: 'blur(80px)'
            }}></div>

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <h1 style={{
                    fontSize: '4.5rem',
                    fontWeight: '700',
                    lineHeight: '1.1',
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.02em'
                }}>
                    Format LinkedIn Posts <br />
                    <span className="gradient-text">Like a Pro</span>
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-muted)',
                    maxWidth: '600px',
                    margin: '0 auto 2.5rem',
                    lineHeight: '1.7'
                }}>
                    Stop wrestling with LinkedIn's editor. Create beautiful, engaging posts with bold text, proper line breaks, and emojis in seconds.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
                    <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '15px 40px' }}>
                        Add to Chrome - It's Free
                    </button>
                    <button style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'white',
                        padding: '15px 30px',
                        borderRadius: '50px',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        transition: 'all 0.2s'
                    }}>
                        View Demo
                    </button>
                </div>

                {/* Hero Visual */}
                <div className="glass-card" style={{
                    padding: '20px',
                    maxWidth: '900px',
                    margin: '0 auto',
                    transform: 'perspective(1000px) rotateX(2deg)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}>
                    <div style={{
                        background: '#1e1e24',
                        borderRadius: '12px',
                        padding: '40px',
                        textAlign: 'left',
                        fontFamily: 'monospace',
                        color: '#e4e4e7',
                        minHeight: '300px'
                    }}>
                        <p style={{ color: '#a1a1aa' }}>// Create engaging content instantly</p>
                        <p><span style={{ color: '#c084fc' }}>const</span> <span style={{ color: '#60a5fa' }}>post</span> = <span style={{ color: '#4ade80' }}>"🚀 boosting my engagement!"</span>;</p>
                        <br />
                        <p>Here is my new post with <b>bold text</b> and <i>italics</i>.</p>
                        <p>Look at these perfect line breaks!</p>
                        <br />
                        <p>👇 Link below</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
