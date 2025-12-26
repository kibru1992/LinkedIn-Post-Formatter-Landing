import React from 'react';

const BottomCTA = () => {
    return (
        <section style={{ padding: '80px 0', textAlign: 'center' }}>
            <div className="container">
                <div className="glass-card" style={{
                    padding: '4rem 2rem',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(139, 92, 246, 0.3)'
                }}>
                    {/* Background glow */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(0,0,0,0) 70%)',
                        zIndex: -1,
                        pointerEvents: 'none'
                    }}></div>

                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: '700',
                        marginBottom: '1.5rem'
                    }}>
                        Create a LinkedIn Post with out any <span className="gradient-text">barrier.</span>
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-muted)',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem'
                    }}>
                        Making LinkedIn content creation effortless and beautiful.
                    </p>

                    <button className="btn-primary" style={{
                        fontSize: '1.1rem',
                        padding: '16px 48px',
                        boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)'
                    }}>
                        Get Extension Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BottomCTA;
