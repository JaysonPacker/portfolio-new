import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import TitleHeader from '../components/TitleHeader';
import ContactExperience from '../components/models/contact/ContactExperience';

/**
 * Contact Section
 * 
 * Features a Spline 3D scene that fades in as the user approaches
 * this section, creating the effect of "entering" the Spline environment.
 * The background has already transitioned to near-black at this point.
 * 
 * @param {MotionValue} splineOpacity - Framer Motion value controlling Spline fade-in
 */
const Contact = ({ splineOpacity }) => {
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
        <section id="contact" className="contact-section relative min-h-screen overflow-hidden">
            {/* Spline Background - Full screen, fades in as user scrolls */}
            <motion.div 
                className="spline-container"
                style={{ 
                    opacity: splineOpacity,
                    willChange: 'opacity'
                }}
            >
                <ContactExperience />
            </motion.div>

            {/* Gradient overlay to help blend Spline with background */}
            <motion.div 
                className="spline-blend-overlay"
                style={{ 
                    opacity: splineOpacity 
                }}
            />

            {/* Content on top */}
            <div className="relative z-10 min-h-screen flex items-center">
                <div className="w-full md:px-10 px-5">
                    {/* Title with scroll-aware text color */}
                    <div className="floating-element mb-12 mt-0" style={{ animationDelay: '0s' }}>
                        <TitleHeader
                            title="Get in Touch — Let's Connect"
                            sub="💬 Have questions or ideas? Let's talk! 🚀"
                            lightMode={true}
                        />
                    </div>

                    {/* Form positioned to the left */}
                    <div className="max-w-xl">
                        <div className="floating-element contact-form-card contact-form-dark" style={{ animationDelay: '0.2s' }}>
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col gap-7"
                            >
                                <div className="floating-element" style={{ animationDelay: '0.3s' }}>
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

                                <div className="floating-element" style={{ animationDelay: '0.4s' }}>
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

                                <div className="floating-element" style={{ animationDelay: '0.5s' }}>
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

                                <div className="floating-element" style={{ animationDelay: '0.6s' }}>
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
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* "Entering the space" transition text */}
            <motion.div 
                className="space-transition-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, margin: '-200px' }}
            >
                <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-2">
                    Contact Me
                </p>
            </motion.div>
        </section>
    );
};

export default Contact;
