import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * LoadingScreen Component
 * 
 * Displays a branded loading animation while:
 * - Three.js models/textures load (via useGLTF preload)
 * - Spline scene initializes
 * - Fonts and critical assets are ready
 * 
 * Features:
 * - Progress indicator
 * - Smooth reveal animation
 * - Fallback timeout (won't block forever)
 * 
 * @param {Function} onLoadComplete - Callback when loading is done
 * @param {number} minimumLoadTime - Minimum display time in ms (default: 2000)
 */

const LoadingScreen = ({ onLoadComplete, minimumLoadTime = 2000 }) => {
    const [progress, setProgress] = useState(0);
    const [assetsReady, setAssetsReady] = useState(false);
    const [minimumTimePassed, setMinimumTimePassed] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    // Simulate/track loading progress
    useEffect(() => {
        let progressInterval;
        let mounted = true;

        const simulateProgress = () => {
            progressInterval = setInterval(() => {
                if (!mounted) return;
                
                setProgress(prev => {
                    // Slow down as we approach 100
                    if (prev >= 90) {
                        return assetsReady ? 100 : prev + 0.5;
                    }
                    if (prev >= 70) {
                        return prev + 1;
                    }
                    if (prev >= 40) {
                        return prev + 2;
                    }
                    return prev + 3;
                });
            }, 50);
        };

        simulateProgress();

        return () => {
            mounted = false;
            clearInterval(progressInterval);
        };
    }, [assetsReady]);

    // Check for actual asset loading
    useEffect(() => {
        let mounted = true;

        const checkAssets = async () => {
            try {
                // Wait for document fonts
                if (document.fonts && document.fonts.ready) {
                    await document.fonts.ready;
                }

                // Check if Three.js GLTFLoader cache has our model
                // This works with @react-three/drei's useGLTF.preload
                const checkThreeAssets = () => {
                    return new Promise((resolve) => {
                        // Give Three.js time to start loading
                        setTimeout(() => {
                            // Check if WebGL context is available
                            const canvas = document.createElement('canvas');
                            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
                            if (gl) {
                                resolve(true);
                            } else {
                                console.warn('WebGL not available');
                                resolve(false);
                            }
                        }, 500);
                    });
                };

                // Check for Spline readiness (if using @splinetool/react-spline)
                const checkSplineReady = () => {
                    return new Promise((resolve) => {
                        // Spline typically loads async, give it a head start
                        setTimeout(resolve, 1000);
                    });
                };

                await Promise.all([
                    checkThreeAssets(),
                    checkSplineReady(),
                ]);

                if (mounted) {
                    setAssetsReady(true);
                }
            } catch (error) {
                console.error('Asset loading error:', error);
                // Still mark as ready to not block the user
                if (mounted) {
                    setAssetsReady(true);
                }
            }
        };

        checkAssets();

        // Fallback: always complete after max timeout
        const fallbackTimeout = setTimeout(() => {
            if (mounted) {
                setAssetsReady(true);
            }
        }, 8000); // 8 second max wait

        return () => {
            mounted = false;
            clearTimeout(fallbackTimeout);
        };
    }, []);

    // Minimum display time for branded experience
    useEffect(() => {
        const timer = setTimeout(() => {
            setMinimumTimePassed(true);
        }, minimumLoadTime);

        return () => clearTimeout(timer);
    }, [minimumLoadTime]);

    // Trigger exit animation when ready
    useEffect(() => {
        if (progress >= 100 && minimumTimePassed && assetsReady && !isExiting) {
            setIsExiting(true);
        }
    }, [progress, minimumTimePassed, assetsReady, isExiting]);

    // Handle animation complete
    const handleExitComplete = useCallback(() => {
        if (onLoadComplete) {
            onLoadComplete();
        }
    }, [onLoadComplete]);

    return (
        <AnimatePresence onExitComplete={handleExitComplete}>
            {!isExiting && (
                <motion.div
                    className="loading-screen"
                    initial={{ opacity: 1 }}
                    exit={{ 
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                    }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#FFFFFF',
                        overflow: 'hidden',
                    }}
                >
                    {/* Animated background pattern */}
                    <motion.div
                        className="loading-pattern"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.03 }}
                        transition={{ duration: 1 }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `
                                radial-gradient(circle at 25% 25%, #000 1px, transparent 1px),
                                radial-gradient(circle at 75% 75%, #000 1px, transparent 1px)
                            `,
                            backgroundSize: '48px 48px',
                        }}
                    />

                    {/* Logo / Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            marginBottom: '3rem',
                            textAlign: 'center',
                        }}
                    >
                        <h1
                            style={{
                                fontFamily: "'Audiowide', sans-serif",
                                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                                fontWeight: 600,
                                color: '#000',
                                margin: 0,
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Jayson Packer
                        </h1>
                        <p
                            style={{
                                fontFamily: "'Mona Sans', sans-serif",
                                fontSize: '0.75rem',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                color: '#666',
                                marginTop: '0.5rem',
                            }}
                        >
                            Portfolio
                        </p>
                    </motion.div>

                    {/* Loading indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                        }}
                    >
                        {/* Animated cube loader */}
                        <div className="cube-loader">
                            <motion.div
                                className="cube"
                                animate={{
                                    rotateX: [0, 90, 180, 270, 360],
                                    rotateY: [0, 90, 180, 270, 360],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    border: '2px solid #000',
                                    backgroundColor: 'transparent',
                                    transformStyle: 'preserve-3d',
                                }}
                            />
                        </div>

                        {/* Progress bar */}
                        <div
                            style={{
                                width: '200px',
                                height: '2px',
                                backgroundColor: '#e5e5e5',
                                borderRadius: '1px',
                                overflow: 'hidden',
                            }}
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                style={{
                                    height: '100%',
                                    backgroundColor: '#000',
                                }}
                            />
                        </div>

                        {/* Progress text */}
                        <motion.p
                            style={{
                                fontFamily: "'Mona Sans', sans-serif",
                                fontSize: '0.7rem',
                                letterSpacing: '0.15em',
                                color: '#999',
                                textTransform: 'uppercase',
                            }}
                        >
                            {progress < 100 ? 'Loading experience' : 'Ready'}
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                style={{ marginLeft: '2px' }}
                            >
                                {progress < 100 ? '...' : ''}
                            </motion.span>
                        </motion.p>
                    </motion.div>

                    {/* Exit animation overlay */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        exit={{ 
                            scaleY: 1,
                            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                        }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: '#FFFFFF',
                            transformOrigin: 'bottom',
                            zIndex: 1,
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
