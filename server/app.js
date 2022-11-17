import authRouter from "./apps/auth.js";
import roomRouter from "./apps/room.js";
import reserveRouter from "./apps/reservation.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
async function init() {
  dotenv.config();
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true,
  });
  const app = express();
  const port = 4000;

  app.use(cors());
  app.use(bodyParser.json());
  app.use("/auth", authRouter);
  app.use("/rooms", roomRouter);
  app.use("/reserve", reserveRouter);

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.get("*", (req, res) => {
    res.status(404).send("Not found");
  });

  app.use("/auth", authRouter);
  app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
  });
}
init();
