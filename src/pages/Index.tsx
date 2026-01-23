import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Demo from "@/components/Demo";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SocialIcons from "@/components/SocialIcons";

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false, // Animate multiple times
      mirror: true, // Animate on scroll up too
      offset: 100,
    });

    // Refresh AOS on scroll for better performance
    window.addEventListener('scroll', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('scroll', () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SocialIcons />
      <Hero />
      <Services />
      <Demo />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
