/* ---------- COMPONENT ---------- */

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-dark-foreground" role="contentinfo">
      <div className="container-custom section-padding">
        {/* 12-col grid keeps columns aligned at the top on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-10 lg:gap-12 mb-12 items-start">
          {/* Company/Brand */}
          <div className="md:col-span-3 lg:col-span-3 lg:order-1">
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

          {/* Services (spans middle 6 cols on lg; placed second so it doesn’t push others down) */}
          <nav className="md:col-span-6 lg:col-span-6 lg:order-2" aria-label="Services">
            <h3 className="font-heading font-bold text-lg mb-6">Services</h3>

            {/* Auto-fit so headings wrap nicely without creating huge height columns */}
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
