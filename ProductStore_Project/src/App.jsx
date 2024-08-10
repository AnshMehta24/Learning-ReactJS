import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import Loading from './components/Loading'

function App() {

  return (
    <>
     <div className="bg-black w-full h-screen text-white flex">
       

       

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/load' element={<Loading />} />
      </Routes>

     </div>
    </>
  )
}

export default App
