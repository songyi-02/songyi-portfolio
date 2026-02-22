import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hobby.css";
import { hobbySlides } from "../assets/data/Hobby";

gsap.registerPlugin(ScrollTrigger);

const Hobby = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const metaRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const slidesRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // Initial Setup
            gsap.set([metaRef.current, titleRef.current], { opacity: 0, y: 30 });
            gsap.set(descRef.current, { opacity: 0, y: 0 }); // In place, just hidden

            slidesRef.current.forEach((el, i) => {
                if (!el) return;
                const { zStart } = hobbySlides[i];
                gsap.set(el, {
                    opacity: 0,
                    filter: "blur(10px)",
                    z: zStart
                });
            });

            // --- Entrance Animation (Smooth Slide Up) ---
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
                        trigger: sectionRef.current,
                        start: "top bottom", // When Hobby section enters from the bottom
                        end: "top top",      // Until it pins at the top
                        scrub: 1             // Linked to scroll for a "스윽" feeling
                    }
                }
            );

            // Master Timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=400%", // 더 빠른 스크롤 (Speed up)
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1
                }
            });

            // --- Intro ---
            tl.to([metaRef.current, titleRef.current], {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            }, 0);

            // --- Swap Sequence ---
            // Slide 1 (0~2~4), Slide 2 (2~4~6), Slide 3 (4~6~8), Slide 4 (6~8~10)
            // Slide 4 is the trigger for text swap -> around 6.0
            const swapTime = 6;

            // Text 1 Fades Out
            tl.to(titleRef.current, {
                opacity: 0,
                duration: 1,
                ease: "power2.in"
            }, swapTime);

            // Text 2 Fades In
            tl.fromTo(descRef.current,
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power2.out"
                },
                swapTime + 0.8
            );

            // Images Glide (Crossfade Sequence)
            slidesRef.current.forEach((el, i) => {
                const { zStart, zMid, zEnd } = hobbySlides[i];
                // Duration 2.0, Offset >-2.0
                // This means Next Slide starts EXACTLY when Previous Slide finishes entering (is at peak).
                // Prev: In(0-2), Out(2-4). Next: In(2-4), Out(4-6).
                // Perfect crossfade, never more than 2 active.
                const offset = i === 0 ? 0 : `>-2.0`;

                tl.fromTo(el,
                    {
                        opacity: 0, filter: "blur(10px)", z: zStart
                    },
                    {
                        opacity: 1, filter: "blur(0px)", z: zMid,
                        duration: 2,
                        ease: "none"
                    },
                    offset
                );

                tl.to(el,
                    {
                        opacity: 0, filter: "blur(2px)", z: zEnd,
                        duration: 2,
                        ease: "none"
                    },
                    ">"
                );
            });

            tl.to({}, { duration: 1.5 }); // End buffer

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="hobby-section">
            <div className="hobby-container" ref={containerRef}>
                <div className="hobby-content">
                    <p className="hobby-meta" ref={metaRef}>My hobby</p>

                    <div className="hobby-text-wrapper">
                        <h2 className="hobby-title" ref={titleRef}>
                            그림을 그리고, 뜨개질처럼 손으로 만드는 활동과<br />
                            직접 눌러보고 탐구하는 시간을 즐깁니다.
                        </h2>
                        <p className="hobby-description" ref={descRef}>
                            일상에서의 모습은<br />
                            작업에서도 자연스럽게 이어집니다
                        </p>
                    </div>
                </div>

                <div className="hobby-slides-portal">
                    {hobbySlides.map((slide, i) => (
                        <div
                            key={i}
                            ref={(el) => (slidesRef.current[i] = el)}
                            className="hobby-slide rounded-5fx"
                            style={{
                                left: slide.left,
                                right: slide.right,
                                top: slide.top,
                                bottom: slide.bottom,
                                width: slide.width,
                                height: 'auto',
                            }}
                        >
                            <img src={slide.src} alt={`Hobby ${slide.id}`} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hobby;
