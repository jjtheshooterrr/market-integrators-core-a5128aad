import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aprenovationsLogo from "@/assets/aprenovations-logo.webp";
import aprenovationsMac from "@/assets/aprenovationsmacview.webp";
import controllerrepairsLogo from "@/assets/controllerrepairs-logo.webp";
import controllerrepairsMac from "@/assets/controllerrepairs-macview.webp";
import pathway2peaceLogo from "@/assets/pathway2peace-logo.webp";
import pathway2peaceMac from "@/assets/pathway2peace-macview.webp";
import testmypoolsLogo from "@/assets/testmypools-logo.webp";
import testmypoolsMac from "@/assets/testmypools-macview.webp";
import imperialjewelryLogo from "@/assets/imperialjewelryshoplogo (1).webp";
import imperialjewelryMac from "@/assets/imperialjewelry-macview.webp";
import kranzcontractorsLogo from "@/assets/kranzcontractors-logo.webp";
import kranzcontractorsMac from "@/assets/kranzcontractors-macview.webp";
import crewcoLogo from "@/assets/crewco-logo.webp";
import crewcoMac from "@/assets/crewco-macview.webp";
import audacyLogo from "@/assets/audacy-logo.webp";
import sportsradio610Logo from "@/assets/sportsradio610-logo.webp";
import mega101Logo from "@/assets/mega101-logo.webp";
import thebullLogo from "@/assets/thebull-logo.webp";

const FeaturedCaseStudy = () => {
  const caseStudies = [
    {
      logo: audacyLogo,
      bgImage: audacyLogo,
      industry: "Media / Enterprise",
      name: "Audacy Houston",
      highlight: "3.5M+ video views",
      stats: ["+400% watch time", "3 major brands", "Digital transformation"],
      link: "/case-studies/audacy-houston",
    },
    {
      logo: imperialjewelryLogo,
      bgImage: imperialjewelryMac,
      industry: "Luxury eCommerce",
      name: "Imperial Jewelry",
      highlight: "Complete brand transformation",
      stats: ["Custom eCommerce design", "Premium brand identity", "Mobile-first experience"],
      link: "/case-studies/imperial-jewelry",
    },
    {
      logo: pathway2peaceLogo,
      bgImage: pathway2peaceMac,
      industry: "Healthcare",
      name: "Pathway 2 Peace",
      highlight: "10+ hours saved weekly",
      stats: ["+125% workflow efficiency", "Custom HR automation", "Calming web redesign"],
      link: "/case-studies/pathway-to-peace",
    },
    {
      logo: kranzcontractorsLogo,
      bgImage: kranzcontractorsMac,
      industry: "Home Services",
      name: "Kranz Contractors",
      highlight: "+210% inbound leads",
      stats: ["50% lower ad costs", "Modern web design", "Local SEO dominance"],
      link: "/case-studies/kranz-contractors",
    },
    {
      logo: controllerrepairsLogo,
      bgImage: controllerrepairsMac,
      industry: "eCommerce",
      name: "ControllerRepairs.com",
      highlight: "+240% sales growth",
      stats: ["Automated workflows", "Smart dashboards", "50% less manual work"],
      link: "/case-studies/controllerrepairs",
    },
    {
      logo: thebullLogo,
      bgImage: thebullLogo,
      industry: "Media / Country",
      name: "The Bull Houston",
      highlight: "+20K followers",
      stats: ["1.2M+ video views", "Country lifestyle brand", "Digital modernization"],
      link: "/case-studies/the-bull-houston",
    },
    {
      logo: testmypoolsLogo,
      bgImage: testmypoolsMac,
      industry: "SaaS / AI",
      name: "TestMyPools.com",
      highlight: "Full AI software creation",
      stats: ["Google Vision integration", "Subscription automation", "Complete product launch"],
      link: "/case-studies/testmypools",
    },
    {
      logo: mega101Logo,
      bgImage: mega101Logo,
      industry: "Media / Latin",
      name: "Mega 101",
      highlight: "+807% follower lift",
      stats: ["+717% weekly impressions", "Crisis-moment coverage", "Bilingual engagement"],
      link: "/case-studies/mega-101",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Proven Results</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real growth stories from businesses we've helped scale through strategy, design, and automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={study.link}
                className="group block relative h-[400px] rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${study.bgImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-foreground/40" />

                <div className="relative h-full flex flex-col justify-between p-8 text-primary-foreground">
                  <div>
                    <img src={study.logo} alt={`${study.name} logo`} className="h-12 w-auto object-contain mb-4" />
                    <div className="inline-block bg-primary/20 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {study.industry}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-primary-foreground">{study.name}</h3>
                    <p className="text-lg font-semibold text-primary mb-4">{study.highlight}</p>
                  </div>

                  <div>
                    <ul className="space-y-2 mb-6">
                      {study.stats.map((stat, idx) => (
                        <li key={idx} className="text-sm text-primary-foreground/90 flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          {stat}
                        </li>
                      ))}
                    </ul>
                    <div className="inline-flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                      View Case Study →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Want results like these?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We help businesses turn strategy and technology into measurable growth.
          </p>
          <Button asChild size="lg" className="btn-text">
            <Link to="/case-studies">View All Case Studies →</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
