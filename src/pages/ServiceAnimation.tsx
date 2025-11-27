import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Sparkles, Layers, Zap, Wand2, Tv, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { FAQSchema } from "@/components/FAQSchema";

const ServiceAnimation = () => {
  const services = [
    {
      icon: Layers,
      title: "2D Animation",
      description: "Character animation, explainer videos, and illustrated content"
    },
    {
      icon: Sparkles,
      title: "3D Animation",
      description: "Product visualization, architectural walkthroughs, and 3D characters"
    },
    {
      icon: Wand2,
      title: "Motion Graphics",
      description: "Dynamic text animations, logo reveals, and kinetic typography"
    },
    {
      icon: Tv,
      title: "Brand Animation",
      description: "Animated logos, brand elements, and identity systems"
    },
    {
      icon: Target,
      title: "Explainer Videos",
      description: "Animated videos that simplify complex concepts"
    },
    {
      icon: Rocket,
      title: "UI/UX Animation",
      description: "Interface animations, micro-interactions, and app demonstrations"
    }
  ];

  const animationTypes = [
    "Logo Animation",
    "Title Sequences",
    "Infographics",
    "Product Demos",
    "Social Media Assets",
    "Web Animations",
    "Broadcast Graphics",
    "Presentation Videos"
  ];

  const process = [
    {
      step: "01",
      title: "Concept & Storyboard",
      description: "Develop creative concepts and visual storyboards for your animation"
    },
    {
      step: "02",
      title: "Style Frames",
      description: "Design key frames that establish look, feel, and art direction"
    },
    {
      step: "03",
      title: "Asset Creation",
      description: "Build all necessary design elements, characters, and graphics"
    },
    {
      step: "04",
      title: "Animation",
      description: "Bring designs to life with fluid, professional animation"
    },
    {
      step: "05",
      title: "Sound Design",
      description: "Add music, sound effects, and voiceover for complete immersion"
    },
    {
      step: "06",
      title: "Final Delivery",
      description: "Render and deliver in all required formats and resolutions"
    }
  ];

  const tools = [
    "After Effects",
    "Cinema 4D",
    "Blender",
    "Adobe Animate",
    "Illustrator",
    "Photoshop"
  ];

  const faqs = [
    {
      question: "How much does an animation cost?",
      answer: "Animation costs vary based on style (2D vs 3D), length, and complexity. Simple motion graphics start around $1,500, while complex 3D character animation can range from $5,000 to $20,000+. We provide custom quotes based on your specific needs."
    },
    {
      question: "How long does it take to create an animation?",
      answer: "A typical 60-90 second explainer video takes 4-6 weeks. Simple logo animations can be done in a few days, while complex 3D projects may take 8-10 weeks. We'll provide a detailed timeline during the proposal phase."
    },
    {
      question: "Do you provide the voiceover and music?",
      answer: "Yes, we handle full audio production including professional voiceover casting, recording, music licensing, and sound effects."
    },
    {
      question: "What do I need to provide to get started?",
      answer: "A brief or script is helpful, but not required. We can help you develop the concept, script, and visual style from scratch. Any brand guidelines or assets (logos, fonts) you have are also useful."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Animation & Motion Graphics Services - Market Integrators"
        description="Bring your brand to life with professional animation and motion graphics. 2D/3D animation, explainer videos, and visual storytelling."
        canonical="https://www.marketintegrators.com/services/animation"
        keywords="animation services, motion graphics, 2D animation, 3D animation, explainer videos"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.marketintegrators.com/" },
          { name: "Services", url: "https://www.marketintegrators.com/services" },
          { name: "Animation", url: "https://www.marketintegrators.com/services/animation" }
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
              Animation & Motion Graphics
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Bring your ideas to life with stunning animations that captivate, engage, and inspire
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact-us">Start Animating</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">View Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Animation Services</h2>
            <p className="text-xl text-muted-foreground">
              From concept to completion, we create animations that move
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

      {/* Animation Types Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Animate</h2>
            <p className="text-xl text-muted-foreground">
              Versatile animation solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {animationTypes.map((type, index) => (
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
            <h2 className="text-4xl font-bold mb-4">Our Animation Process</h2>
            <p className="text-xl text-muted-foreground">
              A structured approach to creating exceptional animations
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

      {/* Tools Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Animation Tools</h2>
            <p className="text-xl text-muted-foreground">
              Industry-standard software for premium results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {tools.map((tool, index) => (
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
            <h2 className="text-4xl font-bold mb-12 text-center">Why Animation Works</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Increase viewer engagement by 80%+",
                "Simplify complex ideas instantly",
                "Boost brand recognition and recall",
                "Improve conversion rates significantly",
                "Stand out on social media feeds",
                "Enhance user experience and retention",
                "Communicate without language barriers",
                "Create memorable brand experiences"
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

      {/* Use Cases */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perfect For</h2>
            <p className="text-xl text-muted-foreground">
              Animation solutions for every business need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Marketing Teams</h3>
              <p className="text-muted-foreground">
                Engaging social content, product launches, and brand campaigns
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Product Companies</h3>
              <p className="text-muted-foreground">
                Explainer videos, feature demos, and app walkthroughs
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Content Creators</h3>
              <p className="text-muted-foreground">
                YouTube intros, channel branding, and video effects
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-primary/5">
            <Zap className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Ready to Bring Your Ideas to Life?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create stunning animations that tell your story and captivate your audience
            </p>
            <Button asChild size="lg">
              <Link to="/contact-us">Start Your Animation Project</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceAnimation;
