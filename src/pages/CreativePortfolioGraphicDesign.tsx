import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Palette, X } from "lucide-react";
import { Helmet } from "react-helmet";
import { PortfolioTabs } from "@/components/portfolio/PortfolioTabs";

const ACCOUNT_HASH = "GaQ2AWTI-tcX975k7hp2yA"; // ✅ Cloudflare Images delivery token
const GRID_VARIANT = "public";
const LIGHTBOX_VARIANT = "public";

function cfImageUrl(imageId: string, variant: string) {
  return `https://imagedelivery.net/${ACCOUNT_HASH}/${imageId}/${variant}`;
}

interface CreativeCredit {
  role: string;
  name: string;
}

interface CreativeProject {
  title: string;
  description: string;
  category: string;
  imageId: string;
  credits: CreativeCredit[];
}

const CreativePortfolioGraphicDesign = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // --- Existing entries you already had ---
  const baseProjects: CreativeProject[] = [
    {
      title: "Digital Art Design",
      description: "Contemporary digital art showcasing modern design techniques.",
      category: "Graphic & Visual Design",
      imageId: "6862417d-5b2d-4af9-c164-f68c94905a00",
      credits: [{ role: "Digital Artist", name: "Market Integrators Team" }],
    },
    {
      title: "Gaming Illustration",
      description: "Custom gaming character illustration and concept art.",
      category: "Graphic & Visual Design",
      imageId: "e29032b9-4453-4284-6902-8492796e7200",
      credits: [{ role: "Illustrator", name: "Market Integrators Team" }],
    },
    {
      title: "Creative Gaming Poster",
      description: "Dynamic gaming poster design with bold typography and vibrant colors.",
      category: "Graphic & Visual Design",
      imageId: "0f513cd0-8083-48cb-99fb-d96fa67bd600",
      credits: [{ role: "Graphic Designer", name: "Market Integrators Team" }],
    },
    {
      title: "Experimental Graphic Design",
      description: "Cutting-edge experimental design pushing creative boundaries.",
      category: "Graphic & Visual Design",
      imageId: "7839db12-959d-43bb-2d9f-8542e8e2fa00",
      credits: [{ role: "Art Director", name: "Market Integrators Team" }],
    },
    {
      title: "Gaming Promo Poster",
      description: "Eye-catching promotional poster for gaming campaigns.",
      category: "Graphic & Visual Design",
      imageId: "5a9bd77b-311c-4b2b-d9c8-d918b26aa700",
      credits: [{ role: "Graphic Designer", name: "Market Integrators Team" }],
    },
    {
      title: "Esports Event Poster",
      description: "High-energy promotional design for competitive gaming events.",
      category: "Graphic & Visual Design",
      imageId: "cce7d09a-158c-478a-939d-f0db92db7e00",
      credits: [{ role: "Creative Director", name: "Market Integrators Team" }],
    },
    {
      title: "Fine Art Portrait Design",
      description: "Artistic portrait design with sophisticated visual elements.",
      category: "Graphic & Visual Design",
      imageId: "4007fd00-51b7-4798-7b4e-4584f2020b00",
      credits: [{ role: "Graphic Designer", name: "Market Integrators Team" }],
    },
    {
      title: "Gaming YouTube Thumbnail",
      description: "High-impact YouTube thumbnail designed for maximum click-through.",
      category: "Graphic & Visual Design",
      imageId: "6732124f-bccc-4d60-a474-38dc9ddfd000",
      credits: [{ role: "Thumbnail Designer", name: "Market Integrators Team" }],
    },
    {
      title: "Gaming Thumbnail Design",
      description: "Engaging thumbnail design optimized for gaming content.",
      category: "Graphic & Visual Design",
      imageId: "2cdc4055-3e02-4376-f78b-eacfb1646a00",
      credits: [{ role: "Thumbnail Designer", name: "Market Integrators Team" }],
    },
    {
      title: "Music Cover Art",
      description: "Professional album cover art and music branding design.",
      category: "Graphic & Visual Design",
      imageId: "0b85f9a4-87d5-47f2-181a-e220ea89a000",
      credits: [{ role: "Cover Art Designer", name: "Market Integrators Team" }],
    },
    {
      title: "Brand Identity Mockup",
      description: "High-end visual branding mockup with minimalist layout.",
      category: "Graphic & Visual Design",
      imageId: "c67cdfcf-61e3-4afa-c672-d4a723b6da00",
      credits: [{ role: "Brand Designer", name: "Market Integrators Team" }],
    },
    {
      title: "Corporate Design Layout",
      description: "Clean and professional corporate design system layout.",
      category: "Graphic & Visual Design",
      imageId: "627468fd-d187-4d9e-76ee-bb3a17876a00",
      credits: [{ role: "Graphic Designer", name: "Market Integrators Team" }],
    },
    {
      title: "Fashion Design Concept",
      description: "Creative fashion-inspired composition blending art and photography.",
      category: "Graphic & Visual Design",
      imageId: "7b8849d8-dedc-4dc1-35ef-f3c29c0e2600",
      credits: [{ role: "Visual Artist", name: "Market Integrators Team" }],
    },
  ];

  // --- Cleaned extra image IDs (all duplicates removed) ---
  const extraImageIds: string[] = [
    "49a13ac3-1725-4561-4400-526b31bb4700",
    "c47fff04-07d8-48ca-48c2-f18ac135f500",
    "7a696e77-0ed5-444c-03ad-32e5f6fed800",
    "7e61357f-4417-4bf8-ef84-f32362e0f900",
    "b9a38ea2-dcd0-479a-3541-fe18897abd00",
    "dc41e99d-13d0-4593-7088-72394b76cc00",
    "cd93e63b-a89f-4bcd-7baa-d524413dc400",
    "9b0ae2db-c1cf-4e62-710a-82976c468600",
    "58f21bea-81f6-423c-bf9d-d7bbcb6d7a00",
    "5e3b975f-4b4b-4901-b0ee-a8d064dfc400",
    "a22a366e-6504-43ad-87cd-6a1bd3964d00",
    "6844126a-0b7a-438d-89da-cbba06304400",
    "88f65b46-6ee5-43de-9011-9e1844ff2200",
    "d2184918-d45a-4fa6-c045-be48aa0d2c00",
    "219ca2dd-4397-45bc-bdb3-953d321c3b00",
    "bfad765c-610a-4eea-0b63-f0c3be4cbc00",
    "8e1aafad-c31a-42e8-b070-31d8682d4f00",
    "c9c94b1b-8bde-4450-3e9e-64bb0fe0df00",
    "6ff9c632-fd25-4cbf-3b23-ddc8b5a57f00",
    "7af9dd78-0ba0-49bd-645a-171dcaea8500",
    "52afd605-f3ff-47ea-251e-e8802fa6d800",
    "f2e1bf19-1fe0-4196-5c50-cebef8da0000",
    "aac1e039-a3b7-44bc-c3e6-ba0ee5626000",
  ];

  const baseIds = new Set(baseProjects.map((p) => p.imageId));
  const uniqueExtraIds = Array.from(new Set(extraImageIds.filter((id) => !baseIds.has(id))));

  const extraProjects: CreativeProject[] = uniqueExtraIds.map((id, i) => ({
    title: `Portfolio Image ${i + 1}`,
    description: "Additional work sample.",
    category: "Graphic & Visual Design",
    imageId: id,
    credits: [{ role: "Design", name: "Market Integrators Team" }],
  }));

  const graphicDesignProjects: CreativeProject[] = [...baseProjects, ...extraProjects];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Graphic & Visual Design Portfolio | Market Integrators Creative Studio</title>
        <meta
          name="description"
          content="Explore our graphic and visual design work including YouTube thumbnails, social media designs, digital ads, and brand identity projects."
        />
      </Helmet>

      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom max-w-6xl text-center">
            <Badge className="mb-4" variant="outline">
              <Palette className="w-4 h-4 mr-2" />
              Graphic & Visual Design
            </Badge>
            <h1 className="mb-6">Graphic & Visual Design Portfolio</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Static creative assets, design systems, and visual branding work including YouTube thumbnails, social post
              designs, digital ads, brand identity, and website mockups.
            </p>
            <PortfolioTabs />
          </div>
        </section>

        {/* Grid Section */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <div className="grid md:grid-cols-3 gap-6">
              {graphicDesignProjects.map((project, index) => (
                <div
                  key={`${project.imageId}-${index}`}
                  className="relative overflow-hidden rounded-lg group cursor-pointer"
                  onClick={() => setSelectedImage(cfImageUrl(project.imageId, LIGHTBOX_VARIANT))}
                >
                  <img
                    src={cfImageUrl(project.imageId, GRID_VARIANT)}
                    alt={project.title}
                    className="w-full h-auto object-contain md:aspect-square md:object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
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

      {/* Lightbox Dialog */}
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
