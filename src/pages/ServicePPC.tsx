import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PricingCard from "@/components/pricing/PricingCard";
import { Target, TrendingUp, BarChart3, Zap, CheckCircle2 } from "lucide-react";
import servicePPC from "@/assets/service-ppc.jpg";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { FAQSchema } from "@/components/FAQSchema";
import { OptimizedImage } from "@/components/OptimizedImage";

const ServicePPC = () => {
  const features = [
    {
      icon: Target,
      title: "Strategic Keyword Targeting",
      description: "We identify and bid on high-intent keywords that convert, not just generate clicks.",
    },
    {
      icon: TrendingUp,
      title: "Campaign Optimization",
      description: "Continuous A/B testing and optimization to improve CTR, Quality Score, and conversions.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Detailed reporting and insights showing exactly where your budget goes and what it delivers.",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Launch campaigns quickly and start driving qualified traffic within days, not months.",
    },
  ];

  const platforms = [
    "Google Search Ads",
    "Google Display Network",
    "Google Shopping",
    "Facebook & Instagram Ads",
    "LinkedIn Ads",
    "YouTube Ads",
    "Remarketing Campaigns",
    "Local Service Ads",
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Research",
      description: "We analyze your business, competitors, and target audience to build a winning strategy.",
    },
    {
      step: "2",
      title: "Campaign Setup",
      description: "Create targeted campaigns with compelling ad copy and optimized landing pages.",
    },
    {
      step: "3",
      title: "Launch & Monitor",
      description: "Deploy campaigns and closely monitor performance, making real-time adjustments.",
    },
    {
      step: "4",
      title: "Optimize & Scale",
      description: "Continuously test and optimize to improve ROI, then scale what works.",
    },
  ];

  const faqs = [
    {
      question: "How much should I budget for PPC advertising?",
      answer: "We typically recommend a minimum monthly ad spend of $1,500-$2,000 for meaningful results, in addition to our management fee. The ideal budget depends on your industry, competition, and goals.",
    },
    {
      question: "How fast can I see results from PPC?",
      answer: "Unlike SEO, PPC can generate traffic and leads almost immediately. Most clients see qualified traffic within the first week, with optimization improving results over the first 30-60 days.",
    },
    {
      question: "Do you require long-term contracts?",
      answer: "We require a 3-month initial commitment to properly optimize your campaigns. After that, we offer month-to-month agreements.",
    },
    {
      question: "What platforms do you manage?",
      answer: "We manage campaigns across Google Ads, Meta (Facebook/Instagram), LinkedIn, YouTube, and other platforms based on where your target audience is most active.",
    },
  ];

  const pricing = {
    name: "PPC Management",
    price: "$975",
    unit: "/month",
    description: "Comprehensive PPC management including Google Ads and Meta Ads",
    features: [
      "Google Ads & Meta Ads setup and management",
      "Keyword research and optimization",
      "Ad copy and creative development",
      "Landing page recommendations",
      "Conversion tracking setup",
      "Monthly performance reports",
      "Dedicated account manager",
      "Phone and email support",
    ],
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="PPC Management Services | Pay-Per-Click Advertising - Market Integrators"
        description="Drive instant qualified traffic with expert PPC management. Google Ads, Facebook Ads, LinkedIn campaigns optimized for maximum ROI. Get results fast."
        canonical="https://www.marketintegrators.com/services/ppc-services"
        keywords="PPC management, pay per click advertising, Google Ads management, Facebook Ads, paid media management, PPC services"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.marketintegrators.com/" },
          { name: "Services", url: "https://www.marketintegrators.com/services" },
          { name: "PPC & Paid Media", url: "https://www.marketintegrators.com/services/ppc-services" }
        ]}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight py-2">PPC & Paid Media Management Services</h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Drive instant qualified traffic and maximize ROI with expertly managed pay-per-click campaigns across Google, Facebook, LinkedIn, and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="btn-text">
                    <Link to="/contact-us">Get Started</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="btn-text">
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <OptimizedImage src={servicePPC} alt="Digital advertising campaign dashboard showing PPC performance metrics and analytics" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="mb-4">Stop Wasting Ad Spend</h2>
              <p className="text-xl text-muted-foreground">
                Most businesses struggle with PPC because they lack the expertise to optimize campaigns effectively. We fix that.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-premium p-8">
                <h3 className="text-xl mb-4 text-destructive">Common PPC Problems</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">✗</span>
                    <span className="text-muted-foreground">High cost per click with low conversions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">✗</span>
                    <span className="text-muted-foreground">Targeting wrong keywords and audiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">✗</span>
                    <span className="text-muted-foreground">Poor Quality Scores driving up costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">✗</span>
                    <span className="text-muted-foreground">No clear tracking or ROI visibility</span>
                  </li>
                </ul>
              </div>
              <div className="card-premium p-8 bg-primary/5">
                <h3 className="text-xl mb-4 text-primary">Our PPC Solution</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-foreground">Strategic campaigns that convert</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-foreground">Precision targeting and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-foreground">Improved Quality Scores = lower costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-primary mr-2 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-foreground">Transparent reporting and ROI tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="mb-4">What Makes Our PPC Management Different</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="mb-4">Platforms We Manage</h2>
              <p className="text-xl text-muted-foreground">
                Expert management across all major advertising platforms
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {platforms.map((platform, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary transition-colors">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span className="font-medium">{platform}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="mb-4">Our PPC Process</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="mb-4">Transparent Pricing</h2>
              <p className="text-xl text-muted-foreground">
                Simple, straightforward pricing with no hidden fees
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <PricingCard {...pricing} popular={true} badge="Most Popular" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-3xl">
            <h2 className="text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-xl mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-primary-foreground mb-6">Ready to Drive Qualified Traffic?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get a free PPC strategy consultation and custom proposal for your business.
            </p>
            <Button asChild size="lg" variant="secondary" className="btn-text">
              <Link to="/contact-us">Request Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePPC;
