export const personalInfo = {
  name: "Tristan Goodwin",
  headline: "Web Developer & Digital Media Specialist with a passion for creative design",
  shortBio: "I'm a Digital Media student at UCF specializing in Interactive Web & Marketing. My technical skills in development complement my creative abilities, allowing me to create engaging, functional digital experiences that blend both artistic vision and technical execution.",
  bio: "I'm a Digital Media student at UCF majoring in Interactive Web & Marketing. Over the past couple years, I've developed extensive technical skills to enhance my abilities as both a developer and creative designer. Starting with the fundamentals of HTML, CSS, and JavaScript, I've expanded my knowledge to include more advanced frameworks like React Native for creating interactive experiences. My expertise extends to both client-side and server-side development, including command line operations with Bash and PuTTy, Git version control, npm package management, and backend frameworks like PHP and Node.js. This comprehensive skill set allows me to bridge the gap between technical implementation and creative design, resulting in compelling digital experiences.",
  interests: "When I'm not coding, I channel my creative energy into music production and brand design. I enjoy illustrating and developing story concepts for music projects, album artwork, and brand identity. I'm also an outdoor enthusiast and avid gamer. I stay current with emerging technology trends, particularly in AI and digital media, continuously seeking ways to integrate these innovations into my creative and technical work."
};

export const skills = [
  // Frontend
  "React.js",
  "JavaScript",
  "HTML/CSS",
  "TypeScript",
  "Tailwind CSS",
  "Expo",
  // Backend
  "Node.js",
  "SQL",
  "API Development",
  "XAMPP",
  // Tools & Others
  "Git",
  "GitHub",
  "VS Code",
  "Responsive Design",
  "Bash"
];

export const projects = [
  {
    id: 1,
    title: "Quiz App",
    description: "An interactive mobile quiz application built with React Native that allows users to test their knowledge on various topics with an intuitive user interface.",
    imageUrl: "https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    technologies: ["React Native", "JavaScript", "Mobile Development", "UI/UX Design"],
    githubUrl: "https://github.com/Trxsta/react-native-quiz",
    demoUrl: "https://youtube.com/shorts/7uU6-IhycKg?feature=share",
    videoId: "7uU6-IhycKg"
  },
  {
    id: 2,
    title: "Exercise Tracker",
    description: "A fitness application built with React Native that helps users track their workouts, set fitness goals, and monitor their progress over time.",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    technologies: ["React Native", "JavaScript", "Health & Fitness API", "Mobile UI"],
    githubUrl: "https://github.com/Trxsta/exercise-tracker",
    demoUrl: "https://youtube.com/shorts/4RJafovJks8?feature=share",
    videoId: "4RJafovJks8"
  },
  {
    id: 3,
    title: "TODO App Design Prototype",
    description: "A UI/UX design prototype created in Figma for a task management mobile application that helps users organize their daily activities and tasks.",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    technologies: ["Figma", "UI/UX Design", "Prototyping", "Mobile Design"],
    githubUrl: null,
    demoUrl: null,
    isTodoApp: true
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and Tailwind CSS to showcase my projects, skills, and experience as a web developer and digital media specialist.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    githubUrl: "https://github.com/Trxsta/Portfolio-2026",
    demoUrl: null
  }
];

export const experience = [
  {
    title: "Web Developer",
    company: "Freelance & Academic Projects",
    period: "2023 - Present",
    description: "Developing web applications and mobile apps using React.js, Node.js, and other modern frameworks. Implementing both client-side and server-side solutions with a focus on responsive design and user experience."
  },
  {
    title: "Junior Developer",
    company: "Academic Training",
    period: "2022 - 2023",
    description: "Learned fundamental web development skills including HTML, CSS, and JavaScript. Gained proficiency with Adobe Creative Suite for design work and creating multimedia content. Developed skills in audio/visual production and digital media creation."
  }
];

