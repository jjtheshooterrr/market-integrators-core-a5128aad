import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

/* ---- helpers: sampling ---- */
async function rasterToPoints(src: string, { density = 6, threshold = 0.55, maxPoints = 6000 } = {}) {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.decoding = "async";
  img.src = src;
  await img.decode();

  const c = document.createElement("canvas");
  const ctx = c.getContext("2d", { willReadFrequently: true })!;
  ctx.imageSmoothingEnabled = false;

  const targetMax = 420; // smaller work size = fewer points
  const k = targetMax / Math.max(img.naturalWidth, img.naturalHeight);
  c.width = Math.round(img.naturalWidth * k);
  c.height = Math.round(img.naturalHeight * k);
  ctx.drawImage(img, 0, 0, c.width, c.height);

  const { data, width, height } = ctx.getImageData(0, 0, c.width, c.height);
  const xy: number[] = [];
  for (let y = 0; y < height; y += density) {
    for (let x = 0; x < width; x += density) {
      const i = (y * width + x) * 4;
      const r = data[i] / 255,
        g = data[i + 1] / 255,
        b = data[i + 2] / 255,
        a = data[i + 3] / 255;
      const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      const s = a > 0.05 ? a : 1 - l;
      if (s > threshold) xy.push(x, y);
    }
  }
  if (xy.length / 2 > maxPoints) {
    const stride = Math.ceil(xy.length / 2 / maxPoints);
    const slim: number[] = [];
    for (let i = 0; i < xy.length; i += stride * 2) slim.push(xy[i], xy[i + 1]);
    return normalizeFromImage(slim, width, height);
  }
  return normalizeFromImage(xy, width, height);
}

