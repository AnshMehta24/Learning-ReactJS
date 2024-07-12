import React, { useRef } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

// 3 Ways : useRef, Controlled Components, React Form
function App() {

  // useRef pahele chalta hai tab tak  dom load nahi hota isliye pahele null dete hai

  // const name = useRef(null);
  // const age = useRef(null);
  // const email = useRef(null);

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   console.log(name.current.value, age.current.value, email.current.value);
  // }

  // return (

  //   //useRef
  //     <form action="" onSubmit={handleSubmit}>
  //       <input ref={name} type="text" id="name" placeholder='name' />
  //       <input type="text" ref={age} id="Age" placeholder='Age' /> 
  //       <input type="email" ref={email} id="Email" placeholder='Email' />
  //       <input type="submit" value="Submit " />
  //     </form>
  // )


  // 2) Controlled Components

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   console.log(val)
  // }

  // const [val ,setVal ] = useState({name:"", email:""})

  // return(
  //   <div>
  //      <form action="" onSubmit={handleSubmit}>
  //        <input onChange={(e)=> setVal({...val , name: e.target.value})} type="text" id="name" placeholder='name' />
  //        <input type="email"  id="email" onChange={(e)=> setVal({...val, email: e.target.value})} placeholder='Email' />
  //        {/* <input type="email"  id="Email" placeholder='Email' /> */}
  //       <input type="submit" value="Submit " />
  //    </form>
  //   </div>
  // )


  // 3) Using React Hook Form

  const {register, handleSubmit} = useForm();
  // console.log(register( ));
   return (
    <div>
      <form action="" onSubmit={handleSubmit(data=> console.log(data))}>
        <input type="text" {...register('name')} id="name" placeholder='Name' />
        <input type="email" {...register('email')} id="email" placeholder='Email' />
        <input type="submit" value="Submit" />
      </form>
    </div>
   )
}

export default App