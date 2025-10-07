import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 150) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const sections = [
    { id: "about", label: "About Market Integrators" },
    { id: "changes", label: "Changes to Terms and Conditions" },
    { id: "privacy", label: "Privacy Policy" },
    { id: "copyright", label: "Copyright, Trademark, and Intellectual Property" },
    { id: "email", label: "Email and Newsletter Communications" },
    { id: "client-links", label: "Client Links and Third-Party Access" },
    { id: "security", label: "Security of Market Integrators' Network and Systems" },
    { id: "contact", label: "Contact Us" },
    { id: "disclaimer", label: "Disclaimer and Limitation of Liability" },
    { id: "acknowledgment", label: "Acknowledgment" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-20">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-24 space-y-2">
                <h2 className="font-heading font-bold text-lg mb-4">Terms and Conditions</h2>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors rounded-md ${
                        activeSection === section.id
                          ? "text-primary bg-primary/10 border-l-4 border-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-9">
              <div className="prose prose-lg max-w-none">
                <h1 className="font-heading font-bold text-4xl mb-8">Terms and Conditions</h1>

                <section id="about" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">About Market Integrators</h2>
                  <p className="mb-4">
                    Market Integrators is a digital marketing and technology agency focused on helping businesses grow through performance-driven strategies. We specialize in PPC, SEO, web design, video, and data-driven advertising solutions that deliver measurable results. Our team is passionate about leveraging technology to transform how businesses attract, engage, and convert customers.
                  </p>
                  <p className="mb-4">
                    Please read this page carefully before using this website. This page outlines the Terms and Conditions under which visitors (hereinafter "You" or "Visitors") may use this site. The content of this site is owned by or licensed to Market Integrators and is operated and administered by Market Integrators, LLC (collectively, "Market Integrators," "we," "our," or "us").
                  </p>
                  <p className="mb-4">
                    <strong>By using this website, you agree to be bound by these Terms and Conditions.</strong> If you do not accept these Terms and Conditions, please do not use this website.
                  </p>
                  <p className="mb-4">
                    Market Integrators complies with all laws of the State of Texas applicable to this website and to the Internet. Visitors who choose to access this website from other jurisdictions do so on their own initiative and are responsible for compliance with local laws.
                  </p>
                </section>

                <section id="changes" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Changes to Terms and Conditions</h2>
                  <p className="mb-4">
                    Market Integrators may revise these Terms and Conditions at any time without notice. You are encouraged to check this page periodically to review any updates. Your continued use of this website after such changes constitutes your acceptance of the revised Terms and Conditions.
                  </p>
                </section>

                <section id="privacy" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Privacy Policy</h2>
                  <p className="mb-4">
                    Market Integrators is committed to preserving your right to privacy. While you may browse our site without providing personal information, certain information (such as your IP address, browser type, and device information) may be automatically transmitted to our servers for operational and security purposes.
                  </p>
                  <p className="mb-4">
                    We do not collect personally identifying information (such as your name, address, phone number, or email) unless you voluntarily submit it through a form such as our Contact Us page, newsletter signup, or service inquiry form.
                  </p>
                  <p className="mb-4">
                    All collected information is stored securely in password-protected systems and used solely to fulfill your requests or improve our services. We do not sell, rent, or disclose your information to third parties, except as required by law or as described in our{" "}
                    <Link to="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </section>

                <section id="copyright" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Copyright, Trademark, and Intellectual Property</h2>
                  <p className="mb-4">
                    The contents of this website — including but not limited to text, design, graphics, images, videos, and code (collectively, "Content") — are owned by or licensed to Market Integrators, its clients, or its partners, and are protected by copyright and trademark laws of the United States and international jurisdictions.
                  </p>
                  <p className="mb-4">
                    Unauthorized use of any Content is strictly prohibited. You may not modify, copy, distribute, display, transmit, publish, or sell any Content from this website without prior written consent from Market Integrators or the respective copyright owner.
                  </p>
                  <p className="mb-4">
                    Use of this site's Content on any other website or in any digital or print medium is also prohibited unless expressly authorized.
                  </p>
                </section>

                <section id="email" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Email and Newsletter Communications</h2>
                  <p className="mb-4">
                    Market Integrators may collect email addresses of individuals who voluntarily subscribe to our newsletter, contact us through forms, or otherwise engage with us digitally. These email addresses are used solely for business communication and marketing updates related to Market Integrators services.
                  </p>
                  <p className="mb-4">
                    Subscribers may opt out at any time by clicking the unsubscribe link in any email communication.
                  </p>
                  <p className="mb-4">
                    Collected data may be retained for internal analytics, service improvement, and recordkeeping, but will never be sold or shared for third-party promotional purposes.
                  </p>
                  <p className="mb-4">
                    Market Integrators reserves the right to disclose information if required by law or to protect its legal rights.
                  </p>
                </section>

                <section id="client-links" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Client Links and Third-Party Access</h2>
                  <p className="mb-4">
                    The Market Integrators website may include links to client, partner, or third-party websites. While we encourage all partners to maintain strong privacy practices, Market Integrators is not responsible for the content or privacy policies of any external websites.
                  </p>
                  <p className="mb-4">
                    If you choose to visit third-party websites through links on our site, you do so at your own risk. Third-party advertisers or embedded platforms may use cookies, pop-ups, or tracking tools beyond our control.
                  </p>
                </section>

                <section id="security" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Security of Market Integrators' Network and Systems</h2>
                  <p className="mb-4">
                    Unauthorized access or attempts to compromise the security of Market Integrators' systems are strictly prohibited and may result in criminal and civil liability.
                  </p>
                  <p className="mb-4">Examples of prohibited activity include (but are not limited to):</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Unauthorized access to or use of Market Integrators systems, networks, or data.</li>
                    <li>Attempts to probe, scan, or test vulnerabilities without authorization.</li>
                    <li>Interference with website functionality or service availability (e.g., spamming, flooding, denial-of-service attacks).</li>
                    <li>Forging headers, impersonating others, or misrepresenting identity in communications.</li>
                    <li>Uploading or transmitting any harmful code, malware, or obscene or defamatory content.</li>
                  </ul>
                  <p className="mb-4">
                    We will investigate any suspected violations and may cooperate with law enforcement agencies where appropriate.
                  </p>
                  <p className="mb-4">
                    You are solely responsible for your communications and their consequences. Do not submit or transmit material that is:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Infringing on any copyright, trademark, or intellectual property rights;</li>
                    <li>Violating privacy or publicity rights of others;</li>
                    <li>Obscene, defamatory, threatening, or abusive;</li>
                    <li>Promotional or solicitational in nature (e.g., spam, chain letters, pyramid schemes);</li>
                    <li>Misrepresenting another person or entity.</li>
                  </ul>
                </section>

                <section id="contact" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Contact Us</h2>
                  <p className="mb-4">
                    The primary purpose of the Contact Us page is to allow visitors to communicate with Market Integrators regarding our services, partnership inquiries, or general business development.
                  </p>
                  <p className="mb-4">
                    Visitors may also use the form to report website issues, broken links, or privacy concerns. All submissions are reviewed by our operations and security teams, and any suspicious or malicious activity may be tracked for investigation.
                  </p>
                  <p className="mb-4">
                    While Market Integrators typically does not respond to general unsolicited emails, information voluntarily submitted through our forms is handled in accordance with our{" "}
                    <Link to="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </section>

                <section id="disclaimer" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Disclaimer and Limitation of Liability</h2>
                  <p className="mb-4">
                    All content and materials on this website are provided "as is" without warranties of any kind, either express or implied. Market Integrators does not warrant that the website or its content will be error-free, secure, or uninterrupted.
                  </p>
                  <p className="mb-4">
                    In no event shall Market Integrators or its affiliates be liable for any damages (including direct, indirect, incidental, or consequential) arising out of the use or inability to use this website or its content.
                  </p>
                </section>

                <section id="acknowledgment" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Acknowledgment</h2>
                  <p className="mb-4">
                    You acknowledge that these Terms and Conditions represent the entire agreement between you and Market Integrators concerning your use of this website, its content, and any goods or services available through it.
                  </p>
                  <p className="mb-4">
                    If any provision of these Terms is found unenforceable, the remaining provisions shall remain in full force and effect.
                  </p>
                </section>

                <section id="effective" className="mb-12">
                  <p className="mb-4">
                    <strong>Effective Date:</strong> October 7, 2025
                  </p>
                  <p className="mb-4">
                    <strong>Company:</strong> Market Integrators, LLC
                  </p>
                  <p className="mb-4">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:info@marketintegrators.com" className="text-primary hover:underline">
                      info@marketintegrators.com
                    </a>
                  </p>
                  <p className="mb-4">
                    <strong>Website:</strong>{" "}
                    <a href="https://www.marketintegrators.com" className="text-primary hover:underline">
                      https://www.marketintegrators.com
                    </a>
                  </p>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;
