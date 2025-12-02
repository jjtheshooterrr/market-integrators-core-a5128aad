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
import mega101Logo from "@/assets/mega101-logo.webp";
import { OptimizedImage } from "@/components/OptimizedImage";

const CaseStudyMega101 = () => {
  const solutions = [
    { title: "Crisis-Moment Digital Newsroom", description: "Built rapid-response strategy" },
    { title: "Short-Form Vertical Content", description: "Deployed across platforms" },
    { title: "Cultural Trends Integration", description: "Entertainment trends woven into posts" }
  ];

  const results = [
    { metric: "+717%", label: "weekly impressions" },
    { metric: "+807%", label: "follower lift in one week" },
    { metric: "Record", label: "engagement spikes" }
  ];

  const keyHighlights = [
    { title: "Bilingual crisis coverage workflows" },
    { title: "Rapid content adaptation for cultural events" },
    { title: "Short-form growth strategy" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Mega 101 Digital Acceleration & Crisis Coverage",
    "author": { "@type": "Organization", "name": "Market Integrators" },
    "about": "Case study detailing digital audience expansion for Mega 101, Houston's premier Latin radio station, with bilingual engagement and cultural relevance at scale.",
    "publisher": { "@type": "Organization", "name": "Market Integrators" },
    "url": "https://www.marketintegrators.com/case-studies/mega-101",
    "inLanguage": "en",
    "genre": "Marketing Case Study"
  };

  return (
    <>
      <Helmet>
        <title>Mega 101 Case Study - Digital Audience Expansion | Market Integrators</title>
        <meta
          name="description"
          content="Bilingual engagement and cultural relevance at scale. Achieved 807% follower lift in one week and 717% increase in weekly impressions."
        />
        <meta property="og:title" content="Mega 101 Case Study - Digital Acceleration & Crisis Coverage" />
        <meta property="og:description" content="Digital transformation for Houston's premier Latin radio station" />
        <meta property="og:image" content={mega101Logo} />
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
                    <BreadcrumbPage>Mega 101</BreadcrumbPage>
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
                  src={mega101Logo}
                  alt="Mega 101 - Houston Latin Radio Station logo"
                  className="w-[170px] md:w-[170px] h-auto"
                  loading="eager"
                />
              </div>

              <h1 className="mb-4">Mega 101 — Digital Audience Expansion</h1>

              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Bilingual engagement and cultural relevance at scale.
              </p>
            </div>
          </section>

          {/* Overview */}
          <section className="section-padding">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mega 101, Houston's premier Latin radio station, wanted to expand its bilingual reach and improve responsiveness during cultural and crisis events.
              </p>
            </div>
          </section>

          {/* The Challenge */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Low engagement and lack of rapid-response digital content systems.
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

          {/* CTA Footer */}
          <section className="section-padding bg-foreground text-primary-foreground">
            <div className="container-custom text-center max-w-3xl">
              <h2 className="text-primary-foreground mb-4">Build a digital newsroom that moves as fast as your audience</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Create rapid-response systems for cultural moments.
              </p>
              <Button asChild size="lg" variant="secondary" className="btn-text">
                <Link to="/contact-us">Start Your Growth Plan</Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CaseStudyMega101;
