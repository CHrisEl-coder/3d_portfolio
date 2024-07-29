import { glasses } from "../assets/images"
import {Socials} from '../Components'
import { Link, NavLink } from 'react-router-dom'
import { Suspense } from "react"
import { Loader } from "@react-three/drei"


const Home = () => {

  return (
    <section className="home">
       <Suspense fallback={<Loader />}>
          <div className="hero">

              <article>
                
                <p>
                    <i> Hello, </i>
                    <br/>
                    I am <strong> Thomas Christian </strong> a Mern Stack Web Designer/Developer.
                    <br/>
                    <span>
                      <strong>A</strong>m your favorite neighborhood web dev, am a goal driven person, eager to learn and adapt, with a keen eye to details (peter parkers sixth sense ain't got nothing on me).
                    </span>
                </p>
                
                 <img src={glasses} alt="icon" />
              </article>  
              <div className="cta-btn"> 
              
                  <a href="/resume.docx" className="cv" download='resume.docx'> Download CV</a> 
                  <NavLink to='contact'><button className="cont"> Contact Me</button> </NavLink>
              
              </div>
          </div>

          

          <div className="sc-container">
              <Socials />
          </div>
       </Suspense>
       
      
      
    </section>
  )
}

export default Home