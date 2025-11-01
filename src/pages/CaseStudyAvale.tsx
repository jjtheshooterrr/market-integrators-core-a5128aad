import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import avaleLogo from "@/assets/avale-logo.webp";
import avalemusicview from "@/assets/avalemusicview.webp";

const CaseStudyAvale = () => {
  const keyHighlights = [
    "Dark, atmospheric design with subtle glow accents",
    "Streamlined fan journey: discover → listen → follow",
    "Mobile-first performance and clean typography",
    "Easy to update with future releases",
  ];

  const solutions = [
    "Sleek, single-page experience with clear sections for releases and visuals",
    "Dark, neon-accented aesthetic to match the sound and brand mark",
    "Central 'Listen Now' actions routing to Spotify, Apple, TikTok, and YouTube",
    "Fast, responsive layout for mobile and EPK use",
  ];

  const results = [
    "Unified brand hub that strengthens first impressions",
    "Higher click-through to streaming platforms from a single 'home base'",
    "More time on page vs. previous link aggregators",
    "Polished, professional presence for collaborations and media",
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AVALE Case Study | Artist Website Redesign & Branding</title>
        <meta
          name="description"
          content="We designed a dark, immersive website for AVALE that unifies music, visuals, and streaming into one branded hub."
        />
        <meta property="og:title" content="AVALE Case Study | Artist Website Redesign & Branding" />
        <meta
          property="og:description"
          content="We designed a dark, immersive website for AVALE that unifies music, visuals, and streaming into one branded hub."
        />
        <meta property="og:image" content={avalemusicview} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom max-w-5xl text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <img src={avaleLogo} alt="AVALE logo" className="h-32 md:h-40 w-auto object-contain" />
            </div>

            {/* Title & Subhead */}
            <h1 className="mb-4">AVALE — Official Artist Website Redesign</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A dark, immersive artist site that unifies music, visuals, and streaming in one branded hub.
            </p>
          </div>
        </section>

        {/* MacBook Mockup Visual */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-6xl">
            <div className="rounded-xl overflow-hidden shadow-2xl animate-fade-in">
              <img src={avalemusicview} alt="MacBook mockup of AVALE website homepage" className="w-full h-auto" />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Immersive, performance-optimized redesign for officialavale.com
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AVALE is an independent electronic artist and producer known for cinematic sound design and high-impact
              visuals. He needed a cohesive web presence that looked and felt like his music—minimal, futuristic, and
              unmistakably AVALE.
            </p>
          </div>
        </section>

        {/* Challenge */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AVALE relied on fragmented links and inconsistent branding across platforms. There wasn't a unified place
              for fans and industry to experience the music, see new releases, and connect across channels.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Our Solution</h2>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 text-lg text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Results */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">The Results</h2>
            <ul className="space-y-4">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-3 text-lg text-muted-foreground">
                  <span className="text-primary mt-1">✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-8 text-center">Key Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyHighlights.map((highlight, index) => (
                <div key={index} className="card-premium p-6 text-center hover:shadow-lg transition-shadow">
                  <p className="text-muted-foreground">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-8">Want an artist site that feels like your sound?</h2>
            <Button asChild size="lg" variant="secondary" className="btn-text">
              <Link to="/contact-us">Request Proposal</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyAvale;
