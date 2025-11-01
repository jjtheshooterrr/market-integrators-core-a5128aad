import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import aprenovationsLogo from "@/assets/aprenovations-logo.webp";
import avaleLogo from "@/assets/avale-logo.webp";

const CaseStudies = () => {
  // Client logos data
  const clientLogos = [
    { 
      name: "A&P Renovations", 
      logo: aprenovationsLogo, 
      link: "/case-studies/aprenovations" 
    },
    { 
      name: "AVALE", 
      logo: avaleLogo,
      link: "/case-studies/avale" 
    },
    { 
      name: "TestMyPools", 
      logo: aprenovationsLogo, // Placeholder - replace with actual logo
      link: "#" 
    },
    { 
      name: "ControllerRepairs", 
      logo: aprenovationsLogo, // Placeholder - replace with actual logo
      link: "#" 
    },
  ];

  // Featured case studies
  const featuredCaseStudies = [
    {
      logo: aprenovationsLogo,
      title: "A&P Renovations — Ogden, Utah",
      description: "A full digital refresh with web design and local SEO that tripled quote requests and earned Top-3 rankings.",
      link: "/case-studies/aprenovations"
    },
    {
      logo: avaleLogo,
      title: "AVALE — Official Artist Website",
      description: "A dark, immersive artist site that unifies music, visuals, and streaming into one branded hub.",
      link: "/case-studies/avale"
    }
  ];

  const scrollToLogos = () => {
    const element = document.getElementById('logo-showcase');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Section 1: Hero / Intro */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom text-center max-w-4xl">
            <h1 className="mb-6">Real Results. Real Businesses.</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We help brands grow through strategic digital marketing, clean design, and measurable results.
              Explore some of the success stories from companies we've partnered with.
            </p>
            
            {/* Small client name list */}
            <div className="text-sm text-muted-foreground mb-8 flex items-center justify-center gap-2 flex-wrap">
              {clientLogos.map((client, index) => (
                <span key={client.name}>
                  {client.name}
                  {index < clientLogos.length - 1 && <span className="mx-2">•</span>}
                </span>
              ))}
            </div>

            <Button 
              onClick={scrollToLogos}
              size="lg" 
              variant="outline"
              className="group"
            >
              View Our Client Success Stories
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </section>

        {/* Section 2: Brand Logo Showcase */}
        <section id="logo-showcase" className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
              {clientLogos.map((client) => (
                <Link
                  key={client.name}
                  to={client.link}
                  className="group flex items-center justify-center p-6 rounded-lg hover:bg-background transition-all duration-300"
                  title="View Case Study →"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-16 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Case Study Overview Paragraph */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="mb-6">Behind every project is a measurable win.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether it's helping a contractor dominate local search, an eCommerce store boost conversions, 
              or a SaaS platform launch with traction — each partnership tells a story of growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Our case studies highlight real outcomes across industries like construction, wellness, retail, and tech.
            </p>
          </div>
        </section>

        {/* Section 4: Featured Case Study Highlight */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-5xl">
            <h2 className="text-center mb-12">Featured Success Stories</h2>
            <div className="grid md:grid-cols-1 gap-8">
              {featuredCaseStudies.map((caseStudy, index) => (
                <div 
                  key={index}
                  className="card-premium p-10 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="flex-shrink-0">
                      <img 
                        src={caseStudy.logo} 
                        alt={caseStudy.title}
                        className="h-20 w-auto object-contain"
                      />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {caseStudy.description}
                      </p>
                      <Button asChild variant="default">
                        <Link to={caseStudy.link}>Read Case Study →</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: CTA Footer */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-6">Want to be our next success story?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's talk about how we can turn your goals into measurable results.
            </p>
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

export default CaseStudies;
