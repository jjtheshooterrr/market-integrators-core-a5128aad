// src/components/effects/LogoMorph.tsx
import { useEffect, useMemo, useRef, useState } from "react";

// --- resolve flubber interpolate safely across ESM/CJS builds ---
let _interpolate: ((a: string, b: string, o?: { maxSegmentLength?: number }) => (t: number) => string) | null = null;
async function loadInterpolate() {
  if (_interpolate) return _interpolate;
  const m: any = await import("flubber");
  // handle: { interpolate }, default.export, or default.interpolate
  _interpolate = m.interpolate ?? m.default?.interpolate ?? null;
  return _interpolate;
}

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
  const [interpReady, setInterpReady] = useState(false);
  const [t, setT] = useState(0);
  const raf = useRef<number | null>(null);

  // Load flubber’s interpolate at runtime; avoid build/import inconsistencies
  useEffect(() => {
    loadInterpolate().then((fn) => setInterpReady(!!fn));
  }, []);

  // Build segment interpolators once interpolate is available
  const segs = useMemo(() => {
    const makeFallback = (from: string, to: string) => (u: number) => (u < 1 ? from : to);
    if (!interpReady || !_interpolate || PATHS.length < 2) {
      // fallback: static jump (still clipped, no square)
      return PATHS.slice(0, -1).map((_, i) => makeFallback(PATHS[i], PATHS[i + 1]));
    }
    return PATHS.slice(0, -1).map((_, i) => _interpolate!(PATHS[i], PATHS[i + 1], { maxSegmentLength: 2 }));
  }, [interpReady]);

  // Animate t
  useEffect(() => {
    if (reducedMotion) {
      setT(1);
      return;
    }
    if (!imgLoaded) return;

    const easeOutExpo = (x: number) => 1 - Math.pow(2, -10 * x);
    const easeInExpo = (x: number) => Math.pow(2, 10 * (x - 1));

    const start = performance.now();
    const fwd = (now: number) => {
      let p = Math.min(1, (now - start) / durationMs);
      p = easeOutExpo(p);
      setT(p);
      if (p < 1) raf.current = requestAnimationFrame(fwd);
      else if (loop) {
        const backStart = performance.now();
        const back = (ts: number) => {
          let q = Math.min(1, (ts - backStart) / durationMs);
          q = easeInExpo(q);
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

  // Current path from t (works even if segs are fallbacks)
  const d = useMemo(() => {
    if (PATHS.length === 0) return "";
    if (PATHS.length === 1) return PATHS[0];
    const n = segs.length;
    const segLen = 1 / n;
    const i = Math.min(n - 1, Math.floor(t / segLen));
    const local = n === 0 ? 0 : (t - i * segLen) / segLen;
    const fn = segs[i];
    // final guard
    return typeof fn === "function" ? fn(local) : PATHS[Math.min(i + 1, PATHS.length - 1)];
  }, [t, segs]);

  return (
    <div
      className="relative mx-auto"
      style={{
        height,
        aspectRatio: "3/2",
        opacity: imgLoaded ? 1 : 0, // hide until image is ready – no square flash
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
