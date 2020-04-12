import mongoose from "mongoose";
import Groups from "../models/groups";
import { mongoPath, mongoDb } from "../../env";
import { MongoConection } from "../database/mongoConection";

export const newGroup = async (req, res) => {
  var db = MongoConection();
  var group = new Groups({
    Name: req.body.Name   , 
    Description : req.body.Description
  });

  db.once("open", () => {
    group.save((err, Groups) => {
      if (err) return console.error(err);
      res.json({ message: "Grupo Creado Correctamente" });
    });
  });
};

