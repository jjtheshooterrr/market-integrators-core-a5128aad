// src/components/effects/LogoMorph.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";

/* ------------------ POINT SAMPLING (alpha-only + jitter) ------------------ */

async function rasterToPoints(
  src: string,
  {
    density = 3.2,
    threshold = 0.5, // alpha-only threshold
    maxPoints = 12000,
    maxRenderSize = 520, // clamp raster size for perf
    jitter = 0.75, // px jitter to kill grid feel
  } = {},
): Promise<Float32Array> {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.decoding = "async";
  img.src = src;
  await img.decode();

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
  ctx.imageSmoothingEnabled = false;

  const scale = maxRenderSize / Math.max(img.naturalWidth, img.naturalHeight);
  canvas.width = Math.round(img.naturalWidth * scale);
  canvas.height = Math.round(img.naturalHeight * scale);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const pts: number[] = [];
  for (let y = 0; y < height; y += density) {
    for (let x = 0; x < width; x += density) {
      const i = (y * width + x) * 4;
      const a = data[i + 3] / 255; // ALPHA ONLY
      if (a >= threshold) {
        const jx = (Math.random() - 0.5) * jitter;
        const jy = (Math.random() - 0.5) * jitter;
        pts.push(x + jx, y + jy);
      }
    }
  }

  // Downsample if needed
  if (pts.length / 2 > maxPoints) {
    const stride = Math.ceil(pts.length / 2 / maxPoints);
    const slim: number[] = [];
    for (let i = 0; i < pts.length; i += stride * 2) {
      slim.push(pts[i], pts[i + 1]);
    }
    return normalize(slim, width, height);
  }

  return normalize(pts, width, height);
}

function normalize(rawXY: number[], width: number, height: number): Float32Array {
  const out: number[] = [];
  const cx = width / 2;
  const cy = height / 2;
  const maxSide = Math.max(width, height);
  const S = 3.2;

  for (let i = 0; i < rawXY.length; i += 2) {
    const x = (rawXY[i] - cx) / maxSide;
    const y = (cy - rawXY[i + 1]) / maxSide;
    out.push(x * S, y * S, 0);
  }
  return new Float32Array(out);
}

/* ------------------ MORPH POINTS (ring spawn + additive glow + idle hover) ------------------ */

