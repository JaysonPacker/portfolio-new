import {useRef} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const Showcase = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const cards = [project1Ref.current, project2Ref.current, project3Ref.current];

        gsap.fromTo(
            sectionRef.current,
            {opacity: 0},
            {opacity: 1, duration: 1.5}
        );

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, [])

    return (
        <section id="work" ref={sectionRef} className="app-showcase">

            <div className="w-full">
                {/* Title */}
                {/* Title */}
                <div className="text-center mb-6 relative -top-20">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-white">Project Showcase</h2>
                    <p className="text-gray-200 text-sm lg:text-base">A selection of my recent work</p>
                </div>

                <div className="showcaselayout relative -top-10">
                    {/* Big Card */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/ggk-cover.png" alt="Gizmo Go Kartz cover"/>
                        </div>
                        <div className="text-content">
                            <h2>Large Student Arcade Game and Machine Project (30+ students)</h2>
                            <p className="text-black md:text-xl">
                                In this project I led Research Development tasks for physical machines and various tasks across teams
                            </p>
                        </div>
                    </div>

                    {/* Small Cards */}
                    <div className="project-list-wrapper">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/finflow2.png" alt="Financial Tracker Platform"/>
                            </div>
                            <h2>FinFlow - FullStack Finance Tracker</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7db]">
                                <img src="/images/rochestar.jpg" alt="AR Experience"/>
                            </div>
                            <h2>RochestAR - Augmented Reality History Experience</h2>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="text-center mt-6">
                    <a
                        href="https://jnp1380.wixsite.com/jaysons-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 text-sm lg:text-base bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors duration-300 font-semibold"
                    >
                        Learn About These Projects and More on My Wix
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Showcase