async function svgToPoints(src: string, { maxPoints = 12000 } = {}) {
  const res = await fetch(src, { cache: "force-cache" });
  const svgText = await res.text();
  const doc = new DOMParser().parseFromString(svgText, "image/svg+xml");
  const svg = doc.querySelector("svg") as SVGSVGElement | null;
  if (!svg) throw new Error("Invalid SVG");

  const geoms = Array.from(
    svg.querySelectorAll<SVGGeometryElement>("path, polygon, polyline, circle, ellipse, rect, line"),
  );
  if (!geoms.length) throw new Error("No geometry in SVG");

  const lengths = geoms.map((g) => {
    try {
      return g.getTotalLength();
    } catch {
      return 0;
    }
  });
  const total = lengths.reduce((a, b) => a + b, 0) || 1;
  const pts: number[] = [];
  geoms.forEach((g, i) => {
    const L = lengths[i] || 0;
    const n = Math.max(2, Math.round((L / total) * maxPoints));
    for (let j = 0; j < n; j++) {
      const p = g.getPointAtLength((j / n) * L);
      pts.push(p.x, p.y);
    }
  });
  const vb = svg.viewBox?.baseVal;
  if (vb && vb.width > 0 && vb.height > 0) {
    return normalizeFromRect(pts, { x: vb.x, y: vb.y, width: vb.width, height: vb.height });
  }
  return normalizeFromBounds(pts);
}
function logoToPoints(src: string, opts: any = {}) {
  return /\.svg(\?|#|$)/i.test(src) ? svgToPoints(src, opts) : rasterToPoints(src, opts);
}

/* ---- helpers: normalization ---- */
function normalizeFromImage(rawXY: number[], width: number, height: number) {
  const out: number[] = [],
    cx = width / 2,
    cy = height / 2,
    maxSide = Math.max(width, height),
    S = 3.0;
  for (let i = 0; i < rawXY.length; i += 2) {
    out.push(((rawXY[i] - cx) / maxSide) * S, ((cy - rawXY[i + 1]) / maxSide) * S, 0);
  }
  return new Float32Array(out);
}
function normalizeFromBounds(rawXY: number[]) {
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;
  for (let i = 0; i < rawXY.length; i += 2) {
    const x = rawXY[i],
      y = rawXY[i + 1];
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  return normalizeFromRect(rawXY, { x: minX, y: minY, width: maxX - minX, height: maxY - minY });
}
function normalizeFromRect(rawXY: number[], r: { x: number; y: number; width: number; height: number }) {
  const out: number[] = [],
    cx = r.x + r.width / 2,
    cy = r.y + r.height / 2,
    maxSide = Math.max(r.width, r.height),
    S = 3.0;
  for (let i = 0; i < rawXY.length; i += 2) {
    out.push(((rawXY[i] - cx) / maxSide) * S, ((cy - rawXY[i + 1]) / maxSide) * S, 0);
  }
  return new Float32Array(out);
}

/* ---- fast points component (no per-frame shimmer) ---- */
function MorphPoints({
  target,
  onDone,
  color = "#ef1f2b",
}: {
  target: Float32Array;
  onDone: () => void;
  color?: string;
}) {
  const geomRef = useRef<THREE.BufferGeometry>(null!);
  const count = target.length / 3;
  const start = useMemo(() => {
    const a = new Float32Array(target.length);
    for (let i = 0; i < count; i++) {
      // smaller start radius so it travels less distance => faster tween
      const phi = Math.acos(2 * Math.random() - 1),
        theta = Math.random() * Math.PI * 2,
        r = 0.9 + Math.random() * 0.3;
      a[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      a[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      a[i * 3 + 2] = r * Math.cos(phi);
    }
    return a;
  }, [count]);

  // invalidate frames on tween updates only (frameloop='demand')
  const { invalidate } = useThree();

  useEffect(() => {
    const geom = geomRef.current;
    geom.setAttribute("position", new THREE.BufferAttribute(start.slice(0), 3));
    const pos = geom.attributes.position.array as Float32Array;
    const tw = gsap.to(pos, {
      duration: 0.45, // faster
      ease: "power1.out",
      // @ts-ignore
      endArray: target,
      onUpdate: () => {
        geom.attributes.position.needsUpdate = true;
        invalidate();
      },
      onComplete: onDone,
    });
    return () => tw.kill();
  }, [target, start, onDone, invalidate]);

  return (
    <points>
      <bufferGeometry ref={geomRef} />
      <pointsMaterial size={0.033} sizeAttenuation color={color} transparent opacity={0.95} />
    </points>
  );
}

/* ---- Loading Screen (fast) ---- */
export default function LoadingScreen({
  imgSrc,
  onComplete,
  brandRed = "#ef1f2b",
  background = "#ffffff",
}: {
  imgSrc: string;
  onComplete: () => void;
  brandRed?: string;
  background?: string;
}) {
  const [pts, setPts] = useState<Float32Array | null>(null);
  const [visible, setVisible] = useState(true);
  const [showFill, setShowFill] = useState(false);
  const [lite, setLite] = useState(false);

  useEffect(() => {
    // super-fast path on small screens
    setLite(window.innerWidth < 640 || window.devicePixelRatio > 2);
  }, []);

  useEffect(() => {
    let ok = true;
    logoToPoints(imgSrc, lite ? { density: 8, maxPoints: 4000 } : { density: 6, maxPoints: 6000 })
      .then((p) => ok && setPts(p))
      .catch(() => ok && setPts(new Float32Array()));
    return () => {
      ok = false;
    };
  }, [imgSrc, lite]);

  const finish = () => {
    setShowFill(true); // show solid red instantly
    setTimeout(() => {
      // quick fade out
      setVisible(false);
      onComplete?.();
    }, 250);
  };

  // If lite mode, skip the morph entirely for speed
  const skipMorph = lite;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[9999]"
          style={{ background }}
        >
          {!skipMorph && pts && pts.length > 0 && (
            <Canvas
              frameloop="demand"
              dpr={[1, 1.25]} // cap DPR for mobile perf
              camera={{ position: [0, 0, 6], fov: 55 }}
              className="absolute inset-0"
              gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
              onCreated={({ gl }) => {
                gl.toneMapping = THREE.NoToneMapping;
                gl.setClearAlpha(0);
              }}
            >
              <ambientLight intensity={0.9} />
              {/* No shadows, no fog, no per-frame hooks */}
              <MorphPoints target={pts} onDone={finish} color={brandRed} />
            </Canvas>
          )}

          {/* Lite path or post-morph: solid red fill mask */}
          {(skipMorph || showFill) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
              style={{
                background: brandRed,
                WebkitMaskImage: `url(${imgSrc})`,
                maskImage: `url(${imgSrc})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
              onAnimationComplete={() => skipMorph && finish()}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
