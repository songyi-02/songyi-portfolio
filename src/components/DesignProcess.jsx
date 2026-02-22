import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { designProcessData } from '../assets/data/DesignProcess';
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

            // ✅ Individual Card Floating Animation (Sync Original & Clone)
            const cards = gsap.utils.toArray(".process-card");
            const dataLength = designProcessData.length;
            
            for (let i = 0; i < dataLength; i++) {
                const duration = 2.5 + Math.random() * 1.5;
                const delay = Math.random() * 2;
                const yVal = i % 2 === 0 ? -25 : 25;
                
                // 원본 카드와 클론 카드가 동일한 애니메이션을 갖도록 함 (끊김 방지)
                gsap.to([cards[i], cards[i + dataLength]], {
                    y: yVal,
                    duration: duration,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true,
                    delay: delay
                });
            }


            ScrollTrigger.refresh();

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
