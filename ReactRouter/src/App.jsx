import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Routing from './utils/Routing'

function App() {

  return (
  <>
    <div className='w-full h-screen bg-black text-white'>
      {/* <h1 className='text-white'>Hey Bro</h1> */}
      <Navbar />
      <Routing />
     
    </div>
  </>
  )
}

export default App
