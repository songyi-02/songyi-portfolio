import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import './Home.css';
import bgVideo from '../assets/video/home_bg3.mp4';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { homeData } from '../assets/data/Home';
gsap.registerPlugin(ScrollTrigger);

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

const Home = () => {
    const sectionRef = useRef(null);
    const circleRef = useRef(null);
    const videoRef = useRef(null);
    const [isResetted, setIsResetted] = useState(false);
    const [resetKey, setResetKey] = useState(0);

    // 1. 스크롤 잠금 제어 (비디오 재생 중)
    // 1. 스크롤 잠금 제어 (비디오 재생 중) - 잠시 주석 처리
    // useEffect(() => {
    //     if (isLocked) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'auto';
    //     }
    //     return () => {
    //         document.body.style.overflow = 'auto';
    //     };
    // }, [isLocked]);

    // 2. 페이지 최상단 리셋 로직
    useEffect(() => {
        const handleScrollReset = () => {
            if (window.scrollY === 0) {
                // 상단 도착 시 초기화 (다시 올라올 때는 락을 걸지 않음)
                setIsResetted(true);
                setResetKey(prev => prev + 1);

                if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play().catch(() => { });
                }

                if (sectionRef.current) {
                    sectionRef.current.style.visibility = "visible";
                    sectionRef.current.style.opacity = "1";
                }
            }
        };

        window.addEventListener('scroll', handleScrollReset);
        return () => window.removeEventListener('scroll', handleScrollReset);
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.7;
        }
    }, []);

    const handleTimeUpdate = () => {
        if (videoRef.current && videoRef.current.duration) {
            if (videoRef.current.currentTime >= videoRef.current.duration - 0.5) {
                // setIsLocked(false); // 미사용 상태 제거
            }
        }
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // ✅ Hero Text Reveal Animation
            const heroChars = sectionRef.current.querySelectorAll(".hero-text .y");
            if (heroChars.length > 0) {
                gsap.fromTo(heroChars, 
                    { y: "130%" },
                    {
                        y: "0%",
                        duration: 1.2,
                        ease: "power4.out",
                        stagger: 0.05,
                        delay: 0.5,
                        overwrite: true // 중복 실행 방지
                    }
                );
            }

            tl.to(".hero-content", {
                y: -150,
                opacity: 0,
                duration: 1.5,
                ease: "power2.inOut"
            }, 0);

            tl.to(circleRef.current, {
                scale: 150,
                ease: "none",
                duration: 2.5
            }, 0.2);

            tl.to({}, { duration: 1.5 });

            ScrollTrigger.create({
                animation: tl,
                trigger: sectionRef.current,
                start: "top top",
                end: "+=250%",
                scrub: 1,
                pin: true,
                pinSpacing: false,
                onLeave: () => {
                    gsap.set(sectionRef.current, { autoAlpha: 0 });
                },
                onEnterBack: () => {
                    gsap.set(sectionRef.current, { autoAlpha: 1 });
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, [resetKey]); // 리셋될 때마다 애니메이션 재실행

    return (
        <section id="home" className="section hero" ref={sectionRef}>
            <video
                ref={videoRef}
                className="hero-video"
                autoPlay
                muted
                playsInline
                onTimeUpdate={handleTimeUpdate}
            >
                <source src={bgVideo} type="video/mp4" />
            </video>

            <div key={resetKey} className={`hero-content ${isResetted ? 'resetted' : ''}`}>
                {homeData.map((item) => (
                    <div key={item.id} className={`hero-text ${item.className}`}>
                        {item.split ? (
                            <SplitText text={item.text} />
                        ) : (
                            <span style={{ display: 'inline-block' }}>
                                <span className="y_">
                                    <span className="y">{item.text}</span>
                                </span>
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <div className="transition-circle" ref={circleRef}></div>
        </section>
    );
};

export default Home;
