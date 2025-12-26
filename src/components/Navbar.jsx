import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            padding: '1.5rem 0',
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'Outfit, sans-serif' }}>
                        LinkedIn <span className="gradient-text">Formatter</span>
                    </div>
                </Link>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <a href="/#features" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Features</a>
                    <a href="/#demo" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>How it works</a>
                    <a href="/#testimonials" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Reviews</a>
                    <a href="/#faq" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>FAQ</a>
                    <button className="btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>
                        Get Extension
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
