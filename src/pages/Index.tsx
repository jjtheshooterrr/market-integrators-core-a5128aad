import { lazy, Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CinematicHero from "@/components/home/CinematicHero";
import SphereLoader from "@/components/effects/SphereLoader";

// Lazy load heavy components for better performance
const ServicesGridAnimated = lazy(() => import("@/components/home/ServicesGridAnimated"));
const ProcessStepsAnimated = lazy(() => import("@/components/home/ProcessStepsAnimated"));
const FeaturedCaseStudy = lazy(() => import("@/components/home/FeaturedCaseStudy"));
const CreativePortfolioPreview = lazy(() => import("@/components/home/CreativePortfolioPreview"));
const MetricsSection = lazy(() => import("@/components/home/MetricsSection"));
const CTASection = lazy(() => import("@/components/home/CTASection"));
const ParallaxSection = lazy(() => import("@/components/effects/ParallaxSection"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CinematicHero />
        <Suspense fallback={<SphereLoader />}>
          <ParallaxSection speed={0.3}>
            <ServicesGridAnimated />
          </ParallaxSection>
          <ParallaxSection speed={0.5}>
            <ProcessStepsAnimated />
          </ParallaxSection>
          <FeaturedCaseStudy />
          <CreativePortfolioPreview />
          <ParallaxSection speed={0.3}>
            <MetricsSection />
          </ParallaxSection>
          <CTASection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
