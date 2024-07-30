import React from 'react'

import { Home } from '../Pages'
import { useLocation } from 'react-router-dom'

import NavBar from '../Components/NavBar'

import { Outlet } from 'react-router-dom'

const App = () => {
   const location = useLocation();
  return (
    <div className=' home_container'>
     <NavBar />
     { location.pathname === '/' ? <Home /> : <Outlet /> }
    </div>
  )
}

export default App