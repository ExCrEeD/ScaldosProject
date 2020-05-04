import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Missions = new Schema({
  Id: Number,
  Title: String,
  Description: String,
  AmountReward: Number,
  Difficulty: String,
});

export default mongoose.model("missions", Missions);
