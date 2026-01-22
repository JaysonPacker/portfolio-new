import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";


const Skills = () => {
    // Animate the tech cards in the skills section
    useGSAP(() => {
        // This animation is triggered when the user scrolls to the #skills wrapper
        // The animation starts when the top of the wrapper is at the center of the screen
        // The animation is staggered, meaning each card will animate in sequence
        // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
        gsap.fromTo(
            ".tech-card",
            {
                // Initial values
                y: 50, // Move the cards down by 50px
                opacity: 0, // Set the opacity to 0
            },
            {
                // Final values
                y: 0, // Move the cards back to the top
                opacity: 1, // Set the opacity to 1
                duration: 1, // Duration of the animation
                ease: "power2.inOut", // Ease of the animation
                stagger: 0.2, // Stagger the animation by 0.2 seconds
                scrollTrigger: {
                    trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
                    start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
                },
            }
        );
    });

    return (
        <div id="skills" className="flex-center section-padding md:mb-0 mb-20">
            <div className="w-full h-full md:px-10 px-5 text-gray-200 ">
                <TitleHeader
                    title="Skills"

                />
                <div className="tech-grid">
                    {/* Loop through the techStackIcons array and create a component for each item.
              The key is set to the name of the tech stack icon, and the classnames are set to
              card-border, tech-card, overflow-hidden, and group. The xl:rounded-full and rounded-lg
              classes are only applied on larger screens. */}
                    {techStackIcons.map((techStackIcon) => (
                        <div
                            key={techStackIcon.name}
                            className="tech-card overflow-hidden group"
                        >
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <TechIcon model={techStackIcon} />
                                </div>
                                <div className="padding-x w-full">
                                    <p>{techStackIcon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                  </div>
            </div>
        </div>
    );
};

export default Skills;