import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Simplified Cloudflare delivery — no DPR variants, just single URLs
// Logos via Cloudflare Images (imagedelivery.net)
// MacView backgrounds remain in /assets but are served via /cdn-cgi/image

const CF_ACCOUNT_HASH = "YOUR_ACCOUNT_HASH"; // Replace with your Cloudflare Images account hash

const cfImg = (id: string) => `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${id}/public`;
const cgiImg = (path: string) =>
  `/cdn-cgi/image/width=1600,fit=cover,quality=80${path.startsWith("/") ? "" : "/"}${path}`;

const IDS = {
  thebull: "a136ed51-e1fb-4106-f45d-4483cda16f00",
  mega101: "2db6654b-36f8-47e7-8748-b9a9ea13d200",
  audacy: "e49263ea-b64c-4f70-a9e9-b58d3b0cb800",
  controllerrepairs: "3a9d996a-654b-4ee1-d588-a32f3b97f000",
  imperialjewelry: "3d93b579-0817-4ef9-f137-77c69af23700",
  kranzcontractors: "ef776eea-a4d2-47ce-019a-16f160c85600",
  pathway2peace: "4ab7c48c-9e5f-4928-f6ba-ec383a628f00",
  northernutah: "7c4b595b-32a7-49a8-eff7-5514d56a3d00",
  testmypools: "3940bb47-1533-4e69-964f-6c56f95b4d00",
};

const BG_ASSETS = {
  imperialjewelry: "/assets/imperialjewelry-macview.webp",
  pathway2peace: "/assets/pathway2peace-macview.webp",
  kranzcontractors: "/assets/kranzcontractors-macview.webp",
  controllerrepairs: "/assets/controllerrepairs-macview.webp",
  testmypools: "/assets/testmypools-macview.webp",
  northernutah: "/assets/northernutahwindowwells-macview.webp",
};

const caseStudies = [
  {
    key: "audacy",
    logo: cfImg(IDS.audacy),
    bg: cfImg(IDS.audacy),
    industry: "Media / Enterprise",
    name: "Audacy Houston",
    highlight: "3.5M+ video views",
    stats: ["+400% watch time", "3 major brands", "Digital transformation"],
    link: "/case-studies/audacy-houston",
  },
  {
    key: "imperialjewelry",
    logo: cfImg(IDS.imperialjewelry),
    bg: cgiImg(BG_ASSETS.imperialjewelry),
    industry: "Luxury eCommerce",
    name: "Imperial Jewelry",
    highlight: "Complete brand transformation",
    stats: ["Custom eCommerce design", "Premium brand identity", "Mobile-first experience"],
    link: "/case-studies/imperial-jewelry",
  },
  {
    key: "pathway2peace",
    logo: cfImg(IDS.pathway2peace),
    bg: cgiImg(BG_ASSETS.pathway2peace),
    industry: "Healthcare",
    name: "Pathway 2 Peace",
    highlight: "10+ hours saved weekly",
    stats: ["+125% workflow efficiency", "Custom HR automation", "Calming web redesign"],
    link: "/case-studies/pathway-to-peace",
  },
  {
    key: "kranzcontractors",
    logo: cfImg(IDS.kranzcontractors),
    bg: cgiImg(BG_ASSETS.kranzcontractors),
    industry: "Home Services",
    name: "Kranz Contractors",
    highlight: "+210% inbound leads",
    stats: ["50% lower ad costs", "Modern web design", "Local SEO dominance"],
    link: "/case-studies/kranz-contractors",
  },
  {
    key: "controllerrepairs",
    logo: cfImg(IDS.controllerrepairs),
    bg: cgiImg(BG_ASSETS.controllerrepairs),
    industry: "eCommerce",
    name: "ControllerRepairs.com",
    highlight: "+240% sales growth",
    stats: ["Automated workflows", "Smart dashboards", "50% less manual work"],
    link: "/case-studies/controllerrepairs",
  },
  {
    key: "thebull",
    logo: cfImg(IDS.thebull),
    bg: cfImg(IDS.thebull),
    industry: "Media / Country",
    name: "The Bull Houston",
    highlight: "+20K followers",
    stats: ["1.2M+ video views", "Country lifestyle brand", "Digital modernization"],
    link: "/case-studies/the-bull-houston",
  },
  {
    key: "testmypools",
    logo: cfImg(IDS.testmypools),
    bg: cgiImg(BG_ASSETS.testmypools),
    industry: "SaaS / AI",
    name: "TestMyPools.com",
    highlight: "Full AI software creation",
    stats: ["Google Vision integration", "Subscription automation", "Complete product launch"],
    link: "/case-studies/testmypools",
  },
  {
    key: "mega101",
    logo: cfImg(IDS.mega101),
    bg: cfImg(IDS.mega101),
    industry: "Media / Latin",
    name: "Mega 101",
    highlight: "+807% follower lift",
    stats: ["+717% weekly impressions", "Crisis-moment coverage", "Bilingual engagement"],
    link: "/case-studies/mega-101",
  },
  {
    key: "northernutah",
    logo: cfImg(IDS.northernutah),
    bg: cgiImg(BG_ASSETS.northernutah),
    industry: "Home Services",
    name: "Northern Utah Window Wells",
    highlight: "Digital transformation success",
    stats: ["Increased web traffic", "Improved lead generation", "Seasonal demand stability"],
    link: "/case-studies/northern-utah-window-wells",
  },
];

const FeaturedCaseStudy = () => {
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
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${study.bg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-foreground/40" />

                <div className="relative h-full flex flex-col justify-between p-8 text-primary-foreground">
                  <div>
                    <img
                      src={study.logo}
                      alt={`${study.name} logo`}
                      width={48}
                      height={48}
                      loading="lazy"
                      decoding="async"
                      className="h-12 w-auto object-contain mb-4"
                    />
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
