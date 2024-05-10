
import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import scene from '../assets/3d/alienAnimal.glb'

const Alien = ({ currentAnimation, ...props}) => {
  const alienRef = useRef()
  const { nodes, materials, animations } = useGLTF(scene)
  const { actions } = useAnimations(animations, alienRef)
  console.log(actions)

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());
    if(actions[currentAnimation]) {
      actions[currentAnimation].play()
    }
  }, [actions, currentAnimation])
  return (
    <group ref={alienRef} {...props} >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
          <group name="Test_Alien-Animal-Blender_281fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Alien-Animal_Texturetest"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Area"
                  position={[-1059.852, 1880.098, 1670.509]}
                  rotation={[0.415, 0.713, 1.042]}
                  scale={100}>
                  <group name="Object_6" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_7" />
                  </group>
                </group>
                <group name="Eyes-Alien-Animal" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              
                <group name="Rig-Alien-Animal" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_12">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials.postprocessing_textures}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <skinnedMesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials['Eye-Alien-Animal']}
                      skeleton={nodes.Object_17.skeleton}
                    />
                    <skinnedMesh
                      name="Object_18"
                      geometry={nodes.Object_18.geometry}
                      material={materials['Red-Eye-Alien-Animal']}
                      skeleton={nodes.Object_18.skeleton}
                    />
                    <skinnedMesh
                      name="Object_274"
                      geometry={nodes.Object_274.geometry}
                      material={materials['Saliva-Alien-Animal']}
                      skeleton={nodes.Object_274.skeleton}
                    />
                    <skinnedMesh
                      name="Object_275"
                      geometry={nodes.Object_275.geometry}
                      material={materials['Red-Saliva-Alien-Animal']}
                      skeleton={nodes.Object_275.skeleton}
                    />
                    <group name="Object_14" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_16" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_273" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                  </group>
                </group>
                <group name="Saliva-Alien-Animal" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}


export default Alien