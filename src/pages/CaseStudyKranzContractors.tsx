import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import kranzcontractorsLogo from "@/assets/kranzcontractors-logo.webp";
import kranzcontractorsMacview from "@/assets/kranzcontractors-macview.webp";

const CaseStudyKranzContractors = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Kranz Contractors Case Study | Home Improvement Web Design & SEO</title>
        <meta
          name="description"
          content="How we helped Kranz Contractors increase local leads by 210% and cut lead costs in half through web design, SEO, and PPC optimization."
        />
        <meta property="og:title" content="Kranz Contractors Case Study | Home Improvement Web Design & SEO" />
        <meta
          property="og:description"
          content="How we helped Kranz Contractors increase local leads by 210% and cut lead costs in half through web design, SEO, and PPC optimization."
        />
        <meta property="og:image" content={kranzcontractorsMacview} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom max-w-4xl text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <img
                src={kranzcontractorsLogo}
                alt="Kranz Contractors logo"
                className="h-auto w-[120px] md:w-[180px] object-contain"
              />
            </div>

            {/* Title */}
            <h1 className="mb-6">Kranz Contractors — Home Improvement Web Design & Local SEO</h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Modern website + local SEO that increased leads by 210% and cut ad costs in half.
            </p>

            {/* MacBook Mockup */}
            <div className="mb-6">
              <img
                src={kranzcontractorsMacview}
                alt="MacBook mockup showing Kranz Contractors website homepage"
                className="w-full max-w-[1100px] mx-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Caption */}
            <p className="text-sm text-muted-foreground italic">
              Modern, performance-optimized web design for Kranz Contractors.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kranz Contractors is a Utah-based home services company specializing in gutter covers, junk removal, and exterior maintenance. Their business was growing through word-of-mouth, but their online presence wasn't generating consistent leads or local visibility.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              We were brought in to rebuild their entire digital foundation — creating a professional website, optimizing for search, and implementing paid ads that drove measurable ROI.
            </p>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Before working with us, Kranz Contractors had:
            </p>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>No clear digital strategy or consistent branding</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>A static website with low conversion rates and limited local visibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Inconsistent Google Business Profile performance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Inefficient ad campaigns that weren't driving qualified calls</span>
              </li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              They needed a modern site built to convert and a strategy that would turn ad spend into predictable leads.
            </p>
          </div>
        </section>

        {/* Our Solution Section */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Our Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We approached the project holistically — focusing on design, visibility, and measurable performance.
            </p>
            <p className="text-lg font-semibold mb-4">What we implemented:</p>
            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-xl font-bold mb-2">Website Redesign</h3>
                <p className="text-muted-foreground">
                  Built a fast, mobile-optimized website with service-specific pages for gutter covers, junk removal, and exterior work.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-xl font-bold mb-2">Local SEO</h3>
                <p className="text-muted-foreground">
                  Optimized on-page content and Google Business Profile for "gutter cover installation," "junk removal near me," and city-based keywords.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-xl font-bold mb-2">PPC Campaigns</h3>
                <p className="text-muted-foreground">
                  Designed targeted Google Ads campaigns with custom landing pages to improve ad relevance and lower cost per lead.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-xl font-bold mb-2">Lead Tracking System</h3>
                <p className="text-muted-foreground">
                  Implemented form + call tracking to measure conversions accurately and identify high-performing channels.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-xl font-bold mb-2">Performance Reporting</h3>
                <p className="text-muted-foreground">
                  Created ongoing dashboards to track search rankings, lead volume, and ad ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-8 text-center">Results</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              In the first 90 days after launch:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-premium p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">+210%</div>
                <p className="text-muted-foreground">Increase in inbound leads from organic + paid sources</p>
              </div>
              <div className="card-premium p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">Top 3</div>
                <p className="text-muted-foreground">Local map pack rankings for gutter-related keywords</p>
              </div>
              <div className="card-premium p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">-52%</div>
                <p className="text-muted-foreground">Lower cost per lead via ad optimizations</p>
              </div>
              <div className="card-premium p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">3.2×</div>
                <p className="text-muted-foreground">Website conversion rate increase, driving consistent service calls</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-8 text-center">Key Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg">Clean, conversion-optimized website redesign</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg">Local SEO dominance in their service area</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg">Smart PPC campaigns reducing lead costs</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg">Transparent reporting and ROI visibility</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-3xl text-center">
            <blockquote className="text-2xl font-serif italic text-foreground mb-6">
              "Our new website and Google campaigns have completely changed our lead flow. We're ranking locally and getting consistent calls every week."
            </blockquote>
            <p className="text-muted-foreground font-medium">— Kranz Contractors Team</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-6">Ready to grow your local service business?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We design and optimize websites that turn local searches into real phone calls and qualified leads.
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

export default CaseStudyKranzContractors;
