import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <section className=' flex justify-center items-center'>
      <Link to='/contact' className=' btn mt-8 font-bold font-mono text-sm'> Hire Me </Link>
    </section>
  )
}

export default Cta