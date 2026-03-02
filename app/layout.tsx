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
