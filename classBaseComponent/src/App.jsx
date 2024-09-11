import React from 'react'
import Counter from './components/Counter'
import OldCounter from './components/OldCounter'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white px-5'>

     <div className='w-full flex items-end justify-end gap-10 px-10 text-xl font-semibold border-b-2 border-b-white pb-3 mb-5'>
     {
        ["Home", "About"].map((item,index) => (
          <Link  key={index} to={index === 0 ? '/' : '/abt'}>{item}</Link>
        ))
      }
     </div>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/abt' element={<About />} />

      </Routes>
      {/* <Counter name="New Counter" /> */}

      {/* <hr className='w-full bg-white mb-10' /> */}


      {/* <OldCounter name="Class Base Counter" /> */}
    </div>
  )
}

export default App