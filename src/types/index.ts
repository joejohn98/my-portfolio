export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    demoUrl?: string;
    githubUrl?: string;
    imageUrl: string;
  }
  
 export interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }

export interface NavLink {
    label: string;
    href: string;
  }