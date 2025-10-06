import { Link } from "react-router-dom";
import { MousePointerClick, Search, Globe, Video, BarChart3, FileCode } from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      icon: MousePointerClick,
      title: "PPC Management",
      description: "Drive instant qualified traffic with expertly managed Google Ads, Meta Ads, and YouTube campaigns.",
      href: "/services/ppc-services",
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Dominate search rankings with comprehensive on-page, technical, and local SEO strategies.",
      href: "/services/search-engine-optimization",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Convert visitors into customers with high-performance, mobile-optimized websites.",
      href: "/services/web-development",
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Engage audiences with professional video content that tells your brand story.",
      href: "/services/high-converting-video-production",
    },
    {
      icon: BarChart3,
      title: "Conversion Rate Optimization",
      description: "Maximize revenue by optimizing your conversion funnel and user experience.",
      href: "/services/conversion-rate-optimization-services-to-increase-revenue",
    },
    {
      icon: FileCode,
      title: "Landing Pages",
      description: "Create high-converting landing pages designed to capture leads and drive sales.",
      href: "/services/enhance-your-business-with-high-converting-landing-page-services",
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Full-service digital marketing solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.href}
                className="card-premium p-8 hover-scale group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
                </div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
