import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div>
            <a href="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold">
                <span className="text-foreground">Mit</span>{" "}
                <span className="gradient-text">Innovative</span>
              </span>
            </a>

            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Your creative partner for stunning video content, powerful
              advertisements, and digital growth solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Services", "Demo", "Testimonials", "FAQ", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Video Editing</li>
              <li>Audio Production</li>
              <li>Poster Design</li>
              <li>AI Videos</li>
              <li>Social Media Management</li>
              <li>Ads Campaigns</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+918900069224"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +91 8900069224
                </a>
              </li>
              <li>
                <a
                  href="mailto:mitinnovative02@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  mitinnovative02@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Taherpur, Nadia, West Bengal
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mit Innovative. All rights reserved.
          </p>

          <p className="text-xs text-muted-foreground">
            Developed by{" "}
            <a
              href="https://techshifttechnology.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-primary"
            >
              TechShift Technology
            </a>
          </p>
        </div>
      </div>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
};

export default Footer;
