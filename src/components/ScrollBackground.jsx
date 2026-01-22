import { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const GeometricNoise = ({ noiseOpacity, parallaxInfluence, mouseX, mouseY }) => {
    const patternX = useTransform(
        [mouseX, parallaxInfluence],
        ([x, influence]) => x * influence * 0.02
    );
    const patternY = useTransform(
        [mouseY, parallaxInfluence],
        ([y, influence]) => y * influence * 0.02
    );

    return (
        <motion.div
            style={{
                opacity: noiseOpacity,
                x: patternX,
                y: patternY,
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                color: '#000000', // CRITICAL: Defines currentColor for SVG
            }}
        >
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="dotGridSmall" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                    </pattern>
                    <pattern id="dotGridLarge" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                        <circle cx="25" cy="25" r="2" fill="currentColor" />
                    </pattern>
                    <pattern id="lineGrid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <pattern id="trianglePattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 60 52 L 0 52 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    </pattern>
                    <pattern id="crosshatch" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 0 0 L 10 10 M 10 0 L 0 10" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                </defs>
                {/* CRITICAL: These rectangles apply the patterns */}
                <rect width="100%" height="100%" fill="url(#dotGridSmall)" />
                <rect width="100%" height="100%" fill="url(#dotGridLarge)" />
                <rect width="100%" height="100%" fill="url(#lineGrid)" />
                <rect width="100%" height="100%" fill="url(#trianglePattern)" />
                <rect width="100%" height="100%" fill="url(#crosshatch)" />
            </svg>
        </motion.div>
    );
};

const ScrollBackground = () => {
    // CRITICAL: No target parameter - tracks window scroll
    const { scrollYProgress } = useScroll();

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.12, 0.3, 0.5, 0.7, 0.85],
        ['#FFFFFF', '#F5F5F5', '#B0B0B0', '#4A4A4A', '#1A1A1A', '#0B0B0B']
    );

    // CRITICAL: Increased opacity for visibility
    const noiseOpacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.5, 1],
        [0, 0.15, 0.3, 0.4]
    );

    const parallaxInfluence = useTransform(
        scrollYProgress,
        [0, 0.5, 0.8],
        [1, 0.4, 0]
    );

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 30, mass: 0.5 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 100, damping: 30, mass: 0.5 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            mouseX.set(x * 50);
            mouseY.set(y * 50);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="scroll-background"
            style={{ backgroundColor }} // CRITICAL: Inline style
        >
            <GeometricNoise
                noiseOpacity={noiseOpacity}
                parallaxInfluence={parallaxInfluence}
                mouseX={smoothMouseX}
                mouseY={smoothMouseY}
            />
        </motion.div>
    );
};

export default ScrollBackground;