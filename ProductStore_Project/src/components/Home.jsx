import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import instance from '../utils/Axios';
import Loading from './Loading';

function Home() {
    const [products] = useContext(ProductContext);
    const { search } = useLocation();
    const category = decodeURIComponent(search.split("=")[1] || "");

    const [filter, setFilter] = useState([]); // Initially set to an empty array

    const getCategoryWiseData = async () => {
        try {
            const { data } = await instance.get(`products/category/${category}`);
            setFilter(data);
        } catch (error) {
            console.log(error); 
        }
    };

    useEffect(() => {
        if (products && products.length > 0) {
            if (category) {
                getCategoryWiseData(); // Fetch and set category-wise data if a category exists
            } else {
                setFilter(products); // Show all products if no category is specified
            }
        }
    }, [category, products]);

    // console.log("Filtered Products =", filter);

    return filter && filter.length > 0 ? (
        <>
            <Navbar />
            <div className="Home w-full h-screen bg-red-300 overflow-hidden">
                <div className="Cards w-[100%] pb-8 h-full m-5 flex gap-5 flex-wrap justify-start overflow-y-auto overflow-x-hidden">
                    {filter.map((p) => (
                        <Link to={`/details/${p.id}`} key={p.id} className="Card w-[15%] gap-3 h-[30vh] bg-white flex flex-col items-center justify-center text-black p-3 text-center">
                            <div className="hover:scale-110 transition-all ease-in-out duration-500 w-full h-[80%] bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${p.image})` }}></div>
                            <h1 className="">
                                {p.title}
                            </h1>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    ) : (
       <Loading />
    );
}

export default Home;
