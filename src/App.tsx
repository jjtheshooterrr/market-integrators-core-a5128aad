import { lazy, Suspense } from "react";
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
import Loader from "@/components/effects/Loader";

// Lazy load all route components for code splitting
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Pricing = lazy(() => import("./pages/Pricing"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyAPRenovations = lazy(() => import("./pages/CaseStudyAPRenovations"));
const CaseStudyAvaleMusic = lazy(() => import("./pages/CaseStudyAvaleMusic"));
const CaseStudyPathway2Peace = lazy(() => import("./pages/CaseStudyPathway2Peace"));
const CaseStudyTestMyPools = lazy(() => import("./pages/CaseStudyTestMyPools"));
const CaseStudyKranzContractors = lazy(() => import("./pages/CaseStudyKranzContractors"));
const CaseStudyControllerRepairs = lazy(() => import("./pages/CaseStudyControllerRepairs"));
const CaseStudyLoneStarzEntertainment = lazy(() => import("./pages/CaseStudyLoneStarzEntertainment"));
const CaseStudyNorthernUtahWindowWells = lazy(() => import("./pages/CaseStudyNorthernUtahWindowWells"));
const CaseStudyImperialJewelry = lazy(() => import("./pages/CaseStudyImperialJewelry"));
const CaseStudyLylaGray = lazy(() => import("./pages/CaseStudyLylaGray"));
const CaseStudyCrewcoEvents = lazy(() => import("./pages/CaseStudyCrewcoEvents"));
const CaseStudySparkleAutoDetailing = lazy(() => import("./pages/CaseStudySparkleAutoDetailing"));
const CaseStudyAudacyHouston = lazy(() => import("./pages/CaseStudyAudacyHouston"));
const CaseStudySportsRadio610 = lazy(() => import("./pages/CaseStudySportsRadio610"));
const CaseStudyMega101 = lazy(() => import("./pages/CaseStudyMega101"));
const CaseStudyTheBullHouston = lazy(() => import("./pages/CaseStudyTheBullHouston"));
const ServicePPC = lazy(() => import("./pages/ServicePPC"));
const ServiceCybersecurity = lazy(() => import("./pages/ServiceCybersecurity"));
const ServiceDataAnalytics = lazy(() => import("./pages/ServiceDataAnalytics"));
const ServiceAIML = lazy(() => import("./pages/ServiceAIML"));
const ServiceCloud = lazy(() => import("./pages/ServiceCloud"));
const ServiceWebDevelopment = lazy(() => import("./pages/ServiceWebDevelopment"));
const ServiceAppDevelopment = lazy(() => import("./pages/ServiceAppDevelopment"));
const ServiceDigitalStrategy = lazy(() => import("./pages/ServiceDigitalStrategy"));
const ServiceSEO = lazy(() => import("./pages/ServiceSEO"));
const ServiceSocialMedia = lazy(() => import("./pages/ServiceSocialMedia"));
const ServiceGoogleAds = lazy(() => import("./pages/ServiceGoogleAds"));
const ServiceMetaAds = lazy(() => import("./pages/ServiceMetaAds"));
const ServiceAutomation = lazy(() => import("./pages/ServiceAutomation"));
const ServiceVideoProduction = lazy(() => import("./pages/ServiceVideoProduction"));
const ServicePostProduction = lazy(() => import("./pages/ServicePostProduction"));
const ServiceAnimation = lazy(() => import("./pages/ServiceAnimation"));
const Service3DVisualEffects = lazy(() => import("./pages/Service3DVisualEffects"));
const ServiceAudioProduction = lazy(() => import("./pages/ServiceAudioProduction"));
const ServicePhotography = lazy(() => import("./pages/ServicePhotography"));
const Industries = lazy(() => import("./pages/Industries"));
const IndustryEcommerce = lazy(() => import("./pages/IndustryEcommerce"));
const IndustrySaaS = lazy(() => import("./pages/IndustrySaaS"));
const IndustryHomeServices = lazy(() => import("./pages/IndustryHomeServices"));
const IndustryHealthcare = lazy(() => import("./pages/IndustryHealthcare"));
const IndustryLegal = lazy(() => import("./pages/IndustryLegal"));
const IndustryFinance = lazy(() => import("./pages/IndustryFinance"));
const IndustryEducation = lazy(() => import("./pages/IndustryEducation"));
const IndustryRealEstate = lazy(() => import("./pages/IndustryRealEstate"));
const IndustryAITech = lazy(() => import("./pages/IndustryAITech"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Careers = lazy(() => import("./pages/Careers"));
const CreativePortfolio = lazy(() => import("./pages/CreativePortfolio"));
const CreativePortfolioGraphicDesign = lazy(() => import("./pages/CreativePortfolioGraphicDesign"));
const CreativePortfolioAnimatedVideos = lazy(() => import("./pages/CreativePortfolioAnimatedVideos"));
const CreativePortfolioEditedVideo = lazy(() => import("./pages/CreativePortfolioEditedVideo"));
const CreativePortfolioFilmProduction = lazy(() => import("./pages/CreativePortfolioFilmProduction"));
const CreativePortfolioPhotography = lazy(() => import("./pages/CreativePortfolioPhotography"));
const CreativePortfolioAIAnimations = lazy(() => import("./pages/CreativePortfolioAIAnimations"));
const PortalMI = lazy(() => import("./pages/PortalMI"));
const Auth = lazy(() => import("./pages/Auth"));
const IntakeEntry = lazy(() => import("./pages/IntakeEntry"));
const IntakeForm = lazy(() => import("./pages/IntakeForm"));
const IntakeVideo = lazy(() => import("./pages/IntakeVideo"));
const IntakeCalendar = lazy(() => import("./pages/IntakeCalendar"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
          <Suspense fallback={<Loader />}>
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
              <Route path="/industries/ecommerce-and-retail" element={<IndustryEcommerce />} />
              <Route path="/industries/saas-and-technology" element={<IndustrySaaS />} />
              <Route path="/industries/home-services-and-franchises" element={<IndustryHomeServices />} />
              <Route path="/industries/healthcare-and-medical" element={<IndustryHealthcare />} />
              <Route path="/industries/legal-and-professional-services" element={<IndustryLegal />} />
              <Route path="/industries/finance-and-banking" element={<IndustryFinance />} />
              <Route path="/industries/education-and-elearning" element={<IndustryEducation />} />
              <Route path="/industries/real-estate-and-property-management" element={<IndustryRealEstate />} />
              <Route path="/industries/ai-automation-and-emerging-tech" element={<IndustryAITech />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/aprenovations" element={<CaseStudyAPRenovations />} />
              <Route path="/case-studies/avalemusic" element={<CaseStudyAvaleMusic />} />
              <Route path="/case-studies/pathway-to-peace" element={<CaseStudyPathway2Peace />} />
              <Route path="/case-studies/testmypools" element={<CaseStudyTestMyPools />} />
              <Route path="/case-studies/kranz-contractors" element={<CaseStudyKranzContractors />} />
              <Route path="/case-studies/controllerrepairs" element={<CaseStudyControllerRepairs />} />
              <Route path="/case-studies/lonestarzentertainment" element={<CaseStudyLoneStarzEntertainment />} />
              <Route path="/case-studies/northern-utah-window-wells" element={<CaseStudyNorthernUtahWindowWells />} />
              <Route path="/case-studies/imperial-jewelry" element={<CaseStudyImperialJewelry />} />
              <Route path="/case-studies/lylagray" element={<CaseStudyLylaGray />} />
            <Route path="/case-studies/crewco-events" element={<CaseStudyCrewcoEvents />} />
            <Route path="/case-studies/sparkle-auto-detailing" element={<CaseStudySparkleAutoDetailing />} />
            <Route path="/case-studies/audacy-houston" element={<CaseStudyAudacyHouston />} />
              <Route path="/case-studies/sportsradio-610" element={<CaseStudySportsRadio610 />} />
              <Route path="/case-studies/mega-101" element={<CaseStudyMega101 />} />
              <Route path="/case-studies/the-bull-houston" element={<CaseStudyTheBullHouston />} />
              <Route path="/creative-portfolio" element={<CreativePortfolio />} />
              <Route path="/creative-portfolio/graphic-and-visual-design" element={<CreativePortfolioGraphicDesign />} />
              <Route path="/creative-portfolio/animated-videos-motion-graphics" element={<CreativePortfolioAnimatedVideos />} />
              <Route path="/creative-portfolio/edited-video-short-form-content" element={<CreativePortfolioEditedVideo />} />
              <Route path="/creative-portfolio/film-on-site-production" element={<CreativePortfolioFilmProduction />} />
              <Route path="/creative-portfolio/photography-media" element={<CreativePortfolioPhotography />} />
              <Route path="/creative-portfolio/artificial-intelligence-prompted-animations" element={<CreativePortfolioAIAnimations />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/portalmi" element={<PortalMI />} />
              <Route path="/intake" element={<IntakeEntry />} />
              <Route path="/intake/form" element={<IntakeForm />} />
              <Route path="/intake/video" element={<IntakeVideo />} />
              <Route path="/intake/schedule" element={<IntakeCalendar />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ApolloProvider>
);

export default App;
