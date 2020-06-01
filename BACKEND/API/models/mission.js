import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Missions = new Schema({
  IdMission: String,
  Title: String,
  Descrption: String,
  Reward: Number,
  Difficulty: String, 
  Amount: Number
});

export default mongoose.model("mission", Missions);