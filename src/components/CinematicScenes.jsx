
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MauxisLightEffect from './MauxisLightEffect';
import './CinematicScenes.css';

const services = [
  {
    number: '01',
    name: 'Analytics Hub',
    subtitle: 'Your growth. Clearly visualized.',
    description:
      'Turn your business data into meaningful insights and smarter decisions.',
    type: 'analytics',
  },
  {
    number: '02',
    name: 'AI Studio',
    subtitle: 'Intelligence that moves you forward.',
    description:
      'Create smarter workflows, automate tasks and unlock new possibilities with AI.',
    type: 'ai',
  },
  {
    number: '03',
    name: 'Social Hub',
    subtitle: 'Every conversation. One place.',
    description:
      'Manage your social presence, connect with your audience and build stronger relationships.',
    type: 'social',
  },
  {
    number: '04',
    name: 'Creator Hub',
    subtitle: 'Ideas become influence.',
    description:
      'Discover creators, manage collaborations and build powerful brand experiences.',
    type: 'creator',
  },
  {
    number: '05',
    name: 'Ads Manager',
    subtitle: 'Make every campaign count.',
    description:
      'Plan, manage and optimize advertising campaigns with a clearer view of performance.',
    type: 'ads',
  },
  {
    number: '06',
    name: 'CRM Hub',
    subtitle: 'Relationships drive results.',
    description:
      'Bring customer information, conversations and opportunities together in one place.',
    type: 'crm',
  },
];

function AnalyticsVisual() {
  return (
    <div className="visual-card analytics-visual">
      <div className="visual-topbar">
        <span>Performance Overview</span>
        <span className="visual-status">Live</span>
      </div>

      <div className="analytics-metrics">
        <div className="metric-box">
          <small>Total Revenue</small>
          <strong>$48,290</strong>
          <span>+18.6%</span>
        </div>

        <div className="metric-box">
          <small>Conversions</small>
          <strong>2,840</strong>
          <span>+12.4%</span>
        </div>
      </div>

      <div className="chart-area">
        <div className="chart-lines">
          <span />
          <span />
          <span />
          <span />
        </div>

        <svg viewBox="0 0 500 170" preserveAspectRatio="none">
          <defs>
            <linearGradient id="analyticsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b33b30" stopOpacity=".3" />
              <stop offset="100%" stopColor="#b33b30" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M0 135 C45 120 65 140 105 100 S170 115 205 78 S270 100 310 55 S380 75 415 30 S465 42 500 12 L500 170 L0 170 Z"
            fill="url(#analyticsFill)"
          />

          <path
            className="chart-line"
            d="M0 135 C45 120 65 140 105 100 S170 115 205 78 S270 100 310 55 S380 75 415 30 S465 42 500 12"
          />
        </svg>
      </div>

      <div className="chart-footer">
        <span>MON</span>
        <span>TUE</span>
        <span>WED</span>
        <span>THU</span>
        <span>FRI</span>
        <span>SAT</span>
        <span>SUN</span>
      </div>
    </div>
  );
}

function AIVisual() {
  return (
    <div className="visual-card ai-visual">
      <div className="ai-heading">
        <span className="ai-symbol">✳</span>
        <div>
          <small>MAUXIS INTELLIGENCE</small>
          <strong>AI Workspace</strong>
        </div>
        <span className="ai-online">Online</span>
      </div>

      <div className="ai-message ai-user">
        Create a growth strategy for my brand.
      </div>

      <div className="ai-message ai-response">
        <span className="ai-response-icon">✳</span>
        <div>
          <strong>Your strategy is ready.</strong>
          <p>
            I've analyzed your audience, market trends and campaign
            opportunities.
          </p>
        </div>
      </div>

      <div className="ai-input">
        <span>Ask M-Auxis AI anything...</span>
        <span className="ai-send">↗</span>
      </div>
    </div>
  );
}

function SocialVisual() {
  return (
    <div className="visual-card social-visual">
      <div className="visual-topbar">
        <span>Social Overview</span>
        <span className="visual-status">Connected</span>
      </div>

      <div className="social-platforms">
        <div className="social-platform instagram">◎</div>
        <div className="social-platform facebook">f</div>
        <div className="social-platform linkedin">in</div>
        <div className="social-platform youtube">▶</div>
      </div>

      <div className="social-post">
        <div className="social-post-head">
          <span className="social-avatar">M</span>
          <div>
            <strong>M-Auxis</strong>
            <small>Published across platforms</small>
          </div>
          <span className="social-check">✓</span>
        </div>

        <div className="social-post-content">
          <span>Building better connections.</span>
          <div className="social-post-art">
            <span>GROW</span>
            <strong>TOGETHER.</strong>
          </div>
        </div>

        <div className="social-post-footer">
          <span>♥ 1.2k</span>
          <span>◉ 248</span>
          <span>↗ 86</span>
        </div>
      </div>
    </div>
  );
}

function CreatorVisual() {
  return (
    <div className="visual-card creator-visual">
      <div className="visual-topbar">
        <span>Creator Network</span>
        <span className="visual-status">Active</span>
      </div>

      <div className="creator-profiles">
        {[
          ['A', 'Alex Morgan', 'Fashion Creator', '120K Followers'],
          ['S', 'Sarah James', 'Lifestyle Creator', '86K Followers'],
          ['J', 'James Lee', 'Tech Creator', '95K Followers'],
        ].map((creator) => (
          <div className="creator-profile" key={creator[1]}>
            <div className="creator-avatar">{creator[0]}</div>
            <strong>{creator[1]}</strong>
            <small>{creator[2]}</small>
            <span>{creator[3]}</span>
          </div>
        ))}
      </div>

      <div className="creator-bottom">
        <span>Campaign collaboration</span>
        <strong>12 Active Projects</strong>
      </div>
    </div>
  );
}

