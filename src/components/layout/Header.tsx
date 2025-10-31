import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Megaphone,
  Shield,
  BarChart3,
  Layers,
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
    // ... your data unchanged ...
  ];

  const navigation = [
    { name: "Pricing", href: "/pricing" },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <header
      className={
        // Make header the actual white layer so nothing bleeds through
        `fixed top-0 left-0 right-0 z-50 transition-all duration-300
         ${isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75"}
         border-b border-border/50`
      }
    >
      {/* Match backgrounds: remove bg-white from nav/container */}
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/imagebuck/marketintegrators-logo-transparent.webp"
              alt="Market Integrators Logo"
              className="h-20 w-20"
            />
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
                className={`font-body font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                  location.pathname.startsWith("/services") ? "text-primary" : "text-foreground"
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
                    className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-lg border border-border rounded-xl shadow-2xl overflow-hidden z-50"
                  >
                    <div className="p-2 max-h-[80vh] overflow-y-auto">{/* ... menu content unchanged ... */}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-body font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Button asChild className="btn-text hidden sm:inline-flex">
              <Link to="/contact-us">Request Proposal</Link>
            </Button>
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
          <div className="lg:hidden py-4 border-t border-border bg-white/95 backdrop-blur max-h-[calc(100vh-5rem)] overflow-y-auto">
            {/* ... mobile menu unchanged ... */}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
