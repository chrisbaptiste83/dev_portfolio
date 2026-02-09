import React, { useMemo, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const getStarCount = () => {
  if (typeof window === 'undefined') return 3500

  const isSmallScreen = window.innerWidth < 768
  const memory = navigator.deviceMemory || 4

  let count = isSmallScreen ? 2200 : 3600

  if (memory <= 4) count = Math.min(count, 2600)
  if (memory <= 2) count = Math.min(count, 1800)

  return count
}

const Stars = (props) => {
  const ref = useRef()
  const sphere = useMemo(() => {
    const count = getStarCount()
    return random.inSphere(new Float32Array(count), { radius: 1.2 })
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#9b1b30"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
