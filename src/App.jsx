
import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

import './App.css';

import mauxisLogo from './assets/logo/mauxis-logo.png.png';
import CinematicScenes from './components/CinematicScenes';

function App() {
  const introRef = useRef(null);
  const endingRef = useRef(null);

  const [startServices, setStartServices] = useState(false);
  const [showEnding, setShowEnding] = useState(false);

  // INTRO ANIMATION
  useEffect(() => {
    const intro = introRef.current;

    if (!intro) return;

    const logo = intro.querySelector('.intro-logo');
    const title = intro.querySelector('.intro-title');
    const subtitle = intro.querySelector('.intro-subtitle');
    const line = intro.querySelector('.intro-line');

    const timeline = gsap.timeline({
      onComplete: () => {
        setStartServices(true);
      },
    });

    timeline.fromTo(
      line,
      {
        scaleX: 0,
        transformOrigin: 'left center',
        opacity: 0,
      },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
      }
    );

    timeline.fromTo(
      logo,
      {
        opacity: 0,
        scale: 0.7,
        filter: 'blur(20px)',
      },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power4.out',
      },
      '-=0.2'
    );

    timeline.fromTo(
      title,
      {
        opacity: 0,
        y: 35,
        filter: 'blur(15px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.7,
        ease: 'power3.out',
      },
      '-=0.35'
    );

    timeline.fromTo(
      subtitle,
      {
        opacity: 0,
        y: 20,
        filter: 'blur(10px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.3'
    );

    timeline.to(
      intro,
      {
        opacity: 0,
        scale: 1.04,
        filter: 'blur(12px)',
        duration: 0.55,
        ease: 'power2.in',
      },
      '+=0.5'
    );

    return () => {
      timeline.kill();
    };
  }, []);

  // CALLED AFTER ALL CINEMATIC SERVICE SCENES
  const handleServicesComplete = useCallback(() => {
    setShowEnding(true);
  }, []);

  // FINAL LOGO / ENDING ANIMATION
  useEffect(() => {
    if (!showEnding || !endingRef.current) return;

    const ending = endingRef.current;

    const line = ending.querySelector('.ending-line');
    const logo = ending.querySelector('.ending-logo');
    const tagline = ending.querySelector('.ending-tagline');
    const description = ending.querySelector('.ending-description');
    const footer = ending.querySelector('.ending-footer');

    const timeline = gsap.timeline();

    timeline.fromTo(
      line,
      {
        scaleX: 0,
        opacity: 0,
        transformOrigin: 'center',
      },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    timeline.fromTo(
      logo,
      {
        opacity: 0,
        scale: 0.65,
        filter: 'blur(25px)',
      },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.1,
        ease: 'power4.out',
      },
      '-=0.3'
    );

    timeline.fromTo(
      tagline,
      {
        opacity: 0,
        y: 25,
        filter: 'blur(12px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.7,
        ease: 'power3.out',
      },
      '-=0.5'
    );

    timeline.fromTo(
      description,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.3'
    );

    timeline.fromTo(
      footer,
      {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      },
      '-=0.2'
    );

    return () => {
      timeline.kill();
    };
  }, [showEnding]);

  return (
    <main className="mauxis-app">

      {/* INTRO SECTION */}
      <section className="intro-screen" ref={introRef}>
        <div className="intro-content">

          <div className="intro-line" />

          <img
            src={mauxisLogo}
            alt="Mauxis Logo"
            className="intro-logo"
          />

          <h1 className="intro-title">
            INTRODUCING MAUXIS
          </h1>

          <p className="intro-subtitle">
            A smarter way to move your business forward.
          </p>

        </div>
      </section>

      {/* SIX CINEMATIC SERVICE SCENES */}
      <CinematicScenes
        start={startServices}
        onComplete={handleServicesComplete}
      />

      {/* FINAL BRAND ENDING */}
      {showEnding && (
        <section
          className="ending-screen"
          ref={endingRef}
        >
          <div className="ending-content">

            <div className="ending-line" />

            <img
              src={mauxisLogo}
              alt="Mauxis"
              className="ending-logo"
            />

            <h2 className="ending-tagline">
              BUILD. GROW. DOMINATE.
            </h2>

            <p className="ending-description">
              Transform your ideas into meaningful digital experiences.
              Build smarter, grow faster and move forward with Mauxis.
            </p>

            <div className="ending-footer">
              <span>MAUXIS DIGITAL ECOSYSTEM</span>
              <span>THINK BEYOND. MOVE FORWARD.</span>
            </div>

          </div>
        </section>
      )}

    </main>
  );
}

export default App;
