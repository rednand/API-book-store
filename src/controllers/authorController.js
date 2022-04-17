import authors from "../models/Author.js";

class authorController {
  static listauthor = (req, res) => {
    authors.find((err, author) => {
      res.status(200).json(author);
    });
  };

  static listAuthorById = (req, res) => {
    const id = req.params.id;

    authors.findById(id, (err, author) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - id do livro não localizado ` });
      } else {
        res.status(200).send(author);
      }
    });
  };

  static createAuthor = (req, res) => {
    let author = new authors(req.body);
    author.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar autor` });
      } else {
        res.status(201).send(author.toJSON());
      }
    });
  };

  static updateAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Autor atualizado com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Autor removido com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default authorController;
