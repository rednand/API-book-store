import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://rednand:10023@books.x7ro4.mongodb.net/bookStore"
);

let db = mongoose.connection;

export default db;
