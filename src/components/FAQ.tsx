import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of video editing services do you offer?",
    answer: "We offer comprehensive video editing services including professional video editing, color grading, motion graphics, transitions, sound design, and subtitle integration. Our team specializes in creating engaging content for social media, advertisements, corporate videos, and more."
  },
  {
    question: "How long does it take to complete a video project?",
    answer: "The turnaround time depends on the complexity and length of the video. A simple 1-minute video typically takes 2-3 business days, while more complex projects with motion graphics and special effects may take 5-7 business days. We also offer rush delivery options for urgent projects."
  },
  {
    question: "What is included in your advertising packages?",
    answer: "Our advertising packages include scriptwriting, storyboard creation, professional video production, voice-over services, background music, and optimized delivery for various platforms like Facebook, Instagram, YouTube, and Google Ads. We ensure your ads are designed to maximize engagement and conversions."
  },
  {
    question: "Do you offer revisions on completed projects?",
    answer: "Yes! We offer up to 3 rounds of revisions included in all our packages. We believe in working closely with our clients to ensure complete satisfaction with the final deliverable. Additional revisions can be arranged at a nominal fee."
  },
  {
    question: "Can you help with social media management?",
    answer: "Absolutely! We provide comprehensive social media management services including Facebook page handling, content planning, post scheduling, engagement management, and growth strategies. We also run targeted Facebook and Google Ads campaigns to maximize your reach."
  },
  {
    question: "What file formats do you deliver?",
    answer: "We deliver videos in multiple formats optimized for different platforms. Standard deliverables include MP4 (H.264), MOV, and platform-specific formats for Instagram Reels, YouTube Shorts, TikTok, and more. We can also provide RAW project files upon request."
  },
  {
    question: "How do I get started with a project?",
    answer: "Getting started is easy! Simply contact us via WhatsApp or phone, share your project requirements, and we'll provide a detailed quote. Once approved, we begin work immediately. You can track progress and provide feedback throughout the creative process."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-10 md:py-20  relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Got Questions?</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-display font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
