import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { MousePointerClick, Search, Globe, Video, BarChart3, FileCode, TrendingUp, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: MousePointerClick,
      title: "PPC Management",
      description: "Drive instant qualified traffic and maximize ROI with expertly managed Google Ads, Meta Ads, and paid search campaigns.",
      href: "/services/ppc-services",
      features: ["Google Ads", "Meta Ads", "Display Advertising", "Remarketing"],
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Dominate search rankings and increase organic traffic with comprehensive on-page, technical, and local SEO strategies.",
      href: "/services/search-engine-optimization",
      features: ["Technical SEO", "Local SEO", "Link Building", "Content Strategy"],
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Convert visitors into customers with high-performance, mobile-optimized websites built for results.",
      href: "/services/web-development",
      features: ["Custom Design", "Responsive", "E-commerce", "Performance Optimized"],
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Engage audiences and tell your brand story with professional video content that converts.",
      href: "/services/high-converting-video-production",
      features: ["Brand Videos", "Explainers", "Social Media", "Commercials"],
    },
    {
      icon: Youtube,
      title: "YouTube Advertising",
      description: "Reach engaged audiences at scale with high-impact YouTube video ad campaigns.",
      href: "/services/youtube-advertising-to-drive-growth-and-increase-conversions",
      features: ["Video Ads", "TrueView", "Bumper Ads", "Audience Targeting"],
    },
    {
      icon: BarChart3,
      title: "Conversion Rate Optimization",
      description: "Maximize revenue by optimizing your conversion funnel and user experience.",
      href: "/services/conversion-rate-optimization-services-to-increase-revenue",
      features: ["A/B Testing", "Funnel Analysis", "UX Optimization", "Analytics"],
    },
    {
      icon: FileCode,
      title: "Landing Pages",
      description: "Create high-converting landing pages designed to capture leads and drive sales.",
      href: "/services/enhance-your-business-with-high-converting-landing-page-services",
      features: ["Custom Design", "Mobile Optimized", "Fast Loading", "Conversion Focused"],
    },
    {
      icon: TrendingUp,
      title: "Paid Social Advertising",
      description: "Reach your target audience on Facebook, Instagram, LinkedIn, and more social platforms.",
      href: "/services/paid-social-media-advertising-services",
      features: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Twitter Ads"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom text-center">
            <h1 className="mb-6">Digital Marketing Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive marketing solutions designed to drive traffic, generate leads, and increase revenue for your business
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="card-premium p-8 hover-scale group">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                      <Icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
                    </div>
                    <h3 className="text-xl mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.href}
                      className="inline-flex items-center text-primary font-semibold hover:underline"
                    >
                      Learn More →
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-primary-foreground mb-6">Not Sure Which Service You Need?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation and we'll create a customized strategy tailored to your business goals.
            </p>
            <Button asChild size="lg" variant="secondary" className="btn-text">
              <Link to="/contact-us">Request Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
