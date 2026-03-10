import React, { useLayoutEffect, useRef } from 'react';
import './Work.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WorkPreview from '../components/WorkPreview';
import DesignProcess from '../components/DesignProcess';

import papa1 from '../assets/img/papa1.png';
import papa2 from '../assets/img/papa2.png';

import f11 from '../assets/img/f11.png';
import f12 from '../assets/img/f12.png';
import f13 from '../assets/img/f13.png';
import workTeam1 from '../assets/img/work_team1.png';
import workTeam2 from '../assets/img/work_team2.png';
import workTeam22 from '../assets/img/work_team2_2.png';
import workPersonal from '../assets/img/work_personal.png';
import papaVideo2 from '../assets/video/papa_video2.mp4';
import papaVideo3 from '../assets/video/papa_video3.mp4';
import force1Video from '../assets/video/force1_video.mp4';


import clone1 from '../assets/img/clone/clone1.png';
import clone2 from '../assets/img/clone/clone2.png';
import clone3 from '../assets/img/clone/clone3.png';
import clone4 from '../assets/img/clone/clone4.png';
import clone5 from '../assets/img/clone/clone5.png';
import clone6 from '../assets/img/clone/clone6.png';

// import process1 from '../assets/img/process/process1.png'; // DesignProcess.jsx로 이동
// import process2 from '../assets/img/process/process2.png';
// import process3 from '../assets/img/process/process3.png';
// import process4 from '../assets/img/process/process4.png';
// import process5 from '../assets/img/process/process5.png';
// import process6 from '../assets/img/process/process6.png';

gsap.registerPlugin(ScrollTrigger);

