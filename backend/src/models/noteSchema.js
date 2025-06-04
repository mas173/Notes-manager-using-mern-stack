 const mongoose = require("mongoose")

 const noteSchema = new mongoose.Schema({
  title:{
    type:String,
    required:[true,"the field is mandatory"]
  },
  content: {
        type:String,
    required:[true,"the field is mandatory"]
  }
 },{timestamps:true})


 module.exports = mongoose.model("Note",noteSchema)