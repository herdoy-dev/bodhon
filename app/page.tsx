import AboutSection from "@/components/about-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ImpactSection from "@/components/impact-section";
import ProgramsSection from "@/components/programs-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ImpactSection />
      <CTASection />
    </main>
  );
}
