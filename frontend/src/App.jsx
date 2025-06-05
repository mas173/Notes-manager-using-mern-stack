import { useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { Route,Routes,BrowserRouter} from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateNote from "./pages/CreateNote";
import NoteByid from "./pages/NoteByid";
import { useState } from "react";
function App() {

  return(

    <div>
      <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/create" element={<CreateNote/>}></Route>
        <Route path="/note/:id" element={<NoteByid/>}></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
