type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: React.ReactNode;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
  aside,
}: PageIntroProps) {
  return (
    <section className="site-shell page-intro">
      <div className="page-intro__content">
        <p className="section-label">{eyebrow}</p>
        <h1 className="page-intro__title font-display">{title}</h1>
        <p className="page-intro__description">{description}</p>
      </div>

      {aside ? (
        <aside className="page-intro__aside section-card">{aside}</aside>
      ) : null}
    </section>
  );
}
