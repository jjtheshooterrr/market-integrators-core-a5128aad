import { motion } from "framer-motion";
import { Cloud, Server, Lock, Zap, Globe, CheckCircle, ArrowUpDown, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { FAQSchema } from "@/components/FAQSchema";

const ServiceCloud = () => {
  const features = [
    {
      icon: Server,
      title: "Cloud Infrastructure",
      description: "Scalable and reliable infrastructure solutions tailored to your needs"
    },
    {
      icon: ArrowUpDown,
      title: "Cloud Migration",
      description: "Seamless transition of your systems to the cloud with zero downtime"
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description: "Enterprise-grade security with industry compliance standards"
    },
    {
      icon: Zap,
      title: "Auto-Scaling",
      description: "Automatically adjust resources based on demand"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Deploy applications across multiple regions worldwide"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock monitoring and technical support"
    }
  ];

  const platforms = [
    "Amazon Web Services (AWS)",
    "Microsoft Azure",
    "Google Cloud Platform",
    "DigitalOcean",
    "IBM Cloud",
    "Oracle Cloud"
  ];

  const services = [
    "Infrastructure as a Service (IaaS)",
    "Platform as a Service (PaaS)",
    "Software as a Service (SaaS)",
    "Backup & Disaster Recovery",
    "Cloud Storage Solutions",
    "Serverless Computing"
  ];

  const process = [
    { step: "01", title: "Assessment", description: "Evaluate your current infrastructure and requirements" },
    { step: "02", title: "Strategy", description: "Design a custom cloud architecture for your needs" },
    { step: "03", title: "Migration", description: "Execute seamless transition with minimal disruption" },
    { step: "04", title: "Optimization", description: "Fine-tune performance and cost efficiency" },
    { step: "05", title: "Management", description: "Ongoing monitoring and continuous improvement" }
  ];

  const faqs = [
    {
      question: "What are the benefits of cloud computing?",
      answer: "Cloud computing offers scalability, cost savings, flexibility, disaster recovery, automatic updates, increased collaboration, and the ability to work from anywhere with internet access."
    },
    {
      question: "How secure is cloud storage?",
      answer: "Cloud providers implement enterprise-grade security including encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC 2, ISO 27001, and HIPAA."
    },
    {
      question: "How long does cloud migration take?",
      answer: "Migration timelines vary based on infrastructure complexity and data volume, typically ranging from a few weeks to several months. We provide detailed timelines during the assessment phase."
    },
    {
      question: "Can I use multiple cloud providers?",
      answer: "Yes! Multi-cloud and hybrid cloud strategies are common. We can help you leverage the best features of different providers while maintaining seamless integration."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Cloud Services | Infrastructure & Migration - Market Integrators"
        description="Professional cloud services and infrastructure management. AWS, Azure, Google Cloud migration and optimization."
        canonical="https://www.marketintegrators.com/services/cloud"
        keywords="cloud services, cloud infrastructure, AWS, Azure, Google Cloud"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.marketintegrators.com/" },
          { name: "Services", url: "https://www.marketintegrators.com/services" },
          { name: "Cloud Services", url: "https://www.marketintegrators.com/services/cloud" }
        ]}
      />
      <FAQSchema faqs={faqs} />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Cloud Computing Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Scale your business with secure, reliable, and cost-effective cloud solutions
            </p>
            <Button asChild size="lg" className="btn-text">
              <Link to="/contact-us">Get Cloud Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container-custom">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Cloud Solutions We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Cloud Platforms We Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium">{platform}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container-custom">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Service Models
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 bg-background rounded-lg shadow-sm text-center"
              >
                <Cloud className="w-10 h-10 text-primary mx-auto mb-3" />
                <span className="font-semibold">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Our Cloud Migration Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 bg-muted/30 rounded-lg shadow-sm"
              >
                <div className="text-4xl font-bold text-primary/20">{item.step}</div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container-custom">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background px-6 rounded-lg">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's build a cloud strategy that scales with your business
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact-us">Schedule Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceCloud;
