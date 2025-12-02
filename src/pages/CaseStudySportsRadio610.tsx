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
import sportsradio610Logo from "@/assets/sportsradio610-logo.webp";
import { OptimizedImage } from "@/components/OptimizedImage";

const CaseStudySportsRadio610 = () => {
  const solutions = [
    { title: "Short-Form Systems", description: "Built for YouTube, Instagram, and TikTok" },
    { title: "Content Playbooks", description: "Created for hosts and producers" },
    { title: "Local Sports Coverage", description: "Strategic approach for engagement peaks" }
  ];

  const results = [
    { metric: "1.43M+", label: "YouTube views" },
    { metric: "+4,200", label: "subscribers" },
    { metric: "+406%", label: "watch time increase" },
    { metric: "100%", label: "engagement growth in <8 months" }
  ];

  const keyHighlights = [
    { title: "Viral short-form content formats" },
    { title: "Talent-based content workflows" },
    { title: "Data-driven creative testing" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "SportsRadio 610 Digital Content Transformation",
    "author": { "@type": "Organization", "name": "Market Integrators" },
    "about": "Case study detailing YouTube and social growth strategy for SportsRadio 610, turning broadcast moments into viral short-form sports content.",
    "publisher": { "@type": "Organization", "name": "Market Integrators" },
    "url": "https://www.marketintegrators.com/case-studies/sportsradio-610",
    "inLanguage": "en",
    "genre": "Marketing Case Study"
  };

  return (
    <>
      <Helmet>
        <title>SportsRadio 610 Case Study - YouTube & Social Growth | Market Integrators</title>
        <meta
          name="description"
          content="Turning broadcast moments into viral short-form sports content. Achieved 1.43M+ YouTube views and 100% engagement growth in under 8 months."
        />
        <meta property="og:title" content="SportsRadio 610 Case Study - YouTube & Social Growth Strategy" />
        <meta property="og:description" content="Digital content transformation for Houston sports radio" />
        <meta property="og:image" content={sportsradio610Logo} />
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
                    <BreadcrumbPage>SportsRadio 610</BreadcrumbPage>
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
                  src={sportsradio610Logo}
                  alt="SportsRadio 610 - Houston Sports Talk Radio logo"
                  className="w-[170px] md:w-[170px] h-auto"
                  loading="eager"
                />
              </div>

              <h1 className="mb-4">SportsRadio 610 — YouTube & Social Growth Strategy</h1>

              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Turning broadcast moments into viral short-form sports content.
              </p>
            </div>
          </section>

          {/* Overview */}
          <section className="section-padding">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SportsRadio 610 needed a digital overhaul to expand beyond radio and capture younger, online-first audiences.
              </p>
            </div>
          </section>

          {/* The Challenge */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lack of video presence, inconsistent posting, and no digital framework for talent-driven clips.
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
              <h2 className="text-primary-foreground mb-4">Let's take your brand from broadcast to viral</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Transform your traditional media into engaging digital content.
              </p>
              <Button asChild size="lg" variant="secondary" className="btn-text">
                <Link to="/contact-us">Schedule a Consultation</Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CaseStudySportsRadio610;
