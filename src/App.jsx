import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import Hero from './sections/Hero.jsx';
import Showcase from './sections/Showcase.jsx';
import NavBar from './components/NavBar.jsx';
import Skills from './sections/Skills.jsx';
import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import ScrollBackground from './components/ScrollBackground.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';

/**
 * Main App Component
 * 
 * Orchestrates:
 * 1. Loading screen while assets load
 * 2. Scroll-driven background transition (white → near-black)
 * 3. Three.js hero fade out
 * 4. Spline contact section fade in
 */
const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);
    const containerRef = useRef(null);
    
    // Main scroll progress for the entire page
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    // Hero Three.js scene opacity - fades out during first 25% of scroll
    const heroCanvasOpacity = useTransform(
        scrollYProgress,
        [0, 0.08, 0.18],
        [1, 0.6, 0]
    );

    // Spline scene opacity - fades in during last 30% of scroll
    const splineOpacity = useTransform(
        scrollYProgress,
        [0.6, 0.75, 0.9],
        [0, 0.5, 1]
    );

    // Text color transitions for sections (for readability)
    const textColorProgress = useTransform(
        scrollYProgress,
        [0, 0.35, 0.5],
        [0, 0, 1]
    );

    // Handle loading complete
    const handleLoadComplete = () => {
        setIsLoading(false);
        // Small delay before showing content for smooth transition
        setTimeout(() => {
            setShowContent(true);
        }, 100);
    };

    return (
        <>
            {/* Loading Screen */}
            <LoadingScreen 
                onLoadComplete={handleLoadComplete}
                minimumLoadTime={3000} // Adjust based on your preference
            />

            {/* Main Site Content */}
            <AnimatePresence>
                {showContent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        {/* Fixed background layer - handles color transition + geometric noise */}
                        <ScrollBackground />

                        {/* Main scrollable content */}
                        <div ref={containerRef} className="relative">
                            <NavBar />
                            
                            {/* Hero with fading Three.js canvas */}
                            <Hero canvasOpacity={heroCanvasOpacity} />
                            
                            {/* About section - starts transitioning */}
                            <About textColorProgress={textColorProgress} />
                            
                            {/* Skills section */}
                            <Skills textColorProgress={textColorProgress} />
                            
                            {/* Showcase section - mid-transition */}
                            <Showcase textColorProgress={textColorProgress} />
                            
                            {/* Contact with fading-in Spline scene */}
                            <Contact splineOpacity={splineOpacity} />
                            
                            {/* Footer */}
                            <Footer />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default App;
