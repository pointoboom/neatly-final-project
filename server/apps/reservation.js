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

    ////// insert db

    if (payment.status == "succeeded") {
      const newReservations = {
        ...req.body,
        booking_date: new Date(),
        payment_method: "credit card",
      };

      console.log("newReservations", newReservations);

      const reservationsid = await pool.query(
        `insert into reservations
             (booking_date, check_in_date, check_out_date, room_type_id, amount, guest_no,payment_method)
             VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [
          newReservations.booking_date,
          newReservations.checkIn,
          newReservations.checkOut,
          newReservations.roomId,
          newReservations.amountRoom,
          newReservations.guest,
          newReservations.payment_method,
        ]
      );

      console.log(reservationsid.rows[0].reservation_id);
      // console.log(reservationsid.rows[0].userId);

      newReservations.specialRequest.map(async (item) => {
        const request_id = await pool.query(
          `SELECT * FROM request where have = $1 `,
          [item.req]
        );
        // console.log(request_id.rows[0].request_id);

        await pool.query(
          `insert into reservations_request
         (reservation_id, request_id)
         VALUES ($1, $2) `,
          [reservationsid.rows[0].reservation_id, request_id.rows[0].request_id]
        );
      });

      newReservations.standardRequest.map(async (item) => {
        const request_id = await pool.query(
          `SELECT * FROM request where have = $1 `,
          [item.standard_req]
        );
        // console.log(request_id.rows[0].request_id);

        await pool.query(
          `insert into reservations_request
         (reservation_id, request_id)
         VALUES ($1, $2) `,
          [reservationsid.rows[0].reservation_id, request_id.rows[0].request_id]
        );
      });

      await pool.query(
        `insert into bills
         (reservation_id, total_price)
         VALUES ($1, $2) `,
        [reservationsid.rows[0].reservation_id, newReservations.sumPrice]
      );

      await pool.query(
        `insert into users_reservations
         (reservation_id, user_id)
         VALUES ($1, $2) `,
        [reservationsid.rows[0].reservation_id, newReservations.userId]
      );

      res.json({
        message: "Payment successful",
        success: true,
        reservationsid: reservationsid.rows[0].reservation_id,
      });
    } else {
      res.json({
        message: "Payment failed",
        success: false,
      });
    }
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
