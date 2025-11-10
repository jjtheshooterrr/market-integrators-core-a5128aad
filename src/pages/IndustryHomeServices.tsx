import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Wrench, MapPin, Phone, Clock } from "lucide-react";
import { Helmet } from "react-helmet";

const IndustryHomeServices = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Home Services & Franchises Marketing | Market Integrators</title>
        <meta name="description" content="Scalable local lead generation and AI-enhanced visibility for HVAC, electrical, plumbing, and multi-location franchises." />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom text-center max-w-4xl">
            <Badge className="mb-4" variant="outline">
              <Wrench className="w-4 h-4 mr-2" />
              Home Services & Franchises
            </Badge>
            <h1 className="mb-6">Home Services & Franchise Marketing</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              HVAC, electrical, plumbing, and multi-location franchises rely on us for scalable 
              local lead generation and AI-enhanced visibility in search and map results.
            </p>
          </div>
        </section>

        {/* Key Services */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <h2 className="text-center mb-12">Our Home Services Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local SEO</h3>
                <p className="text-muted-foreground">
                  Dominate local search results and Google Maps to capture customers searching for services in your area.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <Phone className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Call Tracking</h3>
                <p className="text-muted-foreground">
                  Track and optimize phone leads with dynamic number insertion and call recording analytics.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">24/7 Lead Capture</h3>
                <p className="text-muted-foreground">
                  Never miss an opportunity with automated booking systems and after-hours lead collection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-6">Ready to Fill Your Service Calendar?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's generate consistent, high-quality leads for your home services business.
            </p>
            <a href="/contact-us">
              <button className="btn-text bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule a Consultation
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndustryHomeServices;
