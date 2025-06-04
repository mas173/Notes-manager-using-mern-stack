const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
 const express  = require('express');
const router = require("./routes/notesRoutes");
const dbConnection = require('./config/mongoDb');
const cors = require('cors')

  

 const app = express();
 const port =process.env.PORT
 console.log(process.env.CONNECTION_STRING)
 console.log(process.env.PORT)



 
 app.use(express.json())
 app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
 }));

 app.use("/api/notes",router)
 
 
 dbConnection().then(()=>{
  app.listen(port,()=>{
    console.log(`server started on port : ${port}`)
  })
})