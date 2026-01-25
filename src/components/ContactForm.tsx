import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-10 md:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-60 h-60 bg-[hsl(350,100%,60%)]/15 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Ready to <span className="gradient-text">Transform</span> Your
            Brand?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Partner with us to build powerful advertisements for your business
          </p>
        </div>

        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Google Map */}
          <div
            className="lg:col-span-3 relative rounded-3xl overflow-hidden border border-border h-100 lg:h-auto"
            data-aos="fade-right"
          >
            <iframe
              src="https://www.google.com/maps?q=Taherpur,+Nadia,+West+Bengal&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mit Innovative Location"
              className=" transition-all duration-500"
            />
            <div className="absolute inset-0 pointer-events-none border-4 border-primary/20 rounded-3xl" />
          </div>

          {/* Contact Info */}
          <div
            className="flex flex-col lg:col-span-2 justify-center"
            data-aos="fade-left"
          >
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Let's Create Something{" "}
                  <span className="gradient-text">Amazing</span>
                </h3>
                <p className="text-muted-foreground">
                  Get in touch with us today and let's discuss how we can help
                  elevate your brand with stunning video content and powerful
                  advertising campaigns.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:translate-x-2 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <p className="font-semibold text-foreground">
                      +91 8900069224
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/918900069224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:translate-x-2 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-semibold text-foreground">
                      Chat with us
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:mitinnovative02@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:translate-x-2 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Us</p>
                    <p className="font-semibold text-foreground">
                      mitinnovative02@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">
                      taherpur, Nadia, Pin-741159 ,West Bengal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
