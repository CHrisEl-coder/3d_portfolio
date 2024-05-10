import React from 'react'
import { projects } from '../data'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import Cta from '../Components/Cta'
const Projects = () => {
  return (
    <section className=' max-container'>

       <h1 className=' head-text '> My <span className=' font-semibold drop-shadow red-gradient_text'> Projects </span></h1>
      <div className=' mt-5 flex flex-col gap-3 text-slate-500 '>
        <p className=' text-sm'>
           {`Over the years i have learnt, relearn and squashed alot of bugs, During my journey i have built alot of projects, written a lot of contents and made a lot designs. But this few are the ones am delighted to showcase ${'( Cause I Have Squashed  A Lot Of In Them)'} . most of them are open sourced, if you see stuff that piques your interest feel free to explore the codebase and contribute your ideas, your contribution is highly valued!`}
        </p>
      </div>
      <div className=' flex flex-wrap my-20 gap-16'>
        {projects.map((project, index) => (
          <div className=' lg:w-[400px] w-full ' key={project.name}>
             <div className=' block-container w-12 h-12'>

                <div className={`btn-back rounded-xl ${project.theme}`}/>

                <div className=' btn-front flex justify-center items-center rounded-xl'> 
                   <img 
                     src={project.iconUrl}
                     alt='project icon'
                     className=' w-1/2 h-1/2 object-contain' />
                </div>
             </div>

                <div className=' mt-5 flex flex-col'>
                   <h3 className=' text-2xl font-poppins font-semibold'>{project.name}</h3>

                   <p className=' text-slate-500 mt-5 text-sm'>{project.description}</p>

                   <div className=' flex mt-5 text-md gap-2 items-center'>
                       <Link to={project.link} target='_blank' rel='noopener noreferrer' className=' font-semibold text-red-900  text-sm'>
                           Live Link
                       </Link>

                       <img 
                         src={arrow}
                         alt='arrow'
                         className=' h-2 w-2 object-contain' 
                       />
                   </div>
                </div>

             </div>
   
        ))}
      </div>

      <hr className=' bg-slate-200' />

      <Cta />
    </section>
  )
}

export default Projects