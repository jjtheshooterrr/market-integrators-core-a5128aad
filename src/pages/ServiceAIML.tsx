import { motion } from "framer-motion";
import { Brain, Sparkles, TrendingUp, Shield, Zap, CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ServiceAIML = () => {
  const features = [
    {
      icon: Brain,
      title: "Custom AI Models",
      description: "Tailored machine learning solutions designed for your specific business needs"
    },
    {
      icon: Sparkles,
      title: "Natural Language Processing",
      description: "Advanced NLP for chatbots, sentiment analysis, and text understanding"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends and behaviors with powerful ML algorithms"
    },
    {
      icon: Shield,
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual AI capabilities"
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Streamline operations with intelligent process automation"
    }
  ];

  const solutions = [
    "Recommendation Systems",
    "Fraud Detection",
    "Customer Segmentation",
    "Demand Forecasting",
    "Speech Recognition",
    "Anomaly Detection"
  ];

  const process = [
    { step: "01", title: "Discovery & Analysis", description: "Understanding your data and business objectives" },
    { step: "02", title: "Model Development", description: "Building and training custom AI models" },
    { step: "03", title: "Testing & Validation", description: "Rigorous testing to ensure accuracy" },
    { step: "04", title: "Deployment", description: "Seamless integration into your systems" },
    { step: "05", title: "Optimization", description: "Continuous monitoring and improvement" }
  ];

  const faqs = [
    {
      question: "What industries can benefit from AI and ML?",
      answer: "AI and ML solutions are valuable across all industries including healthcare, finance, retail, manufacturing, and more. Any business with data can benefit from AI-powered insights."
    },
    {
      question: "How long does it take to develop an AI model?",
      answer: "Development timelines vary based on complexity, typically ranging from 2-6 months. We provide detailed timelines during the initial consultation."
    },
    {
      question: "Do I need a large dataset?",
      answer: "While more data generally improves accuracy, we can work with various dataset sizes and implement data augmentation techniques when needed."
    },
    {
      question: "How do you ensure AI model accuracy?",
      answer: "We use rigorous testing methodologies, cross-validation, and continuous monitoring to maintain high accuracy levels and prevent model drift."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
              AI & Machine Learning Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your business with cutting-edge artificial intelligence and machine learning technologies
            </p>
            <Button asChild size="lg" className="btn-text">
              <Link to="/contact-us">Start Your AI Journey</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container-custom">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            AI Capabilities
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

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            AI Solutions We Deliver
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium">{solution}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container-custom">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Our AI Development Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 bg-background rounded-lg shadow-sm"
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
      <section className="py-20 px-4">
        <div className="container-custom">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-muted/30 px-6 rounded-lg">
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
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how AI and machine learning can transform your business
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact-us">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceAIML;
