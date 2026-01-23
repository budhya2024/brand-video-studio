import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-60 h-60 bg-[hsl(350,100%,60%)]/15 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative p-8 md:p-12 rounded-3xl border border-primary/30 card-gradient overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Ready to <span className="gradient-text">Transform</span> Your Brand?
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Create impactful ads for your brand. Partner with us to build powerful 
                advertisements that drive results.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button variant="hero" size="xl" asChild>
                  <a href="tel:+919876543210">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>hello@mitinnovative.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Text */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              <span>Click the link above to explore a demo and get started today!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
