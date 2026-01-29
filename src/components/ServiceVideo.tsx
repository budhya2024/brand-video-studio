import { useState, useRef } from "react";
import { CheckCircle, Play, Pause } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ServiceVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const features = [
    "Professional video editing with cinematic quality",
    "AI-powered content creation tools",
    "Fast turnaround time for all projects",
    "Dedicated support for your brand needs",
    "Affordable pricing for every budget",
  ];

  return (
    <section className="py-10 md:py-20 relative">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
              Transform Your <span className="gradient-text">Vision</span> Into Reality
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We bring your ideas to life with cutting-edge video production and creative services 
              that help your brand stand out in the digital landscape.
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Video */}
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <div className="relative max-w-md mx-auto lg:ml-auto lg:mr-0">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-[hsl(350,100%,60%)]/20 rounded-2xl blur-xl" />
              
              {/* Video Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 bg-card shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
                <AspectRatio ratio={4 / 5}>
                  <video
                    ref={videoRef}
                    src=""
                    className="w-full h-full object-cover"
                    onEnded={handleVideoEnd}
                    playsInline
                  />
                  
                  {/* Play/Pause Overlay Button */}
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300 group"
                  >
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-primary-foreground" />
                      ) : (
                        <Play className="w-8 h-8 text-primary-foreground ml-1" />
                      )}
                    </div>
                  </button>
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceVideo;
