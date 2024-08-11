import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context';
import {nanoid} from 'nanoid'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddProduct() {
    const [products, setproducts] = useContext(ProductContext)
    const [title, settitle] = useState("");
    const [category, setcategory] = useState("");
    const [image, setimage] = useState("");
    const [description, setdescription] = useState("");
    const [price, setprice] = useState("");


    const navigate =useNavigate();

    const SubmitHandler = (e)=>{
        e.preventDefault();

        let id = nanoid();

        const product = {
            id,
            title,
            category,
            image,
            description,
            price
        }
        setproducts([...products, product])
        // console.log(product);

        localStorage.setItem("products", JSON.stringify([...products, product]))

        toast.success("Product Added Successfully")
        navigate(-1)

    }
  return (
    <div className='w-full relative flex flex-col items-center top-16 overflow-hidden'>
   
        <h1 className='text-2xl'>Add Product</h1>

        <form action="" onSubmit={SubmitHandler} className='w-full flex flex-col items-center gap-5 justify-center mt-3 text-white'>
            <input type="url"
                placeholder='Enter Url of Image'
                className='bg-zinc-900 p-3 w-1/2 '
                onChange={(e)=> setimage(e.target.value)}
                value={image}
                required
            />
            <input type="text"
                placeholder='Enter Title'
                className='bg-zinc-900 p-3 w-1/2'
                onChange={(e)=> settitle(e.target.value)}
                value={title}
                required
            />
            <div className='flex flex-row gap-3 justify-between w-1/2'>
            <input type="text"
                placeholder='Enter Category of Product'
                className='bg-zinc-900 p-3 w-1/2'
                onChange={(e)=> setcategory(e.target.value)}
                value={category}
                required
            />
            <input type="number"
                placeholder='Enter Price'
                className='bg-zinc-900 p-3 w-1/2'
                onChange={(e)=> setprice(e.target.value)}
                value={price}
                required
            />
            </div>
            {/* <input type="url"
                placeholder='Enter Url of Image'
                className='bg-zinc-50 p-3 w-1/2'
                onChange={(e)=> setimage(e.target.value)}
                value={image}
            /> */}

            <textarea name="" id="" rows="10" className='bg-zinc-900 w-1/2 p-3 text-white' placeholder='Enter Description of Product here...'
            onChange={(e)=> setdescription(e.target.value)}
            value={description}
            required
            ></textarea>
            
            <div className='flex flex-row gap-3 justify-between w-1/2'>
            <button type="submit" className='bg-red-500 p-3 rounded'>Clear/Reset</button>
            <button type="submit" className='bg-green-500 p-3 rounded'>Add Now</button>
            
            </div>
        </form>
   
</div>
  )
}

export default AddProduct