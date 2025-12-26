import React from 'react';

const Demo = () => {
    return (
        <section id="demo" style={{ padding: '100px 0', background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4rem'
                }}>
                    <div style={{ textAlign: 'center', maxWidth: '700px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                            How it works
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                            Install the extension, open LinkedIn, and start typing. Our smart formatter kicks in automatically.
                        </p>
                    </div>

                    <div className="glass-card" style={{
                        width: '100%',
                        maxWidth: '1000px',
                        aspectRatio: '16/9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0,0,0,0.3)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Visual placeholder for demo video/gif */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <div style={{
                                padding: '40px',
                                border: '2px dashed var(--glass-border)',
                                borderRadius: '20px',
                                textAlign: 'center'
                            }}>
                                <h3 style={{ marginBottom: '1rem' }}>Product Demo GIF</h3>
                                <p style={{ color: 'var(--text-muted)' }}>[Animation of typing and formatting]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demo;
