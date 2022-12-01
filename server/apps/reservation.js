import { Router } from "express";
import { pool } from "../utils/db.js";
import {
  reserveRoom,
  getCustomerBooking,
  getCustomerBookingDetails,
  getReserveById,
} from "../controllers/reservation.controller.js";
const reserveRouter = Router();

reserveRouter.post("/", async (req, res) => {
  reserveRoom(req, res);
});

reserveRouter.get("/:id", async (req, res) => {
  getReserveById(req, res);
});

reserveRouter.get("/admin/customerbooking", async (req, res) => {
  getCustomerBooking(req, res);
});

reserveRouter.get("/admin/customerbookingdetails/:id", async (req, res) => {
  getCustomerBookingDetails(req, res);
});
// reserveRouter.get("/rooms/admin/manage", async (req, res) => {
//   try {
//     const result = await pool.query(
//       " SELECT room_no, type_name, bed_type, status_name FROM room_managements left join room_types on room_managements.room_types_id = room_types.room_types_id left join status on room_managements.status_id = status.status_id"
//     );
//     return res.json({
//       data: result.rows,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

//Edit room property
// reserveRouter.get("/admin/roompropertyedit/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const result = await pool.query(
//       `select * from room_types where room_types_id = $1`,
//       [id]
//     );

//     return res.json({
//       data: result.rows,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });
export default reserveRouter;
