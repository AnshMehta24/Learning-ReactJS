import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const [counter, setCounter] =useState(10)

  // let counter = 10;
  const addValue = ()=>{
    console.log("Clicked");
    if(counter === 20){
      alert("Maximum value is 20")
    }else{
      setCounter((prevCounter)=> prevCounter + 1)
      setCounter((prevCounter)=> prevCounter + 1)
      setCounter((prevCounter)=> prevCounter + 1)
    }
  }

  const removeValue = ()=>{
    if(counter < 1){
      alert("Keep the Value atleast Minimum to 0")
    }else{
      setCounter(counter -1)
    }
  }

  return (
   <>
   <h1>Code with Ansh</h1>
   <h2>Ciunter Value : {counter}</h2>

   <button onClick={addValue}
   >Add value {counter}</button>
   <br />
   <button onClick={removeValue}>Remove Value {counter}</button>
   </>
  )
}

export default App
