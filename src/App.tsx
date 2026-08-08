import { useState } from 'react'
import './App.css'

type Track =
  | 'Software Engineering'
  | 'Data Science'
  | 'AI / ML'

/* =========================================================
   SHARED NAV
========================================================= */

function Navigation() {
  return (
    <nav>
      <div className="brand">
        <span>AB</span>
        <strong>ABTalks</strong>
      </div>

      <button
        className="menu-button"
        aria-label="Open menu"
        onClick={() => {
          window.location.href = '/'
        }}
      >
        ☰
      </button>
    </nav>
  )
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer>
      <strong>ABTalks</strong>
      <span>BUILD → PROVE → GROW</span>
    </footer>
  )
}

/* =========================================================
   LANDING PAGE
========================================================= */

function LandingPage() {
  const [selectedTrack, setSelectedTrack] =
    useState<Track | null>(null)

  const startChallenge = () => {
    if (selectedTrack) {
      localStorage.setItem(
        'abtalks-track',
        selectedTrack
      )
    }

    window.location.href = '/dashboard'
  }

  return (
    <main>
      <Navigation />

      {/* HERO */}
      <section className="hero">
        <p className="eyebrow">
          60-DAY CODING CHALLENGE
        </p>

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

      {/* ALUMNI / STUDENT JOURNEY */}
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
              <strong>
                PYTHON + PROBLEM SOLVING
              </strong>
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
        <p className="section-label">
          CHOOSE YOUR PATH
        </p>

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
              setSelectedTrack(
                'Software Engineering'
              )
            }
          >
            <div className="track-icon">⌘</div>

            <div className="track-content">
              <strong>
                Software Engineering
              </strong>

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
            onClick={() =>
              setSelectedTrack('Data Science')
            }
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
            onClick={() =>
              setSelectedTrack('AI / ML')
            }
          >
            <div className="track-icon">✦</div>

            <div className="track-content">
              <strong>AI / ML</strong>

              <span>
                Build intelligent systems and
                experiences.
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

              <p>
                Your 60-day journey starts here.
              </p>
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
            <div
              className="progress-fill"
              style={{ width: '20%' }}
            />
          </div>

          <div className="streak">
            <span>🔥</span>
            <strong>12 day streak</strong>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <p className="section-label">
          HOW IT WORKS
        </p>

        <div className="step">
          <span className="step-number">01</span>

          <div>
            <h3>BUILD</h3>
            <p>
              Complete today's coding mission.
            </p>
          </div>
        </div>

        <div className="step">
          <span className="step-number">02</span>

          <div>
            <h3>PROVE</h3>
            <p>
              Submit your GitHub and LinkedIn proof.
            </p>
          </div>
        </div>

        <div className="step">
          <span className="step-number">03</span>

          <div>
            <h3>GROW</h3>
            <p>
              Watch your developer journey take shape.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <p className="section-label">
          YOUR NEXT 60 DAYS
        </p>

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

      <Footer />
    </main>
  )
}

/* =========================================================
   DASHBOARD
========================================================= */

