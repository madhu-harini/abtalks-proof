# AI Usage Log — ABTalks 2.0

This document records the major ways AI was used during the development of ABTalks 2.0.

AI was used as a development and thinking partner for product planning, UX decisions, implementation, debugging, documentation, and deployment guidance.

The developer remained responsible for the final product decisions, implementation review, testing, and deployment.

---

# Session 1 — Project Foundation & Product Direction

**Date:** 08 August 2026  
**AI Tool:** ChatGPT

## Purpose

Used AI assistance to understand the ABTalks hackathon requirements, select a problem statement, plan the product direction, and establish the initial development workflow.

## Prompts / Tasks

- Analyzed the ABTalks hackathon problem statements.
- Selected the **ABTalks 60-Day Coding Challenge redesign** as the project direction.
- Broke down the expected product experience into:
  - Landing page
  - Student dashboard
  - Daily challenge experience
- Discussed how the product could help students build consistency through practical work.
- Explored ways to make daily learning more visible and useful for students.
- Brainstormed ideas around:
  - Career growth
  - Beginner-friendly learning
  - Internship preparation
  - Placement preparation
  - Final-year career readiness
  - Developer-focused product design
- Learned the basics of GitHub repositories and Git workflow.
- Planned the initial project structure and documentation.

## AI Assistance Provided

AI helped with:

- Understanding the hackathon problem statement.
- Breaking the problem into smaller product requirements.
- Brainstorming the initial product direction.
- Explaining Git and GitHub concepts.
- Planning the initial development workflow.
- Structuring the project documentation.

## Human Decisions

The developer decided:

- To build the ABTalks 60-Day Coding Challenge redesign.
- To name the project **ABTalks 2.0**.
- To focus on helping students turn daily learning into visible progress.
- To prioritize a mobile-first experience.
- To design the product around consistency, practical building, and proof of work.
- To use a developer-focused visual identity.

## Completed Progress

- Project concept established.
- Repository created.
- Git setup completed.
- Initial documentation created.
- React + Vite project initialized.
- Initial product direction established.

---

# Session 2 — Landing Page Build

**Date:** 08 August 2026  
**AI Tool:** ChatGPT

## Purpose

Used AI assistance to build the first working version of the ABTalks 2.0 landing page and establish the initial visual direction.

## Prompts / Tasks

- Replaced the default Vite starter interface with an ABTalks landing page.
- Planned the landing page around the core product message:

**BUILD → PROVE → GROW**

- Structured the landing page to communicate:
  - What ABTalks is.
  - What the 60-day challenge is.
  - Why daily proof of work matters.
  - How the challenge works.
  - How users can start the challenge.
- Planned and implemented sections for:
  - Navigation
  - Hero
  - Proof-of-work concept
  - Progress and streak visualization
  - How it works
  - Call-to-action
  - Footer
- Added mobile-first CSS styling.
- Created a dark developer-oriented visual system.
- Added a lime accent color to create a stronger product identity.
- Added responsive behavior for larger screens.
- Tested the experience using a 390px mobile viewport.

## AI Assistance Provided

AI helped with:

- Translating the product concept into a React component structure.
- Creating and refining the initial JSX.
- Creating and refining the CSS.
- Explaining the purpose of:
  - `App.tsx`
  - `App.css`
  - `index.css`
  - `main.tsx`
- Explaining the local Vite development workflow.
- Troubleshooting development issues.
- Thinking through the mobile-first layout.

## Human Decisions

The developer decided:

- To prioritize the required 390px mobile experience.
- To use a dark developer-focused visual style.
- To communicate the product through **BUILD → PROVE → GROW**.
- To make the product feel like a developer growth platform rather than a generic coding challenge.
- To keep the interface focused and practical.

## Completed Progress

- Default Vite landing page replaced.
- ABTalks landing page structure implemented.
- Landing page styling implemented.
- Responsive styling added.
- 390px viewport tested.
- Local development server verified.

---

# Session 3 — Proof of Work & Product Experience Direction

**Date:** 08 August 2026  
**AI Tool:** ChatGPT

## Purpose

Evolve the product beyond a simple 60-day streak tracker and explore how the student's daily work could become meaningful career evidence.

## Product Direction

During the product-design process, the idea evolved from simply tracking a student's daily streak into creating a **Proof of Work** experience.

The central idea became:

BUILD  
Complete the daily mission  
↓  
PROVE  
Submit evidence of the work  
↓  
GROW  
Build a visible development journey

Instead of showing only:

12-day streak

