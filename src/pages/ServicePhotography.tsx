import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Camera, Image, Package, Users, Palette, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ServicePhotography = () => {
  const services = [
    {
      icon: Package,
      title: "Product Photography",
      description: "Stunning product shots that drive sales and conversions"
    },
    {
      icon: Users,
      title: "Corporate Photography",
      description: "Professional headshots and team photos for your business"
    },
    {
      icon: Camera,
      title: "Commercial Shoots",
      description: "High-impact commercial photography for marketing campaigns"
    },
    {
      icon: Palette,
      title: "Lifestyle Photography",
      description: "Authentic lifestyle images that connect with your audience"
    },
    {
      icon: Image,
      title: "E-commerce Photography",
      description: "Optimized product images for online stores and marketplaces"
    },
    {
      icon: Zap,
      title: "Event Photography",
      description: "Capture important moments at corporate events and launches"
    }
  ];

  const photoTypes = [
    "Product Shots",
    "White Background",
    "Lifestyle Scenes",
    "360° Photography",
    "Detail Close-ups",
    "Team Headshots",
    "Packaging Photos",
    "Action Shots"
  ];

  const process = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "Understand your brand, products, and photography needs"
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Create mood boards, lighting plans, and shot lists"
    },
    {
      step: "03",
      title: "Studio Setup",
      description: "Prepare professional studio with optimal lighting and backdrops"
    },
    {
      step: "04",
      title: "Photography Session",
      description: "Capture high-quality images with professional equipment"
    },
    {
      step: "05",
      title: "Post-Processing",
      description: "Edit, retouch, and optimize images for your platforms"
    },
    {
      step: "06",
      title: "Delivery & Support",
      description: "Provide final files in multiple formats with usage rights"
    }
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
              Photography & Product Shoots
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional photography that showcases your products and brand in the best light
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact-us">Book a Shoot</Link>
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
            <h2 className="text-4xl font-bold mb-4">Our Photography Services</h2>
            <p className="text-xl text-muted-foreground">
              Complete photography solutions for every business need
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

      {/* Photo Types Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Types of Photography We Specialize In</h2>
            <p className="text-xl text-muted-foreground">
              From product shots to corporate portraits, we deliver excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {photoTypes.map((type, index) => (
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
            <h2 className="text-4xl font-bold mb-4">Our Photography Process</h2>
            <p className="text-xl text-muted-foreground">
              A streamlined approach to creating stunning visual content
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
            <h2 className="text-4xl font-bold mb-12 text-center">Why Professional Photography Matters</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Increase product sales by up to 94%",
                "Build trust and credibility instantly",
                "Stand out from competitors",
                "Improve brand perception and value",
                "Boost engagement on all platforms",
                "Reduce return rates with accurate images",
                "Enhance your marketing materials",
                "Create a cohesive brand identity"
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
            <h2 className="text-4xl font-bold mb-4">Studio-Quality Results</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We use professional-grade cameras, lighting, and editing software to ensure your images 
              are crisp, vibrant, and ready for any platform—from web to print.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-bold mb-2">High Resolution</h3>
                <p className="text-muted-foreground">Crystal clear images perfect for print and digital</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Expert Retouching</h3>
                <p className="text-muted-foreground">Professional editing and color correction</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Fast Turnaround</h3>
                <p className="text-muted-foreground">Quick delivery without compromising quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-primary/5">
            <Camera className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Ready to Showcase Your Products?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create stunning photography that elevates your brand and drives results
            </p>
            <Button asChild size="lg">
              <Link to="/contact-us">Schedule Your Shoot</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePhotography;