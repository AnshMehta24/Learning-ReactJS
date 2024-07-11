import React from 'react'

function Navbar({data}) {
  return (
    <div className='w-full px-4 py-3 flex justify-between items-center'>
        <h3>Orange</h3>
       <div className='flex gap-4'>
       <div className='flex  p-2 px-4 text-white rounded-md text-sm bg-orange-600 gap-3'>
            <h3>Favourates</h3>
            <h4>
                {
                data.filter((item)=>{
                    return item.added
                }).length
                }
        </h4>
        </div>
        <div className='flex  p-2 px-4 text-white rounded-md text-sm bg-orange-600 gap-3'>
            <h3>Removed</h3>
            <h4>
                {
                data.filter((item)=>{
                    return !item.added
                }).length
                }
        </h4>
        </div>
       </div>
    </div>
  )
}

export default Navbar