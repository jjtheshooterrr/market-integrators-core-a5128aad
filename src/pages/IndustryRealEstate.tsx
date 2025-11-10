import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Home, MapPin, Camera, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet";

const IndustryRealEstate = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Real Estate & Property Management Marketing | Market Integrators</title>
        <meta name="description" content="Intelligent ad delivery and local visibility strategies for agents, brokerages, and property firms." />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom text-center max-w-4xl">
            <Badge className="mb-4" variant="outline">
              <Home className="w-4 h-4 mr-2" />
              Real Estate & Property Management
            </Badge>
            <h1 className="mb-6">Real Estate & Property Management Marketing</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Intelligent ad delivery and local visibility strategies for agents, brokerages, and property firms. 
              AI visibility analysis helps surface your brand in emerging AI-driven search results.
            </p>
          </div>
        </section>

        {/* Key Services */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <h2 className="text-center mb-12">Our Real Estate Marketing Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Hyper-Local Targeting</h3>
                <p className="text-muted-foreground">
                  Geo-targeted campaigns that reach buyers and sellers in your specific service areas.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <Camera className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Property Showcase</h3>
                <p className="text-muted-foreground">
                  Professional photography, video tours, and virtual staging to showcase listings effectively.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Lead Nurturing</h3>
                <p className="text-muted-foreground">
                  Automated follow-up systems that convert leads into clients throughout the buying journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-6">Ready to List and Sell More Properties?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's create marketing that generates quality leads and closes more deals.
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

export default IndustryRealEstate;