function AdsVisual() {
  const bars = [38, 58, 46, 75, 60, 88, 68, 100, 78, 92];

  return (
    <div className="visual-card ads-visual">
      <div className="visual-topbar">
        <span>Campaign Performance</span>
        <span className="visual-status">Running</span>
      </div>

      <div className="ads-main-metric">
        <small>Return on Ad Spend</small>
        <strong>4.82x</strong>
        <span>↑ 24.8% this month</span>
      </div>

      <div className="ads-bars">
        {bars.map((height, index) => (
          <div className="ads-bar-wrap" key={index}>
            <div
              className="ads-bar"
              style={{ height: `${height}%` }}
            />
          </div>
        ))}
      </div>

      <div className="ads-footer">
        <div>
          <small>Impressions</small>
          <strong>248.5K</strong>
        </div>
        <div>
          <small>Conversions</small>
          <strong>3,842</strong>
        </div>
        <div>
          <small>Cost</small>
          <strong>$2,480</strong>
        </div>
      </div>
    </div>
  );
}

function CRMVisual() {
  const contacts = [
    ['JD', 'John Davis', 'New Opportunity', 'New'],
    ['EM', 'Emily Morgan', 'Follow-up Required', 'Active'],
    ['RK', 'Robert King', 'Customer', 'Done'],
  ];

  return (
    <div className="visual-card crm-visual">
      <div className="visual-topbar">
        <span>Customer Relationships</span>
        <span className="visual-status">Updated</span>
      </div>

      <div className="crm-total">
        <div>
          <small>Total Contacts</small>
          <strong>12,480</strong>
        </div>
        <span>+16.2%</span>
      </div>

      <div className="crm-contact-list">
        {contacts.map((contact) => (
          <div className="crm-contact" key={contact[1]}>
            <span className="crm-avatar">{contact[0]}</span>
            <div>
              <strong>{contact[1]}</strong>
              <small>{contact[2]}</small>
            </div>
            <span className="crm-tag">{contact[3]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceVisual({ type }) {
  switch (type) {
    case 'analytics':
      return <AnalyticsVisual />;
    case 'ai':
      return <AIVisual />;
    case 'social':
      return <SocialVisual />;
    case 'creator':
      return <CreatorVisual />;
    case 'ads':
      return <AdsVisual />;
    case 'crm':
      return <CRMVisual />;
    default:
      return null;
  }
}

function CinematicScenes({ start, onComplete }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root || !start) return;

    const ctx = gsap.context(() => {
      const scenes = gsap.utils.toArray('.cinematic-service');

      gsap.set(scenes, {
        autoAlpha: 0,
        scale: 1.04,
        filter: 'blur(8px)',
      });

      const master = gsap.timeline({
        onComplete: () => {
          onComplete?.();
        },
      });

      scenes.forEach((scene) => {
        const number = scene.querySelector('.service-number');
        const eyebrow = scene.querySelector('.service-eyebrow');
        const heading = scene.querySelector('.service-heading');
        const subtitle = scene.querySelector('.service-subtitle');
        const description = scene.querySelector('.service-description');
        const visual = scene.querySelector('.visual-card');

        const sceneTimeline = gsap.timeline();

        sceneTimeline
          .set(scene, {
            autoAlpha: 1,
            scale: 1,
            filter: 'blur(0px)',
          })
          .fromTo(
            number,
            { y: 25, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              ease: 'power3.out',
            }
          )
          .fromTo(
            eyebrow,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.35,
            },
            '-=0.2'
          )
          .fromTo(
            heading,
            { y: 65, opacity: 0, filter: 'blur(8px)' },
            {
              y: 0,
              opacity: 1,
              filter: 'blur(0px)',
              duration: 0.65,
              ease: 'power4.out',
            },
            '-=0.1'
          )
          .fromTo(
            subtitle,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.45,
            },
            '-=0.3'
          )
          .fromTo(
            description,
            { y: 25, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.45,
            },
            '-=0.25'
          )
          .fromTo(
            visual,
            {
              y: 65,
              scale: 0.88,
              opacity: 0,
              rotateY: -8,
              filter: 'blur(12px)',
            },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              rotateY: 0,
              filter: 'blur(0px)',
              duration: 0.85,
              ease: 'power4.out',
            },
            '-=0.4'
          )
          .to({}, { duration: 1.1 })
          .to(scene, {
            autoAlpha: 0,
            scale: 0.96,
            filter: 'blur(8px)',
            duration: 0.38,
            ease: 'power2.in',
          });

        master.add(sceneTimeline);
      });
    }, root);

    return () => ctx.revert();
  }, [start, onComplete]);

  return (
    <section className="cinematic-scenes" ref={rootRef}>
      <MauxisLightEffect />

      <div className="cinematic-scenes-content">
        {services.map((service) => (
          <article
            className={`cinematic-service service-${service.type}`}
            key={service.number}
          >
            <div className="service-copy">
              <span className="service-number">
                {service.number} / 06
              </span>

              <p className="service-eyebrow">
                THE M-AUXIS ECOSYSTEM
              </p>

              <h2 className="service-heading">
                {service.name}
              </h2>

              <h3 className="service-subtitle">
                {service.subtitle}
              </h3>

              <p className="service-description">
                {service.description}
              </p>

              <div className="service-bottom-line">
                <span />
                <small>EXPLORE THE POSSIBILITIES</small>
              </div>
            </div>

            <div className="service-visual">
              <ServiceVisual type={service.type} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CinematicScenes;
