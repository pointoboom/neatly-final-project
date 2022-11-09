import authRouter from "./apps/auth.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// import stripe from "@stripe/react-stripe-js";

import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51M24ySDRndjoKiP4lJsOLIqFrmYrMkNKTKcH2rRemXwsdfQcjFBUcVgWFHInG0ohxnLCNKwGXYTIkdM8NR0nh9KM00DHS6yVbG"
);

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

  app.post("/payment", cors(), async (req, res) => {
    let { amount, id } = req.body;
    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: "Neatly Company",
        payment_method: id,
        confirm: true,
      });
      console.log("Payment", payment);
      res.json({
        message: "Payment successful",
        success: true,
      });
    } catch (error) {
      console.log("Error", error);
      res.json({
        message: "Payment failed",
        success: false,
      });
    }
  });
}
init();
