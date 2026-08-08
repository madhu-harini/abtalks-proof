import { useState } from 'react'
import './App.css'

type Track = 'software' | 'data' | 'ai' | ''

function Nav() {
  return (
    <nav>
      <div className="brand">
        <span>AB</span>
        <strong>ABTalks</strong>
      </div>

      <button className="menu-button" aria-label="Open menu">
        ☰
      </button>
    </nav>
  )
}

/* =========================================================
   LANDING PAGE
========================================================= */

function LandingPage() {
  const [selectedTrack, setSelectedTrack] = useState<Track>('')

  const scrollToTracks = () => {
    document
      .getElementById('tracks')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <Nav />

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
          Become visible through real work.
        </p>

        <button
          className="primary-button"
          onClick={scrollToTracks}
        >
          Choose your track
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
          Don't just learn.
          <br />
          <span>leave proof.</span>
        </h2>

        <p className="trust-description">
          Every day gives you something real to build,
          document, and share. By Day 60, your consistency
          becomes a body of work you can actually show.
        </p>

        <div className="trust-list">
          <div className="trust-item">
            <span className="trust-icon">01</span>

            <div>
              <strong>Real daily projects</strong>

              <p>
                Learn by building instead of collecting
                another list of tutorials.
              </p>
            </div>
          </div>

          <div className="trust-item">
            <span className="trust-icon">02</span>

            <div>
              <strong>Public proof of work</strong>

              <p>
                Your GitHub commits and LinkedIn posts
                show that you're actually building.
              </p>
            </div>
          </div>

          <div className="trust-item">
            <span className="trust-icon">03</span>

            <div>
              <strong>A portfolio that grows daily</strong>

              <p>
                Your challenge isn't just a streak.
                It's a record of what you learned and shipped.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT JOURNEY */}
      <section className="journey-section">
        <p className="section-label">A STUDENT JOURNEY</p>

        <h2>
          See what
          <br />
          <span>60 days can build.</span>
        </h2>

        <p className="journey-intro">
          From showing up on Day 01 to building a visible
          body of work by Day 60.
        </p>

        <div className="journey-card">
          <div className="journey-card-top">
            <div className="journey-avatar">AS</div>

            <div>
              <strong>Arjun Sharma</strong>
              <span>
                Software Engineering • Completed
              </span>
            </div>
          </div>

          <div className="journey-progress">
            <div>
              <span>CHALLENGE</span>
              <strong>60 / 60 days</strong>
            </div>

            <div>
              <span>BUILDS</span>
              <strong>47 projects</strong>
            </div>
          </div>

          <p className="journey-quote">
            “I stopped waiting to feel ready and started
            shipping something every day.”
          </p>

          <div className="journey-proof">
            <span>✓ GitHub proof</span>
            <span>✓ LinkedIn proof</span>
            <span>✓ 60 day streak</span>
          </div>

          <div className="journey-footer">
            Day 01 → Day 60
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section className="track-section" id="tracks">
        <p className="section-label">CHOOSE YOUR PATH</p>

        <h2>
          Pick a track.
          <br />
          <span>Start building.</span>
        </h2>

        <p className="track-intro">
          Choose the area you want to grow in. Your daily
          missions will follow your selected track.
        </p>

        <div className="track-list">
          <button
            className={`track-card ${
              selectedTrack === 'software'
                ? 'selected'
                : ''
            }`}
            onClick={() => setSelectedTrack('software')}
          >
            <div className="track-icon">⌘</div>

            <div className="track-content">
              <strong>Software Engineering</strong>

              <span>
                Build websites, apps, APIs and real products.
              </span>
            </div>

            <span className="track-arrow">→</span>
          </button>

          <button
            className={`track-card ${
              selectedTrack === 'data'
                ? 'selected'
                : ''
            }`}
            onClick={() => setSelectedTrack('data')}
          >
            <div className="track-icon">◫</div>

            <div className="track-content">
              <strong>Data Science</strong>

              <span>
                Work with data, analysis, visualisation
                and insights.
              </span>
            </div>

            <span className="track-arrow">→</span>
          </button>

          <button
            className={`track-card ${
              selectedTrack === 'ai'
                ? 'selected'
                : ''
            }`}
            onClick={() => setSelectedTrack('ai')}
          >
            <div className="track-icon">✦</div>

            <div className="track-content">
              <strong>AI / Machine Learning</strong>

              <span>
                Build intelligent systems and practical
                AI projects.
              </span>
            </div>

            <span className="track-arrow">→</span>
          </button>
        </div>

        {selectedTrack && (
          <>
            <div className="track-selected-message">
              <span>✓</span>

              <div>
                <strong>
                  {selectedTrack === 'software'
                    ? 'Software Engineering selected'
                    : selectedTrack === 'data'
                    ? 'Data Science selected'
                    : 'AI / Machine Learning selected'}
                </strong>

                <p>
                  Your 60-day journey starts with your
                  first build.
                </p>
              </div>
            </div>

            <button
              className="primary-button track-start-button"
              onClick={() => {
                window.location.href = '/dashboard'
              }}
            >
              Start my 60 days
              <span>→</span>
            </button>
          </>
        )}
      </section>

      {/* DAILY LOOP */}
      <section className="how-section">
        <p className="section-label">THE DAILY LOOP</p>

        <h2>
          BUILD.
          <br />
          <span>PROVE. GROW.</span>
        </h2>

        <div className="step">
          <span className="step-number">01</span>

          <div>
            <h3>BUILD</h3>

            <p>
              Complete today's coding mission and ship
              something real.
            </p>
          </div>
        </div>

        <div className="step">
          <span className="step-number">02</span>

          <div>
            <h3>PROVE</h3>

            <p>
              Submit your GitHub commit and share your
              progress on LinkedIn.
            </p>
          </div>
        </div>

        <div className="step">
          <span className="step-number">03</span>

          <div>
            <h3>GROW</h3>

            <p>
              Turn 60 days of small actions into visible
              developer proof.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-section">
        <p className="section-label">YOUR NEXT 60 DAYS</p>

        <h2>
          Ready to
          <br />
          <span>build?</span>
        </h2>

        <button
          className="primary-button"
          onClick={scrollToTracks}
        >
          Choose your track
          <span>→</span>
        </button>
      </section>

      <Footer />
    </main>
  )
}

