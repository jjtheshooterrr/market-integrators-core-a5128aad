import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Target, BarChart, Users } from "lucide-react";
import { Helmet } from "react-helmet";

const IndustryEducation = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Education & eLearning Marketing | Market Integrators</title>
        <meta name="description" content="Enrollment-focused campaigns and funnel optimization for universities, online courses, and edtech platforms." />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom text-center max-w-4xl">
            <Badge className="mb-4" variant="outline">
              <GraduationCap className="w-4 h-4 mr-2" />
              Education & eLearning
            </Badge>
            <h1 className="mb-6">Education & eLearning Marketing</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Enrollment-focused campaigns and funnel optimization for universities, online courses, 
              and edtech platforms. We track every touchpoint to maximize cost-per-enrollment ROI.
            </p>
          </div>
        </section>

        {/* Key Services */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <h2 className="text-center mb-12">Our Education Marketing Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Student Recruitment</h3>
                <p className="text-muted-foreground">
                  Multi-channel campaigns that attract and convert qualified prospective students.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <BarChart className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Enrollment Optimization</h3>
                <p className="text-muted-foreground">
                  Data-driven funnel improvements that increase application and enrollment rates.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Student Retention</h3>
                <p className="text-muted-foreground">
                  Engagement strategies that keep students enrolled and reduce dropout rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-6">Ready to Boost Your Enrollment?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's create data-driven campaigns that fill your classrooms and grow your student body.
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

export default IndustryEducation;
