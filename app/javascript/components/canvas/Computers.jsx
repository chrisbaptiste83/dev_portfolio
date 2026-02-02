import React, { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'

// Desktop PC Component - simplified for reliability
const DesktopPC = ({ isMobile }) => {
  const groupRef = useRef()

  // Gentle rotation animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  const scale = isMobile ? 0.5 : 0.7

  return (
    <group ref={groupRef} scale={scale} position={[0, isMobile ? -1.5 : -1, 0]}>
      {/* Desk */}
      <mesh position={[0, -1.5, 0]} receiveShadow>
        <boxGeometry args={[5, 0.15, 2.5]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>

      {/* PC Tower */}
      <group position={[-1.8, -0.5, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.45, 1.4, 0.8]} />
          <meshStandardMaterial color="#0f0f1a" metalness={0.5} roughness={0.5} />
        </mesh>
        {/* Power LED */}
        <mesh position={[0.23, 0.5, 0]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#915eff" emissive="#915eff" emissiveIntensity={2} />
        </mesh>
        {/* Front accent line */}
        <mesh position={[0.23, -0.4, 0]}>
          <boxGeometry args={[0.01, 0.3, 0.6]} />
          <meshStandardMaterial color="#915eff" emissive="#915eff" emissiveIntensity={1} />
        </mesh>
      </group>

      {/* Monitor */}
      <group position={[0.2, 0.2, -0.5]}>
        {/* Monitor frame */}
        <mesh castShadow>
          <boxGeometry args={[2.4, 1.5, 0.1]} />
          <meshStandardMaterial color="#0f0f1a" metalness={0.6} roughness={0.4} />
        </mesh>
        {/* Screen */}
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[2.2, 1.3, 0.01]} />
          <meshStandardMaterial
            color="#1a0a30"
            emissive="#915eff"
            emissiveIntensity={0.3}
          />
        </mesh>
        {/* Monitor stand */}
        <mesh position={[0, -0.95, 0.2]}>
          <boxGeometry args={[0.15, 0.4, 0.15]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
        {/* Monitor base */}
        <mesh position={[0, -1.1, 0.3]}>
          <boxGeometry args={[0.6, 0.05, 0.4]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
      </group>

      {/* Keyboard */}
      <group position={[0.2, -1.35, 0.5]}>
        <mesh castShadow>
          <boxGeometry args={[1.5, 0.08, 0.5]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
        {/* Keyboard glow */}
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[1.4, 0.01, 0.4]} />
          <meshStandardMaterial color="#915eff" emissive="#915eff" emissiveIntensity={0.3} transparent opacity={0.5} />
        </mesh>
      </group>

      {/* Mouse */}
      <group position={[1.2, -1.38, 0.5]}>
        <mesh castShadow>
          <boxGeometry args={[0.12, 0.05, 0.2]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
      </group>

      {/* Mousepad */}
      <mesh position={[1.2, -1.42, 0.5]}>
        <boxGeometry args={[0.5, 0.02, 0.4]} />
        <meshStandardMaterial color="#0a0a15" />
      </mesh>
    </group>
  )
}

// Simple loading spinner
const Loader = () => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#915eff" wireframe />
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
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={<Loader />}>
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
        />
        <pointLight position={[-3, 2, 2]} intensity={0.5} color="#915eff" />
        <pointLight position={[3, 2, 2]} intensity={0.3} color="#ffffff" />

        {/* 3D Computer */}
        <DesktopPC isMobile={isMobile} />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
