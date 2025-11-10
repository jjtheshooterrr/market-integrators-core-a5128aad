import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import pathway2peaceLogo from "@/assets/pathway2peace-logo.webp";
import pathway2peaceMacview from "@/assets/pathway2peace-macview.webp";

const CaseStudyPathway2Peace = () => {
  return (
    <>
      <Helmet>
        <title>Pathway2Peace Case Study | Mental Health Web Design & HR Automation</title>
        <meta
          name="description"
          content="Calming, accessible redesign plus a custom onboarding & payroll system that saves 10+ hours weekly—Pathway2Peace's patient growth and efficiency, explained."
        />
        <meta property="og:title" content="Pathway2Peace Case Study | Mental Health Web Design & HR Automation" />
        <meta
          property="og:description"
          content="Calming, accessible redesign plus a custom onboarding & payroll system that saves 10+ hours weekly—Pathway2Peace's patient growth and efficiency, explained."
        />
        <meta property="og:image" content={pathway2peaceMacview} />
        <meta property="og:type" content="article" />
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
                    <BreadcrumbPage>Pathway2Peace</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </section>

          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-b from-secondary to-background">
            <div className="container-custom max-w-5xl text-center">
              {/* Logo */}
              <div className="mb-8 flex justify-center">
                <img
                  src={pathway2peaceLogo}
                  alt="Pathway2Peace logo"
                  className="w-[170px] md:w-[170px] h-auto"
                />
              </div>

              {/* Title */}
              <h1 className="mb-4">Pathway2Peace — Mental Health Website & HR Automation</h1>
              
              {/* Subheadline */}
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Calming, accessible web redesign + a custom onboarding & payroll system that saves 10+ hours every week.
              </p>

              {/* Mac Mockup */}
              <div className="mb-4">
                <img
                  src={pathway2peaceMacview}
                  alt="MacBook mockup of the Pathway2Peace website redesign"
                  className="w-full max-w-[1100px] mx-auto rounded-lg shadow-2xl"
                />
              </div>
              
              {/* Caption */}
              <p className="text-sm text-muted-foreground">
                Modern, ADA-minded redesign with built-in HR efficiency.
              </p>
            </div>
          </section>

          {/* Overview */}
          <section className="section-padding">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pathway2Peace is a mental health agency providing counseling and behavioral support. They needed a 
                compassionate, professional site that made it easy for patients to find services and request 
                appointments—while reducing time spent on manual staff onboarding and payroll.
              </p>
            </div>
          </section>

          {/* The Challenge */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">The Challenge</h2>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Low local visibility for therapy and counseling searches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Outdated layout with limited accessibility and mobile usability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>No clear "Get Help" / appointment pathway</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Manual employee onboarding and weekly payroll consuming admin time</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Our Solution */}
          <section className="section-padding">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">Our Solution</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Calming Web Redesign</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Light, open layout, friendly typography, and clear service navigation to build trust.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local SEO</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    On-page optimization for "therapy," "counseling," and regional intent to lift local rankings.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Conversion Flow</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Prominent "Get Help" CTA, short appointment forms, and call tracking across devices.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Custom HR System</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Secure employee onboarding + payroll dashboard to automate time tracking, docs, and weekly 
                    payroll—saving 10+ hours per week.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="section-padding bg-secondary">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">Results (first 90 days)</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-2xl">+180%</span>
                  <span className="text-muted-foreground">local search traffic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-2xl">Top 5</span>
                  <span className="text-muted-foreground">rankings for core therapy terms in their area</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-2xl">2.4×</span>
                  <span className="text-muted-foreground">more appointment form submissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-2xl">10+</span>
                  <span className="text-muted-foreground">hours/week saved via onboarding & payroll automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-2xl">−40%</span>
                  <span className="text-muted-foreground">bounce rate; stronger engagement across devices</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Key Highlights */}
          <section className="section-padding">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">Key Highlights</h2>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary">✅</span>
                  <span>Compassionate, ADA-minded design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✅</span>
                  <span>Clear patient pathway with simple forms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✅</span>
                  <span>Local SEO that drives qualified traffic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✅</span>
                  <span>Custom HR automation saving 10+ hours weekly</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Testimonial */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom max-w-3xl text-center">
              <blockquote className="text-2xl font-light italic text-muted-foreground mb-4">
                "Our new site brings in more patients—and the custom onboarding and payroll system saves us hours every week."
              </blockquote>
              <p className="text-sm text-muted-foreground">— Pathway2Peace Team</p>
            </div>
          </section>

          {/* CTA Footer */}
          <section className="section-padding bg-foreground text-primary-foreground">
            <div className="container-custom text-center max-w-3xl">
              <h2 className="text-primary-foreground mb-4">Want growth and saved admin time?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                We design patient-friendly websites and backend systems that cut busywork.
              </p>
              <Button asChild size="lg" variant="secondary" className="btn-text">
                <Link to="/contact-us">Request Proposal</Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CaseStudyPathway2Peace;
