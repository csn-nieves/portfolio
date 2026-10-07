import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, PortfolioHead, SiteFooter, SiteHeader } from "../components/PortfolioChrome";
import { portfolioContent, projects, technologyNames } from "../data";

const { about, contact, hero, journey, person, seo, work } = portfolioContent;

const selectedProjects = [...projects].sort(
  (a, b) => (a.displayOrder ?? Infinity) - (b.displayOrder ?? Infinity),
);
const technologyName = (path) => {
  const name = path.split("/").pop().replace(".svg", "");
  return technologyNames[name] || name;
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
          {work.projectAction} <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <div className="portfolio-site">
      <PortfolioHead title={seo.title} description={seo.description} />
      <SiteHeader home />
      <main id="main-content">
        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">{person.firstName}{" "}<br />{person.lastName}</h1>
            <div className="hero-positioning">
              <p className="hero-role">{person.role}</p>
              <p className="hero-intro">{hero.intro}</p>
            </div>
            <p className="hero-location">{hero.locationPrefix} {person.location}</p>
            <div className="hero-actions">
              <a className="primary-action" href="#work">{hero.primaryAction} <ArrowIcon /></a>
              <a className="secondary-action" href={`mailto:${person.email}`}>{hero.secondaryAction}</a>
            </div>
          </div>
          <div className="hero-portrait">
            <Image
              src={person.portrait.src}
              alt={person.portrait.alt}
              width={person.portrait.width}
              height={person.portrait.height}
              priority
            />
            <span className="portrait-glitch-layer portrait-glitch-layer-a" aria-hidden="true" />
            <span className="portrait-glitch-layer portrait-glitch-layer-b" aria-hidden="true" />
            <span className="portrait-glitch-layer portrait-glitch-layer-c" aria-hidden="true" />
          </div>
        </section>
        <section className="work-section page-width" id="work" aria-labelledby="work-title">
          <h2 id="work-title">{work.heading}</h2>
          <div className="project-list">
            {selectedProjects.map((project, index) => (
              <ProjectRow key={project.name} project={project} index={index} />
            ))}
          </div>
        </section>
        <section className="about-feature page-width" id="about" aria-labelledby="about-title">
          <div className="about-story">
            <h2 id="about-title">{about.headingPrefix}{" "}<br />{person.firstName}</h2>
            <p>{about.summary}</p>
          </div>
          <div className="about-details">
            <div className="about-list about-location">
              <h3>{about.locationLabel}</h3>
              <p>{person.location}</p>
            </div>
            <div className="about-list">
              <h3>{about.skillsLabel}</h3>
              <div className="skills-groups">
                {about.skillGroups.map((group) => (
                  <div className="skills-group" key={group.category}>
                    <h4>{group.category}</h4>
                    <ul>
                      {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-list about-interests">
              <h3>{about.interestsLabel}</h3>
              <p>{about.interests.join(" · ")}</p>
            </div>
          </div>
        </section>
        <section className="journey-section page-width" id="journey" aria-labelledby="journey-title">
          <div className="journey-heading">
            <p className="journey-kicker">{journey.kicker}</p>
            <h2 id="journey-title">{journey.heading}</h2>
          </div>
          <div className="journey-columns">
            <div className="journey-column">
              <h3>{journey.experienceHeading}</h3>
              <ol className="journey-list">
                {journey.experience.map((item) => (
                  <li key={`${item.company}-${item.role}`}>
                    <span className="journey-time">{item.dates}</span>
                    <h4>{item.role}</h4>
                    <a className="journey-company" href={item.companyUrl} target="_blank" rel="noopener noreferrer">{item.company} <span aria-hidden="true">↗</span></a>
                    <ul className="journey-highlights">
                      {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
            <div className="journey-column">
              <h3>{journey.educationHeading}</h3>
              <ol className="journey-list">
                {journey.education.map((item) => (
                  <li key={item.school}>
                    <h4>{item.school}</h4>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-feature page-width" aria-labelledby="contact-title">
          <div>
            <h2 id="contact-title">{contact.heading}</h2>
            <p>{contact.description}</p>
          </div>
          <div className="contact-actions">
            <a className="contact-link" href={`mailto:${person.email}`}>{person.email} <ArrowIcon /></a>
            <div className="profile-links">
              {contact.socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} <ArrowIcon /></a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter home />
    </div>
  );
}

HomePage.usePortfolioHead = true;
