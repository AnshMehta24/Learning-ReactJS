import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import instance from '../utils/Axios';


function Details() {
  
    const [product, setproduct] = useState(null);

    const {id} = useParams();

    const getSingleProduct =async ()=>{
        try {
            const {data} = await instance.get(`/products/${id}`);
            setproduct(data);
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getSingleProduct();
    },[])
    // console.log(id);
    
  return <>
    <div className='w-full h-screen relative overflow-hidden'>
        <div className=' w-[70%] h-[75vh] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute flex flex-row justify-center gap-7 items-center p-5'>
           
           {product ? (<>
             <div className='w-full h-[80%] bg-contain bg-no-repeat bg-center' style={{backgroundImage: `url(${product.image})` }}></div>

             <div className='w-full h-[80%]'>
             <h1 className='mb-5 text-white text-3xl'>Title</h1>
             <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolore iusto sint, id eaque enim fuga corrupti atque impedit molestias dolorem architecto ab animi velit? Nihil rerum inventore natus fugit soluta, corporis nam quaerat.</p>

             <h1 className='mt-5'>${product.price}</h1>
  
             <div className='flex flex-row gap-5 mt-5'>
                  <button className='text-2xl p-2 text-green-500' style={{border: '2px solid green'}}>Edit</button>
                  <button className='text-2xl p-2 text-red-500' style={{border: '2px solid red'}}>Remove</button>
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