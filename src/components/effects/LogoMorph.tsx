import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

/* ------------------ POINT SAMPLING ------------------ */

async function rasterToPoints(
  src: string,
  { density = 4, threshold = 0.55, maxPoints = 10000 } = {},
): Promise<Float32Array> {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.decoding = "async";
  img.src = src;
  await img.decode();

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
  ctx.imageSmoothingEnabled = false;

  const scale = 520 / Math.max(img.naturalWidth, img.naturalHeight);
  canvas.width = Math.round(img.naturalWidth * scale);
  canvas.height = Math.round(img.naturalHeight * scale);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const points: number[] = [];

  for (let y = 0; y < height; y += density) {
    for (let x = 0; x < width; x += density) {
      const i = (y * width + x) * 4;
      const r = data[i] / 255,
        g = data[i + 1] / 255,
        b = data[i + 2] / 255,
        a = data[i + 3] / 255;
      const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      const s = a > 0.05 ? a : 1 - l;
      if (s > threshold) points.push(x, y);
    }
  }

  if (points.length / 2 > maxPoints) {
    const stride = Math.ceil(points.length / 2 / maxPoints);
    const trimmed: number[] = [];
    for (let i = 0; i < points.length; i += stride * 2) trimmed.push(points[i], points[i + 1]);
    return normalize(trimmed, width, height);
  }

  return normalize(points, width, height);
}

function normalize(rawXY: number[], width: number, height: number): Float32Array {
  const out: number[] = [];
  const cx = width / 2;
  const cy = height / 2;
  const scale = 3.2;

  for (let i = 0; i < rawXY.length; i += 2) {
    const x = (rawXY[i] - cx) / Math.max(width, height);
    const y = (cy - rawXY[i + 1]) / Math.max(width, height);
    out.push(x * scale, y * scale, 0);
  }
  return new Float32Array(out);
}

/* ------------------ MORPH POINTS ------------------ */

function MorphPoints({
  targetPositions,
  color = "#ef1f2b",
  onComplete,
}: {
  targetPositions: Float32Array;
  color?: string;
  onComplete?: () => void;
}) {
  const geom = useRef<THREE.BufferGeometry>(null!);
  const count = targetPositions.length / 3;

  const startPositions = useMemo(() => {
    const arr = new Float32Array(targetPositions.length);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 2 + Math.random() * 2.5;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useEffect(() => {
    const g = geom.current;
    g.setAttribute("position", new THREE.BufferAttribute(startPositions.slice(), 3));

    const pos = g.attributes.position.array as Float32Array;
    const tween = gsap.to(pos, {
      duration: 1.4,
      ease: "power3.inOut",
      // @ts-ignore
      endArray: targetPositions,
      onUpdate: () => (g.attributes.position.needsUpdate = true),
      onComplete: () => setTimeout(() => onComplete?.(), 200),
    });
    return () => tween.kill();
  }, [targetPositions, onComplete, startPositions]);

  // subtle shimmer effect
  const time = useRef(0);
  useFrame((_, delta) => {
    time.current += delta;
    const arr = geom.current.attributes.position.array as Float32Array;
    for (let i = 0; i < arr.length; i += 3) {
      arr[i + 2] = 0.04 * Math.sin(time.current * 1.5 + i * 0.05);
    }
    geom.current.attributes.position.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry ref={geom} />
      <pointsMaterial size={0.035} sizeAttenuation transparent opacity={0.95} color={color} />
    </points>
  );
}

/* ------------------ LOGO MORPH COMPONENT ------------------ */

export default function LogoMorph({
  src,
  color = "#ef1f2b",
  height = 120,
}: {
  src: string;
  color?: string;
  height?: number;
}) {
  const [positions, setPositions] = useState<Float32Array | null>(null);
  const [showFill, setShowFill] = useState(false);

  useEffect(() => {
    rasterToPoints(src, { density: 3.5, threshold: 0.4, maxPoints: 12000 }).then(setPositions);
  }, [src]);

  const finish = () => {
    setShowFill(true);
    setTimeout(() => setShowFill(false), 1000);
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
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 55 }} style={{ position: "absolute", inset: 0 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 2, 4]} intensity={0.6} />
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
            transition: "opacity 0.4s ease",
          }}
        />
      )}
    </div>
  );
}
