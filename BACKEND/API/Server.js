import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { enviromentPORT } from "../env";
import userRoute from "./routes/users.route";
import groupRoute from "./routes/groups.route";
import missionRoute from "./routes/missions.route";
import mailRoute from "./routes/mail.route";
import recompensasRoute from "./routes/recompensas.route";

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors({ origin: "http://localhost:4200" }));
app.set("port", process.env.PORT || enviromentPORT);

//routes
app.use("/users", userRoute);
app.use("/groups", groupRoute);
app.use("/missions", missionRoute);
app.use("/mail", mailRoute);
app.use("/recompensas", recompensasRoute);

app.listen(app.get("port"), () => {
  console.log("scaldos server on port", app.get("port"));
});
