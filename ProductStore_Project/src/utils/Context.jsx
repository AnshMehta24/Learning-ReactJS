import React, { createContext, useEffect, useState } from 'react'
import instance from './Axios';


export const  ProductContext =  createContext();

function Context(props) {
    // const[products, setproducts] = useState( null);
    const[products, setproducts] = useState( JSON.parse(localStorage.getItem("products")) || null);

    // const getProducts = async ()=>{
    //     try {
    //         const {data} = await instance("/products");
    //         setproducts(data);
    //         // console.log(data);
            
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // }

    // console.log(products);
    
    // useEffect(()=>{
    //     getProducts()
    // }, [])
  return <ProductContext.Provider value={[products, setproducts]}>
    <div>
    {props.children}
    </div>
  </ProductContext.Provider>
}

export default Context