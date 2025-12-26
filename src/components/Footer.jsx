import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            borderTop: '1px solid var(--glass-border)',
            padding: '80px 0 40px',
            marginTop: '60px',
            background: 'rgba(0,0,0,0.2)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>
                            LinkedIn <span className="gradient-text">Formatter</span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            Making LinkedIn content creation effortless and beautiful.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>Product</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="/#features" style={{ color: 'var(--text-muted)' }}>Features</a></li>
                            <li><a href="/#features" style={{ color: 'var(--text-muted)' }}>Pricing</a></li>
                            <li><a href="/#features" style={{ color: 'var(--text-muted)' }}>Extension</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>Company</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="https://ethiopian-researchers.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>About</a></li>
                            <li><a href="https://ethiopian-researchers.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>Legal</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><Link to="/privacy" style={{ color: 'var(--text-muted)' }}>Privacy Policy</Link></li>
                            <li><Link to="/terms" style={{ color: 'var(--text-muted)' }}>Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--glass-border)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem'
                }}>
                    © 2025 LinkedIn Post Formatter. Built by <a href="https://ethiopian-researchers.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: '600' }}>Ethiopian Researchers</a>.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
