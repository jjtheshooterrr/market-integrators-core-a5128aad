import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import JellyButton from "@/components/ui/JellyButton";
import {
  Menu,
  X,
  ChevronDown,
  Megaphone,
  Shield,
  BarChart3,
  Brain,
  Cloud,
  Globe,
  Smartphone,
  Lightbulb,
  Search,
  Share2,
  Video,
  Edit3,
  Sparkles,
  Box,
  Headphones,
  Camera,
  Target,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Cloudflare Image Config
const CF_ACCOUNT_HASH = "GaQ2AWTI-tcX975k7hp2yA";
const LOGO_IMAGE_ID = "71fbd03f-ad40-45e3-9cbc-9edd1a48a200";
const cloudflareImage = (imageId: string, variant: string = "public") =>
  `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${imageId}/${variant}`;

// Logo Component
const Logo = ({ className = "h-20 w-20" }: { className?: string }) => (
  <img
    src={cloudflareImage(LOGO_IMAGE_ID, "public")}
    alt="Market Integrators Logo"
    className={className}
    loading="eager"
    decoding="async"
    referrerPolicy="no-referrer"
    style={{ imageRendering: "auto" }}
  />
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const serviceCategories = [
    {
      category: "TECHNOLOGY & INNOVATION",
      services: [
        {
          name: "Automation & Integrations",
          href: "/services/automation-and-integrations",
          icon: Zap,
          description: "Workflow automation & system integration",
        },
        {
          name: "Website Development",
          href: "/services/website-development",
          icon: Globe,
          description: "Custom web solutions",
        },
        {
          name: "AI & Machine Learning",
          href: "/services/ai-and-machine-learning",
          icon: Brain,
          description: "Intelligent automation solutions",
        },
        { name: "Cloud Services", href: "/services/cloud", icon: Cloud, description: "Scalable cloud infrastructure" },
        {
          name: "Data Analytics",
          href: "/services/data-analytics",
          icon: BarChart3,
          description: "Insights from your data",
        },
        {
          name: "App Development",
          href: "/services/app-development",
          icon: Smartphone,
          description: "Native & cross-platform apps",
        },
        {
          name: "Digital Strategy Consulting",
          href: "/services/digital-strategy-consulting",
          icon: Lightbulb,
          description: "Strategic digital transformation",
        },
        {
          name: "Cybersecurity",
          href: "/services/cybersecurity",
          icon: Shield,
          description: "Advanced security solutions",
        },
      ],
    },
    {
      category: "MARKETING & GROWTH",
      services: [
        {
          name: "PPC & Paid Media",
          href: "/services/ppc-services",
          icon: Megaphone,
          description: "Paid advertising campaigns",
        },
        {
          name: "Google Ads Management",
          href: "/services/google-ads-management",
          icon: Target,
          description: "Expert Google Ads campaign management",
        },
        {
          name: "Meta Ads Management",
          href: "/services/meta-ads-management",
          icon: Share2,
          description: "Facebook & Instagram advertising",
        },
        {
          name: "SEO & Organic Growth",
          href: "/services/search-engine-optimization-and-organic-growth",
          icon: Search,
          description: "Search engine optimization",
        },
        {
          name: "Social Media Marketing",
          href: "/services/social-media-marketing",
          icon: Share2,
          description: "Social media strategy & management",
        },
      ],
    },
    {
      category: "CREATIVE MEDIA STUDIO",
      services: [
        {
          name: "Video Production",
          href: "/services/video-production",
          icon: Video,
          description: "Professional video content creation",
        },
        {
          name: "Post-Production & Editing",
          href: "/services/post-production-editing",
          icon: Edit3,
          description: "Expert video editing & effects",
        },
        {
          name: "Animation & Motion Graphics",
          href: "/services/animation-and-motion-graphics",
          icon: Sparkles,
          description: "Dynamic animations & graphics",
        },
        {
          name: "3D & Visual Effects",
          href: "/services/3d-and-visual-effects",
          icon: Box,
          description: "Stunning 3D renders & VFX",
        },
        {
          name: "Audio Production",
          href: "/services/audio-production",
          icon: Headphones,
          description: "Professional audio & sound design",
        },
        {
          name: "Photography & Product Shoots",
          href: "/services/photography-and-product-shoots",
          icon: Camera,
          description: "Professional photography services",
        },
      ],
    },
  ];

  const navigation = [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Creative Portfolio", href: "/creative-portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-white ${isScrolled ? "shadow-md" : ""}
        border-b border-border/50
      `}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="h-20 w-20" />
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
                className={`font-body font-medium transition-colors hover:text-primary flex items-center gap-1 ${location.pathname.startsWith("/services") ? "text-primary" : "text-foreground"
                  }`}
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
                    className="absolute top-full left-0 mt-2 w-96 bg-background border border-border rounded-xl shadow-2xl overflow-hidden z-[100]"
                  >
                    <div className="p-2 max-h-[80vh] overflow-y-auto">
                      {serviceCategories.map((category, categoryIndex) => (
                        <div
                          key={category.category}
                          className={categoryIndex > 0 ? "mt-4 pt-4 border-t border-border" : ""}
                        >
                          <div className="px-4 py-2">
                            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                              {category.category}
                            </h3>
                          </div>
                          {category.services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                              <Link key={service.name} to={service.href} className="group">
                                <motion.div
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                                  className={`flex items-start gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-primary/10 hover:scale-[1.02] ${location.pathname === service.href ? "bg-primary/10" : ""
                                    }`}
                                >
                                  <div
                                    className={`p-2 rounded-lg transition-colors ${location.pathname === service.href
                                      ? "bg-primary text-primary-foreground"
                                      : "bg-muted group-hover:bg-primary/20"
                                      }`}
                                  >
                                    <Icon className="w-5 h-5" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div
                                      className={`font-body font-semibold transition-colors leading-tight ${location.pathname === service.href
                                        ? "text-primary"
                                        : "text-foreground group-hover:text-primary"
                                        }`}
                                    >
                                      {service.name}
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1 leading-snug">{service.description}</div>
                                  </div>
                                </motion.div>
                              </Link>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-body font-medium transition-colors hover:text-primary flex items-center h-full ${location.pathname === item.href ? "text-primary" : "text-foreground"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <JellyButton to="/contact-us" className="hidden sm:flex" />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background max-h-[calc(100vh-5rem)] overflow-y-auto z-[100]">
            <div className="flex flex-col space-y-4">
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`font-body font-medium transition-colors hover:text-primary flex items-center gap-1 w-full ${location.pathname.startsWith("/services") ? "text-primary" : "text-foreground"
                    }`}
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
                        <div className="space-y-2">
                          {category.services.map((service) => {
                            const Icon = service.icon;
                            return (
                              <Link
                                key={service.name}
                                to={service.href}
                                className={`flex items-center gap-3 py-1 font-body font-medium transition-colors hover:text-primary ${location.pathname === service.href ? "text-primary" : "text-foreground"
                                  }`}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileServicesOpen(false);
                                }}
                              >
                                <div
                                  className={`p-1.5 rounded-md transition-colors ${location.pathname === service.href
                                    ? "bg-primary/10 text-primary"
                                    : "bg-muted text-muted-foreground"
                                    }`}
                                >
                                  <Icon size={16} />
                                </div>
                                {service.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-body font-medium transition-colors hover:text-primary ${location.pathname === item.href ? "text-primary" : "text-foreground"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="w-full flex justify-center pb-4">
                <JellyButton
                  to="/contact-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
