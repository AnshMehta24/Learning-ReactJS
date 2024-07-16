import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className='flex gap-14 text-2xl justify-center items-center pt-10'>
        <NavLink
          style={(e) =>{
            return {
                color :   e.isActive ? 'wheat' : 'green'
            }
          }}  
        to='/'>Home</NavLink>
        <NavLink 
        className={(e) =>{
            return [
                e.isActive ? "text-red-500" : 'text-green-500' ,
                e.isActive ? "text-5xl " : "text-3xl"
            ].join(" ")
          }}   to='/about'>About</NavLink>
        <NavLink 
            style={(e) =>{
                return {
                    color :   e.isActive ? 'wheat' : 'green'
                }
              }}  
        to='/user'>User</NavLink>
      </nav>
    </>
  )
}

export default Navbar