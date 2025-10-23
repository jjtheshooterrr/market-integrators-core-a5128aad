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
    jitter = 0.75, // px jitter to remove grid feel
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

/* ------------------ ORBIT RING (white nucleus) ------------------ */

function NucleusRing({
  center = new THREE.Vector3(0, 0, 0),
  radius,
  count = 120,
  speedMin = 0.35,
  speedMax = 0.7,
  thickness = 0.06, // small radial jitter so it shimmers a bit
}: {
  center?: THREE.Vector3;
  radius: number;
  count?: number;
  speedMin?: number;
  speedMax?: number;
  thickness?: number;
}) {
  const geomRef = useRef<THREE.BufferGeometry>(null!);

  // seeds for each orbiter
  const seeds = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      phase: Math.random() * Math.PI * 2,
      speed: speedMin + Math.random() * (speedMax - speedMin),
      rJitter: (Math.random() - 0.5) * thickness,
      zJitterAmp: 0.05 + Math.random() * 0.05,
      zPhase: Math.random() * Math.PI * 2,
    }));
  }, [count, speedMin, speedMax, thickness]);

  // initial positions on the ring
  const startPositions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const ang = (i / count) * Math.PI * 2;
      arr[i * 3] = center.x + Math.cos(ang) * radius;
      arr[i * 3 + 1] = center.y + Math.sin(ang) * radius;
      arr[i * 3 + 2] = center.z;
    }
    return arr;
  }, [count, center, radius]);

  const whiteLinear = useMemo(() => new THREE.Color("#ffffff").convertSRGBToLinear(), []);

  useEffect(() => {
    geomRef.current.setAttribute("position", new THREE.BufferAttribute(startPositions.slice(), 3));
  }, [startPositions]);

  const tRef = useRef(0);
  useFrame((_, delta) => {
    tRef.current += delta;
    const a = geomRef.current.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const s = seeds[i];
      const ang = s.phase + tRef.current * s.speed;

      const r = radius + s.rJitter * Math.sin(tRef.current * (0.8 + s.speed));
      a[i * 3] = center.x + Math.cos(ang) * r;
      a[i * 3 + 1] = center.y + Math.sin(ang) * r;
      a[i * 3 + 2] = center.z + Math.sin(tRef.current * 1.2 + s.zPhase) * s.zJitterAmp; // tiny 3D wobble
    }
    geomRef.current.attributes.position.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry ref={geomRef} />
      <pointsMaterial
        size={0.02}
        sizeAttenuation
        transparent
        opacity={0.95}
        color={whiteLinear}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ------------------ MORPH POINTS (ring spawn + additive glow + idle hover) ------------------ */

function MorphPoints({
  targetPositions,
  color = "#ef1f2b",
  onComplete,
  idleAmp = 0.06, // idle amplitude (world units)
  idleSpeed = 0.9, // idle speed multiplier
  onBounds, // reports center & radius for the ring
}: {
  targetPositions: Float32Array;
  color?: string;
  onComplete?: () => void;
  idleAmp?: number;
  idleSpeed?: number;
  onBounds?: (center: THREE.Vector3, radius: number) => void;
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

        // compute center & radius for the orbiting ring
        let minX = Infinity,
          maxX = -Infinity,
          minY = Infinity,
          maxY = -Infinity;
        for (let i = 0; i < targetPositions.length; i += 3) {
          const x = targetPositions[i];
          const y = targetPositions[i + 1];
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
        const cx = (minX + maxX) / 2;
        const cy = (minY + maxY) / 2;
        const halfW = (maxX - minX) / 2;
        const halfH = (maxY - minY) / 2;
        const radius = Math.max(halfW, halfH) * 1.25; // ring just outside the logo

        onBounds?.(new THREE.Vector3(cx, cy, 0), radius);
        onComplete?.();
      },
    });

    return () => {
      tween.kill(); // cleanup (void)
    };
  }, [targetPositions, onComplete, startPositions, onBounds]);

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
  showMaskFill = false, // keep off to avoid any flash/blur over the logo
}: {
  src: string; // REQUIRED
  color?: string;
  height?: number;
  showMaskFill?: boolean;
}) {
  const [positions, setPositions] = useState<Float32Array | null>(null);
  const [showFill, setShowFill] = useState(false);

  // for the orbit ring
  const [ringCenter, setRingCenter] = useState<THREE.Vector3 | null>(null);
  const [ringRadius, setRingRadius] = useState<number | null>(null);

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

          <MorphPoints
            targetPositions={positions}
            color={color}
            onComplete={finish}
            onBounds={(c, r) => {
              setRingCenter(c);
              setRingRadius(r);
            }}
          />

          {/* White orbiting nucleus — rendered AFTER the logo so it stays crisp underneath */}
          {ringCenter && ringRadius && <NucleusRing center={ringCenter} radius={ringRadius} count={140} />}
        </Canvas>
      )}

      {/* Optional mask fill (kept off by default to avoid blur/flash) */}
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
