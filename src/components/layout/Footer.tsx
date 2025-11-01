import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaTiktok, FaFacebook, FaInstagram, FaXTwitter, FaYoutube, FaLinkedin } from "react-icons/fa6";

const serviceGroups = [
  {
    heading: "TECHNOLOGY & INNOVATION",
    items: [
      {
        title: "AI & Machine Learning",
        blurb: "Intelligent automation solutions",
        href: "/services/ai-and-machine-learning",
      },
      { title: "Cloud Services", blurb: "Scalable cloud infrastructure", href: "/services/cloud" },
      { title: "Cybersecurity", blurb: "Advanced security solutions", href: "/services/cybersecurity" },
      { title: "Data Analytics", blurb: "Insights from your data", href: "/services/data-analytics" },
      { title: "App Development", blurb: "Native & cross-platform apps", href: "/services/app-development" },
      { title: "Website Development", blurb: "Custom web solutions", href: "/services/website-development" },
      {
        title: "Digital Strategy Consulting",
        blurb: "Strategic digital transformation",
        href: "/services/digital-strategy-consulting",
      },
      {
        title: "Automation & Integrations",
        blurb: "Workflow automation & system integration",
        href: "/services/automation-and-integrations",
      },
    ],
  },
  {
    heading: "MARKETING & GROWTH",
    items: [
      { title: "PPC & Paid Media", blurb: "Paid advertising campaigns", href: "/services/ppc-services" },
      {
        title: "Google Ads Management",
        blurb: "Expert Google Ads campaign management",
        href: "/services/google-ads-management",
      },
      {
        title: "Meta Ads Management",
        blurb: "Facebook & Instagram advertising",
        href: "/services/meta-ads-management",
      },
      {
        title: "SEO & Organic Growth",
        blurb: "Search engine optimization",
        href: "/services/search-engine-optimization-and-organic-growth",
      },
      {
        title: "Social Media Marketing",
        blurb: "Social media strategy & management",
        href: "/services/social-media-marketing",
      },
    ],
  },
  {
    heading: "CREATIVE MEDIA STUDIO",
    items: [
      { title: "Video Production", blurb: "Professional video content creation", href: "/services/video-production" },
      {
        title: "Post-Production & Editing",
        blurb: "Expert video editing & effects",
        href: "/services/post-production-editing",
      },
      {
        title: "Animation & Motion Graphics",
        blurb: "Dynamic animations & graphics",
        href: "/services/animation-and-motion-graphics",
      },
      { title: "3D & Visual Effects", blurb: "Stunning 3D renders & VFX", href: "/services/3d-and-visual-effects" },
      { title: "Audio Production", blurb: "Professional audio & sound design", href: "/services/audio-production" },
      {
        title: "Photography & Product Shoots",
        blurb: "Professional photography services",
        href: "/services/photography-and-product-shoots",
      },
    ],
  },
];

const industries = [
  { name: "E-Commerce & Retail", href: "/industries" },
  { name: "SaaS & Technology", href: "/industries" },
  { name: "Home Services", href: "/industries" },
  { name: "Healthcare & Medical", href: "/industries" },
  { name: "Legal Services", href: "/industries" },
  { name: "Finance & Banking", href: "/industries" },
  { name: "Education & eLearning", href: "/industries" },
  { name: "Real Estate", href: "/industries" },
  { name: "AI & Emerging Tech", href: "/industries" },
];

const company = [
  { name: "About Us", href: "/about-us" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact-us" },
  { name: "Locations", href: "/locations" },
];

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-dark-foreground" role="contentinfo">
      <div className="container-custom section-padding">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/imagebuck/marketintegrators-logo-black.webp"
                alt="Market Integrators"
                className="h-16 w-16"
                loading="lazy"
                decoding="async"
              />
              <span className="font-heading font-bold text-xl">Market Integrators</span>
            </div>

            <p className="text-dark-foreground/80 mb-6 max-w-prose">
              Digital marketing that moves the needle. We drive traffic, leads, and revenue for businesses nationwide.
            </p>

            <address className="not-italic space-y-3 text-dark-foreground/80">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={18} aria-hidden="true" />
                <span>(123) 456-7890</span>
              </a>
              <a
                href="mailto:info@marketintegrators.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={18} aria-hidden="true" />
                <span>info@marketintegrators.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={18} aria-hidden="true" />
                <span>Houston, TX</span>
              </div>
            </address>

            {/* Social */}
            <nav aria-label="Social media" className="mt-6">
              <ul className="flex items-center gap-4">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-dark-foreground/80 hover:text-primary transition-colors"
                  >
                    <FaFacebook size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-dark-foreground/80 hover:text-primary transition-colors"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="text-dark-foreground/80 hover:text-primary transition-colors"
                  >
                    <FaXTwitter size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="text-dark-foreground/80 hover:text-primary transition-colors"
                  >
                    <FaYoutube size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="text-dark-foreground/80 hover:text-primary transition-colors"
                  >
                    <FaTiktok size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/marketintegrators"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-dark-foreground/80 hover:text-primary transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Services (grouped) */}
          <nav className="col-span-1" aria-label="Services">
            <h3 className="font-heading font-bold text-lg mb-6">Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {serviceGroups.map((group) => (
                <div key={group.heading}>
                  <h4 className="text-sm tracking-wide font-semibold text-dark-foreground/70 mb-3">{group.heading}</h4>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item.title} className="leading-tight">
                        <Link
                          to={item.href}
                          className="block text-dark-foreground/90 hover:text-primary transition-colors"
                        >
                          {item.title}
                        </Link>
                        <span className="block text-xs text-dark-foreground/60">{item.blurb}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          {/* Industries */}
          <nav className="col-span-1" aria-label="Industries">
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
          </nav>

          {/* Company */}
          <nav className="col-span-1" aria-label="Company">
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
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-foreground/60 text-sm">
              © {new Date().getFullYear()} Market Integrators. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
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
