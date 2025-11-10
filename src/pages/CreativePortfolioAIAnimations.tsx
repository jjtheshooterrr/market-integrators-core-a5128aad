import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { Helmet } from "react-helmet";
import { PortfolioTabs } from "@/components/portfolio/PortfolioTabs";

interface CreativeProject {
  title: string;
  description?: string;
  category?: string;
  videoId: string;
  aspectRatio?: string;
  credits?: { role: string; name: string }[];
}

const CreativePortfolioAIAnimations = () => {
  const aiAnimationsProjects: CreativeProject[] = [
    {
      title: "AI-Prompted Animation Showcase",
      description: "Cutting-edge animations created using artificial intelligence prompting and generative techniques.",
      category: "Artificial Intelligence Prompted Animations",
      videoId: "ecddc3e3fcfd5b213c9b116c64c7e580",
      aspectRatio: "177.77%", // 9:16 vertical
      credits: [
        { role: "AI Director", name: "Market Integrators Team" },
        { role: "Creative Technologist", name: "Studio Team" },
      ],
    },
    {
      title: "Dynamic AI Animation",
      description: "Innovative motion graphics generated through AI-powered workflows.",
      category: "Artificial Intelligence Prompted Animations",
      videoId: "15e013844bdd96b947a347b11851bdca",
      aspectRatio: "56.25%", // 16:9
      credits: [{ role: "AI Motion Designer", name: "Market Integrators Team" }],
    },
    // --- Added videos below ---
    {
      title: "AI Animation – D5953A",
      description: "AI-driven cinematic motion graphics experiment.",
      category: "Artificial Intelligence Prompted Animations",
      videoId: "d5953abdc3671450f5ba170883c0b8c9",
      aspectRatio: "56.25%", // 16:9
      credits: [{ role: "Creative Lead", name: "Market Integrators Team" }],
    },
    {
      title: "Tag Heuer F1 – Carlos Arcilla",
      description: "Luxury-inspired AI vertical animation concept featuring Tag Heuer F1.",
      category: "Artificial Intelligence Prompted Animations",
      videoId: "0187d5f146cf56547633cb0bbe68b6ca",
      aspectRatio: "177.77%", // 9:16
      credits: [
        { role: "Director", name: "Carlos Arcilla" },
        { role: "AI Design", name: "Market Integrators Team" },
      ],
    },
    {
      title: "AI Sample Tutorial – Carlos Arcilla",
      description: "Educational AI-generated motion design tutorial and sample showcase.",
      category: "Artificial Intelligence Prompted Animations",
      videoId: "f9e2314dd84344ddbd5b324b74de88f5",
      aspectRatio: "177.92%", // 9:16 vertical
      credits: [{ role: "Creator", name: "Carlos Arcilla" }],
    },
    {
      title: "AI Motion Study – 48D7B6",
      description: "Exploration of AI-based animation composition and depth techniques.",
      category: "Artificial Intelligence Prompted Animations",
      videoId: "48d7b689a7411cf82770ef69022ddd73",
      aspectRatio: "56.25%", // 16:9
      credits: [{ role: "AI Artist", name: "Market Integrators Team" }],
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AI-Prompted Animations Portfolio | Market Integrators Creative Studio</title>
        <meta
          name="description"
          content="Explore our AI-generated animation work featuring cutting-edge artificial intelligence prompted animations and generative motion graphics."
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
                Artificial Intelligence Prompted Animations
              </Badge>
              <h1 className="mb-6">AI-Prompted Animations Portfolio</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Innovative animations created using artificial intelligence and generative techniques, pushing the
                boundaries of creative expression through cutting-edge AI technology.
              </p>
            </div>

            <PortfolioTabs />
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <div className="grid md:grid-cols-2 gap-6">
              {aiAnimationsProjects.map((project, index) => (
                <div
                  key={index}
                  className="relative w-full overflow-hidden rounded-lg"
                  style={{ paddingTop: project.aspectRatio || "56.25%" }}
                >
                  {project.videoId && (
                    <iframe
                      src={`https://customer-fupcxqt1psuecjaw.cloudflarestream.com/${project.videoId}/iframe?preload=true&loop=true&poster=https%3A%2F%2Fcustomer-fupcxqt1psuecjaw.cloudflarestream.com%2F${project.videoId}%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600`}
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
            <h2 className="text-primary-foreground mb-6">Ready to explore AI-powered creativity?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's create innovative animations using the latest AI technology.
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

export default CreativePortfolioAIAnimations;
