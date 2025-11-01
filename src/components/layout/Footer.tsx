import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaTiktok, FaFacebook, FaInstagram, FaXTwitter, FaYoutube, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  const services = [
    {
      name: "Web Development",
      href: "/services/website-development",
    },
    {
      name: "App Development",
      href: "/services/app-development",
    },
    {
      name: "SEO & Organic Growth",
      href: "/services/search-engine-optimization-and-organic-growth",
    },
    {
      name: "PPC Management",
      href: "/services/ppc-services",
    },
    {
      name: "Google Ads",
      href: "/services/google-ads-management",
    },
    {
      name: "Meta Ads",
      href: "/services/meta-ads-management",
    },
    {
      name: "Social Media Marketing",
      href: "/services/social-media-marketing",
    },
    {
      name: "Digital Strategy",
      href: "/services/digital-strategy-consulting",
    },
    {
      name: "Automation & Integrations",
      href: "/services/automation-and-integrations",
    },
    {
      name: "AI & Machine Learning",
      href: "/services/ai-and-machine-learning",
    },
    {
      name: "Cloud Services",
      href: "/services/cloud",
    },
    {
      name: "Data Analytics",
      href: "/services/data-analytics",
    },
    {
      name: "Cybersecurity",
      href: "/services/cybersecurity",
    },
    {
      name: "Video Production",
      href: "/services/video-production",
    },
    {
      name: "Post Production",
      href: "/services/post-production-editing",
    },
    {
      name: "Animation & Motion Graphics",
      href: "/services/animation-and-motion-graphics",
    },
    {
      name: "3D & Visual Effects",
      href: "/services/3d-and-visual-effects",
    },
    {
      name: "Audio Production",
      href: "/services/audio-production",
    },
    {
      name: "Photography",
      href: "/services/photography-and-product-shoots",
    },
  ];
  const industries = [
    {
      name: "E-Commerce & Retail",
      href: "/industries",
    },
    {
      name: "SaaS & Technology",
      href: "/industries",
    },
    {
      name: "Home Services",
      href: "/industries",
    },
    {
      name: "Healthcare & Medical",
      href: "/industries",
    },
    {
      name: "Legal Services",
      href: "/industries",
    },
    {
      name: "Finance & Banking",
      href: "/industries",
    },
    {
      name: "Education & eLearning",
      href: "/industries",
    },
    {
      name: "Real Estate",
      href: "/industries",
    },
    {
      name: "AI & Emerging Tech",
      href: "/industries",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
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
            
            {/* Social Media */}
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-foreground/80 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-foreground/80 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-foreground/80 hover:text-primary transition-colors"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-foreground/80 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-foreground/80 hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok size={20} />
              </a>
              <a
                href="https://linkedin.com/company/marketintegrators"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-foreground/80 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
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
