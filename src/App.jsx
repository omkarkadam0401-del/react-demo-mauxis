
import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';

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
    const introElement = introRef.current;

    if (!introElement) return;

    const intro = gsap.timeline({
      onComplete: () => {
        setStartServices(true);
      },
    });

    intro
      .fromTo(
        '.intro-label',
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: 'power3.out',
        }
      )
      .fromTo(
        '.intro-title',
        {
          y: 90,
          scale: 0.85,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.55,
          ease: 'power4.out',
        },
        '-=0.1'
      )
      .to({}, { duration: 0.6 })
      .to(introElement, {
        opacity: 0,
        scale: 1.04,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          introElement.style.display = 'none';
        },
      });

    return () => {
      intro.kill();
    };
  }, []);

  // SERVICES COMPLETE
  const handleServicesComplete = useCallback(() => {
    setShowEnding(true);
  }, []);

  // FINAL SCREEN ANIMATION
  useEffect(() => {
    if (!showEnding || !endingRef.current) return;

    const ending = gsap.timeline();

    ending
      .fromTo(
        '.ending-line',
        {
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
        }
      )
      .fromTo(
        '.ending-logo',
        {
          y: 45,
          opacity: 0,
          scale: 0.85,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: 'power4.out',
        },
        '-=0.2'
      )
      .fromTo(
        '.ending-tagline',
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
        },
        '-=0.3'
      )
      .fromTo(
        '.ending-footer',
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        },
        '-=0.2'
      );

    return () => {
      ending.kill();
    };
  }, [showEnding]);

  return (
    <main className="app-shell">

      {/* INTRO SCREEN */}
      <section
        className="intro-screen"
        ref={introRef}
      >
        <div className="intro-content">
          <p className="intro-label">
            INTRODUCING
          </p>

          <h1 className="intro-title">
            M-AUXIS<span>.</span>
          </h1>
        </div>

        <p className="intro-bottom">
          THE FUTURE OF DIGITAL GROWTH
        </p>
      </section>

      {/* CINEMATIC SERVICES */}
      <CinematicScenes
        start={startServices}
        onComplete={handleServicesComplete}
      />

      {/* FINAL SCREEN */}
      {showEnding && (
        <section
          className="ending-screen"
          ref={endingRef}
        >
          <div className="ending-content">

            <div className="ending-line" />

            <img
              src={mauxisLogo}
              alt="M-Auxis Logo"
              className="ending-logo"
            />

            <h1 className="ending-tagline">
              BUILD. GROW. <span>DOMINATE.</span>
            </h1>

            <p className="ending-description">
              Your entire digital growth engine.
            </p>

            <div className="ending-footer">
              <span>M-AUXIS</span>
              <span>CREATING WHAT'S NEXT</span>
            </div>

          </div>
        </section>
      )}

    </main>
  );
}

export default App;
