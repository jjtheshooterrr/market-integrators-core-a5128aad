import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Target, TrendingUp, MousePointerClick, BarChart3, Zap, Award, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { FAQSchema } from "@/components/FAQSchema";

const ServiceGoogleAds = () => {
  const services = [
    {
      icon: Target,
      title: "Search Ads",
      description: "Capture high-intent users actively searching for your products or services"
    },
    {
      icon: MousePointerClick,
      title: "Display Ads",
      description: "Build brand awareness with visually engaging ads across millions of websites"
    },
    {
      icon: TrendingUp,
      title: "Shopping Ads",
      description: "Showcase products directly in search results with prices and images"
    },
    {
      icon: BarChart3,
      title: "Performance Max",
      description: "AI-powered campaigns that optimize across all Google channels"
    },
    {
      icon: Zap,
      title: "Video Ads (YouTube)",
      description: "Reach audiences with compelling video content on YouTube"
    },
    {
      icon: DollarSign,
      title: "Remarketing",
      description: "Re-engage visitors who showed interest but didn't convert"
    }
  ];

  const benefits = [
    "Instant visibility on Google search results",
    "Pay only when people click your ads",
    "Target by location, demographics, and interests",
    "Measurable ROI with detailed analytics",
    "Scale campaigns up or down based on performance",
    "Outrank competitors for valuable keywords",
    "Reach customers at the right moment",
    "Full control over budget and spending"
  ];

  const process = [
    {
      step: "01",
      title: "Strategy & Research",
      description: "Analyze your business, competitors, and identify high-performing keywords"
    },
    {
      step: "02",
      title: "Campaign Setup",
      description: "Structure campaigns, ad groups, and create compelling ad copy"
    },
    {
      step: "03",
      title: "Landing Page Optimization",
      description: "Ensure landing pages are optimized for conversions"
    },
    {
      step: "04",
      title: "Launch & Monitor",
      description: "Launch campaigns and continuously monitor performance metrics"
    },
    {
      step: "05",
      title: "Optimization & Testing",
      description: "A/B test ads, adjust bids, and refine targeting for better results"
    },
    {
      step: "06",
      title: "Reporting & Scaling",
      description: "Provide detailed reports and scale successful campaigns"
    }
  ];

  const metrics = [
    { label: "Average ROAS", value: "450%" },
    { label: "Cost Per Click", value: "-35%" },
    { label: "Conversion Rate", value: "+127%" },
    { label: "Quality Score", value: "8.5/10" }
  ];

  const faqs = [
    {
      question: "What is the minimum budget for Google Ads?",
      answer: "We recommend a minimum monthly ad spend of $1,500-$2,000 for meaningful results. This allows enough data to test, optimize, and achieve positive ROI."
    },
    {
      question: "How quickly will I see results?",
      answer: "Google Ads can drive traffic immediately. However, optimal performance typically takes 2-3 months as we gather data and refine targeting."
    },
    {
      question: "Will I own the Google Ads account?",
      answer: "Yes, all campaigns are set up in your own Google Ads account. You retain 100% ownership and access to all data."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Google Ads Management Services | Market Integrators"
        description="Expert Google Ads management services. We help businesses maximize ROI with targeted Search, Display, and Shopping campaigns."
        canonicalUrl="https://www.marketintegrators.com/services/google-ads-management"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.marketintegrators.com/" },
          { name: "Services", url: "https://www.marketintegrators.com/services" },
          { name: "Google Ads Management", url: "https://www.marketintegrators.com/services/google-ads-management" }
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
              Google Ads Management
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Drive targeted traffic and maximize ROI with expertly managed Google Ads campaigns
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact-us">Get Free Audit</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">View Results</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-10 bg-muted/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Ad Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We leverage the full power of Google's advertising ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Google Ads Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology for driving results through Google Ads
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
            <h2 className="text-4xl font-bold mb-12 text-center">Why Google Ads?</h2>
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

      {/* What's Included */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-4">What's Included</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need for successful Google Ads campaigns
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-bold mb-2">Expert Management</h3>
                <p className="text-muted-foreground">Certified Google Ads specialists managing your campaigns</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Transparent Reporting</h3>
                <p className="text-muted-foreground">Detailed monthly reports with actionable insights</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Continuous Optimization</h3>
                <p className="text-muted-foreground">Ongoing testing and refinement for better performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-primary/5">
            <Target className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Ready to Drive More Conversions?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free Google Ads audit and discover how we can help you maximize your advertising ROI
            </p>
            <Button asChild size="lg">
              <Link to="/contact-us">Request Free Audit</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceGoogleAds;