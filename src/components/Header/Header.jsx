import React from 'react'
import Button from '../Button/Button'
import ReactiveButton from 'reactive-button';
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <>
      <div className="navbar bg-sky-500/20 text-black font-bold text-2xl shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-success lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Products</a></li>
        <li><a>Contacts</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
    <h2 className="text-xl ml-6 bg-gradient-to-r from-cyan-400  to-pink-600 bg-clip-text text-transparent">
      Motiar General Store
    </h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" flex gap-4 text-2xl menu-horizontal b-2 px-1">
      <li><ReactiveButton color='' rounded idleText={'Home'}></ReactiveButton></li>
      <li><ReactiveButton color='red' rounded idleText={'Products'}></ReactiveButton></li>
      <li><ReactiveButton color='red' rounded idleText={'Contact'}></ReactiveButton></li>
      <li><ReactiveButton color='purple' rounded idleText={'About Us'}></ReactiveButton></li>
    </ul>
  </div>
  <div className="navbar-end mr-6">
      <Heart className='text-cyan-300 mr-4'>Like</Heart>
      <ShoppingCart className='text-cyan-300'>Shopping</ShoppingCart>
  </div>
</div>
    </>
  )
}

export default Header