import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const Computers = ({ isMobile }) => {
  // Create a simple 3D computer model using primitives
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      {/* Monitor */}
      <group position={[0, -1.5, 0]} rotation={[0, 0, 0]}>
        {/* Monitor screen */}
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[2.5, 1.5, 0.1]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Screen display */}
        <mesh position={[0, 1.5, 0.06]}>
          <boxGeometry args={[2.3, 1.3, 0.01]} />
          <meshStandardMaterial color="#915eff" emissive="#915eff" emissiveIntensity={0.3} />
        </mesh>

        {/* Monitor stand */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[0.3, 1, 0.3]} />
          <meshStandardMaterial color="#2d2d2d" metalness={0.6} roughness={0.4} />
        </mesh>

        {/* Monitor base */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.1, 32]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.7} roughness={0.3} />
        </mesh>

        {/* Keyboard */}
        <mesh position={[0, 0.05, 1]}>
          <boxGeometry args={[1.8, 0.1, 0.6]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.5} />
        </mesh>

        {/* Mouse */}
        <mesh position={[1.2, 0.05, 0.8]}>
          <capsuleGeometry args={[0.1, 0.15, 4, 8]} />
          <meshStandardMaterial color="#2d2d2d" metalness={0.5} roughness={0.5} />
        </mesh>
      </group>
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
