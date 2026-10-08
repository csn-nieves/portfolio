import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, PortfolioHead, SiteFooter, SiteHeader, ViewTransitionLink } from "../../components/PortfolioChrome";
import { portfolioContent, projects, technologyNames } from "../../data";

const { contact, person, projectPage } = portfolioContent;

const orderedProjects = projects.filter(({ placeholder }) => !placeholder).sort(
  (a, b) => (a.displayOrder ?? Infinity) - (b.displayOrder ?? Infinity),
);
const technologyName = (path) => {
  const name = path.split("/").pop().replace(".svg", "");
  return technologyNames[name] || name;
};

export async function getStaticPaths() {
  return {
    paths: orderedProjects.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const index = orderedProjects.findIndex(({ slug }) => slug === params.slug);
  if (index === -1) return { notFound: true };
  return {
    props: {
      project: orderedProjects[index],
      nextProject: orderedProjects[(index + 1) % orderedProjects.length],
    },
  };
}

export default function ProjectPage({ project, nextProject }) {
  const summary = project.summaries[0]?.summary;
  return (
    <div className="portfolio-site project-page">
      <PortfolioHead title={`${project.name} | ${person.fullName}`} description={project.description} />
      <SiteHeader />
      <main className="page-width project-detail" id="main-content">
        <Link href="/#work" className="project-back">{projectPage.backLabel}</Link>
        <header className="project-detail-header">
          <p className="project-eyebrow">{projectPage.eyebrow}</p>
          <h1 className="motion-heading">{project.name}</h1>
          <p className="project-lede">{project.description}</p>
        </header>
        <figure className="project-detail-hero" style={{ "--project-transition-name": `project-${project.slug}` }}>
          <Image src={`/${project.mainImage}`} width={project.imageSize.width} height={project.imageSize.height} alt={`${project.name} project screenshot`} sizes="(max-width: 760px) 100vw, 1200px" priority />
        </figure>
        <div className="project-detail-info">
          <div>
            <h2>{projectPage.overviewHeading}</h2>
            <p>{summary}</p>
          </div>
          {project.stack.length > 0 && (
            <div>
              <h2>{projectPage.technologiesHeading}</h2>
              <ul className="project-detail-stack">
                {project.stack.map((tech) => <li key={tech}>{technologyName(tech)}</li>)}
              </ul>
            </div>
          )}
        </div>
        {project.gallery?.length > 0 && (
          <section className="project-gallery" aria-labelledby="gallery-title">
            <div className="project-gallery-heading">
              <p className="project-eyebrow">{projectPage.galleryKicker}</p>
              <h2 className="motion-heading" id="gallery-title">{projectPage.galleryHeading}</h2>
            </div>
            {project.gallery.map((image) => (
              <figure key={image.src}>
                <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes="(max-width: 760px) 100vw, 1200px" />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </section>
        )}
        <div className="project-detail-contact">
          <p>{contact.projectPrompt}</p>
          <a href={`mailto:${person.email}`}>{contact.emailAction} <ArrowIcon /></a>
        </div>
        <nav className="project-detail-next" aria-label="Project navigation">
          <div>
            <span>{projectPage.nextProjectLabel}</span>
            <ViewTransitionLink href={`/work/${nextProject.slug}`}>{nextProject.name} <ArrowIcon /></ViewTransitionLink>
          </div>
          <Link href="/#work" className="project-all-work">{projectPage.allWorkLabel}</Link>
        </nav>
      </main>
      <SiteFooter />
    </div>
  );
}

ProjectPage.usePortfolioHead = true;
