import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

const chapters = [
  {
    number: "01",
    title: "The Beginning",
    content: `In 2010, in a small office with big dreams, Skill City Group was born. Our founders saw a fundamental problem in the world of work: talented people weren't reaching their potential, and organizations were struggling to find the skills they needed.

We didn't start with a grand business plan. We started with a question: "What if we could bridge the gap between potential and performance?" That question became our mission, and it still drives us today.`,
  },
  {
    number: "02",
    title: "The Growth",
    content: `The early years were challenging. We had to prove that our approach—putting people at the center of everything—could deliver real business results. We did it one client at a time, one success story at a time.

By 2015, we had trained over 5,000 professionals and expanded our team to 50 passionate trainers and consultants. But more importantly, we had learned something profound: transformation isn't about teaching skills; it's about igniting potential.`,
  },
  {
    number: "03",
    title: "The Evolution",
    content: `As the world changed, so did we. The rise of digital technology, the shift to remote work, the emergence of new skills—each challenge became an opportunity to innovate.

We launched our digital learning platform in 2019, just before the world would need it most. We expanded into leadership consulting, helping organizations not just train their people, but transform their cultures.`,
  },
  {
    number: "04",
    title: "Today & Tomorrow",
    content: `Today, Skill City Group is a family of companies, each focused on a specific aspect of human potential. We serve clients in over 20 countries, and we've impacted more than 50,000 careers.

But we're just getting started. The future of work is changing faster than ever, and we're committed to being at the forefront—not just adapting to change, but leading it.`,
  },
];

const OurStory = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-20 bg-hero-pattern relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
          
          <div className="max-w-content relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className={cn(
                "inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 transition-all duration-700",
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                Our Story
              </span>
              <h1 className={cn(
                "text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8 transition-all duration-700 delay-100",
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                A Story of
                <span className="block mt-2 text-gradient-hero">Transformation</span>
              </h1>
              <p className={cn(
                "text-xl text-white/70 leading-relaxed transition-all duration-700 delay-200",
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                From a small office with big dreams to a global force for change—
                this is the story of how we became who we are today.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Quote */}
        <section className="py-24 bg-background">
          <div className="max-w-content">
            <div className="max-w-4xl mx-auto text-center relative">
              <Quote className="w-16 h-16 text-accent/20 mx-auto mb-8" />
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display text-foreground leading-[1.4] italic">
                "We believe that every person has untapped potential waiting to be unleashed. 
                Our job is to be the catalyst for that transformation."
              </blockquote>
              <div className="mt-8">
                <div className="font-semibold text-foreground">The Founders</div>
                <div className="text-muted-foreground">Skill City Group</div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapters */}
        <section className="py-24 bg-section-gradient">
          <div className="max-w-content">
            <div className="max-w-4xl mx-auto">
              {chapters.map((chapter, index) => {
                return (
                  <ChapterBlock key={index} chapter={chapter} index={index} />
                );
              })}
            </div>
          </div>
        </section>

        {/* Closing Quote */}
        <section className="py-24 bg-hero-pattern relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
          
          <div className="max-w-content relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-[1.2] mb-8">
                The best chapter of our story
                <span className="block mt-2 text-accent">is yet to be written.</span>
              </h2>
              <p className="text-xl text-white/70 mb-8">
                And we'd love for you to be part of it.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const ChapterBlock = ({ chapter, index }: { chapter: typeof chapters[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <div
      ref={ref}
      className={cn(
        "mb-24 last:mb-0 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {/* Chapter number */}
      <div className="flex items-center gap-6 mb-8">
        <span className="text-8xl md:text-9xl font-display font-bold text-accent/10">
          {chapter.number}
        </span>
        <div className="h-0.5 flex-1 bg-gradient-to-r from-accent/20 to-transparent" />
      </div>
      
      {/* Chapter content */}
      <div className={cn(
        index % 2 === 0 ? "pl-0 md:pl-12" : "pr-0 md:pr-12"
      )}>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
          {chapter.title}
        </h2>
        <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
          {chapter.content}
        </div>
      </div>
    </div>
  );
};

export default OurStory;
