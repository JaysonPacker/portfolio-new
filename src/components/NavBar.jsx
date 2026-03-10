import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { navLinks } from '../constants/index.js';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate  = useNavigate();
    const location  = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const target = document.getElementById(id);
        if (target) {
            const offset = window.innerHeight * 0.13;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    const handleNavClick = (e, link) => {
        e.preventDefault();
        const id = link.replace('#', '');

        if (location.pathname === '/') {
            // Already on homepage — just scroll
            scrollToSection(id);
        } else {
            // On a project page — navigate home then scroll after render
            navigate('/');
            // Small delay lets the homepage mount before scrolling
            setTimeout(() => scrollToSection(id), 120);
        }
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        if (location.pathname === '/') {
            scrollToSection('hero');
        } else {
            navigate('/');
        }
    };

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a href="/" className="logo" onClick={handleLogoClick}>
                    Jayson Packer
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name}>
                                <a
                                    href={link}
                                    className="group"
                                    onClick={(e) => handleNavClick(e, link)}
                                >
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a
                    href="#contact"
                    className="contact-btn group"
                    onClick={(e) => handleNavClick(e, '#contact')}
                >
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    );
};

export default NavBar;