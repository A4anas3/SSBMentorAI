import { Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Roadmap", href: "/front/roadmap" },
  { name: "Screening", href: "#screening" },
  { name: "Psychological Tests", href: "#psychological" },
  { name: "GTO Tasks", href: "#gto" },
  { name: "Personal Interview", href: "#interview" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <span className="flex items-center gap-2">
              <img className="w-6 h-6" src="/public/logo.png" alt="Logo" />

              <span className="text-2xl font-bold">
                SSB<span className="text-accent">Prep</span>
                <span className="">AI</span>
              </span>
            </span>

            <p className="mt-4 text-primary-foreground/70 text-sm leading-relaxed">
              Your comprehensive platform for SSB Interview preparation.
              Structured guidance for aspiring defence officers.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contact@ssbprep.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm">A4anaskhan3@gmail.com</span>
              </a>
              <a
                href="tel:+919870766580"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <span className="text-sm">+91 9870766580</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary-foreground/70 text-sm hover:text-secondary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Other</h4>

            <a
              href="#"
              className="flex items-center gap-2 mt-2 text-primary-foreground/70 text-sm hover:text-secondary transition-colors duration-200"
            >
              <ExternalLink size={16} />
              Current News
            </a>
            <a
              href="#"
              className="flex items-center gap-2 mt-2 text-primary-foreground/70 text-sm hover:text-secondary transition-colors duration-200"
            >
              <ExternalLink size={16} />
              Resources
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p className="text-sm text-primary-foreground/60">
              Developed by{" "}
              <span className="text-accent font-medium">Mohd Anas</span>
            </p>
            <p>
              &copy; {new Date().getFullYear()} SSB Prep. AI All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
