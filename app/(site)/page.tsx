import Link from "next/link";
import type { Metadata } from "next";

import HomeHeroMotion from "@/components/home/home-hero-motion";
import InteractiveCard from "@/components/motion/interactive-card";
import ParallaxY from "@/components/motion/parallax-y";
import ScrollReveal from "@/components/motion/scroll-reveal";
import { createCanonicalMetadata } from "@/lib/metadata";

export const metadata: Metadata = createCanonicalMetadata("/", {
  title: "SEO & Growth Systems",
  description:
    "Portfolio of Wahyu Afrizal, focused on technical SEO, site structure, content systems, and steady organic growth.",
  openGraph: {
    title: "SEO & Growth Systems",
    description:
      "Portfolio of Wahyu Afrizal, focused on technical SEO, site structure, content systems, and steady organic growth.",
    url: "/",
  },
});

const manifestoLines = [
  "SEO should create clarity before it creates more pages.",
  "Structure beats noise when growth needs to last.",
  "Technical depth matters when it changes how the brand is experienced.",
];

const authorityPillars = [
  {
    title: "How I think",
    body: "Search performance is usually a systems problem before it becomes a content problem.",
  },
  {
    title: "How I diagnose",
    body: "I look for structural friction first: crawl paths, indexation gaps, internal logic, and weak page architecture.",
  },
  {
    title: "How I build",
    body: "The goal is a cleaner operating model teams can keep using, not one-off SEO recommendations.",
  },
];

const projectHighlights = [
  {
    title: "Enterprise technical audit",
    framing:
      "A decision-ready audit built to reduce ambiguity for product, marketing, and content teams.",
    impact:
      "Clarified crawl, indexation, and internal linking priorities for execution.",
    tags: ["Crawlability", "Indexation", "Internal linking"],
    featured: true,
  },
  {
    title: "Content growth framework",
    framing:
      "Topic structure and search intent organized into an editorial system teams could actually maintain.",
    impact:
      "Shifted content planning from scattered output to a scalable growth model.",
    tags: ["Intent mapping", "Topic clusters"],
    featured: false,
  },
  {
    title: "Programmatic rollout",
    framing:
      "Scalable landing page planning with stronger quality controls, page logic, and relevance.",
    impact:
      "Expanded search coverage without turning the site into thin-page noise.",
    tags: ["Scale", "Quality control"],
    featured: false,
  },
];

const insightTeasers = [
  "How I build SEO systems that stay useful after the first sprint.",
  "Why technical SEO should make websites feel clearer, not just rank better.",
];

const heroStats = [
  { value: "SEO", label: "depth-led" },
  { value: "POV", label: "statement-led" },
  { value: "UX", label: "motion-aware" },
];

