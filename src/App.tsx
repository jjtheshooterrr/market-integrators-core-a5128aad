import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client/react";
import { apolloClient } from "@/lib/apolloClient";
import CustomCursor from "@/components/effects/CustomCursor";
import LoadingScreen from "@/components/effects/LoadingScreen";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import CaseStudies from "./pages/CaseStudies";
import ServicePPC from "./pages/ServicePPC";
import Industries from "./pages/Industries";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <ApolloProvider client={apolloClient}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CustomCursor />
          <Toaster />
          <Sonner />
          {!loadingComplete && (
            <LoadingScreen
              imgSrc="/logo-mark-only.svg"
              onComplete={() => setLoadingComplete(true)}
              brandRed="hsl(0, 90%, 53%)"
              background="#000000"
            />
          )}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index loadingComplete={loadingComplete} />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/ppc-services" element={<ServicePPC />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/case-studies" element={<CaseStudies />} />
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
};

export default App;
