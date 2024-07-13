import React from 'react'
import Card from './Card'

function Cards({user, handleRemove}) {
  return (
       <div className='flex flex-row flex-wrap gap-4'>
       {
            user.map((item, index)=>{
                return <Card users={item} handleRemove={handleRemove} id={index} key={index}/>
            })
        }
       </div>
     
  )
}

export default Cards