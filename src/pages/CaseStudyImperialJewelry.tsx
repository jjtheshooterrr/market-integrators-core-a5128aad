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
import imperialjewelryLogo from "@/assets/imperialjewelryshoplogo (1).webp";
import imperialjewelryMacview from "@/assets/imperialjewelry-macview.webp";
import { OptimizedImage } from "@/components/OptimizedImage";

const CaseStudyImperialJewelry = () => {
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
                  <BreadcrumbPage>Imperial Jewelry</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom max-w-4xl text-center">

            <OptimizedImage
              src={imperialjewelryLogo}
              alt="Imperial Jewelry - Luxury eCommerce and Custom Jewelry logo"
              className="h-32 md:h-40 w-auto mx-auto mb-8 object-contain"
            />

            <h1 className="mb-6">Imperial Jewelry</h1>
            <p className="text-xl text-muted-foreground mb-4">Luxury eCommerce Web Design & Brand Identity</p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-muted rounded-full">eCommerce Design</span>
              <span className="px-3 py-1 bg-muted rounded-full">Brand Identity</span>
              <span className="px-3 py-1 bg-muted rounded-full">SEO</span>
              <span className="px-3 py-1 bg-muted rounded-full">Product Catalog</span>
              <span className="px-3 py-1 bg-muted rounded-full">Conversion Optimization</span>
            </div>
          </div>
        </section>

        {/* MacBook Mockup */}
        <section className="section-padding">
          <div className="container-custom max-w-5xl">
            <OptimizedImage
              src={imperialjewelryMacview}
              alt="MacBook Pro displaying Imperial Jewelry luxury eCommerce website with custom ring catalog"
              className="w-full rounded-lg shadow-2xl"
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
              Elegant eCommerce redesign built to reflect luxury and trust.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Imperial Jewelry is a boutique jeweler offering custom pieces, engagement rings, and fine accessories both
              online and in-store. Their craftsmanship and designs were premium — but their website didn't reflect that
              level of quality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              We rebuilt the brand's digital presence from the ground up with a modern, luxurious eCommerce design,
              strong product storytelling, and a fully optimized SEO and conversion strategy that drives both local and
              national sales.
            </p>
          </div>
        </section>

        {/* The Challenge */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Before working with us, Imperial Jewelry's online store was outdated and underperforming:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Outdated visuals and poor mobile responsiveness hurt brand perception
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  No clear differentiation between custom and catalog products
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Inconsistent SEO structure with low visibility in local searches
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Complicated checkout process leading to high cart abandonment
                </span>
              </li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              They needed a high-end shopping experience that matched the quality of their jewelry — sleek, fast, and
              designed to convert.
            </p>
          </div>
        </section>

        {/* Our Solution */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Our Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We transformed Imperial Jewelry into a digital showcase of craftsmanship and trust.
            </p>
            <p className="text-lg font-semibold mb-4">What we implemented:</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Website Redesign</h3>
                <p className="text-muted-foreground">
                  Built a modern, elegant site with large product imagery, minimal typography, and clean navigation to
                  reflect a luxury aesthetic.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Product Catalog Management</h3>
                <p className="text-muted-foreground">
                  Organized collections and categories to improve browsing and search relevance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Conversion Optimization</h3>
                <p className="text-muted-foreground">
                  Simplified checkout, added trust elements (secure payment, warranty info, verified reviews), and clear
                  CTAs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Local + Organic SEO</h3>
                <p className="text-muted-foreground">
                  Targeted "custom jewelry," "engagement rings," and "fine jewelry near me" keywords to boost
                  visibility.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
                <p className="text-muted-foreground">
                  Reduced load times, compressed imagery, and implemented lazy loading for a smooth user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Results</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">Within 60 days of launch:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-premium p-6">
                <div className="text-4xl font-bold text-primary mb-2">+210%</div>
                <p className="text-muted-foreground">Increase in website sales and inquiries</p>
              </div>
              <div className="card-premium p-6">
                <div className="text-4xl font-bold text-primary mb-2">Top 3</div>
                <p className="text-muted-foreground">Rankings for key local jewelry searches</p>
              </div>
              <div className="card-premium p-6">
                <div className="text-4xl font-bold text-primary mb-2">-40%</div>
                <p className="text-muted-foreground">Reduced cart abandonment</p>
              </div>
              <div className="card-premium p-6">
                <div className="text-4xl font-bold text-primary mb-2">2.8×</div>
                <p className="text-muted-foreground">Improved average session duration</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Key Highlights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Luxury-grade web design and UX overhaul</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Clean, organized eCommerce catalog</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">SEO visibility in high-intent local markets</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">40% lower abandonment and higher AOV</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <div className="card-premium p-10 text-center">
              <p className="text-2xl font-light italic text-muted-foreground mb-6">
                "The new site feels like our brand — elegant, simple, and beautiful. Customers love the new experience."
              </p>
              <p className="font-semibold">— Imperial Jewelry Team</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-6">
              Want your online store to look as premium as your products?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We design luxury-grade eCommerce experiences that boost trust, SEO visibility, and conversions.
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

export default CaseStudyImperialJewelry;
