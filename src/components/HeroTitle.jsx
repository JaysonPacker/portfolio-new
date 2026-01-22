import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroTitle = ({ onComplete }) => {
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);

    useEffect(() => {
        // Animate "Hello World"
        const text1 = "Hello World";
        const letters1 = text1.split('');
        line1Ref.current.innerHTML = letters1
            .map((letter) => `<span class="letter" style="opacity: 0;">${letter === ' ' ? '&nbsp;' : letter}</span>`)
            .join('');

        const letterElements1 = line1Ref.current.querySelectorAll('.letter');

        gsap.to(letterElements1, {
            opacity: 1,
            duration: 0.01,
            stagger: {
                each: 0.12,
                from: "start",
                ease: "none",
            },
            ease: 'steps(1)',
        });

        // Animate "I'm Jayson"
        const text2 = "I'm Jayson";
        const letters2 = text2.split('');
        line2Ref.current.innerHTML = letters2
            .map((letter) => `<span class="letter" style="opacity: 0;">${letter === ' ' ? '&nbsp;' : letter}</span>`)
            .join('');

        const letterElements2 = line2Ref.current.querySelectorAll('.letter');

        gsap.to(letterElements2, {
            opacity: 1,
            duration: 0.01,
            stagger: {
                each: 0.12,
                from: "start",
                ease: "none",
            },
            ease: 'steps(1)',
            delay: text1.length * 0.08+0.8,
            onComplete: () => {
                // Trigger callback when animation is done
                if (onComplete) onComplete();
            }
        });
    }, [onComplete]);

    return (
        <div className="hero-text">
            <div ref={line1Ref}></div>
            <h1>
                <span ref={line2Ref}></span>
            </h1>
        </div>
    );
};

    export default HeroTitle;