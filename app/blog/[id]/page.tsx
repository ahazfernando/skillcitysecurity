"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

// This would normally come from a database or CMS
const blogPostContent = {
  "1": {
    title: "The Future of Corporate Training: Trends to Watch in 2025",
    excerpt: "Discover the emerging trends that are reshaping how organizations approach employee development and skills training.",
    category: "Industry Insights",
    author: "Sarah Johnson",
    authorRole: "Chief Learning Officer",
    date: "January 5, 2026",
    readTime: "8 min read",
    content: `
The landscape of corporate training is undergoing a dramatic transformation. As we move deeper into 2025, several key trends are reshaping how organizations approach employee development and skills training.

## 1. AI-Powered Personalization

Artificial intelligence is revolutionizing the way training content is delivered. Modern learning platforms can now analyze individual learning patterns, preferences, and performance data to create highly personalized learning paths. This means employees receive training that's specifically tailored to their needs, learning style, and career goals.

## 2. Microlearning and Just-in-Time Training

The days of long, comprehensive training sessions are numbered. Today's workforce prefers bite-sized learning modules that can be consumed in 5-10 minutes. This microlearning approach fits seamlessly into busy schedules and has been shown to improve knowledge retention by up to 80%.

## 3. Immersive Technologies

Virtual reality (VR) and augmented reality (AR) are no longer just for gaming. These technologies are being increasingly adopted for corporate training, particularly in industries where hands-on experience is crucial. From virtual equipment simulations to immersive safety training, these technologies offer safe and cost-effective ways to develop practical skills.

## 4. Skills-Based Learning

Organizations are shifting from role-based training to skills-based learning. This approach focuses on developing specific competencies that can be applied across multiple roles and departments, creating a more agile and adaptable workforce.

## 5. Social and Collaborative Learning

The importance of peer-to-peer learning is being recognized more than ever. Modern training programs incorporate social elements like discussion forums, group projects, and mentorship programs to leverage the collective knowledge within organizations.

## Looking Ahead

As we continue through 2025, the organizations that embrace these trends will be better positioned to develop the skills their workforce needs to thrive. The key is to remain flexible, embrace new technologies, and always keep the learner at the center of every training initiative.

The future of corporate training is not just about keeping up with technology—it's about creating meaningful learning experiences that drive real business results.
    `,
  },
};

export default function BlogPost() {
  const params = useParams();
  const id = params.id as string;
  const post = blogPostContent[id as keyof typeof blogPostContent];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="max-w-content text-center">
            <h1 className="text-4xl font-display font-bold text-foreground mb-4">
              Post Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Button asChild>
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-section-gradient">
          <div className="max-w-content">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
            
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-8">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-foreground font-medium">{post.author}</div>
                    <div className="text-sm">{post.authorRole}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="max-w-content">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Article */}
              <article className="lg:col-span-3 prose prose-lg max-w-none">
                <div 
                  className="text-lg text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: post.content
                      .replace(/## (.*)/g, '<h2 class="text-2xl font-display font-bold text-foreground mt-12 mb-6">$1</h2>')
                      .replace(/\n\n/g, '</p><p class="mb-6">')
                  }}
                />
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-32 space-y-8">
                  {/* Share */}
                  <div className="p-6 rounded-2xl bg-muted/50">
                    <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Share2 size={18} />
                      Share this article
                    </h4>
                    <div className="flex gap-3">
                      <button className="w-10 h-10 rounded-lg bg-background flex items-center justify-center hover:bg-accent/10 transition-colors">
                        <Twitter size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-lg bg-background flex items-center justify-center hover:bg-accent/10 transition-colors">
                        <Linkedin size={18} />
                      </button>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="p-6 rounded-2xl bg-hero-pattern text-white">
                    <h4 className="font-display font-semibold mb-2">
                      Want to learn more?
                    </h4>
                    <p className="text-white/70 text-sm mb-4">
                      Contact us to discuss how we can help your organization.
                    </p>
                    <Button variant="hero" size="sm" asChild>
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