the product could eventually communicate:

- What I built
- What I learned
- What skills I practiced
- What I proved
- How consistently I worked

## Why This Concept

Students often have:

- GitHub repositories
- Projects
- LinkedIn posts
- Certificates
- Learning experiences

but these can exist separately without telling a coherent story.

The ABTalks experience was therefore designed to connect daily work into a visible development journey.

## AI Assistance Provided

AI helped:

- Explore the difference between learning and proving.
- Brainstorm ways to make daily work visible.
- Structure the **BUILD → PROVE → GROW** loop.
- Think through how GitHub and LinkedIn could become evidence of progress.
- Explore how a student's daily work could eventually become a portfolio-like journey.
- Think through the relationship between consistency and career proof.
- Plan how the dashboard and daily challenge could support this concept.

## Human Decision

The developer chose **Proof of Work** as one of the central ideas of the product.

The goal was not to create another platform that only tracks completion.

The goal became:

> **Don't just learn. Build proof.**

## Intended Experience

The intended product loop became:

ABTALKS  
↓  
BUILD  
Complete the mission  
↓  
PROVE  
Submit GitHub + LinkedIn proof  
↓  
GROW  
Track progress and consistency  
↓  
NEXT MISSION  
↓  
BUILD

## Planned Product Areas

Based on this direction, the next major product areas were identified:

- Track selection.
- Student dashboard.
- 60-day journey.
- Daily challenge experience.
- GitHub proof submission.
- LinkedIn proof submission.
- Progress tracking.
- Achievement system.
- Persistent student progress.

## Completed Progress

- Proof-of-work concept established.
- BUILD → PROVE → GROW product loop established.
- Dashboard direction planned.
- Daily challenge direction planned.
- GitHub and LinkedIn proof concept established.
- Product direction evolved from a simple streak tracker into a visible student development journey.

- ---

# Session 4 — Landing Page & Student Experience Refinement

**Date:** 08 August 2026  
**AI Tool:** ChatGPT

## Purpose

Refine the initial ABTalks landing page and start shaping the experience around student motivation, trust, consistency, and visible progress.

## Prompts / Tasks

- Reviewed the initial landing page experience.
- Identified areas where the page could communicate the product value more clearly.
- Refined the hero section and product messaging.
- Strengthened the **BUILD → PROVE → GROW** concept.
- Added clearer explanations of how the 60-day challenge works.
- Explored ways to make the challenge feel credible and motivating.
- Added a trust-oriented section to explain why the challenge matters.
- Added a previous-student journey/alumni-style section to demonstrate what completing the challenge could look like.
- Improved calls to action.
- Refined the overall visual hierarchy and content flow.
- Continued testing the experience at the required 390px mobile viewport.

## AI Assistance Provided

AI helped with:

- Reviewing the existing landing page structure.
- Identifying weak or unclear sections.
- Improving product messaging.
- Brainstorming trust-building sections.
- Refining the user journey from landing page to challenge.
- Improving responsive layout decisions.
- Suggesting UX improvements.
- Refining React and CSS implementation.

## Human Decisions

The developer decided:

- The landing page should communicate the product value before asking users to start.
- The experience should feel like a serious student growth platform.
- The product should emphasize building and proving rather than simply completing tasks.
- The interface should remain focused and avoid unnecessary complexity.

## Completed Progress

- Landing page messaging refined.
- Trust section added.
- Student journey/alumni-style section added.
- Calls to action improved.
- Mobile experience refined.
- BUILD → PROVE → GROW storytelling strengthened.

---

# Session 5 — Proof Portfolio Concept

**Date:** 08 August 2026  
**AI Tool:** ChatGPT

## Purpose

Develop the Proof of Work idea further and explore how ABTalks could turn daily challenge activity into a visible development journey.

## Concept

The product direction evolved from a simple challenge tracker into a **Proof Portfolio** concept.

Instead of treating progress only as:

**12-day streak**

the product could help students build a record of:

- What they built.
- What they learned.
- Which skills they practiced.
- What they submitted as proof.
- How consistently they worked.
- How their projects developed over time.

## Why This Concept

Students often have:

- GitHub repositories
- Projects
- LinkedIn posts
- Certificates
- Learning experiences

but these can exist separately without telling a coherent story.

The ABTalks experience was therefore designed to connect daily work into a visible development journey.

## Intended Experience

The core loop became:

