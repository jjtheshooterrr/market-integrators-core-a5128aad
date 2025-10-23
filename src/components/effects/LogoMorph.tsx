// src/components/effects/LogoMorph.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";

/* ------------------ POINT SAMPLING (alpha-only + jitter) ------------------ */

async function rasterToPoints(
  src: string,
  {
    density = 3.2, // slightly denser but still fast
    threshold = 0.5, // alpha-only threshold
    maxPoints = 12000,
    maxRenderSize = 520, // clamp raster size for perf
    jitter = 0.75, // px jitter inside each cell to kill the grid look
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

  // draw clean (no matte bleed)
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const pts: number[] = [];
  for (let y = 0; y < height; y += density) {
    for (let x = 0; x < width; x += density) {
      const i = (y * width + x) * 4;
      const a = data[i + 3] / 255; // <- ALPHA ONLY
      if (a >= threshold) {
        const jx = (Math.random() - 0.5) * jitter; // subtle jitter inside the cell
        const jy = (Math.random() - 0.5) * jitter;
        pts.push(x + jx, y + jy);
      }
    }
  }

  // Downsample if needed (even stride)
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
  const S = 3.2; // world scale

  for (let i = 0; i < rawXY.length; i += 2) {
    const x = (rawXY[i] - cx) / maxSide;
    const y = (cy - rawXY[i + 1]) / maxSide;
    out.push(x * S, y * S, 0);
  }
  return new Float32Array(out);
}

/* ------------------ MORPH POINTS (ring spawn + additive glow) ------------------ */

function MorphPoints({
  targetPositions,
  color = "#ef1f2b",
  onComplete,
}: {
  targetPositions: Float32Array;
  color?: string;
  onComplete?: () => void;
}) {
  const geomRef = useRef<THREE.BufferGeometry>(null!);
  const count = targetPositions.length / 3;

  // spawn on a ring around the logo (no box reveal)
  const startPositions = useMemo(() => {
    const arr = new Float32Array(targetPositions.length);
    const R = 3.8; // ring radius
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const rad = R * (0.8 + Math.random() * 0.4);
      arr[i * 3] = Math.cos(theta) * rad;
      arr[i * 3 + 1] = Math.sin(theta) * rad;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
    }
    return arr;
  }, [count]);

  useEffect(() => {
    const geom = geomRef.current;
    geom.setAttribute("position", new THREE.BufferAttribute(startPositions.slice(), 3));

    const pos = geom.attributes.position.array as Float32Array;
    const tween = gsap.to(pos, {
      duration: 1.6,
      ease: "power3.inOut",
      // @ts-ignore: endArray is supported by GSAP on typed arrays
      endArray: targetPositions,
      onUpdate: () => {
        geom.attributes.position.needsUpdate = true;
      },
      onComplete: () => {
        onComplete?.();
      },
    });
    return () => tween.kill();
  }, [targetPositions, onComplete, startPositions]);

  // micro z shimmer for depth
  const tRef = useRef(0);
  useFrame((_, delta) => {
    tRef.current += delta;
    const a = geomRef.current.attributes.position.array as Float32Array;
    for (let i = 0; i < a.length; i += 3) {
      a[i + 2] = 0.035 * Math.sin(tRef.current * 1.4 + (i / 3) * 0.19);
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
        color={color}
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
  showMaskFill = false, // default off (prevents any flash)
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
      threshold: 0.5, // alpha only
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
