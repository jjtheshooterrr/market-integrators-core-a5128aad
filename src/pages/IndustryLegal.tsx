import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Scale, Target, TrendingUp, FileText } from "lucide-react";
import { Helmet } from "react-helmet";

const IndustryLegal = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Legal & Professional Services Marketing | Market Integrators</title>
        <meta name="description" content="Tailored PPC and SEO systems for law firms, accounting, and consulting practices built to capture high-intent local and national leads." />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom text-center max-w-4xl">
            <Badge className="mb-4" variant="outline">
              <Scale className="w-4 h-4 mr-2" />
              Legal & Professional Services
            </Badge>
            <h1 className="mb-6">Legal & Professional Services Marketing</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Tailored PPC and SEO systems for law firms, accounting, and consulting practices—built 
              to capture high-intent local and national leads.
            </p>
          </div>
        </section>

        {/* Key Services */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <h2 className="text-center mb-12">Our Legal Marketing Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Case Acquisition</h3>
                <p className="text-muted-foreground">
                  Precision-targeted campaigns designed to generate high-value client consultations and case intakes.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Practice Growth</h3>
                <p className="text-muted-foreground">
                  Strategic marketing that positions your firm as the authority in your practice areas.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <FileText className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Content Marketing</h3>
                <p className="text-muted-foreground">
                  Thought leadership content that builds credibility and attracts qualified referrals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-6">Ready to Grow Your Practice?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's develop a marketing strategy that delivers qualified clients to your firm.
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

export default IndustryLegal;
