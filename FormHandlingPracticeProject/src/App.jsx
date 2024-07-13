import { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'
// import { set } from 'react-hook-form';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [user, setUser] =useState([]);

  const handleSubmitData = (data) =>{
    setUser([...user, data]);
  }

  const handleRemove = (id) =>{
    setUser(()=> user.filter((item, index) => index != id))
  }

  return (
   <div className='flex flex-col  justify-center items-center w-full h-screen'>
   
    <Cards user={user} handleRemove={handleRemove} />

   <Form handleSubmitData={handleSubmitData} />
   </div>
  )
}

export default App
