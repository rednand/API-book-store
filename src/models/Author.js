import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    nacionalidade: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const authors = mongoose.model("authors", authorSchema);

export default authors;
