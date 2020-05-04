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
    Rol: req.body.Rol,
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
  Users.findOne({ Email: userlogin.Email }, (err, user) => {
    if (err) return handleError(err);
    console.log(user);
    if (user == null)
      return res.status(400).json("usuario y/o contraseña incorrecto");
    if (user.Password === userlogin.Password) return res.json(user);
    else return res.status(400).json("usuario y/o contraseña incorrecto");
  });
};
