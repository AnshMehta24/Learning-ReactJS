import React, { useContext } from 'react'
import {UserContext} from '../utils/Context'
import { Link } from 'react-router-dom'

function User() {
  const  {users, setusers} = useContext(UserContext);
  return (
    <div className='flex flex-col gap-5 justify-center items-center  w-full'>
      {
        users.map((u) =>
          <Link to={`/user/${u.id}`} key={u.id} className='bg-rose-400 text-3xl p-5 w-fit '>
            {u.name}
          </Link>
      )
      }
    </div>
  )
}

export default User