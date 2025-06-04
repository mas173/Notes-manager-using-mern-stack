const express = require("express");
const { getAllNotes, addNotes, updateNotes, deleteNotes, getNoteById } = require("../controllers/noteController");

const router = express.Router();

router.get("/",getAllNotes)
router.get("/:id",getNoteById)
router.post("/",addNotes)
router.put("/:id",updateNotes)
router.delete("/:id",deleteNotes)

module.exports = router;