export const education = [
  {
    degree: "Digital Media - Interactive Web & Marketing",
    institution: "University of Central Florida (UCF)",
    period: "Current",
    description: "Specializing in web development and marketing with a focus on creating interactive digital experiences. Developing skills in both creative design and technical implementation."
  },
  {
    degree: "UI/UX Design Certificate",
    institution: "LinkedIn Learning",
    period: "2023",
    description: "Comprehensive course covering user interface design principles, user experience methodologies, and design thinking approaches for digital products."
  },
  {
    degree: "React Native Development Certificate",
    institution: "LinkedIn Learning",
    period: "2023",
    description: "Specialized training in cross-platform mobile application development using React Native framework for creating native mobile experiences."
  }
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/tristan-goodwin-11b890315",
  instagram: "https://www.instagram.com/iceeviolet_/",
  github: "https://github.com/Trxsta",
  email: "goodwinz155@gmail.com"
};

// ─── Extended project types for new sections ─────────────────────────────────

export type LinkType = "github" | "live" | "video" | "figma" | "playlist";

export interface ProjectLink {
  label: string;
  url: string;
  type: LinkType;
}

export interface ExtendedProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  links: ProjectLink[];
  badge?: string;
}

export interface CreatorProfile {
  name: string;
  description: string;
  url: string;
  handle: string;
}

// ─── Iterative AI Training Projects ──────────────────────────────────────────

export const aiTrainingProjects: ExtendedProject[] = [
  {
    id: 101,
    title: "Travel Wishlist Web App",
    description: "A full-stack travel wishlist web application built iteratively using AI-assisted development. Focused on backend integration, dynamic data handling, and responsive UI. Demonstrates structured prompting, debugging, and incremental feature development.",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    technologies: ["Full-Stack", "AI-Assisted Development", "Responsive UI", "Backend Integration"],
    links: [
      { label: "GitHub Repository (Code + Transcripts)", url: "https://github.com/TrizJS/travel-wishlist", type: "github" },
      { label: "Live Site", url: "https://travelingwishlist.netlify.app/", type: "live" },
      { label: "Project Demo (YouTube)", url: "https://youtu.be/v0AIn_vMeHM", type: "video" }
    ]
  },
  {
    id: 102,
    title: "AI Training for Music Artist (Sungate Records Internship)",
    description: "Developed AI-generated visuals, voiceovers, and storytelling for the music artist \"De La Plata.\" Focused on refining prompt accuracy, visual consistency, and artist likeness using tools like Artlist and generative AI workflows.",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    technologies: ["Generative AI", "Visual Storytelling", "Artlist", "Prompt Engineering"],
    links: [
      { label: "Music Video (AI Visuals + Voiceover Work)", url: "https://youtu.be/466EzpaBcVI?si=zcscQd_ih3YBfEie", type: "video" }
    ]
  },
  {
    id: 103,
    title: "Cozy Corner Cafe (AI + MCP Integration)",
    description: "An interactive restaurant menu web app built using iterative AI development. Integrated an MCP server to dynamically generate and manage copyright-free AI images. Focused on combining backend logic with AI-generated assets.",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    technologies: ["MCP Server", "AI Image Generation", "Web App", "Backend Integration"],
    links: [
      { label: "GitHub Repository (Code + Transcripts)", url: "https://github.com/TrizJS/cozy-corner-cafe", type: "github" },
      { label: "Live Site", url: "https://cozy-corner-cafe-trizjs.netlify.app/", type: "live" }
    ]
  }
];

// ─── UX/UI Research & Immersive Development ──────────────────────────────────

