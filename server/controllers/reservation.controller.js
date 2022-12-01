import { pool } from "../utils/db.js";
import { RoomImageUpload } from "../utils/upload.js";
import moment from "moment";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const stripe = new Stripe(process.env.STRIPE_KEY);
export async function reserveRoom(req, res) {
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
    ////// insert db

    if (payment.status == "succeeded") {
      const newReservations = {
        ...req.body,
        booking_date: new Date(),
        payment_method: "credit card",
        created_at: new Date(),
      };
      //1
      const reservationsid = await pool.query(
        `insert into reservations
             (booking_date, check_in_date, check_out_date, room_type_id, amount, guest_no,payment_method)
             VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [
          newReservations.booking_date,
          moment(newReservations.checkIn).set({ hour: 14, minute: 0 })._d,
          moment(newReservations.checkOut).set({ hour: 12, minute: 0 })._d,
          newReservations.roomId,
          newReservations.amountRoom,
          newReservations.guest,
          newReservations.payment_method,
        ]
      );
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
}
export async function getCustomerBooking(req, res) {
  try {
    const keywords = req.query.keywords;
    if (keywords) {
      const result = await pool.query(
        "select users.fullname, room_types.guest, room_types.type_name, bills.total_price, reservations.amount,room_types.bed_type, check_in_date, check_out_date, users.user_id, reservations.reservation_id  from reservations inner join users_reservations on reservations.reservation_id = users_reservations.reservation_id inner join users on users_reservations.user_id = users.user_id inner join room_types on reservations.room_type_id = room_types.room_types_id inner join bills on reservations.reservation_id = bills.reservation_id where users.fullname ilike $1",
        [`%${keywords}%`]
      );
      return res.json({
        data: result.rows,
      });
    } else {
      const result = await pool.query(
        "select users.fullname, room_types.guest, room_types.type_name, bills.total_price, reservations.amount,room_types.bed_type, check_in_date, check_out_date, users.user_id, reservations.reservation_id  from reservations inner join users_reservations on reservations.reservation_id = users_reservations.reservation_id inner join users on users_reservations.user_id = users.user_id inner join room_types on reservations.room_type_id = room_types.room_types_id inner join bills on reservations.reservation_id = bills.reservation_id order by check_in_date asc "
      );

      return res.json({
        data: result.rows,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getCustomerBookingDetails(req, res) {
  try {
    const id = req.params.id;
    const result = await pool.query(
      `select * from reservations left join reservations_request on reservations.reservation_id = reservations_request.reservation_id 
  left join request on request.request_id = reservations_request.request_id left join users_reservations on reservations.reservation_id = users_reservations.reservation_id left join users on users_reservations.user_id = users.user_id left join room_types on reservations.room_type_id = room_types.room_types_id 
  left join bills on reservations.reservation_id = bills.reservation_id where reservations.reservation_id = $1 order by reservations.reservation_id asc `,
      [id]
    );

    return res.json({
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
}
