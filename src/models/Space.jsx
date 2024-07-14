
import  { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree} from '@react-three/fiber'
import { a } from '@react-spring/three'

import spaceBoy from '../assets/3d/space_boi.glb'
const Space = ({ isRotating, setIsRotating, setCurrentStage, ...props}) =>  {
  const spaceBoyRef = useRef();
  const { nodes, materials } = useGLTF(spaceBoy)

  const {gl, viewport} = useThree();

  const lastX = useRef(0)

  let rotationSpeed = useRef(0)

  const dampingFactor = 0.95;

  const handleMousePress = (e) => {
    e.stopPropagation()
    e.preventDefault();
    setIsRotating(true)

    const clientX = e.touches ? e.touches[0].clientX : e.clientX

    lastX.current = clientX
  }

  const handleMouseRelease = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsRotating(false)

  }

  const handleMouseMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating) {

      const clientX = e.touches ? e.touches[0].clientX : e.clientX

      const delta = (clientX - lastX.current) / viewport.width;
  
      spaceBoyRef.current.rotation.y += delta * 0.01 * Math.PI
  
      lastX.current = clientX
  
      rotationSpeed.current = delta * 0.001 * Math.PI
    };
  }

  const handleKeyboardPress = (e) => {
    if (e.key === 'ArrowRight') {
      if(!isRotating) setIsRotating(true)
      spaceBoyRef.current.rotation.y += 0.01 * Math.PI
      rotationSpeed.current = 0.0125
    }else if(e.key === 'ArrowLeft') {
        if(!isRotating) setIsRotating(true)
        spaceBoyRef.current.rotation.y -= 0.01 * Math.PI
        rotationSpeed.current = -0.0125
      }
    }
  

  const handleKeyboardKeyUp = (e) => {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false)
    }
  }


  const handleTouchEnd = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(false)
  }

  const handleTouchStart = () => {

    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

  }

  const handleTouchMove = () => {

    e.stopPropagation();
    e.preventDefault()

    if (isRotating) {
      const clientX = e.touches ? e.clientX[0].clientX : e.clientX
      const delta = (clientX - lastX.current) / viewport.width;
      
      spaceBoyRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI
    }

  }

  useEffect(() => {
    const canvas = gl.domElement
    canvas.addEventListener('pointerdown', handleMousePress);
    canvas.addEventListener('pointerup',  handleMouseRelease);
    canvas.addEventListener('pointermove', handleMouseMove)
    window.addEventListener('keydown', handleKeyboardPress)
    window.addEventListener('keyup', handleKeyboardKeyUp)
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('touchmove', handleTouchMove);



    return () => {

      canvas.removeEventListener('pointerdown', handleMousePress);
      canvas.removeEventListener('pointerdown',  handleMouseRelease);
      canvas.removeEventListener('pointermove', handleMouseMove)
      window.removeEventListener('keydown', handleKeyboardPress)
      window.removeEventListener('keyup', handleKeyboardKeyUp)
      canvas.removeEventListener('touchstart', handleTouchStart)
      canvas.removeEventListener('touchend', handleTouchEnd)
      canvas.removeEventListener('touchmove', handleTouchMove)
    }
    
  }, [gl, handleMousePress, handleMouseMove, handleMouseRelease])

  useFrame(() => {
    if(!isRotating) {
      rotationSpeed.current *= dampingFactor

      if(Math.abs(rotationSpeed) < 0.001) {
        rotationSpeed = 0
      }

      spaceBoyRef.current.rotation.y += rotationSpeed.current
    } else {
      const rotation = spaceBoyRef.current.rotation.y;

      const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    // Set the current stage based on the island's orientation
    switch (true) {
      case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
        setCurrentStage(1);
        break;
      default:
        setCurrentStage(1);
    }
    }
  })


  return (
    <a.group ref={spaceBoyRef} {...props} >
      <group scale={0.0184}>
        <group rotation={[-Math.PI / 2, 0, 1]} scale={100}>
          <mesh
            geometry={nodes.body_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            geometry={nodes.body_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
       
          <mesh
         
            geometry={nodes.Sphere002_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            geometry={nodes.Sphere002_Material002_0.geometry}
            material={materials['Material.002']}
          />
     
     
          <mesh
            geometry={nodes.Sphere007_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            
            geometry={nodes.Sphere007_Material002_0.geometry}
            material={materials['Material.002']}
          />
     
        <mesh
          geometry={nodes.waves_Material002_0.geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          geometry={nodes.waves1_Material002_0.geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[80, 80, 1.891]}
        />
        <mesh
          geometry={nodes.waves2_Material002_0.geometry}
          material={materials['Material.002']}
          position={[92.464, 15.529, 2.112]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[80, 80, 1.891]}
        />
        <mesh
           geometry={nodes.particles_Material002_0.geometry}
          material={materials['Material.002']}
          position={[489.69, 793.811, 355.293]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={20.408}
        />
        <mesh
          geometry={nodes.Sphere_Material001_0.geometry}
          material={materials['Material.001']}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh
          geometry={nodes.Sphere001_Material002_0.geometry}
          material={materials['Material.002']}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        <mesh
          geometry={nodes.Sphere004_Material002_0.geometry}
          material={materials['Material.002']}
          position={[375.469, 427.948, 0]}
          rotation={[-0.688, 0, 0]}
          scale={[104.129, 81.609, 0]}
        />
        <mesh
          geometry={nodes.Sphere005_Material001_0.geometry}
          material={materials['Material.001']}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh
          geometry={nodes.Sphere006_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        <mesh
          geometry={nodes.Sphere009_Material002_0.geometry}
          material={materials['Material.002']}
          position={[507.522, 667.594, -214.475]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          geometry={nodes.Sphere010_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-287.442, 585.792, -311.857]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          geometry={nodes.Sphere011_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-553.462, 331.074, -379.067]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.437}
        />
        <mesh
          geometry={nodes.Sphere003_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
        <mesh
          geometry={nodes.Sphere008_Material002_0.geometry}
          material={materials['Material.002']}
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
      </group>
    </a.group>
  )
}


export default Space
