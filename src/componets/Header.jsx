import React from 'react'
import {useState} from 'react'
import{solve} from '../assets/images'
import { NavLinks } from '../constants/data'
import { Menu, X } from 'lucide-react'
const Header = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='sticky top-0 z-50 backdrop-blur-lg  bg-n-6/70 border-b border-n-4 py-3'>
      <div className="relative container mx-auto px-10">
        <div className="divbtn">
            <img src={solve} alt="" className="w-24 h-12" />
            <ul className=" space-x-6 md:space-x-12 hidden sm:flex ">
              {NavLinks.map((item) => (
                <li className=' text-sm ml-4 space-x-4' key={item.id}>{item.title}</li>
              ))}
            </ul>
            <div className="space-x-4 hidden sm:flex">
              <button className=' px-4 py-2 rounded-md border border-n-4'>Login</button>
              <button className=' px-4 py-2 rounded-md gradientback'>Sign Up</button>

            </div>
            <div className="block sm:hidden">
              <button onClick={() => setToggle(prev => !prev)}>
                {toggle ? <X /> : <Menu />}
              </button>
            </div>
            {/* Mobile Menu */}
        </div>
        {toggle && (
              <div className="dcenter flex-col space-y-5 bg-n-7 mt-3.5 p-10 absolute w-full left-0 sm:hidden">
               <ul className="space-y-4">
              {NavLinks.map((item) => (
                <li className='' key={item.id}>{item.title}</li>
              ))}
            </ul>
              <div className="space-x-8">
              <button className=' btn1'>Login</button>
              <button className=' btn2'>Sign Up</button>
              </div>
              </div>
            )}
      </div>
    </nav>
  )
}

export default Header
