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
    intro: "From physics and chemistry to building web applications.",
    locationPrefix: "Based in",
    primaryAction: "View selected work",
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
    skills: ["React", "TypeScript", "JavaScript", "Go", "HTML & CSS"],
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
        role: "Software Engineer",
        company: "Mimic",
        companyUrl: "https://mimic.com/",
        description: "Enterprise security software focused on ransomware defense.",
      },
    ],
    educationHeading: "Education",
    education: [
      { school: "Fullstack Academy", description: "Software engineering training" },
      { school: "SUNY Potsdam", description: "Studied physics and chemistry" },
    ],
  },
  contact: {
    heading: "Let’s connect.",
    description: "Have a project or opportunity in mind? Send me an email.",
    projectPrompt: "Have a project or opportunity in mind?",
    emailAction: "Email me",
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/christophernieves20" },
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
    summaries: [{ summary: 'The site is designed to present a photographer\'s work and offer photography and video resources. The project combines a portfolio presentation with a planned storefront.' }],
    stack: [],
  },
  {
    name: "Candy Co.",
    slug: "candy-co",
    displayOrder: 1,
    imageSize: { width: 1881, height: 866 },
    description:
      "A mock online candy store.",
    mainImage: "assets/img/projects/candyco-homepage.png",
    gallery: [
      { src: "/assets/img/projects/candyco1.png", width: 1710, height: 835, alt: "Candy Co. product listing with Add to Cart buttons", caption: "Product listing" },
      { src: "/assets/img/projects/candyco2.png", width: 1708, height: 829, alt: "Candy Co. sign-in form", caption: "Sign-in screen" },
      { src: "/assets/img/projects/candyco3.png", width: 1707, height: 826, alt: "Candy Co. checkout and shipping form", caption: "Checkout layout" },
    ],
    img1: "",
    img2: "",
    img3: "",
    summaries: [{ summary: 'The mock storefront includes a promotional homepage, product listing, sign-in screen, and checkout layout.' }],
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
    summaries: [{ summary: 'The landing page introduces the gym and its fitness offering.' }],
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
    description:
      "A progressive web app concept for finding group runs.",
    mainImage: "assets/img/projects/flock-app.png",
    img1: "",
    img2: "",
    img3: "",
    summaries: [{ summary: 'The concept brings group run events into one place for runners to explore.' }],
    stack: [
      "/assets/img/svg/react.svg",
      "/assets/img/svg/redux.svg",
      "/assets/img/svg/sequelize.svg",
      "/assets/img/svg/socketio.svg",
      "/assets/img/svg/leaflet.svg",
    ],
  },
];
