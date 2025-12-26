import React from 'react';
import { Lock } from 'lucide-react';

const TestimonialCard = ({ name, role, content }) => (
    <div className="glass-card" style={{ padding: '2rem', textAlign: 'left', filter: 'blur(5px)', opacity: 0.7, pointerEvents: 'none', userSelect: 'none' }}>
        <div style={{ marginBottom: '1.5rem', color: '#fbbf24' }}>★★★★★</div>
        <p style={{ color: '#e4e4e7', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
            "{content}"
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
                width: '48px',
                height: '48px',
                background: 'var(--gradient-main)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
            }}>
                {name[0]}
            </div>
            <div>
                <div style={{ fontWeight: '600' }}>{name}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{role}</div>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const reviews = [
        {
            name: "Alex Johnson",
            role: "Growth Marketer",
            content: "This tool saved me hours of formatting time. My engagement has increased by 40% since I started using proper line breaks and bold hooks."
        },
        {
            name: "Sarah Chen",
            role: "Content Creator",
            content: "The cleanest LinkedIn formatter I've used. No weird artifacts, just clean unicode styles that work everywhere."
        },
        {
            name: "Mike Ross",
            role: "Sales Director",
            content: "Essential for social selling. Making my posts readable has directly impacted my lead generation."
        }
    ];

    return (
        <section id="testimonials" style={{ padding: '100px 0', position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        marginBottom: '1rem'
                    }}>
                        What our users <span className="gradient-text">say</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        Join our happy users who have boosted their productivity.
                    </p>
                </div>

                <div style={{ position: 'relative' }}>
                    {/* Locked Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 10,
                        textAlign: 'center',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <div style={{
                            background: 'rgba(10, 10, 10, 0.8)',
                            backdropFilter: 'blur(10px)',
                            padding: '2rem 3rem',
                            borderRadius: '24px',
                            border: '1px solid var(--glass-border)',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                padding: '12px',
                                borderRadius: '50%',
                                color: 'var(--text-main)',
                                marginBottom: '0.5rem'
                            }}>
                                <Lock size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Reviews Locked</h3>
                            <p style={{ color: 'var(--text-muted)', maxWidth: '300px' }}>
                                We are currently gathering reviews from our first users.
                            </p>
                        </div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem',
                    }}>
                        {reviews.map((review, index) => (
                            <TestimonialCard key={index} {...review} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
