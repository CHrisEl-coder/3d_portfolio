import React from 'react'

import NavBar from '../Components/NavBar'

import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
     <NavBar />
     <div className=' w-full'>
        <Outlet />
     </div>
    </>
  )
}

export default App