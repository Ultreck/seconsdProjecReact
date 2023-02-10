import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav className=" text-center w-full p-0 m-0 fixed  text-lg font-bold">
        <ul className="text-center flex w-full">
          <NavLink className=" w-full border py-4 bg-slate-100 " to={'/'}>
              <li >
                Normal Display
              </li>
          </NavLink>
          <NavLink className=" w-full border py-4 bg-slate-100" to={'/cbt'}>
              <li >
                CBT Display
              </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar