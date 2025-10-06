import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import ProcessSteps from "@/components/home/ProcessSteps";
import FeaturedCaseStudy from "@/components/home/FeaturedCaseStudy";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <ServicesGrid />
        <ProcessSteps />
        <FeaturedCaseStudy />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
