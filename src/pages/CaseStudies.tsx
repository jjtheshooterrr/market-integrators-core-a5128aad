import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Users, DollarSign, Award } from "lucide-react";
import caseStudyImage from "@/assets/case-study-health.jpg";

const CaseStudies = () => {
  const caseStudy = {
    title: "Internal Healing & Wellness MD",
    industry: "Healthcare / Medical Wellness",
    challenge: "A medical wellness center was struggling with low online visibility and high patient acquisition costs. Despite offering premium services, they weren't reaching their target audience effectively.",
    solution: "We implemented an integrated PPC and SEO strategy focused on high-intent medical keywords, optimized their website for conversions, and created targeted campaigns for specific wellness services.",
    metrics: [
      { icon: TrendingUp, label: "PPC Conversions", value: "+990%", description: "Dramatic increase in qualified patient inquiries" },
      { icon: Users, label: "Website Traffic", value: "+2000%", description: "Massive growth in organic and paid traffic" },
      { icon: DollarSign, label: "Cost Per Acquisition", value: "-50%", description: "Reduced CPA while improving lead quality" },
      { icon: Award, label: "Return on Ad Spend", value: "8.5x", description: "Exceptional ROI on marketing investment" },
    ],
    testimonial: {
      quote: "Market Integrators completely transformed our digital presence. The results speak for themselves—we've seen exponential growth in patient bookings and our marketing is now a profit center, not a cost center.",
      author: "Dr. Sarah Johnson",
      role: "Medical Director",
    },
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom text-center">
            <h1 className="mb-6">Client Success Stories</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real businesses we've helped grow through strategic digital marketing
            </p>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            {/* Header */}
            <div className="mb-12">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {caseStudy.industry}
              </div>
              <h2 className="mb-4">{caseStudy.title}</h2>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-12">
              <img src={caseStudyImage} alt={caseStudy.title} className="w-full h-96 object-cover" />
            </div>

            {/* Challenge */}
            <div className="mb-12">
              <h3 className="text-2xl mb-4">The Challenge</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h3 className="text-2xl mb-4">Our Solution</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>

            {/* Metrics */}
            <div className="mb-12">
              <h3 className="text-2xl mb-8">The Results</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudy.metrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div key={index} className="card-premium p-8">
                      <Icon className="text-primary mb-4" size={32} />
                      <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                      <div className="font-semibold mb-2">{metric.label}</div>
                      <p className="text-muted-foreground text-sm">{metric.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Testimonial */}
            <div className="card-premium p-12 bg-secondary">
              <div className="text-6xl text-primary mb-6">"</div>
              <p className="text-2xl mb-8 leading-relaxed">
                {caseStudy.testimonial.quote}
              </p>
              <div>
                <div className="font-bold text-lg">{caseStudy.testimonial.author}</div>
                <div className="text-muted-foreground">{caseStudy.testimonial.role}</div>
              </div>
            </div>
          </div>
        </section>

        {/* More Case Studies Teaser */}
        <section className="section-padding bg-secondary">
          <div className="container-custom text-center">
            <h2 className="mb-6">More Success Stories Coming Soon</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're working with amazing clients across industries. Check back soon to see more results from our campaigns.
            </p>
            <Button asChild size="lg" className="btn-text">
              <Link to="/contact-us">Become Our Next Success Story</Link>
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-primary-foreground mb-6">Ready for Similar Results?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can achieve exceptional growth for your business.
            </p>
            <Button asChild size="lg" variant="secondary" className="btn-text">
              <Link to="/contact-us">Request Free Proposal</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
