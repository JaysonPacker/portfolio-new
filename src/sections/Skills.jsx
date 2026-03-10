import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";
import "../skills.css";

const Skills = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".sk-card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top center",
                },
            }
        );
    });

    return (
        <div id="skills" className="flex-center section-padding md:mb-0 mb-20">
            <div className="w-full h-full md:px-10 px-5 text-gray-200">
                <TitleHeader title="Skills" />

                <div className="sk-grid">
                    {techStackIcons.map((tech) => (
                        <div key={tech.name} className="sk-card">
                            <div className="sk-card-inner">

                                {/* Left — Three.js model */}
                                <div className="sk-icon-wrapper">
                                    <TechIcon model={tech} />
                                </div>

                                {/* Divider */}
                                <div className="sk-divider" />

                                {/* Right — category name + skill tags */}
                                <div className="sk-info">
                                    <span className="sk-name">{tech.name}</span>
                                    <div className="sk-tags">
                                        {tech.skills.map((skill) => (
                                            <span key={skill} className="sk-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
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