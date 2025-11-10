import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

function canPlayHLSNatively() {
  if (typeof document === "undefined") return false;
  const v = document.createElement("video");
  return (
    v.canPlayType("application/vnd.apple.mpegURL") === "probably" ||
    v.canPlayType("application/vnd.apple.mpegURL") === "maybe"
  );
}

type Props = {
  videoId: string;
  title: string;
  poster: string;
  aspectRatio?: string;     // '56.25%' (16:9) or '177.78%' (9:16)
  rootMargin?: string;
  clickOnly?: boolean;
  autoPlayMuted?: boolean;
  controls?: boolean;
};

export default function LazyStreamHLS({
  videoId,
  title,
  poster,
  aspectRatio = "56.25%",
  rootMargin = "200px",
  clickOnly = false,
  autoPlayMuted = true,
  controls = true,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showVideo, setShowVideo] = useState(false); // mounted video element
  const [ready, setReady] = useState(false);         // manifest buffered & video ready
  const reduce = useReducedMotion();

  const hlsSrc = `https://customer-fupcxqt1psuecjaw.cloudflarestream.com/${videoId}/manifest/video.m3u8`;

  // Lazy show when in view (unless clickOnly)
  useEffect(() => {
    if (clickOnly || showVideo) return;
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowVideo(true);
        io.disconnect();
      }
    }, { rootMargin });

    io.observe(el);
    return () => io.disconnect();
  }, [clickOnly, showVideo, rootMargin]);

  // Attach hls.js (or use native HLS)
  useEffect(() => {
    if (!showVideo || !videoRef.current) return;

    const video = videoRef.current!;
    let hls: any | null = null;
    let cancelled = false;

    async function setup() {
      try {
        if (canPlayHLSNatively()) {
          video.src = hlsSrc;
          const onReady = () => !cancelled && setReady(true);
          video.addEventListener("loadedmetadata", onReady, { once: true });
        } else {
          const mod = await import("hls.js"); // lazy-load
          const Hls = mod.default;
          if (Hls.isSupported()) {
            hls = new Hls({ enableWorker: true, lowLatencyMode: true });
            hls.loadSource(hlsSrc);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => !cancelled && setReady(true));
          } else {
            video.src = hlsSrc;
            video.addEventListener("loadedmetadata", () => !cancelled && setReady(true), { once: true });
          }
        }
      } catch {
        video.src = hlsSrc;
        video.addEventListener("loadedmetadata", () => !cancelled && setReady(true), { once: true });
      }
    }

    setup();

    return () => {
      cancelled = true;
      if (hls) {
        try { hls.destroy(); } catch {}
      }
    };
  }, [showVideo, hlsSrc]);

  // Optional autoplay when ready
  useEffect(() => {
    if (!ready || !autoPlayMuted || !videoRef.current) return;
    const v = videoRef.current;
    v.muted = true;
    v.playsInline = true;
    v.play().catch(() => {});
  }, [ready, autoPlayMuted]);

  return (
    <div
      ref={containerRef}
      className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      style={{ paddingTop: aspectRatio }}
    >
      {/* Poster layer (visible until showVideo) */}
      <AnimatePresence initial={false}>
        {!showVideo && (
          <motion.button
            key="poster"
            type="button"
            onClick={() => setShowVideo(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 grid place-items-center"
            style={{
              backgroundImage: `url(${poster})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: reduce ? 1 : 1.01 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span className="inline-flex items-center justify-center rounded-full p-4 bg-black/60 text-white transition group-hover:bg-black/70">
              ▶
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Video layer (mounts when showVideo; fades in when ready) */}
      {showVideo && (
        <motion.video
          key="video"
          ref={videoRef}
          className="absolute inset-0 w-full h-full"
          poster={poster}
          preload="metadata"
          controls={controls}
          playsInline
          crossOrigin="anonymous"
          aria-label={title}
          initial={{ opacity: 0, filter: reduce ? "none" : "blur(4px)" }}
          animate={{ opacity: ready ? 1 : 0, filter: ready || reduce ? "none" : "blur(4px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      )}
    </div>
  );
}
