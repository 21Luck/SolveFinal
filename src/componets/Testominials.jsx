import React from 'react'
import { Clients, Logos } from '../constants/data'
import { planets, sumic, yo } from '../assets/images'
const Testominials = () => {
  return (
    <div className=" mt-10">
      <div className="">
        <h2 className="h2">
          <span className="mr-2">  Some of our</span>
          <span className="textg mr-2">Satisfied</span>
            Clients.
        </h2>
        <div className=" flex flex-wrap gap-2 mt-5">
          {Logos.map((item) => (
            <div className="  mx-auto px-6">
              <img src={item} alt="Client" className={`${item === planets   ? "w-64 h-24 rounded-2xl" : "w-24 h-24 rounded-xl"} mt-5`} key={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 mx-auto ml-10 mr-10">
        <h2 className="h2 mb-5 text-yellow-700">
          What individuals Say
        </h2>
        <div className="flex flex-wrap  ">
          {Clients.map((item) => (
            <div className="w-full sm:w-1/2  mt-3 md:w-1/3 p-2 border bg-n-8 border-n-7 rounded-lg" key={item.id}>   
              <p className="text-sm text-n-4">{item.text}</p>
              <div className="flex mt-5">
                <img src={item.image} alt="Client" className="w-12 h-12 rounded-full" />
                  <div className="ml-6">
                    <h3 className="text-lg text-n-3 mt-4">{item.name}</h3>
                    <p className="text-sm text-n-4">{item.company}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testominials