function MorphPoints({
  targetPositions,
  color = "#ef1f2b",
  onComplete,
  idleAmp = 0.06, // idle amplitude (world units)
  idleSpeed = 0.9, // idle speed multiplier
}: {
  targetPositions: Float32Array;
  color?: string;
  onComplete?: () => void;
  idleAmp?: number;
  idleSpeed?: number;
}) {
  const geomRef = useRef<THREE.BufferGeometry>(null!);
  const count = targetPositions.length / 3;

  // color: convert sRGB string/hex to linear for accurate output
  const matColor = useMemo(() => new THREE.Color(color).convertSRGBToLinear(), [color]);

  // spawn on a ring around the logo (no box reveal)
  const startPositions = useMemo(() => {
    const arr = new Float32Array(targetPositions.length);
    const R = 3.8;
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const rad = R * (0.8 + Math.random() * 0.4);
      arr[i * 3] = Math.cos(theta) * rad;
      arr[i * 3 + 1] = Math.sin(theta) * rad;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
    }
    return arr;
  }, [count]);

  // base (rest) positions to hover around after morph
  const baseRef = useRef<Float32Array | null>(null);
  const idleRef = useRef(false);

  useEffect(() => {
    const geom = geomRef.current;
    geom.setAttribute("position", new THREE.BufferAttribute(startPositions.slice(), 3));

    // GSAP prefers number[]; mirror to typed array each tick
    const posTyped = geom.attributes.position.array as Float32Array;
    const posForGsap = Array.from(posTyped);
    const targetForGsap = Array.from(targetPositions);

    const tween = gsap.to(posForGsap, {
      duration: 1.6,
      ease: "power3.inOut",
      endArray: targetForGsap,
      onUpdate: () => {
        for (let i = 0; i < posTyped.length; i++) posTyped[i] = posForGsap[i];
        geom.attributes.position.needsUpdate = true;
      },
      onComplete: () => {
        // lock in a clean base to hover around
        baseRef.current = new Float32Array(targetPositions);
        idleRef.current = true;
        onComplete?.();
      },
    });

    return () => {
      tween.kill(); // cleanup (void)
    };
  }, [targetPositions, onComplete, startPositions]);

  // small deterministic seeds per point (no extra lib)
  const seeds = useMemo(() => {
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) s[i] = (Math.sin(i * 12.9898) * 43758.5453) % (Math.PI * 2);
    return s;
  }, [count]);

  // idle hover: layered trig offsets around base shape
  const tRef = useRef(0);
  useFrame((_, delta) => {
    const base = baseRef.current;
    if (!base) return;

    tRef.current += delta * idleSpeed;

    const a = geomRef.current.attributes.position.array as Float32Array;

    for (let i = 0; i < a.length; i += 3) {
      const idx = i / 3;
      const seed = seeds[idx];

      // base position
      const bx = base[i];
      const by = base[i + 1];
      const bz = base[i + 2];

      // layered motion (3 simple harmonic components)
      const ox =
        Math.sin(tRef.current + seed) * idleAmp * 0.7 + Math.sin(tRef.current * 0.7 + seed * 1.7) * idleAmp * 0.3;
      const oy =
        Math.cos(tRef.current * 0.95 + seed * 1.13) * idleAmp * 0.7 +
        Math.sin(tRef.current * 1.3 + seed * 2.1) * idleAmp * 0.25;
      const oz = Math.sin(tRef.current * 1.4 + seed * 0.6) * idleAmp * 0.6;

      a[i] = bx + ox;
      a[i + 1] = by + oy;
      a[i + 2] = bz + oz;
    }
    geomRef.current.attributes.position.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry ref={geomRef} />
      <pointsMaterial
        size={0.038}
        sizeAttenuation
        transparent
        opacity={0.95}
        color={matColor}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ------------------ PUBLIC COMPONENT ------------------ */

export default function LogoMorph({
  src,
  color = "#ef1f2b",
  height = 120,
  showMaskFill = false, // keep off to avoid any flash
}: {
  src: string; // REQUIRED
  color?: string;
  height?: number;
  showMaskFill?: boolean;
}) {
  const [positions, setPositions] = useState<Float32Array | null>(null);
  const [showFill, setShowFill] = useState(false);

  useEffect(() => {
    let mounted = true;
    rasterToPoints(src, {
      density: 3.0,
      threshold: 0.5,
      maxPoints: 12000,
      jitter: 0.8,
    }).then((p) => {
      if (mounted) setPositions(p);
    });
    return () => {
      mounted = false;
    };
  }, [src]);

  const finish = () => {
    if (!showMaskFill) return;
    setShowFill(true);
    setTimeout(() => setShowFill(false), 800);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
      }}
    >
      {positions && (
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 6], fov: 55 }}
          style={{ position: "absolute", inset: 0 }}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          onCreated={(state) => {
            // Accurate brand color: no tone mapping + sRGB output
            state.gl.toneMapping = THREE.NoToneMapping;
            // three r152+
            // @ts-ignore
            state.gl.outputColorSpace = THREE.SRGBColorSpace;
          }}
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[2, 2, 4]} intensity={0.5} />
          <MorphPoints targetPositions={positions} color={color} onComplete={finish} />
        </Canvas>
      )}

      {showFill && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: color,
            WebkitMaskImage: `url(${src})`,
            maskImage: `url(${src})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "auto 100%",
            maskSize: "auto 100%",
            transition: "opacity .35s ease",
          }}
        />
      )}
    </div>
  );
}
