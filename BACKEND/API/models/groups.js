import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Groups = new Schema({
  Name: String,
  Description: String ,
});

export default mongoose.model("groups", Groups);