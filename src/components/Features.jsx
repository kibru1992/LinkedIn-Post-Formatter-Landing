import React from 'react';
import { Type, AlignLeft, Smile, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="glass-card" style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1rem',
        transition: 'transform 0.3s ease',
        cursor: 'default'
    }}>
        <div style={{
            background: 'rgba(139, 92, 246, 0.1)',
            padding: '12px',
            borderRadius: '12px',
            color: '#c084fc'
        }}>
            <Icon size={28} />
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{title}</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{description}</p>
    </div>
);

const Features = () => {
    const features = [
        {
            icon: Type,
            title: "Rich Text Styling",
            description: "Use bold, italics, and other styles to make key points stand out in your LinkedIn feed."
        },
        {
            icon: AlignLeft,
            title: "Perfect Formatting",
            description: "Say goodbye to messy walls of text. Keep your line breaks exactly where you want them."
        },
        {
            icon: Zap,
            title: "Instant Preview",
            description: "See exactly how your post will look on mobile and desktop before you hit publish."
        }
    ];

    return (
        <section id="features" style={{ padding: '100px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                        Everything you need to <span className="gradient-text">go viral</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        Powerful tools designed specifically for LinkedIn creators.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
