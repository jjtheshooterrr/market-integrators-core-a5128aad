import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Megaphone, Shield, BarChart3, Layers, Brain, Cloud, Globe, Smartphone, Lightbulb, Search, Share2, Video, Edit3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const serviceCategories = [
    {
      category: "TECHNOLOGY & INNOVATION",
      services: [
        { name: "AI & Machine Learning", href: "/services/ai-and-machine-learning", icon: Brain, description: "Intelligent automation solutions" },
        { name: "Cloud Services", href: "/services/cloud", icon: Cloud, description: "Scalable cloud infrastructure" },
        { name: "Cybersecurity", href: "/services/cybersecurity", icon: Shield, description: "Advanced security solutions" },
        { name: "Data Analytics", href: "/services/data-analytics", icon: BarChart3, description: "Insights from your data" },
        { name: "App Development", href: "/services/app-development", icon: Smartphone, description: "Native & cross-platform apps" },
        { name: "Website Development", href: "/services/website-development", icon: Globe, description: "Custom web solutions" },
        { name: "Digital Strategy Consulting", href: "/services/digital-strategy-consulting", icon: Lightbulb, description: "Strategic digital transformation" }
      ]
    },
    {
      category: "MARKETING & GROWTH",
      services: [
        { name: "PPC & Paid Media", href: "/services/ppc-services", icon: Megaphone, description: "Paid advertising campaigns" },
        { name: "SEO & Organic Growth", href: "/services/search-engine-optimization-and-organic-growth", icon: Search, description: "Search engine optimization" },
        { name: "Social Media Marketing", href: "/services/social-media-marketing", icon: Share2, description: "Social media strategy & management" }
      ]
    },
    {
      category: "CREATIVE MEDIA STUDIO",
      services: [
        { name: "Video Production", href: "/services/video-production", icon: Video, description: "Professional video content creation" },
        { name: "Post-Production & Editing", href: "/services/post-production-editing", icon: Edit3, description: "Expert video editing & effects" }
      ]
    }
  ];

  const navigation = [
    {
      name: "Pricing",
      href: "/pricing"
    }, {
      name: "Industries",
      href: "/industries"
    }, {
      name: "Case Studies",
      href: "/case-studies"
    }, {
      name: "About",
      href: "/about-us"
    }, {
      name: "Contact",
      href: "/contact-us"
    }
  ];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background shadow-md" : "bg-background/95 backdrop-blur-sm"}`}>
      <nav className="container-custom bg-white">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/imagebuck/marketintegrators-logo-transparent.webp" alt="Market Integrators Logo" className="h-20 w-20" />
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className={`font-body font-medium transition-colors hover:text-primary flex items-center gap-1 ${location.pathname.startsWith('/services') ? "text-primary" : "text-foreground"}`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-background/95 backdrop-blur-lg border border-border rounded-xl shadow-2xl overflow-hidden z-50"
                  >
                    <div className="p-2 max-h-[80vh] overflow-y-auto">
                      {serviceCategories.map((category, categoryIndex) => (
                        <div key={category.category} className={categoryIndex > 0 ? "mt-4 pt-4 border-t border-border" : ""}>
                          <div className="px-4 py-2">
                            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                              {category.category}
                            </h3>
                          </div>
                          {category.services.length > 0 ? (
                            category.services.map((service, index) => {
                              const Icon = service.icon;
                              return (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="group"
                                >
                                  <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                                    className={`flex items-start gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-primary/10 hover:scale-[1.02] ${
                                      location.pathname === service.href ? "bg-primary/10" : ""
                                    }`}
                                  >
                                    <div className={`p-2 rounded-lg transition-colors ${
                                      location.pathname === service.href 
                                        ? "bg-primary text-primary-foreground" 
                                        : "bg-muted group-hover:bg-primary/20"
                                    }`}>
                                      <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                      <div className={`font-body font-semibold transition-colors ${
                                        location.pathname === service.href ? "text-primary" : "text-foreground group-hover:text-primary"
                                      }`}>
                                        {service.name}
                                      </div>
                                      <div className="text-xs text-muted-foreground mt-0.5">
                                        {service.description}
                                      </div>
                                    </div>
                                  </motion.div>
                                </Link>
                              );
                            })
                          ) : (
                            <div className="px-4 py-3 text-sm text-muted-foreground italic">
                              Coming Soon
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navigation.map(item => <Link key={item.name} to={item.href} className={`font-body font-medium transition-colors hover:text-primary ${location.pathname === item.href ? "text-primary" : "text-foreground"}`}>
                {item.name}
              </Link>)}
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button asChild className="btn-text hidden sm:inline-flex">
              <Link to="/contact-us">Request Proposal</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="lg:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col space-y-4">
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`font-body font-medium transition-colors hover:text-primary flex items-center gap-1 w-full ${location.pathname.startsWith('/services') ? "text-primary" : "text-foreground"}`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                
                {isMobileServicesOpen && (
                  <div className="ml-4 mt-2 space-y-4">
                    {serviceCategories.map((category) => (
                      <div key={category.category}>
                        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                          {category.category}
                        </h3>
                        {category.services.length > 0 ? (
                          <div className="space-y-2">
                            {category.services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className={`block font-body font-medium transition-colors hover:text-primary ${location.pathname === service.href ? "text-primary" : "text-foreground"}`}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileServicesOpen(false);
                                }}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <div className="text-sm text-muted-foreground italic">Coming Soon</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {navigation.map(item => <Link key={item.name} to={item.href} className={`font-body font-medium transition-colors hover:text-primary ${location.pathname === item.href ? "text-primary" : "text-foreground"}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>)}
              <Button asChild className="btn-text w-full">
                <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
                  Request Proposal
                </Link>
              </Button>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;