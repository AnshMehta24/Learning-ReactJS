import React from 'react'

function Card({users, handleRemove, id}) {
  return (
   <>
     <div className='max-w-64 bg-zinc-100 p-4 rounded-md h-42 flex gap-4 pb-10 relative mt-5' >
        <div className='w-48 h-20 bg-orange-600 rounded-md overflow-hidden'>
            <img src={users.url} className='w-full h-full object-cover' alt="" />
        </div>
        <div>
            <h3 className='text-xl leading-none font-semibold'>{users.name}</h3>
            <h6 className='text-sm'>{users.email}</h6>
        </div>
        <button
            onClick={()=> handleRemove(id)}
        className='px-4 py-3 text-white text-xs rounded-full bottom-0 translate-y-[50%]  bg-orange-600 left-1/2 whitespace-nowrap -translate-x-[50%] absolute'>
        Remove It</button>
    </div>
    
   </>
  )
}

export default Card