import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "./providers";
import "../src/index.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://skillcityfs.com.au'),
  title: "Skill City Group - Facility Solutions & Security Services in Victoria",
  description: "Leading provider of corporate training, facility solutions, professional plumbing, and security services across Victoria, Australia.",
  keywords: ["Facility Solutions Victoria", "Security Services Melbourne", "Professional Plumbing Victoria", "Recruitment Services Melbourne", "Skill City Group"],
  openGraph: {
    locale: 'en_AU',
    type: 'website',
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
