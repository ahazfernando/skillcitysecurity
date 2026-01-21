"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "The Future of Corporate Training: Trends to Watch in 2025",
    excerpt: "Discover the emerging trends that are reshaping how organizations approach employee development and skills training.",
    category: "Industry Insights",
    author: "Sarah Johnson",
    date: "January 5, 2026",
    readTime: "8 min read",
    featured: true,
    image: "/blog/AustraliaBlog(D1V!C1).jpg",
  },
  {
    id: "2",
    title: "Building High-Performance Teams: A Leadership Guide",
    excerpt: "Learn the essential strategies for cultivating teams that consistently exceed expectations and drive organizational success.",
    category: "Leadership",
    author: "Michael Chen",
    date: "December 28, 2025",
    readTime: "6 min read",
    featured: false,
    image: "/blog/Peopled.jpg",
  },
  {
    id: "3",
    title: "Digital Transformation: More Than Just Technology",
    excerpt: "Why successful digital transformation requires a people-first approach and how to get it right.",
    category: "Digital Transformation",
    author: "Amanda Williams",
    date: "December 20, 2025",
    readTime: "7 min read",
    featured: false,
    image: "/blog/AustraliaSite.jpg",
  },
  {
    id: "4",
    title: "The ROI of Employee Training Programs",
    excerpt: "How to measure and maximize the return on investment from your organization's training initiatives.",
    category: "Business Strategy",
    author: "David Park",
    date: "December 15, 2025",
    readTime: "5 min read",
    featured: false,
    image: "/blog/a08c2cb33d02106799fbe1f797a4d390.jpg",
  },
  {
    id: "5",
    title: "Creating a Culture of Continuous Learning",
    excerpt: "Practical strategies for embedding learning into your organization's DNA and fostering growth mindsets.",
    category: "Culture",
    author: "Sarah Johnson",
    date: "December 10, 2025",
    readTime: "6 min read",
    featured: false,
    image: "/blog/Peopled.jpg",
  },
  {
    id: "6",
    title: "Remote Leadership: Managing Teams in a Hybrid World",
    excerpt: "Essential skills and strategies for leading effectively across physical and virtual workspaces.",
    category: "Leadership",
    author: "Michael Chen",
    date: "December 5, 2025",
    readTime: "7 min read",
    featured: false,
    image: "/blog/AustraliaBlog(D1V!C1).jpg",
  },
];

export default function Blog() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-20 relative overflow-hidden bg-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
            style={{ backgroundImage: 'url(/securitylogo/servicessecuritywidget.png)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
          
          <div className="max-w-content relative z-10">
            <div className="max-w-3xl">
              <span className={cn(
                "inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 transition-all duration-700",
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                Our Blog
              </span>
              <h1 className={cn(
                "text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-foreground leading-[1.1] mb-8 transition-all duration-700 delay-100",
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                <span className="italic font-medium">Insights</span>,{" "}
                <span className="italic font-medium">Perspectives</span>
                <br />
                <span className="text-accent italic font-medium">and Blogs</span>
              </h1>
              <p className={cn(
                "text-xl text-muted-foreground leading-relaxed transition-all duration-700 delay-200",
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                Thought leadership, industry insights, and practical advice 
                from our team of experts.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 bg-white">
            <div className="max-w-content">
              <Link href={`/blog/${featuredPost.id}`} className="group block">
                <div className="grid lg:grid-cols-2 gap-12 items-center p-8 rounded-3xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  {/* Image */}
                  <div className="aspect-[4/3] rounded-2xl relative overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section ref={gridRef} className="py-16 bg-white">
          <div className="max-w-content">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className={cn(
                    "group block transition-all duration-700",
                    gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <article className="h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-[16/10] rounded-2xl mb-6 relative overflow-hidden group-hover:shadow-lg transition-shadow">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-background/90 text-foreground text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 flex-1 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <User size={14} />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
