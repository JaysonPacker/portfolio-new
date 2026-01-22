import React from 'react';
import AnimatedSection from "../components/AnimatedSection.jsx";

const About = () => {
    return (
        <section id="about" className="section-padding ">
            <AnimatedSection/>
            <div className="max-w-4xl mx-auto mt-16">
                <div className="about-card">
                    <div className="text-center space-y-6">
                        <div>
                            <p className="text-sm text-gray-500 mb-2">👋 NICE TO MEET YOU</p>
                            <h2 className="text-5xl font-bold mb-6">About Me</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            I'm passionate about building innovative, user-focused applications that make technology more intuitive and engaging. Through my studies in New Media Interactive Development at RIT, I've built a strong foundation in JavaScript, C#, software design principles, and user experience methodologies.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Driven by a growth mindset, I'm constantly learning, experimenting, and refining both my skills as a developer and myself. I strive to design digital experiences that are not only functional but also meaningful and visually compelling.
                        </p>
                        <div className="flex justify-center gap-8 pt-8">
                            <div>
                                <p className="text-3xl font-bold">2026</p>
                                <p className="text-gray-600">Expected Grad</p>
                            </div>
                            <div className="w-px bg-gray-300"></div>
                            <div>
                                <p className="text-3xl font-bold">RIT</p>
                                <p className="text-gray-600">New Media</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;