import React, { useEffect, useState } from 'react';

type Props = {
  videoId: string;           // Cloudflare Stream video ID
  title: string;             // iframe title for a11y
  poster: string;            // poster image URL
  aspectRatio?: string;      // e.g. '56.25%' (16:9) or '177.78%' (9:16)
  rootMargin?: string;       // when to start loading
  clickOnly?: boolean;       // if true, do not auto-load on viewport
};

export default function LazyStream({
  videoId,
  title,
  poster,
  aspectRatio = '56.25%',
  rootMargin = '200px',
  clickOnly = false,
}: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (clickOnly || show) return;
    const el = document.getElementById(`stream-${videoId}`);
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShow(true);
        io.disconnect();
      }
    }, { rootMargin });

    io.observe(el);
    return () => io.disconnect();
  }, [videoId, rootMargin, clickOnly, show]);

  return (
    <div
      id={`stream-${videoId}`}
      className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      style={{ paddingTop: aspectRatio }} // preserves layout, avoids CLS
    >
      {show ? (
        <iframe
          src={`https://customer-fupcxqt1psuecjaw.cloudflarestream.com/${videoId}/iframe`}
          title={title}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setShow(true)}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setShow(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 grid place-items-center"
          style={{
            backgroundImage: `url(${poster})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <span className="inline-flex items-center justify-center rounded-full p-4 bg-black/60 text-white transition group-hover:bg-black/70">
            ▶
          </span>
        </button>
      )}
      <noscript>
        <a href={`https://customer-fupcxqt1psuecjaw.cloudflarestream.com/${videoId}/watch`}>
          Watch: {title}
        </a>
      </noscript>
    </div>
  );
}
