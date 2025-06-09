import { AboutData } from '@/types/data';

/**
 * ABOUT SECTION DATA
 * =================
 * This file contains all the information that appears in the About section of your portfolio.
 * It's structured as a JavaScript object with different sections for your introduction,
 * skills, and highlights.
 * 
 * HOW TO EDIT THIS FILE:
 * 1. Each section is clearly marked with comments
 * 2. You can modify the text content directly
 * 3. For skills, you can add or remove technologies
 * 
 * TIP: Keep a backup of this file before making major changes!
 */

// Export the data so it can be used in other files
export const aboutData: AboutData = {
  name: "Sri",
  title: "Full Stack Developer",
  description: "I am a passionate Full Stack Developer with expertise in building modern web applications. With a strong foundation in both front-end and back-end technologies, I specialize in creating scalable and efficient solutions that deliver exceptional user experiences.",
  image: "/images/profile.jpg",
  skills: [
    // Frontend Technologies
    {
      name: "React",
      level: 90
    },
    {
      name: "Next.js",
      level: 85
    },
    {
      name: "JavaScript",
      level: 95
    },
    {
      name: "TypeScript",
      level: 90
    },
    {
      name: "HTML5",
      level: 95
    },
    {
      name: "CSS3",
      level: 90
    },
    {
      name: "Tailwind CSS",
      level: 85
    },
    {
      name: "Node.js",
      level: 85
    },
    {
      name: "Express",
      level: 80
    },
    {
      name: "MongoDB",
      level: 85
    },
    {
      name: "PostgreSQL",
      level: 80
    },
    {
      name: "Git",
      level: 90
    },
    {
      name: "Docker",
      level: 75
    },
    {
      name: "AWS",
      level: 70
    },
    {
      name: "Jest",
      level: 80
    },
    {
      name: "Redux",
      level: 85
    }
  ]
}; 