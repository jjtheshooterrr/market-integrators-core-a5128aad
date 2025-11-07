import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import controllerrepairsLogo from "@/assets/controllerrepairs-logo.webp";
import avaleLogo from "@/assets/avale-logo.webp";
import testmypoolsLogo from "@/assets/testmypools-logo.webp";
import kranzcontractorsLogo from "@/assets/kranzcontractors-logo.webp";
import audacyLogo from "@/assets/audacy-logo.webp";
import mega101Logo from "@/assets/mega101-logo.webp";
import aprenovationsLogo from "@/assets/aprenovations-logo.webp";
import thebullLogo from "@/assets/thebull-logo.webp";
import imperialjewelryLogo from "@/assets/imperialjewelryshoplogo (1).webp";
import crewcoLogo from "@/assets/crewco-logo.webp";
import sportsradio610Logo from "@/assets/sportsradio610-logo.webp";
import pathway2peaceLogo from "@/assets/pathway2peace-logo.webp";
import lonestarzentLogo from "@/assets/lonestarzent-logo.webp";
import northernutahwindowwellsLogo from "@/assets/northernutahwindowwells-logo.webp";
import lylagrayLogo from "@/assets/lylagray-logo.webp";

const CaseStudies = () => {
  // Client logos data (scrambled)
  const clientLogos = [
    {
      name: "Audacy Houston",
      logo: audacyLogo,
      link: "/case-studies/audacy-houston",
    },
    {
      name: "ControllerRepairs",
      logo: controllerrepairsLogo,
      link: "/case-studies/controllerrepairs",
    },
    {
      name: "Lyla Gray",
      logo: lylagrayLogo,
      link: "/case-studies/lylagray",
    },
    {
      name: "A&P Renovations",
      logo: aprenovationsLogo,
      link: "/case-studies/aprenovations",
    },
    {
      name: "TestMyPools",
      logo: testmypoolsLogo,
      link: "/case-studies/testmypools",
    },
    {
      name: "Mega 101",
      logo: mega101Logo,
      link: "/case-studies/mega-101",
    },
    {
      name: "Northern Utah Window Wells",
      logo: northernutahwindowwellsLogo,
      link: "/case-studies/northern-utah-window-wells",
    },
    {
      name: "Crewco Events",
      logo: crewcoLogo,
      link: "/case-studies/crewco-events",
    },
    {
      name: "Pathway2Peace",
      logo: pathway2peaceLogo,
      link: "/case-studies/pathway-to-peace",
    },
    {
      name: "The Bull Houston",
      logo: thebullLogo,
      link: "/case-studies/the-bull-houston",
    },
    {
      name: "Imperial Jewelry",
      logo: imperialjewelryLogo,
      link: "/case-studies/imperial-jewelry",
    },
    {
      name: "LoneStarz Entertainment",
      logo: lonestarzentLogo,
      link: "/case-studies/lonestarzentertainment",
    },
    {
      name: "SportsRadio 610",
      logo: sportsradio610Logo,
      link: "/case-studies/sportsradio-610",
    },
    {
      name: "Kranz Contractors",
      logo: kranzcontractorsLogo,
      link: "/case-studies/kranz-contractors",
    },
    {
      name: "AVALE",
      logo: avaleLogo,
      link: "/case-studies/avalemusic",
    },
  ];

  // Featured case studies (scrambled)
  const featuredCaseStudies = [
    {
      logo: controllerrepairsLogo,
      title: "ControllerRepairs.com — eCommerce, Automation & Dashboard System",
      description:
        "Fast, automated eCommerce and repair platform — boosting sales by 240% and cutting manual work in half through automation and smart dashboards.",
      link: "/case-studies/controllerrepairs",
    },
    {
      logo: thebullLogo,
      title: "The Bull Houston — Country Brand Modernization",
      description:
        "Transforming a heritage radio brand into a digital engagement leader. Achieved 20,000 new followers and 1.2M+ video views.",
      link: "/case-studies/the-bull-houston",
    },
    {
      logo: kranzcontractorsLogo,
      title: "Kranz Contractors — Home Improvement Web Design & SEO",
      description:
        "Modern website + local SEO that increased leads by 210% and cut ad costs in half through strategic optimization.",
      link: "/case-studies/kranz-contractors",
    },
    {
      logo: avaleLogo,
      title: "AVALE — Official Artist Website",
      description: "A dark, immersive artist site that unifies music, visuals, and streaming into one branded hub.",
      link: "/case-studies/avalemusic",
    },
    {
      logo: testmypoolsLogo,
      title: "TestMyPools — Full AI SaaS Creation & Product Launch",
      description:
        "Complete AI SaaS platform built from concept to launch — integrating Google Vision, LLM APIs, and full subscription automation.",
      link: "/case-studies/testmypools",
    },
    {
      logo: audacyLogo,
      title: "Audacy Houston — Digital Media Transformation",
      description:
        "Transforming Houston's top radio stations into modern, social-first digital powerhouses. Achieved 3.5M+ video views and 400%+ increase in average watch time.",
      link: "/case-studies/audacy-houston",
    },
    {
      logo: lylagrayLogo,
      title: "Lyla Gray — Adult Model Brand Website & Subscription System",
      description:
        "Private, professional creator platform with subscription access, privacy protections, and direct monetization that boosted direct traffic 190%.",
      link: "/case-studies/lylagray",
    },
    {
      logo: crewcoLogo,
      title: "Crewco Events — Website Redesign & Local SEO",
      description:
        "Complete website redesign and local SEO strategy that increased organic traffic 132% and earned top 3 rankings for key Houston event production keywords.",
      link: "/case-studies/crewco-events",
    },
    {
      logo: imperialjewelryLogo,
      title: "Imperial Jewelry — Luxury eCommerce Web Design & Brand Identity",
      description:
        "Luxury-grade eCommerce redesign that doubled online sales through elegant design, conversion optimization, and strategic SEO.",
      link: "/case-studies/imperial-jewelry",
    },
    {
      logo: aprenovationsLogo,
      title: "A&P Renovations — General Contractor and Home Renovation Expert",
      description:
        "A full digital refresh with web design and local SEO that tripled quote requests and earned Top-3 rankings.",
      link: "/case-studies/aprenovations",
    },
    {
      logo: mega101Logo,
      title: "Mega 101 — Digital Acceleration & Crisis Coverage",
      description:
        "Bilingual engagement and cultural relevance at scale. Achieved 807% follower lift in one week and 717% increase in weekly impressions.",
      link: "/case-studies/mega-101",
    },
    {
      logo: pathway2peaceLogo,
      title: "Pathway2Peace — Mental Health Website & HR Automation",
      description:
        "Calming, accessible web redesign + a custom onboarding & payroll system that saves 10+ hours every week.",
      link: "/case-studies/pathway-to-peace",
    },
    {
      logo: lonestarzentLogo,
      title: "LoneStarz Entertainment — Web Design & Booking Automation",
      description:
        "Visually dynamic entertainment website with automated booking system that tripled inquiries and improved brand consistency.",
      link: "/case-studies/lonestarzentertainment",
    },
    {
      logo: sportsradio610Logo,
      title: "SportsRadio 610 — YouTube & Social Growth Strategy",
      description:
        "Turning broadcast moments into viral short-form sports content. Achieved 1.43M+ YouTube views and 100% engagement growth in under 8 months.",
      link: "/case-studies/sportsradio-610",
    },
    {
      logo: northernutahwindowwellsLogo,
      title: "Northern Utah Window Wells — Local SEO & Seasonal Campaigns",
      description:
        "High-converting local website that boosted organic traffic 260% and stabilized seasonal lead flow through automated campaigns.",
      link: "/case-studies/northern-utah-window-wells",
    },
  ];

  const scrollToLogos = () => {
    const element = document.getElementById("logo-showcase");
    element?.scrollIntoView({ behavior: "smooth" });
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
              We help brands grow through strategic digital marketing, clean design, and measurable results. Explore
              some of the success stories from companies we've partnered with.
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

            <Button onClick={scrollToLogos} size="lg" variant="outline" className="group">
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
              Whether it's helping a contractor dominate local search, an eCommerce store boost conversions, or a SaaS
              platform launch with traction — each partnership tells a story of growth.
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
                <div key={index} className="card-premium p-10 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="flex-shrink-0">
                      <img src={caseStudy.logo} alt={caseStudy.title} className="h-20 w-auto object-contain" />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{caseStudy.description}</p>
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
