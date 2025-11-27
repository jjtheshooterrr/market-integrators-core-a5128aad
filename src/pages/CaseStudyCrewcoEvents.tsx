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
import crewcoLogo from "@/assets/crewco-logo.webp";
import crewcoMacView from "@/assets/crewco-macview.webp";
import { OptimizedImage } from "@/components/OptimizedImage";

export default function CaseStudyCrewcoEvents() {
  const keyHighlights = [
    { title: "Modern, mobile-optimized design" },
    { title: "Local SEO for Houston metro area" },
    { title: "Clear CTAs: 'View Our Work' and 'Book Now'" },
    { title: "Analytics & conversion tracking integration" }
  ];

  const solutions = [
    {
      title: "Full Website Redesign",
      description: "Modern design emphasizing visuals, speed, and clear calls-to-action"
    },
    {
      title: "Local SEO Strategy",
      description: "Keyword optimization, Google Business improvements, and structured data"
    },
    {
      title: "On-Page SEO & Local Citations",
      description: "Technical optimization and local directory presence"
    },
    {
      title: "Booking Flow Optimization",
      description: "Streamlined conversion paths for quote requests and bookings"
    }
  ];

  const results = [
    { metric: "+132%", label: "organic traffic growth" },
    { metric: "Top 3", label: "rankings for 'event lighting Houston' and 'event production Houston'" },
    { metric: "+76%", label: "more form submissions" },
    { metric: "Higher", label: "lead quality and engagement" }
  ];

  return (
    <>
      <Helmet>
        <title>Crewco Events Case Study - Website Redesign & Local SEO | Market Integrators</title>
        <meta
          name="description"
          content="See how we transformed Crewco Events' online presence with a full website redesign and local SEO strategy, achieving 132% organic traffic growth and top 3 rankings for Houston event production keywords."
        />
        <meta property="og:title" content="Crewco Events Case Study - Website Redesign & Local SEO" />
        <meta property="og:description" content="Website redesign and local SEO for Houston event production company" />
        <meta property="og:image" content={crewcoMacView} />
      </Helmet>

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
                  <BreadcrumbPage>Crewco Events</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom max-w-5xl text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <OptimizedImage
                src={crewcoLogo}
                alt="Crewco Events - Houston Event Production and Lighting logo"
                className="w-[170px] md:w-[170px] h-auto"
              />
            </div>

            {/* Title */}
            <h1 className="mb-4">Crewco Events — Website Redesign & Local SEO</h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Transforming a Houston event production company's online presence into a high-performing local lead generator.
            </p>

            {/* Mac Mockup */}
            <div className="mb-4">
              <OptimizedImage
                src={crewcoMacView}
                alt="MacBook Pro displaying Crewco Events website featuring event lighting portfolio"
                className="w-full max-w-[1100px] mx-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Caption */}
            <p className="text-sm text-muted-foreground mb-6">
              Modern, mobile-optimized website with local SEO strategy.
            </p>

            {/* View Website Button */}
            <Button asChild size="lg">
              <a
                href="https://www.crewcoevents.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website
              </a>
            </Button>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Crewco Events is a Houston-based event production company specializing in professional lighting, audio systems, and on-site operations for corporate events, weddings, and entertainment productions. The project scope included a complete website redesign and comprehensive local SEO strategy to establish Crewco Events as the go-to event production company in the Houston metro area.
            </p>
          </div>
        </section>

        {/* The Challenge */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">The Challenge</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Outdated website that didn't reflect their professional capabilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Poor mobile experience affecting user engagement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Weak conversion paths with no clear calls-to-action</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Low visibility for critical Houston event production keywords</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Minimal organic traffic and limited online lead generation</span>
              </li>
            </ul>
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

        {/* CTA Footer */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-4">Ready to elevate your online presence?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's design a website that drives results.
            </p>
            <Button asChild size="lg" variant="secondary" className="btn-text">
              <Link to="/contact-us">Get My Free SEO Audit</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
