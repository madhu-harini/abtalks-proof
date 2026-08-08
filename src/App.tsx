import './App.css'

function LandingPage() {
  return (
    <main>
      <nav>
        <div className="brand">
          <span>AB</span>
          <strong>ABTalks</strong>
        </div>

        <button className="menu-button" aria-label="Open menu">
          ☰
        </button>
      </nav>

      <section className="hero">
        <p className="eyebrow">60-DAY CODING CHALLENGE</p>

        <h1>
          60 DAYS
          <br />
          OF BUILDING.
        </h1>

        <p className="hero-subtitle">
          Turn consistency into proof.
        </p>

        <p className="hero-description">
          Build something every day. Ship it. Prove it.
          Become visible.
        </p>

        <button
          className="primary-button"
          onClick={() => (window.location.href = '/dashboard')}
        >
          Start your 60 days
          <span>→</span>
        </button>

        <div className="challenge-meta">
          <span>60 days</span>
          <span>•</span>
          <span>Daily builds</span>
          <span>•</span>
          <span>GitHub + LinkedIn</span>
        </div>
      </section>

      <section className="proof-section">
        <p className="section-label">THE IDEA</p>

        <h2>
          Your work,
          <br />
          <span>not just a streak.</span>
        </h2>

        <p>
          Every day you ship becomes another piece of
          proof in your developer journey.
        </p>

        <div className="progress-card">
          <div className="progress-top">
            <span>DAY 12 / 60</span>
            <span>20%</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" />
          </div>

          <div className="streak">
            <span>🔥</span>
            <strong>12 day streak</strong>
          </div>
        </div>
      </section>

      <section className="how-section">
        <p className="section-label">HOW IT WORKS</p>

        <div className="step">
          <span className="step-number">01</span>
          <div>
            <h3>BUILD</h3>
            <p>Complete today's coding mission.</p>
          </div>
        </div>

        <div className="step">
          <span className="step-number">02</span>
          <div>
            <h3>PROVE</h3>
            <p>Submit your GitHub and LinkedIn proof.</p>
          </div>
        </div>

        <div className="step">
          <span className="step-number">03</span>
          <div>
            <h3>GROW</h3>
            <p>Watch your developer journey take shape.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <p className="section-label">YOUR NEXT 60 DAYS</p>

        <h2>
          Ready to
          <br />
          <span>build?</span>
        </h2>

        <button
          className="primary-button"
          onClick={() => (window.location.href = '/dashboard')}
        >
          Start the challenge
          <span>→</span>
        </button>
      </section>

      <footer>
        <strong>ABTalks</strong>
        <span>BUILD → PROVE → GROW</span>
      </footer>
    </main>
  )
}

function DashboardPage() {
  return (
    <main className="dashboard">
      <nav>
        <div className="brand">
          <span>AB</span>
          <strong>ABTalks</strong>
        </div>

        <button
          className="menu-button"
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      <section className="dashboard-header">
        <p className="section-label">YOUR DASHBOARD</p>

        <h1>
          Keep
          <br />
          <span>building.</span>
        </h1>

        <p>
          You're on Day 12 of your 60-day journey.
        </p>
      </section>

      <section className="streak-dashboard-card">
        <div>
          <span className="card-label">CURRENT STREAK</span>
          <strong>🔥 12 days</strong>
        </div>

        <span className="streak-small">Best: 12</span>
      </section>

      <section className="today-card">
        <p className="section-label">TODAY'S MISSION</p>

        <h2>Build a landing page</h2>

        <p>
          Create a simple landing page that explains
          your project clearly and gives visitors a reason
          to explore it.
        </p>

        <div className="task-meta">
          <span>DAY 12</span>
          <span>•</span>
          <span>45 MIN</span>
        </div>

        <button
          className="primary-button"
          onClick={() => (window.location.href = '/day/12')}
        >
          Start today's task
          <span>→</span>
        </button>
      </section>

      <section className="dashboard-progress">
        <div className="section-heading">
          <div>
            <p className="section-label">YOUR PROGRESS</p>
            <h2>12 / 60 days</h2>
          </div>

          <strong>20%</strong>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: '20%' }}
          />
        </div>

        <p>
          12 completed days. Keep going — you're building
          proof one day at a time.
        </p>
      </section>

      <section className="achievement-card">
        <p className="section-label">ACHIEVEMENT</p>

        <div className="achievement-row">
          <span className="achievement-icon">🔥</span>

          <div>
            <h3>12 Day Streak</h3>
            <p>
              You've shown up consistently for 12 days.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <strong>ABTalks</strong>
        <span>BUILD → PROVE → GROW</span>
      </footer>
    </main>
  )
}

function App() {
  const path = window.location.pathname

  if (path === '/dashboard') {
    return <DashboardPage />
  }

  return <LandingPage />
}

export default App