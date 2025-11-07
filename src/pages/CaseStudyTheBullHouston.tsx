import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import thebullLogo from "@/assets/thebull-logo.webp";

const CaseStudyTheBullHouston = () => {
  const solutions = [
    { title: "Refreshed Visual Identity", description: "Updated tone and design for digital" },
    { title: "Vertical Story Transformation", description: "Converted radio highlights into engaging stories" },
    { title: "Country Lifestyle Content", description: "Focused on relatable audience experiences" }
  ];

  const results = [
    { metric: "+20,000", label: "new followers" },
    { metric: "1.2M+", label: "video views" },
    { metric: "Sustained", label: "social engagement lift" }
  ];

  const keyHighlights = [
    { title: "Country lifestyle-driven content rebrand" },
    { title: "Short-form storytelling system" },
    { title: "Consistent week-over-week audience growth" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "The Bull Houston Country Radio Digital Growth",
    "author": { "@type": "Organization", "name": "Market Integrators" },
    "about": "Case study detailing country brand modernization for The Bull Houston, transforming a heritage radio brand into a digital engagement leader.",
    "publisher": { "@type": "Organization", "name": "Market Integrators" },
    "url": "https://www.marketintegrators.com/case-studies/the-bull-houston",
    "inLanguage": "en",
    "genre": "Marketing Case Study"
  };

  return (
    <>
      <Helmet>
        <title>The Bull Houston Case Study - Country Brand Modernization | Market Integrators</title>
        <meta 
          name="description" 
          content="Transforming a heritage radio brand into a digital engagement leader. Achieved 20,000 new followers and 1.2M+ video views." 
        />
        <meta property="og:title" content="The Bull Houston Case Study - Country Radio Digital Growth" />
        <meta property="og:description" content="Digital modernization for Houston's country radio station" />
        <meta property="og:image" content={thebullLogo} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-b from-secondary to-background">
            <div className="container-custom max-w-5xl text-center">
              <div className="mb-8 flex justify-center">
                <img
                  src={thebullLogo}
                  alt="The Bull Houston logo"
                  className="w-[170px] md:w-[170px] h-auto"
                />
              </div>

              <h1 className="mb-4">The Bull Houston — Country Brand Modernization</h1>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Transforming a heritage radio brand into a digital engagement leader.
              </p>
            </div>
          </section>

          {/* Overview */}
          <section className="section-padding">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Bull Houston wanted to re-energize its social presence and connect authentically with a younger, digital-first country audience.
              </p>
            </div>
          </section>

          {/* The Challenge */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Outdated content approach and underperformance on video platforms.
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
                    <span className="text-primary">✅</span>
                    <span>{highlight.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA Footer */}
          <section className="section-padding bg-foreground text-primary-foreground">
            <div className="container-custom text-center max-w-3xl">
              <h2 className="text-primary-foreground mb-4">Let's reimagine your brand for the digital country era</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Connect authentically with your digital-first audience.
              </p>
              <Button asChild size="lg" variant="secondary" className="btn-text">
                <Link to="/contact-us">Book a Creative Session</Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CaseStudyTheBullHouston;
