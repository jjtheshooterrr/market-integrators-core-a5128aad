import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import northernutahwindowwellsLogo from "@/assets/northernutahwindowwells-logo.webp";
import northernutahwindowwellsMacview from "@/assets/northernutahwindowwells-macview.webp";

const CaseStudyNorthernUtahWindowWells = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Northern Utah Window Wells Case Study | Local SEO & Seasonal Campaigns</title>
        <meta
          name="description"
          content="How we built a high-converting local website for Northern Utah Window Wells, boosting organic traffic 260% and stabilizing seasonal lead flow."
        />
        <meta property="og:title" content="Northern Utah Window Wells Case Study | Local SEO & Seasonal Campaigns" />
        <meta
          property="og:description"
          content="How we built a high-converting local website for Northern Utah Window Wells, boosting organic traffic 260% and stabilizing seasonal lead flow."
        />
        <meta property="og:image" content={northernutahwindowwellsMacview} />
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
                  <BreadcrumbPage>Northern Utah Window Wells</BreadcrumbPage>
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
                src={northernutahwindowwellsLogo}
                alt="Northern Utah Window Wells logo"
                className="h-32 w-auto object-contain mx-auto mb-8"
              />
              <h1 className="mb-6">Northern Utah Window Wells</h1>
              <p className="text-xl text-muted-foreground mb-4">
                Home Services / Cleaning & Maintenance
              </p>
              <p className="text-lg text-muted-foreground">
                Web Design, Local SEO, Lead Generation, Seasonal Campaign Automation
              </p>
            </div>

            {/* MacBook Mockup */}
            <div className="mb-12">
              <img
                src={northernutahwindowwellsMacview}
                alt="MacBook mockup showing Northern Utah Window Wells website homepage"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <p className="text-sm text-muted-foreground text-center mt-4">
                High-converting local website built for seasonal demand and steady growth.
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Northern Utah Window Wells specializes in cleaning, maintenance, and restoration of residential window wells across Weber, Davis, and Box Elder counties. Their team takes on seasonal maintenance that most homeowners overlook — and needed a digital presence that turned those niche services into consistent, qualified leads year-round.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We created a high-converting local website and automated lead funnel that helped them dominate search results and even out the seasonal ups and downs of their service demand.
            </p>
          </div>
        </section>

        {/* The Challenge */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Before working with us, Northern Utah Window Wells had:
            </p>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>No dedicated website — relying only on social listings and Facebook posts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>Limited visibility on Google for regional searches</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>Highly seasonal demand with unpredictable slow months</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>No structured way to track or follow up with leads</span>
              </li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              They needed a professional, SEO-driven website that clearly explained their services, ranked locally, and captured leads automatically.
            </p>
          </div>
        </section>

        {/* Our Solution */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Our Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We delivered a full-service digital build tailored for local growth and efficiency.
            </p>
            <p className="text-lg text-muted-foreground font-semibold mb-4">What we implemented:</p>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-3 text-primary font-bold">✓</span>
                <span>
                  <strong>Website Design:</strong> Built a fast, modern site emphasizing before/after visuals, customer trust, and easy quote requests.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary font-bold">✓</span>
                <span>
                  <strong>Local SEO:</strong> Optimized for "window well cleaning," "window well covers," and "Utah home maintenance" keywords.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary font-bold">✓</span>
                <span>
                  <strong>Seasonal Campaigns:</strong> Created an automated email and ad retargeting system that re-engages customers ahead of high-demand months (spring & fall).
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary font-bold">✓</span>
                <span>
                  <strong>Lead Management:</strong> Integrated form tracking and call analytics to measure ad ROI and conversion rates.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary font-bold">✓</span>
                <span>
                  <strong>Content & Copy:</strong> Added FAQ and safety sections to educate visitors while boosting keyword depth.
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
              In the first 90 days after launch:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-premium p-6">
                <div className="text-4xl font-bold text-primary mb-2">+260%</div>
                <p className="text-muted-foreground">Increase in organic search traffic</p>
              </div>
              <div className="card-premium p-6">
                <div className="text-4xl font-bold text-primary mb-2">Top 3</div>
                <p className="text-muted-foreground">Rankings for "window well cleaning Utah" and related local searches</p>
              </div>
              <div className="card-premium p-6">
                <div className="text-4xl font-bold text-primary mb-2">2.7×</div>
                <p className="text-muted-foreground">Increase in quote requests compared to previous seasons</p>
              </div>
              <div className="card-premium p-6">
                <div className="text-4xl font-bold text-primary mb-2">Year-Round</div>
                <p className="text-muted-foreground">Reduced slow-season drop-offs via automated seasonal reminders</p>
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
                <span className="text-primary text-xl">✓</span>
                <p className="text-lg">Built an SEO-optimized, trust-driven website</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-lg">Automated seasonal marketing to stabilize leads year-round</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-lg">2.7× more quote requests within one quarter</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-lg">Clear lead tracking and conversion analytics</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-3xl text-center">
            <blockquote className="text-2xl font-light italic text-foreground mb-6">
              "We used to rely only on referrals — now we get steady requests year-round, even in our slower months."
            </blockquote>
            <p className="text-muted-foreground">— Northern Utah Window Wells Team</p>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-6">Want to grow your local home service business year-round?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We design and optimize websites that drive consistent leads, even in seasonal markets.
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

export default CaseStudyNorthernUtahWindowWells;
