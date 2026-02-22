import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { designProcessData } from '../data/DesignProcess';
import './DesignProcess.css';

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

const DesignProcess = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // ✅ Process Cards Infinite Marquee loop
            gsap.to(".process-card-wrapper", {
                xPercent: -50,
                ease: "none",
                duration: 30,
                repeat: -1
            });

            // ✅ Individual Card Floating Animation
            const cardElements = gsap.utils.toArray(".process-card");
            cardElements.forEach((card, i) => {
                gsap.to(card, {
                    y: i % 2 === 0 ? -15 : 15,
                    duration: 2.5 + Math.random() * 1.5,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true,
                    delay: Math.random() * 2
                });
            });

            // ✅ Title Animation (intro-project-tag 스타일과 동일하게)
            const titleChars = sectionRef.current.querySelectorAll(".process-title .y");
            
            // 초기 상태 강제 (이미 CSS에 있지만 JS에서도 확실히 설정)
            gsap.set(titleChars, { y: "100%" });

            gsap.to(titleChars, {
                y: "0%",
                duration: 0.8,
                ease: "power4.out",
                stagger: 0.03,
                scrollTrigger: {
                    trigger: sectionRef.current, // 트리거를 현재 섹션으로 명시
                    start: "top 80%", // 좀 더 빨리 시작되도록 조정
                    toggleActions: "play none none reverse",
                }
            });

            // 모든 요소가 로드된 후 정확한 위치 계산을 위해 즉시 및 지연 리프레시 실행
            ScrollTrigger.refresh();
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 500); 
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="process-section" ref={sectionRef}>
            <h2 className="process-title">
                <SplitText text="Design Process" />
            </h2>

            <div className="process-card-track">
                <div className="process-card-wrapper">
                    {/* Set 1 */}
                    {designProcessData.map((item, i) => (
                        <div key={i} className="process-card" style={{ width: item.w, marginRight: '44px', marginTop: item.offset ? '70px' : '0' }}>
                            <img src={item.img} alt={`Process ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    ))}

                    {/* Set 2 (Duplicate) */}
                    {designProcessData.map((item, i) => (
                        <div key={`clone-${i}`} className="process-card" style={{ width: item.w, marginRight: '44px', marginTop: item.offset ? '70px' : '0' }}>
                            <img src={item.img} alt={`Process ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="process-desc">
                <span className="desc-line">'나'라는 사람을 하나의 UX 대상으로 정의하고,</span>
                <span className="desc-line">사고 방식과 판단 기준이 드러나도록 포트폴리오를 구조화했습니다.</span>
            </div>
        </div>
    );
};

export default DesignProcess;
