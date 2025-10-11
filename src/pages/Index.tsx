import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CinematicHero from "@/components/home/CinematicHero";
import ServicesGridAnimated from "@/components/home/ServicesGridAnimated";
import ProcessStepsAnimated from "@/components/home/ProcessStepsAnimated";
import FeaturedCaseStudy from "@/components/home/FeaturedCaseStudy";
import MetricsSection from "@/components/home/MetricsSection";
import CTASection from "@/components/home/CTASection";
import ParallaxSection from "@/components/effects/ParallaxSection";

const Index = ({ loadingComplete = false }: { loadingComplete?: boolean }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CinematicHero loadingComplete={loadingComplete} />
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
