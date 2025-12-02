import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Box, Sparkles, Eye, Zap, Layers, Globe, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { FAQSchema } from "@/components/FAQSchema";

const Service3DVisualEffects = () => {
  const services = [
    {
      icon: Box,
      title: "3D Modeling",
      description: "Detailed 3D models for products, characters, and environments"
    },
    {
      icon: Eye,
      title: "Product Visualization",
      description: "Photorealistic 3D renders for marketing and e-commerce"
    },
    {
      icon: Globe,
      title: "Architectural Visualization",
      description: "Stunning 3D walkthroughs and architectural renders"
    },
    {
      icon: Sparkles,
      title: "Visual Effects (VFX)",
      description: "Compositing, CGI, and special effects for video content"
    },
    {
      icon: Layers,
      title: "3D Animation",
      description: "Character rigging, animation, and motion capture"
    },
    {
      icon: Rocket,
      title: "AR/VR Experiences",
      description: "Immersive augmented and virtual reality content"
    }
  ];

  const applications = [
    "Product Demos",
    "Architectural Renders",
    "Character Animation",
    "Visual Effects",
    "Medical Visualization",
    "Industrial Design",
    "Real Estate Tours",
    "Game Assets"
  ];

  const process = [
    {
      step: "01",
      title: "Concept & Planning",
      description: "Define project scope, style, and technical requirements"
    },
    {
      step: "02",
      title: "Modeling",
      description: "Create detailed 3D models with accurate geometry"
    },
    {
      step: "03",
      title: "Texturing & Shading",
      description: "Apply materials, textures, and lighting for realism"
    },
    {
      step: "04",
      title: "Animation & Rigging",
      description: "Set up controls and animate models for motion"
    },
    {
      step: "05",
      title: "Rendering",
      description: "Generate high-quality final images or video sequences"
    },
    {
      step: "06",
      title: "Compositing & Final",
      description: "Integrate VFX elements and deliver final assets"
    }
  ];

  const software = [
    "Blender",
    "Cinema 4D",
    "Maya",
    "3ds Max",
    "Houdini",
    "Unreal Engine"
  ];

  const faqs = [
    {
      question: "What is the difference between 3D modeling and rendering?",
      answer: "Modeling is the process of creating the 3D geometry and shape of an object. Rendering is the final step where lighting, textures, and materials are calculated to create the final 2D image or video."
    },
    {
      question: "How much does a 3D product render cost?",
      answer: "Costs vary based on complexity and realism required. Simple product renders can start around $500, while complex photorealistic environments or animations can range from $2,000 to $10,000+."
    },
    {
      question: "Can you use my existing CAD files?",
      answer: "Yes, we can often import and optimize existing CAD files (STEP, IGES, etc.) to use as a base for high-quality marketing renders, saving time and ensuring accuracy."
    },
    {
      question: "How long does it take to render an animation?",
      answer: "Rendering time depends on the resolution, frame rate, and complexity of the scene. We use powerful render farms to deliver high-quality animations efficiently, but complex sequences can still take days to render."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="3D Modeling & Visual Effects Services - Market Integrators"
        description="Professional 3D modeling, rendering, and visual effects services. Product visualization, architectural renders, and cinematic VFX."
        canonical="https://www.marketintegrators.com/services/3d-visual-effects"
        keywords="3D modeling, visual effects, VFX, product visualization, architectural visualization, 3D rendering"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.marketintegrators.com/" },
          { name: "Services", url: "https://www.marketintegrators.com/services" },
          { name: "3D & Visual Effects", url: "https://www.marketintegrators.com/services/3d-visual-effects" }
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
              3D & Visual Effects
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Create stunning 3D visuals and cinematic VFX that push the boundaries of imagination
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact-us">Start Your Project</Link>
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
            <h2 className="text-4xl font-bold mb-4">Our 3D & VFX Services</h2>
            <p className="text-xl text-muted-foreground">
              Cutting-edge 3D and visual effects solutions
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

      {/* Applications Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Applications & Industries</h2>
            <p className="text-xl text-muted-foreground">
              3D solutions for diverse business needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {applications.map((app, index) => (
              <motion.div
                key={app}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all hover:scale-105">
                  <p className="font-semibold">{app}</p>
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
            <h2 className="text-4xl font-bold mb-4">Our 3D Production Process</h2>
            <p className="text-xl text-muted-foreground">
              From concept to final render
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

      {/* Software Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industry-Standard Software</h2>
            <p className="text-xl text-muted-foreground">
              Professional tools for exceptional results
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
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose 3D & VFX</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Showcase products before manufacturing",
                "Create impossible-to-film scenarios",
                "Achieve photorealistic results",
                "Cost-effective compared to physical production",
                "Unlimited creative possibilities",
                "Easily iterate and make changes",
                "Impress and engage audiences",
                "Future-proof your content"
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

      {/* Technical Specs */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">8K</div>
                <p className="text-lg font-semibold mb-1">Resolution</p>
                <p className="text-muted-foreground">Ultra-high resolution renders</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">60fps</div>
                <p className="text-lg font-semibold mb-1">Frame Rate</p>
                <p className="text-muted-foreground">Smooth, cinematic motion</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-lg font-semibold mb-1">Photorealistic</p>
                <p className="text-muted-foreground">Indistinguishable from reality</p>
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
            <h2 className="text-4xl font-bold mb-4">Ready to Create Something Extraordinary?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's push the boundaries of what's possible with cutting-edge 3D and visual effects
            </p>
            <Button asChild size="lg">
              <Link to="/contact-us">Start Your 3D Project</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Service3DVisualEffects;
