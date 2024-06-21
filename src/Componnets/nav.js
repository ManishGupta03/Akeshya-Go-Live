import React from 'react'
import Logo from '../Assets/logo.png'

const nav = () => {
  return (
    <div>

<div className="w-full navbar bg-white fixed ">
  <div className=" container flex  justify-between items-center mx-auto ">
    <div className="logo m-4">
      <h1 className="text-xl">
        <a href='/' className="flex items-center">
          <img src={Logo} alt="logo..." className="h-8"/>
          <h2 className="m-2 text-blue-800 text-bold bg-grey-100">AKESHYA</h2>
        </a>
      </h1>
    </div>

    <nav  className="navbar m-4">
      <div className="flex mr-4 space-x-6">
        <a href="#home" className="  text-gray-900 active hover:text-blue-600" >Home</a>
        <a href="#about" className=" text-gray-900 hover:text-blue-600" >About</a>
        <a href="#services" className=" text-gray-900 hover:text-blue-600" >Services</a>
        <a href="/contact" className="text-gray-900 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg" >Contact us</a>
      </div>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>

  </div>
</div>

    </div>
  )
}

export default nav