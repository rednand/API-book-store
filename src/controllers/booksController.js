import books from "../models/Book.js";

class bookController {
  static listBooks = (req, res) => {
    books.find((err, books) => {
      res.status(200).json(books);
    });
  };

  static createBook = (req, res) => {
    let book = new books(req.body);
    book.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar livro` });
      } else {
        res.status(201).send(book.toJSON());
      }
    });
  };
}

export default bookController;
