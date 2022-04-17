import express from "express";
import { Router } from "express";
import bookController from "../controllers/booksController.js";

const router = express.Router();

router
  .get("/livros", bookController.listBooks)
  .get("/livros/busca", bookController.listBooksByPublisher)
  .get("/livros/:id", bookController.listBookById)
  .post("/livros", bookController.createBook)
  .put("/livros/:id", bookController.updateBook)
  .delete("/livros/:id", bookController.deleteBook);

export default router;
