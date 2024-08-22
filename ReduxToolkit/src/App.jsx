import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementAsync, incrementByAmount } from './reducers/counterSlice'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0) 

 const {value} =  useSelector(state=> state.counter)
 const dispatch = useDispatch()
// console.log(a);


  return (
    <>
      <div className='w-full h-screen bg-zinc-900'>

          <div className='w-[50%] mx-auto flex items-center justify-center h-32 '>
                <h1 className='text-white text-3xl font-semibold'>Counter : {value}</h1>
          </div>

          <div className='w-[35%] mx-auto flex items-center gap-5'>
            <button onClick={() => dispatch(incrementAsync(3))} className='text-green-500 border-2 p-3 rounded-lg border-green-500'>Increment</button>
            <button onClick={() => dispatch(decrement())} className='text-red-500 border-2 p-3 rounded-lg border-red-500'>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))} className='text-green-200 border-2 p-3 rounded-lg border-green-200'>Increment by 5</button>
            <button onClick={() => dispatch(decrementByAmount(5))} className='text-red-200 border-2 p-3 rounded-lg border-red-200'>Decrement by 5</button>
          </div>

      </div>
    </>
  )
}

export default App
