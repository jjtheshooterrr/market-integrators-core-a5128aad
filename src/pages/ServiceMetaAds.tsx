import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Share2, Target, Users, ShoppingBag, TrendingUp, Award, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ServiceMetaAds = () => {
  const services = [
    {
      icon: Share2,
      title: "Facebook Ads",
      description: "Reach billions of users with targeted Facebook advertising campaigns"
    },
    {
      icon: Users,
      title: "Instagram Ads",
      description: "Engage visual-first audiences with stunning Instagram ad content"
    },
    {
      icon: ShoppingBag,
      title: "Facebook Shop Ads",
      description: "Drive sales with shoppable posts and product catalog ads"
    },
    {
      icon: Target,
      title: "Audience Targeting",
      description: "Leverage Meta's powerful targeting options for precise reach"
    },
    {
      icon: TrendingUp,
      title: "Messenger Ads",
      description: "Start conversations and drive engagement through Messenger"
    },
    {
      icon: BarChart3,
      title: "Retargeting Campaigns",
      description: "Re-engage website visitors and warm leads with strategic retargeting"
    }
  ];

  const benefits = [
    "Access to 3+ billion active users daily",
    "Advanced audience targeting by interests and behaviors",
    "Visual storytelling with images, videos, and carousels",
    "Detailed attribution and conversion tracking",
    "Cost-effective reach compared to traditional media",
    "Build brand awareness and community",
    "Drive traffic, leads, and online sales",
    "A/B testing built into the platform"
  ];

  const process = [
    {
      step: "01",
      title: "Audience Research",
      description: "Identify and segment your ideal customers on Facebook and Instagram"
    },
    {
      step: "02",
      title: "Campaign Strategy",
      description: "Develop campaign objectives, budget allocation, and creative approach"
    },
    {
      step: "03",
      title: "Creative Development",
      description: "Design eye-catching ad creatives optimized for each platform"
    },
    {
      step: "04",
      title: "Campaign Launch",
      description: "Set up campaigns, audiences, and tracking pixels for optimal performance"
    },
    {
      step: "05",
      title: "Performance Optimization",
      description: "Monitor metrics, adjust targeting, and refine creative based on data"
    },
    {
      step: "06",
      title: "Reporting & Scaling",
      description: "Provide insights and scale winning campaigns for maximum ROI"
    }
  ];

  const metrics = [
    { label: "Average ROAS", value: "520%" },
    { label: "Cost Per Lead", value: "-42%" },
    { label: "Click-Through Rate", value: "+156%" },
    { label: "Conversion Rate", value: "+89%" }
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
              Meta Ads Management
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Reach billions of users on Facebook and Instagram with data-driven Meta advertising campaigns
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact-us">Get Free Strategy</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl opacity-90">Average performance across our Meta campaigns</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-lg opacity-90">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meta Advertising Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive Facebook and Instagram advertising solutions
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

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Meta Ads Process</h2>
            <p className="text-xl text-muted-foreground">
              Strategic approach to maximizing your Meta advertising investment
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
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Meta Advertising?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Meta Ads Advantage</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Leverage the world's most sophisticated social advertising platform
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-bold mb-2">Billion+ Users</h3>
                <p className="text-muted-foreground">Massive audience reach across Facebook and Instagram</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Smart Targeting</h3>
                <p className="text-muted-foreground">AI-powered audience discovery and optimization</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Visual Impact</h3>
                <p className="text-muted-foreground">Image and video formats that drive engagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-primary/5">
            <Share2 className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Ready to Scale Your Meta Advertising?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create high-performing Facebook and Instagram campaigns that drive real business results
            </p>
            <Button asChild size="lg">
              <Link to="/contact-us">Start Your Campaign</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceMetaAds;