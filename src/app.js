import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();

app.use(express.json());

routes(app);

// const livros = [
//   {
//     id: 1,
//     titulo: "O iluminado",
//   },
//   { id: 2, titulo: "Zona morta" },
// ];

app.get("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(books[index]);
});

app.put("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  books[index].titulo = req.body.titulo;
  res.json(books);
});

app.delete("/livros/:id", (req, res) => {
  let { id } = req.params;
  let index = buscaLivro(id);
  books.splice(index, 1);
  res.send(`Livro ${id} removido com sucesso`);
});

function buscaLivro(id) {
  return books.findIndex((livro) => livro.id == id);
}
export default app;
