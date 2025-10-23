import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Edit3, Palette, Music, Sparkles, Film, Layers, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ServicePostProduction = () => {
  const services = [
    {
      icon: Edit3,
      title: "Video Editing",
      description: "Professional cutting, trimming, and sequencing for compelling narratives"
    },
    {
      icon: Palette,
      title: "Color Grading",
      description: "Expert color correction and grading for cinematic look and feel"
    },
    {
      icon: Music,
      title: "Audio Post-Production",
      description: "Sound design, mixing, and mastering for crystal-clear audio"
    },
    {
      icon: Sparkles,
      title: "Visual Effects (VFX)",
      description: "CGI, compositing, and special effects that enhance your story"
    },
    {
      icon: Layers,
      title: "Motion Graphics",
      description: "Animated graphics, titles, and lower thirds that elevate your content"
    },
    {
      icon: Film,
      title: "Final Deliverables",
      description: "Multiple format exports optimized for all platforms and devices"
    }
  ];

  const editingStyles = [
    "Corporate Videos",
    "Commercials",
    "Music Videos",
    "Documentaries",
    "Social Media Content",
    "Wedding Films",
    "Event Highlights",
    "YouTube Videos"
  ];

  const process = [
    {
      step: "01",
      title: "Asset Review",
      description: "Organize and review all raw footage, audio, and assets"
    },
    {
      step: "02",
      title: "Assembly Edit",
      description: "Create initial rough cut following script or storyline"
    },
    {
      step: "03",
      title: "Fine Cut",
      description: "Refine pacing, transitions, and storytelling flow"
    },
    {
      step: "04",
      title: "Color & Audio",
      description: "Apply color grading and complete audio post-production"
    },
    {
      step: "05",
      title: "VFX & Graphics",
      description: "Add visual effects, motion graphics, and titles"
    },
    {
      step: "06",
      title: "Final Review & Export",
      description: "Client revisions and delivery in all required formats"
    }
  ];

  const software = [
    "Adobe Premiere Pro",
    "DaVinci Resolve",
    "Final Cut Pro",
    "After Effects",
    "Avid Media Composer",
    "Pro Tools"
  ];

  return (
    <div className="min-h-screen bg-background">
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
              Post-Production & Editing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform raw footage into polished, professional content that captivates your audience
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact-us">Start Editing</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">See Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Post-Production Services</h2>
            <p className="text-xl text-muted-foreground">
              Complete post-production solutions for any project
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

      {/* Editing Styles Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Content Types We Edit</h2>
            <p className="text-xl text-muted-foreground">
              Expert editing for every format and style
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {editingStyles.map((style, index) => (
              <motion.div
                key={style}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all hover:scale-105">
                  <p className="font-semibold">{style}</p>
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
            <h2 className="text-4xl font-bold mb-4">Our Editing Process</h2>
            <p className="text-xl text-muted-foreground">
              From raw footage to final masterpiece
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

      {/* Software & Tools */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industry-Leading Tools</h2>
            <p className="text-xl text-muted-foreground">
              We use the best software for professional results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {software.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all">
                  <p className="font-semibold text-lg">{tool}</p>
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
            <h2 className="text-4xl font-bold mb-12 text-center">Why Professional Editing Matters</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Transform raw footage into compelling stories",
                "Ensure consistent brand identity across content",
                "Maximize viewer engagement and retention",
                "Professional color and audio quality",
                "Save time with efficient workflows",
                "Multiple format outputs for any platform",
                "Unlimited revisions until perfect",
                "Fast turnaround times"
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

      {/* Capabilities Highlight */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">4K+</div>
                <p className="text-lg font-semibold mb-1">Ultra HD Editing</p>
                <p className="text-muted-foreground">Up to 8K resolution support</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">48hr</div>
                <p className="text-lg font-semibold mb-1">Rush Delivery</p>
                <p className="text-muted-foreground">Fast turnaround available</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">∞</div>
                <p className="text-lg font-semibold mb-1">Revisions</p>
                <p className="text-muted-foreground">Until you're 100% satisfied</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-primary/5">
            <Zap className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Footage?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our expert editors bring your vision to life with professional post-production services
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

export default ServicePostProduction;
