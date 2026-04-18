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
- Current homepage direction is too text-heavy for first impression.
- Re-evaluate homepage content density and reduce copy so the landing experience feels lighter and easier to scan.
- Use `https://www.raviklaassens.com/` as a discussion reference for:
  - simpler section pacing
  - stronger visual rhythm
  - restrained but polished animation
  - cleaner first-screen hierarchy
- Important: do not copy the reference directly. Adapt only the parts that fit a personal SEO portfolio.
- Fit criteria for this portfolio:
  - should still feel credible and professional
  - should not become too agency-like or overly artistic
  - motion should stay subtle and intentional
  - homepage should communicate positioning faster with less text
- Open product question:
  - How far should the homepage move toward a simpler, motion-led presentation before it starts weakening technical SEO credibility?

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
- Homepage currently communicates too much through text blocks rather than pacing and hierarchy.
- First impression should become simpler, lighter, and more immediate.
- Need a design decision on whether selective animation and reduced copy improve the portfolio without making it feel less credible.

---

## Success Metrics
- Website live
- All pages functional
- SEO basics implemented
- Content reflects positioning clearly
