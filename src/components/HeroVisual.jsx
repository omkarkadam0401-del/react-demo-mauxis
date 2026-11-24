
function HeroVisual() {
  return (
    <div className="hero-visual">

      <div className="dashboard-main">
        <div className="dashboard-top">
          <h3>M-Auxis Studio</h3>
          <span>Overview</span>
        </div>

        <div className="dashboard-welcome">
          <p>Welcome back!</p>
          <h2>Your Creative Workspace</h2>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <span>Projects</span>
            <h2>24</h2>
            <small>Active projects</small>
          </div>

          <div className="stat-card">
            <span>Campaigns</span>
            <h2>18</h2>
            <small>Running campaigns</small>
          </div>
        </div>

        <div className="dashboard-bottom">
          <span>Creative Studio</span>
          <span>Analytics</span>
          <span>Growth</span>
        </div>
      </div>

      <div className="floating-ui ui-top">
        <span>✦</span> Creative Design
      </div>

      <div className="floating-ui ui-bottom">
        <span>↗</span> Campaign Growth
      </div>

    </div>
  );
}

export default HeroVisual;
