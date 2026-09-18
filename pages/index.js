import Head from "next/head";
import Image from "next/image";
import Modal from "react-modal";
import { useEffect, useState } from "react";
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

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true" fill="none">
      <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header page-width" id="top">
      <a className="site-mark" href="#top" onClick={closeMenu} aria-label="Christopher Nieves, back to top">CN</a>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>{menuOpen ? "Close" : "Menu"}</span>
        <span className="menu-lines" aria-hidden="true"><span /><span /><span /></span>
      </button>
      <nav className={menuOpen ? "site-nav is-open" : "site-nav"} id="site-navigation" aria-label="Main navigation">
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}

function ProjectRow({ project, index, onOpen }) {
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
        <button type="button" className="text-action" onClick={() => onOpen(project)}>
          View project <ArrowIcon />
        </button>
      </div>
    </article>
  );
}

function ProjectDialog({ project, onClose }) {
  if (!project) return null;
  const image = project.imageSize;
  return (
    <Modal
      isOpen
      onRequestClose={onClose}
      contentLabel={`${project.name} project details`}
      className="work-dialog"
      overlayClassName="work-dialog-overlay"
      closeTimeoutMS={200}
    >
      <div className="dialog-topline">
        <span>Project details</span>
        <button type="button" onClick={onClose} aria-label="Close project details">Close <span aria-hidden="true">×</span></button>
      </div>
      <div className="dialog-body">
        <h2>{project.name}</h2>
        <div className="dialog-image">
          <Image src={`/${project.mainImage}`} width={image.width} height={image.height} alt={`${project.name} project screenshot`} sizes="(max-width: 760px) 90vw, 780px" />
        </div>
        {project.summaries.map(({ summary }) => <p key={summary}>{summary}</p>)}
        {project.stack.length > 0 && (
          <ul className="project-tech" aria-label="Technologies">
            {project.stack.map((tech) => <li key={tech}>{technologyName(tech)}</li>)}
          </ul>
        )}
      </div>
    </Modal>
  );
}

export default function HomePage() {
  const [activeProject, setActiveProject] = useState(null);
  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);

  return (
    <div className="portfolio-site">
      <Head>
        <title>Christopher Nieves | Software Engineer</title>
        <meta name="description" content="Christopher Nieves is a software engineer. Explore selected web projects and get in touch." />
        <meta name="author" content="Christopher Nieves" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <SiteHeader />
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
              <ProjectRow key={project.name} project={project} index={index} onOpen={setActiveProject} />
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
      <footer className="site-footer page-width">
        <span>© {new Date().getFullYear()} Christopher Nieves</span>
        <a href="#top">Back to top ↑</a>
      </footer>
      <ProjectDialog project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}

HomePage.usePortfolioHead = true;
