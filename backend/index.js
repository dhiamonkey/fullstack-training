import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
mongoose.connect("mongodb://localhost:27017/fullstack_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("err", (err) => console.log(err));
db.once("open", () => console.log("database connected"));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(3080, () => console.log("up an running"));
