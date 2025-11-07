import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CreativePortfolioPreview = () => {
  const videos = [
    {
      src: "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/c83d19a2d04bb161d7c0007a4e2298c2/iframe?poster=https%3A%2F%2Fcustomer-fupcxqt1psuecjaw.cloudflarestream.com%2Fc83d19a2d04bb161d7c0007a4e2298c2%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
      aspectRatio: "75%", // 4:3
    },
    {
      src: "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/0513b4f6894f874c68ccf40801eaae78/iframe?poster=https%3A%2F%2Fcustomer-fupcxqt1psuecjaw.cloudflarestream.com%2F0513b4f6894f874c68ccf40801eaae78%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
      aspectRatio: "56.25%", // 16:9
    },
    {
      src: "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/d1028ac45fdc88113137d83b09edb039/iframe?poster=https%3A%2F%2Fcustomer-fupcxqt1psuecjaw.cloudflarestream.com%2Fd1028ac45fdc88113137d83b09edb039%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
      aspectRatio: "75%", // 4:3
    },
    {
      src: "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/dbd847725cb709f96558328d99e693d5/iframe?poster=https%3A%2F%2Fcustomer-fupcxqt1psuecjaw.cloudflarestream.com%2Fdbd847725cb709f96558328d99e693d5%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
      aspectRatio: "75%", // 4:3
    },
    {
      src: "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/461e0fe711b173a62ca8d1c887188752/iframe?poster=https%3A%2F%2Fcustomer-fupcxqt1psuecjaw.cloudflarestream.com%2F461e0fe711b173a62ca8d1c887188752%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
      aspectRatio: "56.25%", // 16:9
    },
    {
      src: "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/e2b23a09186c200c738e82e1ef4770c1/iframe?poster=https%3A%2F%2Fcustomer-fupcxqt1psuecjaw.cloudflarestream.com%2Fe2b23a09186c200c738e82e1ef4770c1%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
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
                allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
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
