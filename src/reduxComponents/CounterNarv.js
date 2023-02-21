import React from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const CounterNarv = () => {
  const {profile} = useSelector((state) => state)
  return (
    <>
       <nav className=" relative w-full flex flex-wrap mt-10 items-center justify-between  py-4 bg-orange-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light ">


  <div className=" flex ml-10 items-center" id="">
  <ul className="navbar-nav flex md:flex pl-0 list-style-none mr-auto">
    <li className="nav-item p-2">
      <NavLink className="nav-link text-gray-600 hover:text-gray-700 focus:text-gray-700 p-0"  to='/profile-one'>Profile One</NavLink>
    </li>
    <li className="nav-item p-2">
      <NavLink className="nav-link text-gray-600 hover:text-gray-700 focus:text-gray-700 p-0" to='/profile-two'>Profile Two</NavLink>
    </li>
    <li className="nav-item p-2">
      <NavLink className="nav-link text-gray-600 hover:text-gray-700 focus:text-gray-700 p-0" to='/profile-three'>Profile Three</NavLink>
    </li>
  </ul>
  </div>
  <div className="text flex mx-20 gap-6">
    <div className="text">{profile.firstname}</div>
    <div className="text">{profile.lastname}</div>
  </div>
</nav>
    </>
  )
}

export default CounterNarv
