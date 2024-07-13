import React from 'react'
import { Roadmap } from '../constants/data'
const Workflow = () => {
  const boxstyle =`bg-n-7 border border-n-6 rounded-xl p-4`
  return (
    <div className='mt-10 mr-10 ml-10'>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {Roadmap.map((item,i) => (
        <div className={`${boxstyle} ${i === 1  || i === 5 || i === 7 ? "row-span-2" : ""}`} key={i}>
          <h2 className="text-3xl text-n-2">{item.title}</h2>
          <h4 className="text-lg text-n-3">{item.name}</h4>
          <p className="text-sm text-n-4 mt-2 mb-4">{item.description}</p>
          <img src={item.iconUrl} alt="" className='rounded-3xl md:ml-2 sm:mt-10 h-1/2' />
        </div>
      ))}
    </div>
    </div>
  )
}

export default Workflow
