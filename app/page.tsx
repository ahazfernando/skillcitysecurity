import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ModernHeaderSection } from "@/components/home/ModernHeaderSection";
import { HeroSection } from "@/components/home/HeroSection";
import { WhoWeAreSection } from "@/components/home/WhoWeAreSection";
import DestinationsGallery from "@/components/home/DestinationsGallery";
import { MarketingHeroSection } from "@/components/home/MarketingHeroSection";
import { WhyWeExistSection } from "@/components/home/WhyWeExistSection";
import { WellnessServicesSection } from "@/components/home/WellnessServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ModernHeaderSection />
        <HeroSection />
        <WhoWeAreSection />
        <DestinationsGallery />
        <MarketingHeroSection />
        <WhyWeExistSection />
        <WellnessServicesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
