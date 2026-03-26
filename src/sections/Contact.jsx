import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import TitleHeader from '../components/TitleHeader';
import '../contact.css';

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );
            setForm({ name: '', email: '', message: '' });
            alert('Message sent successfully!');
        } catch (error) {
            console.error('EmailJS Error:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="ct-section">
            <div className="ct-inner">
                <TitleHeader title="Get in Touch" sub="Open to opportunities, collabs, and conversations." />

                <div className="ct-card">
                    <form ref={formRef} onSubmit={handleSubmit} className="ct-form">

                        <div className="ct-row">
                            <div className="ct-field">
                                <label className="ct-label" htmlFor="name">Name</label>
                                <input
                                    className="ct-input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div className="ct-field">
                                <label className="ct-label" htmlFor="email">Email</label>
                                <input
                                    className="ct-input"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="ct-field">
                            <label className="ct-label" htmlFor="message">Message</label>
                            <textarea
                                className="ct-input ct-textarea"
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What's on your mind?"
                                rows="5"
                                required
                            />
                        </div>

                        <button type="submit" className="ct-btn" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;