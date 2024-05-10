import React from 'react'
import { NavLink } from 'react-router-dom'

import glasses from '../assets/images/glasses.png'
import project from '../assets/images/project.png'
import arrow from '../assets/icons/arrow.png'
import web from '../assets/images/web.png'
import lead from '../assets/images/lead.png'
import chat from '../assets/icons/chat.png'
import about from '../assets/icons/about.png'





const HomeContent = ({currentStage}) => {


    const ContentBox = ({text, link, btnText, src, icon}) => (
        <div className=' bg-slate-100 py-4 px-4 text-red-950 rounded-lg relative opacity-90'>
            <div className=' flex sm:text-xl sm:leading-snug'>
                <p className=' max-w-sm text-sm font-semibold font-poppins mx-5 my-5'> {text} </p>
                <img src={src} className=' h-28'/>
            </div>
         
            <NavLink to={link} className=' absolute bottom-1 left-1 border border-red-900 rounded-lg py-2 px-8 font-bold text-sm hover:bg-red-950 hover:border-none hover:text-white transition-all delay-100 flex gap-4'>
              {btnText}
              <img src={icon} className=' h-5 w-5'/>
            </NavLink>
        </div>
      );

  const content = {
    1: (
        <div className=' font-mono py-4 px-8 rounded-md bg-slate-200 text-red-950 flex opacity-90'>
        
            <p   className=' sm:text-lg sm:leading-snug text-sm my-8 mx-5 max-w-sm'>
                Hi, I,m <span className=' font-bold font-poppins'> Christian </span>  <br/>
                A <span className=' font-semibold'> Website Developer,</span> <span className=' font-semibold'> Graphics Designer,</span> & <span className=' font-semibold'> Content Writer.</span>
                
            </p>

            <img src={glasses} className=' h-28' />
        </div>
    ),
    2: (
        <ContentBox
          text='Have Worked On a lot of project and with companies to enhance and make stunning user friendly designs and contents.'
          link='/projects'
          btnText='My Portfolio'
          src={project}
          icon={arrow}
        />
    ),
    3: (
        <ContentBox
          text='Designed lots of cool apps while on the job, picked up a lot of cool skills.'
          link='/about'
          btnText='Skills'
          src={lead}
          icon={about}
        />
    ),
    4: (
        <ContentBox
          text={`Need a Website Dev to bring to life your wildest imagination i'm just a few clicks away.`}
          link='/contact'
          btnText={`Let's Talk`}
          src={web}
          icon={chat}
        />
    )
  }

 
  return content[currentStage] || null
}

export default HomeContent