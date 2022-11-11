import { Router } from "express";
import { pool } from "../utils/db.js";
const roomRouter = Router();

roomRouter.get("/", async (req, res) => {
  const result = await pool.query("select * from room_types");
  return res.json({
    data: result.rows,
  });
});

roomRouter.get("/:roomid", async (req, res) => {
  const roomid = req.params.roomid;

  const result = await pool.query(
    "select type_name,promotion_price from room_types where room_types_id = $1",
    [roomid]
  );
  return res.json({
    data: result.rows,
  });
});
export default roomRouter;