/* =========================================================
   DASHBOARD
========================================================= */

function DashboardPage() {
  return (
    <main>
      <Nav />

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

      {/* STREAK */}
      <section className="streak-dashboard-card">
        <div>
          <span className="card-label">
            CURRENT STREAK
          </span>

          <strong>🔥 12 days</strong>
        </div>

        <span className="streak-small">
          Best: 12
        </span>
      </section>

      {/* TODAY */}
      <section className="today-card">
        <p className="section-label">
          TODAY'S MISSION
        </p>

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
          onClick={() => {
            window.location.href = '/day/12'
          }}
        >
          Start today's task
          <span>→</span>
        </button>
      </section>

      {/* PROGRESS */}
      <section className="dashboard-progress">
        <div className="section-heading">
          <div>
            <p className="section-label">
              YOUR PROGRESS
            </p>

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

      {/* STANDING */}
      <section className="standing-card">
        <p className="section-label">
          YOUR STANDING
        </p>

        <div className="standing-grid">
          <div>
            <strong>#128</strong>
            <span>Challenge rank</span>
          </div>

          <div>
            <strong>Top 18%</strong>
            <span>Among active builders</span>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="achievement-card">
        <p className="section-label">
          ACHIEVEMENTS
        </p>

        <div className="achievement-list">
          <div className="achievement-row">
            <span className="achievement-icon">
              🔥
            </span>

            <div>
              <h3>12 Day Streak</h3>

              <p>
                You've shown up consistently for 12 days.
              </p>
            </div>
          </div>

          <div className="achievement-row">
            <span className="achievement-icon">
              🚀
            </span>

            <div>
              <h3>First 10 Builds</h3>

              <p>
                You shipped your first ten projects.
              </p>
            </div>
          </div>

          <div className="achievement-row locked">
            <span className="achievement-icon">
              🔒
            </span>

            <div>
              <h3>30 Day Builder</h3>

              <p>
                Complete 30 days to unlock this badge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF PORTFOLIO */}
      <section className="portfolio-card">
        <p className="section-label">
          PROOF PORTFOLIO
        </p>

        <h2>
          12 days.
          <br />
          <span>12 pieces of proof.</span>
        </h2>

        <p>
          Your GitHub commits and LinkedIn posts are
          becoming a visible record of your growth.
        </p>

        <button className="secondary-button">
          View my proof →
        </button>
      </section>

      <Footer />
    </main>
  )
}

