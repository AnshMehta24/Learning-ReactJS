import React, { useContext, useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import instance from '../utils/Axios';
import { ProductContext } from '../utils/Context';
import { toast } from 'react-toastify';


function Details() {
    const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
    const [product, setproduct] = useState(null);

    const {id} = useParams();

    // const getSingleProduct =async ()=>{
    //     try {
    //         const {data} = await instance.get(`/products/${id}`);
    //         setproduct(data);
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // }

    useEffect(()=>{
        // getSingleProduct();
        if(!product) {
            setproduct(products.filter(p => p.id == id)[0]);
        }
    },[])
    // console.log(id);

    const ProductRemoveHandler = (id) =>{
        const FilteredProducts  = products.filter(p => p.id != id);
        setproducts(FilteredProducts)
        localStorage.setItem("products", JSON.stringify(FilteredProducts));
        toast.success("Product Removed Successfully")
        navigate(-1);
    }
    
  return <>
    <div className='w-full h-screen relative overflow-hidden'>
        <div className=' w-[70%] h-[75vh] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute flex flex-row justify-center gap-7 items-center p-5'>
           
           {product ? (<>
             <div className='w-full h-[80%] bg-contain bg-no-repeat bg-center' style={{backgroundImage: `url(${product.image})` }}></div>

             <div className='w-full h-[80%]'>
             <h1 className='mb-5 text-white text-3xl'>{product.title}</h1>
             <p className='text-2xl'>{product.description}</p>

             <h1 className='mt-5'>${product.price}</h1>
  
             <div className='flex flex-row gap-5 mt-5'>
                  <Link to={`/edit/${product.id}`} className='text-2xl p-2 text-green-500' style={{border: '2px solid green'}}>Edit</Link>
                  <button
                    onClick={()=> ProductRemoveHandler(product.id)}
                  className='text-2xl p-2 text-red-500' style={{border: '2px solid red'}}>Remove</button>
             </div>
  
             </div>
             </>
           ) : <h1 className='text-3xl'>Loading...</h1>
        }

        </div>
    </div>
 </>
}

export default Details