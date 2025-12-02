import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, Workflow, Link2, Clock, ArrowRightLeft, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { FAQSchema } from "@/components/FAQSchema";

const ServiceAutomation = () => {
  const services = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and streamline business processes"
    },
    {
      icon: Link2,
      title: "API Integrations",
      description: "Connect your tools and systems for seamless data flow"
    },
    {
      icon: ArrowRightLeft,
      title: "Data Synchronization",
      description: "Keep your systems in sync with real-time data transfers"
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Automate email campaigns, lead nurturing, and customer journeys"
    },
    {
      icon: Clock,
      title: "Task Scheduling",
      description: "Schedule automated tasks and processes to run at optimal times"
    },
    {
      icon: TrendingUp,
      title: "Process Optimization",
      description: "Identify and automate bottlenecks for maximum efficiency"
    }
  ];

  const benefits = [
    "Save up to 40% of time on manual tasks",
    "Reduce human errors and improve accuracy",
    "24/7 automated operations without downtime",
    "Scale operations without adding headcount",
    "Improve employee productivity and satisfaction",
    "Real-time data synchronization across platforms",
    "Faster response times to customers",
    "Better insights through connected systems"
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Map current workflows, identify inefficiencies, and prioritize automation opportunities"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Design automation workflows and select the right tools and integrations"
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "Build custom automations and connect your systems via APIs"
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Thoroughly test all automations to ensure reliability and accuracy"
    },
    {
      step: "05",
      title: "Deployment & Training",
      description: "Launch automations and train your team on new workflows"
    },
    {
      step: "06",
      title: "Monitoring & Optimization",
      description: "Monitor performance and continuously refine for better results"
    }
  ];

  const platforms = [
    "Zapier & Make (Integromat)",
    "Salesforce & HubSpot",
    "Microsoft Power Automate",
    "Custom API Development",
    "Slack & Microsoft Teams",
    "Google Workspace",
    "Shopify & E-commerce",
    "CRM & Marketing Tools"
  ];

  const useCases = [
    {
      title: "Lead Management",
      description: "Automatically capture, qualify, and route leads to the right sales rep"
    },
    {
      title: "Invoice Processing",
      description: "Extract data from invoices and sync with accounting software"
    },
    {
      title: "Customer Onboarding",
      description: "Trigger welcome emails, account setup, and training materials automatically"
    },
    {
      title: "Inventory Sync",
      description: "Keep product inventory synchronized across multiple sales channels"
    },
    {
      title: "Report Generation",
      description: "Automatically compile and distribute reports on a schedule"
    },
    {
      title: "Social Media Posting",
      description: "Schedule and publish content across multiple platforms"
    }
  ];

  const faqs = [
    {
      question: "What tools do you use for automation?",
      answer: "We work with leading platforms like Zapier, Make (formerly Integromat), Power Automate, and custom API integrations depending on your specific needs and existing tech stack."
    },
    {
      question: "Is automation secure?",
      answer: "Yes, security is our top priority. We use encrypted connections, secure API keys, and follow industry best practices to ensure your data remains safe during transfer and processing."
    },
    {
      question: "Can you automate legacy systems?",
      answer: "In many cases, yes. Even if your system doesn't have a modern API, we can often use RPA (Robotic Process Automation) or database connectors to bridge the gap."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Automation & Integration Services - Market Integrators"
        description="Streamline operations with automation and system integration. Connect tools, automate workflows, boost productivity."
        canonical="https://www.marketintegrators.com/services/automation-and-integrations"
        keywords="automation services, workflow automation, system integration, business automation"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.marketintegrators.com/" },
          { name: "Services", url: "https://www.marketintegrators.com/services" },
          { name: "Automation & Integrations", url: "https://www.marketintegrators.com/services/automation-and-integrations" }
        ]}
      />
      <FAQSchema faqs={faqs} />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Automation & Integrations
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Eliminate manual work and connect your systems with intelligent automation solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact-us">Start Automating</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">View Examples</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Automation Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions to automate and integrate your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Popular Automation Use Cases</h2>
            <p className="text-xl text-muted-foreground">
              Real-world applications that drive business value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all hover:scale-105">
                  <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm">{useCase.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Automation Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology for implementing automation
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl font-bold text-primary/20">{item.step}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platforms & Tools We Integrate</h2>
            <p className="text-xl text-muted-foreground">
              We work with leading automation and integration platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all hover:scale-105">
                  <p className="font-semibold">{platform}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Benefits of Automation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Measurable ROI</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our automation solutions deliver tangible business results with fast payback periods
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-bold mb-2">40% Time Saved</h3>
                <p className="text-muted-foreground">Average time reduction on automated tasks</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">95% Accuracy</h3>
                <p className="text-muted-foreground">Error reduction through automation</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">6 Month ROI</h3>
                <p className="text-muted-foreground">Typical payback period for automation projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-primary/5">
            <Zap className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Ready to Automate Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how automation can transform your operations and free up your team
            </p>
            <Button asChild size="lg">
              <Link to="/contact-us">Schedule Consultation</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceAutomation;