import { Button } from "@/components/ui/button";
import { Play, Phone, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[hsl(350,100%,60%)]/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8" data-aos="fade-down">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Professional Video Production</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6" data-aos="fade-up" data-aos-delay="100">
            <span className="text-foreground">Mit</span>{" "}
            <span className="gradient-text">Innovative</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4" data-aos="fade-up" data-aos-delay="200">
            Transform Your Vision Into Powerful Content
          </p>

          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="300">
            Partner with us to build powerful advertisements for your business. 
            Professional video editing, advertising, and digital marketing solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              <Phone className="w-5 h-5" />
              Contact Us
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToDemo}>
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "100+", label: "Happy Clients" },
              { value: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center" data-aos="zoom-in" data-aos-delay={500 + index * 100}>
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator - Right Side */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2">
          <div className="w-[2px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" />
          <div className="animate-bounce">
            <ArrowDown className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xs text-muted-foreground writing-mode-vertical rotate-180" style={{ writingMode: 'vertical-rl' }}>
            Scroll Down
          </span>
          <div className="w-[2px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
