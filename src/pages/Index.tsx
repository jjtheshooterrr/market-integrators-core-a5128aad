import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroEnhanced from "@/components/home/HeroEnhanced";
import ServicesGridAnimated from "@/components/home/ServicesGridAnimated";
import ProcessStepsAnimated from "@/components/home/ProcessStepsAnimated";
import FeaturedCaseStudy from "@/components/home/FeaturedCaseStudy";
import MetricsSection from "@/components/home/MetricsSection";
import CTASection from "@/components/home/CTASection";
import CustomCursor from "@/components/effects/CustomCursor";
import ParallaxSection from "@/components/effects/ParallaxSection";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const Index = () => {
  // Smooth scroll setup (yours)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // 👇 Add THIS effect: fire a tiny GraphQL request on load
  // (use a ref so dev StrictMode doesn’t double-fire)
  const firedOnce = useRef(false);
  useEffect(() => {
    if (firedOnce.current) return;
    firedOnce.current = true;

    fetch("/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "{ __typename }" }),
      keepalive: true, // helps scanners that navigate away quickly
    }).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Header />
      <main className="pt-20">
        <HeroEnhanced />
        <ParallaxSection speed={0.3}>
          <ServicesGridAnimated />
        </ParallaxSection>
        <ParallaxSection speed={0.5}>
          <ProcessStepsAnimated />
        </ParallaxSection>
        <ParallaxSection speed={0.4}>
          <FeaturedCaseStudy />
        </ParallaxSection>
        <ParallaxSection speed={0.3}>
          <MetricsSection />
        </ParallaxSection>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
