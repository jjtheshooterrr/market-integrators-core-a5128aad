import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Camera, X } from "lucide-react";
import { Helmet } from "react-helmet";
import { PortfolioTabs } from "@/components/portfolio/PortfolioTabs";

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

const CreativePortfolioPhotography = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photographyProjects: CreativeProject[] = [
    {
      title: "Automotive Brand Visuals",
      description: "Professional automotive photography showcasing vehicle design and branding.",
      category: "Photography & Media",
      image: "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/creativestudiobuck/automotive-brand-visuals-market-integrators.webp",
      credits: [
        { role: "Photographer", name: "Market Integrators Team" },
        { role: "Photo Editor", name: "Studio Team" },
      ],
    },
    {
      title: "Automotive Media Production",
      description: "High-end automotive photography and media content for marketing campaigns.",
      category: "Photography & Media",
      image: "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/creativestudiobuck/automotive-media-production-market-integrators.webp",
      credits: [
        { role: "Automotive Photographer", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Mexican Cuisine Dish Presentation",
      description: "Food photography capturing authentic Mexican culinary artistry and presentation.",
      category: "Photography & Media",
      image: "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/creativestudiobuck/mexican-cuisine-dish-presentation-market-integrators.webp",
      credits: [
        { role: "Food Photographer", name: "Market Integrators Team" },
        { role: "Photo Editor", name: "Studio Team" },
      ],
    },
    {
      title: "Restaurant Food Display",
      description: "Professional restaurant photography highlighting menu items and culinary excellence.",
      category: "Photography & Media",
      image: "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/creativestudiobuck/restaurant-food-display-market-integrators.webp",
      credits: [
        { role: "Food Photographer", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Dessert Plating Design",
      description: "Elegant dessert photography showcasing plating techniques and presentation.",
      category: "Photography & Media",
      image: "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/creativestudiobuck/dessert-plating-design-market-integrators.webp",
      credits: [
        { role: "Food Photographer", name: "Market Integrators Team" },
        { role: "Photo Editor", name: "Studio Team" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Photography & Media Portfolio | Market Integrators Creative Studio</title>
        <meta name="description" content="Explore our photography work including lifestyle, product, food, event, and editorial photography." />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4" variant="outline">
                <Camera className="w-4 h-4 mr-2" />
                Photography & Media
              </Badge>
              <h1 className="mb-6">Photography & Media Portfolio</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Still media and creative captures including lifestyle and product photography, 
                event photography, artist portraits, and editorial imagery.
              </p>
            </div>
            
            <PortfolioTabs />
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {photographyProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => setSelectedImage(project.image || null)}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain md:aspect-square md:object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
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
            <h2 className="text-primary-foreground mb-6">Need professional photography?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's capture stunning images that showcase your brand and products beautifully.
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

export default CreativePortfolioPhotography;
