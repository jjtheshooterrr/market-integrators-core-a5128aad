import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LazyStream from "@/components/LazyStream";

const CreativePortfolioPreview = () => {
  // Using videoId + poster + explicit aspect ratio (56.25% = 16:9, 177.78% = 9:16)
  const videos = [
    {
      videoId: "ecddc3e3fcfd5b213c9b116c64c7e580",
      title: "Client Story: Market Integrators — Vertical Reel",
      poster:
        "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/ecddc3e3fcfd5b213c9b116c64c7e580/thumbnails/thumbnail.jpg?time=&height=600",
      aspectRatio: "177.78%", // 9:16
    },
    {
      videoId: "66a00ceac5d17e0c7a84a88fd9290c8c",
      title: "Case Study: Space Grotesk Campaign",
      poster:
        "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/66a00ceac5d17e0c7a84a88fd9290c8c/thumbnails/thumbnail.jpg?time=&height=600",
      aspectRatio: "56.25%", // 16:9
    },
    {
      videoId: "9817d83102b37f954e97d2057d8db27e",
      title: "Vertical Promo Reel",
      poster:
        "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/9817d83102b37f954e97d2057d8db27e/thumbnails/thumbnail.jpg?time=&height=600",
      aspectRatio: "177.78%", // 9:16
    },
    {
      videoId: "0513b4f6894f874c68ccf40801eaae78",
      title: "Product Walkthrough 16:9",
      poster:
        "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/0513b4f6894f874c68ccf40801eaae78/thumbnails/thumbnail.jpg?time=&height=600",
      aspectRatio: "56.25%", // 16:9
    },
    {
      videoId: "d5953abdc3671450f5ba170883c0b8c9",
      title: "Results Montage 16:9",
      poster:
        "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/d5953abdc3671450f5ba170883c0b8c9/thumbnails/thumbnail.jpg?time=&height=600",
      aspectRatio: "56.25%", // 16:9
    },
    {
      videoId: "0187d5f146cf56547633cb0bbe68b6ca",
      title: "Vertical Case Study Reel",
      poster:
        "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/0187d5f146cf56547633cb0bbe68b6ca/thumbnails/thumbnail.jpg?time=&height=600",
      aspectRatio: "177.78%", // 9:16
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Creative Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our creative work across video production, animation, and visual storytelling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {videos.map((v, index) => (
            <motion.div
              key={v.videoId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <LazyStream
                videoId={v.videoId}
                title={v.title}
                poster={v.poster}
                aspectRatio={v.aspectRatio}
                // clickOnly // uncomment to require user tap (no viewport auto-load)
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button asChild size="lg" className="btn-text">
            <Link to="/creative-portfolio">View Full Portfolio →</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativePortfolioPreview;
