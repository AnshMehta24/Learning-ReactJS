import React, { useContext } from 'react'
import {UserContext} from '../utils/Context'
import { useNavigate, useParams } from 'react-router-dom';


function UserDetails() {
  const {users  } = useContext(UserContext);
  const {id} = useParams();
  const navigation = useNavigate();
  // console.log(x);

  
  
  return (
    <div>
      <div className="bg-rose-500 text-3xl p-5 w-fit ">{users[id].name}</div>
      <div className="name text-2xl mt-4 ">{users[id].Origin}</div>

      {/* {console.log(users[id])
      } */}

      <button onClick={()=> navigation(-1)} className='mt-5 bg-rose-300 p-5'>Go Back</button>
    </div>
  )
}

export default UserDetails