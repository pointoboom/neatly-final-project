import { Router } from "express";
import { pool } from "../utils/db.js";
const roomRouter = Router();

roomRouter.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM public.room_types ORDER BY room_types_id ASC`
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
      `select type_name,promotion_price from room_types where room_types_id = $1`,
      [roomid]
    );
    return res.json({
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

roomRouter.get("/admin/manage", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT room_no,type_name,bed_type,status_name FROM room_managements left join room_types on room_managements.room_types_id = room_types.room_types_id left join status on room_managements.status_id = status.status_id order by room_management_id ASC`
    );
    return res.json({
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

roomRouter.put("/admin/manage", async (req, res) => {
  try {
    const status_id = req.query.status_id;
    const room_no = req.query.room_no;

    const id = await pool.query(`select * from status where status_name = $1`, [
      status_id,
    ]);
    console.log(id.rows[0].status_id);

    const result = await pool.query(
      `UPDATE room_managements SET status_id = $1 WHERE room_no=$2 returning *`,
      [id.rows[0].status_id, room_no]
    );
    console.log(result.rows);
    return res.json({
      message: `Update status success`,
    });
  } catch (error) {
    console.log(error);
  }
});

roomRouter.get("/room-detail/:roomId", async (req, res) => {
  const roomId = req.params.roomId;
  const random = req.query.random;

  const result = await pool.query(
    `select * from room_types  where room_types_id = $1`,
    [roomId]
  );
  const randomRoom = await pool.query(
    `SELECT room_types_id, type_name, main_image_url, gallery_images_id FROM public.room_types
    WHERE room_types_id != $2
    ORDER BY RANDOM()
    LIMIT $1`,
    [random, roomId]
  );

  return res.json({
    data: result.rows[0],
    randomRoom: randomRoom.rows,
    message: "get room_types successfully returned",
  });
});

export default roomRouter;
