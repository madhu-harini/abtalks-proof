import { useState } from 'react'
import './App.css'

type Track =
  | 'Software Engineering'
  | 'Data Science'
  | 'AI / ML'

type DayProof = {
  github?: string
  linkedin?: string
}

type JourneyState = {
  track: Track
  completedDays: number[]
  proofs: Record<number, DayProof>
}

const STORAGE_KEY = 'abtalks-journey'

const missions = [
  'Set up your development environment',
  'Build a simple personal profile page',
  'Create a responsive navigation bar',
  'Build a reusable card component',
  'Create a form with validation',
  'Build a responsive landing page',
  'Refactor one piece of existing code',
  'Create a reusable button system',
  'Build a simple dashboard layout',
  'Create a searchable list',
  'Build a modal component',
  'Build a landing page',
  'Create a pricing section',
  'Build a responsive hero section',
  'Create a portfolio project section',
  'Build a contact form',
  'Create a mobile-first layout',
  'Build a reusable table',
  'Create a loading state system',
  'Build an error state',
  'Create a settings page',
  'Build a profile dashboard',
  'Create a reusable input system',
  'Build a notification component',
  'Create a navigation sidebar',
  'Build a statistics dashboard',
  'Create a dark mode interface',
  'Build a search experience',
  'Create a filtering system',
  'Build a project management card',
  'Create a GitHub-style activity grid',
  'Build a progress tracker',
  'Create an authentication screen',
  'Build a registration flow',
  'Create a password reset screen',
  'Build an API-powered interface',
  'Connect a public API',
  'Display API data cleanly',
  'Handle API loading states',
  'Handle API errors',
  'Build a data visualization',
  'Create a user analytics screen',
  'Build a notification center',
  'Create a command palette',
  'Build a responsive dashboard',
  'Create a reusable modal system',
  'Build a complete feature page',
  'Improve accessibility',
  'Optimize your UI',
  'Refactor your project',
  'Add meaningful documentation',
  'Improve your GitHub README',
  'Create a project demo',
  'Write a technical project post',
  'Publish your work',
  'Review your previous builds',
  'Improve your strongest project',
  'Create a polished portfolio case study',
  'Prepare your final project',
  'Ship your 60-day project',
]

function getDefaultJourney(): JourneyState {
  return {
    track:
      (localStorage.getItem('abtalks-track') as Track) ||
      'Software Engineering',

    // Keeps the current demo experience.
    // The user starts at Day 13 and can continue from there.
    completedDays: Array.from(
      { length: 12 },
      (_, index) => index + 1
    ),

    proofs: {},
  }
}

function loadJourney(): JourneyState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)

    if (!saved) {
      const initial = getDefaultJourney()
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(initial)
      )
      return initial
    }

    const parsed = JSON.parse(saved)

    return {
      track:
        parsed.track ||
        (localStorage.getItem('abtalks-track') as Track) ||
        'Software Engineering',

      completedDays: Array.isArray(
        parsed.completedDays
      )
        ? parsed.completedDays
        : [],

      proofs:
        parsed.proofs &&
        typeof parsed.proofs === 'object'
          ? parsed.proofs
          : {},
    }
  } catch {
    return getDefaultJourney()
  }
}

function saveJourney(journey: JourneyState) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(journey)
  )

  localStorage.setItem(
    'abtalks-track',
    journey.track
  )
}

function getCurrentDay(completedDays: number[]) {
  for (let day = 1; day <= 60; day++) {
    if (!completedDays.includes(day)) {
      return day
    }
  }

  return 60
}

function getStreak(completedDays: number[]) {
  let streak = 0

  for (let day = 1; day <= 60; day++) {
    if (completedDays.includes(day)) {
      streak++
    } else {
      break
    }
  }

  return streak
}

function isDayUnlocked(
  day: number,
  completedDays: number[]
) {
  if (day === 1) return true

  return completedDays.includes(day - 1)
}

