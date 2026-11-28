
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./MauxisIntro.css";

function MauxisIntro({ onComplete }) {
  const introRef = useRef(null);
  const introducingRef = useRef(null);
  const mauxisRef = useRef(null);
  const lightRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete?.();
        },
      });

      gsap.set(introducingRef.current, {
        opacity: 0,
        filter: "blur(18px)",
        scale: 0.98,
      });

      gsap.set(mauxisRef.current, {
        opacity: 0,
        filter: "blur(20px)",
        scale: 0.98,
      });

      gsap.set(lightRef.current, {
        x: "-120%",
        opacity: 0,
      });

      tl.to(introducingRef.current, {
        opacity: 0.45,
        filter: "blur(8px)",
        duration: 0.45,
        ease: "power2.out",
      })
        .to(
          lightRef.current,
          {
            x: "120%",
            opacity: 1,
            duration: 0.9,
            ease: "power2.inOut",
          },
          0.15
        )
        .to(
          introducingRef.current,
          {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
          },
          0.45
        )
        .to(introducingRef.current, {
          opacity: 0,
          filter: "blur(14px)",
          duration: 0.45,
          ease: "power2.in",
          delay: 0.35,
        })
        .set(lightRef.current, {
          x: "-120%",
          opacity: 0,
        })
        .to(
          mauxisRef.current,
          {
            opacity: 0.35,
            filter: "blur(10px)",
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.1"
        )
        .to(
          lightRef.current,
          {
            x: "120%",
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          mauxisRef.current,
          {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .to(lightRef.current, {
          opacity: 0,
          duration: 0.35,
        })
        .to(
          mauxisRef.current,
          {
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.5,
            ease: "power2.in",
            delay: 0.65,
          }
        )
        .to(
          introRef.current,
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
          },
          "-=0.15"
        );
    }, introRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <section className="mauxis-intro" ref={introRef}>
      <div className="mauxis-intro-glow" />

      <div className="mauxis-intro-content">
        <h1 ref={introducingRef} className="intro-word">
          Introducing
        </h1>

        <h1 ref={mauxisRef} className="intro-brand">
          M-AUXIS
        </h1>
      </div>

      <div ref={lightRef} className="intro-light-streak">
        <div className="intro-light-core" />
      </div>
    </section>
  );
}

export default MauxisIntro;
