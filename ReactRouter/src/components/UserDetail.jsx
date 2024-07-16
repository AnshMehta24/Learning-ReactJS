import React from 'react'
import { useParams, useNavigate } from 'react-router'

function UserDetail() {
    const {name} = useParams();
    const navigate = useNavigate();

    const GoBack = () =>{
        // navigate('/user')
        navigate(-1)
    }
  return (
    <div className='w-full text-4xl text-center mt-10'>
         <h1>Hello {name}</h1>

         <button onClick={GoBack} className='bg-red-300 rounded-full w-44 p-3 mt-5'>
            GO BACK
         </button>
    </div>
  )
}

export default UserDetail