// Edit the live portfolio's text, links, history, and project entries here.
export const portfolioContent = {
  seo: {
    title: "Christopher Nieves | Software Engineer",
    description:
      "Christopher Nieves is a software engineer. Explore selected web projects and get in touch.",
  },
  person: {
    firstName: "Christopher",
    lastName: "Nieves",
    fullName: "Christopher Nieves",
    initials: "CN",
    role: "Software engineer",
    location: "Saratoga Springs, NY",
    email: "csn.nieves@gmail.com",
    portrait: {
      src: "/assets/img/about/christopher-nieves-headshot.jpeg",
      width: 1254,
      height: 1254,
      alt: "Black-and-white headshot of Christopher Nieves",
    },
  },
  navigation: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    intro:
      "Building product experiences, developer tooling, and test infrastructure for complex systems.",
    locationPrefix: "Based in",
    primaryAction: "View my resume",
    primaryHref: "/resume/christopher-nieves-resume.pdf",
    secondaryAction: "Email me",
  },
  work: {
    heading: "Selected work",
    projectAction: "View project",
  },
  about: {
    headingPrefix: "About",
    summary:
      "I studied physics and chemistry at SUNY Potsdam, then trained at Fullstack Academy before working as a software engineer.",
    locationLabel: "Based in",
    skillsLabel: "Skills",
    skillGroups: [
      {
        category: "Core skills",
        skills: [
          "TypeScript",
          "React",
          "Node.js",
          "Elixir",
          "PostgreSQL",
          "Next.js",
          "Playwright",
        ],
      },
      {
        category: "Currently strengthening",
        skills: ["Python", "GCP"],
      },
    ],
    interestsLabel: "Outside work",
    interestsDescription: "Outside of work, I’m usually playing soccer, out for a run, or spending time at the climbing gym. I’m a seven-time marathoner. My most recent race was the Saratoga Half Marathon, and I’m now training to qualify for the 2028 Boston Marathon.",
  },
  journey: {
    kicker: "The path so far",
    heading: "Experience & education",
    experienceHeading: "Work experience",
    experience: [
      {
        dates: "April 2024 – August 2026",
        role: "Full-Stack Software Engineer",
        company: "Mimic",
        companyUrl: "https://mimic.com/",
        highlights: [
          "Owned customer-facing management-plane features across React, Elixir, OpenAPI, and automated testing as the platform grew from zero to 1,000+ live nodes protecting systems such as Active Directory.",
          "Built configuration and revision workflows for creating, editing, applying, comparing, previewing, and rolling back node protections, with immediate feedback for schema errors, malformed JSON, and invalid access-control lists.",
          "Delivered real-time updates with Phoenix Channels and responsive incident-response workflows across phones, tablets, laptops, and desktops.",
          "Cut CI time by roughly 50% by moving frontend tests to Vitest and Playwright, and modernized about 240 API tests from Bash to TypeScript and Bun as PR-blocking and daily CI.",
          "Created a company-wide design system with more than 50 primitives and 15 composite components, adopted by every UI-building team.",
        ],
      },
      {
        dates: "September 2021 – April 2024",
        role: "Teaching Fellow",
        company: "Fullstack Academy",
        companyUrl: "https://www.fullstackacademy.com/",
        highlights: [
          "Mentored more than 60 students per cohort and 300 overall in data structures, algorithms, architecture, debugging, and clean code; every student under direct mentorship graduated.",
          "Led lectures on data structures, algorithms, React hooks, PostgreSQL, and Prisma, while reviewing code and guiding teams through architecture and delivery decisions.",
        ],
      },
    ],
    educationHeading: "Education",
    education: [
      {
        school: "Fullstack Academy",
        description: "Software Engineering",
      },
      { school: "SUNY Potsdam", description: "Physics & Chemistry" },
    ],
  },
  contact: {
    heading: "Let’s connect.",
    description: "Have a project or opportunity in mind? Send me an email.",
    projectPrompt: "Have a project or opportunity in mind?",
    emailAction: "Email me",
    socialLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/christophernieves20",
      },
      { label: "GitHub", href: "https://github.com/csn-nieves" },
    ],
  },
  projectPage: {
    backLabel: "← All work",
    eyebrow: "Selected work",
    overviewHeading: "Overview",
    technologiesHeading: "Technologies",
    galleryKicker: "More from the project",
    galleryHeading: "A closer look",
    nextProjectLabel: "Next project",
    allWorkLabel: "All work ↑",
  },
};

export const technologyNames = {
  react: "React",
  redux: "Redux",
  sequelize: "Sequelize",
  stripe: "Stripe",
  tailwind: "Tailwind CSS",
  typescript: "TypeScript",
  socketio: "Socket.io",
  leaflet: "Leaflet",
};

// Add new project entries here when they are ready to publish.
export const projects = [];
