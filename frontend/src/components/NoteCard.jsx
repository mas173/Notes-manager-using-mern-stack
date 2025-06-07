import React from 'react'
import {Delete,Edit, Trash2} from 'lucide-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-hot-toast'

const NoteCard = ({note,setNotes,Notes}) => {


  
  const HandleDelete = async (id)=>{

    try {
      await axios.delete(`http://localhost:3000/api/notes/${id}`)
    setNotes(Notes.filter((n) => n._id !== id));
    toast.success("deleted succesfully")
      
    } catch (error) {
      console.error(error)
    }

  }

  const HandleUpdate = async(id)=>{
await axios.put(`http://localhost:3000/api/notes/${id}`)
  }

  // console.log(note)
  return (
    <div className='w-40 h-50 bg-yellow-300 rounded-2xl mt-1.5 p-1.5 content-center m-1 overflow-y-scroll flex flex-col align-middle justify-between'>
    <h2 className=' tracking-tighter font-mono'>{note.title}</h2>
      <p>{note.content}
      </p>
      <p className='text-.5'>
      Date:{note.createdAt.split(":")[0].slice(0,10)}
      </p>
      <div className='flex justify-end gap-2'>
        <button onClick={()=>HandleDelete(note._id)}><Trash2></Trash2></button>
        <Link to={`/notes/:${note._id}`}><Edit></Edit></Link>
      </div>
    </div>
  )
}

export default NoteCard;