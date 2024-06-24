import React from 'react'
import { FiMenu} from "react-icons/fi";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
function Navbar() {
  return (
   
    <nav className="flex justify-between px-8 items-center py-4 mb-2 bg-gray-50">
    <section className='flex items-center space-x-4'>
      {/* <FiMenu className="text-3xl" /> */}
      <img src="/assets/logo.png" className="h-10" alt="logo" />
      {/* <p className="text-4xl">Wana</p> */}
      <IoNotificationsCircleOutline className='text-3xl'/>
      <a href="">Current Status</a>
    </section>
    <h2 className='text-4xl'>Developer</h2>
    
    <section className='flex items-center space-x-4 '>

    <FaHistory className='text-2xl'/>
    <a href="">User</a>
    <CgProfile className='text-2xl'/>
    </section>
  </nav>
   
  )
}

export default Navbar
