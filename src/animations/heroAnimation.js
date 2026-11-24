
import gsap from 'gsap';

export function startHeroAnimation() {
  const animation = gsap.timeline({
    defaults: {
      ease: 'power2.out',
    },
  });

  animation.from('.hero-label', {
    y: 40,
    opacity: 0,
    duration: 1.2,
  });

  animation.from('.hero-section h1', {
    y: 80,
    opacity: 0,
    duration: 1.8,
  }, '-=0.5');

  animation.from('.hero-description', {
    y: 40,
    opacity: 0,
    duration: 1.2,
  }, '-=0.6');

  animation.from('.hero-button', {
    y: 30,
    opacity: 0,
    duration: 1.2,
  }, '-=0.5');

  return animation;
}