export default function Home() {
  const featuredProject = projectHighlights.find((item) => item.featured);
  const secondaryProjects = projectHighlights.filter((item) => !item.featured);

  return (
    <main className="home-page">
      <section className="site-shell home-hero">
        <HomeHeroMotion
          eyebrow="Strategic SEO consultant"
          title="I build SEO presence that feels sharp before it feels loud."
          description="Technical SEO, content systems, and growth structure for brands that want stronger search performance with a clearer point of view."
          primaryHref="/projects"
          primaryLabel="View selected work"
          secondaryHref="/blog"
          secondaryLabel="Read my thinking"
          panelEyebrow="First signal"
          panelTitle="Creative enough to stand out. Strategic enough to trust."
          panelCopy="The homepage should feel like a statement first, then prove itself."
          stats={heroStats}
        />
      </section>

      <section className="site-shell manifesto-block">
        <ScrollReveal className="manifesto-block__intro">
          <p className="section-label">Point of view</p>
          <p className="manifesto-block__lede">
            I do not see SEO as a stack of disconnected tasks. I see it as a
            way to make the brand experience sharper, clearer, and easier to
            scale.
          </p>
        </ScrollReveal>

        <div className="manifesto-block__lines">
          {manifestoLines.map((line, index) => (
            <ParallaxY
              key={line}
              from={24 + index * 10}
              to={-18 - index * 8}
            >
              <ScrollReveal delay={index * 0.08} distance={34}>
                <p className="manifesto-block__line font-display">{line}</p>
              </ScrollReveal>
            </ParallaxY>
          ))}
        </div>
      </section>

      <section className="site-shell authority-block">
        <ScrollReveal className="authority-block__intro">
          <p className="section-label">Authority</p>
          <h2 className="authority-block__title font-display">
            The thinking comes first. The proof has to keep up.
          </h2>
          <p className="authority-block__copy">
            Technical credibility matters here, but not as jargon. It matters
            as a way of making brands easier to crawl, easier to understand,
            and harder to ignore.
          </p>
        </ScrollReveal>

        <div className="authority-block__grid">
          {authorityPillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={index * 0.08}>
              <InteractiveCard intensity="soft">
                <article className="section-card authority-card">
                  <p className="section-label">Method</p>
                  <h3 className="authority-card__title">{pillar.title}</h3>
                  <p className="authority-card__copy">{pillar.body}</p>
                </article>
              </InteractiveCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.12}>
          <p className="authority-block__micro-proof">
            Built for freelance clients, credible to SEO peers, and readable to
            marketing teams who need both strategy and execution clarity.
          </p>
        </ScrollReveal>
      </section>

      <section className="site-shell section-block">
        <ScrollReveal className="section-block__header">
          <div className="section-block__intro">
            <p className="section-label">Selected work</p>
            <h2 className="section-block__title font-display">
              Proof should feel curated, not crowded.
            </h2>
          </div>
          <p className="section-block__copy">
            A few projects are enough on the homepage. The goal here is not to
            explain everything. It is to show that the thinking has outcomes.
          </p>
        </ScrollReveal>

        <div className="home-projects">
          <ScrollReveal>
            <InteractiveCard intensity="medium">
              <article className="section-card home-projects__lead">
                <p className="section-label">Featured case</p>
                <h3 className="home-projects__title font-display">
                  {featuredProject?.title}
                </h3>
                <p className="home-projects__copy">{featuredProject?.framing}</p>
                <div className="home-projects__tags">
                  {featuredProject?.tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="home-projects__impact">{featuredProject?.impact}</p>
              </article>
            </InteractiveCard>
          </ScrollReveal>

          <div className="home-projects__side">
            {secondaryProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.08}>
                <InteractiveCard intensity="soft">
                  <article className="section-card project-card">
                    <p className="section-label">Selected work</p>
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__framing">{project.framing}</p>
                    <p className="project-card__impact">{project.impact}</p>
                  </article>
                </InteractiveCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="section-block__footer">
          <Link href="/projects" className="button-secondary">
            Explore all projects
          </Link>
        </div>
      </section>

      <section className="site-shell insight-block">
        <ParallaxY from={18} to={-18}>
          <ScrollReveal className="insight-block__header">
            <div className="insight-block__intro">
              <p className="section-label">Writing / insight</p>
              <h2 className="insight-block__title font-display">
                Ideas are part of the work, not a separate tab.
              </h2>
            </div>
            <p className="insight-block__copy">
              Writing is where the quieter parts of the method become visible:
              structure, diagnosis, and the logic behind sustainable organic
              growth.
            </p>
          </ScrollReveal>
        </ParallaxY>

        <div className="insight-block__grid">
          {insightTeasers.map((teaser, index) => (
            <ScrollReveal key={teaser} delay={index * 0.08}>
              <InteractiveCard intensity="soft">
                <article className="soft-panel insight-card">
                  <p className="section-label">Insight 0{index + 1}</p>
                  <p className="insight-card__title">{teaser}</p>
                </article>
              </InteractiveCard>
            </ScrollReveal>
          ))}
        </div>

        <div className="insight-block__footer">
          <Link href="/blog" className="button-secondary">
            Read insights
          </Link>
        </div>
      </section>

      <section className="site-shell cta-panel">
        <ScrollReveal className="cta-panel__inner">
          <div className="cta-panel__content">
            <p className="section-label">Start a conversation</p>
            <h2 className="cta-panel__title font-display">
              If the brand needs sharper SEO thinking, I can help shape it.
            </h2>
            <p className="cta-panel__copy">
              Strategy, technical depth, and a more considered growth structure
              for brands that do not want generic search execution.
            </p>
          </div>

          <div className="cta-panel__actions">
            <Link href="/projects" className="button-primary">
              View the work
            </Link>
            <Link href="/experience" className="button-secondary">
              See experience
            </Link>
          </div>

          <Link href="/blog" className="cta-panel__subtle-link">
            Or start with the writing
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
