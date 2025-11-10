import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaTiktok, FaFacebook, FaInstagram, FaXTwitter, FaYoutube, FaLinkedin } from "react-icons/fa6";

/* ---------- CLOUDFLARE IMAGE CONFIG ---------- */
const CF_ACCOUNT_HASH = "GaQ2AWTI-tcX975k7hp2yA";
const LOGO_IMAGE_ID = "71fbd03f-ad40-45e3-9cbc-9edd1a48a200";
const cloudflareImage = (imageId: string, variant: string = "public") =>
  `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${imageId}/${variant}`;

const Logo = ({ className = "h-16 w-16" }: { className?: string }) => (
  <img
    src={cloudflareImage(LOGO_IMAGE_ID, "public")}
    alt="Market Integrators Logo"
    className={className}
    loading="lazy"
    decoding="async"
    referrerPolicy="no-referrer"
    style={{ imageRendering: "auto" }}
  />
);

/* ---------- DATA ---------- */

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
];

/* ---------- COMPONENT ---------- */

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-dark-foreground" role="contentinfo">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-10 lg:gap-12 mb-12 items-start">
          {/* Company Info */}
          <div className="md:col-span-3 lg:col-span-3 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="h-16 w-16" />
              <span className="font-heading font-bold text-xl">Market Integrators</span>
            </div>

            <p className="text-dark-foreground/80 mb-6 max-w-prose">
              Digital marketing that moves the needle. We drive traffic, leads, and revenue for businesses nationwide.
            </p>

            <address className="not-italic space-y-3 text-dark-foreground/80">
              <a href="tel:+18325104920" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={18} aria-hidden="true" />
                <span>(832) 510-4920</span>
              </a>
              <a
                href="mailto:marketintegrator@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={18} aria-hidden="true" />
                <span>marketintegrator@gmail.com</span>
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
                    href="https://www.facebook.com/marketintegrators"
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
                    href="https://www.instagram.com/marketintegrators"
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
                    href="https://x.com/Mktintegrators"
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
                    href="https://youtube.com/@marketintegrators?si=M3nF8RksMx1m6kuI"
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
                    href="https://www.tiktok.com/@marketintegrators"
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
                    href="https://www.linkedin.com/company/109536557"
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

          {/* Services */}
          <nav className="md:col-span-6 lg:col-span-6 lg:order-2" aria-label="Services">
            <h3 className="font-heading font-bold text-lg mb-6">Services</h3>
            <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(14rem,1fr))]">
              {serviceGroups.map((group) => (
                <div key={group.heading}>
                  <h4 className="text-sm tracking-wide font-semibold text-dark-foreground/70 mb-3">{group.heading}</h4>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item.title} className="leading-snug">
                        <Link
                          to={item.href}
                          className="block text-dark-foreground/90 hover:text-primary transition-colors"
                        >
                          {item.title}
                        </Link>
                        <span className="hidden md:block text-xs text-dark-foreground/60">{item.blurb}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          {/* Industries */}
          <nav className="md:col-span-3 lg:col-span-2 lg:order-3" aria-label="Industries">
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
          <nav className="md:col-span-3 lg:col-span-1 lg:order-4" aria-label="Company">
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
