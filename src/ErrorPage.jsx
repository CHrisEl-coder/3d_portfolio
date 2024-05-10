import React from 'react'

import { useRouteError, Link } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
  return (
    <section className='w-full h-screen relative'>
      <div className=' absolute top-40 left-0 right-0 flex flex-col justify-center items-center leading-6 gap-12'>
        <h1 className='font-bold font-poppins '>OOps !</h1>
        <p className='text-sm '> Seems like there is a problem loading the page, go back to <Link to={'/'} className='font-bold text-blue-950 underline'>Home</Link> </p>
        <p className='font-semibold text-red-800 '>
          <i> {error.statusText || error.message} </i>
        </p>
      </div>
    </section>
  )
}

export default ErrorPage