```text
BUILD
Complete the daily mission
        ↓
PROVE
Submit GitHub + LinkedIn proof
        ↓
GROW
Build a visible developer journey

# Session 6 — Track Selection

**Date:** 08 August 2026  
**AI Tool:** ChatGPT

## Purpose

Make the 60-day challenge adaptable to different technology interests.

The product was expanded to allow students to choose a learning track before starting their journey.

## Tracks Added

### Software Engineering

Focused on:

- Web development
- Applications
- Components
- Interfaces
- APIs
- Software projects

### Data Science

Focused on:

- Data
- Analysis
- Visualization
- Insights
- Practical data projects

### AI / ML

Focused on:

- Artificial intelligence
- Machine learning
- AI applications
- Intelligent systems

## AI Assistance Provided

AI helped with:

- Structuring the track-selection experience.
- Writing concise track descriptions.
- Designing the selection interaction.
- Thinking through how the selected track should affect the student's journey.
- Connecting the selected track to the dashboard experience.
- Planning the user flow from landing page → track selection → dashboard.

## Human Decisions

The developer decided:

- To provide three clear technology tracks.
- To keep the track-selection experience simple.
- To make the selected track visible throughout the student's journey.
- To focus the tracks around practical building rather than only theoretical learning.

## Completed Progress

- Track-selection UI implemented.
- Software Engineering track added.
- Data Science track added.
- AI / ML track added.
- Selected track stored in local browser state.
- Selected track displayed in the dashboard.
- Landing page connected to track selection.

---

# Session 7 — Student Dashboard

**Date:** 08 August 2026  
**AI Tool:** ChatGPT

## Purpose

Build the student's command center for the 60-day challenge.

The dashboard was designed to give the student a clear overview of their current progress and what they should do next.

## Dashboard Features

The dashboard was designed to display:

- Current track
- Current day
- Current streak
- Today's mission
- Overall progress
- 60-day journey map
- Standing
- Proof count
- Achievements
- Latest achievement
- Continue journey actions

## AI Assistance Provided

AI helped with:

- Structuring the dashboard layout.
- Planning the information hierarchy.
- Creating React/TypeScript state.
- Designing progress calculations.
- Designing achievement logic.
- Building the 60-day journey grid.
- Implementing navigation between the dashboard and daily missions.
- Troubleshooting TypeScript issues.
- Improving the dashboard experience for mobile screens.

## Human Decisions

The developer decided that the dashboard should feel like a:

> **Personal command center**

rather than a simple task list.

The dashboard should immediately answer:

- Where am I?
- What have I completed?
- What is my streak?
- What should I do next?
- How much of the challenge have I completed?
- What proof have I created?

## Completed Progress

- `/dashboard` implemented.
- Current track displayed.
- Current day displayed.
- Streak calculation implemented.
- Progress calculation implemented.
- Achievement system connected.
- 60-day journey map implemented.
- Daily mission navigation implemented.
- Continue-journey actions implemented.
- Mobile dashboard layout implemented.

# Session 8 — 60-Day Journey System

**Date:** 08 August 2026  
**AI Tool:** ChatGPT

## Purpose

Turn the challenge into an actual sequential 60-day journey instead of a static list of tasks.

The goal was to make progress meaningful by requiring students to complete the current day before moving to the next one.

## Functionality Added

- 60 individual missions.
- Day unlocking.
- Completed-day tracking.
- Current-day calculation.
- Streak calculation.
- Progress percentage.
- Locked future days.
- Completed day states.
- Current day state.
- Challenge completion state.

## Journey Rules

Day 1 starts unlocked.

After completing Day 1:

```text
Day 2 → unlocked

After completing Day 2:

Day 3 → unlocked

This continues sequentially until Day 60.

Future days remain locked until the previous day has been completed.

Journey States
Locked

The student has not yet unlocked the day.

Current

The day is currently available to complete.

Completed

The student has completed the mission.

Challenge Complete

All 60 days have been completed.

AI Assistance Provided

AI helped with:

Designing the journey state.
Planning the relationship between completed days and unlocked days.
Implementing day-unlocking logic.
Implementing completed-day tracking.
Calculating progress.
Calculating streaks.
Handling current-day logic.
Handling locked-day behavior.
Handling challenge completion states.
Human Decisions

The developer decided:

The challenge should progress sequentially.
Students should not be able to skip ahead freely.
Completing a day should unlock the next day.
The experience should feel like a real journey rather than a static checklist.
Completed Progress

The application now behaves like a real 60-day challenge instead of a static mockup.

The journey system became the foundation for:

Daily missions
Progress tracking
Streak tracking
Achievements
Dashboard state
Proof submissions

