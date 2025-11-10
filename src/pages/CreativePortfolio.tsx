import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Palette, Video, Film, Camera, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { PortfolioTabs } from "@/components/portfolio/PortfolioTabs";

const CreativePortfolio = () => {
  const categories = [
    {
      title: "Graphic & Visual Design",
      description: "Static creative assets, design systems, and visual branding work including YouTube thumbnails, social post designs, digital ads, brand identity, and website mockups.",
      icon: Palette,
      link: "/creative-portfolio/graphic-and-visual-design",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Animated Videos & Motion Graphics",
      description: "Dynamic content designed for storytelling and brand identity including logo stings, lower thirds, animated explainers, and motion graphic ad spots.",
      icon: Sparkles,
      link: "/creative-portfolio/animated-videos-motion-graphics",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Edited Video & Short-Form Content",
      description: "Video editing and social-first storytelling including Reels, TikToks, YouTube Shorts, multi-cam edits, highlight reels, and promotional content.",
      icon: Video,
      link: "/creative-portfolio/edited-video-short-form-content",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Film & On-Site Production",
      description: "Full-scale video production work including commercial and brand films, studio and on-location shoots, interviews, and B-roll footage.",
      icon: Film,
      link: "/creative-portfolio/film-on-site-production",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Photography & Media",
      description: "Still media and creative captures including lifestyle and product photography, event photography, artist portraits, and editorial imagery.",
      icon: Camera,
      link: "/creative-portfolio/photography-media",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Creative Portfolio | Market Integrators Creative Media Studio</title>
        <meta name="description" content="Explore our creative work across design, video production, animation, and photography. Browse our portfolio categories." />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4" variant="outline">
                Creative Media Studio
              </Badge>
              <h1 className="mb-6">Creative Portfolio</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Explore our creative work across design, video production, animation, and photography. 
                Every project showcases our commitment to quality storytelling and visual excellence.
              </p>
            </div>
            
            <PortfolioTabs />
          </div>
        </section>

        {/* Portfolio Categories Grid */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Link 
                    key={index} 
                    to={category.link}
                    className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className="p-6 relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold">{category.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                      <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform duration-300">
                        View Portfolio →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-6">Ready to create something amazing?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's bring your creative vision to life with our full-service media studio.
            </p>
            <a href="/contact-us">
              <button className="btn-text bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Project
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CreativePortfolio;
