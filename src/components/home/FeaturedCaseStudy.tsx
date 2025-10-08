import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import caseStudyImage from "@/assets/case-study-health.jpg";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const FeaturedCaseStudy = () => {
  const metrics = [
    { icon: TrendingUp, label: "PPC Conversions", value: 990, suffix: "%", prefix: "+", color: "text-primary" },
    { icon: Users, label: "Website Traffic", value: 2000, suffix: "%", prefix: "+", color: "text-primary" },
    { icon: DollarSign, label: "Lower CPA", value: 50, suffix: "%", color: "text-primary" },
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
          <h2 className="mb-4">Proven Results</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real success stories from businesses we've helped grow
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Healthcare Industry
            </div>
            <h3 className="text-3xl mb-6">Internal Healing & Wellness MD</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A medical wellness center struggling with low online visibility and high patient acquisition costs. Through our integrated PPC and SEO strategy, we transformed their digital presence and dramatically increased patient bookings.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <Icon className={metric.color} size={28} />
                    </div>
                    <div className={`text-3xl font-bold ${metric.color} mb-1`}>
                      <CountUp
                        end={metric.value}
                        duration={2.5}
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild size="lg" className="btn-text">
                <Link to="/case-studies">
                  View All Case Studies →
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={caseStudyImage}
                alt="Internal Healing & Wellness MD"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
