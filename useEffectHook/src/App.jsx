
import {NavLink} from 'react-router-dom'
import {Route, Routes} from 'react-router'
import Home from './components/Home'
import Service from './components/Service'
import Shp from './components/Shp'


function App(){




  return <>
    <nav className='p-20 pb-3 flex gap-12 text-4xl'>
    <NavLink to='/'>
      Home
    </NavLink>
    <NavLink to='/services'>
      Services
    </NavLink>
    <NavLink to='/shop'>
      Shop
    </NavLink>
    </nav>
    <hr />


<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/services' element={<Service/>} />
  <Route path='/shop' element={<Shp/>} />
</Routes>



  </>
}


export default App