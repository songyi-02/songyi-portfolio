import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import './Home.css';
import bgVideo from '../assets/video/home_bg3.mp4';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const sectionRef = useRef(null);
    const circleRef = useRef(null);
    const videoRef = useRef(null);
    const [isLocked, setIsLocked] = useState(() => window.scrollY < 50);
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
                setIsLocked(false);
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
                setIsLocked(false);
            }
        }
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

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
    }, []);

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
                <div className="hero-text text-uiux">UIUX</div>
                <div className="hero-text text-designer">Designer</div>
                <div className="hero-text text-songyi">songyi’s</div>
                <div className="hero-text text-portfolio">Portfolio</div>
            </div>

            <div className="transition-circle" ref={circleRef}></div>
        </section>
    );
};

export default Home;
