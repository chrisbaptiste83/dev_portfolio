import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const Earth = () => {
  const earthRef = useRef()

  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group ref={earthRef}>
      {/* Earth sphere */}
      <mesh>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial
          color="#1e40af"
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>

      {/* Land masses (simplified) */}
      <mesh>
        <sphereGeometry args={[2.52, 32, 32]} />
        <meshStandardMaterial
          color="#22c55e"
          metalness={0.3}
          roughness={0.8}
          transparent
          opacity={0.6}
          wireframe
        />
      </mesh>

      {/* Atmosphere glow */}
      <mesh scale={1.1}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial
          color="#60a5fa"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Clouds layer */}
      <mesh>
        <sphereGeometry args={[2.55, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.2}
          wireframe
        />
      </mesh>
    </group>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas
