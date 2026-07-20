import { Project } from "@/types/projects";
import { project7, project8, project9, project10, project1, project2, project3, project4, project5, project6 } from "@/app/assets/projects";

export const projects: Project[] = [
  {
    slug: "meetric-ai",
    title: "Meetric AI",
    description: "AI-powered analytics platform.",

    longDescription:
  "Every team has the same problem: meetings happen, things get discussed, decisions get made and then nothing moves. Someone writes notes, another person writes different notes, and by the next day half the action items have evaporated into the ether.\n\nI've watched this play out in startups, remote teams, and growing SMEs across Africa. The cost isn't just lost time it's lost trust. Clients wait. Deadlines slip. People blame each other because no one really knows who committed to what.\n\nThe frustration is universal, but the tools to solve it have always been either too expensive, too complex, or built for enterprise teams with dedicated ops staff. I wanted to build something that works for a two-person startup just as well as a twenty-person agency  something that turns the messiest meeting transcript into a clean, actionable task board in seconds. That's what became Meetric.",

    type: "Product",
    year: "2026",

    challenge: [
      {
        figure: 1,
        title: "Prompt reliability at scale",
        description:
          "Getting Qwen to return consistent, parseable JSON across wildly different transcript formats formal board meetings, casual Slack huddles, voice-note ramblings required significant prompt iteration. The breakthrough was a strict system prompt with explicit JSON schema, temperature set to 0.1, and a fallback parser that strips markdown code fences before parsing.",
      },
      {
        figure: 2,
        title: "Implicit vs explicit action items",
        description:
          "Most meeting action items are implied, not stated outright  \"let's revisit this next week\" is an action item, and \"John mentioned the pricing issue again\" might be one too. Training the agent to catch these without over-extracting noise was a careful balancing act in the system prompt design.",
      },
      {
        figure: 3,
        title: "Alibaba Cloud deployment",
        description:
          "Setting up Function Compute with the correct environment variables, CORS configuration, and cold-start handling for a Node.js Express app added unexpected complexity. The solution was packaging the API as a custom runtime with a warm-up ping route.",
      },
      {
        figure: 4,
        title: "Real-time UX during extraction",
        description:
          "Users shouldn't stare at a spinner for 8 seconds. Implementing streaming from the Qwen API through a Next.js route handler to the client while parsing incomplete JSON chunks safely — required building a custom streaming state machine.",
      },
    ],

    solution: [
      {
        figure: 1,
        title: "Fast end-to-end extraction",
        description: "Under 10 seconds for transcripts up to 8,000 words.",
      },
      {
        figure: 2,
        title: "Implicit commitment detection",
        description:
          "A prompt architecture that reliably extracts implicit commitments, not just explicit ones — achieving what most note-taking tools miss entirely.",
      },
      {
        figure: 3,
        title: "Zero-onboarding UI",
        description: "Clean, production-grade UI that non-technical users can navigate without any onboarding.",
      },
      {
        figure: 4,
        title: "Database-level security",
        description: "Full Row Level Security on Supabase  no user can ever see another user's meetings, enforced at the database level.",
      },
      {
        figure: 5,
        title: "Graceful serverless deployment",
        description: "Serverless deployment on Alibaba Cloud Function Compute with graceful cold-start handling.",
      },
    ],

    image: project7,

    gallery: [
      "/gallary/meetric/3.png",
      "/gallary/meetric/2.png",
      "/gallary/meetric/4.png",
    ],

    tags: ["Next.js", "Supabase", "OpenAI", "TypeScript"],
    techStack: ["Next.js", "Supabase", "OpenAI", "Tailwind CSS"],

    features: [
      "AI Meeting Summaries",
      "Action Item Extraction",
      "Transcript Analysis",
      "Workflow Automation",
    ],

    results: [
      "Reduced manual note-taking",
      "Automated follow-ups",
      "Improved meeting productivity",
    ],

    githubUrl: "",
    featured: true,

    metrics: [
      { label: "AI Features", value: "8+" },
      { label: "Automation", value: "12" },
      { label: "Performance", value: "98" },
    ],
  },

  {
    slug: "jochenna-thrift",
    title: "Jochenna Thrift",
    description: "An e-commerce store, Jochenna Thrift.",
    longDescription:
      "A modern online store built to showcase products and simplify online shopping.",

    type: "E-commerce",
    year: "2026",

    challenge: [
      {
        figure: 1,
        title: "Limited online reach",
        description: "The business needed an online storefront to reach more customers.",
      },
    ],
    solution: [
      {
        figure: 1,
        title: "Responsive storefront",
        description: "Built a responsive e-commerce platform with product browsing and ordering.",
      },
    ],

    image: project8,

    tags: ["Next.js", "Supabase", "Node.js", "E-commerce"],
    techStack: ["Next.js", "Supabase", "Tailwind CSS"],

    features: ["Product Catalog", "Responsive Design", "Contact Integration"],
    results: ["Improved online presence", "Mobile-friendly experience"],

    liveUrl: "https://...",
    featured: false,
  },

  {
    slug: "howell-dev",
    title: "Howell Dev",
    description: "Portfolio website for HowellDev showcasing products and client work.",
    longDescription: "Modern agency website highlighting services, projects, and expertise.",

    type: "Portfolio",
    year: "2025",

    challenge: [
      {
        title: "Premium brand presence",
        description: "Create a premium online presence for the HowellDev brand.",
      },
    ],
    solution: [
      {
        title: "Fast, SEO-friendly build",
        description: "Designed and developed a fast, SEO-friendly portfolio website.",
      },
    ],

    image: project10,

    tags: ["Next.js", "Tailwind", "SEO", "Portfolio"],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],

    features: ["Portfolio", "Project Showcase", "Responsive Design"],
    results: ["Professional online presence"],

    liveUrl: "https://howelldevs.com.ng",
    featured: true,
  },

  {
    slug: "serenity-spa",
    title: "Serenity SPA",
    description: "Landing page for a fictional spa business.",
    longDescription: "A modern marketing website focused on aesthetics and user experience.",

    type: "Product",
    year: "2026",

    challenge: [
      {
        title: "Relaxing UX",
        description: "Design a clean and relaxing user experience.",
      },
    ],
    solution: [
      {
        title: "Modern, animated SPA",
        description: "Created a visually engaging SPA with modern animations.",
      },
    ],

    image: project9,

    tags: ["Next.js", "Tailwind", "SPA", "Admin"],
    techStack: ["Next.js", "Tailwind CSS"],

    features: ["Booking UI", "Responsive Layout"],
    results: ["Fast performance", "Clean UI"],

    liveUrl: "https://spa-look.vercel.app/",
    featured: false,
  },

  {
    slug: "mek-print",
    title: "Mek Print",
    description: "Landing page for a print press business.",
    longDescription: "A modern marketing website focused on aesthetics and user experience.",

    type: "Product",
    year: "2026",

    challenge: [
      {
        title: "Relaxing UX",
        description: "Design a clean and relaxing user experience.",
      },
    ],
    solution: [
      {
        title: "Improved online presence",
        description: "Created for improving the online presence of a print press business.",
      },
    ],

    image: project1,

    tags: ["Next.js", "Tailwind", "Print Press", "Landing Page"],
    techStack: ["Next.js", "Tailwind CSS"],

    features: ["Print Press Services", "Responsive Layout"],
    results: ["Fast performance", "Clean UI"],

    liveUrl: "https://mek-print.vercel.app/",
    featured: false,
  },

  {
    slug: "iphone-ecommerce-store",
    title: "iPhone eCommerce Store",
    description: "A sleek eCommerce storefront concept for Apple products.",
    type: "E-commerce",
    year: "2025",

    image: project2,
    tags: ["eCommerce", "UI/UX"],

    liveUrl: "https://applestore-07.vercel.app/",
    featured: false,
  },

  {
    slug: "skycast-weather-webapp",
    title: "SkyCast Weather Webapp",
    description: "A weather web app with live API integration.",
    type: "Product",
    year: "2025",

    image: project3,
    tags: ["WebApp", "API Integration", "React", "Tailwind CSS"],

    liveUrl: "https://weather-app-7e7q.onrender.com",
    featured: false,
  },

  {
    slug: "sir-t",
    title: "Sir T",
    description: "Website for music ministry artist Sir Tosin Alao.",
    type: "Marketing",
    year: "2025",

    image: project4,
    tags: ["Music", "Website"],

    liveUrl: "https://sir-t.vercel.app/",
    featured: false,
  },

  {
    slug: "trinity-house",
    title: "Trinity House",
    description: "Website for Trinity House Church.",
    type: "Client",
    year: "2025",

    image: project5,
    tags: ["Church", "Website", "UI/UX"],

    liveUrl: "https://trinity-house.vercel.app/",
    featured: false,
  },

  {
    slug: "bole-boss",
    title: "Bole-boss",
    description: "Landing page design and development for Bole-boss.",
    type: "Marketing",
    year: "2025",

    image: project6,
    tags: ["Design", "Development", "Landing Page"],

    liveUrl: "https://bole-boss-beta.vercel.app/",
    featured: false,
  },
];