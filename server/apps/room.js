import { Router } from "express";
import { pool } from "../utils/db.js";
const roomRouter = Router();

roomRouter.get("/", async (req, res) => {
  const result = await pool.query("select * from room_types");
  console.log(result);

  return res.json({
    data: result.rows,
  });
});
export default roomRouter;