// 2. Work Intro (슬라이드) 데이터 - 사진과 동일하게 구성
const introSlides = [
    {
        type: "standard",
        tag: "Team Project 1",
        title: "Website Redesign",
        subtitle: "파파레서피 웹사이트 리뉴얼",
        desc: "정제된 톤앤매너와 스토리 중심의 UX를 통해\n브랜드가 전달하고자 하는 신뢰의 방향을 재정의한 웹사이트 리뉴얼 프로젝트입니다.\n자연 유래 원료의 가치를 2030 타겟에게 효과적으로 전달하는 데 집중했습니다.",
        info: "[기간]  2025. 11. 25 ~ 2025. 12. 29\n[Used Tech]  Figma, Photoshop, HTML, CSS, Javascript, ChatGPT, Midjourney",
        btn1: "View Plan",
        link1: "https://www.figma.com/proto/WRlJDV33kVTYjwnK58G93e/%EA%B0%95%EC%86%A1%EC%9D%B4-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%9E%91%EC%97%85?page-id=1%3A2&node-id=1-5747&viewport=633%2C549%2C0.02&t=8PFSi49gHbMG2pZQ-1&scaling=min-zoom&content-scaling=fixed",
        btn2: "Visit Site",
        link2: "https://suin-yu.github.io/paparecipe/",
        icon: <svg viewBox="0 0 24 24"><path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z" /></svg>,
        img: workTeam1,
        video: papaVideo2
    },
    {
        type: "grid",
        mainTitle: "What I do",
        sections: [
            {
                side: "left",
                img: papa1,
                title: "제품 페이지 UI 및 비주얼 구성",
                desc: "메인 페이지와 제품 상세 페이지의 UI 디자인을 전반적으로 담당했습니다. 라인별 제품 구성을 기준으로 화면 구조를 정리해 브랜드 전반의 통일감을 유지했고, 미드저니 AI 를 활용해 무드에 맞는 영상 요소를 제작·적용해 화면의 단조로움을 보완했습니다.",
                btn1: "View Plan",
                link1: "https://www.figma.com/proto/WRlJDV33kVTYjwnK58G93e/%EA%B0%95%EC%86%A1%EC%9D%B4-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%9E%91%EC%97%85?page-id=1%3A2&node-id=1-5747&viewport=633%2C549%2C0.02&t=8PFSi49gHbMG2pZQ-1&scaling=min-zoom&content-scaling=fixed",
                btn2: "Visit Site",
                link2: "https://suin-yu.github.io/paparecipe/"
            },
            {
                side: "right-top",
                img: papa2,
                title: "MidJourney AI 를 활용한 배너",
                desc: "프로모션에 사용될 배너 비주얼을 미드저니 AI를 활용해 제작했습니다. 브랜드 이미지에 맞는 무드와 톤을 유지하면서, 화면 전반의 균형을 고려해 비주얼을 구성했습니다."
            },
            {
                side: "right-bottom",
                video: papaVideo3, // User mentioned papa_video3, applying to both right small boxes
                title: "제품 프로모션 디자인",
                desc: "브랜드 이미지에 맞춰 AI를 활용해 리뉴얼 패키지 비주얼을 제작하고, After Effects를 활용해 제품 회전 모션을 적용해 메시지가 자연스럽게 전달되도록 했습니다."
            }
        ],
        icon: <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /></svg>
    },
    {
        type: "standard",
        tag: "Team Project 2",
        title: "ChatBot App Design",
        subtitle: "Force1 팬덤 앱 디자인",
        desc: "국내 F1 팬들을 위한 팬덤 플랫폼 Force1을 기획·디자인한 프로젝트입니다.\n정보 소비에 머무르던 기존 환경에서 벗어나,팬들이 자연스럽게 몰입하고,\n소통할 수 있는 구조를 만드는 데 집중했습니다.",
        info: "[기간]  2026. 01. 02 ~ 2026. 01. 25\n[Used Tech]  Figma, Photoshop, HTML, CSS, Javascript, ChatGPT, Midjourney",
        btn1: "View Plan",
        link1: "https://www.figma.com/proto/WRlJDV33kVTYjwnK58G93e/%EA%B0%95%EC%86%A1%EC%9D%B4-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%9E%91%EC%97%85?page-id=1%3A3&node-id=1-20265&viewport=638%2C491%2C0.02&t=i4oPuw9hI0lpOFhh-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A27677",
        btn2: "Visit Site",
        link2: "https://force1-five.vercel.app/splash",
        icon: <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>,
        imgMain: workTeam2,
        imgLogo: workTeam22
    },
    {
        type: "f1_layout",
        mainTitle: "What I do",
        tag: "Team Project 2",
        title1: "온보딩 디자인",
        img1: f11,
        title2: "글라스모피즘을 활용한 UI디자인",
        img2: f12,
        title3: "실시간 채팅 및 하트 코딩 구현",
        img3: f13,
        video3: force1Video,
        desc3: "실시간 채팅 기능과 하트 인터랙션을 디자인하고 직접 구현했습니다. 채팅 입력 시 메시지가 실시간으로 화면에 표시되도록 처리했으며, 하트 버튼을 누르면 즉각적인 시각적 반응이 나타나도록 인터랙션을 구성했습니다.",
        mainDesc: "온보딩 페이지와 메인 페이지 일부 UI 디자인을 담당하며,<br class='br-1440'/>\n글라스모피즘 스타일을 적용해 시각적 깊이와 일관성을<br class='br-1440'/>\n갖춘 화면을 설계했습니다. 이후 React를 활용해<br class='br-1440'/>\n설계한 UI 구조를 직접 구현했습니다.",
        btn1: "View Plan",
        link1: "https://www.figma.com/proto/WRlJDV33kVTYjwnK58G93e/%EA%B0%95%EC%86%A1%EC%9D%B4-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%9E%91%EC%97%85?page-id=1%3A3&node-id=1-20265&viewport=638%2C491%2C0.02&t=i4oPuw9hI0lpOFhh-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A27677",
        btn2: "Visit Site",
        link2: "https://force1-five.vercel.app/splash",
        icon: <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /></svg>
    },
    {
        type: "standard",
        tag: "Personal Project",
        title: "App Design",
        subtitle: "Nutripick 다이어트 식품 커머스",
        desc: "광고와 복잡한 정보에 지친 소비자를 위해\n직관적인 비교와 신뢰할 수 있는 맞춤 정보를 제공하는 다이어트 식품 앱입니다.\n성분 비교, 리뷰, 커머스가 분리되어 있던 기존 서비스의 한계를 개선하여\n정보 탐색부터 구매까지 한 번에 이어지는 통합 플랫폼으로 차별화했습니다.",
        info: "[기간]  2025. 09. 15 ~ 2025. 10. 21\n[Used Tech]  Figma, Photoshop, ChatGPT, Midjourney",
        btn1: "View Plan",
        link1: "https://www.figma.com/proto/WRlJDV33kVTYjwnK58G93e/%EA%B0%95%EC%86%A1%EC%9D%B4-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%9E%91%EC%97%85?page-id=65%3A6270&node-id=65-6271&viewport=510%2C285%2C0.17&t=Dt3q9fFEVe0osw2W-1&scaling=min-zoom&content-scaling=fixed",
        btn2: "Visit Figma",
        link2: "https://www.figma.com/proto/WRlJDV33kVTYjwnK58G93e/%EA%B0%95%EC%86%A1%EC%9D%B4-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%9E%91%EC%97%85?page-id=0%3A1&node-id=1-18541&viewport=-1109%2C191%2C0.25&t=KYfibT9cina7DMMz-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A18541",
        icon: <svg viewBox="0 0 24 24"><path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z" /></svg>,
        img: workPersonal
    }
];

