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
      title: "Social Media Campaign - Houston Radio",
      description: "Complete visual identity system including YouTube thumbnails, Instagram stories, and display ads for multiple Houston radio stations.",
      category: "Graphic & Visual Design",
      credits: [
        { role: "Creative Director", name: "Market Integrators Team" },
        { role: "Graphic Designer", name: "Studio Team" },
      ],
    },
    {
      title: "Brand Identity System",
      description: "Logo design, color palette development, and typography system for multiple client brands.",
      category: "Graphic & Visual Design",
      credits: [
        { role: "Brand Designer", name: "Market Integrators Team" },
        { role: "Art Direction", name: "Studio Team" },
      ],
    },
  ];

  const animatedVideosProjects: CreativeProject[] = [
    {
      title: "Radio Station Logo Stings",
      description: "Animated logo reveals and transitions for Audacy Houston stations including The Bull, Mega 101, and SportsRadio 610.",
      category: "Animated Videos & Motion Graphics",
      videoId: "42199c78495b788ffdaee9a341d01c23",
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
      credits: [
        { role: "Motion Graphics Artist", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Broadcast Graphics Package",
      description: "Complete motion graphics suite for digital broadcast content.",
      category: "Animated Videos & Motion Graphics",
      videoId: "48d7b689a7411cf82770ef69022ddd73",
      credits: [
        { role: "Motion Designer", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Social Media Animations",
      description: "Dynamic animated content optimized for social media platforms.",
      category: "Animated Videos & Motion Graphics",
      videoId: "3e77bd4ada463b6a39c5e7978c377e28",
      credits: [
        { role: "Animation Artist", name: "Market Integrators Team" },
      ],
    },
    {
      title: "Brand Story Animations",
      description: "Narrative-driven motion graphics for brand storytelling.",
      category: "Animated Videos & Motion Graphics",
      videoId: "c0e27ea609903709c29feb83e931503e",
      credits: [
        { role: "Creative Director", name: "Market Integrators Team" },
        { role: "Motion Designer", name: "Studio Team" },
      ],
    },
    {
      title: "Event Graphics & Transitions",
      description: "Dynamic motion graphics for live events and streaming content.",
      category: "Animated Videos & Motion Graphics",
      videoId: "15e013844bdd96b947a347b11851bdca",
      credits: [
        { role: "Motion Graphics Artist", name: "Market Integrators Team" },
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
      credits: [
        { role: "Director of Photography", name: "Market Integrators Team" },
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
                  <div className="grid md:grid-cols-2 gap-6">
                    {graphicDesignProjects.map((project, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold mb-2">Credits:</h4>
                            <div className="space-y-1">
                              {project.credits.map((credit, idx) => (
                                <p key={idx} className="text-sm text-muted-foreground">
                                  <span className="font-medium">{credit.role}:</span> {credit.name}
                                </p>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
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
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        {project.videoId && (
                          <div className="aspect-video w-full">
                            <iframe
                              src={`https://customer-m033z5x00fn3md4b.cloudflarestream.com/${project.videoId}/iframe?autoplay=true&loop=true&muted=true`}
                              className="w-full h-full rounded-t-lg"
                              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                              allowFullScreen
                            />
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold mb-2">Credits:</h4>
                            <div className="space-y-1">
                              {project.credits.map((credit, idx) => (
                                <p key={idx} className="text-sm text-muted-foreground">
                                  <span className="font-medium">{credit.role}:</span> {credit.name}
                                </p>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
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
                  <div className="grid md:grid-cols-2 gap-6">
                    {editedVideoProjects.map((project, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold mb-2">Credits:</h4>
                            <div className="space-y-1">
                              {project.credits.map((credit, idx) => (
                                <p key={idx} className="text-sm text-muted-foreground">
                                  <span className="font-medium">{credit.role}:</span> {credit.name}
                                </p>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
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
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold mb-2">Credits:</h4>
                            <div className="space-y-1">
                              {project.credits.map((credit, idx) => (
                                <p key={idx} className="text-sm text-muted-foreground">
                                  <span className="font-medium">{credit.role}:</span> {credit.name}
                                </p>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
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
                  <div className="grid md:grid-cols-2 gap-6">
                    {photographyProjects.map((project, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold mb-2">Credits:</h4>
                            <div className="space-y-1">
                              {project.credits.map((credit, idx) => (
                                <p key={idx} className="text-sm text-muted-foreground">
                                  <span className="font-medium">{credit.role}:</span> {credit.name}
                                </p>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
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
