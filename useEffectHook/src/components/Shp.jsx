import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Shp() {
    const [products, setProducts] = useState([]);

    const getProduct = ()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            setProducts(res.data)
            // console.log(res.data);
        })
        .catch(err => console.log(err))
    }


    useEffect(()=>{
        getProduct()
    }, [])

  return <>
   <div className='pl-5 pt-5 pr-5'>
   <button className='bg-red-300 text-2xl p-5 rounded-md' onClick={getProduct}>Load Product</button>

    <div className='pt-5 h-screen'>
    {
       products.length > 0 ?  products.map((item, index) => (
        <h1 key={index} className='w-full p-2 bg-red-400 text-1xl mb-2'>{item.title}</h1>
       )) : <h1 >Loading...</h1>
    }
    </div>

   </div>
  </>
}

export default Shp