import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    company: "TechStart India",
    content:
      "Mit Innovative transformed our brand completely! Their video editing skills are exceptional, and the promotional videos they created helped us increase our sales by 40%. Highly recommended!",
    rating: 5,
    avatar: "RS",
  },
  {
    name: "Priya Patel",
    role: "Marketing Manager",
    company: "Fashion Hub",
    content:
      "Working with Mit Innovative was a game-changer for our social media presence. Their poster designs and video content are always on point. They truly understand modern marketing.",
    rating: 5,
    avatar: "PP",
  },
  {
    name: "Amit Kumar",
    role: "Startup Founder",
    company: "FoodieApp",
    content:
      "The AI-generated videos they created for our app launch were incredible! Fast delivery, great communication, and the quality exceeded our expectations.",
    rating: 5,
    avatar: "AK",
  },
  {
    name: "Sneha Reddy",
    role: "Content Creator",
    company: "Lifestyle Blogger",
    content:
      "Best video editing service I've ever used! They understand exactly what content creators need. The turnaround time is amazing.",
    rating: 5,
    avatar: "SR",
  },
  {
    name: "Vikram Singh",
    role: "Restaurant Owner",
    company: "Spice Garden",
    content:
      "Their Google Ads campaign brought us 3x more customers within the first month! Professional team with excellent results.",
    rating: 5,
    avatar: "VS",
  },
  {
    name: "Anita Desai",
    role: "E-commerce Director",
    company: "ShopEasy",
    content:
      "From product videos to social media management, Mit Innovative handles everything perfectly. Our engagement increased by 200%.",
    rating: 5,
    avatar: "AD",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-10 md:py-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[hsl(350,100%,60%)]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from our satisfied clients
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className="max-w-6xl mx-auto relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-card border border-border rounded-2xl p-6 h-full min-h-[320px] flex flex-col hover:border-primary/30 transition-all duration-300">
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-primary fill-primary"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground flex-grow mb-6 leading-relaxed line-clamp-4">
                    “{item.content}”
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[hsl(350,100%,60%)] flex items-center justify-center text-primary-foreground font-bold">
                      {item.avatar}
                    </div>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-6 sm:mt-0">
            <button
              className="
                testimonial-prev
                w-10 h-10 md:w-12 md:h-12
                rounded-full bg-card border border-border
                flex items-center justify-center
                hover:bg-primary hover:text-primary-foreground
                transition-all

                sm:absolute sm:left-0 sm:top-1/2
                sm:-translate-y-1/2 sm:-translate-x-14
              "
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              className="
                testimonial-next
                w-10 h-10 md:w-12 md:h-12
                rounded-full bg-card border border-border
                flex items-center justify-center
                hover:bg-primary hover:text-primary-foreground
                transition-all

                sm:absolute sm:right-0 sm:top-1/2
                sm:-translate-y-1/2 sm:translate-x-14
              "
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
