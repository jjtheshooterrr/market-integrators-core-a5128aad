import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
    { id: "introduction", label: "Privacy Policy Introduction" },
    { id: "data-collection", label: "Data Collection" },
    { id: "collection-use", label: "Data collection and use of personally identifiable information" },
    { id: "data-collection-use", label: "Data Collection and Use" },
    { id: "international-transfers", label: "International transfers and privacy policy shield framework" },
    { id: "data-security", label: "Data security and retention" },
    { id: "commitments", label: "Market Integrators commitments" },
    { id: "contact", label: "Contact" },
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
                <h2 className="font-heading font-bold text-lg mb-4">Privacy Policy</h2>
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
                <h1 className="font-heading font-bold text-4xl mb-8">Privacy Policy</h1>

                <section id="introduction" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Introduction</h2>
                  <p className="mb-4">
                    Market Integrators takes your privacy very seriously. This Privacy Policy governs and details the main privacy principles we apply to the data we collect through our website{" "}
                    <Link to="/" className="text-primary hover:underline">
                      www.marketintegrators.com
                    </Link>
                    .
                  </p>
                </section>

                <section id="data-collection" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Data Collection</h2>
                </section>

                <section id="collection-use" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">
                    Collection and Use of Personally Identifiable Information
                  </h2>
                  <p className="mb-4">
                    We collect personally identifiable information such as your name, phone number, company name, and email address directly from you when you choose to enter it on our website—for instance, when you complete the "Contact Us" form.
                  </p>
                  <p className="mb-4">We collect your information when you:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Submit a request or inquiry through our contact form or other entry fields.</li>
                    <li>Contact us with questions about our services or request a demonstration.</li>
                    <li>Request a whitepaper, enter a contest, or participate in a promotion.</li>
                    <li>Provide our employees with your business card.</li>
                    <li>Provide information for billing or other business purposes.</li>
                    <li>Apply for employment.</li>
                  </ul>
                  <p className="mb-4">
                    We also use this information for marketing purposes, such as sending newsletters or promotional emails. You may choose to stop receiving marketing emails by following the unsubscribe instructions included in those communications.
                  </p>
                  <p className="mb-4">
                    By sharing your contact information, you provide Market Integrators with express consent to send business communications via text messages (SMS), email, and calls dialed by a natural person. This consent applies to each phone number or email you provide and remains valid unless you opt out. Consent is not required to register.
                  </p>
                  <p className="mb-4">
                    We never sell or share your personal information (such as phone numbers or SMS consent) to third parties outside of our subsidiaries, affiliated companies, and trusted third-party service providers working under Market Integrators' direction. Message frequency may vary. Message and data rates may apply. You can text STOP at any time to cancel.
                  </p>
                </section>

                <section id="legal-bases" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Legal Bases for Processing</h2>
                  <h3 className="font-heading font-semibold text-xl mb-3">Consent</h3>
                  <p className="mb-4">
                    The collection of personal data based on consent occurs through forms such as our Contact Us page. Your consent is stored and documented in our systems and may be withdrawn at any time.
                  </p>
                  <h3 className="font-heading font-semibold text-xl mb-3">Contract</h3>
                  <p className="mb-4">
                    We may also use personal data to fulfill obligations related to contracts or agreements with customers, partners, and suppliers.
                  </p>
                </section>

                <section id="information-sharing" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Information Sharing</h2>
                  <p className="mb-4">
                    We do not sell or share your information with third parties for their promotional purposes.
                  </p>
                  <p className="mb-4">We may share information with:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Our subsidiaries or affiliated companies.</li>
                    <li>
                      Trusted third-party service providers (e.g., email platforms, hosting providers, data centers) working under our instructions solely to provide services to us.
                    </li>
                  </ul>
                  <p className="mb-4">
                    These third parties are authorized to use your information only as necessary to perform their services.
                  </p>
                </section>

                <section id="legal-disclaimer" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Legal Disclaimer</h2>
                  <p className="mb-4">We may disclose personal data:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>As required by law.</li>
                    <li>In connection with a merger, acquisition, dissolution, or sale of assets.</li>
                    <li>To protect our rights, or comply with a judicial proceeding, court order, or legal process.</li>
                  </ul>
                  <p className="mb-4">
                    If ownership or use of your information changes, you will be notified via email or a prominent notice on our website.
                  </p>
                  <p className="mb-4">
                    We may also disclose data in good faith if it's necessary to protect safety, investigate fraud, or respond to a government request. No personal data will ever be disclosed to any third party without your prior consent.
                  </p>
                </section>

                <section id="external-websites" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">External Websites</h2>
                  <p className="mb-4">
                    Our website may include links to other websites whose privacy practices differ from ours. If you submit personal data to those websites, your information is governed by their policies. We encourage you to review the privacy statements of any website you visit.
                  </p>
                </section>

                <section id="access-correction" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Access, Correction, and Deletion</h2>
                  <p className="mb-4">
                    Upon request, Market Integrators will provide information about whether we hold any of your personal data. You may access, update, or request deletion of your data by contacting us at{" "}
                    <a href="mailto:info@marketintegrators.com" className="text-primary hover:underline">
                      info@marketintegrators.com
                    </a>
                    . We will respond within a reasonable timeframe.
                  </p>
                  <p className="mb-4">You may also request that we:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Correct inaccurate personal data.</li>
                    <li>Complete incomplete data.</li>
                    <li>Erase personal data that is no longer necessary for our purposes.</li>
                  </ul>
                </section>

                <section id="passive-data" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Passive Data Collection</h2>
                  <p className="mb-4">
                    As is true of most websites, we automatically gather certain information. This includes IP addresses, browser type, ISP, referring/exit pages, files viewed, operating system, timestamps, and clickstream data for analytics and site administration.
                  </p>
                </section>

                <section id="tracking-technologies" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Tracking Technologies</h2>
                  <p className="mb-4">
                    Market Integrators and its partners use cookies and similar technologies to analyze trends, administer the website, and track users' activity.
                  </p>
                  <p className="mb-4">
                    Cookies are small text files stored on your computer that contain non-personally identifiable information related to your navigation on our site. Our site may also use web beacons to measure the effectiveness of content.
                  </p>
                  <p className="mb-4">
                    You can manage cookies via your browser settings; disabling cookies may limit certain features.
                  </p>
                  <h3 className="font-heading font-semibold text-xl mb-3">Our Cookies Are Used For:</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Personalization: remembering your preferences (language, location, etc.).</li>
                    <li>Advertising: enabling relevant marketing based on your interests.</li>
                  </ul>
                  <h3 className="font-heading font-semibold text-xl mb-3">Third-Party Cookies May Be Used For:</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Website analytics (e.g., Google Analytics).</li>
                    <li>Embedded content, such as YouTube videos.</li>
                    <li>Social media widgets, such as Facebook, LinkedIn, and X (Twitter).</li>
                  </ul>
                  <p className="mb-4">
                    When using these services, data such as your IP address or browsing activity may be collected. Refer to their specific privacy statements for more information:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Facebook Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Google Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        LinkedIn Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        X (Twitter) Privacy Policy
                      </a>
                    </li>
                  </ul>
                </section>

                <section id="search-advertising" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Search Engine & Online Advertising</h2>
                  <p className="mb-4">
                    We use Google Ads, Bing Ads, and similar platforms to advertise on search result pages. These platforms use cookies to serve ads based on your past visits to our site.
                  </p>
                  <p className="mb-4">
                    We also use retargeting technologies for personalized advertising on partner websites and apps.
                  </p>
                  <p className="mb-4">You can opt out of interest-based advertising here:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Network Advertising Initiative
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Your Online Choices
                      </a>
                    </li>
                  </ul>
                  <p className="mb-4">We do not process this information to personally identify you.</p>
                </section>

                <section id="international-transfers" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">International Transfers</h2>
                  <p className="mb-4">
                    Market Integrators operates its website from servers located in the United States. Data protection laws in your country may differ, but we always protect your data in line with this policy.
                  </p>
                </section>

                <section id="data-security" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Data Security and Retention</h2>
                  <p className="mb-4">
                    We implement standard security measures to protect your data, but no system is 100% secure. We retain your information as long as necessary to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes</li>
                    <li>Enforce agreements</li>
                  </ul>
                </section>

                <section id="commitments" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Market Integrators Commitments</h2>
                  <p className="mb-4">
                    We collect and use data strictly in compliance with all applicable privacy and data protection laws.
                  </p>
                </section>

                <section id="contact" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Contact</h2>
                  <p className="mb-4">
                    <strong>Company:</strong> Market Integrators
                  </p>
                  <p className="mb-4">
                    📍 <strong>Headquarters:</strong> Houston, TX, USA
                  </p>
                  <p className="mb-4">
                    📧 <strong>Email:</strong>{" "}
                    <a href="mailto:info@marketintegrators.com" className="text-primary hover:underline">
                      info@marketintegrators.com
                    </a>
                  </p>
                  <p className="mb-4">
                    🌐 <strong>Website:</strong>{" "}
                    <Link to="/" className="text-primary hover:underline">
                      www.marketintegrators.com
                    </Link>
                  </p>
                </section>

                <section id="changes" className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Changes to This Privacy Policy</h2>
                  <p className="mb-4">
                    We may update this Privacy Policy periodically. If we make material changes, we will notify you via email or by posting a prominent notice on our website before the changes take effect.
                  </p>
                  <p className="mb-4">
                    Please check{" "}
                    <Link to="/" className="text-primary hover:underline">
                      www.marketintegrators.com
                    </Link>{" "}
                    for the latest version.
                  </p>
                  <p className="mb-4">
                    <strong>Effective Date:</strong> October 7, 2025
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

export default PrivacyPolicy;
