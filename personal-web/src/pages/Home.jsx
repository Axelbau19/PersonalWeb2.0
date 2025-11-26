import AboutSection from "../components/sections/AboutSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";
import ContactSection from "../components/sections/ContactSection";

export const Home = () => {
    return <div>
        <HeroSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <AboutSection/>
        <ContactSection/>

    </div>
};