import express from "express";
import bookController from "../controllers/booksController.js";

const router = express.Router();

router
  .get("/livros", bookController.listBooks)
  .post("/livro", bookController.createBook);

export default router;
