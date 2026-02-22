import React, { useLayoutEffect, useRef } from 'react';
import './About.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import rabbitImg from '../assets/img/about_rabbit.png';
import profileImg from '../assets/img/profile.png';
import { aboutValues } from '../data/About.js';
import iconFigma from '../assets/img/icon Figma.png';
import iconPs from '../assets/img/icon Photoshop.png';
import iconAi from '../assets/img/icon Illustrator.png';
import iconAe from '../assets/img/icon After Effects.png'; // 애프터이펙트 추가
import iconPr from '../assets/img/icon Premiere Pro.png';
import iconHtml from '../assets/img/icon html.png';
import iconCss from '../assets/img/icon css.png';
import iconReact from '../assets/img/icon react.png';
import iconJava from '../assets/img/icon java.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const pathRef = useRef(null);
    const profileSectionRef = useRef(null);
    const profileLineRef = useRef(null);



    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // --- Part 1: Top Slogan & Cards Animation ---
            gsap.set(".slogan-line", { clipPath: "inset(0 100% 0 0)", opacity: 1 });
            gsap.set(".value-card", { y: 100, opacity: 0 });
            gsap.set(".about-rabbit-img", { y: 50, opacity: 0, scale: 0.9 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 50%",
                    end: "+=800",
                    scrub: 1,
                }
            });

            // 1. Title
            tl.to(".slogan-line", {
                clipPath: "inset(0 0% 0 0)",
                duration: 1.5,
                stagger: 0.5,
                ease: "power4.out"
            });

            // 2. Underline
            const path = pathRef.current;
            if (path) {
                const length = path.getTotalLength();
                gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
                tl.to(path, {
                    strokeDashoffset: 0,
                    duration: 1.2,
                    ease: "power2.inOut"
                }, "-=0.8");
            }

            // 3. Rabbit
            tl.to(".about-rabbit-img", {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "back.out(1.7)"
            }, "-=0.5");

            // Rabbit Floating
            gsap.to(".about-rabbit-img", {
                y: -20,
                rotation: 2,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 0
            });

            // 4. Cards
            tl.to(".value-card", {
                y: 0,
                opacity: 1,
                duration: 1.0,
                stagger: 0.8,
                ease: "power2.out" // 조금 더 부드러운 감속
            }, "-=0.8");

            // 타임라인 끝에 버퍼 추가 (뚝 끊김 방지)
            tl.to({}, { duration: 1 });


            // --- Profile Section Animation ---
            gsap.set(".profile-block", { y: 100, opacity: 0 }); // 더 아래에서 시작하도록 변경(기존 50)

            const profileLine = profileLineRef.current;
            if (profileLine) {
                const len = profileLine.getTotalLength();
                gsap.set(profileLine, { strokeDasharray: len, strokeDashoffset: len });
            }

            // 1. 라인 그리기 (스크롤에 맞춰 쫀득하게 그려짐)
            if (profileLine) {
                gsap.to(profileLine, {
                    scrollTrigger: {
                        trigger: profileSectionRef.current,
                        start: "top 85%",
                        end: "center 80%", // 더 빨리 끝나도록 조정 (기존 55%)
                        scrub: 1
                    },
                    strokeDashoffset: 0,
                    ease: "none"
                });
            }

            // 2. 텍스트 블록 (스크롤 속도와 상관없이 화면에 보이면 자기 속도로 부드럽게 슈욱!)
            gsap.to(".profile-block", {
                scrollTrigger: {
                    trigger: profileSectionRef.current,
                    start: "top 65%", // 라인이 어느 정도 그려졌을 때 시작
                    toggleActions: "play none none reverse" // 다시 올라가면 사라졌다가 내려오면 다시 재생
                },
                y: 0,
                opacity: 1,
                duration: 1.8, // 스크롤을 멈춰도 이 시간 동안 천천히 올라옵니다
                stagger: 0.4,  // 요소 간의 부드러운 순차 등장
                ease: "power3.out"
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="section" ref={sectionRef}>
            <div className="container about-container">
                {/* Main Slogan Area */}
                <div className="about-header">
                    <h2 className="about-slogan">
                        <div className="slogan-line">Relentless in <span className="italic"> detail</span></div>
                        <div className="slogan-line">responsible to the end.</div>
                    </h2>
                    <div className="slogan-underline">
                        <svg viewBox="0 0 302 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                ref={pathRef}
                                d="M0.0957031 17.0761C17.1017 13.7419 72.7214 7.25547 159.152 7.98292C267.19 8.89223 318.708 11.0922 295.7 12.9105C272.692 14.7287 129.954 17.7125 58.0957 19.5312C44.5957 19.8729 12.0957 17.0724 69.6203 12.9845C127.156 8.89587 233.913 -0.0769605 280.596 0.529248"
                                stroke="#F8F8FB"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                </div>

                {/* Rabbit Character Area */}
                <div className="about-character-area">
                    <img src={rabbitImg} alt="main character" className="about-rabbit-img" />
                </div>

                {/* Value Cards Area */}
                <div className="about-values-grid">
                    {aboutValues.map((val) => (
                        <div key={val.id} className="value-card">
                            <div
                                className="value-card-image"
                                style={{
                                    backgroundImage: `url(${val.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            ></div>
                            <span className="value-number">{val.id}</span>
                            <h3 className="value-title">{val.title}</h3>
                            <p className="value-description" style={{ whiteSpace: 'pre-line' }}>{val.description}</p>
                            <div className="value-tags">
                                {val.tags.map((tag, idx) => (
                                    <span key={idx} className="value-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Profile Section --- */}
                <div className="profile-section" ref={profileSectionRef}>

                    {/* SVG Curve Line + Title */}
                    <div className="profile-title-area">
                        <div className="profile-curve-line">
                            <svg xmlns="http://www.w3.org/2000/svg" width="373" height="128" viewBox="0 0 373 128" fill="none">
                                <path ref={profileLineRef} d="M55.6869 52.5073C37.3615 59.054 2.57978 77.1791 10.0555 97.3052C19.4001 122.463 131.207 107.193 214.703 93.5622C281.499 82.6577 341.042 57.616 362.464 46.4583C372.571 40.0901 382.732 25.3215 342.516 17.1923C292.247 7.03075 143.488 -4.07557 26.7183 63.4467C4.86941 78.8577 -23.7063 112.63 36.7821 124.434C112.393 139.188 298.866 93.0444 337.627 63.9055C376.387 34.7666 376.956 2.44941 296.936 0.626229C228.253 -0.938638 191.691 12.1385 166.246 23.0157" stroke="white" strokeWidth="1" />
                            </svg>
                        </div>
                        <h2 className="profile-main-title">About Me</h2>
                    </div>

                    {/* Content Grid */}
                    <div className="profile-content-grid">

                        {/* 1. Left: Info & Career */}
                        <div className="profile-col profile-left">
                            <div className="profile-block">
                                <h3 className="profile-sub-title">Profile</h3>
                                <p className="profile-text">
                                    강송이 <span className="divider">|</span> ISFP<br />
                                    Kang Song Yi<br />
                                    2000. 02. 02
                                </p>
                                <p className="profile-text mt-20">
                                    010-9983-8557<br />
                                    hee6544000@naver.com
                                </p>
                            </div>
                            <div className="profile-block mt-50">
                                <h3 className="profile-sub-title">CAREER</h3>
                                <p className="profile-text">
                                    2023. 09 - 2024. 09 &nbsp;&nbsp; MBC 인제스트<br />
                                    2020. 12&nbsp; - 2022. 12 &nbsp;&nbsp; 연합뉴스TV 인제스트
                                </p>
                            </div>
                        </div>

                        {/* 2. Center: Image */}
                        <div className="profile-col profile-center">
                            <div className="profile-img-box">
                                <img src={profileImg} alt="Profile" />
                            </div>
                        </div>

                        {/* 3. Right: Education & Tools */}
                        <div className="profile-col profile-right">
                            <div className="profile-block">
                                <h3 className="profile-sub-title">EDUCATION</h3>
                                <p className="profile-text">
                                    2023 강남 이젠아카데미 UIUX과정 수료<br />
                                    2020 신안산대학교 시각디자인과 졸업<br />
                                    2019 인천초은고등학교 졸업
                                </p>
                            </div>
                            <div className="profile-block mt-50">
                                <h3 className="profile-sub-title">WORK TOOLS</h3>
                                <div className="tools-grid">
                                    <img src={iconFigma} alt="Figma" className="tool-icon" />
                                    <img src={iconPs} alt="Photoshop" className="tool-icon" />
                                    <img src={iconAi} alt="Illustrator" className="tool-icon" />
                                    <img src={iconAe} alt="After Effects" className="tool-icon" /> {/* 순서상 여기에 넣음 */}
                                    <img src={iconPr} alt="Premiere" className="tool-icon" />
                                    <img src={iconHtml} alt="HTML" className="tool-icon" />
                                    <img src={iconCss} alt="CSS" className="tool-icon" />
                                    <img src={iconReact} alt="React" className="tool-icon" />
                                    <img src={iconJava} alt="Java" className="tool-icon" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
