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
import controllerrepairsLogo from "@/assets/controllerrepairs-logo.webp";
import controllerrepairsMacview from "@/assets/controllerrepairs-macview.webp";
import { OptimizedImage } from "@/components/OptimizedImage";

const CaseStudyControllerRepairs = () => {
  return (
    <>
      <Helmet>
        <title>ControllerRepairs.com Case Study | eCommerce, Automation & Dashboard System</title>
        <meta
          name="description"
          content="How we built a fast, automated eCommerce and repair system for ControllerRepairs.com — boosting sales by 240% and cutting manual work in half."
        />
        <meta
          property="og:title"
          content="ControllerRepairs.com Case Study | eCommerce, Automation & Dashboard System"
        />
        <meta
          property="og:description"
          content="How we built a fast, automated eCommerce and repair system for ControllerRepairs.com — boosting sales by 240% and cutting manual work in half."
        />
        <meta property="og:image" content={controllerrepairsMacview} />
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
                    <BreadcrumbPage>Controller Repairs</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </section>

          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-b from-secondary to-background">
            <div className="container-custom max-w-5xl text-center">
              <OptimizedImage
                src={controllerrepairsLogo}
                alt="ControllerRepairs.com - Custom Gaming Controller Repair logo"
                className="h-32 md:h-40 w-auto mx-auto mb-8 object-contain"
              />
              <h1 className="mb-6">Controller Repairs</h1>
              <p className="text-xl text-muted-foreground mb-4">eCommerce / Electronics Repair</p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Full eCommerce Website Design, Custom Dashboard Development, SEO, Conversion Optimization, Shipping
                Automation
              </p>
            </div>
          </section>

          {/* MacBook Mockup */}
          <section className="section-padding">
            <div className="container-custom max-w-6xl">
              <OptimizedImage
                src={controllerrepairsMacview}
                alt="MacBook Pro displaying ControllerRepairs.com eCommerce dashboard and repair tracking system"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <p className="text-center text-sm text-muted-foreground mt-4 italic">
                End-to-end eCommerce and operations platform for ControllerRepairs.com.
              </p>
            </div>
          </section>

          {/* Overview */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                ControllerRepairs.com is an online retailer and service center specializing in custom gaming controller
                modifications and console repairs. Despite a strong following, their previous online store couldn't
                handle high repair volumes efficiently — orders were managed manually, and users had limited visibility
                into repair status.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We were brought in to completely rebuild the business digitally — from storefront to backend systems —
                delivering a faster site, automated fulfillment, and a powerful internal dashboard to streamline
                operations.
              </p>
            </div>
          </section>

          {/* The Challenge */}
          <section className="section-padding">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Before partnering with us, ControllerRepairs.com faced major bottlenecks:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Outdated website with poor mobile experience and slow performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Manual tracking of repairs and shipping, creating customer delays</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>No integrated dashboard for staff or clients to manage orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Limited analytics, making it hard to track trends or improve workflows</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                They needed a professional eCommerce experience and a backend system that could automate the entire
                repair and shipping process.
              </p>
            </div>
          </section>

          {/* Our Solution */}
          <section className="section-padding bg-secondary">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">Our Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We built a complete eCommerce and operations platform — combining speed, automation, and control.
              </p>
              <p className="text-lg font-semibold mb-4">What we implemented:</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Full Website Redesign</p>
                    <p className="text-muted-foreground">
                      A high-performance, responsive eCommerce site with modern product presentation and quick checkout
                      flow.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Custom Dashboard System</p>
                    <p className="text-muted-foreground">
                      Developed an internal dashboard allowing the team to manage repairs, update order status, and
                      track fulfillment in real time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Shipping Automation</p>
                    <p className="text-muted-foreground">
                      Integrated with carrier APIs to generate labels automatically, track packages, and send real-time
                      updates to customers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">SEO & Schema Setup</p>
                    <p className="text-muted-foreground">
                      Optimized site structure, metadata, and product schema for repair and gaming-related keywords.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Conversion Optimization</p>
                    <p className="text-muted-foreground">
                      Redesigned key flows with trust signals, streamlined forms, and call-to-action placement to
                      increase order completion.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Performance Engineering</p>
                    <p className="text-muted-foreground">
                      Achieved sub-1.5s load times with optimized media, lazy loading, and CDN delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="section-padding">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-6">Results</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Within 60 days of launch:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-premium p-6">
                  <p className="text-4xl font-bold text-primary mb-2">+240%</p>
                  <p className="text-muted-foreground">
                    Increase in online orders across repair and accessory categories
                  </p>
                </div>
                <div className="card-premium p-6">
                  <p className="text-4xl font-bold text-primary mb-2">3.8×</p>
                  <p className="text-muted-foreground">Faster load speed (1.4s average LCP)</p>
                </div>
                <div className="card-premium p-6">
                  <p className="text-4xl font-bold text-primary mb-2">-52%</p>
                  <p className="text-muted-foreground">
                    Reduction in manual admin time through automated dashboard and shipping workflows
                  </p>
                </div>
                <div className="card-premium p-6">
                  <p className="text-4xl font-bold text-primary mb-2">+180%</p>
                  <p className="text-muted-foreground">
                    Organic visibility in Google Search for controller and repair keywords
                  </p>
                </div>
                <div className="card-premium p-6">
                  <p className="text-4xl font-bold text-primary mb-2">+35%</p>
                  <p className="text-muted-foreground">
                    Higher average order value due to improved UX and upsell structure
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Highlights */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom max-w-4xl">
              <h2 className="mb-8">Key Highlights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Fully modern eCommerce redesign and brand refresh</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Custom-built repair dashboard for workflow management</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Shipping automation with label generation and tracking</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">SEO optimization for repair-related search dominance</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Conversion-first UX that increased sales and efficiency</p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="section-padding bg-secondary">
            <div className="container-custom max-w-3xl text-center">
              <blockquote className="text-2xl font-light italic text-muted-foreground mb-6">
                "We finally have a system that runs itself — from repair orders to shipping labels. It's faster,
                cleaner, and has completely changed how we operate."
              </blockquote>
              <p className="text-lg font-semibold">— ControllerRepairs.com Team</p>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding bg-foreground text-primary-foreground">
            <div className="container-custom text-center max-w-3xl">
              <h2 className="text-primary-foreground mb-6">Ready to automate your online business?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                From eCommerce to logistics — we design systems that convert customers and save hours through automation
                and smart dashboards.
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

export default CaseStudyControllerRepairs;
