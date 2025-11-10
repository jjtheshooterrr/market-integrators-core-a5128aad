import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Camera, X } from "lucide-react";
import { Helmet } from "react-helmet";
import { PortfolioTabs } from "@/components/portfolio/PortfolioTabs";

// ─────────────────────────────────────────────
// Cloudflare Images Config
const ACCOUNT_HASH = "GaQ2AWTI-tcX975k7hp2yA";
const GRID_VARIANT = "public?width=900&height=900&fit=cover";
const LIGHTBOX_VARIANT = "public?fit=contain";

function cfImageUrl(imageId: string, variant: string) {
  return `https://imagedelivery.net/${ACCOUNT_HASH}/${imageId}/${variant}`;
}
// ─────────────────────────────────────────────

interface CreativeProject {
  title: string;
  description: string;
  category: string;
  imageId: string;
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
      description:
        "Professional automotive photography showcasing vehicle design and branding.",
      category: "Photography & Media",
      imageId: "5dfe931f-5d5f-4c59-67c8-4f46d7abe700",
      credits: [
        { role: "Photographer", name: "Market Integrators Team" },
        { role: "Photo Editor", name: "Studio Team" },
      ],
    },
    {
      title: "Automotive Media Production",
      description:
        "High-end automotive photography and media content for marketing campaigns.",
      category: "Photography & Media",
      imageId: "e618e930-cd41-485c-2c61-620b891a1700",
      credits: [
        { role: "Automotive Photographer", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Mexican Cuisine Dish Presentation",
      description:
        "Food photography capturing authentic Mexican culinary artistry and presentation.",
      category: "Photography & Media",
      imageId: "8923e028-79ce-49a7-3945-bc95fa96ed00",
      credits: [
        { role: "Food Photographer", name: "Market Integrators Team" },
        { role: "Photo Editor", name: "Studio Team" },
      ],
    },
    {
      title: "Restaurant Food Display",
      description:
        "Professional restaurant photography highlighting menu items and culinary excellence.",
      category: "Photography & Media",
      imageId: "4dd26272-0372-4fad-1af4-34a764641800",
      credits: [
        { role: "Food Photographer", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Dessert Plating Design",
      description:
        "Elegant dessert photography showcasing plating techniques and presentation.",
      category: "Photography & Media",
      imageId: "06d20e7f-19bb-4493-8e5b-ed3973f14000",
      credits: [
        { role: "Food Photographer", name: "Market Integrators Team" },
        { role: "Photo Editor", name: "Studio Team" },
      ],
    },
    {
      title: "Culinary Studio Showcase",
      description:
        "Fine dining presentation photography highlighting textures, colors, and creativity.",
      category: "Photography & Media",
      imageId: "ec8584f5-43d9-46b6-ba1f-235838743600",
      credits: [
        { role: "Food Stylist", name: "Creative Studio" },
        { role: "Photographer", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Beverage & Branding Shots",
      description:
        "Product photography emphasizing brand identity through lighting and detail.",
      category: "Photography & Media",
      imageId: "f43f1da7-effc-4d4a-b2e7-facbffce1200",
      credits: [
        { role: "Photographer", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Modern Architecture Capture",
      description:
        "Architectural photography focusing on symmetry, design, and perspective.",
      category: "Photography & Media",
      imageId: "8756255f-a527-471f-9f2e-1c0d6b256100",
      credits: [
        { role: "Architectural Photographer", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Luxury Interiors Collection",
      description:
        "High-end interior photography capturing lighting, color, and spatial atmosphere.",
      category: "Photography & Media",
      imageId: "fc52c133-ab96-407c-0376-70ca04a16e00",
      credits: [
        { role: "Interior Photographer", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Commercial Product Display",
      description:
        "Studio photography featuring clean lighting setups and branding composition.",
      category: "Photography & Media",
      imageId: "57e0b503-4258-4bdf-b0c2-7b934e3fc900",
      credits: [
        { role: "Photographer", name: "Market Integrators Team" },
        { role: "Lighting Designer", name: "Studio Crew" },
      ],
    },
  ];

  const getGridSrc = (id: string) => cfImageUrl(id, GRID_VARIANT);
  const getLightboxSrc = (id: string) => cfImageUrl(id, LIGHTBOX_VARIANT);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          Photography & Media Portfolio | Market Integrators Creative Studio
        </title>
        <meta
          name="description"
          content="Explore our photography work including lifestyle, product, food, event, and editorial photography."
        />
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
                Still media and creative captures including lifestyle and
                product photography, event photography, artist portraits, and
                editorial imagery.
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
                <button
                  key={index}
                  type="button"
                  className="overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() =>
                    setSelectedImage(getLightboxSrc(project.imageId))
                  }
                  aria-label={`Open preview for ${project.title}`}
                >
                  <img
                    src={getGridSrc(project.imageId)}
                    alt={project.title}
                    className="w-full h-auto object-contain md:aspect-square md:object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-primary-foreground mb-6">
              Need professional photography?
            </h2>
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
            aria-label="Close preview"
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