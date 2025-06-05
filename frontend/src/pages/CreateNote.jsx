import React, { useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import {Camera ,ArrowLeft} from "lucide-react"

const CreateNote = () => {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  const HandleOnSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/notes", {
      title: Title,
      content: Content,
    });
    console.log({ Title, Content });
    toast.success("created sucessfully")
    setTitle("");
    setContent("");
  };
  return (
    <div className="bg-gray-600 h-screen w-screen ">
      <NavBar></NavBar>
      <form
        onSubmit={HandleOnSubmit}
        className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md space-y-4 mt-3"
      >
        <div className="p-2 "><Link className="flex gap-2 text-gray-800 font-mono" to={"/"} > <ArrowLeft /><span>back to home</span> </Link></div>
        <div >
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            onChange={(e) => setTitle(e.target.value)}
            value={Title}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Content</label>
          <textarea
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows="4"
            onChange={(e) => setContent(e.target.value)}
            value={Content}
            required
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Create
          </button>

        </div>
      </form>
    </div>
  );
};

export default CreateNote;
