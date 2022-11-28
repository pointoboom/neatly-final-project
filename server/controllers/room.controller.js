import { Router } from "express";
import { pool } from "../utils/db.js";
import { RoomImageUpload } from "../utils/upload.js";
import moment from "moment";

export async function CreateRoom(req, res) {
  try {
    const newRoom = {
      ...req.body,
    };
    const imgUrl = await RoomImageUpload(req.files);
    const mainImg = imgUrl[0].main_url;
    const tempGalImg = imgUrl.filter((item) => {
      if ("gal_url" in item) {
        return item;
      }
    });
    const galImg = tempGalImg.map((item) => item.gal_url);
    const insertRoomResult = await pool.query(
      `insert into room_types
             (type_name, room_size, bed_type, guest, max_guest, no_of_bed,
             price, promotion_price, description, amenity, admin_id, main_images, gallery_images,main_image_url,gallery_images_id,amenity_id)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13,$14,$15,$16) returning *`,
      [
        newRoom.room_type,
        `${newRoom.room_size} sqm`,
        newRoom.bed_type,
        newRoom.guest,
        newRoom.guest,
        newRoom.guest,
        newRoom.price,
        newRoom.price - 500,
        newRoom.description,
        newRoom.amenity,
        newRoom.user_id,
        mainImg,
        galImg,
        "test",
        "test",
        1,
      ]
    );
    const roomID = insertRoomResult.rows[0].room_types_id;
    const roomnum = await pool.query(
      `SELECT room_no from room_managements ORDER BY room_no DESC`
    );
    let room_no = "";
    if (roomnum.rows.length === 0) {
      room_no = "001";
    } else {
      room_no = Number(roomnum.rows[0].room_no) + 1;
      room_no = String(room_no);
      for (let i = 0; i < 3 - room_no.length; i++) {
        room_no = "0" + room_no;
      }
    }
    await pool.query(
      `insert into room_managements
             (admin_id, room_no, room_types_id, status_id)
             VALUES ($1, $2, $3, $4) `,
      [newRoom.user_id, room_no, roomID, 1]
    );
    console.log("success");
    return res.json({
      message: "Create room successfully",
    });
  } catch (error) {
    console.log(error);
  }
}

export async function GetRoomDetail(req, res) {
  try {
    const roomId = req.params.roomId;
    const random = req.query.random;

    const result = await pool.query(
      `select * from room_types  where room_types_id = $1`,
      [roomId]
    );
    const randomRoom = await pool.query(
      `SELECT room_types_id, type_name, main_images, gallery_images_id FROM public.room_types
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
  } catch (error) {
    console.log(error);
  }
}

export async function GetRoomManagement(req, res) {
  try {
    const roomid = req.params.roomid;
    const search = `%${req.query.search.toLowerCase()}%`;

    let query = "";
    let values = [];

    if (search) {
      query = `SELECT room_no,type_name,bed_type,status_name
        FROM room_managements
        left join room_types on room_managements.room_types_id = room_types.room_types_id
        left join status on room_managements.status_id = status.status_id
        where room_no LIKE $1
        or LOWER(type_name) LIKE $1
        or LOWER(bed_type) LIKE $1
        or LOWER(status_name)  LIKE $1
        order by room_no asc`;
      values = [search];
    } else {
      query =
        "SELECT room_no,type_name,bed_type,status_name FROM room_managements left join room_types on room_managements.room_types_id = room_types.room_types_id left join status on room_managements.status_id = status.status_id order by room_no asc";
    }

    const result = await pool.query(query, values);
    return res.json({
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
}
export async function EditRoomManagement(req, res) {
  try {
    const status_id = req.query.status_id;
    const room_no = req.query.room_no;
    const id = await pool.query(`select * from status where status_name = $1`, [
      status_id,
    ]);
    const result = await pool.query(
      `UPDATE room_managements SET status_id = $1 WHERE room_no=$2 returning *`,
      [id.rows[0].status_id, room_no]
    );
    return res.json({
      message: `Update status success`,
    });
  } catch (error) {
    console.log(error);
  }
}
export async function GetRoomByID(req, res) {
  try {
    const roomid = req.params.roomid;

    const result = await pool.query(
      "select * from room_types where room_types_id = $1",
      [roomid]
    );
    return res.json({
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function SearchRoom(req, res) {
  const startdate = moment(req.query.startdate).format("YYYY-MM-DD");
  const enddate = moment(req.query.enddate).format("YYYY-MM-DD");
  const guest = req.query.guest;

  try {
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
}
