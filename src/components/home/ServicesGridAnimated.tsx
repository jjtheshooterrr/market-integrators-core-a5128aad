import { Link } from "react-router-dom";
import { MousePointerClick, Search, Globe, Video, BarChart3, FileCode } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedCard = ({ service, index }: { service: any; index: number }) => {
  const Icon = service.icon;
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = (y - centerY) / 10;
    const rotateYValue = (centerX - x) / 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={service.href}>
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{
            rotateX,
            rotateY,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
          whileHover={{ scale: 1.05 }}
          className="card-premium p-8 group cursor-pointer"
        >
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
            <Icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
          </div>
          <h3 className="text-xl mb-3">{service.title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const ServicesGridAnimated = () => {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Full-service digital marketing solutions designed to accelerate your business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            View All Services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGridAnimated;
