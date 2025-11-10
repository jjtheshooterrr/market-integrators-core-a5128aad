import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, TrendingUp, Users, Target } from "lucide-react";
import { Helmet } from "react-helmet";

const IndustryEcommerce = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>E-Commerce & Retail Digital Marketing | Market Integrators</title>
        <meta name="description" content="Comprehensive digital marketing solutions for e-commerce and retail brands. Drive consistent ROI with data-driven campaigns and predictive analytics." />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom text-center max-w-4xl">
            <Badge className="mb-4" variant="outline">
              <ShoppingCart className="w-4 h-4 mr-2" />
              E-Commerce & Retail
            </Badge>
            <h1 className="mb-6">E-Commerce & Retail Marketing Excellence</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From DTC brands to large-scale online stores, we build and optimize omni-channel campaigns 
              that drive consistent ROI. Our team integrates data pipelines, predictive LTV analysis, 
              and dynamic creative testing to maximize revenue per visitor.
            </p>
          </div>
        </section>

        {/* Key Services */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <h2 className="text-center mb-12">Our E-Commerce Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Conversion Rate Optimization</h3>
                <p className="text-muted-foreground">
                  A/B testing, funnel optimization, and user experience enhancements that increase your conversion rates and average order value.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Performance Marketing</h3>
                <p className="text-muted-foreground">
                  Data-driven paid advertising across Google, Meta, and TikTok that delivers measurable ROAS and customer acquisition.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Customer Retention</h3>
                <p className="text-muted-foreground">
                  Email marketing, SMS campaigns, and loyalty programs designed to maximize customer lifetime value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-6">Ready to Scale Your E-Commerce Business?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's discuss how our proven strategies can drive growth for your online store.
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

export default IndustryEcommerce;
