// src/components/effects/LogoMorph.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ------------------ SAMPLE LOGO (alpha-only) JUST TO MEASURE BOUNDS ------------------ */

async function sampleLogoBounds(
  src: string,
  {
    density = 3.2,
    threshold = 0.5, // alpha-only threshold
    maxRenderSize = 640, // slightly higher to read bounds cleanly
  } = {},
): Promise<{ center: THREE.Vector3; radius: number }> {
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

  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  let found = false;

  for (let y = 0; y < height; y += density) {
    for (let x = 0; x < width; x += density) {
      const i = (y * width + x) * 4;
      const a = data[i + 3] / 255; // ALPHA ONLY
      if (a >= threshold) {
        found = true;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  // Fallback if nothing detected
  if (!found) {
    return { center: new THREE.Vector3(0, 0, 0), radius: 1 };
  }

  // Convert to world units (keep parity with the old scaling)
  const maxSide = Math.max(width, height);
  const S = 3.2;
  const toWorldX = (x: number) => ((x - width / 2) / maxSide) * S;
  const toWorldY = (y: number) => ((height / 2 - y) / maxSide) * S;

  const cx = toWorldX((minX + maxX) / 2);
  const cy = toWorldY((minY + maxY) / 2);
  const halfW = ((maxX - minX) / 2 / maxSide) * S;
  const halfH = ((maxY - minY) / 2 / maxSide) * S;

  const radius = Math.max(halfW, halfH) * 1.25; // ring just outside the logo
  return { center: new THREE.Vector3(cx, cy, 0), radius };
}

/* ------------------ ORBIT RING (white nucleus) ------------------ */

function NucleusRing({
  center = new THREE.Vector3(0, 0, 0),
  radius,
  count = 160,
  speedMin = 0.35,
  speedMax = 0.7,
  thickness = 0.08, // small radial jitter so it shimmers a bit
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
    return Array.from({ length: count }, () => ({
      phase: Math.random() * Math.PI * 2,
      speed: speedMin + Math.random() * (speedMax - speedMin),
      rJitter: (Math.random() - 0.5) * thickness,
      zJitterAmp: 0.05 + Math.random() * 0.06,
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
        size={0.024}
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

/* ------------------ PUBLIC COMPONENT ------------------ */

export default function LogoMorph({
  src,
  color = "#ef1f2b", // not used for the image; kept for parity if you style extras later
  height = 320, // 2× bigger than the old default
  showMaskFill = false,
}: {
  src: string; // REQUIRED
  color?: string;
  height?: number;
  showMaskFill?: boolean;
}) {
  const [bounds, setBounds] = useState<{ center: THREE.Vector3; radius: number } | null>(null);

  useEffect(() => {
    let mounted = true;
    // only reading bounds; no particles drawn from this
    sampleLogoBounds(src).then((b) => {
      if (mounted) setBounds(b);
    });
    return () => {
      mounted = false;
    };
  }, [src]);

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
      {/* Crisp logo as a DOM image (no blur, no particle mask) */}
      <img
        src={src}
        alt="Logo"
        style={{
          position: "absolute",
          height: "100%",
          width: "auto",
          objectFit: "contain",
          imageRendering: "auto",
          filter: "none",
          pointerEvents: "none",
        }}
        decoding="async"
        loading="eager"
      />

      {/* Orbiting nucleus ring in WebGL */}
      {bounds && (
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 6], fov: 55 }}
          style={{ position: "absolute", inset: 0 }}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          onCreated={(state) => {
            // Accurate colors
            state.gl.toneMapping = THREE.NoToneMapping;
            // three r152+
            // @ts-ignore
            state.gl.outputColorSpace = THREE.SRGBColorSpace;
          }}
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[2, 2, 4]} intensity={0.5} />

          {/* White orbiting nucleus — ring sized from real logo bounds */}
          <NucleusRing center={bounds.center} radius={bounds.radius} count={180} />
        </Canvas>
      )}

      {/* Optional: keep off (no need with real image) */}
      {showMaskFill && (
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
