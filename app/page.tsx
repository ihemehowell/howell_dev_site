import Hero from '@/components/Hero'
import AboutFounder from "@/components/AboutFounder";
import ProjectsSection from "@/components/ProjectSection";
import CTA from "@/components/CTA";
import Capabilities from '@/components/Capabilities';
import { Engagement } from 'next/font/google';
import EngagementModels from '@/components/EngagementModals';
import Technologies from '@/components/Technologies';

export default function Home() {
    return (
        <main>
            <Hero /> 

            <AboutFounder />

            <Technologies />
            
            <Capabilities />
            
            <ProjectsSection />
            
            <CTA />
            
            <EngagementModels />
        </main>
    )
}
