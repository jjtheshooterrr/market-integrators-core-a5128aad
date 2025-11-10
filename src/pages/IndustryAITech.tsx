import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Brain, Rocket, Lightbulb, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet";

const IndustryAITech = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AI, Automation & Emerging Tech Marketing | Market Integrators</title>
        <meta name="description" content="Helping forward-thinking tech and AI companies build brand presence, scale inbound, and position themselves as category leaders." />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom text-center max-w-4xl">
            <Badge className="mb-4" variant="outline">
              <Brain className="w-4 h-4 mr-2" />
              AI, Automation & Emerging Tech
            </Badge>
            <h1 className="mb-6">AI, Automation & Emerging Tech Marketing</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Helping forward-thinking tech and AI companies build brand presence, scale inbound, 
              and position themselves as category leaders through AI-assisted marketing and content systems.
            </p>
          </div>
        </section>

        {/* Key Services */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <h2 className="text-center mb-12">Our Emerging Tech Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <Lightbulb className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Thought Leadership</h3>
                <p className="text-muted-foreground">
                  Position your brand as an industry authority through strategic content and public relations.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <Rocket className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Product Launch</h3>
                <p className="text-muted-foreground">
                  Go-to-market strategies that create buzz and drive adoption for innovative tech products.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Growth Acceleration</h3>
                <p className="text-muted-foreground">
                  Data-driven strategies to scale awareness, demand, and market share in competitive tech sectors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-6">Ready to Lead Your Category?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's build a marketing strategy that positions your tech company for explosive growth.
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

export default IndustryAITech;
