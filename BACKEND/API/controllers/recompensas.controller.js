import Recompensas from "../models/recompensas";
import { MongoConection } from "../database/mongoConection";

export const nuevaRecompensa = async (req, res) => {
  var db = MongoConection();
  var recompensa = new Recompensas({
    Nombre: req.body.Nombre,
    Valor: req.body.Valor,
  });

  db.once("open", () => {
    recompensa.save((err, Recompensas) => {
      if (err) return console.error(err);
      res.json({ message: "Recompensa Creada Correctamente" });
    });
  });
};

export const obtenerRecompensas = async (req, res) => {
  MongoConection();
  const all = await Recompensas.find({});
  res.json(all);
};
