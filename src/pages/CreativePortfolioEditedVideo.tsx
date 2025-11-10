import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Video } from "lucide-react";
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

const CreativePortfolioEditedVideo = () => {
  const editedVideoProjects: CreativeProject[] = [
    {
      title: "Sports Highlight Reel",
      description: "Fast-paced sports content for SportsRadio 610, generating 1.43M+ YouTube views.",
      category: "Edited Video & Short-Form Content",
      videoId: "fd991b7ed702db5864500647e26ba401",
      aspectRatio: "177.77777777777777%",
      credits: [
        { role: "Video Editor", name: "Market Integrators Team" },
        { role: "Content Strategy", name: "Studio Team" },
      ],
    },
    {
      title: "Social Media Short",
      description: "Viral short-form content for Instagram Reels, TikTok, and YouTube Shorts.",
      category: "Edited Video & Short-Form Content",
      videoId: "f59a1eb26ed98ddc8b131a270c37b207",
      aspectRatio: "177.77777777777777%",
      credits: [
        { role: "Editor", name: "Market Integrators Team" },
        { role: "Social Media Strategy", name: "Studio Team" },
      ],
    },
    {
      title: "Vertical Content Edit",
      description: "Mobile-first edited content optimized for social platforms.",
      category: "Edited Video & Short-Form Content",
      videoId: "015bdcadf43c88641bbf6fde94f65d2a",
      aspectRatio: "177.77777777777777%",
      credits: [
        { role: "Editor", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Sports Content Short",
      description: "Dynamic sports content edited for maximum engagement.",
      category: "Edited Video & Short-Form Content",
      videoId: "7f3a5d4685de8817af726d02b44b2af6",
      aspectRatio: "177.77777777777777%",
      credits: [
        { role: "Video Editor", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Social Media Reel",
      description: "High-impact vertical video content for social media platforms.",
      category: "Edited Video & Short-Form Content",
      videoId: "b913a10aa230631eee93be4b453d898c",
      aspectRatio: "177.77777777777777%",
      credits: [
        { role: "Editor", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Vertical Video Edit",
      description: "Engaging vertical format content for TikTok and Instagram Reels.",
      category: "Edited Video & Short-Form Content",
      videoId: "449715068d7587f30fc864a266f44964",
      aspectRatio: "177.77777777777777%",
      credits: [
        { role: "Editor", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Short-Form Content",
      description: "Rapid-fire edited content designed for viral social media distribution.",
      category: "Edited Video & Short-Form Content",
      videoId: "b7cea73544f6471f780f0c6a0505758a",
      aspectRatio: "177.77777777777777%",
      credits: [
        { role: "Editor", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Highlight Compilation",
      description: "Multi-cam edited highlights showcasing key moments and action.",
      category: "Edited Video & Short-Form Content",
      videoId: "3d52c610e483369e635bc8f39d2bdc80",
      aspectRatio: "56.25%",
      credits: [
        { role: "Video Editor", name: "Market Integrators Team" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Edited Video & Short-Form Content Portfolio | Market Integrators Creative Studio</title>
        <meta name="description" content="Watch our video editing work including Reels, TikToks, YouTube Shorts, highlight reels, and promotional content." />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4" variant="outline">
                <Video className="w-4 h-4 mr-2" />
                Edited Video & Short-Form Content
              </Badge>
              <h1 className="mb-6">Edited Video & Short-Form Content Portfolio</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Video editing and social-first storytelling including Reels, TikToks, YouTube Shorts, 
                multi-cam edits, highlight reels, and promotional content.
              </p>
            </div>
            
            <PortfolioTabs />
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <div className="grid md:grid-cols-2 gap-6">
              {editedVideoProjects.map((project, index) => (
                <div key={index} className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: project.aspectRatio || "56.25%" }}>
                  {project.videoId && (
                    <iframe
                      src={`https://customer-fupcxqt1psuecjaw.cloudflarestream.com/${project.videoId}/iframe?preload=true&loop=true&poster=https%3A%2F%2Fcustomer-fupcxqt1psuecjaw.cloudflarestream.com%2F${project.videoId}%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600`}
                      loading="lazy"
                      className="absolute top-0 left-0 w-full h-full border-none"
                      allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
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
            <h2 className="text-primary-foreground mb-6">Need viral-worthy video content?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's create engaging short-form videos that capture attention and drive results.
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

export default CreativePortfolioEditedVideo;
