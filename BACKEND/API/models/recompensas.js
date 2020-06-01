import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Recompensas = new Schema({
  Nombre: String,
  Valor: Number,
});

export default mongoose.model("recompensas", Recompensas);