function Navigation() {
  return (
    <nav className="navigation">
      <button
        className="brand"
        onClick={() => {
          window.location.href = '/'
        }}
        aria-label="Go to ABTalks home"
      >
        <span className="brand-mark">
          AB
        </span>

        <span>ABTalks</span>
      </button>

      <button
        className="menu-button"
        aria-label="Go home"
        onClick={() => {
          window.location.href = '/'
        }}
      >
        ☰
      </button>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>ABTalks</strong>
        <span>BUILD → PROVE → GROW</span>
      </div>

      <span>60-DAY CHALLENGE</span>
    </footer>
  )
}

const students = [
  {
    initials: 'DO',
    name: 'Deborah Olofin',
    description:
      'Documented her learning journey through consistent public progress.',
    url: 'https://www.linkedin.com/in/deborah-olofin/',
  },
  {
    initials: 'MR',
    name: 'Manish Rana',
    description:
      'Turned daily practice into a visible portfolio of technical work.',
    url: 'https://www.linkedin.com/in/manish-rana-35036b317/',
  },
  {
    initials: 'KG',
    name: 'Komal Goswami',
    description:
      'Built consistently and shared her progress throughout the challenge.',
    url: 'https://www.linkedin.com/in/komal-goswami-246612333/',
  },
  {
    initials: 'KS',
    name: 'Khushboo Singh',
    description:
      'Used the challenge to stay accountable and build in public.',
    url: 'https://www.linkedin.com/in/khushboo-singh-32a07a318/',
  },
]

