import { motion } from "framer-motion";
import { Code, Smartphone, Zap, Search, ShoppingCart, Palette, Users, CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { FAQSchema } from "@/components/FAQSchema";

const ServiceWebDevelopment = () => {
  const features = [
    {
      icon: Code,
      title: "Custom Web Applications",
      description: "Tailored web solutions built with modern frameworks and technologies to meet your unique business needs."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring your website looks perfect on all devices and screen sizes."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast loading times and optimized performance for better user experience and SEO rankings."
    },
    {
      icon: Search,
      title: "SEO-Ready",
      description: "Built with search engine optimization best practices to help your site rank higher in search results."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online store development with payment integration, inventory management, and analytics."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to engage users and drive conversions."
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "GraphQL", category: "API" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Hosting" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive development strategy."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create wireframes and high-fidelity mockups to visualize the final product before development."
    },
    {
      step: "03",
      title: "Development",
      description: "Our developers build your website using best practices, clean code, and modern technologies."
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Rigorous testing across devices and browsers to ensure flawless functionality and user experience."
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "Smooth deployment to production with ongoing maintenance, updates, and technical support."
    }
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Project timelines vary based on complexity. A basic website typically takes 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during the planning phase."
    },
    {
      question: "What technologies do you use for web development?",
      answer: "We use modern, industry-standard technologies including React, Next.js, TypeScript, Node.js, and cloud platforms like AWS. Our tech stack is chosen based on your specific project requirements."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All our websites are built with a mobile-first approach, ensuring they look and function perfectly on smartphones, tablets, and desktop computers."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance packages including security updates, performance monitoring, bug fixes, and feature enhancements to keep your website running smoothly."
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer: "Yes! We build SEO-ready websites and offer additional digital marketing services including SEO optimization, PPC campaigns, and content marketing strategies."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Website Development Services | Custom Web Solutions - Market Integrators"
        description="Professional website development services. Custom web applications, responsive design, and modern frameworks."
        canonical="https://www.marketintegrators.com/services/website-development"
        keywords="website development, web development services, custom websites, responsive design"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.marketintegrators.com/" },
          { name: "Services", url: "https://www.marketintegrators.com/services" },
          { name: "Website Development", url: "https://www.marketintegrators.com/services/website-development" }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Website Development Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your vision into reality with custom web solutions that drive growth and engage your audience
            </p>
            <Button asChild size="lg">
              <Link to="/contact-us">Start Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Web Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions to build, launch, and scale your digital presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge tools and frameworks to build scalable, secure web applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border rounded-lg p-6 text-center hover:border-primary transition-colors"
              >
                <div className="font-bold text-lg mb-1">{tech.name}</div>
                <div className="text-sm text-muted-foreground">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology to deliver exceptional results on time and within budget
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our web development services
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Build Your Website?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your project and create a website that helps your business grow
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact-us">Get Started Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceWebDevelopment;
