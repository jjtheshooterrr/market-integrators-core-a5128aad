import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Video, Film, Camera, Mic, Edit3, Play, Award } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { FAQSchema } from "@/components/FAQSchema";

const ServiceVideoProduction = () => {
  const services = [
    {
      icon: Video,
      title: "Corporate Videos",
      description: "Professional videos that showcase your brand story and values"
    },
    {
      icon: Film,
      title: "Commercial Production",
      description: "High-impact commercials that drive conversions and sales"
    },
    {
      icon: Camera,
      title: "Social Media Content",
      description: "Engaging short-form videos optimized for social platforms"
    },
    {
      icon: Mic,
      title: "Podcast Production",
      description: "Full-service podcast recording, editing, and distribution"
    },
    {
      icon: Edit3,
      title: "Post-Production",
      description: "Expert editing, color grading, and visual effects"
    },
    {
      icon: Play,
      title: "Explainer Videos",
      description: "Clear, concise videos that explain complex products or services"
    }
  ];

  const videoTypes = [
    "Brand Stories",
    "Product Demos",
    "Customer Testimonials",
    "Event Coverage",
    "Training Videos",
    "Social Media Ads",
    "Documentary Style",
    "Animation & Motion Graphics"
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Understand your goals, audience, and key messaging"
    },
    {
      step: "02",
      title: "Creative Development",
      description: "Develop concepts, scripts, and storyboards"
    },
    {
      step: "03",
      title: "Pre-Production",
      description: "Plan shoot logistics, casting, locations, and equipment"
    },
    {
      step: "04",
      title: "Production",
      description: "Professional filming with experienced crew and top-tier equipment"
    },
    {
      step: "05",
      title: "Post-Production",
      description: "Edit, color grade, add effects, music, and finalize deliverables"
    },
    {
      step: "06",
      title: "Distribution",
      description: "Optimize and distribute across your chosen platforms"
    }
  ];

  const faqs = [
    {
      question: "How much does a video cost?",
      answer: "Video production costs vary widely based on complexity, length, location, and requirements. We offer packages starting from $2,500 for simple social content to $25,000+ for high-end commercials. We'll provide a custom quote based on your specific needs."
    },
    {
      question: "How long does the production process take?",
      answer: "A typical project takes 4-8 weeks from concept to final delivery. Simple projects can be completed faster, while complex productions may take longer. We provide a detailed timeline at the start of every project."
    },
    {
      question: "Do you provide scripts and storyboards?",
      answer: "Yes! Our creative team can handle everything from concept development and scriptwriting to storyboarding and shot lists, ensuring your vision is clearly planned before filming begins."
    },
    {
      question: "Can you travel for shoots?",
      answer: "Absolutely. While we are based locally, our team is available to travel domestically and internationally for productions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Video Production Services - Market Integrators"
        description="Professional video production services. Corporate videos, commercials, social media content, and post-production."
        canonical="https://www.marketintegrators.com/services/video-production"
        keywords="video production, corporate video, commercial production, video marketing, video editing"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.marketintegrators.com/" },
          { name: "Services", url: "https://www.marketintegrators.com/services" },
          { name: "Video Production", url: "https://www.marketintegrators.com/services/video-production" }
        ]}
      />
      <FAQSchema faqs={faqs} />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Video Production Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Bring your story to life with cinematic video production that captivates and converts
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact-us">Start Your Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Video Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive video solutions for every need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Types Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Types of Videos We Create</h2>
            <p className="text-xl text-muted-foreground">
              From concept to completion, we produce videos that resonate
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {videoTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all hover:scale-105">
                  <p className="font-semibold">{type}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Production Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven approach to creating exceptional video content
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl font-bold text-primary/20">{item.step}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Video Content Works</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Increase engagement by up to 1200%",
                "Boost conversion rates significantly",
                "Improve SEO and search rankings",
                "Build trust with your audience",
                "Simplify complex information",
                "Increase social media reach",
                "Enhance brand recognition",
                "Drive more website traffic"
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Quality */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Professional Quality, Every Time</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We use industry-leading equipment and techniques to ensure your videos look and sound incredible.
              Our experienced team combines technical expertise with creative vision to deliver videos that exceed expectations.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-bold mb-2">4K+ Resolution</h3>
                <p className="text-muted-foreground">Crystal clear footage that looks amazing on any screen</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Pro Audio</h3>
                <p className="text-muted-foreground">Broadcast-quality sound recording and mixing</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Expert Team</h3>
                <p className="text-muted-foreground">Experienced directors, cinematographers, and editors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-primary/5">
            <Film className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Ready to Create Amazing Video Content?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and bring it to life with professional video production
            </p>
            <Button asChild size="lg">
              <Link to="/contact-us">Get Started Today</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceVideoProduction;
