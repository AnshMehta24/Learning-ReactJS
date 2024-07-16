import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
    <div className='mt-10 flex justify-between flex-col h-40 items-center w-full text-center'>
        <h1 className='text-4xl border p-3 rounded-md bg-gradient-to-r from-red-400 to-cyan-300 text-black'>User</h1>
        
        <div className='flex flex-col mt-5 p-3'>
            <Link className='bg-red-200 border rounded-md text-2xl text-black mt-4 p-3 hover:bg-red-600 transition ease-in duration-500' to='/user/ansh'>Ansh</Link>
            <Link className='bg-red-200 border rounded-md text-2xl text-black mt-4 p-3 hover:bg-red-600 transition ease-in duration-500' to='/user/aryan'>Aryan</Link>
            <Link className='bg-red-200 border rounded-md text-2xl text-black mt-4 p-3 hover:bg-red-600 transition ease-in duration-500' to='/user/akshay'>Akshay</Link>
            
        </div>

        <Outlet />
    </div>
  )
}

export default User