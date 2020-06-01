import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Cities = new Schema({
  idCity:String,
  Name: String,
  Missions,
  Users

});

export default mongoose.model("cities", Cities);