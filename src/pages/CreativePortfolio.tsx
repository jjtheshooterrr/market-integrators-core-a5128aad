import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Video, Film, Camera, Sparkles } from "lucide-react";

interface CreativeProject {
  title: string;
  description: string;
  category: string;
  image?: string;
  videoId?: string;
  aspectRatio?: string;
  credits: {
    role: string;
    name: string;
  }[];
}

const CreativePortfolio = () => {
  const [selectedProject, setSelectedProject] = useState<CreativeProject | null>(null);

  // Sample projects data - can be expanded with real projects
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

  const animatedVideosProjects: CreativeProject[] = [
    {
      title: "Radio Station Logo Stings",
      description: "Animated logo reveals and transitions for Audacy Houston stations including The Bull, Mega 101, and SportsRadio 610.",
      category: "Animated Videos & Motion Graphics",
      videoId: "42199c78495b788ffdaee9a341d01c23",
      aspectRatio: "75%",
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
      aspectRatio: "56.25%",
      credits: [
        { role: "Motion Graphics Artist", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Event Graphics & Transitions",
      description: "Dynamic motion graphics for live events and streaming content.",
      category: "Animated Videos & Motion Graphics",
      videoId: "15e013844bdd96b947a347b11851bdca",
      aspectRatio: "56.25%",
      credits: [
        { role: "Motion Graphics Artist", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Social Media Animations",
      description: "Dynamic animated content optimized for social media platforms.",
      category: "Animated Videos & Motion Graphics",
      videoId: "3e77bd4ada463b6a39c5e7978c377e28",
      aspectRatio: "56.25%",
      credits: [
        { role: "Animation Artist", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Brand Story Animations",
      description: "Narrative-driven motion graphics for brand storytelling.",
      category: "Animated Videos & Motion Graphics",
      videoId: "c0e27ea609903709c29feb83e931503e",
      aspectRatio: "75%",
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
      aspectRatio: "56.25%",
      credits: [
        { role: "Motion Designer", name: "Market Integrators Team" },
      ],
    },
  ];

  const editedVideoProjects: CreativeProject[] = [
    {
      title: "Sports Highlight Reels",
      description: "Fast-paced sports content for SportsRadio 610, generating 1.43M+ YouTube views.",
      category: "Edited Video & Short-Form Content",
      credits: [
        { role: "Video Editor", name: "Market Integrators Team" },
        { role: "Content Strategy", name: "Studio Team" },
      ],
    },
    {
      title: "Social Media Shorts",
      description: "Viral short-form content for Instagram Reels, TikTok, and YouTube Shorts across multiple brands.",
      category: "Edited Video & Short-Form Content",
      credits: [
        { role: "Editor", name: "Market Integrators Team" },
        { role: "Social Media Strategy", name: "Studio Team" },
      ],
    },
  ];

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

  const photographyProjects: CreativeProject[] = [
    {
      title: "Product Photography",
      description: "High-quality product shots for eCommerce and marketing materials.",
      category: "Photography & Media",
      credits: [
        { role: "Photographer", name: "Market Integrators Team" },
        { role: "Photo Editor", name: "Studio Team" },
      ],
    },
    {
      title: "Event & Portrait Photography",
      description: "Professional lifestyle, portrait, and event photography for various clients and activations.",
      category: "Photography & Media",
      credits: [
        { role: "Lead Photographer", name: "Market Integrators Team" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary to-background">
          <div className="container-custom text-center max-w-4xl">
            <Badge className="mb-4" variant="outline">
              Creative Media Studio
            </Badge>
            <h1 className="mb-6">Creative Portfolio</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our creative work across design, video production, animation, and photography. 
              Every project showcases our commitment to quality storytelling and visual excellence.
            </p>
          </div>
        </section>

        {/* Portfolio Tabs */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <Tabs defaultValue="graphic-design" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 h-auto">
                <TabsTrigger value="graphic-design" className="flex flex-col items-center gap-2 py-4">
                  <Palette className="w-5 h-5" />
                  <span className="text-xs md:text-sm">Graphic Design</span>
                </TabsTrigger>
                <TabsTrigger value="animated-videos" className="flex flex-col items-center gap-2 py-4">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-xs md:text-sm">Motion Graphics</span>
                </TabsTrigger>
                <TabsTrigger value="edited-video" className="flex flex-col items-center gap-2 py-4">
                  <Video className="w-5 h-5" />
                  <span className="text-xs md:text-sm">Video Editing</span>
                </TabsTrigger>
                <TabsTrigger value="film-production" className="flex flex-col items-center gap-2 py-4">
                  <Film className="w-5 h-5" />
                  <span className="text-xs md:text-sm">Film Production</span>
                </TabsTrigger>
                <TabsTrigger value="photography" className="flex flex-col items-center gap-2 py-4">
                  <Camera className="w-5 h-5" />
                  <span className="text-xs md:text-sm">Photography</span>
                </TabsTrigger>
              </TabsList>

              {/* Graphic & Visual Design */}
              <TabsContent value="graphic-design">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="mb-4">Graphic & Visual Design</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Static creative assets, design systems, and visual branding work including YouTube thumbnails, 
                      social post designs, digital ads, brand identity, and website mockups.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {graphicDesignProjects.map((project, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg group cursor-pointer">
                        {project.image && (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Animated Videos & Motion Graphics */}
              <TabsContent value="animated-videos">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="mb-4">Animated Videos & Motion Graphics</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Dynamic content designed for storytelling and brand identity including logo stings, 
                      lower thirds, animated explainers, and motion graphic ad spots.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {animatedVideosProjects.map((project, index) => (
                      <div key={index} className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: project.aspectRatio || "56.25%" }}>
                        {project.videoId && (
                          <iframe
                            src={`https://customer-fupcxqt1psuecjaw.cloudflarestream.com/${project.videoId}/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-fupcxqt1psuecjaw.cloudflarestream.com%2F${project.videoId}%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600`}
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
              </TabsContent>

              {/* Edited Video & Short-Form Content */}
              <TabsContent value="edited-video">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="mb-4">Edited Video & Short-Form Content</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Video editing and social-first storytelling including Reels, TikToks, YouTube Shorts, 
                      multi-cam edits, highlight reels, and promotional content.
                    </p>
                  </div>
                  <div className="text-center text-muted-foreground py-12">
                    <p>Edited video showcase coming soon</p>
                  </div>
                </div>
              </TabsContent>

              {/* Film & On-Site Production */}
              <TabsContent value="film-production">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="mb-4">Film & On-Site Production</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Full-scale video production work including commercial and brand films, studio and on-location shoots, 
                      interviews, and B-roll footage.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {filmProductionProjects.map((project, index) => (
                      <div key={index} className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: project.aspectRatio || "56.25%" }}>
                        {project.videoId && (
                          <iframe
                            src={`https://customer-fupcxqt1psuecjaw.cloudflarestream.com/${project.videoId}/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-fupcxqt1psuecjaw.cloudflarestream.com%2F${project.videoId}%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600`}
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
              </TabsContent>

              {/* Photography & Media */}
              <TabsContent value="photography">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="mb-4">Photography & Media</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Still media and creative captures including lifestyle and product photography, 
                      event photography, artist portraits, and editorial imagery.
                    </p>
                  </div>
                  <div className="text-center text-muted-foreground py-12">
                    <p>Photography showcase coming soon</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
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
