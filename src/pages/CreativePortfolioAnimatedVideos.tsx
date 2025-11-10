import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { Helmet } from "react-helmet";
import { PortfolioTabs } from "@/components/portfolio/PortfolioTabs";

interface CreativeProject {
  title: string;
  description: string;
  category: string;
  videoId?: string;
  aspectRatio?: string;
  credits: {
    role: string;
    name: string;
  }[];
}

const CreativePortfolioAnimatedVideos = () => {
  const animatedVideosProjects: CreativeProject[] = [
    {
      title: "Hero Animation Reel",
      description:
        "A showcase of our latest animation and motion graphics work — blending creativity and technical precision.",
      category: "Animated Videos & Motion Graphics",
      videoId: "66a00ceac5d17e0c7a84a88fd9290c8c",
      aspectRatio: "56.25%", // 16:9
      credits: [
        { role: "Creative Director", name: "Market Integrators Team" },
        { role: "Animator", name: "Studio Team" },
      ],
    },
    {
      title: "Radio Station Logo Stings",
      description:
        "Animated logo reveals and transitions for Audacy Houston stations including The Bull, Mega 101, and SportsRadio 610.",
      category: "Animated Videos & Motion Graphics",
      videoId: "42199c78495b788ffdaee9a341d01c23",
      aspectRatio: "75%", // 4:3 style
      credits: [
        { role: "Motion Designer", name: "Market Integrators Team" },
        { role: "Animation Director", name: "Studio Team" },
      ],
    },
    {
      title: "Lower Thirds & Motion Titles",
      description: "Broadcast-quality animated graphics for video content and live streams.",
      category: "Animated Videos & Motion Graphics",
      videoId: "b0a6799c890d34169781027f8a503474",
      aspectRatio: "56.25%", // 16:9
      credits: [{ role: "Motion Graphics Artist", name: "Market Integrators Team" }],
    },
    {
      title: "Event Graphics & Transitions",
      description: "Dynamic motion graphics for live events and streaming content.",
      category: "Animated Videos & Motion Graphics",
      videoId: "15e013844bdd96b947a347b11851bdca",
      aspectRatio: "56.25%", // 16:9
      credits: [{ role: "Motion Graphics Artist", name: "Market Integrators Team" }],
    },
    {
      title: "Social Media Animations",
      description: "Dynamic animated content optimized for social media platforms.",
      category: "Animated Videos & Motion Graphics",
      videoId: "3e77bd4ada463b6a39c5e7978c377e28",
      aspectRatio: "56.25%", // 16:9
      credits: [{ role: "Animation Artist", name: "Market Integrators Team" }],
    },
    {
      title: "Brand Story Animations",
      description: "Narrative-driven motion graphics for brand storytelling.",
      category: "Animated Videos & Motion Graphics",
      videoId: "c0e27ea609903709c29feb83e931503e",
      aspectRatio: "75%", // 4:3 style
      credits: [
        { role: "Creative Director", name: "Market Integrators Team" },
        { role: "Motion Designer", name: "Studio Team" },
      ],
    },
    {
      title: "Broadcast Graphics Package",
      description: "Complete motion graphics suite for digital broadcast content.",
      category: "Animated Videos & Motion Graphics",
      videoId: "48d7b689a7411cf82770ef69022ddd73",
      aspectRatio: "56.25%", // 16:9
      credits: [{ role: "Motion Designer", name: "Market Integrators Team" }],
    },
    // NEW VIDEO ADDED
    {
      title: "Animated Video – C83D19",
      description: "High-impact animated video formatted for 4:3 style presentations.",
      category: "Animated Videos & Motion Graphics",
      videoId: "c83d19a2d04bb161d7c0007a4e2298c2",
      aspectRatio: "75%", // matches your snippet
      credits: [{ role: "Animation Artist", name: "Market Integrators Team" }],
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Animated Videos & Motion Graphics Portfolio | Market Integrators Creative Studio</title>
        <meta
          name="description"
          content="View our motion graphics and animation work including logo stings, lower thirds, animated explainers, and motion graphic ad spots."
        />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4" variant="outline">
                <Sparkles className="w-4 h-4 mr-2" />
                Animated Videos & Motion Graphics
              </Badge>
              <h1 className="mb-6">Animated Videos & Motion Graphics Portfolio</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Dynamic content designed for storytelling and brand identity including logo stings, lower thirds,
                animated explainers, and motion graphic ad spots.
              </p>
            </div>

            <PortfolioTabs />
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <div className="grid md:grid-cols-2 gap-6">
              {animatedVideosProjects.map((project, index) => (
                <div
                  key={index}
                  className="relative w-full overflow-hidden rounded-lg"
                  style={{ paddingTop: project.aspectRatio || "56.25%" }}
                >
                  {project.videoId && (
                    <iframe
                      src={`https://customer-fupcxqt1psuecjaw.cloudflarestream.com/${project.videoId}/iframe?loop=true&poster=https%3A%2F%2Fcustomer-fupcxqt1psuecjaw.cloudflarestream.com%2F${project.videoId}%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600`}
                      loading="lazy"
                      className="absolute top-0 left-0 w-full h-full border-none"
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                      allowFullScreen
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-6">Ready to bring your brand to life?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's create stunning motion graphics that captivate your audience.
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

export default CreativePortfolioAnimatedVideos;
