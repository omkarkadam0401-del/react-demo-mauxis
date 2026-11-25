
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './MauxisLightEffect.css';

export default function MauxisLightEffect() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const ambient = root.querySelector('.ambient-light');
      const cardGlow = root.querySelector('.card-ambient-light');
      const streaks = gsap.utils.toArray('.light-streak');
      const particles = gsap.utils.toArray('.light-particle');

      gsap.to(ambient, {
        scale: 1.3,
        opacity: 0.85,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(cardGlow, {
        scale: 1.25,
        opacity: 0.8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      streaks.forEach((streak, index) => {
        gsap.fromTo(
          streak,
          {
            x: '-120vw',
            opacity: 0,
            scaleX: 0.5,
          },
          {
            x: '150vw',
            opacity: 0.95,
            scaleX: 1.5,
            duration: 1.1 + index * 0.15,
            delay: index * 1.4,
            repeat: -1,
            repeatDelay: 2.2,
            ease: 'power3.inOut',
          }
        );
      });

      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: index % 2 === 0 ? -25 : 25,
          x: index % 2 === 0 ? 15 : -15,
          opacity: 0.9,
          scale: 1.5,
          duration: 2 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mauxis-light-effect" ref={rootRef} aria-hidden="true">
      <div className="ambient-light" />
      <div className="card-ambient-light" />

      <div className="light-streaks">
        <span className="light-streak streak-one" />
        <span className="light-streak streak-two" />
        <span className="light-streak streak-three" />
      </div>

      <div className="light-particles">
        <span className="light-particle particle-one" />
        <span className="light-particle particle-two" />
        <span className="light-particle particle-three" />
        <span className="light-particle particle-four" />
      </div>

      <div className="light-vignette" />
    </div>
  );
}
