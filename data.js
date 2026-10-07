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
    interests: ["Soccer", "Running", "Rock Climbing"],
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

export const projects = [
  {
    name: "Contracted Site",
    slug: "contracted-site",
    displayOrder: 3,
    imageSize: { width: 769, height: 773 },
    description:
      "A portfolio and storefront concept for a photographer, with space to showcase work and sell photography and video resources.",
    mainImage: "assets/img/projects/Brandon.png",
    img1: "",
    img2: "",
    img3: "",
    summaries: [
      {
        summary:
          "The site is designed to present a photographer's work and offer photography and video resources. The project combines a portfolio presentation with a planned storefront.",
      },
    ],
    stack: [],
  },
  {
    name: "Candy Co.",
    slug: "candy-co",
    displayOrder: 1,
    imageSize: { width: 1881, height: 866 },
    description: "A mock online candy store.",
    mainImage: "assets/img/projects/candyco-homepage.png",
    gallery: [
      {
        src: "/assets/img/projects/candyco1.png",
        width: 1710,
        height: 835,
        alt: "Candy Co. product listing with Add to Cart buttons",
        caption: "Product listing",
      },
      {
        src: "/assets/img/projects/candyco2.png",
        width: 1708,
        height: 829,
        alt: "Candy Co. sign-in form",
        caption: "Sign-in screen",
      },
      {
        src: "/assets/img/projects/candyco3.png",
        width: 1707,
        height: 826,
        alt: "Candy Co. checkout and shipping form",
        caption: "Checkout layout",
      },
    ],
    img1: "",
    img2: "",
    img3: "",
    summaries: [
      {
        summary:
          "The mock storefront includes a promotional homepage, product listing, sign-in screen, and checkout layout.",
      },
    ],
    stack: [
      "/assets/img/svg/react.svg",
      "/assets/img/svg/redux.svg",
      "/assets/img/svg/sequelize.svg",
      "/assets/img/svg/stripe.svg",
      "/assets/img/svg/tailwind.svg",
    ],
  },
  {
    name: "Fitness-TS",
    slug: "fitness-ts",
    displayOrder: 2,
    imageSize: { width: 1902, height: 943 },
    description:
      "A mock gym website built with TypeScript, React, and Tailwind CSS.",
    mainImage: "assets/img/projects/fitness-homepage.png",
    img1: "",
    img2: "",
    img3: "",
    summaries: [
      {
        summary:
          "The landing page introduces the gym and its fitness offering.",
      },
    ],
    stack: [
      "/assets/img/svg/typescript.svg",
      "/assets/img/svg/react.svg",
      "/assets/img/svg/tailwind.svg",
    ],
  },
  {
    name: "Flock",
    slug: "flock",
    displayOrder: 0,
    imageSize: { width: 1901, height: 879 },
    description: "A progressive web app concept for finding group runs.",
    mainImage: "assets/img/projects/flock-app.png",
    img1: "",
    img2: "",
    img3: "",
    summaries: [
      {
        summary:
          "The concept brings group run events into one place for runners to explore.",
      },
    ],
    stack: [
      "/assets/img/svg/react.svg",
      "/assets/img/svg/redux.svg",
      "/assets/img/svg/sequelize.svg",
      "/assets/img/svg/socketio.svg",
      "/assets/img/svg/leaflet.svg",
    ],
  },
];
