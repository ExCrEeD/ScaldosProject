import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Users = new Schema({
  Name: String,
  Email: String,
  Password: String,
  Rol: String,
});

export default mongoose.model("users", Users);
