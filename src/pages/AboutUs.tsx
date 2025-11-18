import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
const AboutUs = () => {
  const values = [{
    icon: Target,
    title: "Results-Driven",
    description: "We're obsessed with delivering measurable ROI for our clients, not vanity metrics."
  }, {
    icon: Users,
    title: "Partnership Approach",
    description: "Your success is our success. We work as an extension of your team."
  }, {
    icon: Award,
    title: "Expertise & Innovation",
    description: "Certified specialists staying ahead of industry trends and platform updates."
  }, {
    icon: TrendingUp,
    title: "Continuous Optimization",
    description: "We never stop testing, learning, and improving your campaigns."
  }];
  return <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">We're Market Integrators</h1>
              <p className="text-xl text-muted-foreground">
                A full-service digital marketing agency dedicated to accelerating business growth through data-driven
                strategies and measurable results.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section with Image */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">Our Mission: Your Growth</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Since our founding, we've been on a mission to help businesses of all sizes achieve their full
                  potential through strategic digital marketing. We believe every business deserves access to
                  enterprise-level marketing expertise.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our team of certified specialists combines creativity with data science to deliver campaigns that
                  don't just look good—they perform. From startups to established enterprises, we've helped hundreds of
                  businesses generate millions in revenue.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're not just marketers. We're growth partners committed to your long-term success.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={aboutTeam} alt="Market Integrators Team" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="mb-4">What Drives Us</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
              const Icon = value.icon;
              return <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>;
            })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-primary-foreground mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help accelerate your business growth.
            </p>
            <Button asChild size="lg" variant="secondary" className="btn-text">
              <Link to="/contact-us">Start Your Growth Journey</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default AboutUs;