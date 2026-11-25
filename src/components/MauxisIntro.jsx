
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './MauxisIntro.css';

export default function MauxisIntro({ onComplete }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const ctx = gsap.context(() => {
      const beam = root.querySelector('.intro-light-beam');
      const beamGlow = root.querySelector('.intro-light-glow');
      const logo = root.querySelector('.intro-wordmark');
      const logoLetters = root.querySelectorAll('.intro-letter');
      const accent = root.querySelector('.intro-accent');
      const glow = root.querySelector('.intro-center-glow');

      const timeline = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
        onComplete: () => {
          onComplete?.();
        },
      });

      // Initial state
      gsap.set(beam, {
        x: '-120%',
        opacity: 0,
        scaleX: 0.35,
      });

      gsap.set(beamGlow, {
        x: '-120%',
        opacity: 0,
        scaleX: 0.35,
      });

      gsap.set(logo, {
        opacity: 0,
        scale: 1.22,
        filter: 'blur(24px)',
      });

      gsap.set(logoLetters, {
        opacity: 0,
        x: 35,
        filter: 'blur(18px)',
      });

      gsap.set(accent, {
        opacity: 0,
        scaleX: 0,
      });

      gsap.set(glow, {
        opacity: 0,
        scale: 0.55,
      });

      // 0.00s - Warm central glow begins
      timeline.to(glow, {
        opacity: 0.85,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
      }, 0);

      // 0.10s - Main horizontal light streak
      timeline.to(beam, {
        x: '145%',
        opacity: 1,
        scaleX: 1.25,
        duration: 1.05,
        ease: 'power3.inOut',
      }, 0.1);

      // 0.10s - Wide soft light bloom follows the beam
      timeline.to(beamGlow, {
        x: '145%',
        opacity: 0.9,
        scaleX: 1.4,
        duration: 1.15,
        ease: 'power3.inOut',
      }, 0.1);

      // 0.55s - MAUXIS wordmark appears from motion blur
      timeline.to(logo, {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.9,
        ease: 'power4.out',
      }, 0.55);

      // Letters sharpen progressively
      timeline.to(logoLetters, {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 0.65,
        stagger: 0.055,
        ease: 'power4.out',
      }, 0.65);

      // Red brand accent appears subtly
      timeline.to(accent, {
        opacity: 1,
        scaleX: 1,
        duration: 0.45,
        ease: 'power3.out',
      }, 1.25);

      // Light streak fades after crossing the screen
      timeline.to([beam, beamGlow], {
        opacity: 0,
        duration: 0.35,
        ease: 'power2.out',
      }, 1.35);

      // Logo holds briefly, then the intro fades out
      timeline.to(root, {
        opacity: 0,
        duration: 0.35,
        ease: 'power2.inOut',
      }, 1.85);

      // Total intro duration: approximately 2.2 seconds
    }, root);

    return () => {
      ctx.revert();
    };
  }, [onComplete]);

  return (
    <section
      className="mauxis-intro"
      ref={rootRef}
      aria-label="Mauxis introduction"
    >
      <div className="intro-background-glow" />

      <div className="intro-center-glow" />

      <div className="intro-light-system">
        <div className="intro-light-glow" />
        <div className="intro-light-beam" />
      </div>

      <div className="intro-logo-wrap">
        <div className="intro-wordmark">
          {'MAUXIS'.split('').map((letter, index) => (
            <span className="intro-letter" key={`${letter}-${index}`}>
              {letter}
            </span>
          ))}
        </div>

        <div className="intro-accent" />
      </div>
    </section>
  );
}
