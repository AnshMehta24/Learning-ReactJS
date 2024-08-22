import React, { useEffect } from 'react'
import { getProducts } from "../reducers/productReducer"
import { useDispatch, useSelector} from "react-redux"
import { asyncgetProducts } from '../actions/ProductActions'
function Products() {
const dispatch = useDispatch()
const {products} = useSelector(state => state.productReducer);
// console.log(products);

  useEffect(()=>{
    // dispatch(getProducts())

    dispatch(asyncgetProducts());
  },[])

  return (
    <div className='m-auto container p-10 mt-5 bg-red-100'>
      <h1 className='text-2xl font-bold text-red-900'>Product List</h1>

      <ul>
      {products &&
      
      products.map((user, index)=> {
        return (
          
            <li key={user.id}>
           {user.title} <span onClick={() => DeleteHandler(index)} className='font-extrabold text-red-700 cursor-pointer'>X</span>
          </li>
          
        )
      })}
      </ul>
    </div>
  )
}

export default Products