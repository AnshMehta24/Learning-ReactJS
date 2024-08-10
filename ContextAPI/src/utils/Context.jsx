import React, { createContext, useState } from 'react'

export const UserContext = createContext();

function Context(props) {
    const [users, setusers] = useState([
        {
            id:0,
            name:'John Doe',
            Origin:'USA'
        },{
            id:1,
            name:'Rock ',
            Origin:'UK'
        },{
            id:2,
            name:'Roman',
            Origin:'Africa'
        }
    ]);
  return (
    <UserContext.Provider value={{users, setusers}}>
            <div>
                {
                props.children
                }
            </div>
    </UserContext.Provider>
  )
}

export default Context