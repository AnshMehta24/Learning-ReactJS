import React, { useState } from 'react'

const Counter = ({name}) => {
    const [counter , setCounter] = useState(0);
    const [counter2 , setCounter2] = useState(0);

    const IncrementHandler =() => {
        setCounter((prev) => {
           return  prev+=1;
        })
    }

    const DecrementHandler =  () => {
        if(counter === 0){
            setCounter(0);
        }else{

            setCounter((prev) => {
               return prev -= 1;
            })
        }
    }
    const IncrementHandler2 =() => {
        setCounter2((prev) => {
           return  prev+=1;
        })
    }

    const DecrementHandler2 =  () => {
        if(counter === 0){
            setCounter2(0);
        }else{

            setCounter2((prev) => {
               return prev -= 1;
            })
        }
    }

  return (
   <>
   <h1 className='text-white pt-10 mb-10 px-5'>{name}</h1>
     <div className='text-white text-4xl flex gap-5 px-5 mb-10'>
        <button onClick={IncrementHandler} className='bg-green-500 p-3 rounded-md'>Increment</button>

        <h1>{counter}</h1>

        <button onClick={DecrementHandler} className='bg-red-500 p-3 rounded-md'>Decrement</button>
    </div>

    <div className='text-white text-4xl flex gap-5 px-5 mb-10'>
        <button onClick={IncrementHandler2} className='bg-green-500 p-3 rounded-md'>Increment</button>

        <h1>{counter2}</h1>

        <button onClick={DecrementHandler2} className='bg-red-500 p-3 rounded-md'>Decrement</button>
    </div>
   </>
  )
}

export default Counter