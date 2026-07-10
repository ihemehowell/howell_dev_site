import { StaticImageData } from "next/dist/shared/lib/image-external";

interface Metric {
  label: string;
  value: string;
}

interface Testimonial {
  name: string;
  company: string;
  quote: string;
}


export interface ListItem {
  figure?: number | string;
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;

  longDescription?: string;

  type:
    | "Client"
    | "Product"
    | "Hackathon"
    | "Side Project"
    | "E-commerce"
    | "Open Source"
    | "Portfolio"
    | "Marketing"
    | "Other";

  year: string;

  image: string | StaticImageData;
  gallery?: string[];

  tags: string[];

  role?: string;
  duration?: string;

  liveUrl?: string;
  githubUrl?: string;

  featured?: boolean;

  challenge?: ListItem[];

  solution?: ListItem[];

  features?: string[];

  techStack?: string[];

  results?: string[];

  testimonial?: Testimonial;

  metrics?: Metric[];
}
