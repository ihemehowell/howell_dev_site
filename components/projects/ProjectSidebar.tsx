"use client";

import { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
}

interface ProjectSidebarProps {
  sections: Section[];
}

export default function ProjectSidebar({ sections }: ProjectSidebarProps) {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      let current = "overview";

      for (const section of sections) {
        const el = document.getElementById(section.id);

        if (el && window.scrollY >= el.offsetTop - 200) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="hidden md:flex fixed top-32 left-6 flex-col gap-4 z-10">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => handleClick(section.id)}
          className={`text-left text-sm transition-colors ${
            activeSection === section.id
              ? "text-white font-semibold"
              : "text-white/60 hover:text-white"
          }`}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
}
