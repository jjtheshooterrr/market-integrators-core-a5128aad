import { Lightbulb, Target, TrendingUp, Users, BarChart, Compass } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { FAQSchema } from "@/components/FAQSchema";

const ServiceDigitalStrategy = () => {

  const features = [
    {
      icon: Lightbulb,
      title: "Strategic Vision",
      description: "Comprehensive digital roadmaps aligned with your business goals and market opportunities"
    },
    {
      icon: Target,
      title: "Market Analysis",
      description: "Deep competitive research and market insights to position your brand effectively"
    },
    {
      icon: TrendingUp,
      title: "Growth Planning",
      description: "Data-driven strategies to scale your digital presence and accelerate business growth"
    },
    {
      icon: Users,
      title: "Customer Journey Mapping",
      description: "Understanding and optimizing every touchpoint in your customer's digital experience"
    },
    {
      icon: BarChart,
      title: "Performance Metrics",
      description: "Establishing KPIs and measurement frameworks to track success and ROI"
    },
    {
      icon: Compass,
      title: "Technology Roadmap",
      description: "Strategic guidance on technology stack, tools, and platforms to power your digital transformation"
    }
  ];

  const services = [
    {
      name: "Digital Transformation",
      description: "End-to-end strategy for modernizing your business operations and customer experiences",
      deliverables: ["Current State Assessment", "Technology Audit", "Transformation Roadmap", "Change Management Plan"]
    },
    {
      name: "Marketing Strategy",
      description: "Comprehensive digital marketing plans that drive awareness, engagement, and conversions",
      deliverables: ["Channel Strategy", "Content Plan", "Campaign Calendar", "Budget Allocation"]
    },
    {
      name: "Brand Positioning",
      description: "Define and strengthen your digital brand identity across all online touchpoints",
      deliverables: ["Brand Audit", "Competitive Analysis", "Positioning Statement", "Brand Guidelines"]
    },
    {
      name: "E-commerce Strategy",
      description: "Optimize your online sales channels for maximum revenue and customer satisfaction",
      deliverables: ["Platform Selection", "User Experience Design", "Conversion Optimization", "Analytics Setup"]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "Deep dive into your business, market position, competitors, and current digital maturity"
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Creating a comprehensive digital strategy aligned with your business objectives and market opportunities"
    },
    {
      number: "03",
      title: "Roadmap Creation",
      description: "Detailed implementation plan with timelines, milestones, and resource requirements"
    },
    {
      number: "04",
      title: "Execution Support",
      description: "Guidance and oversight during implementation to ensure strategic alignment and success"
    },
    {
      number: "05",
      title: "Measurement & Optimization",
      description: "Ongoing monitoring, analysis, and refinement to maximize results and ROI"
    }
  ];

  const faqs = [
    {
      question: "What is digital strategy consulting?",
      answer: "Digital strategy consulting helps businesses develop comprehensive plans for their digital transformation, marketing, and technology initiatives. We analyze your current state, identify opportunities, and create actionable roadmaps to achieve your business objectives through digital channels."
    },
    {
      question: "How long does a digital strategy project take?",
      answer: "Strategy projects typically range from 4-12 weeks depending on scope and complexity. A basic digital marketing strategy might take 4-6 weeks, while a comprehensive digital transformation strategy could take 8-12 weeks or more."
    },
    {
      question: "Do you help with implementation after strategy development?",
      answer: "Yes, we offer both strategic consulting and implementation support. We can either guide your internal teams through execution or provide hands-on implementation services across marketing, development, and technology initiatives."
    },
    {
      question: "What's the difference between digital strategy and digital marketing?",
      answer: "Digital strategy is the overarching plan that guides all your digital initiatives, including marketing, technology, operations, and customer experience. Digital marketing is one component focused specifically on promotional activities and customer acquisition."
    },
    {
      question: "How do you measure the success of a digital strategy?",
      answer: "We establish clear KPIs aligned with your business goals from the start. Common metrics include revenue growth, customer acquisition cost, conversion rates, engagement metrics, and ROI. We provide frameworks for ongoing measurement and optimization."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Digital Strategy Consulting Services - Market Integrators"
        description="Transform your business with expert digital strategy consulting. Digital transformation, marketing strategy, and growth planning."
        canonical="https://www.marketintegrators.com/services/digital-strategy"
        keywords="digital strategy, digital transformation, marketing strategy, business consulting"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.marketintegrators.com/" },
          { name: "Services", url: "https://www.marketintegrators.com/services" },
          { name: "Digital Strategy", url: "https://www.marketintegrators.com/services/digital-strategy" }
        ]}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight py-2">
              Digital Strategy Consulting
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your business with comprehensive digital strategies that drive growth, innovation, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact-us">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">View Success Stories</Link>
              </Button>
            </div >
          </div >
        </div >
      </section >

      {/* Features Grid */}
      < section className="py-20 px-4" >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Strategic Consulting That Delivers Results
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide expert guidance to navigate digital transformation and maximize your online impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section >

      {/* Services Section */}
      < section className="py-20 px-4 bg-muted/30" >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Consulting Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tailored strategies for every aspect of your digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-semibold mb-3">{service.name}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-primary mb-2">Key Deliverables:</div>
                    {service.deliverables.map((deliverable, delIndex) => (
                      <div key={delIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section >

      {/* Process Section */}
      < section className="py-20 px-4" >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Consulting Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for developing effective digital strategies
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* FAQ Section */}
      < section className="py-20 px-4 bg-muted/30" >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
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
        </div>
      </section >

      {/* CTA Section */}
      < section className="py-20 px-4" >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create a strategic roadmap for your digital success
            </p>
            <Button asChild size="lg">
              <Link to="/contact-us">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section >

      <Footer />
    </div >
  );
};

export default ServiceDigitalStrategy;