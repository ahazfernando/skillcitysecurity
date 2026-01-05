import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Story", path: "/our-story" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
  ],
  services: [
    { name: "Corporate Training", path: "/services" },
    { name: "Skills Development", path: "/services" },
    { name: "Leadership Programs", path: "/services" },
    { name: "Consulting", path: "/services" },
  ],
  connect: [
    { name: "Contact Us", path: "/contact" },
    { name: "Partnerships", path: "/contact" },
    { name: "Careers", path: "/contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-hero-pattern text-white relative overflow-hidden">
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      
      <div className="max-w-content relative z-10">
        {/* Main Footer */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center font-display font-bold text-xl">
                SC
              </div>
              <div>
                <span className="font-display font-bold text-xl block">Skill City</span>
                <span className="text-white/60 text-sm">Group</span>
              </div>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Building skills, creating futures. We transform individuals and organizations through innovative training and development programs.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@skillcity.com" className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors">
                <Mail size={18} />
                <span>hello@skillcity.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors">
                <Phone size={18} />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin size={18} />
                <span>Global Offices</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Connect</h4>
            <ul className="space-y-4">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Newsletter */}
            <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10">
              <h5 className="font-semibold mb-2">Stay Updated</h5>
              <p className="text-white/60 text-sm mb-4">Get the latest insights delivered to your inbox.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent text-sm"
                />
                <button className="px-4 py-2 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Skill City Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
