import { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import Hero         from './sections/Hero.jsx';
import Showcase     from './sections/Showcase.jsx';
import ProjectsGrid from './sections/ProjectsGrid.jsx';
import NavBar        from './components/NavBar.jsx';
import Skills        from './sections/Skills.jsx';
import About         from './sections/About.jsx';
import Contact       from './sections/Contact.jsx';
import Footer        from './sections/Footer.jsx';
import LoadingScreen    from './components/LoadingScreen.jsx';
import ProjectPage      from './sections/ProjectPage.jsx';

const HomePage = ({ canvasOpacity, textColorProgress, splineOpacity, containerRef }) => (
    <div ref={containerRef} className="relative">
        <NavBar />
        <Hero canvasOpacity={canvasOpacity} />
        <About textColorProgress={textColorProgress} />
        <Skills textColorProgress={textColorProgress} />
        <Showcase textColorProgress={textColorProgress} />
        <ProjectsGrid />
        <Contact splineOpacity={splineOpacity} />
        <Footer />
    </div>
);

const App = () => {
    const [isLoading, setIsLoading]   = useState(true);
    const [showContent, setShowContent] = useState(false);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const heroCanvasOpacity = useTransform(scrollYProgress, [0, 0.08, 0.18], [1, 0.6, 0]);
    const splineOpacity     = useTransform(scrollYProgress, [0.6, 0.75, 0.9], [0, 0.5, 1]);
    const textColorProgress = useTransform(scrollYProgress, [0, 0.35, 0.5],   [0, 0, 1]);

    const handleLoadComplete = () => {
        setIsLoading(false);
        setTimeout(() => setShowContent(true), 100);
    };

    return (
        <>
            <LoadingScreen onLoadComplete={handleLoadComplete} minimumLoadTime={3000} />

            <AnimatePresence>
                {showContent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >


                        <Routes>
                            {/* Home */}
                            <Route
                                path="/"
                                element={
                                    <HomePage
                                        canvasOpacity={heroCanvasOpacity}
                                        textColorProgress={textColorProgress}
                                        splineOpacity={splineOpacity}
                                        containerRef={containerRef}
                                    />
                                }
                            />

                            {/* Project detail — /project/:slug */}
                            <Route path="/project/:slug" element={<ProjectPage />} />
                        </Routes>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default App;