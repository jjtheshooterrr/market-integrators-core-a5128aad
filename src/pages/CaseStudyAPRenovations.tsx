import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, FileText, Award, Target } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import aprenovationsLogo from "@/assets/aprenovations-logo.webp";
import aprenovationsMacview from "@/assets/aprenovationsmacview.webp";
const CaseStudyAPRenovations = () => {
  const stats = [{
    label: "+220% Organic Traffic",
    sublabel: "60 days"
  }, {
    label: "3× Quote Requests",
    sublabel: ""
  }, {
    label: "Top-3 Rankings",
    sublabel: "in Ogden"
  }, {
    label: "Higher Lead Quality",
    sublabel: ""
  }];
  const keyHighlights = ["Modern site that tells the project story with proof (photos, reviews, before/after)", "Local SEO foundation that compounds over time", "Clear, simple inquiry flow that increased conversion rate", "Analytics to tie leads back to channels and keywords"];
  const services = ["Website Design & Build", "Local SEO (On-Page + Google Business Profile)", "Conversion Rate Optimization (CRO)", "Analytics & Conversion Tracking", "Ongoing Reporting & Optimization"];
  return <div className="min-h-screen">
      <Helmet>
        <title>A&P Renovations Case Study | Web Design & Local SEO (Ogden)</title>
        <meta name="description" content="How we tripled quote requests for A&P Renovations in Ogden with a modern website, local SEO, and conversion tracking." />
        <meta property="og:title" content="A&P Renovations — Case Study (Ogden, UT)" />
        <meta property="og:description" content="Website redesign + local SEO → Top-3 rankings and 3× quote requests in 60 days." />
        <meta property="og:image" content={aprenovationsMacview} />
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
                  <BreadcrumbPage>A&P Renovations</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom max-w-5xl text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <img src={aprenovationsLogo} alt="A&P Renovations logo" className="h-32 w-auto object-contain" />
            </div>

            {/* Title */}
            <h1 className="mb-4">A&P Renovations General Contractor and Home Renovation Expert</h1>

            {/* Subhead */}
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">A full digital refresh—modern web design, local SEO, and lead capture systems that tripled quote requests and pushed A&P Renovations into top local search results.</p>

            {/* Stats Pills */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => <div key={index} className="card-premium p-6 text-center">
                  <div className="font-bold text-lg text-primary mb-1">{stat.label}</div>
                  {stat.sublabel && <div className="text-sm text-muted-foreground">{stat.sublabel}</div>}
                </div>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-text">
                
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-text">
                
              </Button>
            </div>
          </div>
        </section>

        {/* MacBook Mockup Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom max-w-6xl">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={aprenovationsMacview} alt="MacBook mockup showing the A&P Renovations website homepage with a modern kitchen remodel" className="w-full h-auto" />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6 italic">
              Modern, responsive website design highlighting A&P Renovations' craftsmanship and services.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A&P Renovations is an Ogden, Utah–based general contracting company specializing in full home remodels,
              kitchen and bathroom upgrades, and residential renovations. Known for their craftsmanship and reliability,
              they wanted to move beyond referrals and build a consistent pipeline of high-quality leads online.
            </p>
          </div>
        </section>

        {/* The Challenge */}
        <section className="section-padding bg-secondary/20">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">The Challenge</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Outdated website with limited project storytelling and weak conversion paths</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Inconsistent search visibility in Ogden and Northern Utah</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>No structured lead capture or tracking to measure ROI</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  Competitors outranking them for high-intent local keywords (e.g., "kitchen remodel Ogden," "bathroom
                  remodel Ogden")
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-8">Our Solution</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Website & Brand Presentation</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Built a clean, responsive site with before/after galleries, service pages, and trust signals (reviews,
                  badges, warranties). Clarified service areas (Ogden, Weber County, Northern Utah) to match how
                  customers search.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Local SEO & Content</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Optimized Google Business Profile (categories, services, photos, Q&A). On-page SEO for priority
                  keywords and neighborhoods. Created SEO-focused service pages and location cues to support local
                  intent.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Conversion & Analytics</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Added prominent quote-request CTA, click-to-call, and short "Get a Bid" form. Set up conversion
                  tracking for calls, form submissions, and quote requests. Monthly reporting with keyword movement,
                  traffic, and lead outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="section-padding bg-secondary/20">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-8">Results (first 60 days)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-premium p-8">
                <TrendingUp className="text-primary mb-4" size={40} />
                <div className="text-3xl font-bold text-primary mb-2">+220%</div>
                <div className="font-semibold mb-2">Organic Traffic</div>
                <p className="text-muted-foreground text-sm">Increase to key service pages</p>
              </div>

              <div className="card-premium p-8">
                <Award className="text-primary mb-4" size={40} />
                <div className="text-3xl font-bold text-primary mb-2">Top-3</div>
                <div className="font-semibold mb-2">Google Rankings</div>
                <p className="text-muted-foreground text-sm">For multiple Ogden remodeling terms</p>
              </div>

              <div className="card-premium p-8">
                <Target className="text-primary mb-4" size={40} />
                <div className="text-3xl font-bold text-primary mb-2">3×</div>
                <div className="font-semibold mb-2">Quote Requests</div>
                <p className="text-muted-foreground text-sm">With stronger job sizes</p>
              </div>

              <div className="card-premium p-8">
                <FileText className="text-primary mb-4" size={40} />
                <div className="text-3xl font-bold text-primary mb-2">Higher</div>
                <div className="font-semibold mb-2">Lead Quality</div>
                <p className="text-muted-foreground text-sm">More on-site estimates booked</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-8">Key Highlights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {keyHighlights.map((highlight, index) => <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-muted-foreground">{highlight}</span>
                </div>)}
            </div>
          </div>
        </section>

        {/* Services Delivered */}
        <section className="section-padding bg-secondary/20">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-8">Services Delivered</h2>
            <div className="space-y-3">
              {services.map((service, index) => <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border">
                  <span className="text-primary">→</span>
                  <span className="font-medium">{service}</span>
                </div>)}
            </div>
          </div>
        </section>

        {/* Timeline */}
        

        {/* Testimonial */}
        <section className="section-padding bg-secondary/20">
          <div className="container-custom max-w-4xl">
            <div className="card-premium p-12">
              <div className="text-6xl text-primary mb-6">"</div>
              <p className="text-2xl mb-8 leading-relaxed text-muted-foreground">
                Market Integrators transformed how we get leads—within weeks we were ranking in Ogden and booking steady
                projects through the site.
              </p>
              <div>
                <div className="font-bold text-lg">A&P Renovations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-4xl">
            <h2 className="text-primary-foreground mb-6">Ready to turn your website into a lead machine?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              We help home service brands win local search and convert traffic into booked jobs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="btn-text">
                <Link to="/contact-us">Request a Proposal</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-text border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default CaseStudyAPRenovations;