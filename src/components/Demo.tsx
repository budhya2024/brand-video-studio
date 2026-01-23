import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Replace with your actual YouTube video ID
  const youtubeVideoId = "dQw4w9WgXcQ";
  const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeVideoId}`;

  return (
    <section id="demo" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">See It In Action</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Watch Our <span className="gradient-text">Demo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore a sample of our work and see how we can transform your brand
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-card shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
            {!isPlaying ? (
              <>
                {/* Thumbnail Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-card via-card/90 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    {/* Play Button */}
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="group w-24 h-24 rounded-full bg-gradient-to-br from-primary to-[hsl(350,100%,60%)] flex items-center justify-center mb-6 mx-auto transition-all duration-300 hover:scale-110 hover:shadow-[0_0_60px_hsl(24,100%,55%,0.5)] animate-pulse-glow"
                    >
                      <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                    </button>
                    <p className="text-foreground font-display text-xl font-semibold">Click to Play Demo</p>
                    <p className="text-muted-foreground text-sm mt-2">See our creative work in action</p>
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
              </>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                title="Mit Innovative Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* External Link Button */}
          <div className="flex justify-center mt-8">
            <Button
              variant="heroOutline"
              size="lg"
              asChild
            >
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5" />
                Watch on YouTube
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
