import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants/index.js";
import "../projects-grid.css";

gsap.registerPlugin(ScrollTrigger);

/* ─── Filter options ────────────────────────────────────────────── */
const FILTERS = [
    { label: "All",        value: "all"       },
    { label: "Software",   value: "software"  },
    { label: "Designs",    value: "design"    },
    { label: "Prototypes", value: "prototype" },
];

/* ─── Arrow icon ────────────────────────────────────────────────── */
const ArrowIcon = ({ size = 12 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* ─── Single project card ───────────────────────────────────────── */
const ProjectCard = ({ project }) => {
    const navigate = useNavigate();
    return (
        <div
            className="pg-card"
            onClick={() => navigate(`/project/${project.slug}`)}
            style={{ cursor: 'pointer' }}
        >
            <div className="pg-card__image">
                <img src={project.imagePaths[0]} alt={project.name} />
            </div>
            <div className="pg-card__body">
                <h3 className="pg-card__title">{project.name}</h3>
                <p className="pg-card__desc">{project.description}</p>
                <div className="pg-tags">
                    {project.tools.map(t => (
                        <span key={t} className="pg-tag">{t}</span>
                    ))}
                </div>
                <span className="pg-card__link">View Project <ArrowIcon /></span>
            </div>
        </div>
    );
};

/* ─── Main section ──────────────────────────────────────────────── */
const ProjectsGrid = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [filtered, setFiltered]         = useState(projects);
    const headerRef = useRef(null);
    const gridRef   = useRef(null);

    // Filter logic — runs whenever the active filter changes
    useEffect(() => {
        if (activeFilter === "all") {
            setFiltered(projects);
        } else {
            setFiltered(
                projects.filter(p =>
                    p.tags && p.tags.includes(activeFilter)
                )
            );
        }
    }, [activeFilter]);

    // Animate cards in whenever filtered list changes
    useEffect(() => {
        if (!gridRef.current) return;
        const cards = gridRef.current.querySelectorAll(".pg-card");
        gsap.fromTo(
            cards,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.45, stagger: 0.07, ease: "power2.out" }
        );
    }, [filtered]);

    // Scroll-trigger on first mount for the header
    useGSAP(() => {
        if (!headerRef.current) return;
        gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
                scrollTrigger: { trigger: headerRef.current, start: "top bottom-=80" },
            }
        );
    }, []);

    return (
        <section id="projects-grid">
            <div id="projects" className="pg-inner">

                {/* Header: title + filter buttons */}
                <div className="pg-header" ref={headerRef}>
                    <h2 className="pg-title">All Projects</h2>

                    <div className="pg-filters">
                        {FILTERS.map(f => (
                            <button
                                key={f.value}
                                className={`pg-filter-btn ${activeFilter === f.value ? "active" : ""}`}
                                onClick={() => setActiveFilter(f.value)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project grid */}
                <div className="pg-grid" ref={gridRef}>
                    {filtered.length > 0 ? (
                        filtered.map(project => (
                            <ProjectCard key={project.name} project={project} />
                        ))
                    ) : (
                        <p className="pg-empty">No projects found</p>
                    )}
                </div>

            </div>
        </section>
    );
};

export default ProjectsGrid;