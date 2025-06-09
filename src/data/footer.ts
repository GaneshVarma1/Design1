import { FooterData } from '@/types/data';

/**
 * FOOTER DATA
 * ===========
 * This file contains all the information that appears in the Footer section of your portfolio.
 * 
 * HOW TO EDIT THIS FILE:
 * 1. Update the social media links with your profiles
 * 2. Customize the footer message and credits
 * 
 * TIP: Keep a backup of this file before making major changes!
 */
export const footerData: FooterData = {
  socialLinks: [
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: "mail"
    },
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "linkedin"
    }
  ],
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  address: "San Francisco, CA"
}; 