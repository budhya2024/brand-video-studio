import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const videos = [
  "x_UJRgIYu8A",
  "E_bm1oxxtdI",
  "w3XfMDxTEPk",
  "tz9pycho190"
];

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@yourchannelname"; 

const Demo = () => {
  return (
    <section id="demo" className="py-10 md:py-20 relative">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            See It In Action
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Watch Our <span className="gradient-text">Demo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore samples of our video production work
          </p>
        </div>

        {/* Video Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((id, index) => (
              <div
                key={index}
                className="aspect-video rounded-2xl overflow-hidden border border-border bg-card shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            variant="heroOutline"
            onClick={() => window.open("https://www.youtube.com/@Mitinnovative", "_blank")}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Visit Our YouTube Channel
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Demo;
