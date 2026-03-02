import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "./providers";
import "../src/index.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://skillcitysecurity.com.au'),
  title: "Skill City Group - Premier Security Services & Facility Solutions in Australia",
  description: "Leading provider of top-tier security services, facility management, professional plumbing, corporate training, and recruitment across Australia.",
  keywords: ["Security Services Australia", "Security Company Australia", "Security Guards Australia", "Facility Solutions Australia", "Professional Plumbing Australia", "Recruitment Services Australia", "Skill City Group"],
  openGraph: {
    title: "Skill City Group - Premier Security Services & Facility Solutions in Australia",
    description: "Leading provider of top-tier security services, facility management, professional plumbing, corporate training, and recruitment across Australia.",
    url: 'https://skillcitysecurity.com.au',
    siteName: 'Skill City Group',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: 'https://skillcitysecurity.com.au/securitylogo/SkillCitySecurity.png',
        width: 1200,
        height: 630,
        alt: 'Skill City Group Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Skill City Group - Premier Security Services",
    description: "Leading provider of top-tier security services and facility solutions across Australia.",
    images: ['https://skillcitysecurity.com.au/securitylogo/SkillCitySecurity.png'],
  },
  alternates: {
    canonical: 'https://skillcitysecurity.com.au',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
