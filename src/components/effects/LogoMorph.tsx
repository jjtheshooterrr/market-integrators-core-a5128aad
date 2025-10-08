import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";

// Simplified helper to convert logo to points
const logoToPoints = async (imgSrc: string, targetCount = 300) => {
  return new Promise<THREE.Vector3[]>((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      const scale = Math.min(128 / img.width, 128 / img.height);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const points: THREE.Vector3[] = [];

      for (let y = 0; y < canvas.height; y += 2) {
        for (let x = 0; x < canvas.width; x += 2) {
          const i = (y * canvas.width + x) * 4;
          const alpha = imageData.data[i + 3];
          if (alpha > 128) {
            const px = (x / canvas.width - 0.5) * 2;
            const py = -(y / canvas.height - 0.5) * 2;
            points.push(new THREE.Vector3(px, py, 0));
          }
        }
      }

      // Sample to target count
      const step = Math.max(1, Math.floor(points.length / targetCount));
      const sampledPoints = points.filter((_, i) => i % step === 0);
      resolve(sampledPoints.slice(0, targetCount));
    };
    img.src = imgSrc;
  });
};

interface MorphPointsProps {
  targetPositions: THREE.Vector3[];
}

const MorphPoints = ({ targetPositions }: MorphPointsProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const positionsRef = useRef<Float32Array>();

  useEffect(() => {
    if (!pointsRef.current || !targetPositions.length) return;

    const geometry = pointsRef.current.geometry;
    const positions = new Float32Array(targetPositions.length * 3);

    // Initialize in a small cluster
    targetPositions.forEach((_, i) => {
      const angle = (i / targetPositions.length) * Math.PI * 2;
      const radius = 0.3;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
    });

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    positionsRef.current = positions;

    // Animate to target positions
    targetPositions.forEach((target, i) => {
      gsap.to(positions, {
        duration: 1.2,
        delay: 0.1,
        ease: "power2.out",
        [i * 3]: target.x,
        [i * 3 + 1]: target.y,
        [i * 3 + 2]: target.z,
        onUpdate: () => {
          geometry.attributes.position.needsUpdate = true;
        },
      });
    });
  }, [targetPositions]);

  useFrame((state) => {
    if (pointsRef.current && positionsRef.current) {
      const time = state.clock.getElapsedTime();
      const positions = positionsRef.current;
      
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] = Math.sin(time + i) * 0.02;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial size={0.015} color="#ffffff" sizeAttenuation={true} />
    </points>
  );
};

const LogoMorph = () => {
  const [targetPositions, setTargetPositions] = useState<THREE.Vector3[]>([]);

  useEffect(() => {
    logoToPoints(
      "https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/imagebuck/FreeSample-Vectorizer-io-IMG_2671%20(1)%20(1).svg"
    ).then(setTargetPositions);
  }, []);

  if (!targetPositions.length) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
    >
      <MorphPoints targetPositions={targetPositions} />
    </Canvas>
  );
};

export default LogoMorph;
