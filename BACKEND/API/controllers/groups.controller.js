import mongoose from "mongoose";
import Groups from "../models/groups";
import Group_Users from "../models/group_users";
import User from "../models/users";
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

export const addUserToGroup = async (req,res) => {
    var db = MongoConection();
    var group_users = new Group_Users({
      code_group: Groups.findOne(req.body.Name_Group),
      code_user: User.findOne(req.body.Name_User)
    });
    
    db.once("open", () => {
      group_users.save((err,Group_Users) => {
        if (err) return console.error(err);
        res.json({message: "Usuario añadido correctamente"});
      });
    });
};
