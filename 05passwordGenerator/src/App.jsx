import { useState , useCallback, useEffect , useRef} from 'react'


function App() {

 
 const [length, setLength]=useState(8)
 const [numberallowed, setNumberallowed] = useState(false)
 const [charallowed, setCharallowed] = useState(false)
 const [password, setPassword ]= useState("")
const [title, setTitle]= useState("Copy")

 //useRef Hook
const passwordRef = useRef(null)

const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = "ZXCVBNMALSKDJFHGQPWOEIRUTYzmxncbvalskdjfhgqpwoeiruty"
  if(numberallowed){
    str+= "1234567890"
  }
  if(charallowed){
    str+="{}!@#$%^&*()~`"
  }
  for (let i = 1; i < length; i++){
  let char = Math.floor(Math.random() * str.length +1)

  pass += str.charAt(char)
  }
  
  setPassword(pass)

},[length, numberallowed, charallowed,setPassword])
 
const copyPassToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  // passwordRef.current?.setSelectionRange(0,4)
  window.navigator.clipboard.writeText(password)
  setTitle("Copied")

},[password])



  useEffect(()=>{
    passwordGenerator()
  },[length, numberallowed, charallowed, passwordGenerator])
  return (
   <>
   
   <div className="w-768 mx-10 shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-700 text-center h-32 ">
    <h1 className="text-white text-center  text-xl/8">PassWord Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
<input type="text" 
value={password}
className='outline-none w-full py-3 px-3'
placeholder='password'
readOnly
ref={passwordRef}
/>
<button className='outline-none bg-blue-500 text-white mx-3 shrink-0' onClick={copyPassToClipboard} >{title}</button>
    </div>
    <div className="flex text-s, gap-x-2">
      <div className="flex items-center gap-x-1">
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{
          setLength(e.target.value)
        }}
        />
        <label htmlFor="">Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={numberallowed}
        id='numberInput'
        onChange={()=>{
          setNumberallowed((prev) => !prev);
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={charallowed}
        id='charInput'
        onChange={()=>{
          setCharallowed((prev) => !prev);
        }}
        />
        <label htmlFor="charInput">Characters</label>
      </div>
    </div>
    </div>
   
   </>
  )
}

export default App
