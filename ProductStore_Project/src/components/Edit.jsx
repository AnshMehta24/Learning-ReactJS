import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../utils/Context';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Edit() {
    const [products, setproducts] = useContext(ProductContext);
    const { id } = useParams();

    const [product, setProduct] = useState({
        title: "",
        category: "",
        image: "",
        description: "",
        price: ""
    });

    // const pi = products.findIndex(p => p.id == id);
    // const copyData = [...products];
    // console.log(copyData[pi]);
    
    const navigate = useNavigate();

    const SubmitHandler = (e) => {
        e.preventDefault();

        const pi = products.findIndex(p => p.id == id);
        if (pi !== -1) {
            const copyData = [...products];
            copyData[pi] = {
                ...products[pi],
                ...product, // Ensure product only contains fields for a single product
            };
            setproducts(copyData);
            localStorage.setItem("products", JSON.stringify(copyData));
            toast.success("Product Edited Successfully")
            navigate(-1);

            // console.log("Updated Product:", copyData[pi]);
        } else {
            toast.error("Error")
            console.error("Product not found with ID:", id);
        }
    };

    const ChangeHandler = (e) => {
        // console.log(e.target.name, e.target.value);
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        const selectedProduct = products.find(p => p.id == id);
        if (selectedProduct) {
            setProduct({
                title: selectedProduct.title,
                category: selectedProduct.category,
                image: selectedProduct.image,
                description: selectedProduct.description,
                price: selectedProduct.price,
            });
        }
    }, [id, products]);

    return (
        <div className='w-full relative flex flex-col items-center top-16 overflow-hidden'>
            <h1 className='text-2xl'>Edit Product</h1>

            <form onSubmit={SubmitHandler} className='w-full flex flex-col items-center gap-5 justify-center mt-3 text-white'>
                <input
                    type="url"
                    placeholder='Enter Url of Image'
                    className='bg-zinc-900 p-3 w-1/2'
                    name='image'
                    onChange={ChangeHandler}
                    value={product.image}
                    required
                />
                <input
                    type="text"
                    placeholder='Enter Title'
                    className='bg-zinc-900 p-3 w-1/2'
                    name='title'
                    onChange={ChangeHandler}
                    value={product.title}
                    required
                />
                <div className='flex flex-row gap-3 justify-between w-1/2'>
                    <input
                        type="text"
                        placeholder='Enter Category of Product'
                        className='bg-zinc-900 p-3 w-1/2'
                        name='category'
                        onChange={ChangeHandler}
                        value={product.category}
                        required
                    />
                    <input
                        type="number"
                        placeholder='Enter Price'
                        className='bg-zinc-900 p-3 w-1/2'
                        name='price'
                        onChange={ChangeHandler}
                        value={product.price}
                        required
                    />
                </div>

                <textarea
                    rows="10"
                    className='bg-zinc-900 w-1/2 p-3 text-white'
                    placeholder='Enter Description of Product here...'
                    name='description'
                    onChange={ChangeHandler}
                    value={product.description}
                    required
                ></textarea>

                <div className='flex flex-row gap-3 justify-between w-1/2'>
                    <button type="button" onClick={() => setProduct({
                        title: "",
                        category: "",
                        image: "",
                        description: "",
                        price: ""
                    })} className='bg-red-500 p-3 rounded'>
                        Clear/Reset
                    </button>
                    <button type="submit" className='bg-green-500 p-3 rounded'>
                        Change Now
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Edit;
