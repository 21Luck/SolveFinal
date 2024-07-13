import React from 'react'
import { itemsList, Services } from '../constants/data'
import { another, camera,code,solve } from '../assets/images'
import {  CheckCircle2 } from 'lucide-react'
const services = () => {
  return (
    <div>
      <div className=" mt-10">
        <h1 className='text-xl text-yellow-700 mx-auto text-center'> Services</h1>
      </div>
      <div className=" mt-4">
        <h2 className='text-3xl sm:text-4xl md:text-5xl text-n-3 text-center'>
          <span className='mr-2'>Exclusive </span>
          <span className='textg  mr-2'>services</span>
          on your finger tips!
        </h2>
      </div>
      <div className="flex flex-wrap p-10 border-b-2 border-n-6 ">
        {Services.map((item) => (
          <div  key={item.id} className="w-full sm:w-1/2 md:w-1/3  sm:p-2  ">
            <div className="mr-2">
              {/* <img src={item.icon} alt="" className='w-32 h-5 text-white ' /> */}
            </div>
            <div className="">
              <h2 className="text-lg text-n-3">{item.title}</h2>
              <p className="text-sm text-n-4 mt-2 mb-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <h2 className="h2">
          Software 
          <span className="textg ml-2">Deveploment</span>
        </h2>
        <div className="flex  flex-wrap mt-4 md:mt-8 ">
          <div className="w-full sm:w-1/2 px-3">
          <img src={code} alt="" className=" " />
          </div>
          <div className=" w-full sm:w-1/2 mt-6 sm:mt-0 md:mt-10">
            {itemsList.map((item) => (
              <div className="flex ml-5 py-5 sm:py-0 md:py-5">
                <div className=" mr-5">
                  <CheckCircle2 className='h-8 w-8  bg-yellow-700  rounded-full' />
                </div>
                <div className="">
                <h4 className="text-lg text-n-3">{item.title}</h4>
                <p className="text-sm text-n-4 ml-2">
                  {item.description}
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default services
