import React from 'react'

import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
     
    <div className=' flex justify-center items-center'>
      <div className=' w-20 h-20 border-2 border-opacity-20 border-red-700 border-t-red-700 rounded-full animate-spin' />
    </div>
    </Html>
  )
}

export default Loader