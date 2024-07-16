import React from 'react'
import { Route , Routes } from 'react-router'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
import UserDetail from '../components/UserDetail'


function Routing() {
  return (
    <>
         <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route  path='/user' element={<User/>} >
          <Route path='/user/:name' element={<UserDetail />}/>
          </Route>
          // Dynamic Routing
                {/* <Route path='/user/:name' element={<UserDetail />}/> */}
      </Routes>
    </>
  )
}

export default Routing