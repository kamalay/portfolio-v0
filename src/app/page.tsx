import LandingSection from "@/components/sections/landingSection";
import AboutMeSection from "@/components/sections/aboutMeSection";
import ExperienceSection from "@/components/sections/experienceSection";
import EducationSection from "@/components/sections/educationSection";

export default function Home() {
  return (
    <main>
      <LandingSection />
      <AboutMeSection />
      <EducationSection />
      <ExperienceSection />
    </main>
  );
}
