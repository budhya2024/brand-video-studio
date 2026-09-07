import {
  Calendar,
  Wallet,
  Percent,
  Calculator,
  Handshake,
  PenTool,
  Video,
  ArrowRight,
  Bot,
  Headphones,
  Mic,
  Users,
  Zap,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FacebookAdsPricing = () => {
  const WA_NUMBER = "918900069224";

  const handleWhatsAppBooking = (packageName: string, duration: string) => {
    const msg = `Hello MIT INNOVATIVE, I am interested in the Facebook Ads Marketing ${packageName.toUpperCase()} – ${duration} package. Please provide more details.`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const handleCustomInquiry = (serviceTitle: string) => {
    const msg = `Hello MIT INNOVATIVE, I am interested in ${serviceTitle}. Please share more details and how to get started.`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const pricingPlans = [
    {
      package: "BASIC",
      duration: "3 Days",
      price: "1,399",
      featured: false,
      details: [
        { label: "Ad Budget", value: "₹100/day", icon: Wallet },
        { label: "GST", value: "18%", icon: Percent },
        { label: "Ad Total", value: "₹354", icon: Calculator, highlight: true },
        { label: "Service Charge", value: "₹299", icon: Handshake },
        { label: "Poster Design", value: "₹249", icon: PenTool },
        { label: "Video Editing", value: "₹499", icon: Video },
      ],
    },
    {
      package: "BASIC",
      duration: "5 Days",
      price: "1,699",
      featured: false,
      details: [
        { label: "Ad Budget", value: "₹100/day", icon: Wallet },
        { label: "GST", value: "18%", icon: Percent },
        { label: "Ad Total", value: "₹590", icon: Calculator, highlight: true },
        { label: "Service Charge", value: "₹399", icon: Handshake },
        { label: "Poster Design", value: "₹249", icon: PenTool },
        { label: "Video Editing", value: "₹499", icon: Video },
      ],
    },
    {
      package: "BASIC",
      duration: "7 Days",
      price: "1,999",
      featured: false,
      details: [
        { label: "Ad Budget", value: "₹100/day", icon: Wallet },
        { label: "GST", value: "18%", icon: Percent },
        { label: "Ad Total", value: "₹826", icon: Calculator, highlight: true },
        { label: "Service Charge", value: "₹449", icon: Handshake },
        { label: "Poster Design", value: "₹249", icon: PenTool },
        { label: "Video Editing", value: "₹499", icon: Video },
      ],
    },
    {
      package: "STANDARD",
      duration: "10 Days",
      price: "2,399",
      featured: false,
      details: [
        { label: "Ad Budget", value: "₹100/day", icon: Wallet },
        { label: "GST", value: "18%", icon: Percent },
        { label: "Ad Total", value: "₹1,180", icon: Calculator, highlight: true },
        { label: "Service Charge", value: "₹499", icon: Handshake },
        { label: "Poster Design", value: "₹249", icon: PenTool },
        { label: "Video Editing", value: "₹499", icon: Video },
      ],
    },
    {
      package: "PRO",
      duration: "15 Days",
      price: "3,199",
      featured: false,
      details: [
        { label: "Ad Budget", value: "₹100/day", icon: Wallet },
        { label: "GST", value: "18%", icon: Percent },
        { label: "Ad Total", value: "₹1,770", icon: Calculator, highlight: true },
        { label: "Service Charge", value: "₹699", icon: Handshake },
        { label: "Poster Design", value: "₹249", icon: PenTool },
        { label: "Video Editing", value: "₹499", icon: Video },
      ],
    },
    {
      package: "MONTHLY",
      duration: "30 Days",
      price: "5,299",
      featured: true,
      details: [
        { label: "Ad Budget", value: "₹100/day", icon: Wallet },
        { label: "GST", value: "18%", icon: Percent },
        { label: "Ad Total", value: "₹3,540", icon: Calculator, highlight: true },
        { label: "Service Charge", value: "₹999", icon: Handshake },
        { label: "Poster Design", value: "₹249", icon: PenTool },
        { label: "Video Editing", value: "₹499", icon: Video },
      ],
    },
  ];

  const audioAds = [
    {
      type: "Single Voice",
      duration: "1 min 50 sec",
      price: "₹149",
      unit: "Rs",
      icon: Mic,
    },
    {
      type: "Single Voice",
      duration: "2 min 50 sec",
      price: "₹299",
      unit: "Rs",
      icon: Mic,
    },
    {
      type: "Single Voice",
      duration: "3 min 50 sec",
      price: "₹349",
      unit: "Rs",
      icon: Mic,
    },
    {
      type: "Male + Female (Duet)",
      duration: "1–3 min",
      price: "₹349",
      unit: "Rs",
      icon: Users,
    },
    {
      type: "Male + Female (Duet)",
      duration: "1–4 min",
      price: "₹449",
      unit: "Rs",
      icon: Users,
      fullWidth: true,
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "50% Advance",
      desc: "Order confirmation & work commencement",
    },
    {
      step: "2",
      title: "Script Creation",
      desc: "Based on the information provided by you",
    },
    {
      step: "3",
      title: "Voice Recording & Mixing",
      desc: "Once the script is finalized & approved",
    },
    {
      step: "4",
      title: "Fast Delivery",
      desc: "Delivered within just 24 hours",
    },
  ];

  return (
    <section id="pricing" className="relative">
      {/* Background Effects matching Services section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-[hsl(350,100%,60%)]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            High ROI Campaigns
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Facebook Ads Marketing <span className="gradient-text">– Total Cost</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the package that fits your business goals. All plans include ad budget, service charge, poster design &amp; video editing.
          </p>


        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`group relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] border ${plan.featured
                ? "card-gradient border-primary/40 hover:border-primary/70 hover:shadow-[0_0_40px_hsl(24,100%,55%,0.15)]"
                : "bg-card/50 border-border hover:border-border/80 hover:bg-card"
                }`}
              data-aos="fade-up"
              data-aos-delay={index * 60}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-primary to-[hsl(350,100%,60%)] text-primary-foreground rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="text-center pb-5 mb-5 border-b border-border/60">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
                    {plan.package}
                  </span>
                  <div className="flex items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{plan.duration}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-lg font-semibold text-muted-foreground">₹</span>
                    <span className="text-4xl sm:text-5xl font-extrabold gradient-text tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-muted-foreground ml-1">total</span>
                  </div>
                </div>

                {/* Breakdown List */}
                <ul className="space-y-3 mb-6">
                  {plan.details.map((detail, dIndex) => {
                    const IconComponent = detail.icon;
                    return (
                      <li
                        key={dIndex}
                        className="flex items-center justify-between text-sm py-1 border-b border-border/30 last:border-none"
                      >
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <IconComponent className="w-4 h-4 text-primary/80 shrink-0" />
                          <span>{detail.label}</span>
                        </span>
                        <span
                          className={`font-semibold ${detail.highlight ? "gradient-text" : "text-foreground"
                            }`}
                        >
                          {detail.value}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                {/* Total Summary */}
                <div className="flex items-center justify-between pt-3 pb-4 border-t border-border/60">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Final Total
                  </span>
                  <span className="text-xl font-extrabold gradient-text">
                    ₹{plan.price}
                  </span>
                </div>

                {/* Action Button */}
                <Button
                  onClick={() => handleWhatsAppBooking(plan.package, plan.duration)}
                  variant={plan.featured ? "hero" : "heroOutline"}
                  className="w-full py-5 font-semibold text-sm rounded-xl group cursor-pointer"
                >
                  <span>Get This Plan</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>




      </div>
    </section>
  );
};

export default FacebookAdsPricing;
