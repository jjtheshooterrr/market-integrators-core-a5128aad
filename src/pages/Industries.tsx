import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Asclepius,
  Gavel,
  Bank,
  HeadCircuit,
  AppWindow,
  ShoppingCart,
  PipeWrench,
  Student,
  HouseLine,
} from "@phosphor-icons/react";

const Industries = () => {
  const industries = [
    {
      icon: <ShoppingCart className="w-12 h-12 text-primary" weight="duotone" />,
      title: "E-Commerce & Retail",
      description:
        "From DTC brands to large-scale online stores, we build and optimize omni-channel campaigns that drive consistent ROI. Our team integrates data pipelines, predictive LTV analysis, and dynamic creative testing to maximize revenue per visitor.",
    },
    {
      icon: <AppWindow className="w-12 h-12 text-primary" weight="duotone" />,
      title: "SaaS & Technology",
      description:
        "High-performance acquisition strategies for subscription and B2B SaaS companies. We focus on lead velocity, attribution clarity, and conversion efficiency across the funnel.",
    },
    {
      icon: <PipeWrench className="w-12 h-12 text-primary" weight="duotone" />,
      title: "Home Services & Franchises",
      description:
        "HVAC, electrical, plumbing, and multi-location franchises rely on us for scalable local lead generation and AI-enhanced visibility in search and map results.",
    },
    {
      icon: <Asclepius className="w-12 h-12 text-primary" weight="duotone" />,
      title: "Healthcare & Medical",
      description:
        "HIPAA-compliant, precision-targeted digital campaigns that build trust and drive appointment growth for clinics, practices, and telehealth brands.",
    },
    {
      icon: <Gavel className="w-12 h-12 text-primary" weight="duotone" />,
      title: "Legal & Professional Services",
      description:
        "Tailored PPC and SEO systems for law firms, accounting, and consulting practices—built to capture high-intent local and national leads.",
    },
    {
      icon: <Bank className="w-12 h-12 text-primary" weight="duotone" />,
      title: "Finance & Banking",
      description:
        "Data-driven performance marketing for financial products and fintech. We align creative, compliance, and measurement to drive qualified leads within regulated industries.",
    },
    {
      icon: <Student className="w-12 h-12 text-primary" weight="duotone" />,
      title: "Education & eLearning",
      description:
        "Enrollment-focused campaigns and funnel optimization for universities, online courses, and edtech platforms. We track every touchpoint to maximize cost-per-enrollment ROI.",
    },
    {
      icon: <HouseLine className="w-12 h-12 text-primary" weight="duotone" />,
      title: "Real Estate & Property Management",
      description:
        "Intelligent ad delivery and local visibility strategies for agents, brokerages, and property firms. AI visibility analysis helps surface your brand in emerging AI-driven search results.",
    },
    {
      icon: <HeadCircuit className="w-12 h-12 text-primary" weight="duotone" />,
      title: "AI, Automation & Emerging Tech",
      description:
        "Helping forward-thinking tech and AI companies build brand presence, scale inbound, and position themselves as category leaders through AI-assisted marketing and content systems.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">Industries We Serve</h1>
              <p className="font-body text-lg text-muted-foreground">
                Specialized digital marketing solutions tailored to the unique challenges and opportunities of your
                industry. We combine deep vertical expertise with cutting-edge technology to deliver measurable results.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{industry.icon}</div>
                  <h3 className="font-heading font-bold text-2xl mb-4">{industry.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-primary-foreground">
                Ready to Transform Your Industry Presence?
              </h2>
              <p className="font-body text-lg mb-8 text-primary-foreground/90">
                Let's discuss how our industry-specific strategies can drive growth for your business.
              </p>
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground rounded-lg font-medium hover:bg-background/90 transition-colors"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
