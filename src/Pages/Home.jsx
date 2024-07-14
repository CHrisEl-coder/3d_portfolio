import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useState, useEffect } from 'react'
import   Loader  from '../Components/Loader'
import Space from '../models/Space'
import Sky from '../models/Sky'


import HomeContent from '../Components/HomeContent'



const Home = () => {


 const [currentStage, setCurrentStage] = useState(1)
  
 const [isRotating, setIsRotating] = useState(false);

  const adjustSpacePosition = () => {
      let spaceScale = null;

      let spacePosition = [0, -6, -10];

      let spaceRotation = [0, -1.2, 0];

      if (window.innerWidth < 768) {
        spaceScale = [0.9, 0.9, 0.9]
      } else {
        spaceScale = [1, 1, 1]
      }

      return [spaceScale, spacePosition, spaceRotation]
  }


  const [spaceScale, spacePosition, spaceRotation] = adjustSpacePosition();
  

  return (
    <section className='w-full h-screen relative'>

        <div className=' absolute left-0 right-0 top-28 flex items-center z-10 text-white justify-center'>
          {currentStage ? <HomeContent currentStage={currentStage} /> : <Loader />}
        </div>
      
         <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000}}>

           <Suspense fallback={<Loader />}>
              <directionalLight position={[1, 1, 1,]} intensity={2} />
              <hemisphereLight skyColor='#b1e1fff' groundColor='#000000' />
              <ambientLight intensity={0.5}/>
            

              

              <Sky 
              
              isRotating={isRotating}/>


              <Space 
                position = {spacePosition}
                scale = {spaceScale}
                rotation = {spaceRotation}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage} 
                />
           
           </Suspense>
           
         </Canvas>
    </section>
  )
}

export default Home
