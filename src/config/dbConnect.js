import mongoose from "mongoose";
import "dotenv/config";

const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(
  `mongodb+srv://${USER}:${PASSWORD}@books.x7ro4.mongodb.net/bookStore`
);

let db = mongoose.connection;

export default db;
