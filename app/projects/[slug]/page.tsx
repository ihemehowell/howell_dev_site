"use client";

import { notFound, useParams } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { projects } from "@/data/projects";

import ProjectHero from "@/components/projects/ProjectHero";
import ProjectSidebar from "@/components/projects/ProjectSidebar";
import ProjectFeatures from "@/components/projects/ProjectFeatures";
import ProjectTechStack from "@/components/projects/ProjectTechStack";
import ProjectChallengeSolution from "@/components/projects/ProjectChallengeSolution";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectMetrics from "@/components/projects/ProjectMetrics";
import RelatedProjects from "@/components/projects/RelatedProjects";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();

  const slug = params?.slug as string;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Challenge" },
    { id: "solution", label: "Solution" },
    { id: "features", label: "Features" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "screenshots", label: "Gallery" },
    { id: "results", label: "Results" },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 pt-32 pb-24 relative">
      {/* Sidebar Navigation */}
      <ProjectSidebar sections={sections} />

      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 text-white/70 hover:text-white transition"
        >
          <ChevronLeft size={20} />
          Back
        </button>

        {/* HERO */}
        <ProjectHero project={project} />

        {/* CHALLENGE + SOLUTION */}
        <ProjectChallengeSolution project={project} />

        {/* FEATURES */}
        <ProjectFeatures project={project} />

        {/* TECH STACK */}
        <ProjectTechStack project={project} />

        {/* GALLERY */}
        <ProjectGallery project={project} />

        {/* RESULTS */}
        <ProjectMetrics project={project} />

        {/* RELATED PROJECTS */}
        <RelatedProjects projects={projects} currentSlug={project.slug} />
      </div>
    </main>
  );
}
