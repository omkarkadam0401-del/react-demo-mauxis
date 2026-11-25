
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MauxisLightEffect from './MauxisLightEffect';
import './CinematicScenes.css';
import './FloatingCards.css';

const services = [
  { number: '01', name: 'Analytics Hub', type: 'analytics' },
  { number: '02', name: 'AI Studio', type: 'ai' },
  { number: '03', name: 'Social Hub', type: 'social' },
  { number: '04', name: 'Creator Hub', type: 'creator' },
  { number: '05', name: 'Ads Manager', type: 'ads' },
  { number: '06', name: 'CRM Hub', type: 'crm' },
];

function AnalyticsVisual() {
  return (
    <div className="service-visual analytics-visual">
      <div className="visual-card analytics-main">
        <div className="visual-topbar">
          <span>Overview</span>
          <span className="visual-period">Last 30 days⌄</span>
        </div>

        <div className="analytics-metrics">
          <div className="metric-box">
            <span>Total Revenue</span>
            <strong>$48,290</strong>
            <small>↗ 18.4%</small>
          </div>
          <div className="metric-box">
            <span>Conversions</span>
            <strong>2,840</strong>
            <small>↗ 12.8%</small>
          </div>
        </div>

        <div className="chart-heading">
          <span>Performance</span>
          <strong>Revenue growth</strong>
        </div>

        <svg
          className="analytics-chart"
          viewBox="0 0 520 190"
          role="img"
          aria-label="Revenue growth chart"
        >
          <defs>
            <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#B33B30" stopOpacity=".25" />
              <stop offset="100%" stopColor="#B33B30" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[35, 80, 125, 170].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="520"
              y2={y}
              stroke="#25211F"
              strokeOpacity=".1"
              strokeDasharray="4 6"
            />
          ))}

          <path
            d="M0 150 C45 145 55 115 100 124 S165 105 205 115 S270 65 310 82 S375 45 415 62 S475 20 520 30 L520 190 L0 190Z"
            fill="url(#chartFill)"
          />

          <path
            d="M0 150 C45 145 55 115 100 124 S165 105 205 115 S270 65 310 82 S375 45 415 62 S475 20 520 30"
            fill="none"
            stroke="#B33B30"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        <div className="chart-months">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>
      </div>

      <div className="visual-card analytics-floating">
        <span>Growth rate</span>
        <strong>+24.8%</strong>
        <small>Compared to last month</small>
      </div>
    </div>
  );
}

function AIVisual() {
  return (
    <div className="service-visual ai-visual">
      <div className="visual-card ai-window">
        <div className="visual-topbar">
          <span>✦ Mauxis Intelligence</span>
          <span className="status-dot">● Online</span>
        </div>

        <div className="ai-conversation">
          <div className="ai-message user-message">
            Create a growth strategy for my business.
          </div>

          <div className="ai-message assistant-message">
            <span className="ai-symbol">✦</span>
            Here is a strategy built around your goals:
            <ul>
              <li>Understand your audience</li>
              <li>Optimize your campaigns</li>
              <li>Automate repetitive workflows</li>
            </ul>
          </div>
        </div>

        <div className="ai-input">
          <span>Ask Mauxis anything...</span>
          <span className="ai-send">↑</span>
        </div>
      </div>

      <div className="visual-card ai-floating">
        <span className="ai-symbol">✦</span>
        <strong>Workflow automated</strong>
        <small>Your assistant is working</small>
      </div>
    </div>
  );
}

function SocialVisual() {
  return (
    <div className="service-visual social-visual">
      <div className="visual-card social-inbox">
        <div className="visual-topbar">
          <strong>Social Inbox</strong>
          <span>All messages</span>
        </div>

        <div className="social-profile">
          <div className="profile-avatar">JD</div>
          <div>
            <strong>Jordan Davis</strong>
            <small>Instagram · 2 min ago</small>
          </div>
          <span className="unread-dot" />
        </div>

        <div className="social-chat">
          Hey! I am interested in learning more about your services.
        </div>

        <div className="social-reply">
          Thanks for reaching out! We'd love to help.
        </div>

        <div className="social-message-input">
          Reply to conversation...
        </div>
      </div>

      <div className="visual-card social-platforms">
        <span className="platform-icon">◎</span>
        <span className="platform-icon">f</span>
        <span className="platform-icon">in</span>
        <span className="platform-icon">♪</span>
        <strong>All channels connected</strong>
      </div>
    </div>
  );
}

