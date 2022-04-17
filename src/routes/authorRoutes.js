import express from "express";
import { Router } from "express";
import AuthorController from "../controllers/authorController.js";

const router = express.Router();

router
  .get("/authors", AuthorController.listauthor)
  .get("/author/:id", AuthorController.listAuthorById)
  .post("/authors", AuthorController.createAuthor)
  .put("/author/:id", AuthorController.updateAuthor)
  .delete("/author/:id", AuthorController.deleteAuthor);

export default router;
