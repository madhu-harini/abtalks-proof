# ABTalks Proof

### Build proof, not just projects.

**ABTalks Proof** is a mobile-first redesign of the ABTalks 60-day coding challenge, designed to help college students turn daily coding into visible proof of their growth.

The experience focuses on one simple loop:

> **BUILD → PROVE → GROW**

Students complete daily coding missions, submit GitHub and LinkedIn proof, track their progress, and gradually build a visible record of what they can actually create.

---

## 🎯 The Problem

Students often learn to code by building projects, but their progress becomes scattered across GitHub, LinkedIn, and personal notes.

The challenge isn't only getting students to start coding.

It's helping them:

* Stay consistent
* Know what to build today
* Prove that they actually built it
* See their progress over time
* Turn that progress into a stronger developer identity

ABTalks already provides the challenge.

**This redesign focuses on making the experience feel intentional, motivating, and easy to use on mobile.**

---

## 💡 The Core Idea

### Build proof, not just projects.

A 60-day challenge shouldn't end as:

> "I completed 60 days."

It should become:

> **"I shipped 60 pieces of work."**

Every completed challenge becomes another piece of proof in the student's developer journey.

### Proof Portfolio

The redesign introduces a **Proof Portfolio** concept that turns daily GitHub and LinkedIn submissions into a visual timeline of the student's work.

Instead of only tracking a streak, students can see what they've actually built.

---

## 📱 Core Experience

### 1. Landing Page

Introduces ABTalks to a student who has never heard of the challenge.

The page communicates:

* What ABTalks is
* How the 60-day challenge works
* Why daily proof matters
* What students gain from completing it

**Route:** `/`

---

### 2. Student Dashboard

The student's home base.

It prioritizes the most important question:

> **"What should I build today?"**

The dashboard includes:

* Current streak
* Today's mission
* Challenge progress
* Overall completion
* Achievements
* Proof Portfolio

**Route:** `/dashboard`

---

### 3. Challenge Day

The complete experience for a single challenge day.

Students can:

* Understand the mission
* See what needs to be built
* Review acceptance criteria
* Access useful resources
* Submit GitHub proof
* Submit LinkedIn proof
* Complete the day

**Route:** `/day/12`

---

## 🧠 Designed Around Real Student Behavior

ABTalks is designed for college students who often use the platform **on their phones, late at night after college**.

That influenced the redesign toward:

* Mobile-first layouts
* Clear visual hierarchy
* Short, actionable content
* One-handed interactions
* Strong progress feedback
* Encouraging recovery after missed days

---

## 🎓 Career-Stage Awareness

Students at different stages of college have different goals.

The experience is designed with this progression in mind:

**1st–2nd Year**

🌱 Explore → Learn → Build foundations

**3rd Year**

⚡ Build → Deploy → Prepare for internships

**Final Year**

🚀 Polish → Showcase → Become industry-ready

The MVP uses mocked student data rather than a full personalization system.

---

## 🧩 Edge Cases

The redesign intentionally handles real-world situations including:

* 🌱 First day with no streak
* 🔄 Returning after a missed day
* 👤 Empty profile with no achievements
* 📈 Early-stage progress
* 🏆 Completed milestones

The goal is to make the experience encouraging rather than punishing when a student falls behind.

---

## 🛠️ Tech Stack

Coming soon.

The project is intentionally built with a lightweight architecture suitable for a fast, mobile-first product experience.

---

## 📂 Project Status

🚧 **Currently being built for the ABTalks Vibe Code Hackathon.**

The project is being developed from the ground up during the hackathon with AI-assisted development.

---

## 🗺️ Route Map

```text
/
/dashboard
/day/12
```

---

## 🤖 AI Usage

AI-assisted development is documented in [`PROMPTS.md`](./PROMPTS.md).

The repository maintains a record of the prompts and AI-assisted decisions used during development.

---

## 🚀 Vision

ABTalks shouldn't just help students complete a challenge.

It should help them leave the challenge with something more valuable:

> **A visible record of what they can build.**

**Build proof, not just projects.**
