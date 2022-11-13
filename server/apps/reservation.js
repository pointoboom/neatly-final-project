import { Router } from "express";
import { pool } from "../utils/db.js";
import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51M3GnmJPsAkb5CJr0bn5EbkjmC74103qjI3F5nR5iOTGdkEoWfgzw0DASleURWLOwC2ojBNX5RAS2c5iFiLuihDY00oj8F1qLs"
);
const reserveRouter = Router();

reserveRouter.post("/", async (req, res) => {
  try {
    const paymentMethod = await stripe.paymentMethods.create({
      type: "card",
      card: {
        number: String(req.body.cardNumber),
        exp_month: Number(req.body.exp_month),
        exp_year: Number(req.body.exp_year),
        cvc: String(req.body.cvc),
      },
    });
    const payment = await stripe.paymentIntents.create({
      amount: req.body.sumPrice,
      currency: "THB",
      description: "Neatly Company",
      payment_method: paymentMethod.id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    // console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

reserveRouter.get("/:roomid", async (req, res) => {
  const roomid = req.params.roomid;

  const result = await pool.query(
    "select type_name,promotion_price from room_types where room_types_id = $1",
    [roomid]
  );
  return res.json({
    data: result.rows,
  });
});
export default reserveRouter;
