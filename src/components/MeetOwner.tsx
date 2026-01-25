import { Video, Award, Users, Sparkles } from "lucide-react";
import ownerImage from "@/assets/images/founderamit.png";

const MeetOwner = () => {
  const highlights = [
    { icon: Video, label: "5600+ Videos Delivered" },
    { icon: Users, label: "1000+ Happy Clients" },
    { icon: Award, label: "8+ Years Experience" },
    { icon: Sparkles, label: "Creative Excellence" },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-[hsl(350,100%,60%)]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            Meet the <span className="gradient-text">Owner</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Owner Image */}
          <div className="flex justify-center lg:justify-start" data-aos="fade-right">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary via-[hsl(350,100%,60%)] to-primary rounded-3xl opacity-20 blur-sm" />
              <div className="absolute -inset-2 bg-gradient-to-br from-primary to-[hsl(350,100%,60%)] rounded-2xl opacity-30" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/30">
                <img
                  src={ownerImage}
                  alt="Amit Karmakar - Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg">
                <p className="text-primary font-bold text-lg">8+ Years</p>
                <p className="text-muted-foreground text-xs">In Industry</p>
              </div>
            </div>
          </div>

          {/* Owner Details */}
          <div data-aos="fade-left">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Amit Karmakar
            </h3>
            <p className="text-primary font-semibold text-lg mb-6">Founder & CEO, Mit Innovative</p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A passionate video production expert with over 8 years of experience in creating 
              compelling visual content. Amit founded Mit Innovative with a vision to help businesses 
              tell their stories through powerful video marketing and digital advertising.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Under his leadership, Mit Innovative has delivered 5600+ successful projects 
              for clients across diverse industries. His expertise spans professional video editing, 
              brand promotion, social media marketing, and cutting-edge AI-generated content.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOwner;
