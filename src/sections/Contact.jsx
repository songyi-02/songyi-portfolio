import React from 'react';
import './Contact.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Assets
import contactVideo from '../assets/video/contact_video.gif';
import contactRabbit from '../assets/video/contact_rabbit_2.mp4';




// SplitText Component (텍스트 리빌용)
const SplitText = ({ text }) => {
    if (!text) return null;
    return (
        <span style={{ display: 'inline-block' }}>
            {text.split('').map((char, index) => (
                <span key={index} className="y_">
                    <span className="y">{char === ' ' ? '\u00A0' : char}</span>
                </span>
            ))}
        </span>
    );
};

// GSAP Refs
const Contact = () => {
    const contactRef = React.useRef(null);
    const containerRef = React.useRef(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    React.useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // 컨테이너 리빌 애니메이션
            gsap.fromTo(containerRef.current,
                {
                    y: 100,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".main-content-wrapper",
                        start: "bottom bottom",
                        end: "bottom+=694px bottom",
                        scrub: 1,
                    }
                }
            );

            // ✅ Title Animation (intro-project-tag 스타일과 동일하게)
            const titleChars = containerRef.current.querySelectorAll(".contact-title .y");
            
            if (titleChars.length > 0) {
                gsap.fromTo(titleChars, 
                    { y: "100%" },
                    {
                        y: "0%",
                        ease: "none", 
                        stagger: 0.05,
                        scrollTrigger: {
                            trigger: ".main-content-wrapper",
                            start: "bottom bottom", 
                            end: "bottom+=694px bottom",
                            scrub: 1,
                        }
                    }
                );
            }

            ScrollTrigger.refresh();
        }); // 컨텍스트 스코프 제거하여 외부 요소(.main-content-wrapper) 탐색 허용

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" className="contact-section" ref={contactRef}>
            <div className="contact-container" ref={containerRef}>

                {/* Main Content: Left Text / Right Video */}
                <div className="contact-main">
                    <div className="contact-left">
                        <h2 className="contact-title">
                            <SplitText text="Contact to me" />
                        </h2>
                        <ul className="contact-list">
                            <li className="contact-list-item">
                                <a href="mailto:hee6544000@naver.com">hee6544000@naver.com</a>
                            </li>
                            <li className="contact-list-item">
                                <a href="https://github.com/songyi-02" target="_blank" rel="noopener noreferrer">Github</a>
                            </li>
                            <li className="contact-list-item">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </li>
                            <li className="contact-list-item">
                                <span>010-9983-8557</span>
                            </li>
                        </ul>
                    </div>

                    <div className="contact-right">
                        <div className="video-wrapper">
                            <img
                                src={contactVideo}
                                alt="Contact Animation"
                                className="contact-video"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer: Nav / Rabbit / Copyright */}
                <div className="contact-footer">
                    <nav className="footer-nav">
                        <span onClick={scrollToTop} style={{ cursor: 'pointer' }}>Home</span>
                        <a href="#about">About</a>
                        <a href="#work">Work</a>
                    </nav>

                    <div className="footer-rabbit-container">
                        <video
                            src={contactRabbit}
                            autoPlay
                            loop
                            muted
                            playsInline
                            disablePictureInPicture
                            disableRemotePlayback
                            className="footer-rabbit"
                        />
                    </div>

                    <div className="footer-copyright">
                        2025 UIUX Design Portfolio
                    </div>
                </div>

            </div>
        </section>
    );


};

export default Contact;
