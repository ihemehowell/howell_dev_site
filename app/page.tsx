import Hero from '@/components/Hero'
import AboutFounder from "@/components/AboutFounder";
import ProjectsSection from "@/components/ProjectSection";
import CTA from "@/components/CTA";
import Capabilities from '@/components/Capabilities';
import { Engagement } from 'next/font/google';
import EngagementModels from '@/components/EngagementModals';

export default function Home() {
    return (
        <main>
            <Hero /> 
            <AboutFounder />
            <div className="h-[100px]"></div>
            <Capabilities />
            <div className="h-[100px]"></div>
            <ProjectsSection />
            <div className="h-[100px]"></div>
            <CTA />
            <div className="h-[100px]"></div>
            <EngagementModels />
        </main>
    )
}
