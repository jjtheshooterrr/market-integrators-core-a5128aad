import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navigation = [
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Industries",
      href: "/industries",
    },
    {
      name: "Case Studies",
      href: "/case-studies",
    },
    {
      name: "About",
      href: "/about-us",
    },
    {
      name: "Contact",
      href: "/contact-us",
    },
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background shadow-md" : "bg-background/95 backdrop-blur-sm"}`}
    >
      <nav className="container-custom bg-white">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/imagebuck/marketintegrators-logo-transparent.webp"
              alt="Market Integrators Logo"
              className="h-20 w-20"
            />
            <span className="font-heading font-bold text-xl hidden sm:block">Market Integrators</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-body font-medium transition-colors hover:text-primary ${location.pathname === item.href ? "text-primary" : "text-foreground"}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button asChild className="btn-text hidden sm:inline-flex">
              <Link to="/contact-us">Request Proposal</Link>
            </Button>

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
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-body font-medium transition-colors hover:text-primary ${location.pathname === item.href ? "text-primary" : "text-foreground"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="btn-text w-full">
                <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
                  Request Proposal
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;
