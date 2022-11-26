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

export default roomRouter;
