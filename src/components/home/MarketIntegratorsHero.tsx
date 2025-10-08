// Market Integrators — Particle Morph Hero (SVG-enabled)
// Drop into a React/Next.js project. Deps: react, three, @react-three/fiber, gsap

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'

/** Raster image → points (alpha/luma threshold) */
async function rasterToPoints(src: string, {
  density = 4,
  threshold = 0.6,
  maxPoints = 8000,
}: { density?: number; threshold?: number; maxPoints?: number } = {}) {
  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.decoding = 'async'
  img.src = src
  await img.decode()

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!

  const targetMax = 520
  const scale = targetMax / Math.max(img.naturalWidth, img.naturalHeight)
  canvas.width = Math.round(img.naturalWidth * scale)
  canvas.height = Math.round(img.naturalHeight * scale)
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

  const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height)

  const pts: number[] = []
  for (let y = 0; y < height; y += density) {
    for (let x = 0; x < width; x += density) {
      const i = (y * width + x) * 4
      const r = data[i] / 255
      const g = data[i + 1] / 255
      const b = data[i + 2] / 255
      const a = data[i + 3] / 255
      const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b
      const signal = a > 0.05 ? a : 1 - luma
      if (signal > threshold) pts.push(x, y)
    }
  }

  if (pts.length / 2 > maxPoints) {
    const keep = Math.floor(maxPoints)
    const stride = Math.ceil((pts.length / 2) / keep)
    const slim: number[] = []
    for (let i = 0; i < pts.length; i += stride * 2) slim.push(pts[i], pts[i + 1])
    return normalizePointsFromImage(slim, width, height)
  }
  return normalizePointsFromImage(pts, width, height)
}

/** SVG → points using geometry lengths for crisp outlines */
async function svgToPoints(src: string, { maxPoints = 8000 }: { maxPoints?: number } = {}) {
  const res = await fetch(src, { cache: 'force-cache' })
  const svgText = await res.text()
  const parser = new DOMParser()
  const doc = parser.parseFromString(svgText, 'image/svg+xml')
  const svg = doc.querySelector('svg') as SVGSVGElement | null
  if (!svg) throw new Error('Invalid SVG')

  // Collect geometric elements
  const geoms = Array.from(
    svg.querySelectorAll<SVGGeometryElement>('path, polygon, polyline, circle, ellipse, rect, line')
  )
  if (geoms.length === 0) throw new Error('No geometry in SVG')

  // Total length for proportional sampling
  const lengths = geoms.map((g) => {
    try { return g.getTotalLength() } catch { return 0 }
  })
  const totalLen = lengths.reduce((a, b) => a + b, 0) || 1

  const pts: number[] = []
  geoms.forEach((g, idx) => {
    const L = lengths[idx] || 0
    const n = Math.max(2, Math.round((L / totalLen) * maxPoints))
    for (let i = 0; i < n; i++) {
      const p = g.getPointAtLength((i / n) * L)
      pts.push(p.x, p.y)
    }
  })

  return normalizePointsFromBounds(pts)
}

