import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../constants/index.js';
import NavBar from '../components/NavBar.jsx';
import '../project-page.css';

/* ─── Back arrow icon ───────────────────────────────────────────── */
const BackArrow = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M12 7H2M7 2L2 7l5 5"
            stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* ─── External link icon ────────────────────────────────────────── */
const ExternalIcon = () => (
    <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
        <path d="M5 2H2v10h10V9M8 2h4v4M8 6l4-4"
            stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* ─── Expandable image grid ─────────────────────────────────────── */
const ImageGrid = ({ images }) => {
    const [expandedIdx, setExpandedIdx] = useState(null);

    if (!images || images.length === 0) return null;

    const handleClick = (idx) => {
        setExpandedIdx(prev => prev === idx ? null : idx);
    };

    return (
        <div className="pp-gallery">
            <p className="pp-gallery-title">Project Images</p>
            <div className="pp-image-grid">
                {images.map((src, idx) => (
                    <div
                        key={idx}
                        className={`pp-grid-item ${expandedIdx === idx ? 'expanded' : ''}`}
                        onClick={() => handleClick(idx)}
                        title={expandedIdx === idx ? 'Click to collapse' : 'Click to expand'}
                    >
                        <img src={src} alt={`Project image ${idx + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

/* ─── Main page ─────────────────────────────────────────────────── */
const ProjectPage = () => {
    const { slug }   = useParams();
    const navigate   = useNavigate();
    const project    = projects.find(p => p.slug === slug);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [slug]);

    // 404 fallback
    if (!project) {
        return (
            <div className="pp-page">
                <NavBar />
                <div style={{ padding: '6rem 2rem', textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
                    <p>Project not found.</p>
                    <button className="pp-back" onClick={() => navigate('/')}>
                        <BackArrow /> Back to home
                    </button>
                </div>
            </div>
        );
    }

    const heroImage      = project.imagePaths[0];
    const galleryImages  = project.imagePaths.slice(1);

    return (
        <div className="pp-page">
            <NavBar />

            {/* ── Top layout: left col (image + title + skills) / right col (description) */}
            <div className="pp-top">

                {/* Left column */}
                <div className="pp-left">

                    {/* Hero image */}
                    <div className="pp-hero-image">
                        <img src={heroImage} alt={project.name} />
                    </div>

                    {/* Title block */}
                    <div className="pp-title-block">
                        <h1 className="pp-title">{project.name}</h1>
                        {project.url.map(([label, href]) => (
    <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="pp-title-link"
    >
        {label} <ExternalIcon />
    </a>
))}
                    </div>

                    {/* Skills block */}
                    <div className="pp-skills-block">
                        <p className="pp-skills-label">Tools & Skills</p>
                        <div className="pp-skills-tags">
                            {project.tools.map(tool => (
                                <span key={tool} className="pp-skill-tag">{tool}</span>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right column — description */}
                <div className="pp-right">
                    <div className="pp-desc-block">
                        <p className="pp-desc-label">About this project</p>
                        <p className="pp-desc-text">{project.description}</p>
                    </div>
                </div>

            </div>

            {/* ── Gallery grid (remaining images) */}
            {galleryImages.length > 0 && (
                <ImageGrid images={galleryImages} />
            )}

        </div>
    );
};

export default ProjectPage;
