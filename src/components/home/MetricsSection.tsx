import { motion } from "framer-motion";
import MetricsDisplay from "./MetricsDisplay";

const MetricsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Track Record
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real numbers from real campaigns. See how we've helped businesses grow.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MetricsDisplay />
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection;
