import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import TitleHeader from '../components/TitleHeader';

/**
 * Contact Section
 * 
 * Simple centered contact form with EmailJS integration
 */
const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

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
        <section id="contact" className="contact-section relative min-h-screen flex items-center justify-center">
            <div className="w-full max-w-2xl mx-auto px-5 md:px-10 text-white">
                <TitleHeader
                    title="Get in Touch — Let's Connect"
                    sub="💬 Have questions or ideas? Let's talk! 🚀"
                />

                <div className="contact-form-card contact-form-dark mt-8">
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="w-full flex flex-col gap-7"
                    >
                        <div>
                            <label htmlFor="name" className="text-white">Your name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your good name?"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="text-white">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your email address?"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="text-white">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="How can I help you?"
                                rows="5"
                                required
                            />
                        </div>

                        <button type="submit" className="w-full">
                            <div className="cta-button cta-button-dark group">
                                <div className="bg-circle" />
                                <p className="text">
                                    {loading ? 'Sending...' : 'Send Message'}
                                </p>
                                <div className="arrow-wrapper">
                                    <img src="/images/arrow-down.svg" alt="arrow" />
                                </div>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;