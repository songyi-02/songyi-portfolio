import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WorkPreview.css';
import { col1Data, col2Data, col3Data } from '../data/WorkPreview';

gsap.registerPlugin(ScrollTrigger);

const WorkPreview = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // --- Part 1: Preview Section (Parallax) ---
            gsap.to([".col-1", ".col-3"], {
                y: -400,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });

            gsap.fromTo(".col-2",
                { y: -200 },
                {
                    y: 200,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="work" className="WorkPreview" ref={sectionRef}>
            <div className="container" style={{ maxWidth: '100%', padding: 0 }}>
                <div className="parallax-container">
                    <div className="parallax-column col-1">
                        {col1Data.map(item => (
                            <div key={item.id} className="work-preview-box">
                                {item.image ? (
                                    <img src={item.image} alt={`Project ${item.id}`} className="work-preview-img" />
                                ) : (
                                    <div className="work-preview-placeholder">Project {item.id}</div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="parallax-column col-2">
                        {col2Data.map(item => (
                            <div key={item.id} className="work-preview-box">
                                {item.image ? (
                                    <img src={item.image} alt={`Project ${item.id}`} className="work-preview-img" />
                                ) : (
                                    <div className="work-preview-placeholder">Project {item.id}</div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="parallax-column col-3">
                        {col3Data.map(item => (
                            <div key={item.id} className="work-preview-box">
                                {item.image ? (
                                    <img src={item.image} alt={`Project ${item.id}`} className="work-preview-img" />
                                ) : (
                                    <div className="work-preview-placeholder">Project {item.id}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkPreview;
