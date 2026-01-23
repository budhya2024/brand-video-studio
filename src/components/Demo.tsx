import { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);

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

        {/* Video Slider */}
        <div className="max-w-5xl mx-auto relative" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.demo-prev',
              nextEl: '.demo-next',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              }
            }}
            className="demo-swiper pb-12"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-card shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] cursor-pointer group"
                  onClick={() => openYouTube(video.id)}
                >
                  {/* YouTube Thumbnail */}
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-[hsl(350,100%,60%)] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_60px_hsl(24,100%,55%,0.5)]">
                      <ExternalLink className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground">{video.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{video.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="demo-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="demo-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8" data-aos="fade-up" data-aos-delay="200">
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
