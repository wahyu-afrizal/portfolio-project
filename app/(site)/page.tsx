import Link from "next/link";
import type { Metadata } from "next";

import InteractiveCard from "@/components/motion/interactive-card";
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

export default function Home() {
  const featuredProject = projectHighlights.find((item) => item.featured);
  const secondaryProjects = projectHighlights.filter((item) => !item.featured);

  return (
    <main className="home-page">
      <section className="site-shell home-hero-alt">
        <ScrollReveal>
          <p className="section-label">Strategic SEO consultant</p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h1 className="home-hero-alt__title font-display">
            I build SEO presence that feels sharp before it feels loud.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="home-hero-alt__footer">
          <p className="home-hero-alt__copy">
            Technical SEO, content systems, and growth structure for brands that
            want stronger search performance with a clearer point of view.
          </p>
          <div className="home-hero__actions">
            <Link href="/projects" className="button-primary">
              View selected work
            </Link>
            <Link href="/blog" className="button-secondary">
              Read my thinking
            </Link>
          </div>
        </ScrollReveal>
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
            <ScrollReveal key={line} delay={0.06 * index} distance={14}>
              <p
                className={`manifesto-block__line font-display${index % 2 === 1 ? " manifesto-block__line--right" : ""}`}
              >
                {line}
              </p>
            </ScrollReveal>
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

        <div className="authority-stack">
          {authorityPillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={index * 0.1}>
              <div className="authority-item">
                <span className="authority-item__num font-display">
                  0{index + 1}
                </span>
                <div className="authority-item__body">
                  <h3 className="authority-item__title">{pillar.title}</h3>
                  <p className="authority-item__copy">{pillar.body}</p>
                </div>
              </div>
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

        <div className="home-projects-alt">
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

          <div className="project-list">
            {secondaryProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.08}>
                <div className="project-list-item">
                  <div className="project-list-item__head">
                    <h3 className="project-list-item__title">{project.title}</h3>
                    <div className="home-projects__tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="project-list-item__framing">{project.framing}</p>
                </div>
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
        <ScrollReveal className="insight-block__header" distance={14}>
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

        <div className="insight-block__grid">
          {insightTeasers.map((teaser, index) => (
            <div key={teaser}>
              <InteractiveCard intensity="soft">
                <article className="insight-card">
                  <p className="section-label">Insight 0{index + 1}</p>
                  <p className="insight-card__title">{teaser}</p>
                </article>
              </InteractiveCard>
            </div>
          ))}
        </div>

        <div className="insight-block__footer">
          <Link href="/blog" className="button-secondary">
            Read insights
          </Link>
        </div>
      </section>

      <section className="site-shell cta-panel">
        <ScrollReveal className="cta-panel__body cta-panel__body--stack">
          <div className="cta-panel__content">
            <p className="section-label">Start a conversation</p>
            <h2 className="cta-panel__title font-display">
              If the brand needs sharper SEO thinking, I can help shape it.
            </h2>
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
