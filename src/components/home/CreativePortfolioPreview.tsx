import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, type Variants, type Transition } from "framer-motion";
import LazyStreamHLS from "@/components/LazyStreamHLS";
const EASE_OUT: Transition["ease"] = [0.22, 1, 0.36, 1];
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
};
const item = (i: number): Variants => ({
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.98
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: EASE_OUT,
      delay: i * 0.02
    }
  }
});
const CreativePortfolioPreview = () => {
  const videos = [
  // Landscape (16:9) row
  {
    id: "66a00ceac5d17e0c7a84a88fd9290c8c",
    poster: "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/66a00ceac5d17e0c7a84a88fd9290c8c/thumbnails/thumbnail.jpg?time=&height=600",
    title: "Case Study — 16:9",
    ratio: "16:9"
  }, {
    id: "0513b4f6894f874c68ccf40801eaae78",
    poster: "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/0513b4f6894f874c68ccf40801eaae78/thumbnails/thumbnail.jpg?time=&height=600",
    title: "Product Walkthrough — 16:9",
    ratio: "16:9"
  }, {
    id: "d5953abdc3671450f5ba170883c0b8c9",
    poster: "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/d5953abdc3671450f5ba170883c0b8c9/thumbnails/thumbnail.jpg?time=&height=600",
    title: "Results Montage — 16:9",
    ratio: "16:9"
  },
  // Vertical (9:16) row
  {
    id: "ecddc3e3fcfd5b213c9b116c64c7e580",
    poster: "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/ecddc3e3fcfd5b213c9b116c64c7e580/thumbnails/thumbnail.jpg?time=&height=600",
    title: "Client Story — 9:16",
    ratio: "9:16"
  }, {
    id: "9817d83102b37f954e97d2057d8db27e",
    poster: "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/9817d83102b37f954e97d2057d8db27e/thumbnails/thumbnail.jpg?time=&height=600",
    title: "Vertical Promo Reel — 9:16",
    ratio: "9:16"
  }, {
    id: "0187d5f146cf56547633cb0bbe68b6ca",
    poster: "https://customer-fupcxqt1psuecjaw.cloudflarestream.com/0187d5f146cf56547633cb0bbe68b6ca/thumbnails/thumbnail.jpg?time=&height=600",
    title: "Vertical Case Study — 9:16",
    ratio: "9:16"
  }];
  return <section className="section-padding bg-background">
      <div className="container-custom max-w-6xl mx-auto px-4">
        {/* Header */}
        

        {/* Top Row: Landscape */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
        once: true,
        amount: 0.2
      }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 place-items-center">
          {videos.filter(v => v.ratio === "16:9").map((v, i) => <motion.div key={v.id} variants={item(i)} className="w-full">
                <LazyStreamHLS videoId={v.id} title={v.title} poster={v.poster} ratio="16:9" autoPlayMuted={false} controls />
              </motion.div>)}
        </motion.div>

        {/* Bottom Row: Vertical */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
        once: true,
        amount: 0.2
      }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 place-items-center">
          {videos.filter(v => v.ratio === "9:16").map((v, i) => <motion.div key={v.id} variants={item(i)} className="w-full max-w-[420px]">
                <LazyStreamHLS videoId={v.id} title={v.title} poster={v.poster} ratio="9:16" autoPlayMuted={false} controls />
              </motion.div>)}
        </motion.div>

        {/* CTA */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="text-center">
          <Button asChild size="lg" className="btn-text">
            <Link to="/creative-portfolio">View Full Portfolio →</Link>
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default CreativePortfolioPreview;