# Product Requirement Document — Personal Portfolio

## Objective
Build a high-performance, SEO-focused personal portfolio website that showcases technical SEO expertise and system thinking.

## Target User
- Recruiters
- Hiring managers
- Potential freelance clients
- SEO professionals

## Value Proposition
Not just a portfolio — but a demonstration of technical SEO execution and scalable systems.

---

## Core Features

### 1. Homepage
- Hero section (bio + positioning)
- Featured projects
- Experience highlight
- CTA

#### Homepage Direction Notes
- Homepage has been restructured into a narrative flow:
  - Hero
  - Point of view
  - Authority
  - Selected work
  - Writing / insight
  - CTA
- The homepage direction is now `statement-led` rather than a standard portfolio overview.
- Motion has been introduced selectively through:
  - hero choreography
  - scroll reveal
  - parallax
  - interactive card motion
  - route transitions
- The current visual direction should stay:
  - light editorial
  - premium
  - calm
  - typography-led
  - one continuous canvas across the page
- Reference inputs used in discussion:
  - `https://www.raviklaassens.com/`
  - `https://www.ogilvy.com/`
- Important: do not copy reference sites literally. Adapt only the pacing, atmosphere, and confidence that fit a personal SEO portfolio.
- Current homepage implementation status:
  - narrative structure is mostly resolved
  - motion architecture is in place
  - visual continuity improved significantly
  - further polish is still needed on background treatment, section continuity, and final art direction quality
- Open product question:
  - How far should the homepage move toward a cinematic editorial presentation before it starts weakening technical SEO credibility?

### 2. Experience Page
- Career timeline
- Role descriptions
- Achievements

### 3. Projects Page
- Case study format:
  - Problem
  - Approach
  - Solution
  - Impact

### 4. Blog
- Article list
- Article detail

---

## Technical Requirements

### Frontend
- Next.js (App Router)
- SSR / SSG (no heavy CSR)
- Clean URL structure

### CMS
- Sanity (Headless CMS)
- Dynamic content management

### SEO Requirements
- Dynamic metadata
- Canonical tags
- Sitemap.xml
- Robots.txt
- Structured data:
  - Person
  - WebSite
  - Article
  - Breadcrumb

### Performance
- Fast load (<2.5s)
- Minimal JS
- Optimized images

---

## Non-Goals
- Complex animations
- Overdesign
- Feature-heavy system

## Current UX Concerns
- Homepage structure is in a much better place, but final visual polish is not complete yet.
- Need final design calibration on:
  - background continuity
  - section separation vs. seamless flow
  - how much container treatment should remain on the homepage
- Experience page still needs responsive QA / fixes.
- Blog page schema/meta review is still pending.
- CMS coverage is still partial:
  - Projects, Experience, and Blog are CMS-backed
  - Homepage copy and shared shell copy are still mostly code-driven

---

## Success Metrics
- Website live
- All pages functional
- SEO basics implemented
- Content reflects positioning clearly
