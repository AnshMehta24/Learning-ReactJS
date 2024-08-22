import { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { userDelete } from '../reducers/useReducer';

function Users() {
 const { users } = useSelector(state => state.userReducer);
const dispatch = useDispatch();

 const DeleteHandler = (index) =>{
  // console.log(id);
  
  dispatch(userDelete(index))
 }

  return (
   <>
    <div className='m-auto container p-10 mt-5 bg-red-100'>
      <h1 className='text-2xl font-bold text-red-900'>User List</h1>

      <ul>
      {users .map((user, index)=> {
        return (
          
            <li key={user.id}>
           {user.name} <span onClick={() => DeleteHandler(index)} className='font-extrabold text-red-700 cursor-pointer'>X</span>
          </li>
          
        )
      })}
      </ul>
    </div>
   </>
  )
}

export default Users
