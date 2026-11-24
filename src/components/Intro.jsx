
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Intro() {
  const introRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from('.intro-label', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      .from('.intro-title', {
        y: 100,
        opacity: 0,
        scale: 0.85,
        duration: 1.3,
        ease: 'power4.out',
      }, '-=0.4')
      .from('.intro-description', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.5')
      .from('.preview-button', {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, '-=0.4')
      .from('.intro-circle', {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
      }, '-=1');
    }, introRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="intro-demo" ref={introRef}>

      <div className="intro-circle"></div>

      <nav className="demo-navbar">
        <h2>M-AUXIS</h2>
        <span>CREATIVE TECHNOLOGY</span>
      </nav>

      <section className="intro-content">

        <p className="intro-label">
          INTRODUCING
        </p>

        <h1 className="intro-title">
          M-AUXIS<span>.</span>
        </h1>

        <p className="intro-description">
          Your Entire Growth Engine.
          <br />
          One Intelligent Platform.
        </p>

        <button className="preview-button">
          EXPLORE THE EXPERIENCE ↗
        </button>

      </section>

      <footer className="demo-footer">
        <span>CREATIVITY · TECHNOLOGY · INNOVATION</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </footer>

    </main>
  );
}

export default Intro;
