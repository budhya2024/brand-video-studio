import { 
  Video, 
  Megaphone, 
  Image, 
  Sparkles, 
  Camera, 
  FileText, 
  Facebook, 
  Target, 
  TrendingUp, 
  Users, 
  MapPin 
} from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Professional Video Editing",
    description: "High-quality video editing for all your content needs",
    price: "₹699",
    unit: "per minute",
    featured: true,
  },
  {
    icon: Megaphone,
    title: "Advertising & Brand Promotion Audio",
    description: "Compelling audio ads that capture attention",
    price: "₹499",
    unit: "per minute",
    featured: true,
  },
  {
    icon: Image,
    title: "Social Media Poster & Banner",
    description: "Eye-catching designs for all platforms",
    price: "₹299",
    unit: "per design",
    featured: true,
  },
  {
    icon: Sparkles,
    title: "AI-Generated Videos",
    description: "Cutting-edge AI technology for unique video content",
    price: "₹1499",
    unit: "per minute",
  },
  {
    icon: Camera,
    title: "Model Video Shoot & Production",
    description: "Professional video shoots with complete production",
    price: "₹1999",
    unit: "per model",
  },
  {
    icon: FileText,
    title: "Script Writing & Content Planning",
    description: "Strategic content that tells your story",
    price: "₹599",
    unit: null,
  },
  {
    icon: Facebook,
    title: "Facebook Page Handling & Management",
    description: "Complete social media management solutions",
    price: "₹1499",
    unit: null,
  },
  {
    icon: Target,
    title: "Facebook Ads Campaign",
    description: "Targeted campaigns that convert",
    price: "₹999",
    unit: null,
  },
  {
    icon: TrendingUp,
    title: "Google Ads Campaign",
    description: "Maximize your reach with Google advertising",
    price: "₹499",
    unit: null,
  },
  {
    icon: Users,
    title: "Real Facebook Followers Growth",
    description: "Organic growth strategies for authentic engagement",
    price: "₹999",
    unit: null,
  },
  {
    icon: MapPin,
    title: "Google My Business Setup",
    description: "Optimize your local business presence",
    price: "₹499",
    unit: null,
  },
];


const Services = () => {
  return (
    <section id="services" className="py-10 md:py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[hsl(350,100%,60%)]/10 rounded-full blur-[80px]" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions to elevate your brand and grow your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl border transition-all duration-500 hover:scale-[1.02] ${
                service.featured
                  ? "card-gradient border-primary/30 hover:border-primary/60 hover:shadow-[0_0_40px_hsl(24,100%,55%,0.15)]"
                  : "bg-card/50 border-border hover:border-border/80 hover:bg-card"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-primary to-[hsl(350,100%,60%)] text-primary-foreground rounded-full">
                    Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                service.featured
                  ? "bg-gradient-to-br from-primary/20 to-[hsl(350,100%,60%)]/20 group-hover:from-primary/30 group-hover:to-[hsl(350,100%,60%)]/30"
                  : "bg-secondary group-hover:bg-secondary/80"
              }`}>
                <service.icon className={`w-7 h-7 ${service.featured ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`} />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>

              {/* Price */}
              {service.price && (
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold gradient-text">{service.price}</span>
                  <span className="text-sm text-muted-foreground">{service.unit}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
