import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CinematicHero from "@/components/home/CinematicHero";
import ServicesGridAnimated from "@/components/home/ServicesGridAnimated";
import ProcessStepsAnimated from "@/components/home/ProcessStepsAnimated";
import FeaturedCaseStudy from "@/components/home/FeaturedCaseStudy";
import CreativePortfolioPreview from "@/components/home/CreativePortfolioPreview";
import MetricsSection from "@/components/home/MetricsSection";
import CTASection from "@/components/home/CTASection";
import ParallaxSection from "@/components/effects/ParallaxSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CinematicHero />
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
