import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, Users, Award, Heart, TrendingUp, Clock } from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement paths tailored to your goals.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive, team-oriented environment.",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work options to help you thrive.",
    },
    {
      icon: Heart,
      title: "Competitive Benefits",
      description: "Comprehensive health coverage, 401(k), and generous PTO.",
    },
  ];

  const positions = [
    {
      title: "Senior PPC Specialist",
      department: "Digital Marketing",
      location: "Remote / Houston, TX",
      type: "Full-time",
    },
    {
      title: "SEO Manager",
      department: "Digital Marketing",
      location: "Remote / Houston, TX",
      type: "Full-time",
    },
    {
      title: "Web Developer",
      department: "Technology",
      location: "Remote / Houston, TX",
      type: "Full-time",
    },
    {
      title: "Content Strategist",
      department: "Content & Strategy",
      location: "Remote / Houston, TX",
      type: "Full-time",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Join Our Team</h1>
              <p className="text-xl text-muted-foreground">
                Build your career with a leading digital marketing agency. We're looking for talented, passionate individuals who want to make an impact.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="mb-4">Why Market Integrators?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We invest in our people because they're the key to our success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="mb-4">Open Positions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore opportunities to grow your career with us
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {positions.map((position, index) => (
                <div key={index} className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <Button asChild variant="outline">
                      <Link to="/contact-us">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <Rocket className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-primary-foreground mb-6">Don't See Your Role?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                We're always looking for exceptional talent. Send us your resume and tell us how you can contribute to our mission.
              </p>
              <Button asChild size="lg" variant="secondary" className="btn-text">
                <Link to="/contact-us">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;