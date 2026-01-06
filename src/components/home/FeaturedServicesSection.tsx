import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamMeeting from "@/assets/team-meeting.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const FeaturedServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Images */}
          <div className="space-y-4">
            {/* Main large image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={teamMeeting} 
                alt="Professional recruitment services" 
                className="w-full h-[300px] object-cover"
              />
            </div>
            {/* Smaller image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={heroBg} 
                alt="Expert cleaning and maintenance" 
                className="w-full h-[200px] object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Featured Card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Expert Recruitment Solutions
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Finding the right talent can be challenging. Our expert recruiters connect you with 
                skilled professionals across cleaning, plumbing, and security sectors. We handle 
                the screening so you get qualified candidates fast.
              </p>
              <Button variant="outline" size="sm" className="rounded-full">
                View full details
              </Button>
            </div>

            {/* Main Heading */}
            <div className="pt-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Your trusted partner for essential services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need reliable cleaning crews, certified plumbers, or professional 
                security personnel, we provide comprehensive staffing solutions tailored to your 
                needs. Our vetted professionals ensure quality service delivery every time.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-foreground">
                    <span className="font-semibold">Professional cleaning staff</span> — trained in 
                    commercial and residential cleaning standards
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-foreground">
                    <span className="font-semibold">Licensed plumbers</span> — certified experts for 
                    installations, repairs, and maintenance
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-foreground">
                    <span className="font-semibold">Trained security personnel</span> — background-checked 
                    guards for properties and events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServicesSection;
