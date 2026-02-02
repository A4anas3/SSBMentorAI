import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button.jsx";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", type: "route", to: "/" },
  { name: "Roadmap", type: "route", to: "/front/roadmap" },
  { name: "News", type: "route", to: "/news" },

  { name: "Screening Test", type: "section", id: "screening" },
  { name: "Psychological Tests", type: "section", id: "psychological" },
  { name: "GTO Tasks", type: "section", id: "gto" },
  { name: "Personal Interview", type: "section", id: "interview" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const yOffset = -80; // fixed header height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleSectionNav = (sectionId) => {
    setMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 120);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card header-shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* LOGO → HOME */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <img src="/logo.png" alt="Logo" className="w-6 h-6" />
            <span className="text-xl lg:text-2xl font-display font-bold text-primary">
              SSB<span className="text-accent">Prep</span>AI
            </span>
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <button
                  key={link.name}
                  onClick={() => navigate(link.to)}
                  className="text-sm text-primary hover:text-yellow-500"
                >
                  {link.name}
                </button>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleSectionNav(link.id)}
                  className="text-sm text-primary hover:text-yellow-500"
                >
                  {link.name}
                </button>
              ),
            )}
          </nav>

          {/* LOGIN */}
          <div className="hidden lg:block">
            <Button variant="accent" size="sm">
              Login
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE NAV */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-border">
            <nav className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) =>
                link.type === "route" ? (
                  <button
                    key={link.name}
                    onClick={() => {
                      navigate(link.to);
                      setMobileMenuOpen(false);
                    }}
                    className="text-sm text-primary text-left hover:text-yellow-500"
                  >
                    {link.name}
                  </button>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => handleSectionNav(link.id)}
                    className="text-sm text-primary text-left hover:text-yellow-500"
                  >
                    {link.name}
                  </button>
                ),
              )}

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
