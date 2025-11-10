import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Shield, Users } from "lucide-react";
import { Helmet } from "react-helmet";

const IndustryFinance = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Finance & Banking Digital Marketing | Market Integrators</title>
        <meta name="description" content="Data-driven performance marketing for financial products and fintech. Align creative, compliance, and measurement to drive qualified leads." />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom text-center max-w-4xl">
            <Badge className="mb-4" variant="outline">
              <DollarSign className="w-4 h-4 mr-2" />
              Finance & Banking
            </Badge>
            <h1 className="mb-6">Finance & Banking Marketing</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Data-driven performance marketing for financial products and fintech. We align creative, 
              compliance, and measurement to drive qualified leads within regulated industries.
            </p>
          </div>
        </section>

        {/* Key Services */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <h2 className="text-center mb-12">Our Financial Services Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Compliance-First Marketing</h3>
                <p className="text-muted-foreground">
                  Campaigns designed with regulatory compliance at the forefront while maximizing performance.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Customer Acquisition</h3>
                <p className="text-muted-foreground">
                  Cost-effective strategies to acquire high-value customers for loans, investments, and banking products.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Trust Building</h3>
                <p className="text-muted-foreground">
                  Strategic content and branding that establishes credibility in the competitive financial sector.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-6">Ready to Scale Your Financial Services?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's build compliant, high-performing campaigns for your financial brand.
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

export default IndustryFinance;