function DashboardPage() {
  const savedTrack =
    localStorage.getItem('abtalks-track') ||
    'Software Engineering'

  const completedDays = 12
  const currentDay = 12

  const days = Array.from(
    { length: 60 },
    (_, index) => index + 1
  )

  const badges = [
    {
      icon: '🔥',
      title: 'First Week',
      description: 'Complete 7 days',
      unlocked: completedDays >= 7,
    },
    {
      icon: '⚡',
      title: 'Consistency',
      description: 'Complete 10 days',
      unlocked: completedDays >= 10,
    },
    {
      icon: '🏆',
      title: 'Halfway There',
      description: 'Reach Day 30',
      unlocked: completedDays >= 30,
    },
    {
      icon: '💎',
      title: 'Challenge Complete',
      description: 'Finish all 60 days',
      unlocked: completedDays >= 60,
    },
  ]

  const unlockedCount = badges.filter(
    (badge) => badge.unlocked
  ).length

  return (
    <main>
      <Navigation />

      {/* HEADER */}
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
          You're on Day {currentDay} of your
          60-day journey.
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
          your project clearly and gives visitors a
          reason to explore it.
        </p>

        <div className="task-meta">
          <span>DAY 12</span>
          <span>•</span>
          <span>45 MIN</span>
        </div>

        <button
          className="primary-button"
          onClick={() =>
            (window.location.href = '/day/12')
          }
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
          12 completed days. Keep going — you're
          building proof one day at a time.
        </p>
      </section>

      {/* 60 DAY MAP */}
      <section className="journey-map-section">
        <p className="section-label">
          YOUR 60-DAY JOURNEY
        </p>

        <h2>
          See how far
          <br />
          <span>you've come.</span>
        </h2>

        <p className="journey-map-intro">
          Every square represents one day of building,
          proving and growing.
        </p>

        <div className="journey-map-card">
          <div className="journey-map-header">
            <div>
              <strong>DAY {currentDay}</strong>
              <span> of 60</span>
            </div>

            <span className="journey-map-percent">
              20%
            </span>
          </div>

          <div className="day-grid">
            {days.map((day) => {
              const isCompleted =
                day <= completedDays

              const isToday =
                day === currentDay

              const isMissed =
                day === 8

              return (
                <button
                  key={day}
                  className={`day-cell
                    ${isCompleted ? 'completed' : ''}
                    ${isToday ? 'today' : ''}
                    ${isMissed ? 'missed' : ''}
                    ${day > currentDay ? 'locked' : ''}
                  `}
                  title={`Day ${day}`}
                  onClick={() => {
                    if (day <= currentDay) {
                      window.location.href =
                        `/day/${day}`
                    }
                  }}
                >
                  <span>{day}</span>
                </button>
              )
            })}
          </div>

          <div className="journey-legend">
            <span>
              <i className="legend-dot completed-dot" />
              Completed
            </span>

            <span>
              <i className="legend-dot today-dot" />
              Today
            </span>

            <span>
              <i className="legend-dot missed-dot" />
              Missed
            </span>

            <span>
              <i className="legend-dot locked-dot" />
              Upcoming
            </span>
          </div>
        </div>
      </section>

      {/* STANDING */}
      <section className="standing-card">
        <div className="standing-top">
          <div>
            <p className="section-label">
              YOUR STANDING
            </p>

            <h2>
              Top <span>18%</span>
            </h2>
          </div>

          <div className="standing-icon">
            ↑
          </div>
        </div>

        <p>
          You're ahead of most active participants.
          Keep your streak alive to move higher.
        </p>

        <div className="standing-stats">
          <div>
            <strong>12</strong>
            <span>Days built</span>
          </div>

          <div>
            <strong>12</strong>
            <span>Proof posts</span>
          </div>

          <div>
            <strong>#184</strong>
            <span>Standing</span>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="achievements-section">
        <div className="section-heading">
          <div>
            <p className="section-label">
              ACHIEVEMENTS
            </p>

            <h2>Keep unlocking.</h2>
          </div>

          <span className="badge-count">
            {unlockedCount} / {badges.length}
          </span>
        </div>

        <div className="badge-grid">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className={`badge-card ${
                badge.unlocked
                  ? 'unlocked'
                  : 'locked'
              }`}
            >
              <div className="badge-icon">
                {badge.icon}
              </div>

              <strong>{badge.title}</strong>

              <span>{badge.description}</span>

              {badge.unlocked ? (
                <small>✓ Unlocked</small>
              ) : (
                <small>🔒 Locked</small>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* MISSED DAY */}
      <section className="missed-day-card">
        <div className="missed-day-icon">
          !
        </div>

        <div>
          <p className="section-label">
            MISSED A DAY?
          </p>

          <h3>Your journey isn't broken.</h3>

          <p>
            One missed day doesn't erase your progress.
            Come back, complete today's mission and
            keep building.
          </p>
        </div>
      </section>

      {/* LATEST ACHIEVEMENT */}
      <section className="achievement-card">
        <p className="section-label">
          LATEST ACHIEVEMENT
        </p>

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
      </section>

      <Footer />
    </main>
  )
}

/* =========================================================
   DAY PAGE
========================================================= */

function DayPage() {
  return (
    <main>
      <Navigation />

      <section className="day-hero">
        <p className="section-label">
          DAY 12 / 60
        </p>

        <h1>
          Build a
          <br />
          <span>landing page.</span>
        </h1>

        <p className="day-intro">
          Today's mission is simple: build something,
          ship it and turn your work into proof.
        </p>

        <div className="task-meta">
          <span>⏱ 45 MIN</span>
          <span>•</span>
          <span>BEGINNER</span>
        </div>
      </section>

      {/* MISSION */}
      <section className="mission-card">
        <p className="section-label">
          TODAY'S MISSION
        </p>

        <h2>
          Create something worth showing.
        </h2>

        <p>
          Build a simple landing page that explains
          your project clearly and gives visitors a
          reason to care.
        </p>

        <div className="mission-points">
          <div>
            <span>01</span>
            <p>Choose a clear idea</p>
          </div>

          <div>
            <span>02</span>
            <p>Build the landing page</p>
          </div>

          <div>
            <span>03</span>
            <p>Ship it publicly</p>
          </div>
        </div>
      </section>

      {/* BUILD / PROVE / GROW */}
      <section className="flow-section">
        <p className="section-label">
          BUILD → PROVE → GROW
        </p>

        <div className="flow-step active">
          <div className="flow-number">
            01
          </div>

          <div className="flow-content">
            <span className="flow-label">
              BUILD
            </span>

            <h3>
              Complete today's mission
            </h3>

            <p>
              Spend the next 45 minutes building
              something you can show.
            </p>

            <button className="primary-button">
              Mark build complete
              <span>✓</span>
            </button>
          </div>
        </div>

        <div className="flow-line" />

        <div className="flow-step">
          <div className="flow-number">
            02
          </div>

          <div className="flow-content">
            <span className="flow-label">
              PROVE
            </span>

            <h3>Show your work</h3>

            <p>
              Add the GitHub commit and LinkedIn post
              that prove you showed up today.
            </p>

            <div className="proof-input-group">
              <label>GITHUB COMMIT</label>

              <input
                type="url"
                placeholder="https://github.com/..."
              />

              <button className="secondary-button">
                Add GitHub proof
              </button>
            </div>

            <div className="proof-input-group">
              <label>LINKEDIN POST</label>

              <input
                type="url"
                placeholder="https://linkedin.com/..."
              />

              <button className="secondary-button">
                Add LinkedIn proof
              </button>
            </div>
          </div>
        </div>

        <div className="flow-line" />

        <div className="flow-step">
          <div className="flow-number">
            03
          </div>

          <div className="flow-content">
            <span className="flow-label">
              GROW
            </span>

            <h3>
              Turn today's work into proof.
            </h3>

            <p>
              Every completed day becomes another
              piece of your developer journey.
            </p>

            <div className="growth-preview">
              <span>🔥</span>

              <div>
                <strong>12 day streak</strong>

                <p>
                  48 days left in your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETION */}
      <section className="completion-card">
        <span className="completion-icon">
          ✦
        </span>

        <p className="section-label">
          KEEP GOING
        </p>

        <h2>
          Your next piece
          <br />
          <span>of proof.</span>
        </h2>

        <p>
          Complete today's build and keep your
          developer journey moving forward.
        </p>

        <button
          className="primary-button"
          onClick={() =>
            (window.location.href = '/dashboard')
          }
        >
          Back to dashboard
          <span>→</span>
        </button>
      </section>

      <Footer />
    </main>
  )
}

/* =========================================================
   APP ROUTING
========================================================= */

function App() {
  const path = window.location.pathname

  if (path === '/dashboard') {
    return <DashboardPage />
  }

  if (path === '/day/12') {
    return <DayPage />
  }

  return <LandingPage />
}

export default App