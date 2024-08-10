import React from 'react'
import Home from './components/Home'
import {Link, Route, Routes} from 'react-router-dom'
import About from './components/About'
import User from './components/User'
import UserDetail from './components/UserDetails'


function App() {
  return <div className='pl-10'>
    <nav className='w-full p-10 text-center flex gap-10 text-2xl justify-center'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link>
    </nav>


    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/user' element={<User />} />
      <Route path='/user/:id' element={<UserDetail />} />
    </Routes>
  </div>
}

export default App