/* =========================================================
   DAY 12
========================================================= */

function ChallengeDayPage() {
  const [github, setGithub] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <main>
      <Nav />

      <section className="day-header">
        <p className="section-label">
          DAY 12 / 60
        </p>

        <div className="day-header-row">
          <div>
            <h1>
              Build a
              <br />
              <span>landing page.</span>
            </h1>
          </div>

          <div className="day-number">
            12
          </div>
        </div>

        <div className="day-meta">
          <span>SOFTWARE ENGINEERING</span>
          <span>•</span>
          <span>45–60 MIN</span>
        </div>
      </section>

      {/* MISSION */}
      <section className="mission-section">
        <p className="section-label">
          TODAY'S MISSION
        </p>

        <h2>
          Make something people
          <br />
          <span>want to explore.</span>
        </h2>

        <p className="mission-description">
          Build a responsive landing page for a project,
          product or idea. Focus on clear messaging,
          visual hierarchy and a strong call to action.
        </p>

        <div className="mission-box">
          <strong>What to build</strong>

          <ul>
            <li>A clear headline</li>
            <li>A short product description</li>
            <li>One strong call-to-action</li>
            <li>Responsive mobile layout</li>
            <li>Clean visual hierarchy</li>
          </ul>
        </div>
      </section>

      {/* ACCEPTANCE */}
      <section className="acceptance-section">
        <p className="section-label">
          DONE WHEN
        </p>

        <div className="check-list">
          <div>
            <span>01</span>
            <p>
              Your page works on mobile.
            </p>
          </div>

          <div>
            <span>02</span>
            <p>
              Someone can understand your idea in 10 seconds.
            </p>
          </div>

          <div>
            <span>03</span>
            <p>
              Your project is committed to GitHub.
            </p>
          </div>

          <div>
            <span>04</span>
            <p>
              You share your build on LinkedIn.
            </p>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="submission-section">
        <p className="section-label">
          PROVE YOUR WORK
        </p>

        <h2>
          Don't just say
          <br />
          <span>you built it.</span>
        </h2>

        <p className="submission-description">
          Add both pieces of proof to complete Day 12.
        </p>

        <div className="submission-card">
          <div className="submission-icon">
            GH
          </div>

          <div className="submission-content">
            <strong>GitHub repository / commit</strong>

            <span>
              Paste the link to your repository or today's commit.
            </span>
          </div>

          <input
            type="url"
            placeholder="https://github.com/..."
            value={github}
            onChange={(event) =>
              setGithub(event.target.value)
            }
          />
        </div>

        <div className="submission-card">
          <div className="submission-icon linkedin">
            in
          </div>

          <div className="submission-content">
            <strong>LinkedIn post</strong>

            <span>
              Share what you built and what you learned today.
            </span>
          </div>

          <input
            type="url"
            placeholder="https://linkedin.com/posts/..."
            value={linkedin}
            onChange={(event) =>
              setLinkedin(event.target.value)
            }
          />
        </div>

        {submitted ? (
          <div className="success-message">
            <span>✓</span>

            <div>
              <strong>Day 12 submitted.</strong>

              <p>
                Your proof has been recorded. Keep building.
              </p>
            </div>
          </div>
        ) : (
          <button
            className="primary-button submit-button"
            disabled={!github || !linkedin}
            onClick={() => setSubmitted(true)}
          >
            Complete Day 12
            <span>→</span>
          </button>
        )}
      </section>

      <Footer />
    </main>
  )
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer>
      <strong>ABTalks</strong>

      <span>
        BUILD → PROVE → GROW
      </span>
    </footer>
  )
}

/* =========================================================
   APP ROUTER
========================================================= */

function App() {
  const path = window.location.pathname

  if (path === '/dashboard') {
    return <DashboardPage />
  }

  if (path === '/day/12') {
    return <ChallengeDayPage />
  }

  return <LandingPage />
}

export default App