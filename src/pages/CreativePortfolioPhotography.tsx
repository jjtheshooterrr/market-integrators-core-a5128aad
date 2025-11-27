import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Camera, X } from "lucide-react";
import { Helmet } from "react-helmet";
import { PortfolioTabs } from "@/components/portfolio/PortfolioTabs";

// Cloudflare Images Config
const ACCOUNT_HASH = "GaQ2AWTI-tcX975k7hp2yA";
const GRID_VARIANT = "public?width=900&height=900&fit=cover";
const LIGHTBOX_VARIANT = "public?fit=contain";

function cfImageUrl(imageId: string, variant: string) {
  return `https://imagedelivery.net/${ACCOUNT_HASH}/${imageId}/${variant}`;
}

const CreativePortfolioPhotography = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Cloudflare image IDs (randomized order, but fixed in code)
  const imageIds = [
    "5dfe931f-5d5f-4c59-67c8-4f46d7abe700",
    "8756255f-a527-471f-9f2e-1c0d6b256100",
    "fc52c133-ab96-407c-0376-70ca04a16e00",
    "06d20e7f-19bb-4493-8e5b-ed3973f14000",
    "57e0b503-4258-4bdf-b0c2-7b934e3fc900",
    "8923e028-79ce-49a7-3945-bc95fa96ed00",
    "ec8584f5-43d9-46b6-ba1f-235838743600",
    "f43f1da7-effc-4d4a-b2e7-facbffce1200",
    "e618e930-cd41-485c-2c61-620b891a1700",
    "4dd26272-0372-4fad-1af4-34a764641800",
  ];

  const getGridSrc = (id: string) => cfImageUrl(id, GRID_VARIANT);
  const getLightboxSrc = (id: string) => cfImageUrl(id, LIGHTBOX_VARIANT);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Photography & Media | Market Integrators Creative Studio</title>
        <meta
          name="description"
          content="Photography & Media portfolio by Market Integrators — showcasing visual storytelling and brand imagery."
        />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom max-w-6xl text-center">
            <Badge className="mb-4" variant="outline">
              <Camera className="w-4 h-4 mr-2" />
              Photography & Media
            </Badge>
            <h1 className="mb-6">Photography & Media</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              A collection of creative photography — capturing emotion, light, and story through each frame.
            </p>

            <PortfolioTabs />
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {imageIds.map((id, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg cursor-pointer group relative"
                  onClick={() => setSelectedImage(getLightboxSrc(id))}
                  aria-label="Open image preview"
                >
                  <img
                    src={getGridSrc(id)}
                    alt={`Portfolio image ${index + 1}`}
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

      {/* Lightbox Dialog */}
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
                alt="Professional lifestyle photography portfolio showcase"
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
