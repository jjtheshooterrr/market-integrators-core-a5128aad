import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  const services = [
    {
      name: "PPC Management",
      href: "/services/ppc-services",
    },
    {
      name: "SEO Services",
      href: "/services/search-engine-optimization",
    },
    {
      name: "Web Development",
      href: "/services/web-development",
    },
    {
      name: "Social Media Ads",
      href: "/services/paid-social-media-advertising-services",
    },
  ];
  const industries = [
    {
      name: "HVAC Marketing",
      href: "/who-we-serve/home-services-marketing/hvac",
    },
    {
      name: "Legal Marketing",
      href: "/who-we-serve/law-firms-legal-digital-marketing",
    },
    {
      name: "Medical Marketing",
      href: "/who-we-serve/medical-digital-marketing",
    },
    {
      name: "Automotive",
      href: "/who-we-serve/automotive-digital-marketing",
    },
  ];
  const company = [
    {
      name: "About Us",
      href: "/about-us",
    },
    {
      name: "Case Studies",
      href: "/case-studies",
    },
    {
      name: "Careers",
      href: "/careers",
    },
    {
      name: "Contact",
      href: "/contact-us",
    },
    {
      name: "Locations",
      href: "/locations",
    },
  ];
  return (
    <footer className="bg-dark-bg text-dark-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/imagebuck/marketintegrators-logo-black.webp"
                alt="Market Integrators Logo"
                className="h-20 w-20"
              />
              <span className="font-heading font-bold text-xl">Market Integrators</span>
            </div>
            <p className="text-dark-foreground/80 mb-6">
              Digital marketing that moves the needle. We drive traffic, leads, and revenue for businesses nationwide.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-dark-foreground/80 hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>(123) 456-7890</span>
              </a>
              <a
                href="mailto:info@marketintegrators.com"
                className="flex items-center space-x-2 text-dark-foreground/80 hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>info@marketintegrators.com</span>
              </a>
              <div className="flex items-center space-x-2 text-dark-foreground/80">
                <MapPin size={18} />
                <span>Houston, TX</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-dark-foreground/80 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Industries</h3>
            <ul className="space-y-3">
              {industries.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-dark-foreground/80 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-dark-foreground/80 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-dark-foreground/60 text-sm">
              © {new Date().getFullYear()} Market Integrators. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy-policy"
                className="text-dark-foreground/60 hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-dark-foreground/60 hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
