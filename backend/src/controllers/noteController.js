const Note = require("../models/noteSchema");



const getNoteById = async(req,res)=>{
  try {
    const noteid = req.params.id;
    console.log(noteid)
     const noteById = await Note.findById(noteid);
     console.log(noteById);

    if (noteById) {
res.status(200).json(noteById);
    }
  } catch (error) {
    console.error(error.message);
    res.status(404).send("invalid credentials");
  }

}


const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({createdAt:-1});// sort the list in decending order
    if (notes) {
      res.json({ message: notes });
    }
    // res.status(200).json({message:"these are the list of all the notes"})
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
  }
};

const addNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (title || content) {
      const newNote = await Note.create({
        title,
        content,
      });

      res.status(201).json(newNote);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
  }
};

const updateNotes = async (req, res) => {
  try {
    const noteid = req.params.id;
    const { title, content } = req.body;
    // console.log(noteid,req.body)

    const checkNote = await Note.findById(noteid);

    if (checkNote || title || content) {
      const updatedNote = await Note.findByIdAndUpdate(noteid, req.body, {
        new: true,
      });

      res.status(201).json(updatedNote);
    }
  } catch (error) {
    console.error(error.message);
    res.status(404).send("invalid credentials");
  }
};

const deleteNotes = async (req, res) => {
  try {
    const noteid = req.params.id;
    const { title, content } = req.body;
    // console.log(noteid,req.body)

    const checkNote = await Note.findById(noteid);

    if (checkNote || title || content) {
      const updatedNote = await Note.findByIdAndDelete(noteid, {
        projection: { title: 1, content: 1 },
      });

      res.status(201).json(updatedNote);
    }
  } catch (error) {
    console.error(error.message);
    res.status(404).send("invalid credentials");
  }
};

module.exports = { getAllNotes, updateNotes, addNotes, deleteNotes,getNoteById };
