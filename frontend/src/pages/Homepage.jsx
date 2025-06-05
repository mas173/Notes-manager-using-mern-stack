import React from 'react'
import NoteCard from '../components/NoteCard'
import { useState ,useEffect } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
const Homepage = () => {
    const [Notes, setNotes] = useState([])
  const [isLoading, setisLoading] = useState(false)

  const fetchNotes = async()=>{


    try {setisLoading(true)
      const notes = await axios.get("http://localhost:3000/api/notes")
  setNotes(notes.data.message)
      
    } catch (error) {
      console.error(error.message)
    }
    finally{
  setisLoading(false)
    }


    

  
  }
useEffect(() => {
fetchNotes()
}, [])



  // console.log(Notes)
  return (

    
    <div className='bg-gray-600 w-full h-screen'>
  <NavBar></NavBar>
<div className='flex flex-wrap'>
    {isLoading?(  <p className='text-white p-4'>Loading...</p>):(Notes.map((note)=>(<NoteCard key={note._id} note={note} />)))}
</div>

  </div>
  )
}

export default Homepage