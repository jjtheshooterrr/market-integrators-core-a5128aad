import { motion } from "framer-motion";
import { Search, TrendingUp, Target, FileText, Link2, Users, BarChart3, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { FAQSchema } from "@/components/FAQSchema";

const ServiceSEO = () => {
  const features = [
    {
      icon: Search,
      title: "Keyword Research & Strategy",
      description: "Data-driven keyword analysis to target high-value search terms and opportunities."
    },
    {
      icon: FileText,
      title: "On-Page SEO Optimization",
      description: "Technical optimization of content, meta tags, headers, and internal linking structure."
    },
    {
      icon: Link2,
      title: "Link Building & Authority",
      description: "Strategic backlink acquisition to boost domain authority and search rankings."
    },
    {
      icon: Target,
      title: "Local SEO",
      description: "Optimize your presence for local searches and Google My Business."
    },
    {
      icon: FileText,
      title: "Content Strategy",
      description: "SEO-optimized content creation that engages users and ranks well."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive tracking and reporting of SEO performance and ROI."
    }
  ];

  const process = [
    {
      step: "01",
      title: "SEO Audit",
      description: "Comprehensive analysis of your current SEO performance and opportunities."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom SEO roadmap based on your goals and competitive landscape."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute on-page, off-page, and technical SEO optimizations."
    },
    {
      step: "04",
      title: "Content Creation",
      description: "Develop high-quality, SEO-optimized content that drives traffic."
    },
    {
      step: "05",
      title: "Monitoring & Optimization",
      description: "Continuous tracking, testing, and refinement for sustained growth."
    }
  ];

  const benefits = [
    "Increased organic traffic and visibility",
    "Higher search engine rankings",
    "Better user experience and engagement",
    "Improved conversion rates",
    "Long-term sustainable growth",
    "Enhanced brand credibility"
  ];

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy. While some improvements can be seen in 3-6 months, significant results typically take 6-12 months of consistent effort. The timeline depends on your industry competitiveness, current website state, and the scope of optimization work."
    },
    {
      question: "What's the difference between on-page and off-page SEO?",
      answer: "On-page SEO involves optimizing elements on your website like content, meta tags, headers, and internal links. Off-page SEO focuses on external factors like backlinks, social signals, and online reputation that influence your site's authority and rankings."
    },
    {
      question: "Do you guarantee first-page rankings?",
      answer: "No reputable SEO agency can guarantee specific rankings, as search algorithms are constantly evolving and controlled by search engines. However, we use proven strategies and best practices to maximize your visibility and organic traffic growth."
    },
    {
      question: "How do you measure SEO success?",
      answer: "We track multiple metrics including organic traffic growth, keyword rankings, conversion rates, bounce rates, page load times, and overall ROI. We provide detailed monthly reports showing progress across all key performance indicators."
    },
    {
      question: "Is SEO better than paid advertising?",
      answer: "SEO and paid advertising serve different purposes. SEO provides long-term, sustainable organic traffic, while paid ads deliver immediate results. The best strategy often combines both approaches for maximum visibility and ROI."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="SEO Services | Search Engine Optimization - Market Integrators"
        description="Drive sustainable organic traffic with data-driven SEO strategies. Comprehensive keyword research, on-page optimization, link building, and content strategy services."
        canonical="https://www.marketintegrators.com/services/search-engine-optimization-and-organic-growth"
        keywords="SEO services, search engine optimization, organic growth, keyword research, link building, local SEO, content strategy"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.marketintegrators.com/" },
          { name: "Services", url: "https://www.marketintegrators.com/services" },
          { name: "SEO & Organic Growth", url: "https://www.marketintegrators.com/services/search-engine-optimization-and-organic-growth" }
        ]}
      />
      <FAQSchema faqs={faqs} />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Search className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">SEO & Organic Growth</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight py-2">
              Search Engine Optimization & Organic Growth
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Dominate search results and drive sustainable organic traffic with data-driven SEO strategies
              that deliver measurable results.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="btn-text">
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
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Comprehensive SEO Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From technical optimization to content strategy, we cover all aspects of modern SEO.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Our SEO Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that drives consistent organic growth.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{item.step}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">Why Invest in SEO?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                SEO provides long-term value and sustainable growth for your business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-2 mb-6">Ready to Grow Your Organic Traffic?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's develop a custom SEO strategy that drives real results for your business.
            </p>
            <Button asChild size="lg" className="btn-text">
              <Link to="/contact-us">
                Start Your SEO Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceSEO;
