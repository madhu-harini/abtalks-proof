import { useState } from 'react'
import './App.css'

type Track = 'Software Engineering' | 'Data Science' | 'AI / ML'

function LandingPage() {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)

  const startChallenge = () => {
    if (selectedTrack) {
      localStorage.setItem('abtalks-track', selectedTrack)
    }

    window.location.href = '/dashboard'
  }

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

      {/* HERO */}
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
          onClick={startChallenge}
        >
          {selectedTrack
            ? `Start ${selectedTrack}`
            : 'Start your 60 days'}
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

      {/* TRUST */}
      <section className="trust-section">
        <p className="section-label">WHY ABTALKS</p>

        <h2>
          Your 60 days
          <br />
          <span>leave a trail.</span>
        </h2>

        <p className="trust-description">
          This isn't just about keeping a streak alive.
          Every day gives you something real to show.
        </p>

        <div className="trust-list">
          <div className="trust-item">
            <span className="trust-icon">01</span>

            <div>
              <strong>Learn & build daily</strong>
              <p>
                Turn each challenge day into something
                you actually make.
              </p>
            </div>
          </div>

          <div className="trust-item">
            <span className="trust-icon">02</span>

            <div>
              <strong>Prove your work</strong>
              <p>
                Keep your GitHub and LinkedIn proof
                connected to your journey.
              </p>
            </div>
          </div>

          <div className="trust-item">
            <span className="trust-icon">03</span>

            <div>
              <strong>Grow your body of work</strong>
              <p>
                Finish with 60 days of visible progress
                instead of an empty streak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTICIPANT JOURNEY */}
      <section className="journey-section">
        <p className="section-label">
          PEOPLE WHO BUILT BEFORE YOU
        </p>

        <h2>
          Real journeys.
          <br />
          <span>Real proof.</span>
        </h2>

        <p className="journey-intro">
          Students are already showing up, building,
          and sharing their progress.
        </p>

        <div className="journey-card">
          <div className="journey-card-top">
            <div className="journey-avatar">
              SY
            </div>

            <div>
              <strong>Shubham Yadav</strong>
              <span>ABTalks participant</span>
            </div>
          </div>

          <div className="journey-progress">
            <div>
              <span>JOURNEY</span>
              <strong>DAY 01 → DAY 06+</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>PYTHON + PROBLEM SOLVING</strong>
            </div>
          </div>

          <p className="journey-quote">
            Small steps like these are helping me build
            a strong foundation in problem-solving.
          </p>

          <div className="journey-proof">
            <span>✓ Daily build</span>
            <span>✓ GitHub proof</span>
            <span>✓ LinkedIn progress</span>
          </div>

          <button
            className="secondary-button"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/shubham-yadav-54433524a/',
                '_blank'
              )
            }
          >
            View public journey
            <span>↗</span>
          </button>
        </div>

        <p className="journey-footer">
          Every journey starts with Day 1.
        </p>
      </section>

      {/* TRACK SELECTION */}
      <section className="track-section">
        <p className="section-label">CHOOSE YOUR PATH</p>

        <h2>
          What do you want
          <br />
          <span>to build toward?</span>
        </h2>

        <p className="track-intro">
          Pick a track and make the next 60 days
          count toward something you want to become
          good at.
        </p>

        <div className="track-list">
          <button
            className={`track-card ${
              selectedTrack === 'Software Engineering'
                ? 'selected'
                : ''
            }`}
            onClick={() =>
              setSelectedTrack('Software Engineering')
            }
          >
            <div className="track-icon">⌘</div>

            <div className="track-content">
              <strong>Software Engineering</strong>

              <span>
                Build products, systems and web apps.
              </span>
            </div>

            <span className="track-arrow">→</span>
          </button>

          <button
            className={`track-card ${
              selectedTrack === 'Data Science'
                ? 'selected'
                : ''
            }`}
            onClick={() => setSelectedTrack('Data Science')}
          >
            <div className="track-icon">◫</div>

            <div className="track-content">
              <strong>Data Science</strong>

              <span>
                Turn data into useful insights.
              </span>
            </div>

            <span className="track-arrow">→</span>
          </button>

          <button
            className={`track-card ${
              selectedTrack === 'AI / ML'
                ? 'selected'
                : ''
            }`}
            onClick={() => setSelectedTrack('AI / ML')}
          >
            <div className="track-icon">✦</div>

            <div className="track-content">
              <strong>AI / ML</strong>

              <span>
                Build intelligent systems and experiences.
              </span>
            </div>

            <span className="track-arrow">→</span>
          </button>
        </div>

        {selectedTrack && (
          <div className="track-selected-message">
            <span>✓</span>
            <div>
              <strong>{selectedTrack}</strong>
              <p>Your 60-day journey starts here.</p>
            </div>
          </div>
        )}

        <button
          className="primary-button track-start-button"
          onClick={startChallenge}
          disabled={!selectedTrack}
        >
          {selectedTrack
            ? `Start ${selectedTrack}`
            : 'Select a track first'}
          <span>→</span>
        </button>
      </section>

      {/* PROOF */}
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

      {/* HOW IT WORKS */}
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

      {/* CTA */}
      <section className="cta-section">
        <p className="section-label">YOUR NEXT 60 DAYS</p>

        <h2>
          Ready to
          <br />
          <span>build?</span>
        </h2>

        <button
          className="primary-button"
          onClick={startChallenge}
        >
          {selectedTrack
            ? `Start ${selectedTrack}`
            : 'Choose your track'}
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
  const savedTrack =
    localStorage.getItem('abtalks-track') ||
    'Software Engineering'

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
        <p className="section-label">
          {savedTrack.toUpperCase()}
        </p>

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