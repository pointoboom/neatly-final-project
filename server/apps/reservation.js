import { Router } from "express";
import { pool } from "../utils/db.js";
import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51M3GnmJPsAkb5CJr0bn5EbkjmC74103qjI3F5nR5iOTGdkEoWfgzw0DASleURWLOwC2ojBNX5RAS2c5iFiLuihDY00oj8F1qLs"
);
const reserveRouter = Router();
import moment from "moment";

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
        created_at: new Date(),
      };

      console.log("newReservations", newReservations);

      //1
      const reservationsid = await pool.query(
        `insert into reservations
             (booking_date, check_in_date, check_out_date, room_type_id, amount, guest_no,payment_method)
             VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [
          newReservations.booking_date,
          moment(newReservations.checkIn).format(),
          moment(newReservations.checkOut).format(),
          newReservations.roomId,
          newReservations.amountRoom,
          newReservations.guest,
          newReservations.payment_method,
        ]
      );

      console.log("reservation_id", reservationsid.rows[0].reservation_id);
      // console.log(reservationsid.rows[0].userId);

      newReservations.specialRequest.map(async (item) => {
        let req_id;
        if (item.req === "Baby cot") req_id = 6;
        else if (item.req === "Airport transfer") req_id = 7;
        else if (item.req === "Extra bed") req_id = 8;
        else if (item.req === "Extra pillows") req_id = 9;
        else if (item.req === "Phone chargers and adapters") req_id = 10;
        else if (item.req === "Breakfast") req_id = 11;

        await pool.query(
          `insert into reservations_request
         (reservation_id, request_id)
         VALUES ($1, $2) `,
          [reservationsid.rows[0].reservation_id, req_id]
        );

        // const request_id = await pool.query(
        //   `SELECT * FROM request where have = $1 `,
        //   [item.req]
        // );
        // // console.log(request_id.rows[0].request_id);
        // await pool.query(
        //   `insert into reservations_request
        //  (reservation_id, request_id)
        //  VALUES ($1, $2) `,
        //   [reservationsid.rows[0].reservation_id, request_id.rows[0].request_id]
        // );
      });

      newReservations.standardRequest.map(async (item) => {
        let req_id;
        if (item.standard_req === "Early check-in") req_id = 1;
        else if (item.standard_req === "Late check-out") req_id = 2;
        else if (item.standard_req === "Non-smoking room") req_id = 3;
        else if (item.standard_req === "A room on the high floor") req_id = 4;
        else if (item.standard_req === "A quiet room") req_id = 5;

        await pool.query(
          `insert into reservations_request
         (reservation_id, request_id)
         VALUES ($1, $2) `,
          [reservationsid.rows[0].reservation_id, req_id]
        );
        // const request_id = await pool.query(
        //   `SELECT * FROM request where have = $1 `,
        //   [item.standard_req]
        // );
        // // console.log(request_id.rows[0].request_id);

        // await pool.query(
        //   `insert into reservations_request
        //  (reservation_id, request_id)
        //  VALUES ($1, $2) `,
        //   [reservationsid.rows[0].reservation_id, request_id.rows[0].request_id]
        // );
      });

      //2
      await pool.query(
        `insert into bills
         (reservation_id, total_price,created_at)
         VALUES ($1, $2, $3) `,
        [
          reservationsid.rows[0].reservation_id,
          newReservations.sumPrice,
          newReservations.created_at,
        ]
      );

      //3
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
    "SELECT * FROM reservations LEFT  JOIN reservations_request ON reservations.reservation_id = reservations_request.reservation_id LEFT  JOIN request ON reservations_request.request_id = request.request_id LEFT  JOIN bills ON reservations.reservation_id = bills.reservation_id LEFT  JOIN users_reservations ON users_reservations.reservation_id = reservations.reservation_id LEFT  JOIN users ON users_reservations.user_id = users.user_id LEFT JOIN room_types ON room_types.room_types_id = reservations.room_type_id where reservations.reservation_id = $1",
    [roomid]
  );
  return res.json({
    data: result.rows,
  });
});
export default reserveRouter;
