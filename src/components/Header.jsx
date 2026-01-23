import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button.jsx";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Roadmap", href: "/front/roadmap" },
  { name: "News", href: "#news" },
  { name: "Screening Test", href: "#screening" },
  { name: "Psychological Tests", href: "#psychological" },
  { name: "GTO Tasks", href: "#gto" },
  { name: "Personal Interview", href: "#interview" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card header-shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img className="w-6 h-6" src="/public/logo.png" alt="Logo" />
            <span className="text-xl lg:text-2xl font-display font-bold text-primary">
              SSB
              <span className="text-accent">Prep</span>
              <span className="text-primary">AI</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="ext-sm text-primary transition-colors duration-200 hover:text-yellow-500"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Login Button - Desktop */}
          <div className="hidden lg:block">
            <Button variant="accent" size="sm">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-border">
            <nav className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="ext-sm text-primary transition-colors duration-200 hover:text-yellow-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="accent" className="mt-4 w-full">
                Login
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
