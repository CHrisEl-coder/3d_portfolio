import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import nightSky from '../assets/3d/Sky.glb';
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating }) => {
    const sky = useGLTF(nightSky)

    const skyRef = useRef();

    useFrame ((_, delta) => {
      if(isRotating) {
        skyRef.current.rotation.y += 0.3 * delta
      }
    })
    return (
        <mesh ref={skyRef} >
          <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky;