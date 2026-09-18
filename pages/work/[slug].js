import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, PortfolioHead, SiteFooter, SiteHeader } from "../../components/PortfolioChrome";
import { projects } from "../../data";

const orderedProjects = [...projects].sort(
  (a, b) => (a.displayOrder ?? Infinity) - (b.displayOrder ?? Infinity),
);
const techNames = {
  react: "React", redux: "Redux", sequelize: "Sequelize", stripe: "Stripe",
  tailwind: "Tailwind CSS", typescript: "TypeScript", socketio: "Socket.io", leaflet: "Leaflet",
};
const technologyName = (path) => techNames[path.split("/").pop().replace(".svg", "")];

export async function getStaticPaths() {
  return {
    paths: projects.map(({ slug }) => ({ params: { slug } })),
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
      <Head>
        <PortfolioHead title={`${project.name} | Christopher Nieves`} description={project.description} />
      </Head>
      <SiteHeader />
      <main className="page-width project-detail">
        <Link href="/#work" className="project-back">← All work</Link>
        <header className="project-detail-header">
          <p className="project-eyebrow">Selected work</p>
          <h1>{project.name}</h1>
          <p className="project-lede">{project.description}</p>
        </header>
        <figure className="project-detail-hero">
          <Image src={`/${project.mainImage}`} width={project.imageSize.width} height={project.imageSize.height} alt={`${project.name} project screenshot`} sizes="(max-width: 760px) 100vw, 1200px" priority />
        </figure>
        <div className="project-detail-info">
          <div>
            <h2>Overview</h2>
            <p>{summary}</p>
          </div>
          {project.stack.length > 0 && (
            <div>
              <h2>Technologies</h2>
              <ul className="project-detail-stack">
                {project.stack.map((tech) => <li key={tech}>{technologyName(tech)}</li>)}
              </ul>
            </div>
          )}
        </div>
        {project.gallery?.length > 0 && (
          <section className="project-gallery" aria-labelledby="gallery-title">
            <div className="project-gallery-heading">
              <p className="project-eyebrow">More from the project</p>
              <h2 id="gallery-title">A closer look</h2>
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
          <p>Have a project or opportunity in mind?</p>
          <a href="mailto:csn.nieves@gmail.com">Email me <ArrowIcon /></a>
        </div>
        <nav className="project-detail-next" aria-label="Project navigation">
          <div>
            <span>Next project</span>
            <Link href={`/work/${nextProject.slug}`}>{nextProject.name} <ArrowIcon /></Link>
          </div>
          <Link href="/#work" className="project-all-work">All work ↑</Link>
        </nav>
      </main>
      <SiteFooter />
    </div>
  );
}

ProjectPage.usePortfolioHead = true;
