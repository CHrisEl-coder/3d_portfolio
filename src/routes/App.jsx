import React from 'react'

import NavBar from '../Components/NavBar'

import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className=' home_container'>
     <NavBar />
     <Outlet />
    </div>
  )
}

export default App