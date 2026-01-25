import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Services", id: "services" },
    { name: "Demo", id: "demo" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 z-50">
              <span className="font-display text-2xl font-bold">
               <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks
                .filter((link) => link.id !== "contact")
                .map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="relative text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </button>
                ))}
              <Button variant="hero" onClick={() => scrollToSection("contact")}>
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-background">
          {/* Decorative Elements */}
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-[hsl(350,100%,60%)]/15 rounded-full blur-[100px]" />
        </div>

        {/* Menu Content */}
        <div className="relative h-full flex flex-col justify-center items-center">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xl font-display font-bold text-foreground hover:text-primary transition-colors"
                style={{
                  animation: isMobileMenuOpen
                    ? `slideInFromLeft 0.5s ease-out ${index * 0.1}s both`
                    : "none",
                }}
              >
                {link.name}
              </button>
            ))}
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("contact")}
              className="mt-4"
              style={{
                animation: isMobileMenuOpen
                  ? `slideInFromLeft 0.5s ease-out ${navLinks.length * 0.1}s both`
                  : "none",
              }}
            >
              Contact Us
            </Button>
          </nav>

          {/* Social Links at Bottom */}
          <div
            className="absolute bottom-12 flex gap-6"
            style={{
              animation: isMobileMenuOpen
                ? `slideInFromLeft 0.5s ease-out ${(navLinks.length + 1) * 0.1}s both`
                : "none",
            }}
          >
            {[
              { name: "WhatsApp", href: "https://wa.me/919876543210" },
              { name: "Facebook", href: "https://facebook.com" },
              { name: "Instagram", href: "https://instagram.com" },
              { name: "YouTube", href: "https://youtube.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
