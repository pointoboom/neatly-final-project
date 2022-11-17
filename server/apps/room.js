import { Router } from "express";
import { pool } from "../utils/db.js";
const roomRouter = Router();

roomRouter.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM public.room_types ORDER BY room_types_id ASC "
    );
    return res.json({
      data: result.rows,
    });
  } catch (error) {}
});

roomRouter.get("/:roomid", async (req, res) => {
  try {
    const roomid = req.params.roomid;

    const result = await pool.query(
      "select type_name,promotion_price from room_types where room_types_id = $1",
      [roomid]
    );
    return res.json({
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

roomRouter.get("/manage", async (req, res) => {
  try {
    const roomid = req.params.roomid;

    const result = await pool.query(
      "SELECT room_no,type_name,bed_type,status_name FROM room_managements left join room_types on room_managements.room_types_id = room_types.room_types_id left join status on room_managements.status_id = status.status_id"
    );
    return res.json({
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
});
export default roomRouter;