function CreatorVisual() {
  const creators = [
    { initials: 'AM', name: 'Alex Morgan', category: 'Lifestyle', followers: '128K' },
    { initials: 'SK', name: 'Sarah Kim', category: 'Fashion', followers: '86K' },
    { initials: 'RJ', name: 'Ryan James', category: 'Technology', followers: '214K' },
  ];

  return (
    <div className="service-visual creator-visual">
      <div className="visual-card creator-panel">
        <div className="visual-topbar">
          <strong>Creator Discovery</strong>
          <span>Explore creators ↗</span>
        </div>

        <div className="creator-list">
          {creators.map((creator, index) => (
            <div className="creator-item" key={creator.initials}>
              <div className={`creator-avatar creator-avatar-${index + 1}`}>
                {creator.initials}
              </div>
              <div className="creator-info">
                <strong>{creator.name}</strong>
                <small>{creator.category}</small>
              </div>
              <div className="creator-followers">
                <strong>{creator.followers}</strong>
                <small>Followers</small>
              </div>
            </div>
          ))}
        </div>

        <div className="creator-footer">
          <span>Creator matches</span>
          <strong>1,240 profiles found</strong>
        </div>
      </div>
    </div>
  );
}

function AdsVisual() {
  const bars = [42, 58, 48, 72, 63, 88, 76, 100, 82, 94];

  return (
    <div className="service-visual ads-visual">
      <div className="visual-card ads-panel">
        <div className="visual-topbar">
          <strong>Campaign Performance</strong>
          <span>Live report ●</span>
        </div>

        <div className="ads-summary">
          <div>
            <small>Total Spend</small>
            <strong>$12,480</strong>
          </div>
          <div>
            <small>ROAS</small>
            <strong>4.8x</strong>
          </div>
          <div>
            <small>Conversions</small>
            <strong>1,284</strong>
          </div>
        </div>

        <div className="ads-chart">
          {bars.map((height, index) => (
            <div className="ads-bar-wrap" key={index}>
              <span className="ads-bar" style={{ height: `${height}%` }} />
            </div>
          ))}
        </div>

        <div className="ads-chart-labels">
          <span>Week 1</span>
          <span>Week 2</span>
          <span>Week 3</span>
          <span>Week 4</span>
        </div>
      </div>
    </div>
  );
}

