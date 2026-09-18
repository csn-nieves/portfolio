import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, PortfolioHead, SiteFooter, SiteHeader } from "../components/PortfolioChrome";
import { projects } from "../data";

const selectedProjects = [...projects].sort(
  (a, b) => (a.displayOrder ?? Infinity) - (b.displayOrder ?? Infinity),
);
const techNames = {
  react: "React",
  redux: "Redux",
  sequelize: "Sequelize",
  stripe: "Stripe",
  tailwind: "Tailwind CSS",
  typescript: "TypeScript",
  socketio: "Socket.io",
  leaflet: "Leaflet",
};
const technologyName = (path) => {
  const name = path.split("/").pop().replace(".svg", "");
  return techNames[name] || name;
};

function ProjectRow({ project, index }) {
  const image = project.imageSize;
  return (
    <article className={`project-row ${index % 2 ? "project-row-reverse" : ""}`}>
      <div className="project-media">
        <Image
          src={`/${project.mainImage}`}
          width={image.width}
          height={image.height}
          alt={`${project.name} project screenshot`}
          sizes="(max-width: 760px) 100vw, 62vw"
        />
      </div>
      <div className="project-copy">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {project.stack.length > 0 && (
          <ul className="project-tech" aria-label="Technologies">
            {project.stack.map((tech) => <li key={tech}>{technologyName(tech)}</li>)}
          </ul>
        )}
        <Link href={`/work/${project.slug}`} className="text-action">
          View project <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <div className="portfolio-site">
      <Head><PortfolioHead title="Christopher Nieves | Software Engineer" description="Christopher Nieves is a software engineer. Explore selected web projects and get in touch." /></Head>
      <SiteHeader home />
      <main>
        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">Christopher{" "}<br />Nieves</h1>
            <p className="hero-role">Software engineer</p>
            <p className="hero-intro">From physics and chemistry to building web applications.</p>
            <p className="hero-location">Based in Saratoga Springs, NY</p>
            <div className="hero-actions">
              <a className="primary-action" href="#work">View selected work <ArrowIcon /></a>
              <a className="secondary-action" href="mailto:csn.nieves@gmail.com">Email me</a>
            </div>
          </div>
          <div className="hero-portrait">
            <Image src="/assets/img/about/chrisBW.jpeg" alt="Illustrated portrait of Christopher Nieves" width={512} height={512} priority />
            <span className="portrait-glitch-layer portrait-glitch-layer-a" aria-hidden="true" />
            <span className="portrait-glitch-layer portrait-glitch-layer-b" aria-hidden="true" />
            <span className="portrait-glitch-layer portrait-glitch-layer-c" aria-hidden="true" />
          </div>
        </section>
        <section className="work-section page-width" id="work" aria-labelledby="work-title">
          <h2 id="work-title">Selected work</h2>
          <div className="project-list">
            {selectedProjects.map((project, index) => (
              <ProjectRow key={project.name} project={project} index={index} />
            ))}
          </div>
        </section>
        <section className="about-feature page-width" id="about" aria-labelledby="about-title">
          <div className="about-story">
            <h2 id="about-title">About{" "}<br />Christopher</h2>
            <p>I studied physics and chemistry at SUNY Potsdam, then trained at Fullstack Academy before working as a software engineer.</p>
            <p>My work has included software development and web applications. The projects above show some of my earlier work.</p>
          </div>
          <div className="about-details">
            <dl className="about-facts">
              <div><dt>Based in</dt><dd>Saratoga Springs, NY</dd></div>
              <div><dt>Background</dt><dd>SUNY Potsdam · Fullstack Academy</dd></div>
              <div><dt>Most recent role</dt><dd>Software engineer</dd></div>
            </dl>
            <div className="about-list">
              <h3>Skills</h3>
              <ul>
                <li>React</li><li>TypeScript</li><li>JavaScript</li><li>Go</li><li>HTML &amp; CSS</li>
              </ul>
            </div>
            <div className="about-list about-interests">
              <h3>Outside work</h3>
              <p>Running · Rock climbing · Soccer</p>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-feature page-width" aria-labelledby="contact-title">
          <div>
            <h2 id="contact-title">Let’s connect.</h2>
            <p>Have a project or opportunity in mind? Send me an email.</p>
          </div>
          <div className="contact-actions">
            <a className="contact-link" href="mailto:csn.nieves@gmail.com">csn.nieves@gmail.com <ArrowIcon /></a>
            <div className="profile-links">
              <a href="https://www.linkedin.com/in/christophernieves20" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowIcon /></a>
              <a href="https://github.com/Nievescs20" target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon /></a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter home />
    </div>
  );
}

HomePage.usePortfolioHead = true;
