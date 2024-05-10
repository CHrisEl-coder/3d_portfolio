import { NavLink } from 'react-router-dom'

import { useLocation } from 'react-router-dom'

const NavBar = () => {

   const location = useLocation();

    return (
        <div className=' absolute top-0 z-10 w-full'>
         <header className=' relative flex justify-between px-4 py-3'>
           <NavLink to={'/'} className={location.pathname === '/' ? 'font-bold font-poppins w-12 h-12 rounded-full shadow-inner shadow-white text-center py-3' : 'font-bold font-poppins w-12 h-12 rounded-full shadow-md text-center py-3'}>
             <p className=' red-gradient_text'>CE</p>
           </NavLink>
         

           <nav className=' py-1'>
           <ul className='flex gap-7'>
             <li className={location.pathname === '/' ? 'w-20 h-8 py-1 text-center rounded-lg shadow-inner shadow-rose-100 duration-500 hover:-translate-y-1' 
             : 'w-20 h-8 py-1 text-center rounded-lg shadow-md duration-500 hover:-translate-y-1'}>
                <NavLink to={'/'} className= {({ isActive }) => isActive ?' transition-all duration-500 transform active:-translate-y-2.5 font-semibold font-mono text-amber-500' : 'font-semibold text-red-800 font-mono tracking-wide'}>Home</NavLink>
             </li>
             <li className={location.pathname === '/' ? 'w-20 h-8 py-1 text-center rounded-lg shadow-inner shadow-rose-100 duration-500 hover:-translate-y-1' 
             : 'w-20 h-8 py-1 text-center rounded-lg shadow-md duration-500 hover:-translate-y-1'}>
                <NavLink to={'/about'} className= {({ isActive }) => isActive ?' transition-all duration-500 translate-y-1 font-semibold font-mono text-amber-500' : 'font-semibold text-red-800 font-mono tracking-wide'}>About</NavLink>
             </li>

             
           </ul>
           </nav>
           </header>
        </div>
    )
}

export default NavBar