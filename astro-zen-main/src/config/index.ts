import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Scott Pedrick — Mobile & Web Developer",
  author: "Scott Pedrick",
  description:
    "Software Engineer based in Tampa, Florida. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/avatar-big-bw.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/mediamightshow" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/scottpedrick/" },
    { text: "Github", href: "https://github.com/sp9000" },
    { text: "Youtube", href: "https://www.youtube.com/@mediamightpro" },
    { text: "UltGuitar", href: "https://www.ultimate-guitar.com/u/mpedrick07" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Scott Pedrick",
    specialty: "Mobile & Web Developer",
    summary:
      "Developer based in Tampa, Florida. I specialize in UI design, web and mobile application development and maintenance.",
    email: "scott.pedrick@gmail.com",
  },
  experience: [
    {
      company: "Hines Media Family, LLC",
      position: "Owner/Lead Developer",
      startDate: "June 2018",
      endDate: " - Present",
      summary: [
        "Founded digital marketing and development agency based in Tampa, Florida.",
        "Focus: Social media advertising, digital marketing strategy, and brand growth for small businesses",
      ],
    },
    {
      company: "PP+K Agency",
      position: "Front End Web Developer",
      startDate: "May 2012",
      endDate: "August 2016",
      summary: [
        "Developed and designed responsive websites and web applications for major clients including ISM, Big Boy, Checkers, Spectrum, and Tires Plus using HTML, CSS, JavaScript, for the Laravel back-end developers.",
        "Built dynamic and static websites while creating in-house tools that streamlined video production workflows.",
        "Collaborated within a full-service creative agency environment, working closely with designers, creatives, media buyers, and production teams to deliver high-quality digital solutions.",
      ],
    },
    {
      company: "Tampa Digital",
      position: "Web Designer",
      startDate: "June 2009",
      endDate: "November 2011",
      summary: [
        "Created graphic elements and coded animations for web banners, displays, and digital content for the web team.",
        "Junior Designer & Printer - Computer Graphics Division Television Production & Media Company November 2009 - November 2011 producing high-quality print and digital media assets using Adobe Creative Suite (Photoshop, Illustrator, InDesign), specializing in layout, color design, and typography.",
        "Designed custom live streaming events, including the Purina Dog Challenge (St. Louis, MO), Unlimited Hydroplane Races (Seattle, WA), and Team USA Rugby matches at college and professional arenas across the country.",
      ],
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