export const uxUiProjects: ExtendedProject[] = [
  {
    id: 201,
    title: "Tune Camp (Figma Prototype)",
    description: "A music education app prototype focused on user research, usability testing, and iterative design improvements. Developed with a partner using real user feedback and structured UX methodologies.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    technologies: ["Figma", "User Research", "Usability Testing", "UX Design"],
    links: [
      { label: "Figma Prototype (Tune Camp)", url: "https://www.figma.com/proto/wl1ozi3xKP6zTSkyfzWOaY/Tune-Camp-Prototype?node-id=153-148&starting-point-node-id=153%3A148&t=kK8xtocIBOzNpipD-1", type: "figma" }
    ]
  },
  {
    id: 202,
    title: "Mind Melody (AR Music Learning App)",
    description: "An AR-based music learning concept designed to help beginners interact with instruments virtually. Focuses on accessibility, immersive learning, and UI/UX prototyping.",
    imageUrl: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    technologies: ["AR", "UI/UX Design", "Accessibility", "Immersive Learning"],
    links: [
      { label: "Lo-Fi Ar Prototype", url: "https://www.figma.com/design/wRK9ADgWe6bnaeW9mWIIuK/Mind-Melody-AR-Prototype?node-id=0-1&t=RoEEN1bT5NXTdBkp-1", type: "figma" }
    ],
    badge: "In Progress"
  },
  {
    id: 203,
    title: "Explorlando (Group Project)",
    description: "A full-stack tourism platform currently in development, combining frontend and backend systems. Includes API development, database integration, debugging, testing, and a physical QR code brochure for real-world interaction.",
    imageUrl: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    technologies: ["Full-Stack", "API Development", "Database Integration", "QR Code"],
    links: [
      { label: "Figma Hi-Fi Prototype", url: "https://www.figma.com/proto/yacjzEdcNV1Axgq28RVU4X/FLocal-Lo-fi?node-id=209-508&starting-point-node-id=209%3A508&t=J3PmwJ7bYuz9AWce-1", type: "figma" }
    ],
    badge: "In Development"
  },
  {
    id: 204,
    title: "VR Application (In Progress)",
    description: "Currently developing an immersive VR experience as part of coursework, focusing on interaction design and spatial user experiences.",
    imageUrl: "https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    technologies: ["VR", "Interaction Design", "Spatial UX", "Coursework"],
    links: [],
    badge: "In Progress"
  }
];

// ─── Personal Projects: Content Creation & Music Production ──────────────────

export const creatorProfiles: CreatorProfile[] = [
  {
    name: "UZICLONE",
    description: "AI-generated covers, vocal recreation, and music analysis",
    url: "https://youtube.com/@uziclone?si=2_IlIo7Kypq7ELFN",
    handle: "@uziclone"
  },
  {
    name: "Icee Violet",
    description: "Original music, vocal production, mixing, and creative direction",
    url: "https://youtube.com/@iceeviolet?si=UVJS8twpGwXUVwHg",
    handle: "@iceeviolet"
  }
];

export const contentCreationProjects: ExtendedProject[] = [
  {
    id: 301,
    title: "AI Training & Music Analysis",
    description: "Recreated full songs from short, low-quality snippets by analyzing vocals, pitch, and structure. Demonstrates advanced listening ability, vocal replication, and content optimization for audience growth.",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    technologies: ["AI Voice Training", "Music Analysis", "Vocal Replication", "Content Optimization"],
    links: [
      { label: "Recreated Song (YouTube)", url: "https://youtu.be/UxXuPwOkc2w", type: "video" },
      { label: "AI Collaboration Example (100K+ Views)", url: "https://youtu.be/Rivw-NlZvU8?si=eniXfE4R9218FiZB", type: "video" },
      { label: "Original Snippet Reference", url: "https://youtube.com/shorts/5nQyvQhwzO8?si=2rsFw9mtTleBsnk4", type: "video" }
    ]
  },
  {
    id: 302,
    title: "UZICLONE AI Playlist",
    description: "A curated playlist showing progression of AI voice training over 2 years, highlighting improvements in realism and vocal modeling.",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    technologies: ["AI Voice Training", "Playlist Curation", "Vocal Modeling", "2-Year Progression"],
    links: [
      { label: "Full Playlist (YouTube)", url: "https://www.youtube.com/watch?v=npsH8BDdpOc&list=PLuXTkNpzKDnE7Erp-4bt8o8gsuaLdTk0-", type: "playlist" }
    ]
  },
  {
    id: 303,
    title: "Advanced AI Voice Model (Recent Work)",
    description: "Showcases the most recent improvements in AI voice training, with enhanced realism, tone accuracy, and vocal delivery.",
    imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    technologies: ["AI Voice Model", "Tone Accuracy", "Vocal Delivery", "Recent Work"],
    links: [
      { label: "Latest Model Example (YouTube)", url: "https://youtu.be/Eg9ceVGgv8A?si=_YlKFOFg65j08sJa", type: "video" }
    ]
  }
];
