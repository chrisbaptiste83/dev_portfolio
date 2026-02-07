import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const RetroComputer = () => {
  const group = useRef()

  // Materials
  const beige = new THREE.MeshStandardMaterial({ color: '#F5F5DC' })
  const dark_grey = new THREE.MeshStandardMaterial({ color: '#A9A9A9' })
  const black = new THREE.MeshStandardMaterial({ color: '#000000' })
  const screen = new THREE.MeshStandardMaterial({
    color: '#000000',
    emissive: '#00ff00',
    emissiveIntensity: 0.1,
  })

  return (
    <group ref={group}>
      {/* Monitor */}
      <mesh position={[0, 0, 0]} material={beige}>
        <boxGeometry args={[1.5, 1, 0.2]} />
      </mesh>
      <mesh position={[0, 0, -0.1]} material={screen}>
        <boxGeometry args={[1.3, 0.8, 0.1]} />
      </mesh>

      {/* Monitor Stand */}
      <mesh position={[0, -0.7, 0]} material={beige}>
        <boxGeometry args={[0.5, 0.4, 0.5]} />
      </mesh>

      {/* Tower */}
      <mesh position={[1.5, -0.2, 0]} material={beige}>
        <boxGeometry args={[0.5, 1.6, 1]} />
      </mesh>
      <mesh position={[1.5, 0.5, 0.5]} material={dark_grey}>
        <boxGeometry args={[0.4, 0.1, 0.2]} />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, -0.8, 0.6]} material={dark_grey}>
        <boxGeometry args={[1.5, 0.1, 0.8]} />
      </mesh>
    </group>
  )
}

export default RetroComputer
