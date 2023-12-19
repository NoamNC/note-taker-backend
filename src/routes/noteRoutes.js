const express = require("express");
const {
  createNote,
  getNoteById,
  getAllNotes,
  editNote,
  deleteNote,
} = require("../controllers/noteController");

const noteRoutes = express.Router();

noteRoutes.post("/create", createNote);

noteRoutes.get("/all", getAllNotes);

noteRoutes.get("/:id", getNoteById);

noteRoutes.put("/:id", editNote);

noteRoutes.delete("/:id", deleteNote);

module.exports = noteRoutes;
