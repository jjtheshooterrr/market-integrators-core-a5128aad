import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowRight, CheckCircle2, MapPin, Star } from "lucide-react";
import sparkleLogo from "@/assets/sparkle-logo.webp";
import sparkleView from "@/assets/sparkleautodetailingview.webp";

const CaseStudySparkleAutoDetailing = () => {
  const keyHighlights = [
    "109+ five-star Google reviews showcased to increase trust",
    "Website rebuilt & optimized for SEO and conversion",
    "Google Business Profile fully optimized with consistent NAP data",
    "High-intent content targeting local keywords",
    "Streamlined lead funnels across website and social media",
    "Top rankings for local auto detailing searches",
  ];

  const solutions = [
    {
      title: "Local SEO & Google Business Profile Optimization",
      items: [
        "Rebuilt and optimized Google Business Profile",
        "Synced accurate NAP info across all directories",
        "Added keyword-rich service descriptions",
        "Uploaded geo-tagged portfolio images",
        "Implemented weekly GBP posting for ranking freshness",
      ],
    },
    {
      title: "Website Optimization & Content Structure",
      items: [
        "Created clear, detailed service pages",
        "Added visual proof with before/after photos and reel embeds",
        "Implemented trust indicators and review displays",
        "Optimized headers & metadata for local SEO",
        "Mobile-first UI/UX design",
        "Strategic CTAs throughout the site",
      ],
    },
    {
      title: "Reputation & Review Leverage",
      items: [
        "Integrated reviews directly into the website",
        "Created rotating social proof widgets",
        "Automated review request templates",
        "Positioned as #1 trusted local detailer",
      ],
    },
    {
      title: "Social Media Alignment & Branding",
      items: [
        "Unified Facebook and Instagram profiles",
        "Updated bios, keywords, and CTAs",
        "Synced branding across all platforms",
        "Optimized highlight categories",
        "Built cleaner appointment path from social to booking",
      ],
    },
  ];

  const results = [
    {
      metric: "Top Results",
      description: "For 'Sparkle Auto Detailing Brigham City' and surrounding areas",
    },
    {
      metric: "Increased Lead Flow",
      description: "More quote requests by phone and DM with higher conversion rates",
    },
    {
      metric: "109+ Reviews",
      description: "Five-star reviews now working to drive trust and conversions",
    },
    {
      metric: "Unified Brand",
      description: "Consistent, professional presence across all platforms",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sparkle Auto Detailing Case Study | Market Integrators</title>
        <meta
          name="description"
          content="How Market Integrators helped Sparkle Auto Detailing increase local visibility, lead flow, and brand authority through SEO optimization and digital strategy."
        />
        <meta property="og:title" content="Sparkle Auto Detailing Case Study | Market Integrators" />
        <meta
          property="og:description"
          content="Discover how we helped a Brigham City detailing company dominate local search and increase conversions."
        />
        <meta property="og:image" content={sparkleView} />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background pt-24 pb-16">
        {/* Breadcrumb */}
        <section className="container mx-auto px-4 mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/case-studies">Case Studies</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Sparkle Auto Detailing</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>

        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={sparkleLogo}
                alt="Sparkle Auto Detailing Logo"
                className="w-48 h-auto mb-6 object-contain"
              />
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                Sparkle Auto Detailing
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Local SEO Dominance & Digital Transformation for a Brigham City Detailing Company
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Brigham City, UT
                </span>
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  109+ Five-Star Reviews
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* MacBook Mockup */}
        <section className="container mx-auto px-4 mb-20">
          <div className="relative">
            <img
              src={sparkleView}
              alt="Sparkle Auto Detailing Website"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </section>

        {/* Overview */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Overview</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Sparkle Auto Detailing is a Brigham City–based mobile and in-shop detailing company
              offering interior & exterior detailing, ceramic coatings, paint enhancement, and more.
              Despite having strong customer reviews and a loyal base, they struggled with
              inconsistent online visibility and needed a modern brand presence that matched the
              quality of their service.
            </p>
            <p>
              Our team partnered with Sparkle Auto Detailing to overhaul their digital footprint,
              increase discoverability, and create a scalable lead-generation system that works
              24/7.
            </p>
          </div>
        </section>

        {/* The Challenge */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">The Challenge</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Inconsistent Online Presence
              </h3>
              <p className="text-muted-foreground">
                Their brand name appeared across multiple platforms, but profiles lacked
                optimization, causing Google to show incomplete or incorrect listings.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Website Not Aligned With Buyer Intent
              </h3>
              <p className="text-muted-foreground">
                The site didn't clearly communicate services offered, pricing expectations, local
                coverage areas, social proof, or calls to action—reducing conversion rates and user
                trust.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Low Local SEO Visibility
              </h3>
              <p className="text-muted-foreground">
                Even with 100+ five-star reviews, Google wasn't ranking them where they deserved
                because NAP data wasn't consistent, listings lacked structured local SEO, and
                content didn't target high-intent keywords.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                No Scalable Lead Generation System
              </h3>
              <p className="text-muted-foreground">
                Customer acquisition relied heavily on social media, referrals, and manual
                messages—not a sustainable growth strategy.
              </p>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Our Solution</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We executed a full-spectrum digital optimization designed to boost local authority,
            increase search visibility, and convert traffic into booked jobs.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">{solution.title}</h3>
                <ul className="space-y-2">
                  {solution.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Results</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Within the first 60 days, Sparkle Auto Detailing experienced dramatic improvements.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20"
              >
                <h3 className="text-2xl font-bold mb-2 text-foreground">{result.metric}</h3>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Highlights */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Key Highlights</h2>
          <div className="bg-card p-8 rounded-lg border border-border">
            <ul className="grid md:grid-cols-2 gap-4">
              {keyHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Testimonial */}
        <section className="container mx-auto px-4 mb-16">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-12 rounded-lg border border-primary/20">
            <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6">
              "Market Integrators transformed our online presence. We're now ranking at the top for
              local searches, getting more qualified leads than ever, and our 109+ reviews are
              finally working for us. The team built us a system that brings in customers while we
              focus on detailing cars."
            </blockquote>
            <div className="flex items-center gap-4">
              <div>
                <p className="font-semibold text-foreground">Sparkle Auto Detailing</p>
                <p className="text-sm text-muted-foreground">Brigham City, UT</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Want Results Like Sparkle Auto Detailing?</h2>
            <p className="text-xl mb-8 opacity-90">
              We help local businesses build market-dominant digital systems that bring predictable
              leads and long-term growth.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8"
            >
              <Link to="/contact">
                Request Your Proposal
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CaseStudySparkleAutoDetailing;
