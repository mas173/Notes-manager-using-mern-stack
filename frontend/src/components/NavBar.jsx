import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='w-full bg-black text-white flex justify-between align-middle p-3 border-t-2 border-t-white '>
      <h1 className='text-2xl font-bold'>Notes.org</h1>
      <button className=' bg-white text-black p-2 rounded-full font-bold'><Link to={"/create"}>Add note</Link></button>
    </div>
  )
}

export default NavBar;