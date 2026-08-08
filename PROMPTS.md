# AI Usage Log — ABTalks 2.0

## Session 1 — Project Foundation & Product Direction

**Date:** 08 August 2026
**AI Tool:** ChatGPT

### Purpose

Used AI assistance to understand the ABTalks hackathon requirements, select a problem statement, plan the product direction, and establish the development workflow.

### Prompts / Tasks

* Analyzed the ABTalks hackathon problem statements and selected the **ABTalks 60-Day Coding Challenge redesign**.
* Broke down the requirements for:

  * Landing page (`/`)
  * Student dashboard (`/dashboard`)
  * Challenge day (`/day/12`)
* Discussed how the product could help college students build consistency and create visible proof of work.
* Planned ABTalks 2.0 as a portfolio-worthy student growth platform.
* Explored ideas around:

  * Career-stage based guidance
  * Beginner-friendly learning support
  * Internship and placement preparation
  * Final-year career readiness
  * Developer-focused visual design
* Learned the basics of GitHub repositories and Git workflow.
* Created the initial project documentation.

### AI Assistance Provided

AI helped with:

* Understanding and breaking down the hackathon problem statement.
* Explaining GitHub and Git concepts for a beginner.
* Planning the initial product direction.
* Structuring the README.
* Explaining the VS Code and local development workflow.

### Human Decisions

The developer decided:

* To build the ABTalks redesign challenge.
* Project name: **ABTalks 2.0**.
* To use a mobile-first approach because the judging viewport is 390px wide.
* To focus the experience on student growth, consistency, and proof of work.
* To explore career-stage based guidance as part of the product experience.

### Completed Progress

* Repository created
* Git setup completed
* README created
* AI usage documentation created
* React + Vite project initialized

---

# Session 2 — Landing Page Build

**Date:** 08 August 2026
**AI Tool:** ChatGPT

### Purpose

Used AI assistance to build the first working version of the ABTalks 2.0 landing page and establish the visual direction for the product.

### Prompts / Tasks

* Replaced the default Vite starter interface with the initial ABTalks landing-page structure.

* Planned the landing page around the core message:

  **BUILD → PROVE → GROW**

* Structured the landing page to communicate:

  * What ABTalks is
  * The 60-day challenge
  * The value of daily proof of work
  * How the challenge works
  * A clear call to start the challenge

* Created sections for:

  * Navigation
  * Hero
  * Proof-of-work concept
  * Progress/streak visualization
  * How it works
  * Final call-to-action
  * Footer

* Added mobile-first CSS styling.

* Added a dark developer-oriented visual system with a lime accent color.

* Added responsive behavior for larger screens.

* Tested the page using a 390px mobile viewport.

### AI Assistance Provided

AI helped with:

* Translating the product concept into a React component structure.
* Creating the initial landing-page JSX.
* Creating the initial CSS design system.
* Explaining the purpose of `App.tsx`, `App.css`, `index.css`, and `main.tsx`.
* Guiding mobile viewport testing.
* Troubleshooting the local Vite development environment.

### Human Decisions

The developer decided:

* To prioritize the 390px mobile experience.
* To use a dark developer-focused visual style.
* To communicate the product through **BUILD → PROVE → GROW**.
* To make the experience feel more like a developer growth product rather than a generic coding challenge website.

### Completed Progress

* Default Vite landing page replaced
* ABTalks landing-page structure implemented
* Landing-page styling implemented
* Responsive styling added
* 390px viewport tested successfully
* Local development server verified

---

# Product Direction — Proof Portfolio

**Date:** 08 August 2026

### Concept

During the product-design process, the project direction evolved from simply tracking a 60-day streak toward making the student's daily work useful beyond the challenge.

The core idea is a **Proof Portfolio**.

Instead of treating the student's progress as only a number such as:

> 12-day streak

ABTalks can turn daily GitHub submissions and LinkedIn reflections into a visible record of the student's development journey.

### Intended Experience

```text
BUILD
Complete the daily mission
        ↓
PROVE
Submit GitHub + LinkedIn proof
        ↓
GROW
Build a visible developer journey
```

### Why This Idea

Many students have projects, GitHub repositories, LinkedIn posts, and certificates scattered across different places.

The Proof Portfolio concept aims to connect the student's daily work into a coherent progression that can eventually communicate:

* What they built
* What they learned
* Which skills they practiced
* How consistently they worked
* How their projects evolved

This concept will guide the design of the dashboard and challenge-day experience.

### Implementation Status

**Concept established — implementation planned for subsequent screens.**

---

# Development Workflow

The project is being developed iteratively.

For each major feature:

1. Plan the experience.
2. Use AI assistance where helpful.
3. Implement the feature.
4. Test it locally.
5. Test the mobile experience.
6. Update this AI usage log.
7. Commit the milestone to Git.

The AI usage log is maintained throughout development rather than reconstructed after the project is completed.

## AI Development Log — Landing Page & Dashboard

### Session: Product Experience & UI Development

I used AI as a design and development partner to iterate on the ABTalks student experience.

#### What I worked on
- Refined the landing page around the BUILD → PROVE → GROW concept.
- Added a trust section to make the challenge feel more credible.
- Added a previous-student journey/alumni-style section to show what completing the challenge could look like.
- Added track selection for:
  - Software Engineering
  - Data Science
  - AI
- Built a student dashboard using mocked data.
- Added current streak, today's mission, challenge progress and achievements.
- Added navigation from the landing page → dashboard.
- Designed the experience mobile-first around the required 390px viewport.
- Added dark visual styling and improved the overall visual hierarchy.

#### How AI was used
AI helped me:
- Structure the page sections and user flow.
- Generate and refine React/TypeScript components.
- Develop and troubleshoot CSS.
- Think through student motivation, trust and consistency.
- Identify missing dashboard elements such as achievements and progress.
- Iterate on the interface based on visual feedback.

#### Design decisions
The experience is intentionally structured around:

BUILD → PROVE → GROW

The goal is to make the challenge feel like a developer journey rather than simply a 60-day streak counter.

#### Current status
Landing page → Track selection → Dashboard

Next:
Build the daily challenge experience at `/day/12`, including the coding mission and GitHub + LinkedIn proof submission.