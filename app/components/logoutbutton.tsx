import React from 'react'
import { logout } from '../lib/action'



const LogoutButton = () => {
  return (
    <form action={logout} className='w-full p-3 font-bold bg-[#222]'>
        <button className="hover:cursor-pointer hover:bg-gray-800 ">Logout</button>
    </form>
  )
}

export default LogoutButton