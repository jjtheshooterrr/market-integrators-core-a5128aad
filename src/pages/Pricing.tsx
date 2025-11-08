import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingCard from "@/components/pricing/PricingCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CurrencyDollar, ArrowsClockwise, UserCircleGear, ChartBar, Medal, RocketLaunch } from "@phosphor-icons/react";
const Pricing = () => {
  const techServices = [
    {
      name: "AI & Machine Learning",
      price: "Starting at $2,500",
      unit: "/project",
      description: "Smart automations and predictive tools for everyday operations.",
      features: ["Model setup & training", "Automation integration", "Dashboard reporting"],
    },
    {
      name: "Cloud & Cybersecurity",
      price: "From $1,500",
      unit: "/month",
      description: "Secure, scalable infrastructure for modern teams.",
      features: ["Migration & setup", "Monitoring & threat protection", "Compliance management"],
    },
    {
      name: "Data Analytics & Automation",
      price: "From $1,200",
      unit: "/month",
      description: "Turn your data into insight and automation.",
      features: ["KPI dashboards", "Workflow automation", "API & system integrations"],
    },
    {
      name: "App & Web Development",
      price: "Websites from $3,500+",
      unit: "Apps from $6,500+",
      description: "Fast, responsive digital experiences built for conversions.",
      features: ["Custom design & development", "CMS integration", "Mobile optimization"],
    },
    {
      name: "Digital Strategy Consulting",
      price: "$150",
      unit: "/hr or packages from $1,500+",
      description: "Technical and growth strategy for scaling brands.",
      features: ["Strategic planning", "Growth roadmaps", "Implementation support"],
    },
  ];
  const marketingServices = [
    {
      name: "PPC & Paid Media",
      price: "From $975",
      unit: "/month",
      description: "Drive qualified leads through Google & Meta campaigns.",
      features: ["Ad setup & management", "Keyword optimization", "Monthly reporting"],
    },
    {
      name: "Google Ads Management",
      price: "From $600",
      unit: "/month",
      description: "Increase conversions and lower CPCs.",
      features: ["Campaign optimization", "Ad copy & tracking", "Ongoing A/B testing"],
    },
    {
      name: "Meta Ads Management",
      price: "From $600",
      unit: "/month",
      description: "Facebook & Instagram growth campaigns.",
      features: ["Creative strategy", "Retargeting", "Weekly performance updates"],
    },
    {
      name: "SEO & Organic Growth",
      price: "$950–$2,500",
      unit: "/month",
      description: "Improve rankings and long-term visibility.",
      popular: true,
      badge: "Most Popular",
      features: ["Technical audit", "Content optimization", "Backlink outreach"],
    },
    {
      name: "Social Media Marketing",
      price: "From $750",
      unit: "/month",
      description: "Grow your audience and engagement.",
      features: ["Content calendar", "Daily posting & engagement", "Analytics reporting"],
    },
  ];
  const creativeServices = [
    {
      name: "Video Production",
      price: "From $1,800",
      unit: "/project",
      description: "Professional videos that engage your audience.",
      features: ["Script & direction", "On-site filming", "Editing & delivery"],
    },
    {
      name: "Post-Production & Editing",
      price: "From $400",
      unit: "/project",
      description: "Fast, clean, professional editing.",
      features: ["Color correction", "Sound design", "Motion titles"],
    },
    {
      name: "Animation & Motion Graphics",
      price: "From $1,200",
      unit: "/minute",
      description: "Explainer & brand animation.",
      features: ["2D & 3D graphics", "Logo animation", "Brand story videos"],
    },
    {
      name: "Photography & Product Shoots",
      price: "From $650",
      unit: "/session",
      description: "Stunning imagery for products or branding.",
      features: ["Studio or on-location", "Retouching included", "20–30 final images"],
    },
    {
      name: "Audio Production",
      price: "From $75",
      unit: "/hour",
      description: "Clean, professional sound for video or podcast.",
      features: ["Mixing & mastering", "Voiceovers", "Sound branding"],
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
              Professional pricing and clear deliverables. Choose the services that fit your business goals.
            </p>
          </div>
        </section>

        {/* Pricing Categories Accordion */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <Accordion type="single" collapsible className="space-y-4">
              {/* TECHNOLOGY & INNOVATION */}
              <AccordionItem value="tech" className="border rounded-lg bg-card">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="text-left">
                    <h2 className="text-2xl font-bold uppercase tracking-wider text-primary mb-2">
                      Technology & Innovation
                    </h2>
                    <p className="text-base text-muted-foreground font-normal">
                      Digital solutions that improve efficiency and scale your business.
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {techServices.map((service, index) => (
                      <PricingCard key={index} {...service} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* MARKETING & GROWTH */}
              <AccordionItem value="marketing" className="border rounded-lg bg-card">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="text-left">
                    <h2 className="text-2xl font-bold uppercase tracking-wider text-primary mb-2">
                      Marketing & Growth
                    </h2>
                    <p className="text-base text-muted-foreground font-normal">
                      Transparent, results-driven marketing to grow your brand.
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {marketingServices.map((service, index) => (
                      <PricingCard key={index} {...service} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* CREATIVE MEDIA STUDIO */}
              <AccordionItem value="creative" className="border rounded-lg bg-card">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="text-left">
                    <h2 className="text-2xl font-bold uppercase tracking-wider text-primary mb-2">
                      Creative Media Studio
                    </h2>
                    <p className="text-base text-muted-foreground font-normal">
                      High-impact visuals and storytelling for modern brands.
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {creativeServices.map((service, index) => (
                      <PricingCard key={index} {...service} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CUSTOM PROJECTS */}
        <section className="section-padding bg-secondary">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <h2 className="mb-4 uppercase tracking-wider text-primary">Custom Projects</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Need a mix of technology, marketing, and creative? We build integrated packages for your exact needs.
            </p>
            <p className="text-2xl font-bold mb-8">Custom quotes starting at $1,000.</p>
            <Button asChild size="lg" className="btn-text">
              <Link to="/contact-us">Book a Free Strategy Call</Link>
            </Button>
          </div>
        </section>

        {/* WHY CLIENTS CHOOSE US */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-center mb-12 uppercase tracking-wider text-primary">Why Clients Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="card-premium p-6 text-center">
                <CurrencyDollar size={44} weight="duotone" className="mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2">Transparent Pricing</h3>
                <p className="text-muted-foreground">Clear deliverables and no hidden fees</p>
              </div>
              <div className="card-premium p-6 text-center">
                <ArrowsClockwise size={44} weight="duotone" className="mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2">Flexible Options</h3>
                <p className="text-muted-foreground">Month-to-month plans available</p>
              </div>
              <div className="card-premium p-6 text-center">
                <UserCircleGear size={44} weight="duotone" className="mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2">Dedicated Manager</h3>
                <p className="text-muted-foreground">Your project, one point of contact</p>
              </div>
              <div className="card-premium p-6 text-center">
                <ChartBar size={44} weight="duotone" className="mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2">24/7 Dashboard</h3>
                <p className="text-muted-foreground">Real-time reporting and analytics</p>
              </div>
              <div className="card-premium p-6 text-center">
                <Medal size={44} weight="duotone" className="mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2">Proven Results</h3>
                <p className="text-muted-foreground">Success across industries</p>
              </div>
              <div className="card-premium p-6 text-center">
                <RocketLaunch size={44} weight="duotone" className="mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">Quick turnarounds without compromise</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-primary-foreground mb-6">Ready to get started? Let's create something exceptional.</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get a quote or explore our proven case studies to see how we deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="btn-text">
                <Link to="/contact-us">Get a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="btn-text border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              ></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Pricing;
