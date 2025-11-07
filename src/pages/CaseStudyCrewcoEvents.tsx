import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Award, Target } from "lucide-react";
import crewcoLogo from "@/assets/crewco-logo.webp";
import crewcoMacView from "@/assets/crewco-macview.webp";

export default function CaseStudyCrewcoEvents() {
  const keyHighlights = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
      title: "Modern, mobile-optimized design",
      description: "Responsive layout that works seamlessly across all devices"
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Local SEO for Houston metro area",
      description: "Optimized for local search visibility and Google Business"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Clear CTAs: 'View Our Work' and 'Book Now'",
      description: "Strategic conversion paths throughout the site"
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Analytics & conversion tracking integration",
      description: "Complete visibility into user behavior and lead quality"
    }
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
    { metric: "+132%", label: "Organic Traffic Growth" },
    { metric: "Top 3", label: "Rankings for Key Houston Event Keywords" },
    { metric: "+76%", label: "More Form Submissions" },
    { metric: "Higher", label: "Lead Quality & Engagement" }
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

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-background via-background to-accent/5">
          <div className="container mx-auto px-4">
            <Link 
              to="/case-studies" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={crewcoLogo} 
                  alt="Crewco Events Logo" 
                  className="h-16 w-auto mb-6"
                />
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Website Redesign & Local SEO for Crewco Events
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Transforming a Houston event production company's online presence into a high-performing local lead generator.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Website Redesign
                  </span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Local SEO
                  </span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Conversion Optimization
                  </span>
                </div>
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
              <div className="relative">
                <img 
                  src={crewcoMacView} 
                  alt="Crewco Events Website Mockup" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Crewco Events is a Houston-based event production company specializing in professional lighting, audio systems, and on-site operations for corporate events, weddings, and entertainment productions. The project scope included a complete website redesign and comprehensive local SEO strategy to establish Crewco Events as the go-to event production company in the Houston metro area.
            </p>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Crewco Events faced several critical challenges with their digital presence:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Outdated website that didn't reflect their professional capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Poor mobile experience affecting user engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Weak conversion paths with no clear calls-to-action</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Low visibility for critical Houston event production keywords</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Minimal organic traffic and limited online lead generation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Our Solution</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Results</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-background rounded-lg border border-border"
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {result.metric}
                  </div>
                  <div className="text-muted-foreground">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Key Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyHighlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-6 border border-border rounded-lg"
                >
                  <div className="flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to elevate your online presence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's design a website that drives results.
            </p>
            <Button asChild size="lg">
              <Link to="/contact-us">Get My Free SEO Audit</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
