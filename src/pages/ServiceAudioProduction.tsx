import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Music, Mic, Headphones, Radio, Volume2, Disc, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { FAQSchema } from "@/components/FAQSchema";

const ServiceAudioProduction = () => {
  const services = [
    {
      icon: Mic,
      title: "Podcast Production",
      description: "End-to-end podcast recording, editing, and distribution services"
    },
    {
      icon: Music,
      title: "Music Production",
      description: "Original music composition, scoring, and production for any project"
    },
    {
      icon: Radio,
      title: "Voiceover Recording",
      description: "Professional voice talent and studio recording for commercials and content"
    },
    {
      icon: Volume2,
      title: "Sound Design",
      description: "Custom sound effects, foley, and audio branding for video and media"
    },
    {
      icon: Headphones,
      title: "Audio Mixing & Mastering",
      description: "Professional mixing and mastering for broadcast-quality sound"
    },
    {
      icon: Disc,
      title: "Audiobook Production",
      description: "Complete audiobook recording, editing, and distribution services"
    }
  ];

  const audioTypes = [
    "Podcasts",
    "Radio Commercials",
    "Voiceovers",
    "Music Tracks",
    "Sound Effects",
    "Jingles",
    "Audiobooks",
    "Corporate Audio"
  ];

  const process = [
    {
      step: "01",
      title: "Pre-Production Planning",
      description: "Define goals, script, talent needs, and production schedule"
    },
    {
      step: "02",
      title: "Recording Session",
      description: "Professional studio recording with expert audio engineers"
    },
    {
      step: "03",
      title: "Editing & Cleanup",
      description: "Remove noise, optimize timing, and clean up audio tracks"
    },
    {
      step: "04",
      title: "Sound Design",
      description: "Add music, sound effects, and atmospheric elements"
    },
    {
      step: "05",
      title: "Mixing",
      description: "Balance levels, EQ, compression, and spatial positioning"
    },
    {
      step: "06",
      title: "Mastering & Delivery",
      description: "Final polish and delivery in all required formats"
    }
  ];

  const equipment = [
    "Neumann U87",
    "Pro Tools",
    "Logic Pro X",
    "Ableton Live",
    "Universal Audio",
    "Waves Plugins"
  ];

  const faqs = [
    {
      question: "How much does podcast production cost?",
      answer: "We offer podcast packages starting at $250 per episode for editing and mixing. Full production services including recording and distribution start at $500 per episode. We can customize a package based on your frequency and needs."
    },
    {
      question: "Can I record remotely?",
      answer: "Yes! We can facilitate high-quality remote recording sessions using professional tools, ensuring studio-quality sound even when guests are in different locations."
    },
    {
      question: "Do you provide voice actors?",
      answer: "We have a diverse roster of professional voice talent for commercials, narration, and character work. We can handle casting and direction to find the perfect voice for your project."
    },
    {
      question: "What is the difference between mixing and mastering?",
      answer: "Mixing involves balancing individual tracks (voice, music, SFX) to create a cohesive sound. Mastering is the final step that ensures the overall audio sounds consistent, polished, and loud enough for distribution across all platforms."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Audio Production Services - Market Integrators"
        description="Professional audio production services. Podcast production, voiceover recording, sound design, and audio mixing."
        canonical="https://www.marketintegrators.com/services/audio-production"
        keywords="audio production, podcast production, voiceover, sound design, audio mixing, mastering"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.marketintegrators.com/" },
          { name: "Services", url: "https://www.marketintegrators.com/services" },
          { name: "Audio Production", url: "https://www.marketintegrators.com/services/audio-production" }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight py-2">
              Audio Production Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Elevate your content with professional audio production that sounds as good as it looks
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact-us">Start Recording</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">Listen to Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Audio Services</h2>
            <p className="text-xl text-muted-foreground">
              Complete audio production solutions for every medium
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

      {/* Audio Types Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Produce</h2>
            <p className="text-xl text-muted-foreground">
              Professional audio for every format and platform
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {audioTypes.map((type, index) => (
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
              From concept to crystal-clear delivery
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

      {/* Equipment Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Equipment</h2>
            <p className="text-xl text-muted-foreground">
              Industry-leading gear for pristine audio quality
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {equipment.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all">
                  <p className="font-semibold text-lg">{item}</p>
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
            <h2 className="text-4xl font-bold mb-12 text-center">Why Professional Audio Matters</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "First impressions matter - quality audio builds trust",
                "Clear, crisp sound keeps audiences engaged",
                "Professional mixing eliminates distractions",
                "Broadcast-ready quality for any platform",
                "Consistent audio branding across content",
                "Compete with industry leaders in production value",
                "Accessibility for all listeners with clear audio",
                "Save time with expert post-production"
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

      {/* Studio Features */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">96kHz</div>
                <p className="text-lg font-semibold mb-1">Sample Rate</p>
                <p className="text-muted-foreground">Studio-grade recording quality</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">32-bit</div>
                <p className="text-lg font-semibold mb-1">Bit Depth</p>
                <p className="text-muted-foreground">Maximum dynamic range</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                <p className="text-lg font-semibold mb-1">Availability</p>
                <p className="text-muted-foreground">Flexible recording schedules</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perfect For</h2>
            <p className="text-xl text-muted-foreground">
              Audio solutions for every content creator
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Content Creators</h3>
              <p className="text-muted-foreground">
                Podcasters, YouTubers, and influencers who need professional audio
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Businesses</h3>
              <p className="text-muted-foreground">
                Corporate videos, training materials, and brand audio assets
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Authors & Publishers</h3>
              <p className="text-muted-foreground">
                Audiobook production and promotional audio content
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-primary/5">
            <Zap className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Ready to Sound Professional?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create audio content that sounds as good as your message deserves
            </p>
            <Button asChild size="lg">
              <Link to="/contact-us">Book Your Session</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceAudioProduction;
