import { Suspense, useState } from 'react'
import { BsSend } from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Alien from '../models/Alien'
import Loader from '../Components/Loader'
import useAlert from '../hooks/useAlert'
import Alert from '../Components/Alert'


const Contact = () => {

  const [form, setForm] = useState({ name: '', email: '', message: ''})

  const [isLoading, setIsLoading] = useState(false)

  const [currentAnimation, setCurrentAnimation] = useState('Rig-Alien-Animal|Idel_Normal')
  const{alert, showAlert, hideAlert} = useAlert();

  const handleOnChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handleOnFocus = () => {
    setCurrentAnimation('Rig-Alien-Animal|Walk-Cycle')
  }
  const handleonBlur = () => {
    setCurrentAnimation('Rig-Alien-Animal|Idel_Normal')
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    setCurrentAnimation('Rig-Alien-Animal|Run-Cycle')



    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        to_name: 'Christian Edwin',
        from_name: name,
        from_email: email,
        to_email: 'edwinchristian97@gmail.com',
        message: message,
        reply_to: 'edwinchristian97@gmail.com'
        
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setIsLoading(false)
      showAlert({
        show: true,
        text: 'Message Sent Successfully',
        type: 'success'
      })
      setTimeout(() => {
        hideAlert()
        setCurrentAnimation('Rig-Alien-Animal|Idel_Normal')
        setForm({name: '', email: '', message: ''})

      }, [3000]);
      

      //TODO: SET ALERT
    }).catch((err) => {
      setCurrentAnimation('Rig-Alien-Animation|Idle_Aggressive')
      console.log(err)
      showAlert({
        show: true,
        text: 'Message Not Sent',
        type: 'danger'
      })
    })

  }

  const { name, email, message } = form


  return (
    <section className='relative flex lg:flex-row flex-col mt-7 max-container'>
    {alert.show && <Alert {...alert} />}

      <div className=' flex-1 flex min-w-[50%] flex-col'>
         <h1 className='head-text red-gradient_text'> Get in Touch </h1>
         

         <form className=' w-full flex flex-col mt-14 gap-7' onSubmit={handleOnSubmit}>
        
           <label className=' text-black-500 font-semibold font-mono'> 
             Name: 
             <input 
               type='text'
               required
               name='name'
               placeholder='John Doe'
               className='input outline-none'
               value={name}
               onBlur={handleonBlur}
               onChange={handleOnChange}
               onFocus={handleOnFocus}
               

             />
             </label>

             <label className=' text-black-500 font-semibold font-mono'> 
             Email: 
             <input 
               type='email'
               required
               name='email'
               placeholder='JohnDoe@gmail.com'
               className='input outline-none'
               value={email}
               onBlur={handleonBlur}
               onChange={handleOnChange}
               onFocus={handleOnFocus}

             />
             </label>
             
             <label className=' text-black-500 font-semibold font-mono'> 
             Message: 
             <textarea 
               type='text'
               name='message'
               placeholder='Let Me Know How I Can Help You.'
               className='textarea outline-none'
               value={message}
               onBlur={handleonBlur}
               onChange={handleOnChange}
               onFocus={handleOnFocus}

             />
             </label>            

             <button 
               type='submit'
               className=' bg-gradient-to-r from-[#fd553f] to-[#6b0404f5] py-1 rounded-md text-white font-semibold font-mono text-sm flex justify-center items-center'>
              { isLoading ? 'Sending ....' : 'Send a Message' }
              { isLoading ? '' : <BsSend className=' mx-5 h-6 font-bold mt-1' /> }
              
             </button>
           
         </form>
        
      
      </div>

      <div className=' lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>

         <Canvas 
         camera={{
          position: [0, 0, 5],
          far: 1000,
          near: 0.1,
          fov: 75
         }}>

           <directionalLight intensity={2.5} position={[0, 0, 1]}/>
           <ambientLight intensity={0.5} />
           <Suspense fallback={<Loader/>}>
              <Alien
              
              position={[0.5, 0.2, 0]}
              scale={[1, 1, 1]}
              rotation={[12.9, -0.6, 0]}
              currentAnimation={currentAnimation}
              />
           </Suspense>
         </Canvas>
      
      </div>
    </section>
  )
}

export default Contact