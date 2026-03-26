import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Button from '../components/Button.jsx';
import HeroExperience from '../components/HeroModels/HeroExperience.jsx';
import HeroTitle from '../components/HeroTitle.jsx';
import AnimatedSection from '../components/AnimatedSection.jsx';
import '../hero.css';

const Hero = ({ canvasOpacity }) => {
    const paragraphRef = useRef(null);

    const handleTitleComplete = () => {
        gsap.fromTo(
            paragraphRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'bounce.out' }
        );
    };

    return (
        <section id="hero">

            {/* 1 — Background gradient: white left → black center */}
            <div className="hero-bg-gradient" />

            {/* 2 — Three.js canvas, fades out on scroll */}
            <motion.div
                className="hero-canvas-layer"
                style={{ opacity: canvasOpacity, willChange: 'opacity' }}
            >
                <HeroExperience />
            </motion.div>

            {/* 3 — Centered hero content */}
            <div className="hero-layout">
                <div className="hero-content">
                    <div className="hero-text">
                        <HeroTitle onComplete={handleTitleComplete} />
                    </div>

                    <p ref={paragraphRef} className="hero-paragraph">
                        I'm a software developer passionate about building innovative,
                        user-focused applications that are intuitive and engaging.
                    </p>

                    <div className="hero-cta">
                        <Button
                            className="md:w-80 md:h-16 h-12"
                            id="heroEnd"
                            text="Scroll Down"
                        />
                    </div>
                </div>
            </div>

            {/* 5 — Counter/stats strip */}
            <AnimatedSection />

        </section>
    );
};

export default Hero;