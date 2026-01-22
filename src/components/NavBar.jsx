import React, {useEffect, useState} from 'react'
import {navLinks} from "../constants/index.js";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const handleNavClick = (e, link) => {
        e.preventDefault();

        // Remove the # from the link to get the ID
        const targetId = link.replace('#', '');
        const target = document.getElementById(targetId);

        if (target) {
            const offset = window.innerHeight * 0.13; // Leave a bit of space at the top
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a
                    href="#hero"
                    className="logo"
                    onClick={(e) => handleNavClick(e, '#hero')}
                >
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
}

export default NavBar