import Hero from '@/components/Hero'
import ServicesSection from "@/components/ServiceSection";
import AboutFounder from "@/components/AboutFounder";
import ProjectsSection from "@/components/ProjectSection";
import CTA from "@/components/CTA";

export default function Home() {
    return (
        <main>
            <Hero /> 
            <AboutFounder />
            <div className="h-[100px]"></div>
            <ServicesSection />
            <div className="h-[100px]"></div>
            <ProjectsSection />
            <div className="h-[100px]"></div>
            <CTA />
            

        </main>
    )
}
