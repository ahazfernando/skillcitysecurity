"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Shield, Calendar, CheckCircle2, FileText, Satellite } from "lucide-react";

type TabService = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  image: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  ctaText: string;
};

const tabServices: TabService[] = [
  {
    id: "manned-guarding",
    label: "Manned Guarding",
    title: "On-site security, always present.",
    subtitle: "Professional guarding for people, property, and assets.",
    description:
      "Our manned guarding teams provide a visible, highly trained security presence at your facilities. From reception to perimeter patrols, we customise guard posts and routines around the way your site actually operates.",
    bullets: [
      "Licensed guards trained in conflict management and de-escalation",
      "Static posts, reception coverage, and lobby protection",
      "Scheduled and random site patrols, keys and lock-up duties",
      "Detailed incident reporting and daily activity logs",
    ],
    image: "/servicessecurity/28f0dd7c26a20f5a0647f1070f5af947.jpg",
    icon: Shield,
    ctaText: "Talk to us about manned guarding",
  },
  {
    id: "event-security",
    label: "Event & Crowd Security",
    title: "Safe events, controlled environments.",
    subtitle: "Security planning and crowd management for every occasion.",
    description:
      "From corporate gatherings to large public events, our teams handle access control, crowd flow, and incident response so organisers can focus on the experience, not the risk.",
    bullets: [
      "Pre-event risk assessment and security planning",
      "Gate control, ticket checks, and guest screening",
      "Crowd flow management and emergency route protection",
      "Post-event reporting and recommendations",
    ],
    image: "/servicessecurity/abd95df86f099e14285d3ff3fd1251e4.jpg",
    icon: Calendar,
    ctaText: "Plan security for your next event",
  },
  {
    id: "access-control",
    label: "Access Control",
    title: "Only the right people, in the right places.",
    subtitle: "Technology-led control of doors, gates, and sensitive zones.",
    description:
      "We design and manage access control systems that combine physical barriers with smart credentials and monitoring, giving you real-time oversight of who is on-site and where.",
    bullets: [
      "Card, fob, and mobile credential solutions",
      "Zone-based access rules for staff, visitors, and contractors",
      "Audit trails for compliance and investigations",
      "Integration with CCTV and alarm monitoring",
    ],
    image: "/servicessecurity/27c74718ca7236e2447a37560fb43a5e.jpg",
    icon: CheckCircle2,
    ctaText: "Explore access control options",
  },
  {
    id: "monitoring-response",
    label: "Monitoring & Response",
    title: "Eyes on your site, 24/7.",
    subtitle: "Remote monitoring backed by rapid on-the-ground response.",
    description:
      "Our monitoring and response services combine surveillance, alarms, and patrols so that every alert is seen, verified, and acted on quickly—day or night.",
    bullets: [
      "24/7 alarm and CCTV monitoring",
      "Video verification before dispatching response",
      "Mobile patrols and call-out services",
      "Clear escalation paths and reporting after every incident",
    ],
    image: "/servicessecurity/3c0b5dc4a3e34a3efa83a8dcfad4cac2.jpg",
    icon: Satellite,
    ctaText: "Set up monitoring & response",
  },
];

export const SecurityServicesTabsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-content">
        {/* Heading */}
        <div className="mb-10 md:mb-12">
          <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase mb-3">
            In-depth services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-3">
            How Skill City Security
            <br />
            <span className="text-orange-500">protects your facilities in detail</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Switch between services to see exactly what is included, how we operate on-site, and what you can
            expect when you partner with Skill City Facility Solutions.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue={tabServices[0].id} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-start md:justify-between gap-2 md:gap-3 bg-white p-1 rounded-full border border-border">
            {tabServices.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="flex-1 min-w-[140px] rounded-full px-4 py-2 text-xs md:text-sm font-semibold data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-sm text-muted-foreground hover:text-foreground"
              >
                {service.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabServices.map((service) => {
            const Icon = service.icon;
            return (
              <TabsContent key={service.id} value={service.id} className="mt-8">
                <div className="grid lg:grid-cols-2 gap-10 items-stretch bg-white rounded-3xl border border-border shadow-sm p-6 md:p-8">
                  {/* Left – Copy */}
                  <div className="flex flex-col justify-between gap-6">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 mb-4">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-500">
                          <Icon className="w-3.5 h-3.5 text-white" />
                        </span>
                        <span className="text-xs font-medium text-orange-700">
                          {service.label}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        What this service includes
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {service.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
                            <p className="text-xs md:text-sm text-muted-foreground">
                              {bullet}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="mt-4 w-full md:w-auto rounded-full bg-orange-500 hover:bg-orange-600 text-white">
                      {service.ctaText}
                    </Button>
                  </div>

                  {/* Right – Visual */}
                  <div className="relative rounded-2xl overflow-hidden min-h-[260px] md:min-h-[320px] bg-muted">
                    <Image
                      src={service.image}
                      alt={service.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

