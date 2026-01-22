import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Button from '../components/Button.jsx';
import HeroExperience from '../components/HeroModels/HeroExperience.jsx';
import HeroTitle from '../components/HeroTitle.jsx';
import AnimatedSection from '../components/AnimatedSection.jsx';

/**
 * Hero Section
 * 
 * Features a Three.js canvas (Earth model + particles) that fades out
 * as the user scrolls, creating a seamless transition into the
 * scroll-driven background effect.
 * 
 * @param {MotionValue} canvasOpacity - Framer Motion value controlling canvas fade
 */
const Hero = ({ canvasOpacity }) => {
    const paragraphRef = useRef(null);

    const handleTitleComplete = () => {
        gsap.fromTo(
            paragraphRef.current,
            {
                opacity: 0,
                y: -20,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'bounce.out',
            }
        );
    };

    return (
        <section id="hero" className="relative overflow-hidden">
            {/* Hero background gradient overlay - helps blend into scroll transition */}
            <div className="hero-background-blend" />
            
            {/* Three.js Canvas - fades out as user scrolls */}
            <motion.div 
                className="absolute inset-0 top-0 z-0 h-screen"
                style={{ 
                    opacity: canvasOpacity,
                    willChange: 'opacity'
                }}
            >
                <HeroExperience />
            </motion.div>

            {/* Hero Content */}
            <div className="hero-layout">
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 relative z-20 pointer-events-none">
                    <div className="flex flex-col gap-7 pointer-events-auto">
                        <div className="hero-text">
                            <HeroTitle onComplete={handleTitleComplete} />
                        </div>
                        <p 
                            ref={paragraphRef}
                            className="text-black md:text-xl relative md:w-100"
                            style={{ opacity: 0 }}
                        >
                            I'm a software developer passionate about building innovative,
                            user-focused applications that are intuitive
                            and engaging.
                        </p>
                        <Button 
                            className="md:w-80 md:h-16 h-12"
                            id="heroEnd"
                            text="Scroll Down"
                        />
                    </div>
                </header>
            </div>

            {/* Scroll indicator that fades with the hero */}
            <motion.div 
                className="scroll-indicator"
                style={{ opacity: canvasOpacity }}
            >
                <div className="scroll-indicator-inner">
                    <span className="scroll-text">Scroll to explore</span>
                    <div className="scroll-arrow">
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
                            <path 
                                d="M6 0v16M1 11l5 5 5-5" 
                                stroke="currentColor" 
                                strokeWidth="1.5" 
                            />
                        </svg>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
