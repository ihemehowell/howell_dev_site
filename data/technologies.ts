import {
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript,
  SiNodedotjs, SiMongodb, SiFirebase, SiFigma, SiVercel, SiGithub,
  SiSupabase
} from 'react-icons/si'

export const technologies = [
  { name: 'React', icon: SiReact, level: 90, type: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, level: 88, type: 'Frontend' },
  { name: 'Tailwind', icon: SiTailwindcss, level: 92, type: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, level: 90, type: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, level: 85, type: 'Frontend' },

  { name: 'Node.js', icon: SiNodedotjs, level: 82, type: 'Backend' },
  { name: 'MongoDB', icon: SiMongodb, level: 80, type: 'Backend' },
  { name: 'Firebase', icon: SiFirebase, level: 78, type: 'Backend' },
  { name: 'SupaBase', icon: SiSupabase, level: 75, type: 'Backend' },

  { name: 'Figma', icon: SiFigma, level: 85, type: 'Tools' },
  { name: 'Vercel', icon: SiVercel, level: 90, type: 'Tools' },
  { name: 'GitHub', icon: SiGithub, level: 88, type: 'Tools' },
]
