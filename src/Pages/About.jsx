import React from 'react'
import { skills, experiences } from '../data/index.js'
import Cta from '../Components/Cta.jsx';
import glasses from '../assets/images/glasses.png'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
const About = () => {

  return (
    <section className='max-container'>
        <div className=' flex'>
           <h1  className=' head-text'>
                Hi, I'm <span className=' red-gradient_text font-semibold drop-shadow'> Chris </span>
           </h1> 

           <img src={glasses} alt='glasses' className=' w-10 h-10 mx-5 rounded-full'/>
        </div>
        

        <div className=' mt-5 flex flex-col text-slate-500 gap-3'>
           <p className=' text-sm max-w-md'>
              Techie based in Nigeria, Specialized in Web-Development, Content-Writing, and Hands-on Problem Solving, filled with the zeal to learn more and a team player.
           </p>
        </div>

        <div className=' flex flex-col py-10'>
           <h3 className=' subhead-text'>
             My Skills
           </h3> 

           <div className=' mt-16 gap-12 flex flex-wrap' >
             {skills.map((skill) => (
              <div className=' w-20 h-20 block-container' key={skill.key}>
              <div className=' btn-back rounded-xl'/>
                <div className=' btn-front rounded-xl flex justify-center items-center'>
                  <img 
                    src={skill.imageUrl}
                    alt={skill.name}
                    
                    className=' w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
             ))}
           </div>
        </div>

        <div className=' mt-12 flex'>

           <h3 className=' subhead-text'> Experience </h3>

          <VerticalTimeline>
             {experiences.map((experience) => (
              <VerticalTimelineElement 
                key={experience.company_name} 
                icon={<div className=' flex justify-center items-center w-full h-full'>
                     <img src={experience.icon} alt={experience.company_name} className='w-[100%] h-[10s0%] object-contain' />
                  </div>}
                date={experience.date} 
                  contentStyle={{
                  borderBottom: '8px',
                  boxShadow: 'none',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  
                }}

                iconStyle={{
                  background: experience.iconBg,
                  width: '40px',
                  height: '40px'
                }}
                >

                
                 <div>
                    
                    <h3 className=' text-black-500 font-poppins font-semibold text-xl'>{experience.title}</h3>
                    <p className=' font-medium text-sm font-mono text-black-500' style={{margin:0}}> { experience.company_name }</p>

                    <div>
                       <ul className=' my-5 space-y-2 ml-5 list-disc'>

                          {experience.points.map((point, index) => (
                            <li className=' text-black-500/50 font-normal pl-1 text-xs' key={`experience-points-${index}`}>
                               {point}
                            </li>
                        
                          ))}
                         
                       </ul>
                    </div>

                  
                 </div>
              </VerticalTimelineElement>
             ))}
          </VerticalTimeline>
           
        </div>

        <hr className=' border-slate-200' />

        <Cta />
      
      
    </section>
  )
}

export default About