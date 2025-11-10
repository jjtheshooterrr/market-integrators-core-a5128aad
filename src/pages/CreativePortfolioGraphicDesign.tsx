import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Palette, X } from "lucide-react";
import { Helmet } from "react-helmet";

interface CreativeProject {
  title: string;
  description: string;
  category: string;
  image?: string;
  credits: {
    role: string;
    name: string;
  }[];
}

const CreativePortfolioGraphicDesign = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const graphicDesignProjects: CreativeProject[] = [
    {
      title: "Creative Gaming Poster",
      description: "Dynamic gaming poster design with bold typography and vibrant colors.",
      category: "Graphic & Visual Design",
      image: "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/creativestudiobuck/creative-gaming-poster-design-market-integrators.webp",
      credits: [
        { role: "Graphic Designer", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Digital Art Design",
      description: "Contemporary digital art showcasing modern design techniques.",
      category: "Graphic & Visual Design",
      image: "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/creativestudiobuck/digital-art-design-market-integrators.webp",
      credits: [
        { role: "Digital Artist", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Esports Event Poster",
      description: "High-energy promotional design for competitive gaming events.",
      category: "Graphic & Visual Design",
      image: "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/creativestudiobuck/esports-event-poster-design-market-integrators.webp",
      credits: [
        { role: "Creative Director", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Experimental Graphic Design",
      description: "Cutting-edge experimental design pushing creative boundaries.",
      category: "Graphic & Visual Design",
      image: "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/creativestudiobuck/experimental-graphic-design-market-integrators.webp",
      credits: [
        { role: "Art Director", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Fine Art Portrait Design",
      description: "Artistic portrait design with sophisticated visual elements.",
      category: "Graphic & Visual Design",
      image: "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/creativestudiobuck/fine-art-portrait-design-market-integrators.webp",
      credits: [
        { role: "Graphic Designer", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Gaming Illustration",
      description: "Custom gaming character illustration and concept art.",
      category: "Graphic & Visual Design",
      image: "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/creativestudiobuck/gaming-illustration-design-market-integrators.webp",
      credits: [
        { role: "Illustrator", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Gaming Promo Poster",
      description: "Eye-catching promotional poster for gaming campaigns.",
      category: "Graphic & Visual Design",
      image: "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/creativestudiobuck/gaming-promo-poster-design-market-integrators.webp",
      credits: [
        { role: "Graphic Designer", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Gaming Thumbnail Design",
      description: "Engaging thumbnail design optimized for gaming content.",
      category: "Graphic & Visual Design",
      image: "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/creativestudiobuck/gaming-thumbnail-design-market-integrators.webp",
      credits: [
        { role: "Thumbnail Designer", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Gaming YouTube Thumbnail",
      description: "High-impact YouTube thumbnail designed for maximum click-through.",
      category: "Graphic & Visual Design",
      image: "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/creativestudiobuck/gaming-youtube-thumbnail-design-market-integrators.webp",
      credits: [
        { role: "Thumbnail Designer", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Music Cover Art",
      description: "Professional album cover art and music branding design.",
      category: "Graphic & Visual Design",
      image: "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/creativestudiobuck/music-cover-art-design-market-integrators.webp",
      credits: [
        { role: "Cover Art Designer", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Sports Graphic Design",
      description: "Dynamic sports graphics for digital and broadcast media.",
      category: "Graphic & Visual Design",
      image: "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/creativestudiobuck/sports-graphic-design-market-integrators.webp",
      credits: [
        { role: "Sports Designer", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Sports Promo Design",
      description: "Bold promotional design for sports events and campaigns.",
      category: "Graphic & Visual Design",
      image: "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/creativestudiobuck/sports-promo-design-market-integrators.webp",
      credits: [
        { role: "Graphic Designer", name: "Market Integrators Team" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Graphic & Visual Design Portfolio | Market Integrators Creative Studio</title>
        <meta name="description" content="Explore our graphic and visual design work including YouTube thumbnails, social media designs, digital ads, and brand identity projects." />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom text-center max-w-4xl">
            <Badge className="mb-4" variant="outline">
              <Palette className="w-4 h-4 mr-2" />
              Graphic & Visual Design
            </Badge>
            <h1 className="mb-6">Graphic & Visual Design Portfolio</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Static creative assets, design systems, and visual branding work including YouTube thumbnails, 
              social post designs, digital ads, brand identity, and website mockups.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <div className="grid md:grid-cols-3 gap-6">
              {graphicDesignProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden rounded-lg group cursor-pointer"
                  onClick={() => setSelectedImage(project.image || null)}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain md:aspect-square md:object-cover transition-transform duration-300 group-hover:scale-105"
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
            <h2 className="text-primary-foreground mb-6">Need stunning design work?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's create beautiful graphics that capture your brand's essence.
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

      {/* Image Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none overflow-hidden">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          {selectedImage && (
            <div className="w-full h-full flex items-center justify-center p-8">
              <img
                src={selectedImage}
                alt="Full size preview"
                className="max-w-full max-h-[calc(95vh-4rem)] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreativePortfolioGraphicDesign;
