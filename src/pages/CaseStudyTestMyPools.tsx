import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import testmypoolsLogo from "@/assets/testmypools-logo.webp";
import testmypoolsMacview from "@/assets/testmypools-macview.webp";
import { OptimizedImage } from "@/components/OptimizedImage";

const CaseStudyTestMyPools = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>TestMyPools Case Study | Full AI SaaS Creation & Product Launch</title>
        <meta
          name="description"
          content="How we built TestMyPools from concept to launch — a complete AI SaaS platform integrating Google Vision, LLM APIs, and full subscription automation."
        />
        <meta property="og:title" content="TestMyPools Case Study | Full AI SaaS Creation & Product Launch" />
        <meta
          property="og:description"
          content="How we built TestMyPools from concept to launch — a complete AI SaaS platform integrating Google Vision, LLM APIs, and full subscription automation."
        />
        <meta property="og:image" content={testmypoolsMacview} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-4 bg-secondary/50">
          <div className="container-custom">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/case-studies">Case Studies</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>TestMyPools</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom max-w-4xl text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <OptimizedImage
                src={testmypoolsLogo}
                alt="TestMyPools logo"
                className="h-auto w-[180px] md:w-[180px] object-contain"
              />
            </div>

            {/* Title */}
            <h1 className="mb-6">TestMyPools — AI SaaS Creation & Product Launch</h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Complete AI SaaS platform built from concept to launch — integrating Google Vision, LLM APIs, and full subscription automation.
            </p>

            {/* MacBook Mockup */}
            <div className="mb-6">
              <OptimizedImage
                src={testmypoolsMacview}
                alt="MacBook mockup showing TestMyPools AI dashboard and marketing site"
                className="w-full max-w-[1100px] mx-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Caption */}
            <p className="text-sm text-muted-foreground italic">
              AI-driven SaaS platform for intelligent pool testing and maintenance management.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              TestMyPools is an AI-powered SaaS platform built from the ground up to modernize pool maintenance. Designed for both professionals and homeowners, it analyzes test strips using image recognition, tracks water chemistry, and automates route management — all in one dashboard.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team led the entire creation of the platform — from initial concept to full-stack development, AI logic, UX design, and business model setup.
            </p>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The pool industry lacked any intelligent, modern solution that combined testing, maintenance, and client management. Most tools were outdated, manual, or segmented.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We set out to solve several key challenges:
            </p>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>No modern, cloud-based solution for pool chemical tracking and testing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Lack of visual analysis tools for test strips</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>No unified system connecting pool technicians, clients, and data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Manual calculations, slow reporting, and high user friction</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Our Solution Section */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-6">Our Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We built TestMyPools as a complete AI SaaS ecosystem — merging advanced tech with practical tools for real-world use.
            </p>
            <p className="text-lg font-semibold mb-4">What we handled end-to-end:</p>
            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-xl font-bold mb-2">Concept & Architecture</h3>
                <p className="text-muted-foreground">
                  Defined the entire software vision, database schema, and modular architecture using Supabase + Deno backend.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-xl font-bold mb-2">AI & LLM Integration</h3>
                <p className="text-muted-foreground">
                  Combined Google Vision API for image recognition with DeepSeek + LLM pipelines for intelligent chemical analysis and recommendations.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-xl font-bold mb-2">Custom Logic Engine</h3>
                <p className="text-muted-foreground">
                  Built a multi-layer calculation engine for water chemistry, weather impact, and maintenance forecasting.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-xl font-bold mb-2">UX/UI & Brand Design</h3>
                <p className="text-muted-foreground">
                  Designed the full web experience — from marketing site to logged-in dashboards, built for clarity and modern SaaS appeal.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-xl font-bold mb-2">Payments & Access</h3>
                <p className="text-muted-foreground">
                  Integrated NowPayments for automated subscriptions, plan enforcement, and affiliate logic.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-xl font-bold mb-2">Scaling Foundation</h3>
                <p className="text-muted-foreground">
                  Architected the platform for future multi-region use, including route optimization and AI chat integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-8 text-center">Results</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Within 3 months of launch and private beta:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-premium p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Complete SaaS MVP built from concept to production</p>
              </div>
              <div className="card-premium p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">93%+</div>
                <p className="text-muted-foreground">AI accuracy for image-based chemical detection</p>
              </div>
              <div className="card-premium p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">+300%</div>
                <p className="text-muted-foreground">User growth during beta testing</p>
              </div>
              <div className="card-premium p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">Month 1</div>
                <p className="text-muted-foreground">Monetization via seamless subscription system</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground text-center mt-8">
              Adopted by professional pool technicians as a daily workflow tool
            </p>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="mb-8 text-center">Key Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg">Fully conceived, designed, and developed by our team</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg">Multi-API integration with Google Vision & DeepSeek LLMs</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg">Automated subscription and AI-driven analysis pipeline</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg">Modern SaaS UI/UX for both technicians and homeowners</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg">Built-in scalability for global rollout</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-3xl text-center">
            <blockquote className="text-2xl font-serif italic text-foreground mb-6">
              "We didn't just get a website — we got a complete SaaS business. From the AI engine to payments, everything was built from scratch and just works."
            </blockquote>
            <p className="text-muted-foreground font-medium">— TestMyPools Founder</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-6">Have an idea worth building into software?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We create complete SaaS platforms — from product concept to launch — powered by AI, automation, and clean design.
            </p>
            <Button asChild size="lg" variant="secondary" className="btn-text">
              <Link to="/contact-us">Request Proposal</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyTestMyPools;
