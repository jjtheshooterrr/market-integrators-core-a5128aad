import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingCard from "@/components/pricing/PricingCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CurrencyDollar, ArrowsClockwise, UserCircleGear, ChartBar, Medal, RocketLaunch } from "@phosphor-icons/react";

const Pricing = () => {
  // TECHNOLOGY & INNOVATION
  const techServices = [
    {
      name: "AI & Machine Learning",
      price: "Starting at $3,500",
      unit: "/project",
      description: "Custom AI tools, automations, and workflows designed around your operations.",
      features: ["Model setup & training", "Automation & workflow design", "KPI dashboard & reporting"],
    },
    {
      name: "Cloud & Cybersecurity",
      price: "From $1,500+",
      unit: "/month (plus setup)",
      description: "Secure, scalable infrastructure with proactive monitoring and protection.",
      features: ["Cloud migration & setup", "Monitoring & threat detection", "Compliance & best practices"],
    },
    {
      name: "Data Analytics & Automation",
      price: "Projects from $2,000",
      unit: "Retainers from $1,000/mo",
      description: "Turn your data into decisions, automations, and ROI-focused insights.",
      features: ["Custom KPI dashboards", "Workflow & process automation", "API & system integrations"],
    },
    {
      name: "App & Web Development",
      price: "Websites from $4,500+",
      unit: "Apps from $7,500+",
      description: "High-converting websites and apps built for speed, UX, and scalability.",
      features: ["Custom design & development", "Heads-up CMS integration", "Mobile-first optimization"],
    },
    {
      name: "Digital Strategy Consulting",
      price: "$175–$250",
      unit: "/hour or packages from $2,500+",
      description: "Fractional CTO/CXO-level strategy for teams that want to scale with clarity.",
      features: ["Quarterly roadmaps", "Tech & growth strategy", "Implementation support"],
    },
  ];

  // MARKETING & GROWTH
  const marketingServices = [
    {
      name: "PPC & Paid Media",
      price: "From $1,200",
      unit: "/month",
      description: "Full-funnel paid media management for Google, Meta, and more.",
      features: ["Campaign build & setup", "Ongoing optimization", "Monthly performance reports"],
    },
    {
      name: "Google Ads Management",
      price: "From $750",
      unit: "/month",
      description: "Conversion-focused campaigns designed to lower CPA and increase volume.",
      features: ["Search & Performance Max", "Tracking & attribution setup", "A/B testing & refinement"],
    },
    {
      name: "Meta Ads Management",
      price: "From $750",
      unit: "/month",
      description: "Facebook & Instagram campaigns that blend creative and targeting.",
      features: ["Creative strategy & hooks", "Retargeting & lookalikes", "Weekly performance reviews"],
    },
    {
      name: "SEO & Organic Growth",
      price: "$1,200–$3,000",
      unit: "/month",
      description: "Technical and content SEO for brands that want sustained organic growth.",
      popular: true,
      badge: "Most Popular",
      features: ["Technical SEO audit", "Content strategy & optimization", "Authority & backlink outreach"],
    },
    {
      name: "Social Media Marketing",
      price: "From $900",
      unit: "/month",
      description: "Done-for-you content, posting, and growth support on key platforms.",
      features: ["Content calendar & planning", "Publishing & engagement", "Monthly analytics insights"],
    },
  ];

  // CREATIVE MEDIA STUDIO
  const creativeServices = [
    {
      name: "Video Production",
      price: "From $2,500",
      unit: "/project",
      description: "Brand, testimonial, and ad-ready video assets that actually get watched.",
      features: ["Concept & scripting", "On-site or remote production", "Editing & color finishing"],
    },
    {
      name: "Post-Production & Editing",
      price: "From $350",
      unit: "/project",
      description: "Polished editing for social content, ads, and long-form video.",
      features: ["Cut downs & pacing", "Color correction & cleanup", "Sound design & basic motion"],
    },
    {
      name: "Animation & Motion Graphics",
      price: "From $1,800",
      unit: "/minute",
      description: "Explainer and brand animations tailored to your messaging and style.",
      features: ["2D & 3D motion", "Logo & brand animations", "Story-driven sequences"],
    },
    {
      name: "Photography & Product Shoots",
      price: "From $750",
      unit: "/session",
      description: "Scroll-stopping visuals for products, teams, and brand storytelling.",
      features: ["Studio or location shoots", "Professional retouching", "20–40 edited final images"],
    },
    {
      name: "Audio Production",
      price: "From $95",
      unit: "/hour",
      description: "Podcast, voiceover, and commercial-ready audio production.",
      features: ["Mixing & mastering", "Voiceover recording", "Brand sonic identity"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary via-secondary to-background border-b">
          <div className="container-custom text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] mb-4 bg-background/40">
              Pricing & Packages
            </span>
            <h1 className="mb-4 text-4xl md:text-5xl font-bold">Transparent, Real-World Pricing</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Clear deliverables, realistic budgets, and scalable options for teams that are serious about growth.
            </p>
          </div>
        </section>

        {/* Pricing Categories Accordion */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <Accordion type="single" collapsible className="space-y-4">
              {/* TECHNOLOGY & INNOVATION */}
              <AccordionItem value="tech" className="border rounded-lg bg-card/80 backdrop-blur">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="text-left">
                    <h2 className="text-2xl font-bold uppercase tracking-wider text-primary mb-1">
                      Technology & Innovation
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground font-normal max-w-2xl">
                      Custom software, AI, automation, and cloud foundations that compound over time.
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
              <AccordionItem value="marketing" className="border rounded-lg bg-card/80 backdrop-blur">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="text-left">
                    <h2 className="text-2xl font-bold uppercase tracking-wider text-primary mb-1">
                      Marketing & Growth
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground font-normal max-w-2xl">
                      Performance marketing and organic growth programs built around revenue, not vanity metrics.
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
              <AccordionItem value="creative" className="border rounded-lg bg-card/80 backdrop-blur">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="text-left">
                    <h2 className="text-2xl font-bold uppercase tracking-wider text-primary mb-1">
                      Creative Media Studio
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground font-normal max-w-2xl">
                      Video, photo, and audio that plug directly into campaigns, launches, and content systems.
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
        <section className="section-padding bg-secondary/60 border-y">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <h2 className="mb-3 uppercase tracking-wider text-primary text-sm font-semibold">
              Custom & Integrated Projects
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Most clients combine technology, marketing, and creative into one integrated engagement.
            </p>
            <p className="text-base text-muted-foreground mb-6">
              We’ll scope a project based on your goals, timeline, and current stack—no copy-paste retainers.
            </p>
            <p className="text-2xl font-bold mb-8">Custom project quotes typically start around $2,500.</p>
            <Button asChild size="lg" className="btn-text">
              <Link to="/contact-us">Book a Free Strategy Call</Link>
            </Button>
          </div>
        </section>

        {/* WHY CLIENTS CHOOSE US */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-center mb-3 uppercase tracking-wider text-primary text-sm font-semibold">
              Why Clients Choose Market Integrators
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              We operate like an embedded growth and innovation team—technical, creative, and accountable to outcomes.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="card-premium p-6 text-center">
                <CurrencyDollar size={44} weight="duotone" className="mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2">Transparent Pricing</h3>
                <p className="text-muted-foreground">Clear scopes, clear timelines, and no surprise invoices.</p>
              </div>
              <div className="card-premium p-6 text-center">
                <ArrowsClockwise size={44} weight="duotone" className="mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2">Flexible Engagements</h3>
                <p className="text-muted-foreground">Start with a project, grow into a retainer when it makes sense.</p>
              </div>
              <div className="card-premium p-6 text-center">
                <UserCircleGear size={44} weight="duotone" className="mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2">Dedicated Lead</h3>
                <p className="text-muted-foreground">One senior point of contact coordinating the full team.</p>
              </div>
              <div className="card-premium p-6 text-center">
                <ChartBar size={44} weight="duotone" className="mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2">Live Reporting</h3>
                <p className="text-muted-foreground">Dashboards, tracking, and regular review calls included.</p>
              </div>
              <div className="card-premium p-6 text-center">
                <Medal size={44} weight="duotone" className="mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2">Multi-Discipline Team</h3>
                <p className="text-muted-foreground">Developers, marketers, and creatives under one roof.</p>
              </div>
              <div className="card-premium p-6 text-center">
                <RocketLaunch size={44} weight="duotone" className="mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2">Fast Iteration</h3>
                <p className="text-muted-foreground">Launch quickly, improve continuously, and scale what works.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="mb-4 text-3xl font-semibold">Ready to see what this looks like for your business?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Share your goals and we&apos;ll propose a tailored roadmap with clear pricing, timelines, and outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="btn-text">
                <Link to="/contact-us">Get a Custom Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="btn-text border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
