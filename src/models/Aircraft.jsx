import React, { useEffect, useRef } from 'react'

import { useAnimations, useGLTF } from '@react-three/drei'

import AircraftModel from '../assets/3d/Aircraft.glb'
import { useFrame } from '@react-three/fiber'
import { createRoutesFromElements } from 'react-router-dom'


const Aircraft = ({ isRotating, ...props }) => {
    const { scene } = useGLTF(AircraftModel)

    const craftRef = useRef()

    useFrame(({ clock, camera }) => {
      // Update the Y position to simulate bird-like motion using a sine wave
      craftRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
  
      // Check if the bird reached a certain endpoint relative to the camera
      if (craftRef.current.position.x > camera.position.x + 10) {
        // Change direction to backward and rotate the bird 180 degrees on the y-axis
        craftRef.current.rotation.y = Math.PI;
      } else if (craftRef.current.position.x < camera.position.x - 10) {
        // Change direction to forward and reset the bird's rotation
        craftRef.current.rotation.y = 0;
      }
  
      // Update the X and Z positions based on the direction
      if (craftRef.current.rotation.y === 0) {
        // Moving forward
        craftRef.current.position.x += 0.01;
        craftRef.current.position.z -= 0.01;
      } else {
        // Moving backward
        craftRef.current.position.x -= 0.01;
        craftRef.current.position.z += 0.01;
      }
    }); 
    


   
  return (
    <mesh {...props} ref={craftRef}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Aircraft