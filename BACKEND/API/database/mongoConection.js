import mongoose from "mongoose";
import { mongoPath, mongoDb } from "../../env";

export const MongoConection = () => {
  mongoose
    .connect(`${mongoPath}${mongoDb}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.log(err);
    });
  return mongoose.connection;
};
