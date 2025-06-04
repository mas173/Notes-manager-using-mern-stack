import { useEffect } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const fetchNotes = async()=>{
    const notes = await axios.get("http://localhost:3000/api/notes")
    console.log(notes)
  }
useEffect(() => {

}, [])



  return(

    <div>hi</div>
  )
}

export default App
