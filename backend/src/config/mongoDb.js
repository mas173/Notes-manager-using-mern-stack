const mongoose = require('mongoose');


const dbConnection = async ()=>{
  try {
  const connect =  await mongoose.connect(process.env.CONNECTION_STRING);

    console.log("DB connection successful")
    
  } catch (error) {
    
    console.error("connection error:",error.message)
    process.exit(1)
  }
}

module.exports = dbConnection;
