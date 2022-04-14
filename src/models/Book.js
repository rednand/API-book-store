import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  nPaginas: { type: Number },
});

const books = mongoose.model("books", bookSchema);

export default books;