const cloneCodingData = [
    { id: "01", title: "Musign", img: clone1, link: "https://clone-coding-musign.vercel.app" },
    { id: "02", title: "Y Studio", img: clone2, link: "https://clone-coding-ystudio.vercel.app" },
    { id: "03", title: "Concierge", img: clone3, link: "https://clone-coding-dobda.vercel.app" },
    { id: "04", title: "Crew a la mode", img: clone4, link: "https://clone-coding-cruella.vercel.app" },
    { id: "05", title: "Daebang", img: clone5, link: "https://clone-coding-daebang.vercel.app" },
    { id: "06", title: "Phomain", img: clone6, link: "https://clone-coding-phomein.vercel.app" },
];

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

const Work = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);
    const mainRef = useRef(null);
    const introSectionRef = useRef(null);
    const stickyWrapperRef = useRef(null);


    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // --- Part 2: Sticky Layered Intro Slides ---
            const slides = gsap.utils.toArray(".intro-slide");
            const stepBlocks = gsap.utils.toArray(".step-block");
            const slideCount = slides.length;

            const introTl = gsap.timeline({
                scrollTrigger: {
                    trigger: introSectionRef.current,
                    pin: true,
                    start: "top top",
                    end: "+=" + (slideCount * 2000 + 2000), // ✅ 거리를 약간 조절 (3000 -> 2000)
                    scrub: 1,
                }
            });

            slides.forEach((slide, i) => {
                const startTime = i;

                // 텍스트 애니메이션 (Split Text)
                const chars = slide.querySelectorAll(".y");
                if (chars.length > 0 && i === 0) {
                    gsap.set(chars, { y: "120%" }); // 초기 숨김 상태 강제 설정
                    // 첫 번째 슬라이드: 화면에 들어올 때 애니메이션 실행
                    gsap.to(chars, {
                        y: "0%",
                        duration: 0.8,
                        ease: "power4.out",
                        stagger: 0.03,
                        scrollTrigger: {
                            trigger: introSectionRef.current,
                            start: "top 60%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }

                // 슬라이드 등장
                if (i > 0) {
                    let slideVars = {
                        opacity: 1,
                        visibility: 'visible',
                        duration: 0.5
                    };

                    // i > 0 모든 슬라이드의 텍스트 애니메이션 트리거 추가 (Personal Project와 동일 속도)
                    if (chars.length > 0) {
                        slideVars.onStart = () => {
                            gsap.fromTo(chars, 
                                { y: "120%" },
                                {
                                    y: "0%",
                                    duration: 0.8,
                                    ease: "power4.out",
                                    stagger: 0.03,
                                    overwrite: true
                                }
                            );
                        };
                        slideVars.onReverseComplete = () => {
                            gsap.set(chars, { y: "120%", overwrite: true });
                        };
                    }

                    introTl.to(slide, slideVars, startTime);
                }

                // 스테퍼 가로 바 진행 (0~1, 1~2, 2~3, 3~4)
                introTl.to(stepBlocks[i].querySelector(".step-progress-fill"), {
                    width: "100%",
                    duration: 1,
                    ease: "none"
                }, startTime);

                // 스테퍼 블록 확장
                introTl.to(stepBlocks[i], {
                    flex: 3,
                    duration: 0.1
                }, startTime);

                if (i > 0) {
                    introTl.to(stepBlocks[i - 1], {
                        flex: 1,
                        duration: 0.1
                    }, startTime);
                }

                // 이전 슬라이드 퇴장 (마지막 슬라이드 제외)
                if (i < slideCount - 1) {
                    introTl.to(slide, {
                        opacity: 0,
                        visibility: 'hidden',
                        duration: 0.5
                    }, startTime + 1);
                }
            });

            // ✅ 4번째 슬라이드 끝나고 "1번 스크롤" 뒤에 올라오도록 대기(빈 구간) 축소
            introTl.to({}, { duration: 1 });

            // 처음엔 숨김을 확실히 강제 (혹시라도 보이면 막아줌)
            introTl.set(".frontend-work-section", { opacity: 0, y: 120 }, 0);
            // Title 초기 설정 (Wipe 효과 준비)
            introTl.set(".frontend-title", { clipPath: "inset(0 0% 0 0)" }, 0);

            // ✅ 대기 시간 끝난 뒤(">")에 프론트엔드가 "카드처럼" 올라오며 등장
            introTl.to(".frontend-work-section", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, ">");


            // ✅ Marquee Text Spread & Background Color Change
            const marqueeTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".marquee-area",
                    start: "top center", // 마퀴 영역이 화면 중앙에 오면 시작
                    end: "bottom center", // 마퀴가 끝날 때쯤 완료
                    scrub: 1
                }
            });

            marqueeTl
                .to(".marquee-text-left", { x: "-100vw", opacity: 0 }, 0) // 왼쪽으로 날아감
                .to(".marquee-text-right", { x: "100vw", opacity: 0 }, 0)  // 오른쪽으로 날아감
                .to(".frontend-work-section", { backgroundColor: "#1D1F24" }, 0); // 배경 어두운색으로 변경 (Process 섹션까지 유지)

            // ✅ Frontend Work Title Animation (SplitText 기반 캐릭터 리빌)
            const fTitleChars = mainRef.current.querySelectorAll(".frontend-title .y");
            const fSubtitleChars = mainRef.current.querySelectorAll(".frontend-subtitle .y");

            gsap.set([fTitleChars, fSubtitleChars], { y: "120%" });

            gsap.to(fTitleChars, {
                scrollTrigger: {
                    trigger: ".frontend-header",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: "0%",
                duration: 1.0,
                stagger: 0.03,
                ease: "power4.out"
            });

            gsap.to(fSubtitleChars, {
                scrollTrigger: {
                    trigger: ".frontend-header",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                y: "0%",
                duration: 1.2,
                stagger: 0.01,
                ease: "power3.out",
                delay: 0.3
            });

            // ✅ Design Process Title Reveal (마퀴 뒤에 바로 나오도록 트리거 조정)
            const processTitleChars = mainRef.current.querySelectorAll(".process-title .y");
            if (processTitleChars.length > 0) {
                gsap.fromTo(processTitleChars, 
                    { y: "100%", opacity: 0 },
                    {
                        y: "0%",
                        opacity: 1,
                        duration: 0.8,
                        ease: "power4.out",
                        stagger: 0.03,
                        scrollTrigger: {
                            trigger: ".marquee-area",
                            start: "bottom 70%", // 마퀴 영역 하단이 화면의 70% 지점에 올 때 (마퀴가 조금 더 사라진 뒤)
                            toggleActions: "play none none reverse",
                        }
                    }
                );
            }

        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef}>
            {/* 1. Preview Section (Extracted) */}
            <WorkPreview />

            {/* 2. Work Intro Section & Seamless Frontend Work */}
            <section className="work-intro-section" ref={introSectionRef}>
                <div className="sticky-wrapper" ref={stickyWrapperRef}>
                    <div className="intro-slides-container">
                        {introSlides.map((slide, index) => (
                            <div key={index} className={`intro-slide ${index === 0 ? 'active' : ''} slide-type-${slide.type}`}>
                                {slide.type === 'standard' ? (
                                    <div className="slide-content-wrapper">
                                        <div className="slide-text-area">
                                            <div className="intro-project-tag"><SplitText text={slide.tag} /></div>
                                            <h2 className="slide-title"><SplitText text={slide.title} /></h2>

                                            <div className="slide-subtitle">{slide.subtitle}</div>
                                            <p className="slide-desc">{slide.desc}</p>
                                            <div className="slide-info">{slide.info?.split('\n').map((line, i) => (
                                                <React.Fragment key={i}>{line}<br /></React.Fragment>
                                            ))}</div>

                                            <div className="slide-buttons">
                                                <a href={slide.link1 || "#"} target={slide.link1 ? "_blank" : "_self"} rel="noopener noreferrer" className="slide-btn">
                                                    {slide.btn1}
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                                </a>
                                                <a href={slide.link2 || "#"} target={slide.link2 ? "_blank" : "_self"} rel="noopener noreferrer" className="slide-btn">
                                                    {slide.btn2}
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="slide-mockup-area">
                                            {slide.img ? (
                                                <div className="mockup-container">
                                                    {slide.video && (
                                                        <video 
                                                            key={slide.video}
                                                            className="mockup-video" 
                                                            src={slide.video} 
                                                            autoPlay 
                                                            muted 
                                                            loop 
                                                            playsInline 
                                                            preload="auto"
                                                        />
                                                    )}
                                                    <img src={slide.img} alt={slide.title} className="mockup-img" style={{ position: 'relative', zIndex: 10 }} />
                                                </div>
                                            ) : slide.imgMain && slide.imgLogo ? (
                                                <div className="mockup-composite team2-container">
                                                    <img src={slide.imgMain} alt="Main" className="team2-img" />
                                                    <img src={slide.imgLogo} alt="Logo" className="team2-logo" />
                                                </div>
                                            ) : (
                                                <div style={{ position: 'relative', width: '900px', height: '650px', background: '#222', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 50px 100px rgba(0,0,0,0.5)' }}>
                                                    <div style={{ color: '#444', fontSize: '24px' }}>iMac Mockup Area</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ) : slide.type === 'f1_layout' ? (
                                    <div className="f1-slide-wrapper">
                                        <h2 className="intro-role-title"><SplitText text={slide.mainTitle} /></h2>
                                        <div className="f1-content-box">
                                            {/* Col 1 */}
                                            <div className="f1-card-col">
                                                <h3 className="f1-col-title">{slide.title1}</h3>
                                                <div className="f1-img-card vertical">
                                                    <img src={slide.img1} alt={slide.title1} />
                                                </div>
                                            </div>
                                            {/* Col 2 */}
                                            <div className="f1-card-col">
                                                <h3 className="f1-col-title">{slide.title2}</h3>
                                                <div className="f1-img-card vertical">
                                                    <img src={slide.img2} alt={slide.title2} />
                                                </div>
                                            </div>
                                            {/* Col 3 */}
                                            <div className="f1-card-col wide">
                                                <h3 className="f1-col-title">{slide.title3}</h3>
                                                <div className="f1-img-card horizontal">
                                                    <div className="img-wrapper">
                                                        {slide.video3 ? (
                                                            <video src={slide.video3} autoPlay muted loop playsInline style={{ width: '100%', height: 'auto', display: 'block' }} />
                                                        ) : (
                                                            <img src={slide.img3} alt={slide.title3} />
                                                        )}
                                                    </div>
                                                    <p className="f1-desc-text">
                                                        {slide.desc3 && slide.desc3.split('\n').map((line, i) => (
                                                            <React.Fragment key={i}>{line}<br /></React.Fragment>
                                                        ))}
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Col 4 (Text + Buttons) */}
                                            <div className="f1-text-panel">
                                                <p className="f1-main-desc" dangerouslySetInnerHTML={{ __html: slide.mainDesc.replace(/\n/g, '<br class="br-desktop"/>') }}></p>
                                                <div className="slide-buttons">
                                                    <a href={slide.link1 || "#"} target={slide.link1 ? "_blank" : "_self"} rel="noopener noreferrer" className="slide-btn">
                                                        {slide.btn1}
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                                    </a>
                                                    <a href={slide.link2 || "#"} target={slide.link2 ? "_blank" : "_self"} rel="noopener noreferrer" className="slide-btn">
                                                        {slide.btn2}
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="grid-slide-wrapper">
                                        <h2 className="intro-role-title"><SplitText text={slide.mainTitle} /></h2>
                                        <div className="grid-layout">
                                            <div className="grid-col left-col">
                                                {slide.sections?.filter(s => s.side === 'left').map((sec, i) => (
                                                    <div key={i} className="grid-card main-card">
                                                        <div className="card-img-box">
                                                            <img src={sec.img} alt={sec.title} />
                                                        </div>
                                                        <div className="card-text-box">
                                                            <h3 className="card-title">{sec.title}</h3>
                                                            <p className="card-desc">{sec.desc}</p>
                                                            <div className="slide-buttons">
                                                                <a href={sec.link1 || "#"} target={sec.link1 ? "_blank" : "_self"} rel="noopener noreferrer" className="slide-btn">
                                                                    {sec.btn1}
                                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                                                </a>
                                                                <a href={sec.link2 || "#"} target={sec.link2 ? "_blank" : "_self"} rel="noopener noreferrer" className="slide-btn">
                                                                    {sec.btn2}
                                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="grid-col right-col">
                                                <div className="right-row top-row">
                                                    {slide.sections?.filter(s => s.side === 'right-top').map((sec, i) => (
                                                        <div key={i} className="grid-card-horizontal">
                                                            <div className="card-img-box small">
                                                                {sec.video ? (
                                                                    <video src={sec.video} autoPlay muted loop playsInline style={{ width: '100%', height: 'auto', display: 'block' }} />
                                                                ) : (
                                                                    <img src={sec.img} alt={sec.title} />
                                                                )}
                                                            </div>
                                                            <div className="card-text-box">
                                                                <h3 className="card-title">{sec.title}</h3>
                                                                <p className="card-desc">{sec.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="right-row bottom-row">
                                                    {slide.sections?.filter(s => s.side === 'right-bottom').map((sec, i) => (
                                                        <div key={i} className="grid-card-horizontal">
                                                            <div className="card-img-box small">
                                                                {sec.video ? (
                                                                    <video src={sec.video} autoPlay muted loop playsInline style={{ width: '100%', height: 'auto', display: 'block' }} />
                                                                ) : (
                                                                    <img src={sec.img} alt={sec.title} />
                                                                )}
                                                            </div>
                                                            <div className="card-text-box">
                                                                <h3 className="card-title">{sec.title}</h3>
                                                                <p className="card-desc">{sec.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="stepper-container">
                        {introSlides.map((slide, index) => (
                            <div key={index} className={`step-block ${index === 0 ? 'active' : ''}`}>
                                <div className="step-icon-box">{slide.icon}</div>
                                <div className="step-progress-bar">
                                    <div className="step-progress-fill"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section >

            {/* 3. Frontend Work Section (Moved outside) */}
            <section className="frontend-work-section" >
                <div className="frontend-container">
                    <div className="frontend-header">
                        <div className="f-title-line">
                            <h2 className="frontend-title"><SplitText text="Frontend " /><span><SplitText text="Work" /></span></h2>
                        </div>
                        <div className="f-subtitle-line">
                            <p className="frontend-subtitle"><SplitText text="UI/UX와 프론트엔드 학습 과정에서 제작한 클론 코딩 프로젝트입니다." /></p>
                        </div>
                    </div>
                    <div className="frontend-list">
                        {cloneCodingData.map((item, index) => (
                            <a key={item.id} className="frontend-item"
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}>
                                <div className="item-text-box">
                                    <span className="item-id">Clone Coding {item.id}</span>
                                    <span className="item-title">{item.title}</span>
                                </div>
                                <div className="item-arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </div>
                                {hoveredIndex === index && (
                                    <div className="item-hover-preview">
                                        <img src={item.img} alt={item.title} />
                                        <div className="read-this">Read this</div>
                                    </div>
                                )}
                            </a>
                        ))}
                    </div>

                    {/* 4. Marquee Section */}
                    <div className="marquee-area">
                        <h1 className="marquee-text marquee-text-left">BEHIND</h1>
                        <h1 className="marquee-text marquee-text-right">THE WORK</h1>
                    </div>

                    {/* 5. Process Section */}
                    <DesignProcess />
                </div>
            </section>
        </div>
    );
};

export default Work;
