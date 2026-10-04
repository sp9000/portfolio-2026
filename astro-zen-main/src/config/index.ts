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
  canonicalURL: "https://scottpedrickdev.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Scott Pedrick",
    specialty: "Mobile & Web Developer",
    summary:
      "UI Specialist and Full-Stack Developer based in Tampa, Florida, dedicated to building and maintaining high-quality web and mobile applications. Expert at bridging the gap between clean visual design and efficient code. Passionate about optimization, seamless performance, and creating modern digital solutions that solve real-world problems across all platforms.",
    email: "scott.pedrick@gmail.com",
  },
  experience: [
    {
      company: "Hines Media Family, LLC",
      position: "Owner/Lead Developer",
      startDate: "June 2018",
      endDate: " Present",
      summary: [
        "Established and scaled a full-service digital marketing agency specializing in social media advertising, web development, and brand growth strategies for small businesses.",
        "Formulated comprehensive digital marketing blueprints, aligning brand identity with targeted content strategies to accelerate audience engagement and lead generation.",
        "Managed end-to-end client lifespans, including initial discovery, proposals, campaign execution, and monthly performance analytics reporting.",
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
      name: "Checkers",
      summary: "Designed and programmed cross-platform digital experiences using HTML/CSS/JavaScript. ",
      linkPreview: "/checkers0.jpg",
      linkSource: "https://checkersandrallys.com/",
      image: "/checkers0.jpg",
    },
    {
      name: "Bob's Big Boy",
      summary: "Lead development and launch of the e-commerce store, expanding to dozens of new product lines.",
      linkPreview: "/bigboy-store.png",
      linkSource: "https://shop.bigboy.com/",
      image: "/bigboy-store.png",
    },
    {
      name: "MOSI Mission: Moonbase",
      summary: "Programmed and animated interactive moon mission games for a science and aerospace exhibit.",
      linkPreview: "/mosi-moonbase.jpeg",
      linkSource: "https://mosi.org/exhibit/mission-moonbase/",
      image: "/mosi-moonbase.jpeg",
    },
  ],
  about: {
    description: `
      Hi, I’m Scott Pedrick, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/avatar-big-bw.png",
  },
};

// #5755ff
