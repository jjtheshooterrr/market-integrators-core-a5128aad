import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MarketIntegratorsHero from "@/components/home/MarketIntegratorsHero";
import ServicesGridAnimated from "@/components/home/ServicesGridAnimated";
import ProcessStepsAnimated from "@/components/home/ProcessStepsAnimated";
import FeaturedCaseStudy from "@/components/home/FeaturedCaseStudy";
import MetricsSection from "@/components/home/MetricsSection";
import CTASection from "@/components/home/CTASection";
import ParallaxSection from "@/components/effects/ParallaxSection";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <MarketIntegratorsHero 
          imgSrc="https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/imagebuck/FreeSample-Vectorizer-io-IMG_2671%20(1).svg"
          headline="Transform Your Digital Presence"
          subhead="Data-driven marketing strategies that deliver measurable results and sustainable growth."
          cta={{ label: "Get Started", href: "/contact-us" }}
        />
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
