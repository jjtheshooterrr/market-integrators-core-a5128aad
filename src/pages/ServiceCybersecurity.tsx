import { Link } from "react-router-dom";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle2, FileSearch, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { FAQSchema } from "@/components/FAQSchema";

const ServiceCybersecurity = () => {
  const features = [{
    icon: Shield,
    title: "Threat Detection & Prevention",
    description: "24/7 monitoring and real-time threat detection to protect your digital assets from cyber attacks."
  }, {
    icon: Lock,
    title: "Data Encryption",
    description: "Enterprise-grade encryption solutions to secure sensitive data both in transit and at rest."
  }, {
    icon: Eye,
    title: "Security Audits",
    description: "Comprehensive security assessments to identify vulnerabilities before they become threats."
  }, {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Rapid response team ready to contain and remediate security incidents 24/7."
  }, {
    icon: CheckCircle2,
    title: "Compliance Management",
    description: "Ensure your business meets industry standards like GDPR, HIPAA, and PCI-DSS."
  }, {
    icon: FileSearch,
    title: "Vulnerability Scanning",
    description: "Regular automated scans to identify and patch security weaknesses in your systems."
  }];
  const solutions = [{
    title: "Network Security",
    description: "Firewall configuration, intrusion detection, and secure network architecture."
  }, {
    title: "Cloud Security",
    description: "Protect your cloud infrastructure with advanced security controls and monitoring."
  }, {
    title: "Endpoint Protection",
    description: "Secure all devices accessing your network with advanced endpoint security."
  }, {
    title: "Security Training",
    description: "Employee security awareness training to prevent social engineering attacks."
  }];
  const process = [{
    step: "01",
    title: "Security Assessment",
    description: "Comprehensive evaluation of your current security posture and vulnerabilities."
  }, {
    step: "02",
    title: "Strategy Development",
    description: "Custom security strategy tailored to your business needs and compliance requirements."
  }, {
    step: "03",
    title: "Implementation",
    description: "Deploy security solutions with minimal disruption to your operations."
  }, {
    step: "04",
    title: "Continuous Monitoring",
    description: "24/7 threat monitoring and regular security updates to stay ahead of threats."
  }];
  const faqs = [{
    question: "Why is cybersecurity important for my business?",
    answer: "Cyber attacks can result in data breaches, financial losses, reputation damage, and legal penalties. Protecting your digital assets is essential for business continuity and customer trust."
  }, {
    question: "What size businesses do you work with?",
    answer: "We provide cybersecurity solutions for businesses of all sizes, from startups to enterprise organizations, with customized solutions for each."
  }, {
    question: "How quickly can you respond to a security incident?",
    answer: "Our incident response team is available 24/7 and can respond to critical incidents within minutes of detection."
  }, {
    question: "Do you offer compliance assistance?",
    answer: "Yes, we help businesses achieve and maintain compliance with various regulations including GDPR, HIPAA, PCI-DSS, and more."
  }, {
    question: "What's included in your security audits?",
    answer: "Our security audits include vulnerability assessments, penetration testing, security policy reviews, and detailed reports with actionable recommendations."
  }];
  return <div className="min-h-screen bg-background">
    <SEO
      title="Cybersecurity Services | Security Solutions - Market Integrators"
      description="Comprehensive cybersecurity services. Security audits, threat detection, and data protection."
      canonical="https://www.marketintegrators.com/services/cybersecurity"
      keywords="cybersecurity services, security consulting, threat detection, security audits"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.marketintegrators.com/" },
        { name: "Services", url: "https://www.marketintegrators.com/services" },
        { name: "Cybersecurity Services", url: "https://www.marketintegrators.com/services/cybersecurity" }
      ]}
    />
    <FAQSchema faqs={faqs} />
    <Header />

    {/* Hero Section */}
    {/* Hero Section */}
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
          <Shield className="w-4 h-4" />
          <span className="text-sm font-medium">Enterprise Cybersecurity Solutions</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight py-2">
          Protect Your Business from Cyber Threats
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Comprehensive cybersecurity solutions to safeguard your digital assets, protect sensitive data, and ensure business continuity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/contact-us">Get Security Assessment</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/case-studies">View Case Studies</Link>
          </Button>
        </div >
      </div >
    </section >

    {/* Problem/Solution Section */}
    < section className="py-20 px-4 sm:px-6 lg:px-8" >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-destructive">The Threat Landscape</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <span>Cyber attacks increasing by 38% year-over-year</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <span>Average data breach costs $4.45 million</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <span>Ransomware attacks targeting businesses of all sizes</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <span>Compliance violations leading to hefty fines</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Solution</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Proactive threat detection and prevention</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Multi-layered security architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>24/7 security operations center (SOC)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Compliance and regulatory expertise</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section >

    {/* Features Section */}
    < section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50" >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Security Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            End-to-end cybersecurity solutions to protect your business at every level
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-background p-6 rounded-lg border hover:border-primary transition-colors">
            <feature.icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>)}
        </div>
      </div>
    </section >

    {/* Solutions Section */}
    < section className="py-20 px-4 sm:px-6 lg:px-8" >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Solutions We Provide</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tailored security solutions for every aspect of your digital infrastructure
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => <div key={index} className="bg-muted/50 p-8 rounded-lg border">
            <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
            <p className="text-muted-foreground">{solution.description}</p>
          </div>)}
        </div>
      </div>
    </section >

    {/* Process Section */}
    < section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50" >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Security Process</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to securing your business
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item, index) => <div key={index} className="text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {item.step}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>)}
        </div>
      </div>
    </section >

    {/* Pricing Section */}
    < section className="py-20 px-4 sm:px-6 lg:px-8" >

    </section >

    {/* FAQ Section */}
    < section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50" >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Common questions about our cybersecurity services
          </p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => <div key={index} className="bg-background p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>)}
        </div>
      </div>
    </section >

    {/* CTA Section */}
    < section className="py-20 px-4 sm:px-6 lg:px-8" >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Secure Your Business?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Get a free security assessment and discover how we can protect your digital assets.
        </p>
        <Button size="lg" asChild>
          <Link to="/contact-us">
            Schedule Free Assessment <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section >

    <Footer />
  </div >;
};
export default ServiceCybersecurity;