import React from 'react';
import { projects, graphics, writeUp, socialLinks } from '../data';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import { Cta } from '../Components';
const Projects = () => {
  return (
    <section className=' max-container bg-white'>

       <h1 className=' head-text '> My <span className=' font-semibold drop-shadow red-gradient_text'> Projects </span></h1>
      <div className=' mt-5 flex flex-col gap-3 text-slate-500 '>
        <p className=' text-sm'>
           {`Over the years i have learnt, relearnt and squashed alot of bugs, During my journey i have built alot of projects, written a lot of contents and made a lot of designs. most of them are open sourced. If you see stuff that piques your interest feel free to explore the codebase and contribute your ideas, your contribution is highly valued!`}
        </p>
      </div>
      <div className=' flex flex-wrap my-20 gap-16' key='pr'>
        {projects.map((project) => (
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
         {
         socialLinks.map((link, index) => ( 
            link.name === 'GitHub' ? <Link to={link.link} key={index} className=' btn-bg-black w-28 flex gap-2 rounded-md text-white p-3 mb-2 font-bold text-md'><img src={link.iconUrl} className='w-6'/>{link.name}</Link> : ''
         ))
         }
      <hr className=' bg-slate-200' />

      <div className='' key='gr'>
         <div className='graphics-container'>
            {
              graphics.map((graphic, index) => (
                <div className='graphics-div' key={index}>
                   <img
                    src={graphic.imageUrl}
                    alt={graphic.name}
                    className='graphics-image'
                   />

                   <h2 className=' font-poppins font-semibold mt-8'> {graphic.name} </h2>
                   <p className=' text-sm text-slate-500 leading-snug mt-5'> {graphic.description} </p>
                </div>
              ))
            }
         </div>

         <button className=' btn'>
          <Link to='https://www.canva.com/design/DAGEpCh4f3U/fgtYv8j5myYPLj1-buNRVw/edit' target='_blank' rel='noreferrer noopener'> View More </Link>
         </button> 
      </div>



      <div className=' flex flex-wrap my-20 gap-16' key='wr'>
        {writeUp.map((write) => (
          <div className=' lg:w-[400px] w-full ' key={write.key}>
             <div className=' block-container w-12 h-12'>

                <div className={`btn-back rounded-xl `}/>

                <div className=' btn-front flex justify-center items-center rounded-xl'> 
                   <img 
                     src={write.icon}
                     alt='project icon'
                     className=' w-1/2 h-1/2 object-contain' />
                </div>
             </div>

                <div className=' mt-5 flex flex-col'>
                   <h2 className=' text-2xl font-poppins font-semibold'>{write.title}</h2>

                   <p className=' text-slate-500 mt-5 text-sm'>{write.description}</p>

                   <div className=' flex mt-5 text-md gap-2 items-center'>
                       <Link to={write.link} target='_blank' rel='noopener noreferrer' className=' font-semibold text-red-900  text-sm'>
                           Read More...
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

      <Cta />
    </section>
  )
}

export default Projects