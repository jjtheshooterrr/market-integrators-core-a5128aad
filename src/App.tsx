import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client/react";
import { apolloClient } from "@/lib/apolloClient";
import CustomCursor from "@/components/effects/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyAPRenovations from "./pages/CaseStudyAPRenovations";
import CaseStudyAvale from "./pages/CaseStudyAvale";
import ServicePPC from "./pages/ServicePPC";
import ServiceCybersecurity from "./pages/ServiceCybersecurity";
import ServiceDataAnalytics from "./pages/ServiceDataAnalytics";
import ServiceAIML from "./pages/ServiceAIML";
import ServiceCloud from "./pages/ServiceCloud";
import ServiceWebDevelopment from "./pages/ServiceWebDevelopment";
import ServiceAppDevelopment from "./pages/ServiceAppDevelopment";
import ServiceDigitalStrategy from "./pages/ServiceDigitalStrategy";
import ServiceSEO from "./pages/ServiceSEO";
import ServiceSocialMedia from "./pages/ServiceSocialMedia";
import ServiceGoogleAds from "./pages/ServiceGoogleAds";
import ServiceMetaAds from "./pages/ServiceMetaAds";
import ServiceAutomation from "./pages/ServiceAutomation";
import ServiceVideoProduction from "./pages/ServiceVideoProduction";
import ServicePostProduction from "./pages/ServicePostProduction";
import ServiceAnimation from "./pages/ServiceAnimation";
import Service3DVisualEffects from "./pages/Service3DVisualEffects";
import ServiceAudioProduction from "./pages/ServiceAudioProduction";
import ServicePhotography from "./pages/ServicePhotography";
import Industries from "./pages/Industries";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ApolloProvider client={apolloClient}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CustomCursor />
        <Toaster />
        <Sonner />
        <Analytics />
        <SpeedInsights />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/ppc-services" element={<ServicePPC />} />
            <Route path="/services/cybersecurity" element={<ServiceCybersecurity />} />
            <Route path="/services/data-analytics" element={<ServiceDataAnalytics />} />
            <Route path="/services/ai-and-machine-learning" element={<ServiceAIML />} />
            <Route path="/services/cloud" element={<ServiceCloud />} />
            <Route path="/services/website-development" element={<ServiceWebDevelopment />} />
            <Route path="/services/app-development" element={<ServiceAppDevelopment />} />
            <Route path="/services/digital-strategy-consulting" element={<ServiceDigitalStrategy />} />
            <Route path="/services/automation-and-integrations" element={<ServiceAutomation />} />
            <Route path="/services/search-engine-optimization-and-organic-growth" element={<ServiceSEO />} />
            <Route path="/services/social-media-marketing" element={<ServiceSocialMedia />} />
            <Route path="/services/google-ads-management" element={<ServiceGoogleAds />} />
            <Route path="/services/meta-ads-management" element={<ServiceMetaAds />} />
            <Route path="/services/video-production" element={<ServiceVideoProduction />} />
            <Route path="/services/post-production-editing" element={<ServicePostProduction />} />
            <Route path="/services/animation-and-motion-graphics" element={<ServiceAnimation />} />
            <Route path="/services/3d-and-visual-effects" element={<Service3DVisualEffects />} />
            <Route path="/services/audio-production" element={<ServiceAudioProduction />} />
            <Route path="/services/photography-and-product-shoots" element={<ServicePhotography />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/aprenovations" element={<CaseStudyAPRenovations />} />
            <Route path="/case-studies/avale" element={<CaseStudyAvale />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ApolloProvider>
);

export default App;
