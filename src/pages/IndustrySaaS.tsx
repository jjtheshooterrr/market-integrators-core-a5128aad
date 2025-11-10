import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Zap, LineChart, Users, Rocket } from "lucide-react";
import { Helmet } from "react-helmet";

const IndustrySaaS = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>SaaS & Technology Digital Marketing | Market Integrators</title>
        <meta name="description" content="High-performance acquisition strategies for subscription and B2B SaaS companies. Drive lead velocity and conversion efficiency across the funnel." />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom text-center max-w-4xl">
            <Badge className="mb-4" variant="outline">
              <Zap className="w-4 h-4 mr-2" />
              SaaS & Technology
            </Badge>
            <h1 className="mb-6">SaaS & Technology Growth Marketing</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              High-performance acquisition strategies for subscription and B2B SaaS companies. 
              We focus on lead velocity, attribution clarity, and conversion efficiency across the funnel.
            </p>
          </div>
        </section>

        {/* Key Services */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <h2 className="text-center mb-12">Our SaaS Marketing Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <LineChart className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Attribution & Analytics</h3>
                <p className="text-muted-foreground">
                  Full-funnel attribution tracking and ROI measurement that connects marketing spend to revenue outcomes.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Lead Generation</h3>
                <p className="text-muted-foreground">
                  Targeted campaigns that fill your pipeline with qualified demo requests and trial signups.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <Rocket className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Growth Strategy</h3>
                <p className="text-muted-foreground">
                  Comprehensive growth plans that scale customer acquisition while maintaining healthy unit economics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-6">Ready to Accelerate Your SaaS Growth?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's build a scalable acquisition strategy for your technology company.
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

export default IndustrySaaS;
