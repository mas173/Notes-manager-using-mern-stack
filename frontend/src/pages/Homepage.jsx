import React from 'react'
import NoteCard from '../components/NoteCard'

import NavBar from '../components/NavBar'
const Homepage = () => {
  return (
    <div className='bg-gray-600 w-full h-screen'>
  <NavBar></NavBar>
  <NoteCard></NoteCard>
  </div>
  )
}

export default Homepage