import mongoose from "mongoose";
import Users from "../models/users";
import { mongoPath, mongoDb } from "../../env";
import { MongoConection } from "../database/mongoConection";

export const newUser = async (req, res) => {
  var db = MongoConection();
  var user = new Users({
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password,
  });

  db.once("open", () => {
    user.save((err, Users) => {
      if (err) return console.error(err);
      res.json({ message: "Usuario Registrado Correctamente" });
    });
  });
};

export const login = async (req, res) => {
  var userlogin = new Users({
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password,
  });
  MongoConection();
  Users.findOne({ Name: userlogin.Name }, (err, user) => {
    if (err) return handleError(err);
    console.log(user);
    if (user == null) return res.json("usuario y/o contraseña incorrecto");
    if (user.Password === userlogin.Password) return res.json("valido");
    else return res.json("usuario y/o contraseña incorrecto");
  });
};
