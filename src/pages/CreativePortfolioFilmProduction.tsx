import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Film } from "lucide-react";
import { Helmet } from "react-helmet";

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

const CreativePortfolioFilmProduction = () => {
  const filmProductionProjects: CreativeProject[] = [
    {
      title: "Commercial Production",
      description: "Full-scale commercial shoots for various clients including lighting, multi-cam setups, and on-location filming.",
      category: "Film & On-Site Production",
      videoId: "d1028ac45fdc88113137d83b09edb039",
      aspectRatio: "75%",
      credits: [
        { role: "Director", name: "Market Integrators Team" },
        { role: "Cinematographer", name: "Studio Team" },
        { role: "Producer", name: "Production Team" },
      ],
    },
    {
      title: "Event Coverage",
      description: "Professional event documentation including sports events, concerts, and corporate activations.",
      category: "Film & On-Site Production",
      videoId: "0513b4f6894f874c68ccf40801eaae78",
      aspectRatio: "56.25%",
      credits: [
        { role: "Director of Photography", name: "Market Integrators Team" },
        { role: "Camera Operator", name: "Studio Team" },
      ],
    },
    {
      title: "Brand Film Production",
      description: "Cinematic brand storytelling with professional production quality.",
      category: "Film & On-Site Production",
      videoId: "3cf53f433691ac59dd2b4afdca7b249e",
      aspectRatio: "75%",
      credits: [
        { role: "Director", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Studio Production",
      description: "Professional studio shoots with controlled lighting and multi-camera setups.",
      category: "Film & On-Site Production",
      videoId: "dbd847725cb709f96558328d99e693d5",
      aspectRatio: "75%",
      credits: [
        { role: "Director of Photography", name: "Market Integrators Team" },
      ],
    },
    {
      title: "On-Location Filming",
      description: "Dynamic on-location shoots capturing authentic moments and environments.",
      category: "Film & On-Site Production",
      videoId: "6ead83892a5b04a0ed29f6fee1e4561a",
      aspectRatio: "75%",
      credits: [
        { role: "Cinematographer", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Vertical Content Production",
      description: "Mobile-first vertical video content for social media platforms.",
      category: "Film & On-Site Production",
      videoId: "ecddc3e3fcfd5b213c9b116c64c7e580",
      aspectRatio: "177.77777777777777%",
      credits: [
        { role: "Director", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Documentary Style Production",
      description: "Documentary-style filming capturing real stories and authentic moments.",
      category: "Film & On-Site Production",
      videoId: "c83d19a2d04bb161d7c0007a4e2298c2",
      aspectRatio: "75%",
      credits: [
        { role: "Director", name: "Market Integrators Team" },
        { role: "Camera Operator", name: "Studio Team" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Film & On-Site Production Portfolio | Market Integrators Creative Studio</title>
        <meta name="description" content="View our film production work including commercial shoots, event coverage, brand films, and documentary-style productions." />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom text-center max-w-4xl">
            <Badge className="mb-4" variant="outline">
              <Film className="w-4 h-4 mr-2" />
              Film & On-Site Production
            </Badge>
            <h1 className="mb-6">Film & On-Site Production Portfolio</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Full-scale video production work including commercial and brand films, studio and on-location shoots, 
              interviews, and B-roll footage.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <div className="grid md:grid-cols-2 gap-6">
              {filmProductionProjects.map((project, index) => (
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
            <h2 className="text-primary-foreground mb-6">Ready for professional video production?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's create cinematic content that tells your brand's story with impact.
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

export default CreativePortfolioFilmProduction;
