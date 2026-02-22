import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('home');

    const scrollToSection = (id) => {
        if (id === 'contact') {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        } else if (id === 'home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'work', 'contact'];
            const scrollPosition = window.scrollY + 100;

            // 1. Detect if scrolled to (near) bottom - Contact Section
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200) {
                setActiveTab('contact');
                return;
            }

            // 2. Normal Section Spy
            for (const section of sections) {
                if (section === 'contact') continue; // Contact handled above

                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveTab(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="navbar-container">
            <div className="navbar-capsule">
                <ul className="nav-menu">
                    <li
                        className={activeTab === 'home' ? 'active' : ''}
                        onClick={() => scrollToSection('home')}
                    >
                        Home
                    </li>
                    <li
                        className={activeTab === 'about' ? 'active' : ''}
                        onClick={() => scrollToSection('about')}
                    >
                        About
                    </li>
                    <li
                        className={activeTab === 'work' ? 'active' : ''}
                        onClick={() => scrollToSection('work')}
                    >
                        Work
                    </li>
                    <li
                        className={activeTab === 'contact' ? 'active' : ''}
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
