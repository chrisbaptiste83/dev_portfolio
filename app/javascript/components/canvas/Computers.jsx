import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Preload, Float } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'
import RetroComputer from './RetroComputer'

const Computers = () => {
  const computer = useRef()
  const light = useRef()

  const [{ rotation }, set] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  useFrame(({ viewport, mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2

    light.current.position.set(x, y, 3)
    computer.current.rotation.set(y / 100, x / 100, 0)
  })

  return (
    <group>
      <a.group ref={computer} rotation={rotation}>
        <Float speed={0.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <RetroComputer />
        </Float>
      </a.group>
      <pointLight ref={light} distance={5} intensity={5} color="white" />
    </group>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 7], fov: 50 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      style={{ width: '100%', height: '100%' }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
