import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Users, TrendingUp, MessageCircle, Target, BarChart3, Zap, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { FAQSchema } from "@/components/FAQSchema";

const ServiceSocialMedia = () => {
  const features = [
    {
      icon: Users,
      title: "Community Management",
      description: "Build and nurture engaged communities across all social platforms"
    },
    {
      icon: MessageCircle,
      title: "Content Creation",
      description: "Compelling content that resonates with your target audience"
    },
    {
      icon: Target,
      title: "Social Advertising",
      description: "Targeted paid campaigns to reach your ideal customers"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your social strategy"
    },
    {
      icon: TrendingUp,
      title: "Influencer Marketing",
      description: "Strategic partnerships with influential voices in your industry"
    },
    {
      icon: Heart,
      title: "Brand Advocacy",
      description: "Turn customers into brand ambassadors and advocates"
    }
  ];

  const platforms = [
    "Facebook",
    "Instagram",
    "LinkedIn",
    "TikTok",
    "YouTube",
    "Snapchat"
  ];

  const process = [
    {
      step: "01",
      title: "Social Audit",
      description: "Analyze your current social presence and competitor landscape"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a comprehensive social media strategy aligned with your goals"
    },
    {
      step: "03",
      title: "Content Planning",
      description: "Develop a content calendar with engaging posts and campaigns"
    },
    {
      step: "04",
      title: "Execution & Management",
      description: "Publish content, engage with followers, and manage communities"
    },
    {
      step: "05",
      title: "Optimization",
      description: "Continuously analyze and refine your social media performance"
    }
  ];

  const faqs = [
    {
      question: "Which social media platforms should my business be on?",
      answer: "It depends on your target audience and industry. We analyze where your customers are most active and recommend a tailored mix of platforms to maximize your reach and engagement."
    },
    {
      question: "How often should I post on social media?",
      answer: "Posting frequency varies by platform and audience. Generally, consistency is key. We develop a content calendar that ensures regular engagement without overwhelming your audience."
    },
    {
      question: "Can you handle customer service on social media?",
      answer: "Yes, our community management services include monitoring comments and messages, responding to inquiries, and escalating issues to your team when necessary."
    },
    {
      question: "Do you create the content or do we provide it?",
      answer: "We can do both! We offer full-service content creation including graphics, copy, and video, or we can work with assets you provide to create polished social posts."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Social Media Marketing Services - Market Integrators"
        description="Build your brand with expert social media marketing. Content creation, community management, and paid social campaigns."
        canonical="https://www.marketintegrators.com/services/social-media"
        keywords="social media marketing, social media management, content creation, social advertising"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.marketintegrators.com/" },
          { name: "Services", url: "https://www.marketintegrators.com/services" },
          { name: "Social Media Marketing", url: "https://www.marketintegrators.com/services/social-media" }
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
              Social Media Marketing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build meaningful connections and drive real business results through strategic social media marketing
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact-us">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Social Media Services</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to succeed on social media
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platforms We Master</h2>
            <p className="text-xl text-muted-foreground">
              Expertise across all major social media channels
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all hover:scale-105">
                  <p className="font-semibold">{platform}</p>
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
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology for social media success
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
            <h2 className="text-4xl font-bold mb-12 text-center">Why Social Media Matters</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Increase brand awareness and visibility",
                "Build loyal customer communities",
                "Drive website traffic and conversions",
                "Generate leads and sales",
                "Improve customer service and satisfaction",
                "Gain valuable market insights",
                "Stay competitive in your industry",
                "Amplify your content reach"
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-primary/5">
            <Zap className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Ready to Elevate Your Social Presence?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create a social media strategy that drives real results for your business
            </p>
            <Button asChild size="lg">
              <Link to="/contact-us">Start Your Social Media Journey</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceSocialMedia;
