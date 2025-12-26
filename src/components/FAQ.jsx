import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="glass-card"
            style={{
                marginBottom: '1rem',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
            }}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div style={{
                padding: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontWeight: '600',
                fontSize: '1.1rem'
            }}>
                {question}
                {isOpen ? <ChevronUp size={20} color="var(--primary)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
            </div>
            <div style={{
                maxHeight: isOpen ? '200px' : '0',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                padding: isOpen ? '0 1.5rem 1.5rem' : '0 1.5rem',
                color: 'var(--text-muted)',
                lineHeight: '1.6'
            }}>
                {answer}
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Is this extension free to use?",
            answer: "Yes! The basic formatting features are completely free. We may introduce premium features in the future, but the core tools will always remain free."
        },
        {
            question: "Does it work on LinkedIn mobile app?",
            answer: "Currently, this is a Chrome extension for desktop browsers. However, the formatted text you generate will look perfect on both mobile and desktop apps."
        },
        {
            question: "Will my posts get more reach?",
            answer: "While we can't guarantee algorithm preference, formatted posts (bold hooks, clean lists) are proven to stop the scroll and increase reading time, which often leads to better engagement."
        },
        {
            question: "Is it safe to use?",
            answer: "Absolutely. We use standard Unicode characters for formatting. It doesn't violate LinkedIn's terms of service and doesn't require access to your personal data."
        }
    ];

    return (
        <section id="faq" style={{ padding: '100px 0' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    textAlign: 'center',
                    marginBottom: '3rem'
                }}>
                    Frequently Asked <span className="gradient-text">Questions</span>
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
