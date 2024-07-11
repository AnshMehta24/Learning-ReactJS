// import React, {useState} from 'react'
// import { FaArrowRight } from "react-icons/fa6";

// function Card() {
//     const [val , setVal] = useState(false);
//   return (
//     <div className='w-full h-screen bg-zinc-300 flex justify-center items-center '>
//         <div className='w-60 h-32 bg-zinc-500 rounded-md  relative flex overflow-hidden '>
//             <img src="https://images.unsplash.com/photo-1720524270904-43dc519c1b65?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" className={`shrink-0 transition-all ease-in duration-300 object-cover w-full h-full ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]" }`} alt="" />
//             <img src="https://images.unsplash.com/photo-1720575073320-6c9d3a00d360?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" className={`shrink-0 transition-all ease-in duration-300 object-cover w-full h-full ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]" }`} alt="" />

//             <span
//                 onClick={()=>setVal(()=> !val)}
//             className='w-10 h-10 bg-[#dadada7b] absolute bottom-[0%]
//             flex items-center justify-center rounded-full  left-1/2 -translate-x-[50%] -translate-y-[50%]'>
//             <FaArrowRight size={".8em"} />
//             </span>
//         </div>
//     </div>
//   )
// }

// export default Card




// Props Drilling
import React from 'react'

// function Card({values, handleClick, index}) {
//     const {name, img, profession, friends} = values ;
//   return (
//     <>
//         <div className='w-52 h-42 bg-white rounded-md overflow-hidden  '>
//             <div className='w-full h-36 bg-sky-200'>
//             <img src={img} alt="" className='w-full h-full object-cover   ' />
//             </div>
//             <div className='w-full p-3'>
//                 <h3 className='text-xl font-semibold'>{name}</h3>
//                 <h5 className='text-xs'>{profession}</h5>
//                 <button className='px-3 w-full h-8 py-1 mt-3 text-xs text-white bg-blue-500 font-semibold rounded-md'
//                     onClick={()=>handleClick(index)}
//                 >{friends === true ? "Remove friend" : "Add Friend"}</button>
//             </div>
//         </div>
//     </>
//   )
// }

function Card({data, handleClick, index}){
    const {image, name, artist, added} = data;
    return (
        <div className='w-60 bg-zinc-100 p-4 rounded-md  flex gap-4 pb-10 relative mt-20' >
            <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden'>
                <img src={image} className='w-full h-full object-cover' alt="" />
            </div>
            <div>
                <h3 className='text-xl leading-none font-semibold'>{name}</h3>
                <h6 className='text-sm'>{artist}</h6>
            </div>
            <button className={`px-4 py-3 text-white text-xs rounded-full bottom-0 translate-y-[50%]  ${added=== false ? "bg-orange-600" : "bg-green-600"} left-1/2 whitespace-nowrap -translate-x-[50%] absolute`}
                onClick={()=> handleClick(index)}
            >{
                added === false ? "Add to Favourites" : "Added"
            }</button>
        </div>
    )
}

export default Card