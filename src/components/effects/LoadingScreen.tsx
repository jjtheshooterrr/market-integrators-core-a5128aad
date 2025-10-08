// LoadingScreen.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

/* ---------- helpers: sampling ---------- */

// Raster → points (alpha/luma threshold)
async function rasterToPoints(src: string, { density = 4, threshold = 0.55, maxPoints = 10000 } = {}) {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.decoding = "async";
  img.src = src;
  await img.decode();

  const c = document.createElement("canvas");
  const ctx = c.getContext("2d", { willReadFrequently: true })!;
  ctx.imageSmoothingEnabled = false;

  const targetMax = 520;
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

// SVG → points (proportional to geometry length)
async function svgToPoints(src: string, { maxPoints = 16000 } = {}) {
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

  // Prefer the real viewBox for perfect framing
  const vb = svg.viewBox?.baseVal;
  if (vb && vb.width > 0 && vb.height > 0) {
    return normalizeFromRect(pts, { x: vb.x, y: vb.y, width: vb.width, height: vb.height });
  }
  return normalizeFromBounds(pts);
}

function logoToPoints(src: string, opts: any = {}) {
  return /\.svg(\?|#|$)/i.test(src) ? svgToPoints(src, opts) : rasterToPoints(src, opts);
}

/* ---------- helpers: normalization ---------- */

function normalizeFromImage(rawXY: number[], width: number, height: number) {
  const out: number[] = [],
    cx = width / 2,
    cy = height / 2,
    maxSide = Math.max(width, height);
  const S = 3.2;
  for (let i = 0; i < rawXY.length; i += 2) {
    const x = (rawXY[i] - cx) / maxSide;
    const y = (cy - rawXY[i + 1]) / maxSide;
    out.push(x * S, y * S, 0);
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

function normalizeFromRect(rawXY: number[], rect: { x: number; y: number; width: number; height: number }) {
  const out: number[] = [],
    cx = rect.x + rect.width / 2,
    cy = rect.y + rect.height / 2;
  const maxSide = Math.max(rect.width, rect.height),
    S = 3.2;
  for (let i = 0; i < rawXY.length; i += 2) {
    const x = (rawXY[i] - cx) / maxSide;
    const y = (cy - rawXY[i + 1]) / maxSide;
    out.push(x * S, y * S, 0);
  }
  return new Float32Array(out);
}

/* ---------- Three.js particles ---------- */

function MorphPoints({
  targetPositions,
  reducedMotion,
  onComplete,
  particleColor = "#ef4444",
}: {
  targetPositions: Float32Array;
  reducedMotion: boolean;
  onComplete: () => void;
  particleColor?: string;
}) {
  const count = targetPositions.length / 3;
  const geomRef = useRef<THREE.BufferGeometry>(null!);
  const start = useMemo(() => {
    const arr = new Float32Array(targetPositions.length);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.PI * 2 * Math.random();
      const r = 1.2 + Math.random() * 0.6;
      arr[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useEffect(() => {
    const geom = geomRef.current;
    geom.setAttribute("position", new THREE.BufferAttribute(start.slice(0), 3));
    if (reducedMotion) {
      geom.attributes.position.array.set(targetPositions);
      geom.attributes.position.needsUpdate = true;
      const t = setTimeout(onComplete, 600);
      return () => clearTimeout(t);
    }
    const pos = geom.attributes.position.array as Float32Array;
    const tw = gsap.to(pos, {
      duration: 1.15,
      ease: "power3.inOut",
      // @ts-ignore
      endArray: targetPositions,
      onUpdate: () => (geom.attributes.position.needsUpdate = true),
      onComplete: () => setTimeout(onComplete, 200),
    });
    return () => tw.kill();
  }, [targetPositions, reducedMotion, onComplete, start]);

  // subtle z shimmer
  const tRef = useRef(0);
  useFrame((_, d) => {
    if (reducedMotion) return;
    tRef.current += d;
    const a = geomRef.current.attributes.position.array as Float32Array;
    for (let i = 0; i < a.length; i += 3) a[i + 2] = 0.03 * Math.sin(tRef.current * 1.6 + (i / 3) * 0.17);
    geomRef.current.attributes.position.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry ref={geomRef} />
      <pointsMaterial size={0.035} sizeAttenuation transparent opacity={0.95} color={particleColor} />
    </points>
  );
}

/* ---------- Loading Screen ---------- */

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
  const [positions, setPositions] = useState<Float32Array | null>(null);
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(true);
  const [showFill, setShowFill] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const h = () => setReduced(!!mq.matches);
    h();
    mq.addEventListener?.("change", h);
    return () => mq.removeEventListener?.("change", h);
  }, []);

  useEffect(() => {
    let mounted = true;
    logoToPoints(imgSrc, { density: 4 })
      .then((pts) => mounted && setPositions(pts))
      .catch(() => mounted && setPositions(new Float32Array()));
    return () => {
      mounted = false;
    };
  }, [imgSrc]);

  const finish = () => {
    setShowFill(true); // show solid red logo
    setTimeout(() => {
      // fade screen away
      setVisible(false);
      onComplete?.();
    }, 500);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999]"
          style={{ background }}
        >
          {/* Particle morph */}
          {positions && positions.length > 0 && (
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 55 }} className="absolute inset-0">
              <ambientLight intensity={0.8} />
              <directionalLight position={[2, 2, 4]} intensity={0.5} />
              <MorphPoints
                targetPositions={positions}
                reducedMotion={reduced}
                onComplete={finish}
                particleColor={brandRed}
              />
            </Canvas>
          )}

          {/* Solid red fill mask (crisp final logo) */}
          {showFill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 pointer-events-none"
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
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
