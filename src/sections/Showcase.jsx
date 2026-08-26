import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants/index.js";
import "../showcase.css";

gsap.registerPlugin(ScrollTrigger);

/* ─── Arrow icon ────────────────────────────────────────────────── */
const ArrowIcon = ({ size = 13 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* ─── Tag pill ──────────────────────────────────────────────────── */
const Tag = ({ label }) => <span className="sc-tag">{label}</span>;

/* ─── Featured card ─────────────────────────────────────────────── */
const FeaturedCard = ({ project, cardRef }) => {
    const navigate = useNavigate();
    return (
        <div
            ref={cardRef}
            className="sc-card sc-card--featured"
            onClick={() => navigate(`/project/${project.slug}`)}
            style={{ cursor: 'pointer' }}
        >
            <div className="sc-card__body">
                <h3 className="sc-card__title">{project.name}</h3>
                <div className="sc-tags">
                    {project.tools.map(t => <Tag key={t} label={t} />)}
                </div>
                <p className="sc-card__desc">{project.description}</p>
                <span className="sc-card__link">View Project <ArrowIcon /></span>
            </div>
            <div className="sc-card__image">
                <img src={project.imagePaths[0]} alt={project.name} />
            </div>
            <span className="sc-badge">Featured</span>
        </div>
    );
};

/* ─── Small card ────────────────────────────────────────────────── */
const SmallCard = ({ project, cardRef }) => {
    const navigate = useNavigate();
    return (
        <div
            ref={cardRef}
            className="sc-card sc-card--small"
            onClick={() => navigate(`/project/${project.slug}`)}
            style={{ cursor: 'pointer' }}
        >
            <div className="sc-card__image">
                <img src={project.imagePaths[0]} alt={project.name} />
            </div>
            <div className="sc-card__body">
                <h3 className="sc-card__title">{project.name}</h3>
                <div className="sc-tags">
                    {project.tools.map(t => <Tag key={t} label={t} />)}
                </div>
                <p className="sc-card__desc">{project.description}</p>
                <span className="sc-card__link">View <ArrowIcon size={11} /></span>
            </div>
        </div>
    );
};

/* ─── Main component ────────────────────────────────────────────── */
const Showcase = () => {
    const titleRef    = useRef(null);
    const featuredRef = useRef(null);
    const bottomRef   = useRef(null);

    const featured    = projects[0];
    const bottomCards = projects.slice(1, 3);

    useGSAP(() => {
        [titleRef.current, featuredRef.current, bottomRef.current].forEach((el, i) => {
            if (!el) return;
            gsap.fromTo(el,
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.85,
                    delay: 0.12 * i, ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top bottom-=80" },
                }
            );
        });
    }, []);

    return (
        <section id="work" className="showcase-section">
            <div className="showcase-inner">

                {/* ROW 1 — title + featured card */}
                <div className="showcase-row" ref={titleRef}>
                    <div className="showcase-title-block">
                        <h2>Recent<br />Projects</h2>
                    </div>

                    {/* Desktop: split featured card */}
                    <div className="sc-featured-desktop">
                        <FeaturedCard project={featured} cardRef={featuredRef} />
                    </div>
                    {/* Mobile: same card as small cards */}
                    <div className="sc-featured-mobile">
                        <SmallCard project={featured} cardRef={null} />
                    </div>
                </div>

                {/* ROW 2 — two small cards */}
                <div className="showcase-row" ref={bottomRef}>
                    {bottomCards.map((project) => (
                        <SmallCard
                            key={project.name}
                            project={project}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Showcase;