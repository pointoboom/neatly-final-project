import { Router } from "express";
import { pool } from "../utils/db.js";
import { RoomImageUpload } from "../utils/upload.js";
import {
  CreateRoom,
  GetRoomDetail,
  GetRoomManagement,
  EditRoomManagement,
  GetRoomByID,
  SearchRoom,
  DeleteRoomById,
} from "../controllers/room.controller.js";
import multer from "multer";
const multerUpload = multer({ dest: "uploads/" });
const avatarUpload = multerUpload.fields([
  { name: "main_img", maxCount: 2 },
  { name: "gallery_img", maxCount: 10 },
]);
const roomRouter = Router();

roomRouter.get("/", async (req, res) => {
  SearchRoom(req, res);
});

roomRouter.get("/:roomid", async (req, res) => {
  GetRoomByID(req, res);
});

roomRouter.get("/admin/manage", async (req, res) => {
  GetRoomManagement(req, res);
});

roomRouter.put("/admin/manage", async (req, res) => {
  EditRoomManagement(req, res);
});

roomRouter.get("/room-detail/:roomId", async (req, res) => {
  GetRoomDetail(req, res);
});

roomRouter.post("/newroom", avatarUpload, async (req, res) => {
  CreateRoom(req, res);
});

roomRouter.put("/:roomid", avatarUpload, async (req, res) => {
  console.log(req.params.roomid);
  const result = await pool.query(
    `update room_types set type_name=$1, room_size=$2, bed_type=$3, guest=$4, max_guest=$5, no_of_bed=$6,
             price=$7, promotion_price=$8, description=$9, amenity=$10, admin_id=$11, main_images=$12, gallery_images=$13,main_image_url=$14,gallery_images_id=$15,amenity_id=$16  where room_types_id = $17`,
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
      roomId,
    ]
  );
});
roomRouter.delete("/:roomid", avatarUpload, async (req, res) => {
  DeleteRoomById(req, res);
});

export default roomRouter;
