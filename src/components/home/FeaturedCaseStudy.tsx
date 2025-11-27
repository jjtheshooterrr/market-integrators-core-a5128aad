import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

/** Cloudflare Images setup */
const CF_ACCOUNT_HASH = "GaQ2AWTI-tcX975k7hp2yA";

const VARIANTS = {
  LOGO_SMALL: "logosmall",
  LOGO_THUMB: "logothumb",
  CARD: "card", // optional—enable later
  LARGE: "public",
} as const;

/** Toggle this to true AFTER you create the 'card' variant */
const CARD_VARIANT_ENABLED = false;

/** Build Cloudflare image URL */
const cfImg = (id: string, variant: string = VARIANTS.LARGE) =>
  `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${id}/${variant}`;

/** Create logo sources (with responsive image-set) */
const cfLogoSrc = (id: string) => ({
  src: cfImg(id, VARIANTS.LOGO_THUMB),
  srcSet: `${cfImg(id, VARIANTS.LOGO_SMALL)} 64w, ${cfImg(id, VARIANTS.LOGO_THUMB)} 96w`,
  sizes: "(min-width: 640px) 96px, 64px",
});

/** Create background image with transform or fallback */
const cfBgImage = (id: string) => {
  if (!CARD_VARIANT_ENABLED) {
    return `url('${cfImg(id, VARIANTS.LARGE)}')`;
  }
  return `image-set(
    url('${cfImg(id, VARIANTS.CARD)}') 1x,
    url('${cfImg(id, VARIANTS.LARGE)}') 2x
  )`;
};

// LOGO IDs
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

// OPTIONAL: Background image IDs
const BG_IDS: Partial<Record<keyof typeof IDS, string>> = {
  northernutah: "be78bebc-37d7-4ae2-6f5d-b35507946d00",
  controllerrepairs: "67cba7d3-a8d4-46f5-1dcc-231a4b899400",
  kranzcontractors: "fa5d0029-8251-4184-bc7c-4ae8affc5300",
  pathway2peace: "4f075f37-4248-4ea9-1a09-0819182e5500",
  testmypools: "685e1589-55c0-4b1a-6d5a-8168b43f8200",
  imperialjewelry: "7a716a22-4763-4e2a-6b52-b57ddef1c600",
};

// CASE STUDIES DATA
const caseStudies = [
  {
    key: "audacy",
    logo: IDS.audacy,
    bg: BG_IDS.audacy ?? IDS.audacy,
    industry: "Media / Enterprise",
    name: "Audacy Houston",
    highlight: "3.5M+ video views",
    stats: ["+400% watch time", "3 major brands", "Digital transformation"],
    link: "/case-studies/audacy-houston",
  },
  {
    key: "imperialjewelry",
    logo: IDS.imperialjewelry,
    bg: BG_IDS.imperialjewelry ?? IDS.imperialjewelry,
    industry: "Luxury eCommerce",
    name: "Imperial Jewelry",
    highlight: "Complete brand transformation",
    stats: ["Custom eCommerce design", "Premium brand identity", "Mobile-first experience"],
    link: "/case-studies/imperial-jewelry",
  },
  {
    key: "pathway2peace",
    logo: IDS.pathway2peace,
    bg: BG_IDS.pathway2peace ?? IDS.pathway2peace,
    industry: "Healthcare",
    name: "Pathway 2 Peace",
    highlight: "10+ hours saved weekly",
    stats: ["+125% workflow efficiency", "Custom HR automation", "Calming web redesign"],
    link: "/case-studies/pathway-to-peace",
  },
  {
    key: "kranzcontractors",
    logo: IDS.kranzcontractors,
    bg: BG_IDS.kranzcontractors ?? IDS.kranzcontractors,
    industry: "Home Services",
    name: "Kranz Contractors",
    highlight: "+210% inbound leads",
    stats: ["50% lower ad costs", "Modern web design", "Local SEO dominance"],
    link: "/case-studies/kranz-contractors",
  },
  {
    key: "controllerrepairs",
    logo: IDS.controllerrepairs,
    bg: BG_IDS.controllerrepairs ?? IDS.controllerrepairs,
    industry: "eCommerce",
    name: "ControllerRepairs.com",
    highlight: "+240% sales growth",
    stats: ["Automated workflows", "Smart dashboards", "50% less manual work"],
    link: "/case-studies/controllerrepairs",
  },
  {
    key: "thebull",
    logo: IDS.thebull,
    bg: BG_IDS.thebull ?? IDS.thebull,
    industry: "Media / Country",
    name: "The Bull Houston",
    highlight: "+20K followers",
    stats: ["1.2M+ video views", "Country lifestyle brand", "Digital modernization"],
    link: "/case-studies/the-bull-houston",
  },
  {
    key: "testmypools",
    logo: IDS.testmypools,
    bg: BG_IDS.testmypools ?? IDS.testmypools,
    industry: "SaaS / AI",
    name: "TestMyPools.com",
    highlight: "Full AI software creation",
    stats: ["Google Vision integration", "Subscription automation", "Complete product launch"],
    link: "/case-studies/testmypools",
  },
  {
    key: "mega101",
    logo: IDS.mega101,
    bg: BG_IDS.mega101 ?? IDS.mega101,
    industry: "Media / Latin",
    name: "Mega 101",
    highlight: "+807% follower lift",
    stats: ["+717% weekly impressions", "Crisis-moment coverage", "Bilingual engagement"],
    link: "/case-studies/mega-101",
  },
  {
    key: "northernutah",
    logo: IDS.northernutah,
    bg: BG_IDS.northernutah ?? IDS.northernutah,
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
          <h2 className="mb-4">Proven Digital Marketing & Web Development Results</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real growth stories from businesses we've helped scale through strategy, design, and automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => {
            const logo = cfLogoSrc(study.logo);
            const bg = cfBgImage(study.bg);

            return (
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
                    style={{ backgroundImage: bg }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-foreground/40" />

                  <div className="relative h-full flex flex-col justify-between p-8 text-primary-foreground">
                    <div>
                      <img
                        {...logo}
                        alt={`${study.name} logo`}
                        width={96}
                        height={96}
                        loading="lazy"
                        decoding="async"
                        className="h-12 w-auto object-contain mb-4 transform group-hover:scale-110 transition-transform duration-300"
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
                            <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0 mt-0.5" />
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
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Achieve Similar Digital Growth?</h3>
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
