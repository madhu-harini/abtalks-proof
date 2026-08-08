import './App.css'

function App() {
  return (
    <main className="landing-page">
      <nav className="navbar">
        <div className="brand">
          <span className="brand-mark">AB</span>
          <span>ABTalks</span>
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

        <button className="primary-button">
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

        <button className="primary-button">
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

export default App