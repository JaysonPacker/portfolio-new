import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgress } from '@react-three/drei';
import { titles } from '../constants/index.js';

const LoadingScreen = ({ onLoadComplete, minimumLoadTime = 3000 }) => {
    const { progress: threeProgress }           = useProgress();
    const [progress, setProgress]               = useState(0);
    const [minimumTimePassed, setMinimumTimePassed] = useState(false);
    const [isExiting, setIsExiting]             = useState(false);
    const [titleIndex, setTitleIndex]           = useState(0);
    const [titleVisible, setTitleVisible]       = useState(true);
    const mountedRef                            = useRef(true);

    useEffect(() => {
        setProgress(threeProgress);
    }, [threeProgress]);

    useEffect(() => {
        const t = setTimeout(() => setMinimumTimePassed(true), minimumLoadTime);
        return () => {
            mountedRef.current = false;
            clearTimeout(t);
        };
    }, [minimumLoadTime]);

    useEffect(() => {
        if (progress >= 100 && minimumTimePassed && !isExiting) {
            setIsExiting(true);
        }
    }, [progress, minimumTimePassed, isExiting]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleVisible(false);
            setTimeout(() => {
                setTitleIndex(i => (i + 1) % titles.length);
                setTitleVisible(true);
            }, 400);
        }, 2200);
        return () => clearInterval(interval);
    }, []);

    const handleExitComplete = useCallback(() => {
        if (onLoadComplete) onLoadComplete();
    }, [onLoadComplete]);

    return (
        <AnimatePresence onExitComplete={handleExitComplete}>
            {!isExiting && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        backgroundColor: '#0b0b0b',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        padding: '0 8vw',
                        overflow: 'hidden',
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                        pointerEvents: 'none',
                    }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ marginBottom: '0.75rem', height: '1.2rem' }}
                        >
                            <motion.p
                                animate={{ opacity: titleVisible ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    fontFamily: "'Mona Sans', sans-serif",
                                    fontSize: '0.72rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(255,255,255,0.4)',
                                    margin: 0,
                                }}
                            >
                                {titles[titleIndex]}
                            </motion.p>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                fontFamily: "'Mona Sans', sans-serif",
                                fontSize: 'clamp(2.8rem, 8vw, 6rem)',
                                fontWeight: 800,
                                color: '#ffffff',
                                margin: '0 0 0.25rem',
                                lineHeight: 1.05,
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Hello, I'm Jayson
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        style={{
                            position: 'absolute',
                            bottom: '2.5rem',
                            left: '8vw',
                            right: '8vw',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                        }}
                    >
                        <div style={{
                            flex: 1,
                            height: '1px',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            borderRadius: '1px',
                            overflow: 'hidden',
                        }}>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                style={{ height: '100%', backgroundColor: '#ffffff' }}
                            />
                        </div>

                        <p style={{
                            fontFamily: "'Mona Sans', sans-serif",
                            fontSize: '0.65rem',
                            letterSpacing: '0.12em',
                            color: 'rgba(255,255,255,0.3)',
                            margin: 0,
                            minWidth: '2.5rem',
                            textAlign: 'right',
                        }}>
                            {Math.round(progress)}%
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ scaleY: 0 }}
                        exit={{ scaleY: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: '#0b0b0b',
                            transformOrigin: 'bottom',
                            zIndex: 2,
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;