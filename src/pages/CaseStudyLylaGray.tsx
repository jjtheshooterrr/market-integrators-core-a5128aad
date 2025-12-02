import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import lylagrayLogo from "@/assets/lylagray-logo.webp";
import lylagrayMacview from "@/assets/lylagray-macview.webp";
import { OptimizedImage } from "@/components/OptimizedImage";

const CaseStudyLylaGray = () => {
  return (
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
                  <BreadcrumbPage>Lyla Gray</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom max-w-4xl">

            <div className="text-center mb-12">
              <img
                src={lylagrayLogo}
                alt="Lyla Gray - Personal Brand and Creator logo"
                className="h-32 md:h-40 w-auto mx-auto mb-8 object-contain"
                loading="eager"
              />
              <h1 className="mb-4">Lyla Gray</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Adult Model / Creator
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="px-4 py-2 bg-primary/10 rounded-full">Personal Brand Web Design</span>
                <span className="px-4 py-2 bg-primary/10 rounded-full">Subscription System</span>
                <span className="px-4 py-2 bg-primary/10 rounded-full">SEO</span>
                <span className="px-4 py-2 bg-primary/10 rounded-full">Privacy & Compliance</span>
                <span className="px-4 py-2 bg-primary/10 rounded-full">Monetization Automation</span>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-2xl mb-8">
              <OptimizedImage
                src={lylagrayMacview}
                alt="MacBook Pro displaying Lyla Gray official website with exclusive content gallery"
                className="w-full h-auto"
              />
              <p className="text-center text-sm text-muted-foreground mt-4 italic">
                Private, brand-forward site built for adult creators.
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lyla Gray is an adult model and creator building a premium personal brand centered on exclusivity,
              confidence, and visual storytelling. She needed a private, professional website to showcase work, route
              traffic from social platforms, and manage a growing fanbase with privacy and control.
            </p>
          </div>
        </section>

        {/* The Challenge */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">The Challenge</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>Before working with us, Lyla Gray faced several limitations:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Dependent on third-party platforms with high fees and limited brand control</li>
                <li>No personal domain to own audience or improve SEO</li>
                <li>Fragmented fan journey (links everywhere, low conversion)</li>
                <li>Minimal privacy/content protections (no watermarking, weak access control)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Our Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We built a comprehensive digital platform that gives Lyla complete control over her brand and revenue.
            </p>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-foreground">Custom Brand Site:</strong> Bold, minimalist design with
                  controlled galleries/teasers and clear CTAs to join/support.
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-foreground">Subscription & Access:</strong> Direct payments with member-only
                  content areas and account gating.
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-foreground">Privacy & Compliance:</strong> Watermarking, right-click
                  protections, age/consent disclaimers, and DMCA guidance.
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-foreground">Traffic Funnel:</strong> Unified hub connecting Instagram, X, and
                  premium platforms for higher conversion.
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-foreground">SEO & Metadata:</strong> Search-friendly structure to rank for
                  name + brand queries and press features.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-8 text-center">Results</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-premium p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">+190%</div>
                <p className="text-muted-foreground">Direct traffic from social within 60 days</p>
              </div>
              <div className="card-premium p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">Higher</div>
                <p className="text-muted-foreground">Fan retention through branded experience</p>
              </div>
              <div className="card-premium p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">Independent</div>
                <p className="text-muted-foreground">Monetization (reduced platform fees)</p>
              </div>
              <div className="card-premium p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">Zero</div>
                <p className="text-muted-foreground">Leakage incidents post-launch</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground">
                Elevated brand credibility for collaborations and media features
              </p>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-8 text-center">Key Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Explicitly positioned as adult model (professional, non-explicit presentation)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Subscription-ready system with direct payouts</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Built-in privacy, age disclaimers, and takedown support</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Clean, mobile-first UX that converts social traffic</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-6">Building your own creator platform?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We launch independent, privacy-first websites for adult creators with subscription systems and complete
              brand control.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact-us">Request Proposal</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyLylaGray;
