import Missions from "../models/missions";
import { MongoConection } from "../database/mongoConection";

export const newMIssion = async (req, res) => {
  var db = MongoConection();
  var mission = new Missions({
    Title: req.body.Title,
    Description: req.body.Description,
    AmountReward: req.body.AmountReward,
    Difficulty: req.body.Difficulty,
  });

  db.once("open", () => {
    mission.save((err, Missions) => {
      if (err) return console.error(err);
      res.json({ message: "Mision Creada Correctamente" });
    });
  });
};

export const getMission = async (req, res) => {
  MongoConection();
  Missions.findOne({ Id: req.body.Id }, (err, mission) => {
    if (err) return handleError(err);
    console.log(mission);
    if (mission == null) return res.json("Mision no encontrada");
    else return res.json(mission);
  });
};

export const deleteMission = async (req, res) => {
  MongoConection();
  Missions.deleteOne({ Id: req.body.Id }, (err, mission) => {
    if (err) return handleError(err);
    console.log(mission);
    if (mission == null) return res.json("La mision no existe");
    else
      return res.json({ message: "La mision ha sido eliminada correctamente" });
  });
};
