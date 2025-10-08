import { useEffect, useState } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroEnhanced from "@/components/home/HeroEnhanced";
import ServicesGridAnimated from "@/components/home/ServicesGridAnimated";
import ProcessStepsAnimated from "@/components/home/ProcessStepsAnimated";
import FeaturedCaseStudy from "@/components/home/FeaturedCaseStudy";
import MetricsSection from "@/components/home/MetricsSection";
import CTASection from "@/components/home/CTASection";
import ParallaxSection from "@/components/effects/ParallaxSection";

// Regular import is fine in React (no SSR), but you can also React.lazy this.
import LoadingScreen from "@/components/effects/LoadingScreen";

const LOGO_SVG =
  "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/imagebuck/FreeSample-Vectorizer-io-IMG_2671%20(1)%20(1).svg";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  // Lock body scroll while the loader is visible
  useEffect(() => {
    if (showLoading) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [showLoading]);

  return (
    <>
      {showLoading && (
        <LoadingScreen
          imgSrc={LOGO_SVG}
          onComplete={() => setShowLoading(false)}
          brandRed="#ef1f2b"
          background="#ffffff"
        />
      )}

      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <HeroEnhanced />

          {/* Mount heavier/scroll-bound sections AFTER the loading screen for smoother first paint */}
          {!showLoading && (
            <>
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
            </>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
