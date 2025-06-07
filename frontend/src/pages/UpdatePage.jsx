import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import {toast} from 'react-hot-toast'

const UpdatePage = () => {
  const [UpdateTitle,setUpdateTitle] = useState("");
  const [UpdateContent, setUpdateContent] = useState("");
  const Navigate = useNavigate();
  const {id} = useParams();
  const actual_id = id.split(":")[1];
  // console.log(actual_id)

// console.log(id)

 const FetchPrev = async()=>{
  
 const value = await axios.get(`http://localhost:3000/api/notes/${actual_id}`)
//  console.log(value.data)
setUpdateTitle(value.data.title)  
setUpdateContent(value.data.content)  

 }

  useEffect(() => {
  FetchPrev();
  
  
  },[])
  



  const handleUpdate = async (e)=>{
    e.preventDefault();
    console.log(UpdateTitle , UpdateContent)
  await axios.put(`http://localhost:3000/api/notes/${actual_id}`,{title:UpdateTitle,content:UpdateContent})
  
  Navigate("/")
  toast.success("updated sucessfully");

  }
  return (
    <div className='w-full h-screen bg-gray-600'>
<NavBar></NavBar>
  
    <form
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow"
       onSubmit={handleUpdate}
    >
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
        value={UpdateTitle}
          id="title"
          name="title"
          placeholder='title'
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          onChange={(e)=>{setUpdateTitle(e.target.value)}}/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2" >
          Content
        </label>
        <textarea
        value={UpdateContent}
        placeholder='enter your content'
          id="content"
          name="content"
          rows="4"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          onChange={(e)=>{setUpdateContent(e.target.value)}}></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
       >
        Update
      </button>
    </form>
      </div>
  )
}

export default UpdatePage