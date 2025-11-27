import { Link } from "react-router-dom";
import { BarChart3, TrendingUp, Database, PieChart, Target, Lightbulb, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { FAQSchema } from "@/components/FAQSchema";

const ServiceDataAnalytics = () => {
  const features = [{
    icon: BarChart3,
    title: "Advanced Data Visualization",
    description: "Transform complex data into clear, actionable insights with interactive dashboards and reports."
  }, {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Leverage machine learning to forecast trends and make data-driven decisions for your business."
  }, {
    icon: Database,
    title: "Data Integration",
    description: "Consolidate data from multiple sources into a unified analytics platform for comprehensive insights."
  }, {
    icon: PieChart,
    title: "Business Intelligence",
    description: "Convert raw data into meaningful business metrics that drive strategic decision-making."
  }, {
    icon: Target,
    title: "Customer Analytics",
    description: "Understand customer behavior, preferences, and lifetime value to optimize marketing strategies."
  }, {
    icon: Lightbulb,
    title: "Custom Reporting",
    description: "Tailored reports and KPI tracking aligned with your specific business objectives and goals."
  }];
  const solutions = [{
    title: "Marketing Analytics",
    description: "Track campaign performance, ROI, and customer acquisition costs across all channels."
  }, {
    title: "Sales Analytics",
    description: "Monitor sales pipelines, conversion rates, and revenue trends to optimize sales strategies."
  }, {
    title: "Operational Analytics",
    description: "Improve efficiency by analyzing operational processes and identifying bottlenecks."
  }, {
    title: "Financial Analytics",
    description: "Gain insights into financial performance, profitability, and cash flow management."
  }];
  const process = [{
    step: "01",
    title: "Data Discovery",
    description: "Identify data sources, quality, and business objectives to establish analytics roadmap."
  }, {
    step: "02",
    title: "Data Integration",
    description: "Connect and consolidate data from various sources into a centralized analytics platform."
  }, {
    step: "03",
    title: "Analytics Implementation",
    description: "Build custom dashboards, reports, and predictive models tailored to your needs."
  }, {
    step: "04",
    title: "Insights & Optimization",
    description: "Continuous monitoring, analysis, and refinement to maximize business value."
  }];
  const tools = [{
    name: "Google Analytics",
    type: "Web Analytics"
  }, {
    name: "Tableau",
    type: "Data Visualization"
  }, {
    name: "Power BI",
    type: "Business Intelligence"
  }, {
    name: "Python/R",
    type: "Statistical Analysis"
  }, {
    name: "SQL",
    type: "Database Queries"
  }, {
    name: "Looker",
    type: "Data Exploration"
  }];
  const faqs = [{
    question: "What types of data can you analyze?",
    answer: "We work with all types of business data including website analytics, sales data, customer data, marketing metrics, financial records, operational data, and third-party data sources."
  }, {
    question: "How long does it take to set up analytics?",
    answer: "Initial setup typically takes 2-4 weeks depending on complexity. Basic dashboards can be ready in as little as one week, while comprehensive analytics platforms may take 4-8 weeks."
  }, {
    question: "Do I need technical knowledge to use the analytics tools?",
    answer: "No. We design user-friendly dashboards and provide training so your team can easily access and interpret data without technical expertise."
  }, {
    question: "Can you integrate with our existing tools?",
    answer: "Yes. We integrate with most major platforms including CRMs, marketing tools, e-commerce platforms, and financial systems to provide unified analytics."
  }, {
    question: "What's the ROI of investing in data analytics?",
    answer: "Most businesses see 3-5x ROI within the first year through improved decision-making, cost reduction, and revenue optimization. Specific ROI varies by industry and implementation."
  }];
  return <div className="min-h-screen bg-background">
    <SEO
      title="Data Analytics Services | Business Intelligence - Market Integrators"
      description="Turn data into insights. Business intelligence, data visualization, and predictive analytics."
      canonical="https://www.marketintegrators.com/services/data-analytics"
      keywords="data analytics, business intelligence, data visualization, analytics consulting"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.marketintegrators.com/" },
        { name: "Services", url: "https://www.marketintegrators.com/services" },
        { name: "Data Analytics", url: "https://www.marketintegrators.com/services/data-analytics" }
      ]}
    />
    <FAQSchema faqs={faqs} />
    <Header />

    {/* Hero Section */}
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
          <BarChart3 className="w-4 h-4" />
          <span className="text-sm font-medium">Data-Driven Business Intelligence</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Turn Data Into Actionable Insights
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Unlock the power of your data with advanced analytics, predictive modeling, and intelligent reporting that drives business growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/contact-us">Get Free Analytics Audit</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/case-studies">View Success Stories</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Problem/Solution Section */}
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-destructive">Common Data Challenges</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <span>Data scattered across multiple platforms and tools</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <span>Inability to measure ROI and marketing effectiveness</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <span>Making decisions based on gut feeling instead of data</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <span>Complex reports that don't provide clear answers</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Analytics Solution</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Unified data platform with all metrics in one place</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Clear ROI tracking and attribution modeling</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Data-driven insights for confident decision making</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Simple dashboards with actionable recommendations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Analytics Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to make data-driven decisions and grow your business
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
    </section>

    {/* Solutions Section */}
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics Solutions By Department</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Specialized analytics for every aspect of your business
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => <div key={index} className="bg-muted/50 p-8 rounded-lg border">
            <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
            <p className="text-muted-foreground">{solution.description}</p>
          </div>)}
        </div>
      </div>
    </section>

    {/* Tools & Technologies */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools & Technologies We Use</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Industry-leading platforms and technologies
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => <div key={index} className="bg-background p-6 rounded-lg border text-center">
            <h3 className="font-semibold mb-1">{tool.name}</h3>
            <p className="text-sm text-muted-foreground">{tool.type}</p>
          </div>)}
        </div>
      </div>
    </section>

    {/* Process Section */}
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Analytics Process</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A proven methodology to unlock the value of your data
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
    </section>

    {/* Pricing Section */}

    {/* FAQ Section */}
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Common questions about our data analytics services
          </p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => <div key={index} className="bg-muted/50 p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>)}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Unlock Your Data's Potential?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Get a free analytics audit and discover insights hidden in your data.
        </p>
        <Button size="lg" asChild>
          <Link to="/contact-us">
            Request Free Audit <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>

    <Footer />
  </div>;
};
export default ServiceDataAnalytics;