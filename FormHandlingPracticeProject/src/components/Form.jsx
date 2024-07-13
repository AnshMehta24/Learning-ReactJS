import React from 'react'
import {useForm} from 'react-hook-form'

function Form({handleSubmitData}) {

    const {register, handleSubmit, reset} = useForm();


    const handleFormData = data => {
        handleSubmitData(data);
        reset();
    }

  return (
    // <div className='mt-20'>Form</div> data => console.log(data)


    <div className='mt-20'>
        <form className='flex gap-4 w-full outline-non' action="" onSubmit={handleSubmit(handleFormData)}>
            <input type="text" className='bg-red-800 rounded-md text-white p-2 font-semibold' name="" id="Name" placeholder='Name' {...register("name")} />
            <input type="text" className='bg-red-800 rounded-md text-white p-2 font-semibold' name="" id="Email" placeholder='Mail' {...register("email")} />
            <input type="text" className='bg-red-800 rounded-md text-white p-2 font-semibold' name="" id="URL" placeholder='Image URL' {...register("url")} />
            <input type="submit" value="Submit" className='bg-blue-400 p-4 rounded-md' />
        </form>
    </div>
  )
}

export default Form