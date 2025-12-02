import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import audacyLogo from "@/assets/audacy-logo.webp";
import { OptimizedImage } from "@/components/OptimizedImage";

const CaseStudyAudacyHouston = () => {
  const solutions = [
    { title: "Short-Form Content Systems", description: "Designed and deployed across all stations" },
    { title: "Workflows & Playbooks", description: "Built for digital teams and on-air talent" },
    { title: "Vertical Video Formats", description: "Created Reels, Shorts, TikTok from broadcast highlights" },
    { title: "Real-Time Cultural Coverage", description: "Leveraged crisis moments to drive engagement spikes" },
    { title: "Analytics Dashboards", description: "Implemented performance tracking to monitor growth" }
  ];

  const results = [
    { metric: "3.5M+", label: "cumulative video views across all stations" },
    { metric: "400%+", label: "increase in average watch time" },
    { metric: "800%+", label: "weekly follower growth for Mega 101" },
    { metric: "100%", label: "YouTube engagement growth for SportsRadio 610" }
  ];

  const keyHighlights = [
    { title: "Enterprise-wide digital strategy across three major Houston brands" },
    { title: "Scalable systems enabling content consistency and viral growth" },
    { title: "Major uplift in brand awareness and audience retention" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Audacy Houston Digital Media Transformation",
    "author": { "@type": "Organization", "name": "Market Integrators" },
    "about": "Case study detailing Market Integrators' digital transformation work for Audacy Houston radio brands including SportsRadio 610, Mega 101, and The Bull Houston.",
    "publisher": { "@type": "Organization", "name": "Market Integrators" },
    "url": "https://www.marketintegrators.com/case-studies/audacy-houston",
    "inLanguage": "en",
    "genre": "Marketing Case Study"
  };

  return (
    <>
      <Helmet>
        <title>Audacy Houston Case Study - Digital Media Transformation | Market Integrators</title>
        <meta
          name="description"
          content="Transforming Houston's top radio stations into modern, social-first digital powerhouses. Achieved 3.5M+ video views and 400%+ increase in average watch time."
        />
        <meta property="og:title" content="Audacy Houston Case Study - Digital Media Transformation" />
        <meta property="og:description" content="Digital transformation for Houston's top radio stations" />
        <meta property="og:image" content={audacyLogo} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          {/* Breadcrumb */}
          <section className="py-4 bg-secondary/50">
            <div className="container-custom">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/case-studies">Case Studies</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Audacy Houston</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </section>

          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-b from-secondary to-background">
            <div className="container-custom max-w-5xl text-center">
              <div className="mb-8 flex justify-center">
                <img
                  src={audacyLogo}
                  alt="Audacy Houston - Radio Broadcasting and Digital Media logo"
                  className="w-[170px] md:w-[170px] h-auto"
                  loading="eager"
                />
              </div>

              <h1 className="mb-4">Audacy Houston — Digital Media Transformation</h1>

              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Transforming Houston's top radio stations into modern, social-first digital powerhouses.
              </p>
            </div>
          </section>

          {/* Overview */}
          <section className="section-padding">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Audacy Houston partnered with Market Integrators consultant Ayden Alm to modernize its digital content ecosystem across multiple radio brands. The goal was to evolve legacy broadcast stations into modern, short-form, audience-driven media platforms.
              </p>
            </div>
          </section>

          {/* The Challenge */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Audacy Houston needed to unify digital efforts across multiple stations, improve social engagement, and implement scalable systems that on-air talent could easily adopt.
              </p>
            </div>
          </section>

          {/* Our Solution */}
          <section className="section-padding">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">Our Solution</h2>
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="section-padding bg-secondary">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">Results</h2>
              <ul className="space-y-4 text-lg">
                {results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary text-2xl">{result.metric}</span>
                    <span className="text-muted-foreground">{result.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Key Highlights */}
          <section className="section-padding">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">Key Highlights</h2>
              <ul className="space-y-4 text-lg text-muted-foreground">
                {keyHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>{highlight.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Testimonial */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom max-w-3xl text-center">
              <blockquote className="text-2xl font-light italic text-muted-foreground mb-4">
                "Ayden's efforts led directly to a 100% growth in our brand's YouTube engagement in just under 8 months. He re-energized our digital presence and built systems that allowed us to grow a new digital audience rapidly."
              </blockquote>
              <p className="text-sm text-muted-foreground">— Parker Hillis, Brand Manager, SportsRadio 610 (Audacy Houston)</p>
            </div>
          </section>

          {/* CTA Footer */}
          <section className="section-padding bg-foreground text-primary-foreground">
            <div className="container-custom text-center max-w-3xl">
              <h2 className="text-primary-foreground mb-4">Ready to transform your digital media operation?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Let's create systems that scale.
              </p>
              <Button asChild size="lg" variant="secondary" className="btn-text">
                <Link to="/contact-us">Book a Strategy Session</Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CaseStudyAudacyHouston;
