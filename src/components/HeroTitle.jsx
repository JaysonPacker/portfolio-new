import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { titles } from '../constants/index.js';

/**
 * HeroTitle
 *
 * - Small rotating label above (cycles through `titles` from constants)
 * - Single large headline: "Hello, I'm Jayson" typed out letter by letter
 */
const HeroTitle = ({ onComplete }) => {
    const headlineRef  = useRef(null);
    const labelRef     = useRef(null);
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayedTitle, setDisplayedTitle] = useState(titles[0]);
    const [fade, setFade] = useState(true);

    // ── Typewriter on the headline ───────────────────────────────
    useEffect(() => {
        const text    = "Hello, I'm Jayson";
        const letters = text.split('');

        headlineRef.current.innerHTML = letters
            .map(l => `<span class="ht-letter" style="opacity:0">${l === ' ' ? '&nbsp;' : l}</span>`)
            .join('');

        gsap.to(headlineRef.current.querySelectorAll('.ht-letter'), {
            opacity: 1,
            duration: 0.01,
            ease: 'steps(1)',
            stagger: { each: 0.07, from: 'start' },
            onComplete: () => { if (onComplete) onComplete(); },
        });
    }, [onComplete]);

    // ── Rotate through titles every 2.8 s ───────────────────────
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setTitleIndex(i => {
                    const next = (i + 1) % titles.length;
                    setDisplayedTitle(titles[next]);
                    return next;
                });
                setFade(true);
            }, 300); // wait for fade-out before swapping text
        }, 2800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="ht-wrapper">
            {/* Rotating label */}
            <span
                ref={labelRef}
                className={`ht-label ${fade ? 'ht-label--visible' : 'ht-label--hidden'}`}
            >
                {displayedTitle}
            </span>

            {/* Main headline */}
            <h1 className="ht-headline" ref={headlineRef} />
        </div>
    );
};

export default HeroTitle;