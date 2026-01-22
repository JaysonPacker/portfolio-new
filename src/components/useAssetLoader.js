import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

/**
 * useAssetLoader Hook (Fixed - No Infinite Loops)
 * 
 * Tracks loading progress of various assets:
 * - Fonts
 * - Three.js WebGL context
 * - Minimum display time
 * 
 * Returns progress (0-100) and isComplete boolean
 */

const useAssetLoader = (options = {}) => {
    const {
        minimumTime = 2000,
        maxTimeout = 10000,
    } = options;

    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [loadedAssets, setLoadedAssets] = useState({
        fonts: false,
        webgl: false,
        minimum: false,
    });

    const mountedRef = useRef(true);
    const completedRef = useRef(false);

    // Calculate progress whenever loadedAssets changes
    useEffect(() => {
        const weights = {
            fonts: 30,
            webgl: 40,
            minimum: 30,
        };

        let totalProgress = 0;
        Object.entries(loadedAssets).forEach(([key, loaded]) => {
            if (loaded && weights[key]) {
                totalProgress += weights[key];
            }
        });

        setProgress(totalProgress);

        // Check if all assets are loaded (only set once)
        const allLoaded = Object.values(loadedAssets).every(Boolean);
        if (allLoaded && !completedRef.current) {
            completedRef.current = true;
            setIsComplete(true);
        }
    }, [loadedAssets]);

    // Load fonts - runs once on mount
    useEffect(() => {
        let isCancelled = false;

        const loadFonts = async () => {
            try {
                if (document.fonts?.ready) {
                    await document.fonts.ready;
                    // Small buffer for font rendering
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
            } catch (error) {
                console.warn('Font loading error:', error);
            } finally {
                if (!isCancelled && mountedRef.current) {
                    setLoadedAssets(prev => ({ ...prev, fonts: true }));
                }
            }
        };

        loadFonts();

        return () => {
            isCancelled = true;
        };
    }, []); // Empty dependency - runs once

    // Check WebGL availability - runs once on mount
    useEffect(() => {
        let isCancelled = false;

        const checkWebGL = () => {
            try {
                const canvas = document.createElement('canvas');
                const gl = canvas.getContext('webgl2') || 
                          canvas.getContext('webgl') || 
                          canvas.getContext('experimental-webgl');
                
                // Give Three.js time to initialize
                const delay = gl ? 800 : 0;
                
                setTimeout(() => {
                    if (!isCancelled && mountedRef.current) {
                        setLoadedAssets(prev => ({ ...prev, webgl: true }));
                    }
                }, delay);
            } catch (error) {
                console.warn('WebGL check error:', error);
                if (!isCancelled && mountedRef.current) {
                    setLoadedAssets(prev => ({ ...prev, webgl: true }));
                }
            }
        };

        // Small delay to let the page start rendering
        const timer = setTimeout(checkWebGL, 200);

        return () => {
            isCancelled = true;
            clearTimeout(timer);
        };
    }, []); // Empty dependency - runs once

    // Minimum display time - runs once on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            if (mountedRef.current) {
                setLoadedAssets(prev => ({ ...prev, minimum: true }));
            }
        }, minimumTime);

        return () => clearTimeout(timer);
    }, [minimumTime]);

    // Maximum timeout fallback - runs once on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            if (mountedRef.current && !completedRef.current) {
                console.warn('Loading timeout reached, forcing complete');
                completedRef.current = true;
                setLoadedAssets({
                    fonts: true,
                    webgl: true,
                    minimum: true,
                });
                setIsComplete(true);
            }
        }, maxTimeout);

        return () => clearTimeout(timer);
    }, [maxTimeout]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            mountedRef.current = false;
        };
    }, []);

    // Manual complete trigger
    const forceComplete = useCallback(() => {
        if (!completedRef.current) {
            completedRef.current = true;
            setLoadedAssets({
                fonts: true,
                webgl: true,
                minimum: true,
            });
            setIsComplete(true);
        }
    }, []);

    return {
        progress,
        isComplete,
        loadedAssets,
        forceComplete,
    };
};

export default useAssetLoader;
