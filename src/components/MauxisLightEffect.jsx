
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './MauxisLightEffect.css';

function MauxisLightEffect() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const ambient = root.querySelector('.ambient-light');
      const lines = root.querySelector('.diagonal-light-lines');
      const redGlow = root.querySelector('.red-ambient');

      gsap.to(ambient, {
        scale: 1.12,
        x: 25,
        y: 20,
        opacity: 0.8,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(lines, {
        opacity: 0.48,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(redGlow, {
        scale: 1.15,
        opacity: 0.75,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mauxis-light-effect" ref={rootRef}>
      <div className="ambient-light" />
      <div className="diagonal-light-lines" />
      <div className="secondary-light-lines" />
      <div className="red-ambient" />
      <div className="background-vignette" />
      <div className="background-grain" />
    </div>
  );
}

export default MauxisLightEffect;
