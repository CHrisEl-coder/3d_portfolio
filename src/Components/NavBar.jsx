import { NavLink } from 'react-router-dom'
import { SiHomebridge } from "react-icons/si";
import { SlBriefcase, SlUser} from "react-icons/sl";
import { useLocation } from 'react-router-dom'


const NavBar = () => {

   const location = useLocation();

    return (
         <div>
               <header className={location.pathname === '/' ? ` relative flex justify-end p-2` : ' relative flex justify-end p-2 bg-white'}>
                  <NavLink to={'/'} className=' absolute left-0 top-0 -translate-y-12 z-10'>
                     <img src='logo.png' className=' w-36'/>
                  </NavLink>

               

                  <nav className=' py-1 nav-container'>
                     <ul className='flex gap-7'>
                        <li 
                           className={location.pathname === '/' ? 'nav-transparent'  : 'nav-white'}>
                              <NavLink 
                              to={'/'} 
                              className= {({ isActive }) => isActive ?' active nav' : 'nav'}> 
                              <i className='bg-black p-2 rounded-full'> <SiHomebridge className='nav_icn'/> </i>
                              
                              <span className='nav_txt'> Home</span> 
                              </NavLink>
                           </li>
                        
                           <li 
                              className={location.pathname === '/' ? 'nav-transparent ' : ' nav-white'}>

                              <NavLink 
                                 to={'/about'} 
                                 className= {({ isActive }) => isActive ?' nav active' : ' nav'}>
                                 <i className='bg-black rounded-full p-2'> <SlUser /> </i>
                                 
                                 <span className='nav_txt'> About </span>
                              </NavLink>

                           </li>


                           <li 
                              className={location.pathname === '/' ? '' :  'nav-white'}>
                              <NavLink 
                                 to={'/projects'} 
                                 className= {({ isActive }) => isActive ?' active nav' : ' nav'}>
                                 <i className=' bg-black p-2 rounded-full'>  <SlBriefcase /> </i>
                               
                                 <span className='nav_txt'>Projects</span>
                              </NavLink>
                           </li>

                     
                     </ul>

                  </nav>
               </header>
         </div>
    )
}

export default NavBar