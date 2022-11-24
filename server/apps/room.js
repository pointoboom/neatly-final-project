import { Router } from "express";
import { pool } from "../utils/db.js";
const roomRouter = Router();
import moment from "moment";

roomRouter.get("/", async (req, res) => {
  const startdate = moment(req.query.startdate).format("YYYY-MM-DD");
  const enddate = moment(req.query.enddate).format("YYYY-MM-DD");
  const guest = req.query.guest;

  try {
<<<<<<< HEAD
    if (startdate === "Invalid date" || enddate === "Invalid date") {
      const result = await pool.query(
        "SELECT * FROM public.room_types ORDER BY room_types_id ASC "
      );

      return res.json({
        data: result.rows,
        dissableroom: [],
      });
    } else {
      const result = await pool.query(
        "SELECT * FROM public.room_types ORDER BY room_types_id ASC "
      );

      let query = `select count(room_type_id),room_type_id from reservations INNER JOIN room_types ON room_types.room_types_id = reservations.room_type_id WHERE ('${startdate} 14:01:00'  BETWEEN check_in_date and check_out_date) or  ('${enddate} 11:59:00'  BETWEEN check_in_date and check_out_date) or ('${startdate} 14:01:00' <= check_in_date AND '${enddate} 11:59:00' >= check_out_date )  GROUP BY room_type_id`;

      const result1 = await pool.query(query);

      const count1 = await pool.query(
        "SELECT count(room_types.room_types_id),room_types.room_types_id from room_managements INNER JOIN room_types on room_types.room_types_id = room_managements.room_types_id GROUP BY room_types.room_types_id  "
      );

      const notReserve = count1.rows.filter((item) => {
        for (let i of result1.rows) {
          if (i.room_type_id === item.room_types_id) {
            if (i.count >= item.count) {
              return item;
            }
          }
        }
      });

      return res.json({
        data: result.rows,
        maxroom: count1.rows,
        dissableroom: notReserve,
      });
    }
  } catch (error) {
    console.log(error);
  }
=======
    const result = await pool.query(
      `SELECT * FROM public.room_types ORDER BY room_types_id ASC`
    );
    return res.json({
      data: result.rows,
    });
  } catch (error) {}
>>>>>>> 6909849 (feat:update room status)
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 690984953b3f4749dd148c3cf38c934eb1e4af8f
roomRouter.put("/admin/manage", async (req, res) => {
  try {
    const status_id = req.query.status_id;
    const room_no = req.query.room_no;
<<<<<<< HEAD
=======

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
>>>>>>> 690984953b3f4749dd148c3cf38c934eb1e4af8f

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

>>>>>>> 6909849 (feat:update room status)
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
