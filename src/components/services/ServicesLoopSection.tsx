"use client";

import LogoLoopComponent from "@/components/LogoLoop";
import { LucideIcon } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
const LogoLoop = LogoLoopComponent as any;

interface ServiceLogo {
  icon: LucideIcon;
  title: string;
  href: string;
}

interface ServicesLoopSectionProps {
  services: ServiceLogo[];
}

export function ServicesLoopSection({ services }: ServicesLoopSectionProps) {
  return (
    <section className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={services.map((service) => ({
              node: <service.icon className="w-12 h-12 text-white" />,
              title: service.title,
              href: service.href,
            }))}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#1f2937"
            ariaLabel="Our services"
          />
        </div>
      </div>
    </section>
  );
}