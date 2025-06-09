// Hero Section Types
export interface HeroStatus {
  text: string;
  isAvailable: boolean;
}

export interface HeroCTA {
  text: string;
  link: string;
}

export interface HeroData {
  greeting: string;
  status: HeroStatus;
  title: string;
  role: string;
  description: string;
  cta: {
    primary: HeroCTA;
    secondary: HeroCTA;
  };
}

// Project Types
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  image: string;
  video: string;
}

export interface ProjectsData {
  projects: Project[];
}

// Experience Types
export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface ExperienceData {
  experiences: Experience[];
}

// Education Types
export interface Education {
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

export interface EducationData {
  education: Education[];
}

// About Types
export interface Skill {
  name: string;
  level: number;
}

export interface AboutData {
  name: string;
  title: string;
  description: string;
  skills: Skill[];
  image: string;
}

// Footer Types
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface FooterData {
  socialLinks: SocialLink[];
  email: string;
  phone: string;
  address: string;
} 