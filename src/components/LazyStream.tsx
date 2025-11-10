import React, { useEffect, useRef, useState } from "react";

// Helper to detect native HLS support (Safari/iOS)
function canPlayHLSNatively() {
  if (typeof document === "undefined") return false;
  const v = document.createElement("video");
  return v.canPlayType("application/vnd.apple.mpegURL") === "probably"
      || v.canPlayType("application/vnd.apple.mpegURL") === "maybe";
}

type Props = {
  videoId: string;            // Cloudflare Stream video UID
  title: string;              // a11y title
  poster: string;             // poster image URL
  aspectRatio?: string;       // '56.25%' (16:9) or '177.78%' (9:16)
  rootMargin?: string;        // when to start attaching the player
  clickOnly?: boolean;        // require user click to load
  autoPlayMuted?: boolean;    // auto play muted once visible/clicked
  controls?: boolean;         // show default controls
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
  const [ready, setReady] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // HLS manifest URL for Cloudflare Stream "customer" subdomain
  // If your account uses videodelivery.net, swap to:
  // `https://videodelivery.net/${videoId}/manifest/video.m3u8`
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

  // Attach hls.js (or native HLS) once visible
  useEffect(() => {
    if (!showVideo || !videoRef.current) return;

    const video = videoRef.current!;
    let hls: any | null = null;
    let cancelled = false;

    async function setup() {
      try {
        if (canPlayHLSNatively()) {
          video.src = hlsSrc;
          video.addEventListener("loadedmetadata", () => !cancelled && setReady(true), { once: true });
        } else {
          const mod = await import("hls.js"); // lazy load ~60KB
          const Hls = mod.default;
          if (Hls.isSupported()) {
            hls = new Hls({ enableWorker: true, lowLatencyMode: true });
            hls.loadSource(hlsSrc);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => !cancelled && setReady(true));
          } else {
            // Fallback: try native anyway
            video.src = hlsSrc;
            video.addEventListener("loadedmetadata", () => !cancelled && setReady(true), { once: true });
          }
        }
      } catch (e) {
        // If anything fails, still try a native src fallback
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
    v.play().catch(() => {
      // Autoplay might be blocked; user can tap play.
    });
  }, [ready, autoPlayMuted]);

  const onClickPoster = () => {
    setShowVideo(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      style={{ paddingTop: aspectRatio }}
    >
      {showVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full"
          poster={poster}
          preload="metadata"
          controls={controls}
          playsInline
          // crossOrigin helps with MSE on some setups
          crossOrigin="anonymous"
          aria-label={title}
        />
      ) : (
        <button
          type="button"
          onClick={onClickPoster}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 grid place-items-center"
          style={{
            backgroundImage: `url(${poster})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="inline-flex items-center justify-center rounded-full p-4 bg-black/60 text-white transition group-hover:bg-black/70">
            ▶
          </span>
        </button>
      )}
      <noscript>
        <a href={hlsSrc}>Watch: {title}</a>
      </noscript>
    </div>
  );
}
