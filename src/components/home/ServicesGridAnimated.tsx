import { Link } from "react-router-dom";
import { 
  Building2, Code2, Wrench, Heart, Scale, TrendingUp, 
  GraduationCap, Home, Bot
} from "lucide-react";
import { motion } from "framer-motion";

const IndustryCarouselCard = ({ industry, index, total }: { industry: any; index: number; total: number }) => {
  const Icon = industry.icon;
  const angle = (360 / total) * index;
  const radius = 450;
  const animationDelay = -(40 / total) * index;

  return (
    <div
      className="carousel-3d-card"
      style={{
        transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      <div className="industry-flip-card h-full">
        <div className="industry-card-content">
          <div className="industry-card-front">
            <div className="industry-front-content">
              <div className="badge">
                <Icon size={32} />
              </div>
              <div className="description">
                <div className="title">
                  <p className="font-semibold">{industry.title}</p>
                </div>
              </div>
            </div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>
          <div className="industry-card-back">
            <div className="industry-back-content">
              <h3 className="font-heading font-bold text-base mb-2 text-center px-2">
                {industry.title}
              </h3>
              <p className="text-xs text-center leading-relaxed px-4">
                {industry.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesGridAnimated = () => {
  const industries = [
    {
      icon: Building2,
      title: "E-Commerce & Retail",
      description: "From DTC brands to large-scale online stores, we build and optimize omni-channel campaigns that drive consistent ROI."
    },
    {
      icon: Code2,
      title: "SaaS & Technology",
      description: "High-performance acquisition strategies for subscription and B2B SaaS companies."
    },
    {
      icon: Wrench,
      title: "Home Services & Franchises",
      description: "Scalable local lead generation and AI-enhanced visibility in search and map results."
    },
    {
      icon: Heart,
      title: "Healthcare & Medical",
      description: "HIPAA-compliant, precision-targeted digital campaigns that build trust and drive appointment growth."
    },
    {
      icon: Scale,
      title: "Legal & Professional Services",
      description: "Tailored PPC and SEO systems for law firms, accounting, and consulting practices."
    },
    {
      icon: TrendingUp,
      title: "Finance & Banking",
      description: "Data-driven performance marketing for financial products and fintech."
    },
    {
      icon: GraduationCap,
      title: "Education & eLearning",
      description: "Enrollment-focused campaigns and funnel optimization for universities and edtech platforms."
    },
    {
      icon: Home,
      title: "Real Estate & Property",
      description: "Intelligent ad delivery and local visibility strategies for agents, brokerages, and property firms."
    },
    {
      icon: Bot,
      title: "AI & Emerging Tech",
      description: "Helping tech and AI companies build brand presence and scale inbound through AI-assisted marketing."
    }
  ];

  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized digital marketing solutions tailored to the unique challenges and opportunities of your industry
          </p>
        </motion.div>

        <div className="carousel-3d">
          {industries.map((industry, index) => (
            <IndustryCarouselCard 
              key={index} 
              industry={industry}
              index={index}
              total={industries.length}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/industries"
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            View All Industries →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGridAnimated;
