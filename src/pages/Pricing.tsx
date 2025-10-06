import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingCard from "@/components/pricing/PricingCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  const ppcPlans = [
    {
      name: "PPC Management",
      price: "$975",
      unit: "/month",
      description: "Expert Google Ads and Meta Ads management for growing businesses",
      features: [
        "Google Ads & Meta Ads campaigns",
        "Keyword research & optimization",
        "Ad copywriting & creative",
        "Landing page recommendations",
        "Monthly performance reports",
        "Dedicated account manager",
      ],
    },
  ];

  const seoPlans = [
    {
      name: "SEO Standard",
      price: "$1,800",
      unit: "/month",
      description: "Comprehensive SEO to increase organic traffic and rankings",
      popular: true,
      badge: "Most Popular",
      features: [
        "Technical SEO audit & fixes",
        "On-page optimization",
        "Content strategy & creation",
        "Link building campaign",
        "Local SEO (if applicable)",
        "Monthly ranking reports",
        "Conversion tracking setup",
      ],
    },
  ];

  const ecommercePlans = [
    {
      name: "eCommerce PPC Growth",
      price: "$1,500",
      unit: "flat (first 3 months)",
      description: "Specialized PPC for online stores and eCommerce businesses",
      features: [
        "Google Shopping campaigns",
        "Product feed optimization",
        "Remarketing strategies",
        "Dynamic ad creation",
        "ROI tracking & analytics",
        "Performance optimization",
      ],
    },
  ];

  const landingPagePricing = [
    {
      name: "Landing Page Design",
      price: "$900",
      unit: "/page",
      description: "High-converting landing pages designed for your campaigns",
      features: [
        "Custom responsive design",
        "Conversion-focused layout",
        "Mobile optimization",
        "Fast loading speed",
        "A/B testing ready",
        "Analytics integration",
      ],
    },
  ];

  const webDesignPricing = [
    {
      name: "Website Design",
      price: "$7,500+",
      unit: "",
      description: "Professional websites built for performance and conversions",
      features: [
        "Custom design & development",
        "Fully responsive",
        "SEO-optimized structure",
        "Content management system",
        "Performance optimization",
        "Training & support",
        "Ongoing maintenance available",
      ],
    },
    {
      name: "Enterprise Web",
      price: "$25,000+",
      unit: "",
      description: "Large-scale websites with advanced functionality",
      features: [
        "Complex integrations",
        "Custom applications",
        "Multi-language support",
        "Advanced analytics",
        "Security features",
        "Dedicated support team",
        "SLA agreements",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom text-center">
            <h1 className="mb-6">Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your business goals. All packages include expert management, detailed reporting, and dedicated support.
            </p>
          </div>
        </section>

        {/* PPC Pricing */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">PPC Management</h2>
              <p className="text-lg text-muted-foreground">Drive instant traffic and qualified leads</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {ppcPlans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
              {ecommercePlans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>
          </div>
        </section>

        {/* SEO Pricing */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">SEO Services</h2>
              <p className="text-lg text-muted-foreground">Dominate search rankings and increase organic traffic</p>
            </div>
            <div className="max-w-md mx-auto">
              {seoPlans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>
          </div>
        </section>

        {/* Landing Pages & Web Design */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Web Design & Landing Pages</h2>
              <p className="text-lg text-muted-foreground">Professional design that converts visitors into customers</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {landingPagePricing.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
              {webDesignPricing.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-3xl">
            <h2 className="text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Is there a setup fee?</h3>
                <p className="text-muted-foreground">No hidden fees. The prices listed are what you pay monthly. Some services may require one-time setup costs, which we'll discuss upfront.</p>
              </div>
              <div>
                <h3 className="text-xl mb-2">What's the minimum contract length?</h3>
                <p className="text-muted-foreground">Most services require a 3-month minimum commitment to see meaningful results. We offer month-to-month options after the initial period.</p>
              </div>
              <div>
                <h3 className="text-xl mb-2">How fast can I see results?</h3>
                <p className="text-muted-foreground">PPC campaigns can generate traffic immediately. SEO typically takes 3-6 months for significant ranking improvements. We provide regular progress reports.</p>
              </div>
              <div>
                <h3 className="text-xl mb-2">Do you offer custom packages?</h3>
                <p className="text-muted-foreground">Absolutely! We can create a customized plan combining multiple services tailored to your specific needs and budget.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-primary-foreground mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Request a free proposal and we'll create a customized plan for your business.
            </p>
            <Button asChild size="lg" variant="secondary" className="btn-text">
              <Link to="/contact-us">Request Free Proposal</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
