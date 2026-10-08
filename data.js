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
  maplibre: "MapLibre",
  playwright: "Playwright",
  postgresql: "PostgreSQL",
  supabase: "Supabase",
  vite: "Vite",
};

// Add new project entries here when they are ready to publish.
export const projects = [
  {
    slug: "flock",
    name: "Flock",
    status: "In development",
    description:
      "A mobile-first PWA for run clubs to organize groups, plan routes and events, coordinate attendance, and stay connected.",
    mainImage: "assets/img/projects/flock/flock-detail.png",
    imageSize: { width: 1440, height: 1020 },
    stack: ["react", "typescript", "supabase", "postgresql", "maplibre", "playwright"],
    summaries: [
      {
        summary:
          "I’m building Flock to replace the patchwork of group chats, route tools, and spreadsheets that run-club organizers often use to coordinate a single run.",
      },
      {
        summary:
          "The current product supports flock membership, structured distance and pace options, mapped routes, RSVPs, private real-time chat, direct messages, discovery, reusable route libraries, responsive layouts, and opt-in web notifications. It is still in active development, with workflows validated across desktop and mobile test suites.",
      },
    ],
    gallery: [
      {
        src: "/assets/img/projects/flock/events.png",
        width: 1440,
        height: 1521,
        alt: "Flock events dashboard showing upcoming and past group runs",
        caption: "A shared events view keeps upcoming runs, routes, and attendance in one place.",
      },
      {
        src: "/assets/img/projects/flock/route-preview.png",
        width: 1440,
        height: 1919,
        alt: "Flock route preview mapped through city streets",
        caption: "Organizers can draw, preview, and reuse mapped routes while planning an event.",
      },
      {
        src: "/assets/img/projects/flock/mobile-flocks.png",
        width: 390,
        height: 844,
        alt: "Flock mobile interface showing a runner's groups",
        caption: "The responsive experience is designed around how runners coordinate on the move.",
      },
    ],
    showcaseMedia: [
      {
        type: "image",
        src: "/assets/img/projects/flock/flock-detail.png",
        width: 1440,
        height: 1020,
        alt: "Flock group overview with member activity and upcoming runs",
        caption: "The flock overview brings membership, activity, and upcoming runs together.",
      },
      {
        type: "image",
        src: "/assets/img/projects/flock/create-flock.png",
        width: 1440,
        height: 1000,
        alt: "Create a flock form with group details and running preferences",
        caption: "New groups can define their identity, usual location, distances, and pace options.",
      },
      {
        type: "image",
        src: "/assets/img/projects/flock/events.png",
        width: 1440,
        height: 1521,
        alt: "Flock events dashboard showing upcoming and past group runs",
        caption: "A shared events view keeps upcoming runs, routes, and attendance in one place.",
      },
      {
        type: "video",
        src: "/assets/img/projects/flock/route-preview-last-5s.mp4",
        poster: "/assets/img/projects/flock/route-preview.png",
        width: 1280,
        height: 888,
        alt: "Five-second demonstration of an event route zooming into view in Flock",
        caption: "The event route opens with a focused map transition that brings the full course into view.",
      },
      {
        type: "image",
        src: "/assets/img/projects/flock/live-chat.png",
        width: 1440,
        height: 1000,
        alt: "Real-time chat inside a Flock running group",
        caption: "Private real-time chat lets members coordinate without leaving the group.",
      },
      {
        type: "image",
        src: "/assets/img/projects/flock/discover.png",
        width: 1440,
        height: 1000,
        alt: "Flock discovery page for finding nearby running groups",
        caption: "Discovery helps runners find groups that match their location and interests.",
      },
      {
        type: "image",
        src: "/assets/img/projects/flock/dark-mode.png",
        width: 1440,
        height: 1000,
        alt: "Flock interface in dark mode",
        caption: "The complete interface supports a considered light and dark theme.",
      },
      {
        type: "image",
        src: "/assets/img/projects/flock/rsvp.png",
        width: 1440,
        height: 1521,
        alt: "Flock RSVP dialog with route, distance, and pace selections",
        caption: "Structured RSVPs capture the route, distance, and pace a runner plans to join.",
      },
      {
        type: "image",
        src: "/assets/img/projects/flock/route-drawing.png",
        width: 1440,
        height: 1521,
        alt: "Route editor with points drawn on a map",
        caption: "A focused route editor turns map points into a reusable run route.",
      },
    ],
    displayOrder: 1,
  },
  {
    slug: "coming-soon",
    name: "More work",
    status: "Coming soon",
    description: "A few more works are coming soon.",
    stack: [],
    placeholder: true,
    displayOrder: 2,
  },
];
