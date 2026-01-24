import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Brand Commercial",
    description: "Professional brand promotion video"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Social Media Ad",
    description: "Engaging social media advertisement"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Product Launch",
    description: "Dynamic product launch video"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Corporate Video",
    description: "Professional corporate presentation"
  }
];

const Demo = () => {
  const openYouTube = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <section id="demo" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">See It In Action</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Watch Our <span className="gradient-text">Demo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore samples of our work and see how we can transform your brand
          </p>
        </div>

        {/* Video Grid - 4 YouTube Embeds */}
        <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <div 
                key={index}
                className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-card shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] group"
                data-aos="zoom-in"
                data-aos-delay={100 + index * 100}
              >
                {/* YouTube Embed */}
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
                
                {/* Video Info Overlay on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <h3 className="font-display text-lg font-semibold text-foreground">{video.title}</h3>
                  <p className="text-muted-foreground text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10" data-aos="fade-up" data-aos-delay="200">
          <Button
            variant="heroOutline"
            size="lg"
            onClick={() => openYouTube(videos[0].id)}
          >
            <ExternalLink className="w-5 h-5" />
            Watch More on YouTube
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Demo;
