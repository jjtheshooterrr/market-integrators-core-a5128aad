import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Calendar, Users } from "lucide-react";
import { Helmet } from "react-helmet";

const IndustryHealthcare = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Healthcare & Medical Digital Marketing | Market Integrators</title>
        <meta name="description" content="HIPAA-compliant, precision-targeted digital campaigns that build trust and drive appointment growth for clinics, practices, and telehealth brands." />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom text-center max-w-4xl">
            <Badge className="mb-4" variant="outline">
              <Heart className="w-4 h-4 mr-2" />
              Healthcare & Medical
            </Badge>
            <h1 className="mb-6">Healthcare & Medical Marketing</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              HIPAA-compliant, precision-targeted digital campaigns that build trust and drive 
              appointment growth for clinics, practices, and telehealth brands.
            </p>
          </div>
        </section>

        {/* Key Services */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <h2 className="text-center mb-12">Our Healthcare Marketing Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">HIPAA Compliance</h3>
                <p className="text-muted-foreground">
                  Fully compliant marketing strategies that protect patient privacy while maximizing campaign effectiveness.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <Calendar className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Patient Acquisition</h3>
                <p className="text-muted-foreground">
                  Targeted campaigns that fill your appointment calendar with qualified patients seeking your services.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Reputation Management</h3>
                <p className="text-muted-foreground">
                  Build trust and credibility through strategic review generation and online reputation monitoring.
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
              Let's create compliant, effective marketing that brings new patients to your door.
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

export default IndustryHealthcare;
