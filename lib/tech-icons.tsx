import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSupabase,
  SiNodedotjs,
  SiFramer,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiDocker,
  SiGit,
  SiGithub,
  SiFigma,
  SiGraphql,
  SiRedux,
  SiFirebase,
  SiPython,
  SiSass,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { Code2, Sparkles } from "lucide-react";
import { IconType } from "react-icons";

interface TechIconEntry {
  icon: IconType;
  color: string;
}

const normalize = (str: string) => str.toLowerCase().replace(/[.\s]/g, "");

const techIconMap: Record<string, TechIconEntry> = {
  nextjs: { icon: SiNextdotjs, color: "#FFFFFF" },
  react: { icon: SiReact, color: "#61DAFB" },
  typescript: { icon: SiTypescript, color: "#3178C6" },
  javascript: { icon: SiJavascript, color: "#F7DF1E" },
  tailwind: { icon: SiTailwindcss, color: "#38BDF8" },
  tailwindcss: { icon: SiTailwindcss, color: "#38BDF8" },
  supabase: { icon: SiSupabase, color: "#3ECF8E" },
  nodejs: { icon: SiNodedotjs, color: "#5FA04E" },
  openai: { icon: Sparkles, color: "#FFFFFF" }, // Simple Icons removed the OpenAI mark; using a neutral fallback
  framermotion: { icon: SiFramer, color: "#0055FF" },
  express: { icon: SiExpress, color: "#FFFFFF" },
  postgresql: { icon: SiPostgresql, color: "#4169E1" },
  mongodb: { icon: SiMongodb, color: "#47A248" },
  vercel: { icon: SiVercel, color: "#FFFFFF" },
  docker: { icon: SiDocker, color: "#2496ED" },
  git: { icon: SiGit, color: "#F05032" },
  github: { icon: SiGithub, color: "#FFFFFF" },
  figma: { icon: SiFigma, color: "#F24E1E" },
  graphql: { icon: SiGraphql, color: "#E10098" },
  redux: { icon: SiRedux, color: "#764ABC" },
  firebase: { icon: SiFirebase, color: "#FFCA28" },
  python: { icon: SiPython, color: "#3776AB" },
  sass: { icon: SiSass, color: "#CC6699" },
  html5: { icon: SiHtml5, color: "#E34F26" },
  css3: { icon: SiCss, color: "#1572B6" },
};

export function getTechIcon(tech: string): TechIconEntry {
  const key = normalize(tech);
  return techIconMap[key] ?? { icon: Code2, color: "#9CA3AF" };
}