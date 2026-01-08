import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import FeaturedServicesSection from "@/components/home/FeaturedServicesSection";
import { WhoWeAreSection } from "@/components/home/WhoWeAreSection";
import { CompaniesSection } from "@/components/home/CompaniesSection";
import { WhyWeExistSection } from "@/components/home/WhyWeExistSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedServicesSection />
        <WhoWeAreSection />
        <CompaniesSection />
        <WhyWeExistSection />
        <ServicesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
