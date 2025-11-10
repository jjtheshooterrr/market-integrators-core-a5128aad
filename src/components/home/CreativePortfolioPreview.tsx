import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CreativePortfolioPreview = () => {
  const videos = [
    {
      src: "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/ecddc3e3fcfd5b213c9b116c64c7e580/iframe?poster=https%3A%2F%2Fcustomer-fupcxqt1psuecjaw.cloudflarestream.com%2Fecddc3e3fcfd5b213c9b116c64c7e580%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
      aspectRatio: "177.78%", // 9:16 vertical
    },
    {
      src: "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/66a00ceac5d17e0c7a84a88fd9290c8c/iframe?poster=https%3A%2F%2Fcustomer-fupcxqt1psuecjaw.cloudflarestream.com%2F66a00ceac5d17e0c7a84a88fd9290c8c%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
      aspectRatio: "56.25%", // 16:9
    },
    {
      src: "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/9817d83102b37f954e97d2057d8db27e/iframe?poster=https%3A%2F%2Fcustomer-fupcxqt1psuecjaw.cloudflarestream.com%2F9817d83102b37f954e97d2057d8db27e%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
      aspectRatio: "177.78%", // 9:16 vertical
    },
    {
      src: "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/0513b4f6894f874c68ccf40801eaae78/iframe?poster=https%3A%2F%2Fcustomer-fupcxqt1psuecjaw.cloudflarestream.com%2F0513b4f6894f874c68ccf40801eaae78%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
      aspectRatio: "56.25%", // 16:9
    },
    // New video 1
    {
      src: "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/d5953abdc3671450f5ba170883c0b8c9/iframe?poster=https%3A%2F%2Fcustomer-fupcxqt1psuecjaw.cloudflarestream.com%2Fd5953abdc3671450f5ba170883c0b8c9%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
      aspectRatio: "56.25%", // 16:9
    },
    // New video 2
    {
      src: "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/0187d5f146cf56547633cb0bbe68b6ca/iframe?poster=https%3A%2F%2Fcustomer-fupcxqt1psuecjaw.cloudflarestream.com%2F0187d5f146cf56547633cb0bbe68b6ca%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
      aspectRatio: "177.78%", // 9:16 vertical
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
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{ paddingTop: video.aspectRatio }}
            >
              <iframe
                src={video.src}
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
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
