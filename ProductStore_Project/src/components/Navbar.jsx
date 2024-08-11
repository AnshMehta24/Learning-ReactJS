import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom';

function Navbar() {
    const [products] = useContext(ProductContext);

    let distinct_category = products && products.reduce((acc, cv)=> [...acc, cv.category],[])
    distinct_category = [...new Set(distinct_category)]
    // console.log(distinct_category);

    const color = ()=>{
        return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.4)`
    }


  return (
    <nav className="w-[15%] h-screen bg-slate-900 flex flex-col items-center">
    <Link to="/addproduct"  className="text-white p-4 mt-2 mb-3 rounded" style={{border: '2px solid white'}}>Add Peoduct</Link>

    <hr className="w-[80%]" />

    <div className="w-[80%] mt-2">
      <h1 className="text-2xl mb-2">Category</h1>
      <div className="flex flex-col gap-3">
      {distinct_category && distinct_category.map((c, i)=>(
        <Link to={`/?category=${c}`} key={i} className="flex flex-row gap-3 items-center"><span  className=" w-[15px] h-[15px] rounded-full" style={{backgroundColor: color()}}></span>{c}</Link>
      ))}
     
    </div>
    </div>
  </nav>
  )
}

export default Navbar