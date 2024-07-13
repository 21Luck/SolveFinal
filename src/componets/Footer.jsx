import React from 'react'
import { footerLinks } from '../constants/data'
import { solve } from '../assets/images'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <div className='mt-10'>
        <div className=" sm:divbtn mx-auto px-20 sm:px-6 md:px-20">
        {footerLinks.map((links) => (
          <div className="">
            <h1 className="text-2xl font-medium text-n-2 ">{links.title}</h1>
            <ul className="text-sm text-n-4 mt-4 mb-6">
              {links.Links.map((item) => (
                <li key={item.id} className='mt-2'>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-n-6 px-6 ">
        <div className="divbtn">
          <img src={solve} alt="" className="w-24 h-12 mt-4 mr-3" />
          <p className=" text-n-4 text-center mt-4"> ©{new Date().getFullYear()}. All Rights Reserved</p>
          <div className="flex gap-2 sm:gap-5 mt-4">
            <Facebook/>
            <Twitter/>
          <Instagram/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
