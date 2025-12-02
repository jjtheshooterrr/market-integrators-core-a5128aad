import { Smartphone, Zap, Users, RefreshCw, Code, Palette } from "lucide-react";
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

const ServiceAppDevelopment = () => {

  const features = [
    {
      icon: Smartphone,
      title: "Native & Cross-Platform Apps",
      description: "Build high-performance mobile applications for iOS and Android using native or cross-platform technologies"
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized code and architecture ensuring smooth, responsive user experiences across all devices"
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed with user experience at the forefront, driving engagement and retention"
    },
    {
      icon: RefreshCw,
      title: "Continuous Updates",
      description: "Regular maintenance, updates, and feature enhancements to keep your app competitive"
    },
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Scalable, maintainable code following industry best practices and design patterns"
    },
    {
      icon: Palette,
      title: "Custom Solutions",
      description: "Tailored app development aligned with your specific business requirements and brand identity"
    }
  ];

  const platforms = [
    {
      name: "iOS Development",
      description: "Native Swift/SwiftUI apps for iPhone and iPad with seamless Apple ecosystem integration",
      technologies: ["Swift", "SwiftUI", "Xcode", "Core Data"]
    },
    {
      name: "Android Development",
      description: "Native Kotlin/Java apps optimized for the diverse Android device ecosystem",
      technologies: ["Kotlin", "Jetpack Compose", "Android Studio", "Firebase"]
    },
    {
      name: "Cross-Platform",
      description: "Single codebase solutions for both iOS and Android using modern frameworks",
      technologies: ["React Native", "Flutter", "Expo", "Ionic"]
    },
    {
      name: "Progressive Web Apps",
      description: "Web-based apps that work like native apps with offline capabilities",
      technologies: ["PWA", "Service Workers", "Web APIs", "Responsive Design"]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Understanding your vision, target audience, and business objectives to create a comprehensive app strategy"
    },
    {
      number: "02",
      title: "UX/UI Design",
      description: "Creating wireframes, prototypes, and polished designs that deliver exceptional user experiences"
    },
    {
      number: "03",
      title: "Development",
      description: "Building your app with clean code, robust architecture, and regular progress updates"
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Rigorous testing across devices and scenarios to ensure reliability and performance"
    },
    {
      number: "05",
      title: "Launch & Support",
      description: "App store deployment, monitoring, and ongoing maintenance to ensure continued success"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to develop a mobile app?",
      answer: "Development timelines vary based on complexity, features, and platform. A simple app might take 2-3 months, while more complex applications can take 6-9 months or longer. We provide detailed timelines during the planning phase."
    },
    {
      question: "Should I build a native app or use a cross-platform framework?",
      answer: "Native apps offer the best performance and access to platform-specific features, ideal for complex apps. Cross-platform frameworks like React Native or Flutter are cost-effective for simpler apps that need to be on both iOS and Android. We'll recommend the best approach based on your requirements."
    },
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Platforms & Technologies
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We develop for all major platforms using cutting-edge technologies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {platforms.map((platform, index) => (
          <Card key={index} className="border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-semibold mb-3">{platform.name}</h3>
              <p className="text-muted-foreground mb-4">{platform.description}</p>
              <div className="flex flex-wrap gap-2">
                {platform.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
      </section >

  {/* Process Section */ }
  < section className = "py-20 px-4" >
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Our Development Process
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A proven methodology that delivers exceptional results
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

  {/* FAQ Section */ }
  < section className = "py-20 px-4 bg-muted/30" >
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

  {/* CTA Section */ }
  < section className = "py-20 px-4" >
    <div className="container-custom">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
          Ready to Build Your App?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Let's discuss your project and create an app that exceeds expectations
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

export default ServiceAppDevelopment;