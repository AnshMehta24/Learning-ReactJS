import {Link, Route, Routes, useLocation} from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import Loading from './components/Loading'
import AddProduct from './components/AddProduct';
import Edit from './components/Edit';

function App() {

 const { search , pathname } = useLocation();

//  console.log(search);
//  console.log(pathname);
 
 
  return (
    <>
     <div className="bg-black w-full h-screen text-white flex overflow-hidden">
       
       {(pathname != '/' || search.length >0) && (
          <Link to='/' className='text-white absolute left-[15%] top-[3%] text-2xl z-20'>
          Home
        </Link>
       )}

  
       

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/load' element={<Loading />} />
      </Routes>

     </div>
    </>
  )
}

export default App
