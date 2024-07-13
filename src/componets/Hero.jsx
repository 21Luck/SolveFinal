import React from 'react'
import { ReactTyped } from 'react-typed'
import { video1 } from '../assets/images'

const Hero = () => {
  return (
    <div>
      <div className="py-10">
            <h1 className='h1 text-center'>
            Exptional & Sustainable
            <br />
            <span className="textg">
                <ReactTyped strings={['Succes','Profit','Growth']} typeSpeed={100} backSpeed={100} loop />
            </span>
            for Businesses.
            </h1>
            <h2 className="text-center mt-4 text-n-3 text-sm sm:text-lg font-medium tracking-widest  max-w-[470px] mx-auto">
            Partner with us to see Measurable Growth and significant return on investment!
            </h2>
      </div>
      <div className="dcenter -mt-4">
            <button className='btn1 '>Get Started</button>
      </div>
      <div className="mt-8 px-5">
            <video src={video1}  muted autoPlay loop className='border-2 border-yellow-700 rounded-xl'></video>
      </div>
    </div>
  )
}

export default Hero