/** Choose best sampler for src (SVG vs raster) */
async function logoToPoints(src: string, opts: any = {}) {
  if (/\.svg(\?|#|$)/i.test(src)) return svgToPoints(src, opts)
  return rasterToPoints(src, opts)
}

/** Normalize raster XY into centered 3D positions */
function normalizePointsFromImage(rawXY: number[], width: number, height: number) {
  const positions: number[] = []
  const cx = width / 2
  const cy = height / 2
  const maxSide = Math.max(width, height)
  const aspectScale = 3.2
  for (let i = 0; i < rawXY.length; i += 2) {
    const x = (rawXY[i] - cx) / maxSide
    const y = (cy - rawXY[i + 1]) / maxSide
    positions.push(x * aspectScale, y * aspectScale, 0)
  }
  return new Float32Array(positions)
}

/** Normalize from raw point bounds (for SVG coordinates) */
function normalizePointsFromBounds(rawXY: number[]) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  for (let i = 0; i < rawXY.length; i += 2) {
    const x = rawXY[i]
    const y = rawXY[i + 1]
    if (x < minX) minX = x; if (x > maxX) maxX = x
    if (y < minY) minY = y; if (y > maxY) maxY = y
  }
  const width = Math.max(1, maxX - minX)
  const height = Math.max(1, maxY - minY)
  const positions: number[] = []
  const cx = (minX + maxX) / 2
  const cy = (minY + maxY) / 2
  const maxSide = Math.max(width, height)
  const aspectScale = 3.2
  for (let i = 0; i < rawXY.length; i += 2) {
    const x = (rawXY[i] - cx) / maxSide
    const y = (cy - rawXY[i + 1]) / maxSide
    positions.push(x * aspectScale, y * aspectScale, 0)
  }
  return new Float32Array(positions)
}

/** Points cloud that morphs to target positions */
function MorphPoints({ targetPositions, reducedMotion }: { targetPositions: Float32Array; reducedMotion: boolean }) {
  const count = targetPositions.length / 3
  const geomRef = useRef<THREE.BufferGeometry>(null!)
  const startPositions = useMemo(() => {
    const arr = new Float32Array(targetPositions.length)
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = 2 * Math.PI * Math.random()
      const r = 1.2 + Math.random() * 0.6
      arr[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useEffect(() => {
    const geom = geomRef.current
    geom.setAttribute('position', new THREE.BufferAttribute(startPositions.slice(0), 3))

    if (reducedMotion) {
      geom.attributes.position.array.set(targetPositions)
      geom.attributes.position.needsUpdate = true
      return
    }

    const pos = geom.attributes.position.array as Float32Array
    const tween = gsap.to(pos, {
      duration: 1.15,
      ease: 'power3.inOut',
      // @ts-ignore gsap endArray supports typed arrays
      endArray: targetPositions,
      onUpdate: () => (geom.attributes.position.needsUpdate = true),
    })
    return () => { tween?.kill() }
  }, [targetPositions, reducedMotion, startPositions])

  const tRef = useRef(0)
  useFrame((_, delta) => {
    if (reducedMotion) return
    tRef.current += delta
    const geom = geomRef.current
    const pos = geom.attributes.position.array as Float32Array
    for (let i = 0; i < pos.length; i += 3) {
      const n = (i / 3) * 0.17
      pos[i + 2] = 0.03 * Math.sin(tRef.current * 1.6 + n)
    }
    geom.attributes.position.needsUpdate = true
  })

  return (
    <points>
      <bufferGeometry ref={geomRef} />
      <pointsMaterial size={0.035} sizeAttenuation transparent opacity={0.95} />
    </points>
  )
}

export default function MarketIntegratorsHero({
  imgSrc,
  headline = 'Integrate everything. Beautifully.',
  subhead = 'Orchestrate data, automate workflows, and see the whole system.',
  cta = { label: 'Get a demo', href: '#contact' },
  density = 4,
}: {
  imgSrc: string
  headline?: string
  subhead?: string
  cta?: { label: string; href: string }
  density?: number
}) {
  const [positions, setPositions] = useState<Float32Array | null>(null)
  const [reduced, setReduced] = useState(false)
  const [isMobileLite, setIsMobileLite] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handle = () => setReduced(!!mq.matches)
    handle(); mq.addEventListener?.('change', handle)
    return () => mq.removeEventListener?.('change', handle)
  }, [])

  useEffect(() => {
    const small = window.innerWidth < 920 || window.devicePixelRatio > 1.8
    setIsMobileLite(small)
  }, [])

  useEffect(() => {
    let mounted = true
    logoToPoints(imgSrc, { density })
      .then((pts) => mounted && setPositions(pts))
      .catch(() => mounted && setPositions(new Float32Array()))
    return () => { mounted = false }
  }, [imgSrc, density])

  const showWebGL = positions && positions.length > 0 && !isMobileLite

  return (
    <section className="relative isolate min-h-[72vh] w-full overflow-hidden bg-background">
      {showWebGL && (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 55 }} className="absolute inset-0">
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 2, 4]} intensity={0.7} />
          <fog attach="fog" args={[0x000000, 8, 14]} />
          {positions && <MorphPoints targetPositions={positions} reducedMotion={reduced} />}
        </Canvas>
      )}

      {!showWebGL && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={imgSrc} alt="Market Integrators" className="max-h-[42vh] max-w-[70vw] opacity-90" />
        </div>
      )}

      <div className="relative z-10 mx-auto flex h-[72vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">{headline}</h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">{subhead}</p>
        <div className="mt-8 flex items-center gap-4">
          <a href={cta.href} className="group relative inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-medium text-primary-foreground shadow-lg transition hover:bg-primary/90">
            <span>{cta.label}</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 transition group-hover:translate-x-0.5">
              <path fill="currentColor" d="M5 12h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#learn" className="text-muted-foreground hover:text-foreground transition">Learn more</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(255,255,255,0.12)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background/70 to-transparent" />
    </section>
  )
}