import { Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamMeeting from "@/assets/team-meeting.jpg";

const FeaturedServicesSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN - Content Card */}
          <div className="order-2 lg:order-1">
            <div 
              className="rounded-3xl p-8 lg:p-10 shadow-[0_4px_40px_rgba(0,0,0,0.06)]"
              style={{ backgroundColor: '#f8f6f3' }}
            >
              {/* Category Tag */}
              <span 
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: '#e8e0d5', color: '#6b5b4f' }}
              >
                Professional Staffing Solutions
              </span>

              {/* Main Heading */}
              <h2 
                className="text-3xl lg:text-4xl font-bold mb-4 leading-tight"
                style={{ color: '#1a1a1a' }}
              >
                Your trusted partner for essential services
              </h2>

              {/* Description */}
              <p 
                className="text-base lg:text-lg mb-6 leading-relaxed"
                style={{ color: '#6b6b6b' }}
              >
                Whether you need reliable cleaning crews, certified plumbers, or professional 
                security personnel — we connect you with vetted experts who deliver quality 
                service every time.
              </p>

              {/* CTA Button */}
              <Button 
                className="rounded-full px-6 py-3 h-auto text-white font-medium mb-8 transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ backgroundColor: '#8b7355' }}
              >
                Explore our services
              </Button>

              {/* Feature List */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b7355' }} />
                  <p style={{ color: '#3d3d3d' }}>
                    Professional cleaning staff, trained in commercial and residential standards
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b7355' }} />
                  <p style={{ color: '#3d3d3d' }}>
                    Licensed plumbers for installations, repairs, and ongoing maintenance
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b7355' }} />
                  <p style={{ color: '#3d3d3d' }}>
                    Background-checked security personnel for properties and events
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Media */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.08)] group cursor-pointer">
              <img 
                src={teamMeeting} 
                alt="Professional team meeting" 
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
                >
                  <Play 
                    className="w-6 h-6 lg:w-8 lg:h-8 ml-1" 
                    style={{ color: '#8b7355' }}
                    fill="#8b7355"
                  />
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
