import React, { useState } from 'react'
import axios from 'axios'


const CreateNote = () => {

   const [Title, setTitle] = useState('')
   const [Content, setContent] = useState('')

   const HandleOnSubmit =async (e)=>{
  e.preventDefault();
await axios.post("http://localhost:3000/api/notes",{title:Title,content:Content});
console.log({Title,Content})


   }
  return (
    <div >
      <form  onSubmit={HandleOnSubmit} className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md space-y-4">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          onChange={(e)=>setTitle(e.target.value)}
          value={Title}
        
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Content</label>
        <textarea
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          rows="4"
          onChange={(e)=>setContent(e.target.value)}
          value={Content}
          
          required
        ></textarea>
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create
        </button>
        <button
          type="button"
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        
        >
          Delete
        </button>
      </div>
    </form>
    </div>
  )
}

export default CreateNote