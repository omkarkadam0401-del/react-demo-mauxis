
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";

import "./App.css";
import mauxisLogo from "./assets/logo/mauxis-logo.png.png";
import CinematicScenes from "./components/CinematicScenes";

function App() {
  const appRef = useRef(null);
  const introRef = useRef(null);
  const introContentRef = useRef(null);
  const endingRef = useRef(null);

  const [startServices, setStartServices] = useState(false);
  const [showEnding, setShowEnding] = useState(false);

  // =========================================
  // INTRO ANIMATION — LINKME-INSPIRED TIMING
  // Total intro duration: approximately 2.4 sec
  // =========================================

  useEffect(() => {
    const context = gsap.context(() => {
      const intro = introRef.current;
      if (!intro) return;

      const ambient = intro.querySelector(".intro-ambient");
      const beamGlow = intro.querySelector(".intro-beam-glow");
      const beam = intro.querySelector(".intro-beam");
      const beamHead = intro.querySelector(".intro-beam-head");
      const particles = intro.querySelectorAll(".intro-particles span");
      const line = intro.querySelector(".intro-line");
      const logo = intro.querySelector(".intro-logo");
      const title = intro.querySelector(".intro-title");
      const subtitle = intro.querySelector(".intro-subtitle");
      const flash = intro.querySelector(".intro-flash");
      const content = introContentRef.current;

      gsap.set(intro, {
        autoAlpha: 1,
        display: "flex",
        filter: "blur(0px)",
      });

      gsap.set([line, logo, title, subtitle], {
        autoAlpha: 0,
        filter: "blur(24px)",
        y: 24,
      });

      gsap.set(logo, {
        scale: 0.82,
        rotationX: 8,
      });

      gsap.set(title, {
        x: -35,
        scale: 0.97,
      });

      gsap.set(subtitle, {
        y: 18,
      });

      gsap.set(ambient, {
        scale: 0.55,
        autoAlpha: 0,
      });

      gsap.set([beamGlow, beam, beamHead], {
        x: "-110vw",
        autoAlpha: 0,
      });

      gsap.set(particles, {
        autoAlpha: 0,
        scale: 0,
      });

      gsap.set(flash, {
        autoAlpha: 0,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        onComplete: () => {
          gsap.set(intro, {
            display: "none",
            autoAlpha: 0,
          });

          setStartServices(true);
        },
      });

      // 0.00 — Central light starts appearing
      tl.to(ambient, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.65,
        ease: "power2.out",
      }, 0);

      // 0.08 — First horizontal beam crosses the screen
      tl.to([beamGlow, beam, beamHead], {
        x: "110vw",
        autoAlpha: 1,
        duration: 1.15,
        ease: "power2.inOut",
        stagger: 0.015,
      }, 0.08);

      // 0.35 — Small particles appear
      tl.to(particles, {
        autoAlpha: 0.85,
        scale: 1,
        duration: 0.35,
        stagger: 0.035,
        ease: "power2.out",
      }, 0.35);

      // 0.48 — Logo reveals from blur
      tl.to(logo, {
        autoAlpha: 1,
        filter: "blur(0px)",
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 0.62,
        ease: "power3.out",
      }, 0.48);

      // 0.65 — Intro line reveals
      tl.to(line, {
        autoAlpha: 1,
        filter: "blur(0px)",
        y: 0,
        scaleX: 1,
        duration: 0.42,
      }, 0.65);

      // 0.78 — Main heading reveals
      tl.to(title, {
        autoAlpha: 1,
        filter: "blur(0px)",
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.68,
        ease: "power3.out",
      }, 0.78);

      // 1.15 — Subtitle reveals
      tl.to(subtitle, {
        autoAlpha: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.55,
      }, 1.15);

      // 1.35 — Central glow expands
      tl.to(ambient, {
        scale: 1.18,
        autoAlpha: 0.9,
        duration: 0.5,
        ease: "sine.inOut",
      }, 1.35);

      // 1.65 — Particles gently fade
      tl.to(particles, {
        autoAlpha: 0.25,
        scale: 0.65,
        duration: 0.35,
        stagger: 0.015,
      }, 1.65);

      // 1.82 — Prepare a second full-screen light sweep
      tl.set([beamGlow, beam, beamHead], {
        x: "-110vw",
        autoAlpha: 0,
      }, 1.82);

      // 1.88 — Second fast beam sweep
      tl.to([beamGlow, beam, beamHead], {
        x: "110vw",
        autoAlpha: 1,
        duration: 0.48,
        ease: "power2.in",
        stagger: 0.01,
      }, 1.88);

      // 2.00 — Bright transition flash
      tl.to(flash, {
        autoAlpha: 0.85,
        duration: 0.12,
        ease: "power2.in",
      }, 2.02);

      // 2.10 — Intro content moves into the light
      tl.to(content, {
        scale: 1.035,
        y: -8,
        filter: "blur(12px)",
        autoAlpha: 0,
        duration: 0.22,
        ease: "power2.in",
      }, 2.10);

      // 2.18 — Intro fades out
      tl.to(intro, {
        autoAlpha: 0,
        duration: 0.22,
        ease: "power2.inOut",
      }, 2.18);

      // Approximately 2.4 sec — service scene begins
    }, appRef);

    return () => context.revert();
  }, []);

  // =========================================
  // SERVICES COMPLETE
  // =========================================

  const handleServicesComplete = useCallback(() => {
    setShowEnding(true);
  }, []);

  // =========================================
  // ENDING ANIMATION
  // =========================================

  useEffect(() => {
    if (!showEnding || !endingRef.current) return;

    const context = gsap.context(() => {
      const ending = endingRef.current;

      const line = ending.querySelector(".ending-line");
      const logo = ending.querySelector(".ending-logo");
      const tagline = ending.querySelector(".ending-tagline");
      const description = ending.querySelector(".ending-description");
      const footer = ending.querySelector(".ending-footer");

      gsap.set([line, logo, tagline, description, footer], {
        autoAlpha: 0,
        y: 25,
        filter: "blur(12px)",
      });

      const tl = gsap.timeline();

      tl.to(line, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.65,
        scaleX: 1,
        ease: "power3.out",
      });

      tl.to(logo, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.7,
        ease: "power3.out",
      }, "-=0.25");

      tl.to(tagline, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.7,
      }, "-=0.3");

      tl.to(description, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.6,
      }, "-=0.3");

      tl.to(footer, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.6,
      }, "-=0.2");
    }, endingRef);

    return () => context.revert();
  }, [showEnding]);

  return (
    <div className="mauxis-app" ref={appRef}>

      {/* =====================================
          INTRO SCREEN
      ===================================== */}

      <section className="intro-screen" ref={introRef}>

        <div className="intro-ambient" />

        <div className="intro-particles">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>

        <div className="intro-beam-glow" />
        <div className="intro-beam" />
        <div className="intro-beam-head" />

        <div className="intro-content" ref={introContentRef}>

          <div className="intro-line" />

          <img
            className="intro-logo"
            src={mauxisLogo}
            alt="M-Auxis"
          />

          <p className="intro-eyebrow">
            INTRODUCING
          </p>

          <h1 className="intro-title">
            M-AUXIS.
          </h1>

          <p className="intro-subtitle">
            THE FUTURE OF DIGITAL GROWTH
          </p>

        </div>

        <div className="intro-flash" />

      </section>

      {/* =====================================
          SIX SERVICE CARDS
      ===================================== */}

      <CinematicScenes
        start={startServices}
        onComplete={handleServicesComplete}
      />

      {/* =====================================
          ENDING SCREEN
      ===================================== */}

      {showEnding && (
        <section className="ending-screen" ref={endingRef}>
          <div className="ending-content">

            <div className="ending-line" />

            <img
              className="ending-logo"
              src={mauxisLogo}
              alt="M-Auxis"
            />

            <h2 className="ending-tagline">
              BUILD. GROW. DOMINATE.
            </h2>

            <p className="ending-description">
              Your entire digital growth engine.
            </p>

            <div className="ending-footer">
              <span>MAUXIS</span>
              <span>DIGITAL GROWTH PLATFORM</span>
            </div>

          </div>
        </section>
      )}

    </div>
  );
}

export default App;
