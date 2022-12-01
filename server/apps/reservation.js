import { Router } from "express";
import { pool } from "../utils/db.js";
import {
  reserveRoom,
  getCustomerBooking,
  getCustomerBookingDetails,
} from "../controllers/reservation.controller.js";
const reserveRouter = Router();
import moment from "moment";

reserveRouter.post("/", async (req, res) => {
  reserveRoom(req, res);
});

reserveRouter.get("/:id", async (req, res) => {
  try {
    const reserveid = req.params.id;
    const result = await pool.query(
      "SELECT *  FROM reservations LEFT  JOIN reservations_request ON reservations.reservation_id = reservations_request.reservation_id LEFT  JOIN request ON reservations_request.request_id = request.request_id LEFT  JOIN bills ON reservations.reservation_id = bills.reservation_id LEFT  JOIN users_reservations ON users_reservations.reservation_id = reservations.reservation_id LEFT  JOIN users ON users_reservations.user_id = users.user_id LEFT JOIN room_types ON room_types.room_types_id = reservations.room_type_id where reservations.reservation_id = $1",
      [reserveid]
    );
    return res.json({
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

reserveRouter.get("/admin/customerbooking", async (req, res) => {
  getCustomerBooking(req, res);
});

reserveRouter.get("/admin/customerbookingdetails/:id", async (req, res) => {
  getCustomerBookingDetails(req, res);
});
reserveRouter.get("/rooms/admin/manage", async (req, res) => {
  try {
    const result = await pool.query(
      " SELECT room_no, type_name, bed_type, status_name FROM room_managements left join room_types on room_managements.room_types_id = room_types.room_types_id left join status on room_managements.status_id = status.status_id"
    );
    return res.json({
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

//Edit room property
reserveRouter.get("/admin/roompropertyedit/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query(
      `select * from room_types where room_types_id = $1`,
      [id]
    );

    return res.json({
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
});
export default reserveRouter;
