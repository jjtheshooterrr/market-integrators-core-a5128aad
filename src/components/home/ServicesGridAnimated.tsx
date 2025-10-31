import { Link } from "react-router-dom";
import { 
  MousePointerClick, Search, Globe, Video, Camera, Music, Film, Palette, 
  Box, Share2, Lightbulb, BarChart3, Brain, Smartphone, Cloud, Shield, 
  Target, Zap, ChevronLeft, ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ServiceCard = ({ service }: { service: any }) => {
  const Icon = service.icon;

  return (
    <Link to={service.href} className="block h-full">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="card-premium p-6 h-full flex flex-col group cursor-pointer"
      >
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
          <Icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
        </div>
        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </motion.div>
    </Link>
  );
};

const ServicesGridAnimated = () => {
  const services = [
    {
      icon: MousePointerClick,
      title: "PPC Management",
      description: "Drive instant qualified traffic with expertly managed campaigns.",
      href: "/services/ppc-services",
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Dominate search rankings with comprehensive SEO strategies.",
      href: "/services/search-engine-optimization",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "High-performance, mobile-optimized websites that convert.",
      href: "/services/web-development",
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Professional video content that tells your brand story.",
      href: "/services/high-converting-video-production",
    },
    {
      icon: Music,
      title: "Audio Production",
      description: "Studio-quality audio production for all your content needs.",
      href: "/services/audio-production",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography that captures your brand essence.",
      href: "/services/photography",
    },
    {
      icon: Film,
      title: "Post Production",
      description: "Expert editing and post-production for polished results.",
      href: "/services/post-production",
    },
    {
      icon: Palette,
      title: "Animation",
      description: "Engaging animated content that brings ideas to life.",
      href: "/services/animation",
    },
    {
      icon: Box,
      title: "3D Visual Effects",
      description: "Stunning 3D visuals and effects for immersive experiences.",
      href: "/services/3d-visual-effects",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns that drive engagement.",
      href: "/services/social-media-marketing",
    },
    {
      icon: Lightbulb,
      title: "Digital Strategy",
      description: "Comprehensive digital strategies for business growth.",
      href: "/services/digital-strategy",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Data-driven insights to optimize your marketing performance.",
      href: "/services/data-analytics",
    },
    {
      icon: Brain,
      title: "AI/ML Services",
      description: "Leverage AI and machine learning for competitive advantage.",
      href: "/services/ai-ml",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Custom mobile and web applications for modern businesses.",
      href: "/services/app-development",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration solutions.",
      href: "/services/cloud-services",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with enterprise-grade security.",
      href: "/services/cybersecurity",
    },
    {
      icon: Target,
      title: "Google Ads Management",
      description: "Maximize ROI with expert Google Ads campaign management.",
      href: "/services/google-ads-management",
    },
    {
      icon: Share2,
      title: "Meta Ads Management",
      description: "Drive results with Facebook and Instagram advertising.",
      href: "/services/meta-ads-management",
    },
    {
      icon: Zap,
      title: "Automation & Integrations",
      description: "Streamline operations with smart automation solutions.",
      href: "/services/automation-and-integrations",
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
            Full-service digital marketing and technology solutions to accelerate your business growth
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <ServiceCard service={service} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

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
