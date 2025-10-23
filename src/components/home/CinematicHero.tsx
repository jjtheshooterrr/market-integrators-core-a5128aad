import { useEffect, useMemo, useRef, useState } from "react";
import * as flubber from "flubber";

type Props = {
  src: string;
  height?: number;
  color?: string;
  durationMs?: number;
  loop?: boolean;
  reducedMotion?: boolean;
};

const P1 =
  "M60,10 C78,12 90,26 94,44 C98,63 92,84 78,94 C64,104 42,104 28,95 C13,86 6,67 8,49 C10,32 22,17 38,12 C46,10 52,9 60,10 Z";
const P2 =
  "M61,10 C76,12 89,22 96,36 C103,51 104,71 92,84 C80,97 56,102 39,97 C22,92 11,78 8,61 C5,44 9,26 22,17 C35,9 46,8 61,10 Z";
const P3 =
  "M60,12 C75,14 88,23 97,38 C106,53 105,72 94,85 C83,98 62,105 44,101 C25,96 12,82 9,63 C6,44 13,26 28,17 C42,9 48,10 60,12 Z";
const PATHS = [P1, P2, P3];

export default function LogoMorph({
  src,
  height = 160,
  color = "hsl(0 90% 53%)",
  durationMs = 2200,
  loop = true,
  reducedMotion = false,
}: Props) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [ready, setReady] = useState(false);
  const [t, setT] = useState(0);
  const raf = useRef<number | null>(null);

  const segs = useMemo(() => {
    const out: ((u: number) => string)[] = [];
    for (let i = 0; i < PATHS.length - 1; i++) {
      out.push(flubber.interpolate(PATHS[i], PATHS[i + 1], { maxSegmentLength: 2 }));
    }
    return out;
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setReady(true);
      setT(1);
      return;
    }
    if (!imgLoaded) return;
    setReady(true);

    const start = performance.now();
    const fwd = (now: number) => {
      let p = Math.min(1, (now - start) / durationMs);
      // easeOutExpo
      p = 1 - Math.pow(2, -10 * p);
      setT(p);
      if (p < 1) raf.current = requestAnimationFrame(fwd);
      else if (loop) {
        const backStart = performance.now();
        const back = (ts: number) => {
          let q = Math.min(1, (ts - backStart) / durationMs);
          // easeInExpo
          q = Math.pow(2, 10 * (q - 1));
          setT(1 - q);
          if (q < 1) raf.current = requestAnimationFrame(back);
          else raf.current = requestAnimationFrame(fwd);
        };
        raf.current = requestAnimationFrame(back);
      }
    };

    raf.current = requestAnimationFrame(fwd);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [imgLoaded, durationMs, loop, reducedMotion]);

  const d = useMemo(() => {
    if (!segs.length) return PATHS[0];
    const segLen = 1 / segs.length;
    const i = Math.min(segs.length - 1, Math.floor(t / segLen));
    const local = (t - i * segLen) / segLen;
    return segs[i](local);
  }, [t, segs]);

  return (
    <div
      className="relative mx-auto"
      style={{
        height,
        aspectRatio: "3/2",
        // Hide until image + clip are ready to avoid the square flash
        opacity: ready ? 1 : 0,
        transition: "opacity 200ms ease",
      }}
    >
      {/* subtle glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(60% 60% at 50% 50%, hsla(0,90%,53%,0.25) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <svg
        viewBox="0 0 100 66.6667"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <defs>
          <clipPath id="logo-clip" clipPathUnits="objectBoundingBox">
            {/* scale 0..100 coords into objectBoundingBox space */}
            <g transform="scale(0.01, 0.015)">
              <path d={reducedMotion ? PATHS[PATHS.length - 1] : d} />
            </g>
          </clipPath>
        </defs>

        <image
          href={src}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          clipPath="url(#logo-clip)"
          onLoad={() => setImgLoaded(true)}
        />
      </svg>
    </div>
  );
}