function LandingPage() {
  const [selectedTrack, setSelectedTrack] =
    useState<Track | null>(null)

  const startChallenge = () => {
    if (!selectedTrack) return

    const existing = loadJourney()

    const updatedJourney: JourneyState = {
      ...existing,
      track: selectedTrack,
    }

    saveJourney(updatedJourney)

    window.location.href = '/dashboard'
  }

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
  }

  return (
    <main>
      <section className="hero-section">
        <div className="hero-glow" />

        <div className="hero-content">
          <p className="eyebrow">
            ABTALKS · AI-FIRST CAREER & LEARNING
          </p>

          <h1>
            Don't just learn.
            <br />
            <span>Build proof.</span>
          </h1>

          <p className="hero-subtitle">
            A practical learning ecosystem helping
            students and early professionals turn
            consistent work into visible career proof.
          </p>

          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={() =>
                scrollToSection('challenge')
              }
            >
              Explore the 60-Day Challenge
              <span>↓</span>
            </button>

            <button
              className="hero-text-button"
              onClick={() =>
                scrollToSection('about')
              }
            >
              What is ABTalks?
              <span>→</span>
            </button>
          </div>

          <div className="hero-meta">
            <span>Practical learning</span>
            <span>•</span>
            <span>Project-based</span>
            <span>•</span>
            <span>Public proof</span>
          </div>
        </div>

        <div className="hero-orbit">
          <div className="orbit-ring orbit-ring-one" />
          <div className="orbit-ring orbit-ring-two" />

          <div className="orbit-core">
            <span>AB</span>
          </div>
        </div>
      </section>

      <section
        className="about-section"
        id="about"
      >
        <div className="section-intro">
          <p className="section-label">
            WHAT IS ABTALKS?
          </p>

          <h2>
            Learning should lead
            <br />
            <span>somewhere.</span>
          </h2>

          <p>
            ABTalks is a non-profit, AI-first career
            and learning ecosystem built to help
            students and early professionals move
            from theory to practical, industry-aligned
            work.
          </p>
        </div>

        <div className="about-grid">
          <article className="about-card about-card-large">
            <span className="about-number">
              01
            </span>

            <div>
              <h3>Build, not just study.</h3>

              <p>
                Learn through projects, challenges and
                real-world experimentation instead of
                stopping at theory.
              </p>
            </div>
          </article>

          <article className="about-card">
            <span className="about-number">
              02
            </span>

            <div>
              <h3>Make your work visible.</h3>

              <p>
                Turn consistent work into something you
                can share, discuss and show recruiters.
              </p>
            </div>
          </article>

          <article className="about-card">
            <span className="about-number">
              03
            </span>

            <div>
              <h3>Grow with the community.</h3>

              <p>
                Challenges, cohorts and hackathons create
                an environment where you keep showing up.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="initiatives-section">
        <div className="section-intro">
          <p className="section-label">
            THE ABTALKS ECOSYSTEM
          </p>

          <h2>
            More than
            <br />
            <span>one challenge.</span>
          </h2>
        </div>

        <div className="initiative-list">
          <article className="initiative-row featured">
            <div className="initiative-index">
              01
            </div>

            <div className="initiative-main">
              <span>FLAGSHIP PROGRAM</span>
              <h3>60-Day Coding Challenge</h3>

              <p>
                Build every day across practical
                technology tracks and create a visible
                trail of work.
              </p>
            </div>

            <div className="initiative-arrow">
              ↗
            </div>
          </article>

          <article className="initiative-row">
            <div className="initiative-index">
              02
            </div>

            <div className="initiative-main">
              <span>AI HACKATHONS</span>
              <h3>ViCodathon</h3>

              <p>
                Time-boxed, collaborative environments
                where participants build AI-powered
                applications.
              </p>
            </div>

            <div className="initiative-arrow">
              ↗
            </div>
          </article>

          <article className="initiative-row">
            <div className="initiative-index">
              03
            </div>

            <div className="initiative-main">
              <span>INTENSIVE COHORT</span>
              <h3>31-Day AI Cohort</h3>

              <p>
                Build production-oriented AI applications
                using modern tools, APIs, RAG and agents.
              </p>
            </div>

            <div className="initiative-arrow">
              ↗
            </div>
          </article>
        </div>
      </section>

      <section className="student-success-section">
        <div className="section-intro">
          <p className="section-label">
            STUDENT SUCCESS
          </p>

          <h2>
            Real people.
            <br />
            <span>Real progress.</span>
          </h2>

          <p>
            The best proof of a learning system is what
            people do with it. Meet students who have
            documented their progress and built in public.
          </p>
        </div>

        <div className="student-success-header">
          <div>
            <span className="success-kicker">
              FROM PARTICIPANTS
            </span>

            <h3>
              See the journey beyond
              <br />
              the classroom.
            </h3>
          </div>

          <p>
            Explore their LinkedIn profiles to see how
            consistent work can become visible career proof.
          </p>
        </div>

        <div className="student-success-grid">
          {students.map((student) => (
            <article
              className="student-success-card"
              key={student.name}
            >
              <div className="student-card-top">
                <div className="student-avatar">
                  {student.initials}
                </div>

                <span>↗</span>
              </div>

              <div className="student-card-content">
                <span className="student-role">
                  60-DAY CHALLENGE
                </span>

                <h3>{student.name}</h3>

                <p>{student.description}</p>
              </div>

              <button
                className="secondary-button"
                onClick={() =>
                  window.open(
                    student.url,
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
              >
                View LinkedIn
                <span>↗</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section
        className="challenge-section"
        id="challenge"
      >
        <div className="challenge-hero-copy">
          <p className="section-label">
            THE 60-DAY CHALLENGE
          </p>

          <h2>
            60 days.
            <br />
            <span>60 opportunities</span>
            <br />
            to build proof.
          </h2>

          <p>
            The idea is simple: commit to showing up,
            build something every day and leave the
            challenge with more than a completed streak.
          </p>
        </div>

        <div className="challenge-stat-card">
          <div className="challenge-stat">
            <strong>60</strong>
            <span>DAYS</span>
          </div>

          <div className="challenge-stat">
            <strong>01</strong>
            <span>BUILD / DAY</span>
          </div>

          <div className="challenge-stat">
            <strong>∞</strong>
            <span>PROOF</span>
          </div>
        </div>
      </section>

      <section className="how-it-works-section">
        <div className="section-intro">
          <p className="section-label">
            HOW 60 DAYS WORKS
          </p>

          <h2>
            Simple system.
            <br />
            <span>Serious momentum.</span>
          </h2>

          <p>
            Six simple steps take you from choosing a
            direction to building a visible body of work.
          </p>
        </div>

        <div className="process-list">
          <button
            type="button"
            className="process-step process-step-button"
            onClick={() =>
              scrollToSection('track-selection')
            }
          >
            <span>01</span>

            <div>
              <strong>Choose your track</strong>

              <p>
                Start with the area you want to grow
                toward.
              </p>
            </div>

            <b>→</b>
          </button>

          <button
            type="button"
            className="process-step process-step-button"
            onClick={() => {
              window.location.href = '/dashboard'
            }}
          >
            <span>02</span>

            <div>
              <strong>
                Get your daily mission
              </strong>

              <p>
                Each day gives you a focused task to
                complete.
              </p>
            </div>

            <b>→</b>
          </button>

          <button
            type="button"
            className="process-step process-step-button"
            onClick={() => {
              const journey = loadJourney()
              window.location.href =
                `/day/${getCurrentDay(
                  journey.completedDays
                )}`
            }}
          >
            <span>03</span>

            <div>
              <strong>Build something</strong>

              <p>
                Turn the day's mission into actual work.
              </p>
            </div>

            <b>→</b>
          </button>

          <button
            type="button"
            className="process-step process-step-button"
            onClick={() => {
              const journey = loadJourney()
              window.location.href =
                `/day/${getCurrentDay(
                  journey.completedDays
                )}`
            }}
          >
            <span>04</span>

            <div>
              <strong>Prove it publicly</strong>

              <p>
                Connect your GitHub and LinkedIn proof.
              </p>
            </div>

            <b>→</b>
          </button>

          <button
            type="button"
            className="process-step process-step-button"
            onClick={() => {
              window.location.href = '/dashboard'
            }}
          >
            <span>05</span>

            <div>
              <strong>
                Keep your streak alive
              </strong>

              <p>
                Consistency becomes visible progress.
              </p>
            </div>

            <b>→</b>
          </button>

          <button
            type="button"
            className="process-step process-step-button"
            onClick={() => {
              window.location.href = '/dashboard'
            }}
          >
            <span>06</span>

            <div>
              <strong>
                Earn your achievements
              </strong>

              <p>
                Unlock milestones as your journey grows.
              </p>
            </div>

            <b>→</b>
          </button>
        </div>
      </section>

      <section className="experience-section">
        <div className="section-intro">
          <p className="section-label">
            YOUR COMMAND CENTER
          </p>

          <h2>
            Your progress,
            <br />
            <span>at a glance.</span>
          </h2>

          <p>
            The challenge isn't just a list of tasks.
            Your dashboard turns your consistency into a
            visible journey.
          </p>
        </div>

        <div className="dashboard-preview">
          <div className="preview-topbar">
            <div className="preview-brand">
              <span>AB</span>
              <strong>ABTalks</strong>
            </div>

            <span className="preview-status">
              DAY 12 / 60
            </span>
          </div>

          <div className="preview-content">
            <div className="preview-heading">
              <span>
                SOFTWARE ENGINEERING
              </span>

              <h3>
                Keep
                <br />
                <em>building.</em>
              </h3>
            </div>

            <div className="preview-stats">
              <div>
                <span>STREAK</span>
                <strong>🔥 12</strong>
              </div>

              <div>
                <span>PROGRESS</span>
                <strong>20%</strong>
              </div>

              <div>
                <span>STANDING</span>
                <strong>#184</strong>
              </div>
            </div>

            <div className="preview-progress">
              <div
                className="preview-progress-fill"
                style={{ width: '20%' }}
              />
            </div>

            <div className="preview-days">
              {Array.from(
                { length: 24 },
                (_, index) => (
                  <span
                    key={index}
                    className={
                      index < 12
                        ? 'complete'
                        : index === 12
                          ? 'current'
                          : ''
                    }
                  >
                    {index + 1}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        className="track-section"
        id="track-selection"
      >
        <div className="section-intro">
          <p className="section-label">
            CHOOSE YOUR PATH
          </p>

          <h2>
            Where do you want
            <br />
            <span>to grow?</span>
          </h2>

          <p>
            Pick a track and make the next 60 days count
            toward the skills you want to build.
          </p>
        </div>

        <div className="track-list">
          <button
            type="button"
            className={`track-card ${
              selectedTrack ===
              'Software Engineering'
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
              <span>01</span>

              <strong>
                Software Engineering
              </strong>

              <p>
                Build products, systems and web
                applications.
              </p>
            </div>

            <span className="track-arrow">
              →
            </span>
          </button>

          <button
            type="button"
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
              <span>02</span>

              <strong>Data Science</strong>

              <p>
                Turn data into useful insights and
                decisions.
              </p>
            </div>

            <span className="track-arrow">
              →
            </span>
          </button>

          <button
            type="button"
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
              <span>03</span>

              <strong>AI / ML</strong>

              <p>
                Build intelligent systems and
                experiences.
              </p>
            </div>

            <span className="track-arrow">
              →
            </span>
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
          type="button"
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

      <section className="bpg-section">
        <div className="section-intro">
          <p className="section-label">
            THE ABTALKS LOOP
          </p>

          <h2>
            BUILD.
            <br />
            PROVE.
            <br />
            <span>GROW.</span>
          </h2>
        </div>

        <div className="bpg-grid">
          <article>
            <span>01</span>

            <h3>BUILD</h3>

            <p>
              Learn by making. Turn every mission into
              something tangible.
            </p>
          </article>

          <article>
            <span>02</span>

            <h3>PROVE</h3>

            <p>
              Share the work. Create a public trail that
              demonstrates consistency.
            </p>
          </article>

          <article>
            <span>03</span>

            <h3>GROW</h3>

            <p>
              Look back at what you built and see how
              far your skills have moved.
            </p>
          </article>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="final-cta-glow" />

        <p className="section-label">
          YOUR NEXT 60 DAYS
        </p>

        <h2>
          Make your
          <br />
          <span>work visible.</span>
        </h2>

        <p>
          Don't wait until you're “ready”.
          Start building, start proving and let
          consistency do the talking.
        </p>

        <button
          type="button"
          className="primary-button final-cta-button"
          onClick={() =>
            scrollToSection('track-selection')
          }
        >
          Start your 60 days
          <span>→</span>
        </button>

        <div className="final-meta">
          <span>BUILD</span>
          <span>→</span>
          <span>PROVE</span>
          <span>→</span>
          <span>GROW</span>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function DashboardPage() {
  const [journey, setJourney] =
    useState<JourneyState>(() =>
      loadJourney()
    )

  const completedDays =
    journey.completedDays

  const currentDay =
    getCurrentDay(completedDays)

  const streak =
    getStreak(completedDays)

  const progress =
    Math.round(
      (completedDays.length / 60) * 100
    )

  const days = Array.from(
    { length: 60 },
    (_, index) => index + 1
  )

  const badges = [
    {
      icon: '🔥',
      title: 'First Week',
      description: 'Complete 7 days',
      unlocked:
        completedDays.length >= 7,
    },
    {
      icon: '⚡',
      title: 'Consistency',
      description: 'Complete 10 days',
      unlocked:
        completedDays.length >= 10,
    },
    {
      icon: '🏆',
      title: 'Halfway There',
      description: 'Reach Day 30',
      unlocked:
        completedDays.length >= 30,
    },
    {
      icon: '💎',
      title: 'Challenge Complete',
      description: 'Finish all 60 days',
      unlocked:
        completedDays.length >= 60,
    },
  ]

  const unlockedCount =
    badges.filter(
      (badge) => badge.unlocked
    ).length

  const openDay = (day: number) => {
    if (
      completedDays.includes(day) ||
      day === currentDay
    ) {
      window.location.href =
        `/day/${day}`
    }
  }

  const resetJourney = () => {
    const fresh: JourneyState = {
      track: journey.track,
      completedDays: [],
      proofs: {},
    }

    saveJourney(fresh)
    setJourney(fresh)
  }

  return (
    <main className="dashboard-page">
      <Navigation />

      <section className="dashboard-header">
        <p className="section-label">
          {journey.track.toUpperCase()}
        </p>

        <h1>
          Keep
          <br />
          <span>building.</span>
        </h1>

        <p>
          {completedDays.length >= 60
            ? 'You completed the 60-day challenge.'
            : `You're on Day ${currentDay} of your 60-day journey.`}
        </p>
      </section>

      <section className="streak-dashboard-card">
        <div>
          <span className="card-label">
            CURRENT STREAK
          </span>

          <strong>
            🔥 {streak} days
          </strong>
        </div>

        <span className="streak-small">
          Best: {streak}
        </span>
      </section>

      {completedDays.length >= 60 ? (
        <section className="today-card">
          <p className="section-label">
            CHALLENGE COMPLETE
          </p>

          <h2>
            You built the whole journey.
          </h2>

          <p>
            60 days. 60 builds. One visible body
            of work. This is what consistency looks like.
          </p>

          <div className="task-meta">
            <span>60 / 60 DAYS</span>
            <span>•</span>
            <span>100%</span>
          </div>
        </section>
      ) : (
        <section className="today-card">
          <p className="section-label">
            TODAY'S MISSION
          </p>

          <h2>
            {missions[currentDay - 1]}
          </h2>

          <p>
            Complete today's mission, save your proof
            and keep your journey moving forward.
          </p>

          <div className="task-meta">
            <span>
              DAY {currentDay}
            </span>

            <span>•</span>

            <span>45 MIN</span>
          </div>

          <button
            type="button"
            className="primary-button"
            onClick={() =>
              (window.location.href =
                `/day/${currentDay}`)
            }
          >
            Start today's task
            <span>→</span>
          </button>
        </section>
      )}

      <section className="dashboard-progress">
        <div className="section-heading">
          <div>
            <p className="section-label">
              YOUR PROGRESS
            </p>

            <h2>
              {completedDays.length} / 60 days
            </h2>
          </div>

          <strong>{progress}%</strong>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <p>
          {completedDays.length} completed days.
          Keep going — you're building proof one
          day at a time.
        </p>
      </section>

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
          Every square represents one day of
          building, proving and growing.
        </p>

        <div className="journey-map-card">
          <div className="journey-map-header">
            <div>
              <strong>
                DAY {currentDay}
              </strong>

              <span> of 60</span>
            </div>

            <span className="journey-map-percent">
              {progress}%
            </span>
          </div>

          <div className="day-grid">
            {days.map((day) => {
              const isCompleted =
                completedDays.includes(day)

              const isToday =
                day === currentDay

              const isLocked =
                !isCompleted &&
                !isToday

              return (
                <button
                  type="button"
                  key={day}
                  className={`day-cell
                    ${
                      isCompleted
                        ? 'completed'
                        : ''
                    }
                    ${
                      isToday
                        ? 'today'
                        : ''
                    }
                    ${
                      isLocked
                        ? 'locked'
                        : ''
                    }
                  `}
                  title={`Day ${day}`}
                  onClick={() =>
                    openDay(day)
                  }
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
              <i className="legend-dot locked-dot" />
              Upcoming
            </span>
          </div>
        </div>
      </section>

      <section className="standing-card">
        <div className="standing-top">
          <div>
            <p className="section-label">
              YOUR STANDING
            </p>

            <h2>
              Top <span>{Math.max(
                1,
                100 -
                  Math.min(
                    completedDays.length * 2,
                    99
                  )
              )}%</span>
            </h2>
          </div>

          <div className="standing-icon">
            ↑
          </div>
        </div>

        <p>
          Your standing improves as you complete
          more days and keep your journey active.
        </p>

        <div className="standing-stats">
          <div>
            <strong>
              {completedDays.length}
            </strong>

            <span>Days built</span>
          </div>

          <div>
            <strong>
              {
                Object.keys(
                  journey.proofs
                ).length
              }
            </strong>

            <span>Proof days</span>
          </div>

          <div>
            <strong>
              #{Math.max(
                1,
                500 -
                  completedDays.length * 8
              )}
            </strong>

            <span>Standing</span>
          </div>
        </div>
      </section>

      <section className="achievements-section">
        <div className="section-heading">
          <div>
            <p className="section-label">
              ACHIEVEMENTS
            </p>

            <h2>
              Keep unlocking.
            </h2>
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

              <strong>
                {badge.title}
              </strong>

              <span>
                {badge.description}
              </span>

              <small>
                {badge.unlocked
                  ? '✓ Unlocked'
                  : '🔒 Locked'}
              </small>
            </div>
          ))}
        </div>
      </section>

      <section className="missed-day-card">
        <div className="missed-day-icon">
          !
        </div>

        <div>
          <p className="section-label">
            KEEP MOVING
          </p>

          <h3>
            Your journey isn't broken.
          </h3>

          <p>
            One difficult day doesn't erase your
            progress. Come back, complete today's
            mission and keep building.
          </p>
        </div>
      </section>

      <section className="achievement-card">
        <p className="section-label">
          LATEST ACHIEVEMENT
        </p>

        <div className="achievement-row">
          <span className="achievement-icon">
            🔥
          </span>

          <div>
            <h3>
              {streak} Day Streak
            </h3>

            <p>
              You've shown up consistently for{' '}
              {streak} days.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <button
          type="button"
          className="secondary-button"
          onClick={resetJourney}
        >
          Reset demo journey
        </button>
      </section>

      <Footer />
    </main>
  )
}

function DayPage() {
  const path = window.location.pathname

  const routeDay = Number(
    path.split('/')[2]
  )

  const safeDay =
    Number.isInteger(routeDay) &&
    routeDay >= 1 &&
    routeDay <= 60
      ? routeDay
      : 1

  const [journey, setJourney] =
    useState<JourneyState>(() =>
      loadJourney()
    )

  const isCompleted =
    journey.completedDays.includes(
      safeDay
    )

  const isUnlocked =
    isDayUnlocked(
      safeDay,
      journey.completedDays
    )

  
  const proof =
    journey.proofs[safeDay] || {}

  const [github, setGithub] =
    useState(proof.github || '')

  const [linkedin, setLinkedin] =
    useState(proof.linkedin || '')

  const mission =
    missions[safeDay - 1] ||
    'Complete today’s challenge.'

  const completeBuild = () => {
    if (!isUnlocked) return

    if (
      journey.completedDays.includes(
        safeDay
      )
    ) {
      return
    }

    const updatedCompletedDays =
      [
        ...journey.completedDays,
        safeDay,
      ].sort((a, b) => a - b)

    const updatedJourney: JourneyState = {
      ...journey,
      completedDays:
        updatedCompletedDays,
    }

    saveJourney(updatedJourney)
    setJourney(updatedJourney)
  }

  const saveProof = (
    type: 'github' | 'linkedin'
  ) => {
    const value =
      type === 'github'
        ? github.trim()
        : linkedin.trim()

    if (!value) return

    const updatedJourney: JourneyState = {
      ...journey,
      proofs: {
        ...journey.proofs,
        [safeDay]: {
          ...journey.proofs[safeDay],
          [type]: value,
        },
      },
    }

    saveJourney(updatedJourney)
    setJourney(updatedJourney)
  }

  if (!isUnlocked) {
    return (
      <main className="day-page">
        <Navigation />

        <section className="completion-card">
          <span className="completion-icon">
            🔒
          </span>

          <p className="section-label">
            DAY {safeDay}
          </p>

          <h2>
            This day is
            <br />
            <span>locked.</span>
          </h2>

          <p>
            Complete Day {safeDay - 1} before
            unlocking this mission.
          </p>

          <button
            type="button"
            className="primary-button"
            onClick={() =>
              (window.location.href =
                '/dashboard')
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

  return (
    <main className="day-page">
      <Navigation />

      <section className="day-hero">
        <p className="section-label">
          DAY {safeDay} / 60
        </p>

        <h1>
          {isCompleted
            ? 'Mission'
            : 'Build your'}
          <br />
          <span>
            {isCompleted
              ? 'complete.'
              : mission.toLowerCase()}
          </span>
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

      <section className="mission-card">
        <p className="section-label">
          TODAY'S MISSION
        </p>

        <h2>
          {mission}
        </h2>

        <p>
          Build something useful, document your
          work and leave behind a piece of proof
          that shows what you accomplished today.
        </p>

        <div className="mission-points">
          <div>
            <span>01</span>
            <p>
              Understand the mission
            </p>
          </div>

          <div>
            <span>02</span>
            <p>
              Build the solution
            </p>
          </div>

          <div>
            <span>03</span>
            <p>
              Ship it publicly
            </p>
          </div>
        </div>
      </section>

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

            <button
              type="button"
              className="primary-button"
              disabled={isCompleted}
              onClick={completeBuild}
            >
              {isCompleted
                ? 'Build completed ✓'
                : 'Mark build complete'}

              <span>
                {isCompleted
                  ? '✓'
                  : '→'}
              </span>
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

            <h3>
              Show your work
            </h3>

            <p>
              Add the GitHub commit and LinkedIn
              post that prove you showed up today.
            </p>

            <div className="proof-input-group">
              <label>
                GITHUB COMMIT
              </label>

              <input
                type="url"
                value={github}
                onChange={(event) =>
                  setGithub(
                    event.target.value
                  )
                }
                placeholder="https://github.com/..."
              />

              <button
                type="button"
                className="secondary-button"
                onClick={() =>
                  saveProof('github')
                }
              >
                {proof.github
                  ? 'GitHub proof saved ✓'
                  : 'Add GitHub proof'}
              </button>
            </div>

            <div className="proof-input-group">
              <label>
                LINKEDIN POST
              </label>

              <input
                type="url"
                value={linkedin}
                onChange={(event) =>
                  setLinkedin(
                    event.target.value
                  )
                }
                placeholder="https://linkedin.com/..."
              />

              <button
                type="button"
                className="secondary-button"
                onClick={() =>
                  saveProof('linkedin')
                }
              >
                {proof.linkedin
                  ? 'LinkedIn proof saved ✓'
                  : 'Add LinkedIn proof'}
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
                <strong>
                  {
                    getStreak(
                      journey.completedDays
                    )
                  } day streak
                </strong>

                <p>
                  {
                    Math.max(
                      0,
                      60 -
                        journey.completedDays
                          .length
                    )
                  } days left in your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="completion-card">
        <span className="completion-icon">
          {isCompleted ? '✓' : '✦'}
        </span>

        <p className="section-label">
          {isCompleted
            ? 'DAY COMPLETE'
            : 'KEEP GOING'}
        </p>

        <h2>
          {isCompleted
            ? 'You built it.'
            : 'Your next piece'}
          <br />
          <span>
            {isCompleted
              ? 'Keep the momentum.'
              : 'of proof.'}
          </span>
        </h2>

        <p>
          {isCompleted
            ? safeDay < 60
              ? `Day ${safeDay} is complete. Day ${
                  safeDay + 1
                } is waiting for you.`
              : 'You completed all 60 days. You did it.'
            : 'Complete today’s build and keep your developer journey moving forward.'}
        </p>

        <button
          type="button"
          className="primary-button"
          onClick={() => {
            if (
              isCompleted &&
              safeDay < 60
            ) {
              window.location.href =
                `/day/${safeDay + 1}`
            } else {
              window.location.href =
                '/dashboard'
            }
          }}
        >
          {isCompleted &&
          safeDay < 60
            ? `Continue to Day ${
                safeDay + 1
              }`
            : 'Back to dashboard'}

          <span>→</span>
        </button>
      </section>

      <Footer />
    </main>
  )
}

function App() {
  const path =
    window.location.pathname

  if (path === '/dashboard') {
    return <DashboardPage />
  }

  if (path.startsWith('/day/')) {
    return <DayPage />
  }

  return <LandingPage />
}

export default App