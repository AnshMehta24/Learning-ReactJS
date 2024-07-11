import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar';
function App() {
//  const data = [
//     {name:'ansh', profession:'CEO', img:'https://images.unsplash.com/photo-1552234994-66ba234fd567?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D', friends: false},
//     {name:'noob', profession:'ok', img:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D', friends: false},
//     {name:'ok', profession:'else', img:'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D', friends: false},
//  ] 

//  const [realdata, setRealdata] = useState(data);

//  const handleFriendsBtn = (indexx) =>{
//   setRealdata((prev)=>{
//    return  prev.map((item, index)=>{
//       if(index === indexx){
//         return {...item, friends: !item.friends}
//       }
//       return item;
//     })
//   })
//  }




// Prop Drilling Exercise

const data = [
  {image:"https://images.unsplash.com/photo-1720607633896-b990326064f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8", name:"Challenger", artist:"Ansh", added: false},
  {image:"https://images.unsplash.com/photo-1720462813863-cf94aef89b38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D", name:"Okay", artist:"Noone", added: false},
  {image:"https://images.unsplash.com/photo-1720372445872-a01f2109e64b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D", name:"Rose", artist:"All ", added: false},
  {image:"https://plus.unsplash.com/premium_photo-1719850361670-2897ae0f8b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D", name:"Beat", artist:"Fox", added: false},
]

const [realdata, setRealData] = useState(data);

const handleClick= (NewIndex)=>{
  setRealData((prev)=>{
    return prev.map((item, index)=>{
      if(index === NewIndex){
        return {...item, added: !item.added};
      }
      return item;
    })
  })
}

  return (
    <div className='w-full h-screen bg-zinc-300 '>
      {/* {realdata.map((item, index) =>(
        // <Card image={item.img} name={item.name} pro={item.profession}/>
        <Card key={index} index={index} values={item} handleClick={handleFriendsBtn}/>
      ))} */}


      <Navbar data={realdata} />
      <div className='px-20 flex gap-4 mt-10 flex-wrap'>
        {
          realdata.map((item, index)=>{
           return  <Card data={item} handleClick={handleClick} index={index} key={index} />
          })
        }
      </div>
    </div>

  )
}

export default App
