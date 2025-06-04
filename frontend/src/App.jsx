import { useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { Route,Routes,BrowserRouter} from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateNote from "./pages/CreateNote";
import NoteByid from "./pages/NoteByid";
function App() {
  const fetchNotes = async()=>{
    const notes = await axios.get("http://localhost:3000/api/notes")
    console.log(notes)
  }
useEffect(() => {

}, [])



  return(

    <div>
      <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/create" element={<CreateNote/>}></Route>
        <Route path="/note/:id" element={<NoteByid/>}></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
