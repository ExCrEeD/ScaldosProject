import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { enviromentPORT } from "../env";
import userRoute from "./routes/users.route";
import groupRoute from "./routes/groups.route";

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

app.listen(app.get("port"), () => {
  console.log("scaldos server on port", app.get("port"));
});
