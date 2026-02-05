import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import * as THREE from 'three'

// Floating geometric shapes
const FloatingShapes = () => {
  const groupRef = useRef()
  const shapes = useRef([])

  // Create shape data once
  if (shapes.current.length === 0) {
    for (let i = 0; i < 15; i++) {
      shapes.current.push({
        position: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
        scale: 0.1 + Math.random() * 0.3,
        speed: 0.2 + Math.random() * 0.3,
        type: Math.floor(Math.random() * 3)
      })
    }
  }

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {shapes.current.map((shape, i) => (
        <FloatingShape key={i} {...shape} index={i} />
      ))}
    </group>
  )
}

const FloatingShape = ({ position, rotation, scale, speed, type, index }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + index) * 0.3
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.3
    }
  })

  const color = index % 3 === 0 ? '#9b1b30' : index % 3 === 1 ? '#7a1526' : '#5c1018'

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      {type === 0 && <octahedronGeometry args={[1, 0]} />}
      {type === 1 && <tetrahedronGeometry args={[1, 0]} />}
      {type === 2 && <icosahedronGeometry args={[1, 0]} />}
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  )
}

// Animated ring
const AnimatedRing = ({ radius, speed, color, lineWidth }) => {
  const ringRef = useRef()

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * speed
      ringRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5
    }
  })

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.3}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      style={{ width: '100%', height: '100%' }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-3, 2, 2]} intensity={0.3} color="#9b1b30" />

      {/* Animated rings */}
      <AnimatedRing radius={2} speed={0.2} color="#9b1b30" />
      <AnimatedRing radius={2.5} speed={-0.15} color="#7a1526" />
      <AnimatedRing radius={3} speed={0.1} color="#5c1018" />

      {/* Floating shapes */}
      <FloatingShapes />

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
