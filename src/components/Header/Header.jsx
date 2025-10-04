import React from 'react'
import Button from '../Button/Button'
import ReactiveButton from 'reactive-button';
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import { NavLink } from 'react-router';

const Header = ({cartCount}) => {
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
        className="menu dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
        <NavLink to='/'><ReactiveButton color='' rounded idleText={'Home'}></ReactiveButton></NavLink>
      </li>
      <li>
        <NavLink to='/products'><ReactiveButton color='red' rounded idleText={'Products'}></ReactiveButton></NavLink>
        </li>
      <li>
        <NavLink to='/contacts'><ReactiveButton color='red' rounded idleText={'Contact'}></ReactiveButton></NavLink>
      </li>
      <li>
        <NavLink to='/about'><ReactiveButton color='purple' rounded idleText={'About Us'}></ReactiveButton></NavLink>
      </li>
      </ul>
    </div>
      <h1 className="lg:text-3xl font-bold
                 bg-clip-text text-transparent
                 bg-gradient-to-r from-cyan-400 via-pink-500 to-blue-600
                 drop-shadow-md ml-4">
        Motiar General Store
      </h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" flex gap-4 text-2xl menu-horizontal b-2 px-1">
      <li>
        <NavLink to='/'><ReactiveButton color='' rounded idleText={'Home'}></ReactiveButton></NavLink>
      </li>
      <li>
        <NavLink to='/products'><ReactiveButton color='red' rounded idleText={'Products'}></ReactiveButton></NavLink>
        </li>
      <li>
        <NavLink to='/contacts'><ReactiveButton color='red' rounded idleText={'Contact'}></ReactiveButton></NavLink>
      </li>
      <li>
        <NavLink to='/about'><ReactiveButton color='purple' rounded idleText={'About Us'}></ReactiveButton></NavLink>
      </li>
      {/* <li>
        <NavLink to='/form'><ReactiveButton color='green' rounded idleText={'Form'}></ReactiveButton></NavLink>
      </li> */}
    </ul>
  </div>

  <div className="navbar-end mr-6 flex items-center gap-4">
        <div className="relative">
          <Heart className="text-cyan-300 w-7 h-7" />
        </div>
        <div className="relative">
          <ShoppingCart className="text-cyan-300 w-7 h-7" />
          {/* count badge */}
          {cartCount > 0 && (
            <span className="absolute -top-3 -right-3 bg-red-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>
</div>
    </>
  )
}

export default Header