function CRMVisual() {
  const contacts = [
    { initials: 'AM', name: 'Amanda Miller', email: 'amanda@email.com', stage: 'Qualified' },
    { initials: 'JD', name: 'James Davis', email: 'james@email.com', stage: 'New lead' },
    { initials: 'SK', name: 'Sophia Kim', email: 'sophia@email.com', stage: 'Contacted' },
    { initials: 'RW', name: 'Ryan Wilson', email: 'ryan@email.com', stage: 'Qualified' },
  ];

  return (
    <div className="service-visual crm-visual">
      <div className="visual-card crm-panel">
        <div className="visual-topbar">
          <strong>Customer Relationships</strong>
          <span>All contacts⌄</span>
        </div>

        <div className="crm-stats">
          <div>
            <small>Total Contacts</small>
            <strong>2,840</strong>
          </div>
          <div>
            <small>New Leads</small>
            <strong>186</strong>
          </div>
        </div>

        <div className="crm-table">
          {contacts.map((contact) => (
            <div className="crm-contact" key={contact.initials}>
              <div className="crm-avatar">{contact.initials}</div>
              <div className="crm-contact-info">
                <strong>{contact.name}</strong>
                <small>{contact.email}</small>
              </div>
              <span className="crm-stage">{contact.stage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceVisual({ type }) {
  const visuals = {
    analytics: <AnalyticsVisual />,
    ai: <AIVisual />,
    social: <SocialVisual />,
    creator: <CreatorVisual />,
    ads: <AdsVisual />,
    crm: <CRMVisual />,
  };

  return visuals[type] || null;
}

function CinematicScenes({ start, onComplete }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !start) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.floating-service-card', root);
      const lightSweep = root.querySelector('.floating-light-sweep');
      const centerGlow = root.querySelector('.floating-center-glow');
      const bgGlow = root.querySelector('.floating-bg-glow');
      const showcaseTitle = root.querySelector('.floating-showcase-title');

      const headings = cards.map((card) =>
        card.querySelector('.floating-card-heading')
      );

      const visuals = cards.map((card) =>
        card.querySelector('.service-visual')
      );

      const cardLights = cards.map((card) =>
        card.querySelector('.card-light-sweep')
      );

      // INITIAL STATE
      gsap.set(cards, {
        autoAlpha: 0,
        x: 0,
        y: 0,
        z: -350,
        scale: 0.55,
        rotateX: 18,
        rotateY: 0,
        rotateZ: 0,
        filter: 'blur(18px)',
        transformPerspective: 1600,
        transformOrigin: 'center center',
      });

      gsap.set([...headings, ...visuals], {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      });

      gsap.set(cardLights, {
        xPercent: -160,
        autoAlpha: 0,
      });

      gsap.set(showcaseTitle, {
        autoAlpha: 0,
        y: 30,
        filter: 'blur(12px)',
      });

      gsap.set(lightSweep, {
        x: '-100vw',
        autoAlpha: 0,
      });

      gsap.set(centerGlow, {
        scale: 0.65,
        opacity: 0.35,
      });

      gsap.set(bgGlow, {
        scale: 0.8,
        opacity: 0.5,
      });

      const master = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => onComplete?.(),
      });

      // PART 1 — Background glow
      master.to(
        [centerGlow, bgGlow],
        {
          scale: 1.15,
          opacity: 1,
          duration: 0.75,
          ease: 'power2.out',
        },
        0
      );

      // PART 2 — Opening light sweep
      master.to(
        lightSweep,
        {
          x: '180vw',
          autoAlpha: 1,
          duration: 1.05,
          ease: 'power2.inOut',
        },
        0.08
      );

      master.to(
        lightSweep,
        { autoAlpha: 0, duration: 0.25 },
        0.95
      );

      // PART 3 — Six cards enter together
      const entryPositions = [
        { x: -480, y: -260, rotateY: -24, rotateZ: -13, z: -260 },
        { x: 520, y: -280, rotateY: 25, rotateZ: 12, z: -300 },
        { x: -600, y: 80, rotateY: 30, rotateZ: -16, z: -220 },
        { x: 620, y: 100, rotateY: -28, rotateZ: 14, z: -320 },
        { x: -260, y: 460, rotateY: -20, rotateZ: 10, z: -280 },
        { x: 420, y: 430, rotateY: 22, rotateZ: -12, z: -200 },
      ];

      cards.forEach((card, index) => {
        const from = entryPositions[index];

        master.fromTo(
          card,
          {
            autoAlpha: 0,
            x: from.x,
            y: from.y,
            z: from.z,
            scale: 0.55,
            rotateX: 18,
            rotateY: from.rotateY,
            rotateZ: from.rotateZ,
            filter: 'blur(18px)',
          },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            z: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            filter: 'blur(0px)',
            duration: 1.05,
            ease: 'power4.out',
          },
          0.35 + index * 0.12
        );
      });

      // PART 4 — Six cards remain clear together
      cards.forEach((card, index) => {
        master.to(
          card,
          {
            y: index % 2 === 0 ? -12 : 12,
            x: index % 2 === 0 ? 7 : -7,
            rotateY: index % 2 === 0 ? 2 : -2,
            rotateZ: index % 2 === 0 ? 1 : -1,
            filter: 'blur(0px)',
            scale: 1,
            duration: 0.65,
            ease: 'sine.inOut',
          },
          1.75
        );
      });

      master.to(
        cards,
        {
          autoAlpha: 1,
          filter: 'blur(0px)',
          duration: 0.3,
        },
        2.25
      );

      // PART 5 — One card at a time, center position
      const showStart = 3.1;
      const cardInterval = 1.55;

      cards.forEach((card, index) => {
        const showTime = showStart + index * cardInterval;
        const heading = headings[index];
        const visual = visuals[index];
        const light = cardLights[index];

        // Hide all cards before showing selected card
        master.set(
          cards,
          {
            autoAlpha: 0,
            filter: 'blur(0px)',
          },
          showTime
        );

        // Hide the previous large heading
        master.set(
          showcaseTitle,
          {
            autoAlpha: 0,
            y: 30,
            filter: 'blur(12px)',
          },
          showTime
        );

        // Change heading to current service name
        master.call(
          () => {
            showcaseTitle.textContent = services[index].name;
          },
          [],
          showTime
        );

        // Activate only the selected card
        master.call(
          () => {
            cards.forEach((item) =>
              item.classList.remove('showcase-active')
            );
            card.classList.add('showcase-active');
          },
          [],
          showTime
        );

        // Center the selected card
        master.set(
          card,
          {
            left: '50%',
            top: '50%',
            marginLeft: 0,
            marginTop: 0,
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
            z: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            autoAlpha: 1,
            scale: 0.88,
            filter: 'blur(0px)',
          },
          showTime
        );

        // Card entrance
        master.to(
          card,
          {
            scale: 1,
            duration: 0.55,
            ease: 'power3.out',
          },
          showTime
        );

        // Large Linkme-style heading reveal
        master.to(
          showcaseTitle,
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.65,
            ease: 'power3.out',
          },
          showTime + 0.12
        );

        // Small heading inside the dashboard card
        master.fromTo(
          heading,
          {
            autoAlpha: 0,
            y: 22,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
            ease: 'power3.out',
            immediateRender: false,
          },
          showTime + 0.15
        );

        // Dashboard reveal
        master.fromTo(
          visual,
          {
            autoAlpha: 0,
            y: 28,
            scale: 0.96,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: 'power3.out',
            immediateRender: false,
          },
          showTime + 0.3
        );

        // Warm light streak crosses the card
        master.fromTo(
          light,
          {
            xPercent: -160,
            autoAlpha: 0,
          },
          {
            xPercent: 160,
            autoAlpha: 1,
            duration: 0.85,
            ease: 'power2.inOut',
          },
          showTime + 0.05
        );

        master.to(
          light,
          {
            autoAlpha: 0,
            duration: 0.3,
          },
          showTime + 0.75
        );

        // Warm card glow
        master.to(
          card,
          {
            boxShadow:
              '0 24px 70px rgba(37,33,31,0.16), 0 0 32px rgba(179,59,48,0.18)',
            duration: 0.6,
            ease: 'power2.out',
          },
          showTime
        );
      });

      // PART 6 — Final card exit
      const finalShowTime =
        showStart + (cards.length - 1) * cardInterval;

      const exitTime = finalShowTime + 1.1;

      // Hide large heading with final card
      master.to(
        showcaseTitle,
        {
          autoAlpha: 0,
          y: -25,
          filter: 'blur(12px)',
          duration: 0.6,
          ease: 'power2.in',
        },
        exitTime
      );

      master.to(
        cards,
        {
          autoAlpha: 0,
          scale: 1.08,
          filter: 'blur(16px)',
          duration: 0.8,
          ease: 'power3.in',
        },
        exitTime
      );

      // PART 7 — Final light transition
      master.to(
        centerGlow,
        {
          scale: 1.4,
          opacity: 0.65,
          duration: 0.7,
        },
        exitTime
      );

      master.to(
        lightSweep,
        {
          x: '190vw',
          autoAlpha: 0.85,
          duration: 0.7,
          ease: 'power2.in',
        },
        exitTime + 0.1
      );

      master.to(
        lightSweep,
        {
          autoAlpha: 0,
          duration: 0.2,
        },
        exitTime + 0.65
      );
    }, root);

    return () => ctx.revert();
  }, [start, onComplete]);

  return (
    <section className="floating-cards-scene" ref={rootRef}>
      <MauxisLightEffect />

      <div className="floating-bg floating-bg-base" />
      <div className="floating-bg floating-bg-glow" />
      <div className="floating-bg floating-bg-depth" />
      <div className="floating-bg floating-bg-vignette" />

      <div className="floating-center-glow" />
      <div className="floating-light-sweep" />

      {/* Large Linkme-style service heading */}
      <div className="floating-showcase-title">
        Analytics Hub
      </div>

      <div className="floating-cards-stage">
        <div className="floating-cards-layer">
          {services.map((service) => (
            <article
              className={`floating-service-card service-${service.type}`}
              key={service.number}
            >
              <span className="card-light-sweep" />

              <div className="floating-card-heading">
                <span>{service.name}</span>
                <span>{service.number} / 06</span>
              </div>

              <ServiceVisual type={service.type} />
            </article>
          ))}
        </div>
      </div>

      <div className="floating-scene-label">
        THE M-AUXIS ECOSYSTEM
      </div>
    </section>
  );
}

export default CinematicScenes;
