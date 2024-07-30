import React, { useEffect } from 'react'

function Service() {

    //lifecycle methods : Component Mount, Component Update, Component UnMount

    useEffect(()=>{
        console.log("Component Mounts");

        return () =>{
            console.log("Component Unmounts");
        }
    })
  return (
    <div>Service</div>
  )
}

export default Service