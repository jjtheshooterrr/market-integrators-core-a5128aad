import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Check } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import lonestarzentLogo from "@/assets/lonestarzent-logo.webp";
import lonestarzentMacview from "@/assets/lonestarzent-macview.webp";
import { OptimizedImage } from "@/components/OptimizedImage";

const CaseStudyLoneStarzEntertainment = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>LoneStarz Entertainment Case Study | Web Design & Booking Automation</title>
        <meta
          name="description"
          content="How we helped LoneStarz Entertainment triple booking inquiries with a modern site, booking automation, and optimized SEO."
        />
        <meta property="og:title" content="LoneStarz Entertainment Case Study | Web Design & Booking Automation" />
        <meta
          property="og:description"
          content="How we helped LoneStarz Entertainment triple booking inquiries with a modern site, booking automation, and optimized SEO."
        />
        <meta property="og:image" content={lonestarzentMacview} />
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
                  <BreadcrumbPage>LoneStarz Entertainment</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom max-w-5xl">
            <div className="text-center mb-12">
              <img
                src={lonestarzentLogo}
                alt="LoneStarz Entertainment - Live Events and DJ Booking logo"
                className="h-32 w-auto object-contain mx-auto mb-8"
                loading="eager"
              />
              <h1 className="mb-6">LoneStarz Entertainment</h1>
              <p className="text-xl text-muted-foreground mb-4">
                Music / Events / Entertainment
              </p>
              <p className="text-lg text-muted-foreground">
                Web Design, Branding, Booking System Development, SEO, and Automation
              </p>
            </div>

            {/* MacBook Mockup */}
            <div className="mb-12">
              <OptimizedImage
                src={lonestarzentMacview}
                alt="MacBook Pro displaying LoneStarz Entertainment booking platform with artist profiles"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <p className="text-sm text-muted-foreground text-center mt-4">
                Dynamic, mobile-first web experience for LoneStarz Entertainment's event booking system.
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              LoneStarz Entertainment is a Texas-based live entertainment agency that connects top-tier DJs, musicians, and performers with corporate events, weddings, and nightlife venues. They needed a digital presence that showcased their energy and professionalism — a platform that could handle both brand storytelling and real booking automation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We created a visually dynamic, mobile-first website that positions LoneStarz as a leading name in live entertainment across Texas, complete with integrated booking workflows and an easy-to-manage backend.
            </p>
          </div>
        </section>

        {/* The Challenge */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Before working with us, LoneStarz relied heavily on social media and word-of-mouth for leads. They had no structured website, no clear presentation of services, and no automation to manage event inquiries or artist requests.
            </p>
            <p className="text-lg text-muted-foreground font-semibold mb-4">Main challenges:</p>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>No booking system — all inquiries handled manually via social DMs or calls</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>No organized presentation of performers or event types</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>Lack of SEO visibility for local entertainment searches</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>Disconnected brand visuals across marketing materials</span>
              </li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              They needed a centralized digital hub that represented the energy of their live shows while providing automation and credibility.
            </p>
          </div>
        </section>

        {/* Our Solution */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Our Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We built a custom digital experience that blends performance with functionality — turning their brand into a lead-generating platform.
            </p>
            <p className="text-lg text-muted-foreground font-semibold mb-4">What we implemented:</p>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start">
                <Check className="mr-3 text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Full Website Design & Brand Identity:</strong> A sleek, dark-themed layout with vivid photography and smooth motion elements that capture the live entertainment vibe.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Booking Automation System:</strong> Built an intelligent contact and request system allowing visitors to browse services, select event types, and automatically route inquiries to the correct team member.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Performer Profiles:</strong> Created dynamic artist pages showcasing bios, videos, and performance categories.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Local SEO:</strong> Optimized for "event entertainment Texas," "DJ booking Houston," and related high-intent keywords.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>CRM Integration:</strong> Connected booking form data to their CRM for automated follow-ups and lead tracking.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Results */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Results</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              After launch, LoneStarz Entertainment saw rapid growth in inbound requests and visibility:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-premium p-6">
                <div className="text-4xl font-bold text-primary mb-2">+270%</div>
                <p className="text-muted-foreground">Increase in booking inquiries within 60 days</p>
              </div>
              <div className="card-premium p-6">
                <div className="text-4xl font-bold text-primary mb-2">Top 5</div>
                <p className="text-muted-foreground">Google rankings for core Texas entertainment keywords</p>
              </div>
              <div className="card-premium p-6">
                <div className="text-4xl font-bold text-primary mb-2">-60%</div>
                <p className="text-muted-foreground">Reduction in response times via automated booking system</p>
              </div>
              <div className="card-premium p-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Improved brand consistency across all marketing touchpoints</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Key Highlights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Check className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                <p className="text-lg">Visually stunning, performance-driven web design</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                <p className="text-lg">Smart booking automation for fast lead response</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                <p className="text-lg">Optimized local SEO presence across Texas markets</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                <p className="text-lg">Enhanced brand identity for artists and event partners</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-3xl text-center">
            <blockquote className="text-2xl font-light italic text-foreground mb-6">
              "The new website transformed how clients find and book us. We've gone from manual messages to fully automated bookings."
            </blockquote>
            <p className="text-muted-foreground">— LoneStarz Entertainment Team</p>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-6">Want to automate your bookings and stand out online?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We design entertainment and event industry websites that turn inquiries into clients — fast.
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

export default CaseStudyLoneStarzEntertainment;
