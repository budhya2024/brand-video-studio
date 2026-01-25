import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import videoCreator from "@/assets/images/video-creator.png";

const CTABanner = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-r from-background via-card to-background">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,hsl(var(--background))_0%,transparent_50%,hsl(var(--background))_100%)]" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Get the Best Video Production Service That Your Business{" "}
              <span className="gradient-text">Needs?</span>
            </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl">
              Get connected with our creative team who transform your vision into 
              stunning videos, so that your brand can get the exposure and engagement 
              it deserves.
            </p>

            <Button variant="hero" size="xl" onClick={scrollToContact}>
              <Phone className="w-5 h-5" />
              Contact Us
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-3xl blur-2xl" />
              <img
                src={videoCreator}
                alt="Professional Video Creator"
                className="relative z-10 max-h-[400px] md:max-h-[500px] w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
